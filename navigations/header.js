import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';


const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity >
                <Image
                    source={require('../assets/image-1.png')}
                    style={styles.profileImage}
                />
                <View style={styles.notificationDot}></View>
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    resizeMode="cover"
                    source={require("../assets/labelle.png")}
                />
            </View>

            <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                <Image
                    style={styles.menuIcon}
                    resizeMode="cover"
                    source={require("../assets/menu.png")}
                />
            </TouchableOpacity>

        </View>

    )
}


const styles = StyleSheet.create({
    header: {
        top: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 20,
    },
    notificationDot: {
        width: 8,
        height: 8,
        backgroundColor: 'red',
        borderRadius: 4,
        position: 'absolute',
        top: -1,
        left: -0.5,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logoImage: {
        width: 120,
        height: 40,
        resizeMode: 'contain',
    },
    menuIcon: {
        width: 23,
        height: 20,
    },

    headerLayout: {
        height: 29,
    },

    avatar: {
        flexDirection: 'row-reverse', // Change to 'row-reverse' for LTR
        width: 32,
        height: 32,
        borderRadius: 16,
        resizeMode: 'cover',
        borderWidth: 1, // Border width
        borderColor: 'white', // Border color
    },
    text71: {
        // fontSize: 24,
        left: 360,
        top: 3,
        position: "absolute",
    },
    text72: {
        left: 2,
        fontSize: 20,
        color: Color.gray,
        fontFamily: FontFamily.fontAwesome6Pro,
        fontWeight: "300",
        textAlign: "left",
    },
    text72Position: {
        position: "absolute",
    },
    logo1Icon: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        left: 150,
    },
    notificationIcon: {
        top: 6,
        width: 8,
        height: 8,
        left: 0,
        position: "absolute",
    },
})

export default Header;