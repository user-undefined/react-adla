import { handleAction } from "redux-actions";
import { createSelector } from "reselect";
import { fetchSongsSuccess } from "./actions";

const SONGS = "songs";

const defaultState = [];

const songsReducer = handleAction(
  [fetchSongsSuccess],
  (state, { payload: songs }) => songs,
  defaultState
);

export default { [SONGS]: songsReducer };

export const songsSelector = state => state.songs;
