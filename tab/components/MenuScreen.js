import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import menus from "./chmenus.json"
import { ScrollView } from 'react-native';
import MenuItem from './MenuItem';

export default function MenuScreen({route}) {
  var parn = ""
  if(typeof route.params !== 'undefined'){
    console.log(Object.keys(route.params))
    par = route.params
    parn = par.name
    oof = "Top Of The Hill Restaurant & Brewery"
    console.log(Object.keys(menus))
    console.log(menus[parn])
  }
  //const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.text}>This is the menu screen.{parn}</Text>
      <Text style={styles.text}>You can add your menu items and descriptions here.</Text>
      <MenuItem/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
});

//export default MenuScreen;
