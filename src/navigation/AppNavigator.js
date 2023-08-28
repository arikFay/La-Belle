import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { useTheme } from 'react-native-paper';
import Icon from './Icon';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import PersonalAreaScreen from '../screens/PersonalAreaScreen';
import OrdersScreen from '../screens/OrdersScreen';
import Inmond from '../screens/Inmond';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
  const activeTintColor = theme.colors.primary;
  const inactiveTintColor = 'gray';

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Shop') {
          iconName = 'cart-outline';
        } else if (route.name === 'Bag') {
          iconName = 'briefcase-outline';
        } else if (route.name === 'Profile') {
          iconName = 'account-outline';
        } else if (route.name === 'INMOD') {
          iconName = 'diamond-stone';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Bag" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={PersonalAreaScreen} />
      <Tab.Screen name="INMOD" component={Inmond} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
