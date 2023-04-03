import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import menus from "./chmenus.json"
import { ScrollView } from 'react-native';
import MenuItem from './MenuItem';

export default function MenuScreen({route}) {
  var parn = ""
  var c = 0
  menu = []
  if(typeof route.params !== 'undefined'){
    //console.log(Object.keys(route.params))
    par = route.params
    parn = par.name
    oof = "Top Of The Hill Restaurant & Brewery"
    //console.log(Object.keys(menus))
    //console.log(menus[parn])
    if(menus.hasOwnProperty(parn)){
      menu = menus[parn]
      console.log("here!")
      console.log(menu)
      menukeys = menu.keys
      
    }
  }


  
  //const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.text}>This is the menu screen.{parn}</Text>
      <Text style={styles.text}>You can add your menu items and descriptions here.</Text>
      
      {/* menu.map((i) => (
        console.log("a")
        //<Text style = {styles.text}>{Object.keys(i)i} </Text>
        //<MenuItem name={Object.keys(i)} desc={i.}/>
        
        
        //console.log(menu.key)
        
      )) */}
      {/*
Object.keys(menu).map(item => {
 // console.log(`${item}:`);
  menu[item].map(({ Description, Price }) => {
    //console.log(`- ${Description} (${Price})`)
    <Text> {Description} </Text>
   // <MenuItem name={item} description={Description} price = {Price}/>
  });
  //<Text> {item} </Text>
})

*/}
  <ScrollView>

{Object.keys(menu).map(item => {
  return menu[item].map(({ Description, Price }) => {
    return <MenuItem name={item} description={Description} price = {Price}/>
  });
})
}
</ScrollView>
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
