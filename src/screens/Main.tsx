import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export function Main() {
    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../images/profile.jpg')}
            />
            <Text style={styles.title}>Emerson Ribeiro da Cunha</Text>
            <View style={styles.info}>
                <Text style={styles.textTitle}>
                    LinkedIn
                </Text>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        linkedin.com/in/emerson-ribeiro-da-cunha-34163b73
                    </Text>
                </TouchableOpacity>
                <Text style={styles.textTitle}>
                    GitHub
                </Text>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        @Emerson2342/
                    </Text>
                </TouchableOpacity>
                <Text style={styles.textTitle}>
                    Email
                </Text>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        lyncoln_erc@hotmail.com
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#0e3987"
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0e3987'
    },
    info: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#088cff",
        width: '85%',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10
    },
    textTitle: {
        fontSize: 17,
        fontWeight: "bold",
        color: '#001c63'
    },
    text: {
        color: "#fff",
        fontWeight: '500'
    }

})