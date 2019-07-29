import { combineReducers } from "redux";
import songsReducer from "containers/Songs/reducer";

const rootReducer = combineReducers({
  ...songsReducer
});

export default rootReducer;
