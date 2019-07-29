import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

import configureStore from "./configureStore";

import rootReducer from "./reducer";
import rootSaga from "./sagas";

import App from "./App";

const { store, runSaga } = configureStore({}, rootReducer);
runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
