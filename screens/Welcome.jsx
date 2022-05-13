import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

    const navigation = useNavigation();

    const goTo = () => {
        navigation.navigate('Login')
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Welcome</Text>
            <TouchableOpacity style={styles.btn} onPress={goTo}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'coral',
    },
    textStyle: {
        color: 'white',
        fontSize: 30
    },
    btn: {
        backgroundColor: 'lightblue',
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 30
    }
})