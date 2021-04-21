import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import { Feather } from "@expo/vector-icons";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";
export function Welcome() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("UserIdentificator");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"} suas plantas de {"\n"} forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subTitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleNavigation}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    color: colors.heading,
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: fonts.heading,
    textAlign: "center",
    marginTop: 38,
    lineHeight: 34,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: fonts.text,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
    marginLeft: 12,
  },
});
