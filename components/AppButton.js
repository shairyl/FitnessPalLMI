import React from "react";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "black", style, textColor }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 5,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
