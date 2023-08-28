import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Image, Text } from 'react-native';
import LaBelleImage from '../assets/logo-w.png'; // Import your LaBelle.png image


const LaunchScreen = () => {
  const rotationValue = new Animated.Value(0);
    console.log("Launch")
  useEffect(() => {
    console.log("useEffect")
    const rotateAnimation = Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 5000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
  }, []);

  const rotateInterpolation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={LaBelleImage}
        style={[styles.image, { transform: [{ rotate: rotateInterpolation }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    resizeMode: 'contain',
  },
});

export default LaunchScreen;
