import React, { useState, useEffect, useRef } from "react";
import { Button, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import colors from "../config/colors";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function Notification() {
  useEffect(() => {
    const askNotification = async () => {
      // We need to ask for Notification permissions for ios devices
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
    };
    askNotification();
  }, []);

  const triggerNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Great Work",
        body: "Keep up the good work",
        data: { data: "goes here" },
        attachments: [
          {
            identifier: "logo",
            url: "https://example.com/path/to/image.png",
          },
        ],
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <Button
      onPress={triggerNotifications}
      title="Trigger Local Notifications"
      color={colors.white}
      accessibilityLabel="Trigger Local Notifications"
    />
  );
}
