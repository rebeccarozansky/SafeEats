import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SearchRestaurantTile from './SearchRestaurantTile';


export default function TopRestaurantsComponent() {
    return (
        <View style={styles.lowerView}>
                <Text style={styles.topRestText}>Top Restaurants</Text>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.rowView}>
                        <SearchRestaurantTile 
                            name="McDonalds" 
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }}
                            price="$" 
                            cuisine="American" 
                        />
                        <SearchRestaurantTile 
                            name="McDonalds" 
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }}
                            price="$" 
                            cuisine="American" 
                        />
                    </View>
                    <View style={styles.rowView}>
                        <SearchRestaurantTile 
                            name="McDonalds" 
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }}
                            price="$" 
                            cuisine="American" 
                        />
                        <SearchRestaurantTile 
                            name="McDonalds" 
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }}
                            price="$" 
                            cuisine="American" 
                        />
                    </View>
                </ScrollView>
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