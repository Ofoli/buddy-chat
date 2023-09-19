import { takeLatest, all, put } from "redux-saga/effects";
import { combineWatchers } from "./root";
import { getBucketError } from "../firebase/index/bucket";
import {
  startAction,
  stopAction,
  addRequestError,
  addRequestSuccessMessage,
} from "../redux/ducks/ui";
import { requestUpdateContactsWithUserId } from "../redux/ducks/contact";
import {
  LOGIN_REQUESTED,
  LOGOUT_REQUESTED,
  REGISTER_REQUESTED,
  PROFILE_UPLOAD_REQUESTED,
  FULLNAME_UPDATE_REQUESTED,
  logoutSuccessful,
  loginRequested,
  loginSuccessful,
  registerRequested,
  registerSuccessful,
  requestProfileUpload,
  receiveProfileUploadSuccess,
  requestFullnameUpdate,
  receiveFullnameUpdateSuccess,
} from "../redux/ducks/auth";
import {
  registerUserApiRequest,
  loginUserApiRequest,
  logoutUserApiRequest,
  uploadProfileApiRequest,
  updateUserFullnameApiRequest,
} from "../firebase/services/user";
import type { User } from "../../types/user";
import type { FirebaseError } from "firebase/app";

//handle user login
function* loginUser({ payload }: ReturnType<typeof loginRequested>) {
  try {
    yield put(startAction(LOGIN_REQUESTED));
    const user: User = yield loginUserApiRequest(payload);
    yield put(loginSuccessful(user));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: LOGIN_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(LOGIN_REQUESTED));
  }
}

function* registerUser({ payload }: ReturnType<typeof registerRequested>) {
  try {
    yield put(startAction(REGISTER_REQUESTED));
    const user: User = yield registerUserApiRequest(payload);
    yield put(registerSuccessful(user));
    yield put(requestUpdateContactsWithUserId(user));
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: REGISTER_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(REGISTER_REQUESTED));
  }
}

function* logoutUser() {
  try {
    yield logoutUserApiRequest();
    yield put(logoutSuccessful());
  } catch (err) {
    console.log(err);
  }
}
function* uploadProfile({ payload }: ReturnType<typeof requestProfileUpload>) {
  try {
    yield put(startAction(PROFILE_UPLOAD_REQUESTED));
    const photoUrl: string = yield uploadProfileApiRequest(payload);
    yield put(receiveProfileUploadSuccess(photoUrl));
    yield put(
      addRequestSuccessMessage({
        action: PROFILE_UPLOAD_REQUESTED,
        message: "Profile Updated Successfully",
      })
    );
  } catch (err) {
    const { code } = err as FirebaseError;
    const message = getBucketError(code);
    yield put(
      addRequestError({
        action: PROFILE_UPLOAD_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(PROFILE_UPLOAD_REQUESTED));
  }
}

function* updateUserFullname({
  payload,
}: ReturnType<typeof requestFullnameUpdate>) {
  try {
    yield put(startAction(FULLNAME_UPDATE_REQUESTED));
    const fullname: string = yield updateUserFullnameApiRequest(payload);
    yield put(receiveFullnameUpdateSuccess(fullname));
    yield put(
      addRequestSuccessMessage({
        action: FULLNAME_UPDATE_REQUESTED,
        message: "Fullname Updated Successfully",
      })
    );
  } catch (err) {
    const { message } = err as FirebaseError;
    yield put(
      addRequestError({
        action: FULLNAME_UPDATE_REQUESTED,
        message,
      })
    );
  } finally {
    yield put(stopAction(FULLNAME_UPDATE_REQUESTED));
  }
}

//====================
//---WATCHERS---------
//====================
function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
}
function* watchRegiserRequest() {
  yield takeLatest(REGISTER_REQUESTED, registerUser);
}

function* watchLogoutRequest() {
  yield takeLatest(LOGOUT_REQUESTED, logoutUser);
}
function* watchProfileUploadRequest() {
  yield takeLatest(PROFILE_UPLOAD_REQUESTED, uploadProfile);
}
function* watchUpdateFullnameRequest() {
  yield takeLatest(FULLNAME_UPDATE_REQUESTED, updateUserFullname);
}

function* authSaga() {
  const sagas = combineWatchers([
    watchLoginRequest,
    watchRegiserRequest,
    watchLogoutRequest,
    watchProfileUploadRequest,
    watchUpdateFullnameRequest,
  ]);
  yield all(sagas);
}

export default authSaga;
