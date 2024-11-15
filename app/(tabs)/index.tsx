import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Link href={"/about"} style={styles.button}>Link to about page</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
    },
    button: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: 25,
    }
});
