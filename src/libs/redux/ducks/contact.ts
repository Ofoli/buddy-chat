import type { ContactState } from "../../../types/store-slices";
import type {
  Contact,
  ContactData,
  DeleteContactData,
  User,
} from "../../../types/user";

type ContactPayload = string | Contact | Contact[];

export const ADD_CONTACT_REQUESTED = "ADD_CONTACT_REQUESTED";
export const UPDATE_CONTACT_REQUESTED = "UPDATE_CONTACT_REQUESTED";
export const DELETE_CONTACT_REQUESTED = "DELETE_CONTACT_REQUESTED";
export const FETCH_CONTACTS_REQUESTED = "FETCH_CONTACTS_REQUESTED";
export const UPDATE_CONTACTS_WITH_USERID_REQUESTED =
  "UPDATE_CONTACTS_WITH_USERID_REQUESTED";

const ADD_CONTACT_SUCCESSFUL = "ADD_CONTACT_SUCCESSFUL";
const UPDATE_CONTACT_SUCCESSFUL = "UPDATE_CONTACT_SUCCESSFUL";
const DELETE_CONTACT_SUCCESSFUL = "DELETE_CONTACT_SUCCESSFUL";
const FETCH_CONTACTS_SUCCESSFUL = "FETCH_CONTACTS_SUCCESSFUL";

export const requestAddContact = (payload: ContactData) => ({
  type: ADD_CONTACT_REQUESTED,
  payload,
});
export const requestUpdateContact = (payload: Contact) => ({
  type: UPDATE_CONTACT_REQUESTED,
  payload,
});
export const requestDeleteContact = (payload: DeleteContactData) => ({
  type: DELETE_CONTACT_REQUESTED,
  payload,
});
export const requestFetchContacts = (userId: string) => ({
  type: FETCH_CONTACTS_REQUESTED,
  payload: userId,
});
export const requestUpdateContactsWithUserId = (user: User) => ({
  type: UPDATE_CONTACTS_WITH_USERID_REQUESTED,
  payload: user,
});

export const receiveAddContactSuccess = (payload: Contact) => ({
  type: ADD_CONTACT_SUCCESSFUL,
  payload,
});
export const receiveUpdateContactSuccess = (payload: Contact) => ({
  type: UPDATE_CONTACT_SUCCESSFUL,
  payload,
});
export const receiveDeleteContactSuccess = (id: string) => ({
  type: DELETE_CONTACT_SUCCESSFUL,
  payload: id,
});
export const receiveFetchContactsSuccess = (payload: Contact[]) => ({
  type: FETCH_CONTACTS_SUCCESSFUL,
  payload,
});

const initialState: ContactState = [];

export default function contactReducer(
  state = initialState,
  action: { type: string; payload: ContactPayload }
): ContactState {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT_SUCCESSFUL: {
      const contact = payload as Contact;
      return [...state, contact];
    }
    case UPDATE_CONTACT_SUCCESSFUL: {
      const updatedContact = payload as Contact;
      const updatedContacts = state.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      return updatedContacts;
    }
    case DELETE_CONTACT_SUCCESSFUL: {
      const deletedContactId = payload as string;
      const updatedContacts = state.filter(
        (contact) => contact.id !== deletedContactId
      );
      return updatedContacts;
    }
    case FETCH_CONTACTS_SUCCESSFUL: {
      return payload as Contact[];
    }
    default:
      return state;
  }
}
