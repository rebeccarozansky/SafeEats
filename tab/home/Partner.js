import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Component, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import RestaurantScreen from "../restaurant/RestaurantScreen";


export default function Partner(props) {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MenuScreen", {
            name: props.title,
          });
        }}
      >
        <Image style={styles.img} source={props.url} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: 250,
    paddingLeft: 10,
    paddingRight: 10,
  },
  img: {
    height: 200,
    maxWidth: 400,
    borderRadius: 15,
    resizeMethod: "scale",
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
  },
  address: {
    fontSize: 16,
    marginLeft: 10,
    color: "gray",
  },
});
