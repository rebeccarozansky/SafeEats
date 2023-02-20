import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component, useState} from "react";
import { color } from '@rneui/themed/dist/config';
import { useNavigation } from '@react-navigation/native';
import PersonalInfo from "./PersonalInfo";
import Allergies from './Allergies';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';


export default function UserProfile(props) {
    const navigation = useNavigation(); 

    const [iconButtonCounter,  setIconButtonCounter] = useState(0);
    const [allergyBool,  setAllergyBool] = useState(new Array(12).fill(false));
    
    return (
    <View style={styles.container}>
        <View style={styles.upperView}>
            <Image style={styles.pattern} source={require('../../img/Pattern.png')} />
            <View style={styles.pictureArea}>
                <Text style={styles.profileText}>Profile</Text>
                <Image  style={styles.profilePicture} source={require('../../img/profile_picture.png')} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Main")}
                    underlayColor='#fff'
                    style={styles.logOutButton}>
                    <Text style={styles.logOutText}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <PersonalInfo />
            <Allergies iconButtonCounter={iconButtonCounter} allergyBool={allergyBool} setAllergyBool={setAllergyBool} />
            {iconButtonCounter % 2 == 0 &&
                <TouchableOpacity
                    onPress={() => setIconButtonCounter(iconButtonCounter + 1)}
                    underlayColor='#fff'
                    style={styles.editButton}>
                        <SimpleLineIcons name="pencil" size={24} color="#FFF" />
                </TouchableOpacity>
            }
            {iconButtonCounter % 2 == 1 &&
               <TouchableOpacity
                   onPress={() => setIconButtonCounter(iconButtonCounter + 1)}
                   underlayColor='#fff'
                   style={styles.editButton}>
                    <Feather name="check" size={30} color="#FFF" />
               </TouchableOpacity>
           }
        </View>

    </View>);
}



const styles = StyleSheet.create({
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
    pictureArea: {
        flexDirection: "row",
        height: "15%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    personalInfoView: {

    },

    profileText: {
        fontSize: 28
    },
    profilePicture: {
        aspectRatio: 1,
        height: undefined,
        width: "25%",
        alignSelf: "center",
        borderRadius: "50%"
    },
    logOutButton: {
        backgroundColor: "#FF0000",
        width: "25%",
        height: "40%",
        borderRadius: 10
        
    },
    logOutText: {
        fontSize: 20,
        textAlign: "center",
        marginTop: "12.5%",
        color: "#FFF",
        fontWeight: "bold"
    },
    editButton: {
        backgroundColor: "#F00",
        width: 40,
        height: 40,
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: "5%",
        marginTop: "5%",
        borderRadius: "50%", 
        justifyContent: "center"
    }, 
  });
  