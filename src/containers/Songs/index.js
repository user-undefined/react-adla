import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Songs from "./Songs";

import { songsSelector } from "./reducer";
import { fetchSongs } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(fetchSongs, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    songs: songsSelector(state)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
