import { TextInput, Text, View, StyleSheet, Image } from 'react-native';
import React, {Component, useState} from "react";


export default function HomeScreen(props) {

    return (
      <View style={styles.container}>
        <Image style={styles.img} source={props.url} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    height: 250,
    paddingLeft: 10,
    paddingRight: 10
  },
  img: {
    height: 200,
    maxWidth: 400,
    borderRadius: 15,
    resizeMethod: "scale"
  },
  title: {
    fontSize: 22,
    marginLeft: 10
  },
  address: {
    fontSize: 16,
    marginLeft: 10,
    color: "gray"
  }
  });
  