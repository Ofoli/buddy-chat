import { takeLatest, all } from "redux-saga/effects";
import { combineWatchers } from "./root";
import {
  startAction,
  stopAction,
  addRequestError,
  removeRequestError,
  addRequestSuccessMessage,
  removeRequestSuccessMessage,
} from "../redux/ducks/ui";
import {
  LOGIN_REQUESTED,
  REGISTER_REQUESTED,
  loginRequested,
  loginSuccessful,
  registerRequested,
  registerSuccessful,
} from "../redux/ducks/auth";

//handle user login
function* loginUser({ payload }: ReturnType<typeof loginRequested>) {
  //   const { receiveLoginSuccess } = authfxns;
  //   try {
  //     yield put(startAction(LOGIN_PARTNER.EMAIL_PASSWORD_REQUESTED));
  //     const {
  //       data: { authToken, data },
  //     } = yield loginUserAPIrequest("/login", payload);
  //     const { id, email } = data;
  //     yield put(receiveLoginSuccess({ authToken, id, email, loggedIn: true }));
  //   } catch (err) {
  //     yield put(
  //       addRequestError({
  //         request: LOGIN_PARTNER.EMAIL_PASSWORD_REQUESTED,
  //         error: err.response.data,
  //       })
  //     );
  //   } finally {
  //     yield put(stopAction(LOGIN_PARTNER.EMAIL_PASSWORD_REQUESTED));
  //   }

  yield console.log("logging in with data....", payload);
}

function* registerUser({ payload }: ReturnType<typeof registerRequested>) {
  yield console.log("registering with data....", payload);
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

function* authSaga() {
  const sagas = combineWatchers([watchLoginRequest, watchRegiserRequest]);
  yield all(sagas);
}

export default authSaga;
