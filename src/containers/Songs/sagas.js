import { call, put, takeEvery, all } from "redux-saga/effects";
import { fetchSongsSuccess, fetchSongsFailure, fetchSongs } from "./actions";

import songsService from "services/Songs";

function* onFetchSongs() {
  try {
    const { songs } = yield call(songsService.fetchSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error));
  }
}

function* watchSongs() {
  yield takeEvery(fetchSongs, onFetchSongs);
}

export default function* watch() {
  yield all([watchSongs()]);
}
