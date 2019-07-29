import { handleAction } from "redux-actions";
import { createSelector } from "reselect";
import { fetchMusicSuccess } from "./actions";

const MUSIC = "music";

const defaultState = [];

const musicReducer = handleAction(
  [fetchMusicSuccess],
  (state, { payload: music }) => music,
  defaultState
);

export default { [MUSIC]: musicReducer };

export const musicSelector = state => state.music;
export const songsSelector = createSelector(
  musicSelector,
  music => music.map(({ song }) => song)
);
