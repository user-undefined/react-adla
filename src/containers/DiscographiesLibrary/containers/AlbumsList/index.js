import { connect } from "react-redux";

import AlbumsList from "./AlbumsList";

import { discographiesAggregatedByBandArtistSelector } from "./../../reducer";

function mapStateToProps(state) {
  return {
    items: discographiesAggregatedByBandArtistSelector(state)
  };
}
export default connect(mapStateToProps)(AlbumsList);
