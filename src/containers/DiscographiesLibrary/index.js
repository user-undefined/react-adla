import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DiscographiesLibrary from "./DiscographiesLibrary";

import {
  songsSelector,
  albumsAggregateByBandSelector,
  songsAggregateByAlbumSelector,
  discographiesAggregatedByBandArtistSelector
} from "./reducer";
import { fetchDiscographies } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(fetchDiscographies, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    songs: songsSelector(state),
    songsByAlbum: songsAggregateByAlbumSelector(state),
    albumsByBand: albumsAggregateByBandSelector(state),
    aggregate: discographiesAggregatedByBandArtistSelector(state)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscographiesLibrary);
