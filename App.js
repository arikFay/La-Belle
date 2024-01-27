const Stack = createNativeStackNavigator();
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Tabs from './navigation/tabs';

import AuthCode from "./screens/AuthCode";
import LoadingApp from "./screens/LoadingApp";
import HomeScreen from "./screens/HomeScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";



const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const loading = useSelector((state) => state.auth.loading);
  const logging = useSelector((state) => state.auth.logging);

  const authState = () => {
    if (logging) {
      return (
        <Tabs />
      )
    }
    else if (loading) {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="LoadingApp"
            component={LoadingApp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )
    }
    else {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="AuthCode"
            component={AuthCode}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
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
