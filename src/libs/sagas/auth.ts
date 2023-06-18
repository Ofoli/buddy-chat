import { takeLatest, all } from "redux-saga/effects";
import { combineWatchers } from "./root";

//handle user login
function* loginUser() {
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

  yield console.log("tru");
}

//====================
//---WATCHERS---------
//====================
function* watchUserLoginRequest() {
  yield takeLatest("LOGIN_PARTNER", loginUser);
}

function* authSaga() {
  const sagas = combineWatchers([watchUserLoginRequest]);
  yield all(sagas);
}

export default authSaga;
