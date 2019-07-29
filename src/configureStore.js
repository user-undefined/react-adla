import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

export default function configureStore(initialState, reducers) {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware))
  );

  const runSaga = sagaMiddleware.run;
  return { store, runSaga };
}
