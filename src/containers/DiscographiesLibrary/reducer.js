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

export const songsAggregateByAlbumSelector = createSelector(
  discographiesSelector,
  discographies =>
    discographies.reduce((aggregate, discography) => {
      if (aggregate[discography.album]) {
        aggregate[discography.album].push(discography.song);
      } else {
        aggregate[discography.album] = [discography.song];
      }
      return aggregate;
    }, {})
);

export const albumsAggregateByBandSelector = createSelector(
  discographiesSelector,
  discographies =>
    discographies.reduce((aggregate, discography) => {
      if (aggregate[discography.band]) {
        if (!aggregate[discography.band].includes(discography.album)) {
          aggregate[discography.band].push(discography.album);
        }
      } else {
        aggregate[discography.band] = [discography.album];
      }
      return aggregate;
    }, {})
);

export const discographiesAggregatedByBandArtistSelector = createSelector(
  songsAggregateByAlbumSelector,
  albumsAggregateByBandSelector,
  (songsByAlbum, albumsByBand) =>
    Object.keys(albumsByBand).reduce((aggregate, band) => {
      return aggregate.concat(
        albumsByBand[band].map(album => ({
          band,
          album,
          songs: songsByAlbum[album]
        }))
      );
    }, [])
);

export const discographiesAggregateByBandSelector = createSelector(
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
