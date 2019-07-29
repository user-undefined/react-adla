import { all, fork } from "redux-saga/effects";
import discographies from "containers/DiscographiesLibrary/sagas";

export default function* rootSaga() {
  yield all([fork(discographies)]);
}
