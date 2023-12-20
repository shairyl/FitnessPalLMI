import React, { useRef, useState } from "react";
import ViewShot from "react-native-view-shot";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Share,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ShareGrid from "../components/ShareGrid";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const totalSections = 6; // Added sections for the starting section, stats, and instructor section

function TikTokStyleScreen() {
  const viewShotRef = useRef();

  const handleShare = () => {
    viewShotRef.current.capture().then((uri) => {
      Share.share({
        message: "Check out my fitness stats!",
        url: uri,
      });
    });
  };

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollY = new Animated.Value(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const newIndex = Math.round(offsetY / screenHeight);
        setCurrentIndex(newIndex);
      },
    }
  );

  // Public image URLs
  const imageUrls = [
    "https://images.prismic.io/lmplus/5331f3a6-f6bc-4bb2-a3c6-aa4c384b9431_BODYCOMBAT-Express.jpg?auto=compress,format",
    "https://images.prismic.io/lmplus/c1e4a498-a174-48e1-b2af-448de8ad9fab_HybridEnduro-recommended.jpg?auto=compress,format",
    "https://images.prismic.io/lmplus/8dd0182d-bc3a-4ce9-ba25-1197c17b401f_Trainer+Series.jpg?auto=compress,format",
    "https://images.prismic.io/lmplus/4b1e9388-fbf6-43c8-b126-db4cd6f40862_BB100-recommended.jpg?auto=compress,format",
    "https://images.prismic.io/lmplus/3980577a-73c6-4d2b-aff9-216b6726f770_OptimalMix-recommended.jpg?auto=compress,format",
  ];

  const sectionBackgroundUrl =
    "https://images.prismic.io/lmplus/f598c8f8-97c0-4750-9cdc-27583e26816b_BODYATTACK121-recommended.jpg?auto=compress,format";
  const characterImageUrl =
    "https://assets.dev.lesmills.com/lmod-support/images/luffy-icon.png"; // Replace with your character image URL
  // Subheadings for each section
  const stats = [
    {
      heading: "You completed 14 Videos this year!",
      luffy:
        "Hey there! You've embarked on an incredible fitness journey this year! Just like an adventurer exploring new lands, you've completed 20 differnt types workouts! That's like trekking across vast and mystical landscapes. Keep up this adventurous spirit!",
    },
    {
      heading: "Calorie Quest Conquered",
      luffy:
        "Wow! You've burned a whopping [Total Calories Burned] calories. That's like scaling the tallest mountains and diving into the deepest seas on a thrilling quest. Every calorie burned is a step towards your fitness treasure. Ready for more quests next year?",
    },
    {
      heading: "Strength of a Champion",
      luffy:
        "Your strength has soared to new heights! It's like you've been lifting enchanted weights or wrestling mythical creatures. This year, you've boosted your strength by [Percentage Increase in Strength]. Let's keep this heroic momentum going!",
    },
    {
      heading: "Flexibility Exploration",
      luffy:
        "Navigating through [Number of Flexibility Sessions] flexibility sessions, you've shown the adaptability of a world-class explorer. You've stretched and bent like the willow in the wind, adapting to every new challenge. Here's to discovering new ranges of motion on our next journey!",
    },
    {
      heading: "Favorite instructor was Toji Fushigoro",
      luffy:
        "Ahoy! Your journey with Toji Fushigoro as your guide has been nothing short of remarkable. Each session with Toji has added to your legendary endurance and resilience.",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        ref={scrollViewRef}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Starting section */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: sectionBackgroundUrl }}
            style={styles.backgroundImage}
            resizeMode="cover"
          />

          <View style={styles.darkener}></View>
          <Text style={styles.yearText}>🎉2023🎉</Text>
          <Text style={styles.subHeading}>
            Look back at 2023 and discover some interesting facts with Luffy!
          </Text>
        </View>

        {/* Image and Stats sections */}
        {imageUrls.map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.darkener}></View>

            {stats[index] && (
              <View style={styles.overlay}>
                <Image
                  source={{ uri: characterImageUrl }}
                  style={styles.avatar}
                />
                <Text style={styles.heading}>{stats[index].heading}</Text>
                <View style={styles.underline}></View>
                <Text style={styles.paragraph}>{stats[index].luffy}</Text>
                <TouchableOpacity
                  onPress={handleShare}
                  style={styles.shareButton}
                >
                  <AntDesign name="sharealt" size={24} color="black" />
                  <Text style={styles.shareButtonText}>Share Stats</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <TouchableOpacity
            onPress={() => {
              if (currentIndex < totalSections - 1) {
                const nextIndex = currentIndex + 1;
                scrollViewRef.current.scrollTo({
                  y: nextIndex * screenHeight,
                  animated: true,
                });
                setCurrentIndex(nextIndex);
              }
            }}
          >
            <AntDesign name="down" size={30} color="white" />
          </TouchableOpacity>
          <ViewShot
            ref={viewShotRef}
            style={styles.viewShot}
            options={{ format: "jpg", quality: 0.9 }}
          >
            <ShareGrid />
          </ViewShot>

          <Text style={styles.sectionTracker}>
            {currentIndex === 0
              ? "Quick Start"
              : `${currentIndex + 1}/${totalSections}`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shareButton: {
    flexDirection: "row", // To align icon and text
    alignItems: "center", // To vertically center
    backgroundColor: "#00ff63", // A blue color for the button background
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 25, // Rounded corners
    marginTop: 10, // Margin from the top or other elements
    alignSelf: "center", // To center the button in the container
  },
  shareButtonText: {
    color: "black",
    marginLeft: 8, // Space between icon and text
    fontSize: 16, // Text size
  },
  imageContainer: {
    // If you have other styles for imageContainer, keep them as well.
    height: screenHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  darkener: {
    // If you want a dark overlay on the image for better text readability
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  viewShot: {
    position: "absolute",
    top: -300 * 2, // Off-screen
    left: -300 * 2, // Off-screen
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    textAlign: "center",
  },
  underline: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    alignSelf: "center",
    width: "60%",
    marginBottom: 10,
  },
  paragraph: {
    // Set the background color to white
    color: "white", // Set text color to black for contrast
    padding: 10, // Add padding inside the white background
    borderRadius: 30,
    width: "90%",
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    top: 210,
    borderRadius: 80,
    position: "absolute",
  },

  container: {
    flex: 1,
  },
  imageContainer: {
    height: screenHeight,
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  overlayImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    margin: 10,
  },
  currentIndexText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  darkener: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darkening layer
  },
  footer: {
    backgroundColor: "black",
    position: "absolute", // Absolute positioning
    bottom: 0, // Positioned at the bottom
    left: 0,
    right: 0,
  },
  hr: {
    width: "80%",
    height: 1,
    backgroundColor: "white",
    marginTop: 10,
    alignSelf: "center", // Centered horizontally
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 55,
  },
  arrowDown: {
    fontSize: 30,
    color: "white",
    marginRight: 10,
  },
  sectionTracker: {
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
  yearText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: screenHeight * 0.4,
  },
  subHeading: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  statsText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  sendThanksButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#32CD32",
    borderRadius: 30,
  },
  sendThanksButtonText: {
    fontSize: 18,
    color: "white",
    marginRight: 10,
  },
});

export default TikTokStyleScreen;
