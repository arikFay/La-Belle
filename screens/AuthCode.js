import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";
import { fetchUserData } from '../slices/authSlice';

const AuthCode = () => {
    const dispatch = useDispatch();
    const [number, onChangeNumber] = React.useState('');

  return (
    <LinearGradient
      style={styles.authCode}
      locations={[0, 1, 1, 1, 1]}
      colors={["#f1f1f1", "#fff", "#cfcfcf", "rgba(0, 85, 255, 0.38)", "#fff"]}
      useAngle={true}
      angle={180}
    >
      <Text style={[styles.text, styles.textTypo]}>ברוך/ה הבא/ה!</Text>
      <Text style={styles.text1}>נא להזין מס’ נייד לצורך הזדהות</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <TouchableOpacity 
        style={[styles.btnChild, styles.childShadowBox]} 
        onPress={() => dispatch(fetchUserData(number))}
        >
        <Text style={[styles.text2, styles.textPosition]}>היכנס/י</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.field, styles.fieldLayout]}>
        <View style={[styles.fieldChild, styles.fieldLayout]} />
      <TextInput
        style={[styles.text3, styles.textPosition]}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
      </View>
      <Image
        style={styles.headerIcon}
        resizeMode="cover"
        source={require("../assets/labelle.png")}
      />
      <Image
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/hax.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  btnLayout: {
    height: 50,
    width: 172,
    left: "50%",
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_11xl,
    top: 0,
  },
  textPosition: {
    top: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.openSansHebrew,
    left: "50%",
    position: "absolute",
  },
  fieldLayout: {
    width: 297,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -59,
    top: 231,
    color: Color.gray,
    fontFamily: FontFamily.openSansHebrew,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
  },
  text1: {
    top: 256,
    left: 109,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.openSansHebrew,
    position: "absolute",
  },
  btnChild: {
    marginLeft: -86,
    backgroundColor: Color.gray,
    height: 50,
    width: 172,
    left: "50%",
    position: "absolute",
  },
  text2: {
    marginLeft: -27,
    color: Color.colorWhite,
    width: 53,
    fontWeight: "700",
    top: 14,
  },
  btn: {
    marginLeft: -91,
    top: 373,
  },
  fieldChild: {
    marginLeft: -148.5,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_11xl,
    top: 0,
  },
  text3: {
    marginLeft: -51.75,
    width: 104,
    color: Color.gray,
  },
  text4: {
    top: 16,
    left: 262,
    fontWeight: "300",
    fontFamily: FontFamily.fontAwesome6Pro,
    color: "#da7a8c",
    width: 16,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  field: {
    marginLeft: -149,
    top: 299,
  },
  headerIcon: {
    marginLeft: -115,
    top: 132,
    width: 220,
    height: 75,
    left: "50%",
    position: "absolute",
  },
  imgIcon: {
    alignSelf: 'flex-end', // Align the image to the bottom
    width: 430,
    height: 348,
    position: 'absolute',
    bottom: 0, // Set bottom to 0 to position at the bottom
  },
  authCode: {
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
    backgroundColor: Color.gradient,
  },
});

export default AuthCode;
