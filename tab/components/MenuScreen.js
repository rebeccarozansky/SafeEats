import React, { useState, useEffect } from "react";
import menus from "./chmenus.json";
import MenuItem from "./MenuItem";
import { getUserInfo } from "../../config/getUserInfo";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FoodItem from "../restaurant/FoodItem";
import rest_info from "../../backend/restaurant_info.json"

// Filters out items based on allergies given by user.
// Vegetarian and Vegan must be handled differently.
// TODO: potentially add list of meats and dairy items to seperate json file and call from there

function safefilter(restrictions, item) {
  let meatlist = [
    "chicken",
    "beef",
    "pork",
    "fish",
    "tuna",
    "yellowtail",
    "salmon",
    "pepperoni",
    "bacon",
  ];

  if (restrictions.includes("Vegetarian")) {
    for (let i = 0; i < meatlist.length; i++) {
      let meat = meatlist[i];

      if (item[0]["Description"].includes(meat)) {
        return false;
      }
    }
  }
  for (let i = 0; i < restrictions.length; i++) {
    let res = restrictions[i];
    if (res == "Vegetarian" && item[0]["Description"].includes(res)) {
      return true;
    } else if (item[0]["Description"].includes(res)) {
      return false;
    }
  }
  return true;
}

export default function MenuScreen(props) {

  const [restrictions, setRestrictions] = useState([]);
  console.log('props')
  console.log(rest_info[props.route.params.title]['cuisine'])
  const getRestrictions = async () => {
    let temp = await getUserInfo();
    setRestrictions(temp);
  };

  useEffect(() => {
    getRestrictions();
  }, []);

  var parn = "";
  menu = [];
  const safefoods = {};

  if (typeof props.route.params !== "undefined") {
    let par = props.route.params;
    parn = par.name;
    let oof = "Top Of The Hill Restaurant & Brewery";
    console.log(parn);
    if (menus.hasOwnProperty(parn)) {
      menu = menus[parn];
      let menukeys = menu.keys;
    }
    //If item is safe, added to safefoods object
    for (let item in menu) {
      if (safefilter(restrictions, menu[item])) {
        safefoods[item] = menu[item];
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../img/partner/BG1.png")} />
      <Text style={styles.restaurantName}>{props.route.params.title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.priceText}>{rest_info[props.route.params.title]['price']}</Text>
        <Text style={styles.spacerText}>.</Text>
        <Text style={styles.cuisineText}>{rest_info[props.route.params.title]['cuisine']}</Text>
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.subHeader}>Featured Items</Text>
          <ScrollView style={styles.horizontalView} horizontal={true}>
            {Object.keys(safefoods).map((item) => {
              return safefoods[item].map(({ Description, Price }) => {
                return (
                  <FoodItem
                    style={styles.foodItem}
                    url={{
                      uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png"
                    }}
                    description={Description}
                    name={item}
                    price={Price}
                  />
                );
              });
            })}
          </ScrollView>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.subHeader}>Most Popular</Text>
          <ScrollView style={styles.horizontalView} horizontal={true}>
            {Object.keys(menu).map((item) => {
              return menu[item].map(({ Description, Price }) => {
                return (
                  <FoodItem
                    style={styles.foodItem}
                    url={{
                      uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png",
                    }}
                    description={Description}
                    name={item}
                    price={Price}
                  />
                );
              });
            })}
           
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{parn}</Text>

      <Text> Safe Items</Text>
      {/*Displays the Safe Items*/}

      <ScrollView horizontal={true}>
        {Object.keys(safefoods).map((item) => {
          return safefoods[item].map(({ Description, Price }) => {
            return (
              <MenuItem name={item} description={Description} price={Price} />
            );
          });
        })}
      </ScrollView>

      {/*Displays every item*/}
      <ScrollView>
        {Object.keys(menu).map((item) => {
          return menu[item].map(({ Description, Price }) => {
            return (
              <MenuItem name={item} description={Description} price={Price} />
            );
          });
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: "100%",
      maxHeight: "40%",
      resizeMode: "contain",
      top: 0
  },  
  columns: {
    flexDirection: 'row',
  },
  infoContainer: {
      marginLeft: 20,
      flexDirection: 'row',
  },
  restaurantName: {
      marginLeft: 20,
      marginTop: 10,
      fontSize: 32,
      fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  priceText: {
      color: "#010F07",
      fontSize: 18,
  },
  spacerText: {
      color: "#868686",
      fontSize: 35,
      top: -20,
      marginLeft: 5,
      marginRight: 5
  },
  cuisineText: {
      color: "#010F07",
      fontSize: 18
  },
  ScrollView: {
      height: "100%"
  },
  subHeader: {
      fontSize: 20,
      marginLeft: 20
  },
  horizontalView: {
    width: "100%",
    flexDirection: "row",
    height: 200,
    marginTop: 10
  }
});