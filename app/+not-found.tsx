import { View, StyleSheet, Text } from "react-native"
import { Link, Stack } from 'expo-router'

export default function notFound() {
    return(
        <>
            <Stack.Screen options={{ title: '404 Error page not found.'}} />
            <View style={ styles.container }>
                <Link href={'/'} style={ styles.button }>
                    Go back home!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e',
    },
    button: {
        color: '#fff',
        textDecorationLine: 'underline'
    }
})