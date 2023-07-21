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
  UpdateContactData,
  DeleteContactData,
} from "../../../types/user";
import { fetchUserByEmailApiRequest } from "./user";

export async function createContactApiRequest(contact: ContactData) {
  const isContactActive = isContactActiveApiRequest(contact.email);

  const newContact = await addDoc(contactCollection, {
    ...contact,
    photoUrl: "",
    isActive: isContactActive,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  const newContactRef = createDocRef(CONTACT_COLLECTION, newContact.id);
  const newContactDoc = await getDoc(newContactRef);
  const newContactInfo = newContactDoc.data();

  return { id: newContactDoc.id, ...newContactInfo } as Contact;
}
export async function updateContactApiRequest(data: UpdateContactData) {
  const { userId, contact } = data;
  const contactRef = createDocRef(CONTACT_COLLECTION, contact.id);
  const contactDoc = await getDoc(contactRef);

  if (!contactDoc.exists) throw new Error("Contact Does Not Exist");

  const currentContactInfo = contactDoc.data();
  if (!currentContactInfo) throw new Error("Could Not Fetch Contact to update");

  if (currentContactInfo.ownerId !== userId) {
    throw new Error("You cannot update this contact");
  }

  await updateDoc(contactRef, {
    ...currentContactInfo,
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
export async function fetchContactsApiRequest(userId: string) {
  const fetchContactsQuery = query(
    contactCollection,
    where("userId", "==", userId)
  );

  return await fetchData<Contact>(fetchContactsQuery);
}

export async function fetchContactApiRequest(email: string) {
  const fetchContactQuery = query(
    contactCollection,
    where("email", "==", email)
  );

  const res = await fetchData<Contact>(fetchContactQuery);
  if (res.length === 1) return res[1];
  return null;
}

export async function isContactActiveApiRequest(email: string) {
  const user = await fetchUserByEmailApiRequest(email);
  return user !== null;
}
