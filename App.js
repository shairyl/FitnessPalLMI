import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import SignUpSurveyNavigator from "./navigation/SignupSurveyNavigator";
import YearlyWrapped from "./screens/YearlyWrapped";
export default function App() {
  return (
    <NavigationContainer>
      <YearlyWrapped />
    </NavigationContainer>
  );
}
