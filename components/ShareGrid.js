import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// Sample stats data
const stats = [
  { heading: "Calories Burned", value: "3500" },
  { heading: "Strength Increase", value: "15%" },
  { heading: "Flexibility Sessions", value: "20" },
  { heading: "Flexibility Sessions", value: "20" },
];

// Grid Component
export default StatsGrid = () => {
  return (
    <View style={styles.shareGridContainer}>
      <View style={styles.brandingHeader}>
        <View style={styles.headings}>
          <Text style={styles.lesmillsText}>LesMills</Text>
          <Text style={styles.yearReview}>2023 YEAR IN REVIEW</Text>
        </View>
        <Image
          source={{
            uri: "https://assets.dev.lesmills.com/lmod-support/images/luffy-icon.png",
          }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.shareGridHeading}>
        I'm in the top 20% for {"\n"}the most watched videos!
      </Text>
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statDescription}>{stat.heading}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headings: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  shareGridContainer: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 20,
    width: 420,
    height: 405,
  },

  brandingHeader: {
    flexDirection: "row",
    width: "100%",
  },
  lesmillsText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  yearReview: {
    color: "#00ff63",
    fontSize: 18,
    marginBottom: 12,
  },
  shareGridHeading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 4,
    width: 140, // Adjust width as needed
    alignItems: "center",
  },
  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 8,
  },
  statDescription: {
    fontSize: 16,
    color: "#000",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 70,
    position: "absolute",
    right: 10,
  },

  lesmillsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  shareGridHeading: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "white",
  },
  gridItem: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-start", // Align text to the left
    borderColor: "white", // Set the border color
    borderWidth: 1, // Set the border width
    padding: 10, // Optional padding
  },
  gridHeading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  gridValue: {
    fontSize: 12,
    color: "white",
  },
});
