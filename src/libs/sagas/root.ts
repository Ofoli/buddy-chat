import { AllEffect, ForkEffect, all, fork } from "redux-saga/effects";
import authSaga from "./auth";
import contactSaga from "./contact";

type CombineSagasType = () => Generator<AllEffect<unknown>, void, unknown>;
type CombineWatchersType = () => Generator<ForkEffect<never>, void, unknown>;

const combineSagas = (sagas: CombineSagasType[]) =>
  sagas.map((saga) => fork(saga));
export const combineWatchers = (sagas: CombineWatchersType[]) =>
  sagas.map((saga) => fork(saga));

export default function* rootSaga() {
  const sagas = combineSagas([authSaga, contactSaga]);
  yield all(sagas);
}
