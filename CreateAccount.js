import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {Component, useState} from "react";



export default class CreateAccount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
    
        return (
            <View style={styles.container}>
                <View style={styles.fieldsContainer}>
                    <Text style={styles.titleFieldTitle}>Full Name</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="Enter your name..."
                    />
                    <Text style={styles.titleFieldTitle}>Email address</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="Enter your email..."
                    />
                    <Text style={styles.titleFieldTitle}>Password</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="Create your password..."
                    />
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => console.log("sign up")}
                        underlayColor='#fff'>
                        <Text style={styles.signText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
        );
    }
}
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
      height: "100%",
      width: "100%",
    },
    fieldsContainer: {
        flexDirection: "column",
        flex: 2,
        width: "100%",
        alignItems: "center"
    },
    signUpContainer: {
    },
    textField: {
      height: 50,
      borderColor: '#999999',
      borderWidth: 1,

      width: "80%",
      margin: 10,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 5,
      fontSize: 18,
    },
    titleFieldTitle: {
        marginTop: 20,
        marginLeft: 40,
        alignSelf: 'stretch',
        fontSize: 18,
    },
    titleField: {
        marginLeft: 40,
        alignSelf: 'stretch',
        fontSize: 18,
    },
    signUpButton: {
        backgroundColor: "#FF0000",
        borderRadius: 10,
        marginTop: 10
    },
    signText:{
        color:'#FFF',
        textAlign:'center',
        paddingLeft : "25%",
        paddingRight : "25%",
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: "bold"
    }
  });
  