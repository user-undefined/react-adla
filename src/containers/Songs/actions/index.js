import { createAction } from "redux-actions";
import { FETCH_MUSIC, FETCH_MUSIC_FAILURE, FETCH_MUSIC_SUCESS } from "./types";

export const fetchMusic = createAction(FETCH_MUSIC);
export const fetchMusicSuccess = createAction(FETCH_MUSIC_FAILURE);
export const fetchMusicFailure = createAction(FETCH_MUSIC_SUCESS);
