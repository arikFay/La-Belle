import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    {console.log("\n\n", "DrawerNavigator", "\n\n")}
    return (
        <Drawer.Navigator
        drawerContent={ props => <CustomDrawer {...props}/> }
        screenOptions={{
            drawerPosition: 'right',
            headerShown: false,
        }}
        >
           <Drawer.Screen name={ROUTES.HOME_TAB} component={BottomTabNavigator} />
           <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={HomeScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;