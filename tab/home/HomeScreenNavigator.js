import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RestaurantScreen from "../restaurant/RestaurantScreen";
import HomeScreen from './HomeScreen';
import SearchScreen from '../search/SearchScreen';
import { enableScreens } from 'react-native-screens';

const Stack = createNativeStackNavigator();

export default function HomeScreenNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          navigation={this.Stack}
        />
        <Stack.Screen 
          name="Restaurant" 
          component={RestaurantScreen} 
          navigation={this.Stack}
          options={{ headerShown: true, headerTintColor: 'red' }}
        />
    </Stack.Navigator>);
}