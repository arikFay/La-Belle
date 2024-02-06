import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

import Svg, { Path, Defs, Pattern, Use } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={83}
    height={83}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      stroke="#fff"
      d="M-5.181-2.739h94.338v94.338H-5.181z"
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use transform="scale(.00195)" />
      </Pattern>
    </Defs>
  </Svg>
)

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView style={styles.drawerStyle}>
        <View>
            <SvgComponent />
        </View>
        <View>
            <DrawerItemList {...props}/>
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
        // top: 35,
        // left: 324,
        // height: 85,
        // width: 85,
        // position: "absolute",
    }
})