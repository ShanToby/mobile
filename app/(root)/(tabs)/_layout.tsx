import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, StyleSheet } from "react-native";

import { icons } from "@/constant";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    style={[
      styles.iconContainer,
      focused && styles.iconContainerFocused,
    ]}
  >
    <View
      style={[
        styles.icon,
        focused && styles.iconFocused,
      ]}
    >
      <Image
        source={source}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999, 
  },
  iconContainerFocused: {
    backgroundColor: "#FFFFF", 
  },
  icon: {
    borderRadius: 9999, 
    width: 48, 
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  iconFocused: {
    backgroundColor: "#CCCCCC", 
  },
  image: {
    width: 28, 
    height: 28, 
    tintColor: "white", 
  },
});

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0, 
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
