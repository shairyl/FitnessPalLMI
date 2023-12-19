import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

import SignUpSurveyNavigator from "./navigation/SignupSurveyNavigator";
import TimerNotification from "./components/Notification";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    const askNotification = async () => {
      // We need to ask for Notification permissions for ios devices
      const { status } = await Notifications.getPermissionsAsync();
      if (Constants.isDevice && status === "granted")
        console.log("Notification permissions granted.");
    };
    askNotification();
  }, []);

  const triggerNotifications = async () => {
    console.log("ask notifications");
    console.log(
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "You’ve got mail! 📬",
          body: "Here is the notification body",
          data: { data: "goes here" },
        },
        trigger: { seconds: 2 },
      })
    );
  };
  return (
    <View style={{ paddingTop: 50 }}>
      <Button
        onPress={triggerNotifications}
        title="Trigger Local Notifications"
        color="#841584"
        accessibilityLabel="Trigger Local Notifications"
      />
    </View>
  );
}
