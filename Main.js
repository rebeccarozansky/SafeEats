import { StatusBar } from 'expo-status-bar';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component, useState} from "react";
import CreateAccount from "./CreateAccount";
import LogIn from './LogIn';


export default function Main() {
    const [currentComponent, setSelector] = useState(<CreateAccount/>);
    const [createAccountText, setCreateAccountText] = useState(styles.activeText);
    const [createAccount, setCreateAccount] = useState(styles.selectorActive);
    const [logInText, setLogInText] = useState(styles.inactiveText);
    const [logIn, setLogIn] = useState(styles.selectorInctive);

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Image style={styles.pattern} source={require('./img/Pattern.png')} />
                <Image style={styles.illustration} source={require('./img/Illustration.png')} />
            </View>
            <View style={styles.lowerView}>
                <View style={styles.selectorContainer}>
                    <TouchableOpacity
                        style={[styles.selectorButton, createAccount]}
                        onPress={() => {
                            setSelector(<CreateAccount />); 
                            setCreateAccount(styles.selectorActive);
                            setCreateAccountText(styles.activeText);
                            setLogIn(styles.selectorInactive);
                            setLogInText(styles.inactiveText);
                        }}>
                        <Text style={createAccountText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.selectorButton, logIn]}
                        onPress={() => {
                            setSelector(<LogIn />); 
                            setLogIn(styles.selectorActive);
                            setLogInText(styles.activeText);
                            setCreateAccount(styles.selectorInactive);
                            setCreateAccountText(styles.inactiveText);
                        }}>
                        <Text style={logInText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                {currentComponent}
            </View>
        </View>
    
    );
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
    lowerView: {
        height: "70%",
        width: "100%",
        flex: 2,
        backgroundColor: "#F5F5F5"
    },
    selectorContainer: {
        flexDirection: "row",
    },
    selectorButton: {
        marginTop: "12.5%",
        marginLeft: 40,
        marginRight: 40,
        borderBottomWidth: 1,
    },
    selectorActive: {
        borderBottomColor: "#FF0000"
    },
    selectorInactive: {
        borderBottomColor: "#999999"
    },
    activeText: {
        fontSize: 20,
        color: "#FF0000",
        paddingBottom: 5
    },
    
    inactiveText: {
        fontSize: 20,
        color: "#999999",
        paddingBottom: 5
        
    },

    pattern: {

    },
    illustration: {
        position: "absolute", 
        marginTop: "12.5%"
    }
  });
  