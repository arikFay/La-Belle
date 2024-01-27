import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";
import { fetchUserData } from '../slices/authSlice';
import Svg, { Path } from 'react-native-svg';




const AuthCode = () => {
    const dispatch = useDispatch();
    const [number, onChangeNumber] = React.useState('');
    const loggingError = useSelector((state) => state.auth.loggingError);

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
                <View
                    style={[styles.view, loggingError ? [styles.fieldChildError, styles.fieldLayout] : [styles.fieldChild, styles.fieldLayout]]} />
                <TextInput
                    style={[styles.text3, styles.textPosition]}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder=""
                    keyboardType="numeric"
                />
                {
                    loggingError ?
                        <Svg width={19} height={19} viewBox="0 0 19 19" fill="none"
                            style={[styles.svgError, styles.textTypo]}>
                            <Path
                                d="M6.82812 6.61328C7.03906 6.40234 7.42578 6.40234 7.63672 6.61328L9.5 8.47656L11.3281 6.61328C11.5391 6.40234 11.9258 6.40234 12.1367 6.61328C12.3477 6.82422 12.3477 7.21094 12.1367 7.42188L10.2734 9.25L12.1367 11.1133C12.3477 11.3242 12.3477 11.7109 12.1367 11.9219C11.9258 12.1328 11.5391 12.1328 11.3281 11.9219L9.5 10.0586L7.63672 11.9219C7.42578 12.1328 7.03906 12.1328 6.82812 11.9219C6.61719 11.7109 6.61719 11.3242 6.82812 11.1133L8.69141 9.25L6.82812 7.42188C6.61719 7.21094 6.61719 6.82422 6.82812 6.61328ZM18.5 9.25C18.5 14.2422 14.457 18.25 9.5 18.25C4.50781 18.25 0.5 14.2422 0.5 9.25C0.5 4.29297 4.50781 0.25 9.5 0.25C14.457 0.25 18.5 4.29297 18.5 9.25ZM9.5 1.375C5.14062 1.375 1.625 4.92578 1.625 9.25C1.625 13.6094 5.14062 17.125 9.5 17.125C13.8242 17.125 17.375 13.6094 17.375 9.25C17.375 4.92578 13.8242 1.375 9.5 1.375Z"
                                fill="#D50709"
                            />
                        </Svg>
                        :
                        <Svg width={12} height={19} viewBox="0 0 12 19" fill="none" style={[styles.text4, styles.textTypo]}>
                            <Path
                                d="M9.25 0.25C10.4805 0.25 11.5 1.26953 11.5 2.5V16C11.5 17.2656 10.4805 18.25 9.25 18.25H2.5C1.23438 18.25 0.25 17.2656 0.25 16V2.5C0.25 1.26953 1.23438 0.25 2.5 0.25H9.25ZM10.375 16V2.5C10.375 1.90234 9.84766 1.375 9.25 1.375H2.5C1.86719 1.375 1.375 1.90234 1.375 2.5V16C1.375 16.6328 1.86719 17.125 2.5 17.125H9.25C9.84766 17.125 10.375 16.6328 10.375 16ZM7 14.3125C7.28125 14.3125 7.5625 14.5938 7.5625 14.875C7.5625 15.1914 7.28125 15.4375 7 15.4375H4.75C4.43359 15.4375 4.1875 15.1914 4.1875 14.875C4.1875 14.5938 4.43359 14.3125 4.75 14.3125H7Z"
                                fill="#DA7A8C"
                            />
                        </Svg>
                }
            </View>
            {
                loggingError ?
                    <Text style={[styles.textError, styles.textTypoError]}>
                        {`המספר לא מופיע במערכת
צור עימנו קשר 03-9588144`}</Text>
                    :
                    null
            }
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
    textTypoError: {
        fontFamily: FontFamily.openSansHebrew,
        left: "50%",
    },
    btnLayout: {
        height: 50,
        width: 172,
        marginLeft: -86,
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
        top: 407,
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
    fieldChildError: {
        marginLeft: -148.5,
        backgroundColor: Color.colorWhite,
        borderStyle: "solid",
        borderColor: "#e08485",
        borderWidth: 1,
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
        width: 11,
        textAlign: "left",
        fontSize: FontSize.size_lg,
    },
    svgError: {
        top: 16,
        left: 257,
        fontWeight: "300",
        fontFamily: FontFamily.fontAwesome6Pro,
        color: "#d50709",
        width: 19,
    },
    textError: {
        marginLeft: -74,
        top: 359,
        fontSize: 12,
        color: "#df2c26",
        textAlign: "center",
        position: "absolute",
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
