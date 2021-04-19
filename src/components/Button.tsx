import React from "react";
import { Text,TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";


interface ButtonProps {
    title: string;
}

export function Button({title}:ButtonProps) {
    return (
        
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
             <Text style={styles.buttonText}>
                 {title}
            </Text>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 16,
        marginBottom: 10,
        width: 56,
        height: 56,

    },
    buttonText: {
        color: colors.white
    }
})
