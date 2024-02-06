import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import AuthCode from '../screens/AuthCode';
import HomeScreen from '../screens/HomeScreen';
import LoadingApp from '../screens/LoadingApp';

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Header from './header';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      // header: ({ }) => (
      //   <View
      //   style={{
      //     flex: 1,
      //     position: 'absolute',
      //     height: 80,
      //     width: '100%',
      //   }}
      //   >
      //     <Header />
      //   </View>
      // ),
    }}
    initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;