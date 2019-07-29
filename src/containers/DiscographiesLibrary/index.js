import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DiscographiesLibrary from "./DiscographiesLibrary";

import { songsSelector } from "./reducer";
import { fetchDiscographies } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(fetchDiscographies, dispatch)
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
)(DiscographiesLibrary);
