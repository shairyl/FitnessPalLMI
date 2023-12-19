import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Notification from "../components/Notification";

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/home.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.blackout}>
        <Notification />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",

    height: 900,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  blackout: {
    backgroundColor: colors.darkDark,
    top: 20,
    height: 50,
    width: "100%",
    position: "absolute",
  },
  container: { backgroundColor: colors.darkDark },
  notify: { backgroundColor: "blue", height: 100 },
});

export default HomeScreen;
