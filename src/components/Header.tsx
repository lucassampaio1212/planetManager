import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import imageLucas from "../assets/image-lucas.jpg";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Lucas</Text>
      </View>
      <Image source={imageLucas} style={styles.image} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
    paddingRight: 20,
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 32,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
