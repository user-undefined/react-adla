import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Songs from "./Songs";

import { songsSelector } from "./reducer";
import { fetchMusic } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(fetchMusic, dispatch)
  };
}

function mapStateToProps(state) {
  console.log(songsSelector(state));
  return {
    songs: songsSelector(state)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
