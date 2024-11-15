import { Text, View, StyleSheet } from "react-native"

export default function about() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                This is some text for the about page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    text: {
        color: '#fff'
    },
    container: {
        backgroundColor: '#25292e',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})