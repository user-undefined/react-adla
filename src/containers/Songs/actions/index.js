import { createAction } from "redux-actions";
import { FETCH_SONGS, FETCH_SONGS_FAILURE, FETCH_SONGS_SUCESS } from "./types";

export const fetchSongs = createAction(FETCH_SONGS);
export const fetchSongsSuccess = createAction(FETCH_SONGS_FAILURE);
export const fetchSongsFailure = createAction(FETCH_SONGS_SUCESS);
