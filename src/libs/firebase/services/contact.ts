import {
  serverTimestamp,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import {
  createDocRef,
  fetchData,
  contactCollection,
  CONTACT_COLLECTION,
} from "../index/db";
import type {
  ContactData,
  Contact,
  DeleteContactData,
} from "../../../types/user";
import { fetchUserByEmailApiRequest } from "./user";

type UpdateUserId = {
  id: string;
  email: string;
};

export async function createContactApiRequest(contact: ContactData) {
  const existingContact = await fetchContactByEmailApiRequest(contact.email);
  console.log({ existingContact });
  if (existingContact !== null) throw new Error("Contact already exist");

  const contactUser = await fetchUserByEmailApiRequest(contact.email);
  const newContact = await addDoc(contactCollection, {
    ...contact,
    photoUrl: "",
    userId: contactUser?.id ?? "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  const contactInfo = await fetchContactApiRequest(newContact.id);
  if (contactInfo === null) throw new Error("Contact Could not be fetched");

  return contactInfo;
}
export async function updateContactApiRequest(contact: Contact) {
  const contactInfo = await fetchContactApiRequest(contact.id);

  if (contactInfo === null) throw new Error("Contact Does Not Exist");

  if (contactInfo.ownerId !== contact.ownerId) {
    throw new Error("You cannot update this contact");
  }
  const contactRef = createDocRef(CONTACT_COLLECTION, contact.id);
  await updateDoc(contactRef, {
    // change this later to use only changed fields
    ...contactInfo,
    ...contact,
    updatedAt: serverTimestamp(),
  });

  return contact;
}
export async function deleteContactApiRequest(data: DeleteContactData) {
  const contactRef = createDocRef(CONTACT_COLLECTION, data.id);
  const contactDoc = await getDoc(contactRef);

  if (!contactDoc.exists) throw new Error("Contact Does Not Exist");

  const currentContactInfo = contactDoc.data();
  if (!currentContactInfo) throw new Error("Could Not Fetch Contact to update");

  if (data.userId !== currentContactInfo.userId) {
    throw new Error("You cannot delete this contact");
  }

  await deleteDoc(contactRef);
  return data;
}
export async function fetchContactsApiRequest(ownerId: string) {
  const fetchContactsQuery = query(
    contactCollection,
    where("ownerId", "==", ownerId)
  );

  return await fetchData<Contact>(fetchContactsQuery);
}
async function fetchContactApiRequest(contactId: string) {
  const contactRef = createDocRef(CONTACT_COLLECTION, contactId);
  const contactDoc = await getDoc(contactRef);

  if (!contactDoc.exists) return null;

  const contact = contactDoc.data();
  if (!contact) throw new Error("Could Not Fetch Contact Info");

  return { id: contactId, ...contact } as Contact;
}
export async function fetchContactByEmailApiRequest(email: string) {
  const fetchContactQuery = query(
    contactCollection,
    where("email", "==", email)
  );

  const res = await fetchData<Contact>(fetchContactQuery);
  if (res.length > 0) return res[0];
  return null;
}
export async function updateContactUserIdsApiRequest(data: UpdateUserId) {
  const fetchContactsQuery = query(
    contactCollection,
    where("email", "==", data.email),
    where("userId", "==", "")
  );

  const contacts = await fetchData<Contact>(fetchContactsQuery);

  for (const contact of contacts) {
    const contactRef = createDocRef(CONTACT_COLLECTION, contact.id);
    await updateDoc(contactRef, {
      userId: data.id,
      updatedAt: serverTimestamp(),
    });
  }
}
