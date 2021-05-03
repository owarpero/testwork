import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import SearchingBar from "./src/components/SearchingBar";
import posterDescription from "./src/components/searchResults/posterDescription";
import rootReducer from "./src/store/reducers";
import { watchFetchData } from "./src/store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  { searchReduser: { data: [] } },
  applyMiddleware(logger, sagaMiddleware)
);
sagaMiddleware.run(watchFetchData);
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Searching film" component={SearchingBar} />
          <Stack.Screen name="Film discription" component={posterDescription} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
