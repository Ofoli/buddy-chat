import type { ContactState } from "../../../types/store-slices";
import type {
  Contact,
  ContactData,
  DeleteContactData,
  UpdateContactData,
} from "../../../types/user";

type ContactPayload = boolean | string | Contact | Contact[];

export const SELECT_CONTACT = "SELECT_CONTACT";
export const CLEAR_SELECTED_CONTACT = "CLEAR_SELECTED_CONTACT";

export const ADD_CONTACT_REQUESTED = "ADD_CONTACT_REQUESTED";
export const UPDATE_CONTACT_REQUESTED = "UPDATE_CONTACT_REQUESTED";
export const DELETE_CONTACT_REQUESTED = "DELETE_CONTACT_REQUESTED";
export const FECTCH_CONTACT_REQUESTED = "FETCH_CONTACT_REQUESTED";
export const FETCH_CONTACTS_REQUESTED = "FETCH_CONTACTS_REQUESTED";
export const IS_CONTACT_ACTIVE_REQUESTED = "IS_CONTACT_ACTIVE_REQUESTED";

export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const IS_CONTACT_ACTIVE_SUCCESS = "IS_CONTACT_ACTIVE_SUCCESS";

export const clearSelectedContact = () => ({ type: CLEAR_SELECTED_CONTACT });
export const setSelectedContact = (id: string) => ({
  type: SELECT_CONTACT,
  payload: id,
});

export const requestAddContact = (payload: ContactData) => ({
  type: ADD_CONTACT_REQUESTED,
  payload,
});
export const requestUpdateContact = (payload: UpdateContactData) => ({
  type: UPDATE_CONTACT_REQUESTED,
  payload,
});
export const requestDeleteContact = (payload: DeleteContactData) => ({
  type: DELETE_CONTACT_REQUESTED,
  payload,
});
export const requestFetchContact = (email: string) => ({
  type: FECTCH_CONTACT_REQUESTED,
  payload: email,
});
export const requestFetchContacts = (userId: string) => ({
  type: FETCH_CONTACTS_REQUESTED,
  payload: userId,
});
export const requestIsContactActive = (email: string) => ({
  type: IS_CONTACT_ACTIVE_REQUESTED,
  payload: email,
});

export const receiveAddContactSuccess = (payload: Contact) => ({
  type: ADD_CONTACT_SUCCESS,
  payload,
});
export const receiveUpdateContactSuccess = (payload: Contact) => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload,
});
export const receiveDeleteContactSuccess = (id: string) => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: id,
});
export const receiveFetchContactsSuccess = (payload: Contact[]) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload,
});
export const receiveIsContactActiveSuccess = (isActive: boolean) => ({
  type: IS_CONTACT_ACTIVE_SUCCESS,
  payload: isActive,
});

const initialState = {
  selectedContactId: "",
  isSelectedContactActive: false,
  contacts: [],
};

export default function contactReducer(
  state: ContactState = initialState,
  action: { type: string; payload: ContactPayload }
): ContactState {
  const { type, payload } = action;
  switch (type) {
    case SELECT_CONTACT: {
      return { ...state, selectedContactId: payload as string };
    }
    case CLEAR_SELECTED_CONTACT: {
      return { ...state, selectedContactId: "" };
    }
    case ADD_CONTACT_SUCCESS: {
      const contact = payload as Contact;
      return { ...state, contacts: [...state.contacts, contact] };
    }
    case UPDATE_CONTACT_SUCCESS: {
      const updatedContact = payload as Contact;
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        ),
      };
    }
    case DELETE_CONTACT_SUCCESS: {
      const deletedContactId = payload as string;
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== deletedContactId
        ),
      };
    }
    case FETCH_CONTACTS_SUCCESS: {
      const contacts = payload as Contact[];
      return { ...state, contacts };
    }
    case IS_CONTACT_ACTIVE_SUCCESS: {
      return { ...state, isSelectedContactActive: payload as boolean };
    }
    default:
      return state;
  }
}
