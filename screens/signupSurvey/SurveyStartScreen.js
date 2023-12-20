import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

function SurveyStartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/surveyScreenStart.png")}
        style={styles.backgroundImage}
      />
      <AppButton
        title="NEXT"
        color="black"
        textColor="dark"
        onPress={() => navigation.navigate("SurveyScreen1")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 900,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    bottom: 150,
    position: "absolute",
    height: 200,
    opacity: 0,
  },
});

export default SurveyStartScreen;
