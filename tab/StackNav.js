import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfile from './user/UserProfile';
import HomeScreen from './HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MenuScreen from './components/MenuScreen';

const Stack = createNativeStackNavigator();

export default function StackNav(){
  
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="MenuScreen" component={MenuScreen}/>
        </Stack.Navigator>
  
    )
  
  }