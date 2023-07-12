import type { ContactState } from "../../../types/store-slices";
import type {
  Contact,
  ContactData,
  DeleteContactType,
} from "../../../types/user";

export const SELECT_CONTACT = "SELECT_CONTACT";
export const CLEAR_SELECTED_CONTACT = "CLEAR_SELECTED_CONTACT";

export const ADD_CONTACT_REQUESTED = "ADD_CONTACT_REQUESTED";
export const UPDATE_CONTACT_REQUESTED = "UPDATE_CONTACT_REQUESTED";
export const DELETE_CONTACT_REQUESTED = "DELETE_CONTACT_REQUESTED";
export const FETCH_CONTACTS_REQUESTED = "FETCH_CONTACTS_REQUESTED";

export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";

export const clearSelectedContact = () => ({ type: CLEAR_SELECTED_CONTACT });
export const setSelectedContact = (id: string) => ({
  type: SELECT_CONTACT,
  payload: id,
});

export const requestAddContact = (payload: ContactData) => ({
  type: ADD_CONTACT_REQUESTED,
  payload,
});
export const requestUpdateContact = (payload: Contact) => ({
  type: UPDATE_CONTACT_REQUESTED,
  payload,
});
export const requestDeleteContact = (payload: DeleteContactType) => ({
  type: DELETE_CONTACT_REQUESTED,
  payload,
});
export const requestFetchContacts = (userId: string) => ({
  type: FETCH_CONTACTS_REQUESTED,
  payload: userId,
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

const initialState = {
  selectedContactId: "",
  contacts: [],
};

export default function contactReducer(
  state: ContactState = initialState,
  action: { type: string; payload: string | Contact | Contact[] }
) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_CONTACT: {
      return { ...state, selectedContactId: payload };
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

    default:
      return state;
  }
}
