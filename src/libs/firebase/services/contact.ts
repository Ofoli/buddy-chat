import {
  serverTimestamp,
  setDoc,
  getDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  getDocs,
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
  DeleteContactType,
} from "../../../types/user";

export async function createContactApiRequest(contact: ContactData) {
  const newContact = await addDoc(contactCollection, {
    ...contact,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return { ...contact, id: newContact.id, photoUrl: "" };
}
export async function updateContactApiRequest(contact: Contact) {
  const contactRef = createDocRef(CONTACT_COLLECTION, contact.id);
  const contactDoc = await getDoc(contactRef);

  if (!contactDoc.exists) throw new Error("Contact Does Not Exist");

  const currentContactInfo = contactDoc.data();
  if (!currentContactInfo) throw new Error("Could Not Fetch Contact to update");

  if (contact.userId !== currentContactInfo.userId) {
    throw new Error("You cannot update this contact");
  }

  await setDoc(contactRef, {
    ...currentContactInfo,
    ...contact,
    updatedAt: serverTimestamp(),
  });

  return contact;
}
export async function deleteContactApiRequest(data: DeleteContactType) {
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
  const fetchContactQuery = query(
    contactCollection,
    where("userId", "==", userId)
  );

  return await fetchData<Contact>(fetchContactQuery);
}
