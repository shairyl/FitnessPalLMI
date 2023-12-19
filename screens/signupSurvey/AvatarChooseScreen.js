import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

function AvatarChooseScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppButton
        title="NEXT"
        color="grey"
        textColor="dark"
        onPress={() => navigation.navigate("SurveyStartScreen")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "flex-end", padding: 20 },
});

export default AvatarChooseScreen;
