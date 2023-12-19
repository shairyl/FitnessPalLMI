import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/home.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.blackout}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "105%",
    height: 850,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  blackout: {
    backgroundColor: colors.black,
    top: 20,
    height: 50,
    width: "100%",
    position: "absolute",
  },
  container: { backgroundColor: "black" },
});

export default HomeScreen;
