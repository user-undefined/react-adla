import { createAction } from "redux-actions";
import {
  FETCH_DISCOGRAPHIES,
  FETCH_DISCOGRAPHIES_FAILURE,
  FETCH_DISCOGRAPHIES_SUCESS
} from "./types";

export const fetchDiscographies = createAction(FETCH_DISCOGRAPHIES);
export const fetchDiscographiesSuccess = createAction(
  FETCH_DISCOGRAPHIES_FAILURE
);
export const fetchDiscographiesFailure = createAction(
  FETCH_DISCOGRAPHIES_SUCESS
);
