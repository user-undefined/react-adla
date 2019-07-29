import { combineReducers } from "redux";
import discographiesReducer from "containers/DiscographiesLibrary/reducer";

const rootReducer = combineReducers({
  ...discographiesReducer
});

export default rootReducer;
