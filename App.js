import React from "react";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import SearchingBar from "./src/components/SearchingBar";
import rootReducer from "./src/store/reducers";
import { watchFetchData } from "./src/store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  { searchReduser: { data: [] } },
  applyMiddleware(logger, sagaMiddleware)
);
sagaMiddleware.run(watchFetchData);

export default function App() {
  return (
    <Provider store={store}>
      <SearchingBar></SearchingBar>
    </Provider>
  );
}
