import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Main from "./Main";


export default function App() {
  return (<Main />);
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SafeEats</Text>
      <TextInput
        style={styles.textField}
        placeholder="Name"
      />
      <TextInput
        style={styles.textField}
        placeholder="Email"
      />
      <TextInput
        style={styles.textField}
        placeholder="Password"
      />
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxColumn}>
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Milk" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />

          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Eggs" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Fish" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
        </View>

        <View style={styles.checkboxColumn}>
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Shellfish" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Tree Nuts" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Peanuts" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />

          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Vegan" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
        </View>

        <View style={styles.checkboxColumn}>
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Wheat" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Soy" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
          <BouncyCheckbox 
            textStyle={{textDecorationLine: "none", }} 
            style={styles.checkboxRow}
            text="Gluten Free" 
            onPress={(isChecked) => {console.log(isChecked)}} 
          />
          </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 30
  },
  textField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: "80%",
    margin: 10,
    padding: 5
  },
  checkboxContainer: {
    marginBottom: 20,
    flexDirection: 'row',

  },
  checkboxColumn: {
    flexDirection: 'column',
    margin: 2,
  },
  checkboxRow: {
    margin: 5,
  }
});
