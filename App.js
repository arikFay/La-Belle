import * as React from "react";
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigations/AuthNavigator";

import AuthCode from "./screens/AuthCode";
import LoadingApp from "./screens/LoadingApp";

import { Provider, useSelector } from "react-redux";
import { store } from "./store";


const App = () => {
  const loading = useSelector((state) => state.auth.loading);
  const logging = useSelector((state) => state.auth.logging);

  const authState = () => {
    if (logging) {
      return (
        <AuthNavigator />
      )
    }
    else if (loading) {
      return (
        <LoadingApp />
      )
    }
    else {
      return (
        <AuthCode />
      )
    }
  };

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
            {authState()}
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
