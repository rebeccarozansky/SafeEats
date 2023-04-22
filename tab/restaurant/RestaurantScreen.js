import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import FoodItem from './FoodItem';


export default function RestaurantScreen(props) {
    //console.log(props.route.params)
    //console.log(props.route.params.url)
    //console.log(props.route.params.address)
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.route.params.url} />
            <Text style={styles.restaurantName}>{props.route.params.title}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.priceText}>{props.route.params.price}</Text>
                <Text style={styles.spacerText}>.</Text>
                <Text style={styles.cuisineText}>{props.route.params.cuisine}</Text>
            </View>
            <ScrollView style={styles.ScrollView}>
                <View style={{marginTop: 10}}>
                    <Text style={styles.subHeader}>Featured Items</Text>
                    <ScrollView style={styles.horizontalView} horizontal={true}>
                        <FoodItem 
                            style={styles.foodItem}
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }} 
                            name="McCrispy Sandwich" 
                            price="4.99"
                        />
                        <FoodItem 
                            style={styles.foodItem}
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }} 
                            name="McCrispy Sandwich" 
                            price="4.99"
                        />
                    </ScrollView>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={styles.subHeader}>Most Popular</Text>
                    <ScrollView style={styles.horizontalView} horizontal={true}>
                        <FoodItem 
                            style={styles.foodItem}
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }} 
                            name="McCrispy Sandwich" 
                            price="4.99"
                        />
                        <FoodItem 
                            style={styles.foodItem}
                            url={{ uri: "https://user-images.githubusercontent.com/32803510/230947533-1489be79-18c0-4d7d-a8cc-069ff84f98ba.png" }} 
                            name="McCrispy Sandwich" 
                            price="4.99"
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        maxHeight: "40%",
        resizeMode: "contain",
        top: 0
    },  
    columns: {
      flexDirection: 'row',
    },
    infoContainer: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    restaurantName: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 32,
        fontWeight: "bold"
    },
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      flexDirection: "column",
      height: "100%",
      width: "100%",
    },
    priceText: {
        color: "#010F07",
        fontSize: 18,
    },
    spacerText: {
        color: "#868686",
        fontSize: 35,
        top: -20,
        marginLeft: 5,
        marginRight: 5
    },
    cuisineText: {
        color: "#010F07",
        fontSize: 18
    },
    ScrollView: {
        height: "100%"
    },
    subHeader: {
        fontSize: 20,
        marginLeft: 20
    },
    horizontalView: {
      width: "100%",
      flexDirection: "row",
      height: 200,
      marginTop: 10
    }
});