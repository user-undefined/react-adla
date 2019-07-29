import { all, fork } from "redux-saga/effects";
import songs from "containers/Songs/sagas";

export default function* rootSaga() {
  yield all([fork(songs)]);
}
