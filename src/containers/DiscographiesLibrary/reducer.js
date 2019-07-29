import { handleAction } from "redux-actions";
import { createSelector } from "reselect";
import { fetchDiscographiesSuccess } from "./actions";

const DISCOGRAPHIES = "discographies";

const defaultState = [];

const discographiesReducer = handleAction(
  [fetchDiscographiesSuccess],
  (state, { payload: discographies }) => discographies,
  defaultState
);

export default { [DISCOGRAPHIES]: discographiesReducer };

export const discographiesSelector = state => state.discographies;
export const songsSelector = createSelector(
  discographiesSelector,
  discography => discography.map(({ song }) => song)
);
