import { TextInput, Text, View, StyleSheet, Image} from 'react-native';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Image source={require('../../img/Pattern.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    blue: {
      backgroundColor: "blue"
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
    }
});