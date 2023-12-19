import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  Animated,
} from "react-native";

export default AvatarPicker = ({ item }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width, height: height * 0.6 }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    color: "white",
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  description: {
    fontWeight: "300",
    color: "white",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
