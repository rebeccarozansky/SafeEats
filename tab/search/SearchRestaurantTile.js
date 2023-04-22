import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function SearchRestaurantTile(props) {

    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style={styles.img} source={props.url} />
            <Text style={styles.restaurantName}>{props.name}</Text>
            <View style={styles.lowerContainer}>
                <Text style={styles.priceText}>{props.price}</Text>
                <Text style={styles.spacerText}>.</Text>
                <Text style={styles.cuisineText}>{props.cuisine}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
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
    lowerContainer: {
        flexDirection: "row"
    },
    restaurantName: {
        fontSize: 16
    },
    priceText: {
        color: "#010F07",
        fontSize: 14
    },
    spacerText: {
        color: "#868686",
        fontSize: 25,
        marginTop: -12.5
    },
    cuisineText: {
        color: "#010F07",
        fontSize: 14
    },
    img: {
      height: 150,
      width: 150,
      borderRadius: 15,
      resizeMethod: "scale"
    },
});