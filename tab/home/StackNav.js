import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfile from '../user/UserProfile';
import HomeScreen from './HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MenuScreen from '../components/MenuScreen';

const Stack = createNativeStackNavigator();
Stack.initialRouteName = 'HomeScreen'

export default function StackNav(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              navigation={Stack}
            />
            <Stack.Screen 
              name="MenuScreen" 
              component={MenuScreen} 
              navigation={Stack}
              options={{ headerShown: true, headerTintColor: 'red', headerTitle:"" }}
            />
        </Stack.Navigator>);
  
  }