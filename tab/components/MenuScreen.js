import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import menus from "./chmenus.json"
import { ScrollView } from 'react-native';
import MenuItem from './MenuItem';
import foodres from "./foodres.json";

function safefilter(item) {
  meatlist = ["chicken","beef","pork","fish","tuna","yellowtail","salmon","pepperoni","bacon"]
  user = "user"
  restrictions = foodres[user]["food restriction"]
  console.log(restrictions.includes("vegetarian"))
  if(restrictions.includes("vegetarian")){
    console.log("here!")
    for(let i=0;i<meatlist.length;i++){
      meat = meatlist[i];
      console.log(item[0]["Description"])
      console.log(meat)
      if(item[0]["Description"].includes(meat)){
        return false
      }
    }
  }
  for(let i=0;i<restrictions.length;i++){
    res = restrictions[i];
    if(res == "vegetarian" && (item[0]["Description"].includes(res))){
      //console.log(item)

      return true;
    }
    else if(item[0]["Description"].includes(res)){
      return false;
    }
  }
  return true;
  // your implementation of safefilter function
}

export default function MenuScreen({route}) {
  var parn = ""
  var c = 0
  menu = []
  const safefoods = {};

  if(typeof route.params !== 'undefined'){
    par = route.params
    parn = par.name
    oof = "Top Of The Hill Restaurant & Brewery"

    if(menus.hasOwnProperty(parn)){
      menu = menus[parn]
      //console.log("here!")
      //console.log(menu)
      menukeys = menu.keys
      
    }


      for (let item in menu) {
        if (safefilter(menu[item])) {
          safefoods[item] = menu[item];
          
        }
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

{Object.keys(safefoods).map(item => {
  return safefoods[item].map(({ Description, Price }) => {
    return <MenuItem name={item} description={Description} price = {Price}/>
  });
})
}
</ScrollView>

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
