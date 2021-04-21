import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emogi}>😄</Text>
            <Text style={styles.text}>Prontinho</Text>
            <Text style={styles.subTitle}>
              Agora vamos começar a cuidar das suas plantinhas com muito
              cuidado.
            </Text>
            <View style={styles.footer}>
              <Button title="Começar" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  emogi: {
    fontSize: 72,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  text: {
    color: colors.heading,
    fontSize: 24,
    lineHeight: 38,
    textAlign: "center",
    fontFamily: fonts.heading,
    marginTop: 10,
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 11,
  },
  subTitle: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 25,
    paddingHorizontal: 10,
  },
});
