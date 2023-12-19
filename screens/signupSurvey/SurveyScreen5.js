import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import AppButton from "../../components/AppButton";

function SurveyScreen5({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Image
          source={require("../../assets/screen5.png")}
          style={styles.backgroundImage}
        />
        <AppButton
          title="NEXT"
          color="grey"
          textColor="dark"
          onPress={() => navigation.navigate("AppNavigator")}
          style={styles.button}
        />
      </ScrollView>
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

export default SurveyScreen5;
