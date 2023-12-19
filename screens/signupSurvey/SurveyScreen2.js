import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

function SurveyScreen2({ navigation }) {
  return (
    <View style={{ backgroundColor: colors.dark }}>
      <Image
        source={require("../../assets/screen2.png")}
        style={styles.backgroundImage}
      />
      <AppButton
        title="NEXT"
        color="grey"
        textColor="dark"
        onPress={() => navigation.navigate("SurveyScreen3")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 880,
    marginTop: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    bottom: 40,
    position: "absolute",
    height: 200,
    opacity: 0,
  },
});
export default SurveyScreen2;
