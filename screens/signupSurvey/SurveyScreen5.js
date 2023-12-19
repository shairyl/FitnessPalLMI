import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

function SurveyScreen5({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppButton
        title="NEXT"
        color="grey"
        textColor="dark"
        onPress={() => navigation.navigate("SurveyScreen1")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "flex-end", padding: 20 },
});
export default SurveyScreen5;
