import React from "react";
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import wateringImg from "../assets/watering.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";

export function Welcome(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
            Gerencie {"\n"} suas plantas de {"\n"} forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image}/>

            <Text style={styles.subTitle}>Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: colors.heading,
        fontSize: 32,
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 38
        
    },
    subTitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        fontWeight: "normal",
        color: colors.heading,
        lineHeight: 25,
        textAlign: "center",
        
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
        position: "absolute",
        width: 292,
        height: 284,

    },
    buttonText: {
        color: colors.white
    }
})
