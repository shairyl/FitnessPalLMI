import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppButton from "../../components/AppButton";

function SurveyScreen1({ navigation }) {
  return (
    <View>
      <Image
        source={require("../../assets/screen1.png")}
        style={styles.backgroundImage}
      />
      <AppButton
        title="NEXT"
        color="grey"
        textColor="dark"
        onPress={() => navigation.navigate("SurveyScreen2")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 850,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    bottom: 40,
    position: "absolute",
    left: 23,
    width: "88%",
  },
});
export default SurveyScreen1;
