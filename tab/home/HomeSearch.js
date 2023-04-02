import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, {Component, useState} from "react";
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.recentSearchText}>Recent Searches</Text>
            <View style={styles.singleSearchContainer}>
                <TouchableOpacity style={styles.singleSearchButton}>
                    <AntDesign style={styles.clockIcon} name="clockcircle" size={24} color="red" />
                    <Text style={styles.searchText}>pizza</Text>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
            </View>
            <View style={styles.singleSearchContainer}>
                <TouchableOpacity style={styles.singleSearchButton}>
                    <AntDesign style={styles.clockIcon} name="clockcircle" size={24} color="red" />
                    <Text style={styles.searchText}>pizza</Text>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      height: "100%",
      width: "100%",
    },
    recentSearchText: {
        marginTop: 20,
        marginBottom: 17.5,
        marginLeft: '15%',
        textAlign: 'left',
        width: '100%',
        fontSize: 18
    },
    singleSearchButton: {
        flexDirection: "row",
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20
    },
    singleSearchContainer: {
        width: '100%',

    },
    searchText: {
        marginLeft: 10,
        fontSize: 16
    },
    clockIcon: {
        marginLeft: 25
    }
    });
    