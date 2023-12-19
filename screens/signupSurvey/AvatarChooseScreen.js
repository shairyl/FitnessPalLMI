import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Paginator from "../../components/Paginator";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AvatarPicker from "../../components/AvatarPicker";
import characters from "./characters";

const screenWidth = Dimensions.get("window").width;

function AvatarChooseScreen({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Choose Your Lesmills+ Buddy</Text>
        <Text style={styles.subHeading}>
          Your Buddy will motivate you along your Fitness Journey!
        </Text>
      </View>
      <FlatList
        data={characters}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        renderItem={({ item }) => <AvatarPicker item={item} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <Paginator
        data={characters}
        scrollX={scrollX}
        currentIndex={currentIndex}
      />
      <View style={styles.gestureGuide}>
        <Text style={styles.gestureText}>Swipe left or right to select</Text>
        <AntDesign
          style={{ marginBottom: 20 }}
          name="arrowright"
          size={24}
          color="white"
        />
      </View>
      <AppButton
        title="NEXT"
        color="grey"
        textColor="dark"
        onPress={() => navigation.navigate("SurveyStartScreen")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  gestureGuide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  gestureText: {
    color: "white",
    marginRight: 10,
    marginBottom: 20,
  },
});

export default AvatarChooseScreen;
