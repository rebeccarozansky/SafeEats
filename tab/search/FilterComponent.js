import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function FilterComponent() {
    return (
        <View style={styles.container}>
            <Text>Filter</Text>
            <View>
                <View>
                    <Text>GATEGORIES</Text>
                    <TouchableOpacity>
                        <Text>CLEAR ALL</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text>All</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Dietry</Text>
            </View>
            <View>
                <Text>Price Range</Text>
            </View>
            <View>
                <Text>Distance</Text>
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
      height: "100%",
      width: "100%",
      top: -50,
    },
});