import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function RestaurantMenu({ route }) {
  //const { restaurantId } = route.params;
  
  // Fetch menu data for the restaurant with the given ID

  return (
    <View>
      <Text>Restaurant Menu</Text>
      <Text>Restaurant ID:</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
    </Stack.Navigator>
  );
}

export default App;
