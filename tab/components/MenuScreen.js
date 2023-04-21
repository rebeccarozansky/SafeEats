import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import menus from "./chmenus.json"
import { ScrollView } from 'react-native';
import MenuItem from './MenuItem';
import { getUserInfo } from '../../config/getUserInfo';

// Filters out items based on allergies given by user.
// Vegetarian and Vegan must be handled differently.
// TODO: potentially add list of meats and dairy items to seperate json file and call from there

function safefilter(restrictions,item) {
  let meatlist = ["chicken","beef","pork","fish","tuna","yellowtail","salmon","pepperoni","bacon"]

  if(restrictions.includes("Vegetarian")){
    for(let i=0;i<meatlist.length;i++){
      let meat = meatlist[i];

      if(item[0]["Description"].includes(meat)){
        return false
      }
    }
  }
  for(let i=0;i<restrictions.length;i++){
    let res = restrictions[i];
    if(res == "Vegetarian" && (item[0]["Description"].includes(res))){

      return true;
    }
    else if(item[0]["Description"].includes(res)){
      return false;
    }
  }
  return true;
}

export default function MenuScreen({route}) {

  const [restrictions,setRestrictions] = useState([]);

const getRestrictions = async() => {
  let temp = await getUserInfo();
  setRestrictions(temp);
}

useEffect(() => {
  getRestrictions();
}, []);


  var parn = ""
  menu = []
  const safefoods = {};

  if(typeof route.params !== 'undefined'){
    let par = route.params
    parn = par.name
    let oof = "Top Of The Hill Restaurant & Brewery"

    if(menus.hasOwnProperty(parn)){
      menu = menus[parn]
      let menukeys = menu.keys    
    }
    //If item is safe, added to safefoods object
      for (let item in menu) {
        if (safefilter(restrictions,menu[item])) {
          safefoods[item] = menu[item];
          
        }
      }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{parn}</Text>

    <Text> Safe Items</Text>
 {/*Displays the Safe Items*/}

  <ScrollView horizontal={true}>
      {Object.keys(safefoods).map(item => {
        return safefoods[item].map(({ Description, Price }) => {
          return <MenuItem name={item} description={Description} price = {Price}/>
        });
      })
      }
  </ScrollView>

 {/*Displays every item*/}
  <ScrollView>
      {Object.keys(menu).map(item => {
        return menu[item].map(({ Description, Price }) => {
          return <MenuItem name={item} description={Description} price = {Price}/>
        });
      })
      }
    </ScrollView>
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
