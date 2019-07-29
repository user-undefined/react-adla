import { handleAction } from "redux-actions";
import { createSelector } from "reselect";
import { fetchDiscographiesSuccess } from "./actions";
import DiscographiesLibrary from ".";

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
  discographies => discographies.map(({ song }) => song)
);

export const discographiesAggregateByBand = createSelector(
  discographiesSelector,
  discographies =>
    discographies.reduce((aggregate, discography) => {
      if (aggregate[discography.band]) {
        aggregate[discography.band].push({
          album: discography.album,
          song: discography.song
        });
      } else {
        aggregate[discography.band] = [
          { album: discography.album, song: discography.song }
        ];
      }
      return aggregate;
    }, {})
);
