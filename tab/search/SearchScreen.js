import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TopRestaurantsComponent from './TopRestaurantsComponent';
import FilterComponent from './FilterComponent';
import React, {Component, useState} from "react";

export default function SearchScreen() {
    const [currentComponent, setCurrentComponent] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.searchText}>Search</Text>
            <View style={styles.upperView}>
                <Image source={require('../../img/Pattern.png')} />
                <View style={styles.columns}>
                    <View style={styles.searchSection}>
                        <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
                        <TextInput 
                            placeholder="Search" 
                            style={styles.searchBar} 
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton} onPress={() => {
                        setCurrentComponent((currentComponent + 1) % 2);
                    }}>
                        <AntDesign style={styles.filterIcon} name="filter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            { currentComponent == 0 && <TopRestaurantsComponent /> }
            { currentComponent == 1 && <TopRestaurantsComponent /> }
        </View>
    );
}

const styles = StyleSheet.create({

    columns: {
      flexDirection: 'row',
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
      width: "80%",
      flexDirection: "column"
    }, 
    searchIcon: {
      marginTop: 10,
      marginLeft: 10
    },
    filterIcon: {
        color: "red",
    },
    filterButton: {
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        marginTop: 15
    },
    ScrollView: {
        flexDirection: "column",
        width: '100%',

    }, 
    rowView: {
        flexDirection: "row",
        width: '100%',
        height: 300,
        marginTop: -50,
    },
    searchText: {
        position: 'absolute',
        top: 50,
        left: 20,
        fontSize: 36
    },
    lowerView: {
        width: '100%',
        height: '80%'
    },
    topRestText: {
        marginLeft: 22.5,
        marginTop: 10,
        fontSize: 24
    }
});