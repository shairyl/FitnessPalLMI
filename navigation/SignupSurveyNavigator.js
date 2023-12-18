import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AvatarChooseScreen,
  SurveyStartScreen,
  SurveyScreen1,
  SurveyScreen2,
  SurveyScreen3,
  SurveyScreen4,
  SurveyScreen5,
} from "../screens/signupSurvey";

const Stack = createStackNavigator();

const SignUpSurveyNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AvatarChooseScreen">
      <Stack.Screen
        name="AvatarChooseScreen"
        component={AvatarChooseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SurveyStartScreen"
        component={SurveyStartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SurveyScreen1"
        component={SurveyScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SurveyScreen2"
        component={SurveyScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SurveyScreen3"
        component={SurveyScreen3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SurveyScreen4"
        component={SurveyScreen4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SurveyScreen5"
        component={SurveyScreen5}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SignUpSurveyNavigator;
