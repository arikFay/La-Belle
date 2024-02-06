import { ImageBackground, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Color, FontFamily, FontSize } from '../GlobalStyles';


import Svg, { Path, Defs, Pattern, Use } from "react-native-svg"

const { width } = Dimensions.get('screen')

const CustomDrawer = props => {
    return (
        <DrawerContentScrollView style={styles.drawerStyle}>
            <View style={{ height: 140, flexDirection: 'row-reverse' }}>
                <Image
                    style={styles.profileImage}
                    resizeMode="cover"
                    source={require("../assets/imageProfile.jpg")} />

                <View style={styles.profileTitle}>
                    <Text style={[styles.title, styles.textTypo]}>נאווה ירושלמי</Text>
                    <Text style={[styles.subTitle, styles.textTypo]}>מודל היופי בע”מ</Text>
                    </View>
            </View>
            <View>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: Color.gray,
        flex: 1,
        width: "100%",
        height: 920,
        overflow: "hidden",
    },
    profileImage: {
        left: "10%",
        height: 85,
        width: 85,
        borderRadius: 85 / 2,
        marginLeft: "10%"
        // position: "absolute",
    },
    profileTitle: {
        top: 85 / 4,
    },
    textTypo: {
      color: Color.colorWhite,
      fontFamily: 'OpenSansHebrew-Regular',
      fontWeight: "700",
    },
    title: {
        fontSize: 22,
    },
    subTitle: {
        fontSize: 16,
        direction: 'rtl',
        fontFamily: FontFamily.openSansHebrew,
        textAlign: "left",

    }
})