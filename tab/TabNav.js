// React Native component that creates a bottom tab navigator for the app. 
// The app includes two screens, "Home" and "User Profile", each represented by a tab at the bottom of the screen.

import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { Component, useState } from "react";
import { color } from "@rneui/themed/dist/config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfile from "./user/UserProfile";
import HomeScreen from "./home/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./components/MenuScreen";
import StackNav from "./home/StackNav";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F00",
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarLabel: "User Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  allergiesView: {
    width: "100%",
  },
  title: {
    fontSize: 16,
    marginLeft: "7%",
    fontWeight: "bold",
  },
  checkboxContainer: {
    marginBottom: 20,
    flexDirection: "row",
  },
  checkboxRowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  allergiesData: {
    marginTop: 5,
    marginLeft: "5%",
    width: "90%",
    flexDirection: "row",

    borderColor: "#3B3B3B33",
    borderWidth: 2,
    borderRadius: 10,
  },
  checkboxColumn: {
    flexDirection: "column",
    margin: 2,
  },
  checkboxRow: {
    margin: 5,
    fillColor: "red",
    unfillColor: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
