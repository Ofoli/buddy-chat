import { takeLatest, all, put } from "redux-saga/effects";
import { combineWatchers } from "./root";
import { startAction, stopAction, addRequestError } from "../redux/ducks/ui";
import * as actions from "../redux/ducks/chat";
import {
  createChatApiRequest,
  fetchChatHistoryApiRequest,
  fetchRecentChatsApiRequest,
} from "../firebase/services/chat";
import type { Chat } from "../../types/user";
import type { FirebaseError } from "firebase/app";

function* createChats({
  payload,
}: ReturnType<typeof actions.requestCreateChat>) {
  try {
    yield put(startAction(actions.CREATE_CHAT_REQUESTED));
    const chat: Chat = yield createChatApiRequest(payload);
    yield put(actions.receiveCreateChat(chat));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: actions.CREATE_CHAT_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(actions.CREATE_CHAT_REQUESTED));
  }
}

function* fetchChatHistory({
  payload,
}: ReturnType<typeof actions.requestFetchChats>) {
  try {
    yield put(startAction(actions.FETCH_CHATS_REQUESTED));
    const chats: Chat[] = yield fetchChatHistoryApiRequest(payload);
    yield put(actions.receiveFetchChats(chats));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: actions.FETCH_CHATS_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(actions.FETCH_CHATS_REQUESTED));
  }
}
function* fetchRecentChats({
  payload,
}: ReturnType<typeof actions.requestFetchRecentChats>) {
  try {
    yield put(startAction(actions.FETCH_RECENT_CHATS_REQUESTED));
    const chats: Chat[] = yield fetchRecentChatsApiRequest(payload);
    yield put(actions.receiveFetchRecentChats(chats));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: actions.FETCH_RECENT_CHATS_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(actions.FETCH_RECENT_CHATS_REQUESTED));
  }
}
/*
===== CHAT WATCHERS =====
*/

function* watchCreateChatRequest() {
  yield takeLatest(actions.CREATE_CHAT_REQUESTED, createChats);
}

function* watchFetchChatHistoryRequest() {
  yield takeLatest(actions.FETCH_CHATS_REQUESTED, fetchChatHistory);
}
function* watchFetchRecentChatsRequest() {
  yield takeLatest(actions.FETCH_RECENT_CHATS_REQUESTED, fetchRecentChats);
}

export default function* chatSaga() {
  const sagas = combineWatchers([
    watchCreateChatRequest,
    watchFetchChatHistoryRequest,
    watchFetchRecentChatsRequest,
  ]);
  yield all(sagas);
}
