import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  fetchDiscographies,
  fetchDiscographiesSuccess,
  fetchDiscographiesFailure
} from "./actions";

import discographiesService from "services/Discographies";

function* onFetchDiscographies() {
  try {
    const { discographies } = yield call(discographiesService.fetch);
    console.log(discographies);
    yield put(fetchDiscographiesSuccess(discographies));
  } catch (error) {
    yield put(fetchDiscographiesFailure(error));
  }
}

function* watchDiscographies() {
  yield takeEvery(fetchDiscographies, onFetchDiscographies);
}

export default function* watch() {
  yield all([watchDiscographies()]);
}
