import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text69}>צהריים טובים, נאווה ירושלמי</Text>
      <Text style={[styles.text70, styles.text70Position]}>
        אנחנו פה לשירותך, מה אנחנו עושים היום?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f1f3",
    flex: 1,
    width: "100%",
    height: 1979,
    overflow: "hidden",
    paddingHorizontal: 16

  },
  text69: {
    top: 120,
    fontSize: 12,
    color: Color.gray,
    textAlign: "right",
    fontFamily: FontFamily.openSansHebrew,
    fontWeight: 'bold',
  },
  text70: {
    top: 120,
    fontSize: 12,
    color: Color.gray,
    textAlign: "right",
    fontFamily: FontFamily.openSansHebrew,
  },
});

export default HomeScreen;
