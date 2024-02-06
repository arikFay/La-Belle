import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Header from './header';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();


const CustomTabBarBytton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -25,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 35,
                backgroundColor: 'rgba(216, 123, 140, 1)'
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // headerShown: false,
                header: ({ }) => (
                  <View
                  style={{
                    flex: 1,
                    position: 'absolute',
                    height: 80,
                    width: '100%',
                  }}
                  >
                    <Header />
                  </View>
                ),
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    elevation: 0,
                    backgroudColor: '#ffffff',
                    borderRadius: 15,
                    height: 65,
                    ...styles.shadow
                }
            }}
            initialRouteName="ראשי"
        >
            <Tab.Screen name="התראות" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}
                    >
                        <Image
                            source={require('../assets/bell.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#e32f45' : '#748c94',
                                fontSize: 12
                            }}
                        >
                            התראות
                        </Text>
                    </View>
                )
            }} />
            <Tab.Screen name="צ׳ט מקצועי" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}
                    >
                        <Image
                            source={require('../assets/chat.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#e32f45' : '#748c94',
                                fontSize: 12
                            }}
                        >
                            צ׳ט מקצועי
                        </Text>
                    </View>
                )
            }} />
            <Tab.Screen name="קניות" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/shopping.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: '#fff'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarBytton {...props} />
                    )
                }}
            />
            <Tab.Screen name="הדרכות" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}
                    >
                        <Image
                            source={require('../assets/tutorials.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#e32f45' : '#748c94',
                                fontSize: 12
                            }}
                        >
                            הדרכות
                        </Text>
                    </View>
                )
            }} />
            <Tab.Screen name="ראשי" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}
                    >
                        <Image
                            source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#e32f45' : '#748c94',
                                fontSize: 12
                            }}
                        >
                            ראשי
                        </Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    iphone14Screen: {
        backgroundColor: "#f0f1f3",
        flex: 1,
        width: "100%",
        height: 1979,
        overflow: "hidden",
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    }
})

export default BottomTabNavigator;