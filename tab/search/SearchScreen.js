import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function SearchScreen() {
    return (
        <View style={styles.container}>
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
                    <TouchableOpacity style={styles.filterButton}>
                        <AntDesign style={styles.filterIcon} name="filter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
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
    }
});