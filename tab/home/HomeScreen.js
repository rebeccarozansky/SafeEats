import { TextInput, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';
import { AntDesign } from '@expo/vector-icons';
import Partner from "./Partner"


export default function HomeScreen() {
    const img_urls = {
      mc: require('../../img/partner/BG1.png'),
      ch: require('../../img/partner/BG2.png')
    };
    return (
      <View style={styles.container}>
        <View style={styles.upperView}>
          <Image source={require('../../img/Pattern.png')} />
          <View style={styles.searchSection}>
            <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
            <TextInput placeholder="Search" style={styles.searchBar} />
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.featuredPartnersContainer}>
              <Text style={styles.featuredPartnersTitle}>Featured Partners</Text>

              <TouchableOpacity
              style={styles.seeAllButton}
                  onPress={() => {
                  }}>
                  <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.horizontalView} horizontal={true}>
              <Partner style={styles.partnerView} url={img_urls.mc} title="McDonald's" address="Franklin St, Chapel Hill" />
              <Partner style={styles.partnerView} url={img_urls.ch} title="Chipotle" address="Franklin St, Chapel Hill" />

            </ScrollView>
          </ScrollView>
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
    height: 40,
    marginTop: -30,
    marginLeft: "12.5%"
  },
  searchSection: {
    borderColor: "#F00",
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: "5%",
    justifyContent: "center",
    width: "70%"
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

  }
  
  });
  