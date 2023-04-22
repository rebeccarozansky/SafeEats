import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';

export default function PersonalInfo(props) {
    var data = props.personalData;
    const [name,  setName] = useState(data[0]);
    const [email,  setEmail] = useState(data[1]);
    const [phoneNumber,  setPhoneNumber] = useState(data[2]);
    const [address,  setAddress] = useState(data[3]);
    

    var isEdittable = false;
    if (props.iconButtonCounter % 2 == 1) {
        isEdittable = true;
    }
    return (

    <View style={styles.personalInfoView}>
        <Text style={styles.title}>Personal Information</Text>
        <View style={isEdittable ? styles.personalInfoDataEditting: styles.personalInfoData}>
            <View>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.label}>Address</Text>
            </View>
            <View style={styles.info}>
                <TextInput editable={isEdittable} style={styles.label} value={ name } 
                    onChangeText={(text) => {{
                        setName(text);
                        data[0] = text;
                        props.setPersonalData(data);
                    }}} />
                <TextInput editable={isEdittable} style={styles.label} value={ email } 
                    onChangeText={(text) => {{
                        setEmail(text);
                        data[1] = text;
                        props.setPersonalData(data);
                    }}} />
                <TextInput editable={isEdittable} style={styles.label} value={ phoneNumber } 
                    onChangeText={(text) => {{
                        setPhoneNumber(text);
                        data[2] = text;
                        props.setPersonalData(data);
                    }}} />
                <TextInput editable={isEdittable} style={styles.label} value={ address } 
                    onChangeText={(text) => {{
                        setAddress(text);
                        data[5] = text;
                        props.setPersonalData(data);
                    }}} />
            </View>
        </View>
    </View>);
}



const styles = StyleSheet.create({
    personalInfoView: {
        width: "100%"
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
    personalInfoDataEditting: {
        marginTop: 5,
        marginLeft: "5%",
        width: "90%",
        flexDirection: "row",

        borderColor: "#3B3B3B33",
        backgroundColor: "#3B3B3B33",
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
  