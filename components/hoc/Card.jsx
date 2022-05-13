import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ children, header }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#eee',
        maxWidth: 600,
        width: '90%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingBottom:10,
        marginVertical: 10
    },
    header: {
        backgroundColor: 'royalblue',
        color: 'whitesmoke',
        fontSize: 25,
        width: '100%', padding: 20, textAlign: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10

    }
})