import * as React from "react";
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Color } from "../GlobalStyles";

const LoadingApp = () => {
    const rotateValue = new Animated.Value(0);

    React.useEffect(() => {
        const rotateAnimation = Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 3500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );

        rotateAnimation.start();

        return () => rotateAnimation.stop();
    }, [rotateValue]);

    const rotateInterpolate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    return (
        <LinearGradient
            style={styles.loadingApp}
            locations={[0, 1, 1, 1, 1]}
            colors={["#f1f1f1", "#fff", "#cfcfcf", "rgba(0, 85, 255, 0.38)", "#fff"]}
            useAngle={true}
            angle={180}
        >
            <Animated.Image
                style={[styles.headerIcon, styles.textPosition, animatedStyle]}
                resizeMode="cover"
                source={require("../assets/labelle.png")}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    textPosition: {
        left: "50%",
        position: "absolute",
    },
    headerIcon: {
        marginLeft: -110,
        top: 379,
        width: 220,
        height: 75,
    },
    text: {
        marginTop: 236,
        marginLeft: -18,
        top: "50%",
        fontSize: 36,
        fontFamily: FontFamily.fontAwesome6Pro,
        color: "#83714c",
        textAlign: "left",
    },
    loadingApp: {
        flex: 1,
        width: "100%",
        height: 834,
        overflow: "hidden",
        backgroundColor: Color.gradient,
    },
});

export default LoadingApp;
