import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';


export default function PersonalInfo() {
    return (

    <View style={styles.personalInfoView}>
        <Text style={styles.title}>Personal Information</Text>
        <View style={styles.personalInfoData}>
            <View>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.label}>Gender</Text>
                <Text style={styles.label}>Birthday</Text>
                <Text style={styles.label}>Address</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.label}>Jane Smith</Text>
                <Text style={styles.label}>janesmith1@gmail.com</Text>
                <Text style={styles.label}>+(123) 456-7890</Text>
                <Text style={styles.label}>Female</Text>
                <Text style={styles.label}>04/16/1997</Text>
                <Text style={styles.label}>321 Main St, Chapel Hill, NC 27516</Text>
            </View>
        </View>
    </View>);
}



const styles = StyleSheet.create({
    personalInfoView: {
        width: "100%",
    }, 
    personalInfoData: {
        marginTop: 5,
        marginLeft: "5%",
        width: "90%",
        flexDirection: "row",

        borderColor: "#3B3B3B33",
        borderWidth: 2,
        borderRadius: 10,
    },
    info: {
        //marginLeft: "10%",
    },  
    title: {
        fontSize: 16,
        marginLeft: "7%",
        fontWeight: "bold"
    },
    label: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    }
  });
  