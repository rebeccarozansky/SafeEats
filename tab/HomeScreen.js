import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';
import RestaurantCard from './components/RestaurantCard';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
   
  const [restaurants, setRestaurants] = useState([]); // Initialize the state for the restaurants
  const navigation = useNavigation();

  // This function could be called to fetch the restaurant data from an API and update the state
  const fetchRestaurants = async () => {
    const apiUrl = 'https://dev.virtualearth.net/REST/v1/LocalSearch/';
    const apiKey = 'Atnce2DTxlTsKwbN_6kk2QcX5itHvO8jOLdtN6NFv4ic7rBC-c9kpRo8p4wplAro';
    const latitude = 35.91079065648069;
    const longitude = -79.06111556099538;
    const radius = 900;
    const searchType = 'FastFood';
    
    const url = `${apiUrl}?type=${searchType}&userCircularMapView=${latitude},${longitude},${radius}&key=${apiKey}`;
    
    try {
      const response = await fetch(url);//"https://dev.virtualearth.net/REST/v1/LocalSearch/?type=FastFood&userCircularMapView=35.91079065648069,-79.06111556099538,900&key=Atnce2DTxlTsKwbN_6kk2QcX5itHvO8jOLdtN6NFv4ic7rBC-c9kpRo8p4wplAro");
      const data = await response.json();
      console.log(data.resourceSets.resources)
      setRestaurants(data.resourceSets[0].resources);
    } catch (error) {
      console.error(error);
    }
    

    //tempData = [{"name":"McDonald's"},{"name":"Chipotle"}];
    //setRestaurants(tempData);
  };

  // Call the fetchRestaurants function to update the state with restaurant data
  useState(() => {
    fetchRestaurants();
  }, []);


  return (
    <View style={styles.allergiesView}>
      <Text style={styles.title}>Nearby Restaurants:</Text>
      <Text onPress={navigation.navigate('MenuScreen')}>Slay</Text>
      {/* Use the map function to render the RestaurantCard component for each restaurant */}
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          //distance={restaurant.distance}
          //rating={restaurant.rating}
          //image={restaurant.image}
        />
      ))}
      
    </View>
  );
}



const styles = StyleSheet.create({
    allergiesView: {
        width: "100%",
    }, 
    title: {
        fontSize: 16,
        marginLeft: "7%",
        fontWeight: "bold"
    },
    checkboxContainer: {
      marginBottom: 20,
      flexDirection: 'row',
  
    },
    checkboxRowContainer: {
        flexDirection: "row",
        alignItems: "center"
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
      flexDirection: 'column',
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
        resizeMode:'contain'
    }
  });
  