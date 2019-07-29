import { call, put, takeEvery, all } from "redux-saga/effects";
import { fetchMusicFailure, fetchMusicSuccess, fetchMusic } from "./actions";

import musicService from "services/Music";

function* onFetchMusic() {
  try {
    const { music } = yield call(musicService.fetchMusic);
    yield put(fetchMusicSuccess(music));
  } catch (error) {
    yield put(fetchMusicFailure(error));
  }
}

function* watchMusic() {
  yield takeEvery(fetchMusic, onFetchMusic);
}

export default function* watch() {
  yield all([watchMusic()]);
}
