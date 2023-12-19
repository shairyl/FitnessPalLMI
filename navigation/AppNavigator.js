import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import colors from "../config/colors";



const Tab = createBottomTabNavigator();

function AppNavigator() {
  const tabBarOptions = {
    tabBarStyle: { ...styles.tabBar },
    tabBarActiveTintColor: colors.grey,
    tabBarInactiveTintColor: colors.grey,
    tabBarInactiveBackgroundColor: colors.black,
    tabBarActiveBackgroundColor: colors.black,
  };

  const tabOption = (iconName) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ color }) => (
      <FontAwesome
        name={iconName}
        color={color}
        size={30}
        style={styles.tabBarIcon}
      />
    ),
  });

  const tabOption1 = (iconName) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ color }) => (
      <Entypo
        name={iconName}
        color={color}
        size={30}
        style={styles.tabBarIcon}
      />
    ),
  });
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={tabOption1("home")}
      />
      <Tab.Screen
        name="search"
        component={HomeScreen}
        options={tabOption("search")}
      />
      <Tab.Screen
        name="calendar"
        component={HomeScreen}
        options={tabOption("calendar-o")}
      />
      <Tab.Screen
        name="profile"
        component={HomeScreen}
        options={tabOption("user")}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
  },
  tabBarIcon: {},
});

export default AppNavigator;
