import { takeLatest, all, put } from "redux-saga/effects";
import { combineWatchers } from "./root";
import { startAction, stopAction, addRequestError } from "../redux/ducks/ui";
import * as actions from "../redux/ducks/contact";
import {
  createContactApiRequest,
  updateContactApiRequest,
  deleteContactApiRequest,
  fetchContactsApiRequest,
} from "../firebase/services/contact";
import type { Contact, DeleteContactType } from "../../types/user";
import type { FirebaseError } from "firebase/app";

function* createContact({
  payload,
}: ReturnType<typeof actions.requestAddContact>) {
  try {
    yield put(startAction(actions.ADD_CONTACT_REQUESTED));
    const contact: Contact = yield createContactApiRequest(payload);
    yield put(actions.receiveAddContactSuccess(contact));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: actions.ADD_CONTACT_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(actions.ADD_CONTACT_REQUESTED));
  }
}
function* updateContact({
  payload,
}: ReturnType<typeof actions.requestUpdateContact>) {
  try {
    yield put(startAction(actions.UPDATE_CONTACT_REQUESTED));
    const contact: Contact = yield updateContactApiRequest(payload);
    yield put(actions.receiveUpdateContactSuccess(contact));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: actions.UPDATE_CONTACT_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(actions.UPDATE_CONTACT_REQUESTED));
  }
}
function* deleteContact({
  payload,
}: ReturnType<typeof actions.requestDeleteContact>) {
  try {
    yield put(startAction(actions.DELETE_CONTACT_REQUESTED));
    const contact: DeleteContactType = yield deleteContactApiRequest(payload);
    yield put(actions.receiveDeleteContactSuccess(contact.id));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: actions.DELETE_CONTACT_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(actions.DELETE_CONTACT_REQUESTED));
  }
}

function* fetchContacts({
  payload,
}: ReturnType<typeof actions.requestFetchContacts>) {
  try {
    yield put(startAction(actions.FETCH_CONTACTS_REQUESTED));
    const contacts: Contact[] = yield fetchContactsApiRequest(payload);
    yield put(actions.receiveFetchContactsSuccess(contacts));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: actions.FETCH_CONTACTS_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(actions.FETCH_CONTACTS_REQUESTED));
  }
}

/*
===== CONTACT WATCHERS =====
*/

function* watchCreateContactRequest() {
  yield takeLatest(actions.ADD_CONTACT_REQUESTED, createContact);
}

function* watchUpdateContactRequest() {
  yield takeLatest(actions.UPDATE_CONTACT_REQUESTED, updateContact);
}
function* watchDeleteContactRequest() {
  yield takeLatest(actions.DELETE_CONTACT_REQUESTED, deleteContact);
}

function* watchfetchContactsRequest() {
  yield takeLatest(actions.FETCH_CONTACTS_REQUESTED, fetchContacts);
}

export default function* contactSaga() {
  const sagas = combineWatchers([
    watchCreateContactRequest,
    watchUpdateContactRequest,
    watchDeleteContactRequest,
    watchfetchContactsRequest,
  ]);
  yield all(sagas);
}
