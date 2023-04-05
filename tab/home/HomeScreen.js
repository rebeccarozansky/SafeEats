import { TextInput, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';
import { AntDesign } from '@expo/vector-icons';
import Partner from "./Partner"
import HomePartners from './HomePartners';
import HomeSearch from "./HomeSearch";


export default function HomeScreen() {
    const img_urls = {
      mc: require('../../img/partner/BG1.png'),
      ch: require('../../img/partner/BG2.png')
    };


    const [currentComponent, setCurrentComponent] = useState(0);

    return (
      <View style={styles.container}>
        <View style={styles.upperView}>
          <Image source={require('../../img/Pattern.png')} />
          <View style={styles.searchSection}>
            <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
            <TextInput 
              placeholder="Search" 
              onPressIn={() => setCurrentComponent(1)} 
              style={styles.searchBar} 
            />
            
            { currentComponent == 1 &&
              <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setCurrentComponent(0)}
                    underlayColor='#fff'>
                    <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>}
          </View>

          {currentComponent == 0 && < HomePartners />}
          {currentComponent == 1 && < HomeSearch />}
        </View>
      </View>
    );
}



const styles = StyleSheet.create({
  blue: {
    backgroundColor: "blue"
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  upperView: {
      height: "30%",
      width: "100%",
      flex: 1,
      flexDirection: 'column',
  },
  horizontalView: {
    width: "100%",
    flexDirection: "row",
    alignContent: "flex-start"
  },
  searchBar: {
    height: 50,
    marginTop: -35,
    marginLeft: "12.5%",
    width: '65%'
  },
  searchSection: {
    borderColor: "#F00",
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: "5%",
    justifyContent: "center",
    width: "90%",
    flexDirection: "column"
  }, 
  searchIcon: {
    marginTop: 10,
    marginLeft: 10
  },
  featuredPartnersContainer: {
    margin: 10,
    flexDirection: "row"
  },
  featuredPartnersTitle: {
    fontSize: 24
  },
  seeAllButton: {
    justifyContent: "space-evenly",
    marginLeft: "30%",
  }, 
  seeAllText: {
    color: "#F00",
    textDecorationLine: 'underline',

  },

  cancelButton: {
    marginTop: -35,
    paddingBottom: 17.5
  },
  cancelText: {
    color: "#FF0000",
    marginLeft: "80%",
  }
  
  });
  