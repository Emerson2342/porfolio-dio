import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export function Skill() {

    function Star() {
        return (
            <FontAwesome
                name='star'
                color={'#fff736'}
                size={25} />
        )
    }

    return (



        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/profile.jpg')}
            />
            <Text style={styles.title}>Habilidades</Text>

            <View style={styles.containerSkills}>
                <View style={styles.content}>
                    <Text style={styles.text}>CSS</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star /><Star /><Star /><Star /><Star />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>HTML</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star /><Star /><Star /><Star /><Star />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>JavaScript </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star /><Star /><Star /><Star />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>React </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star /><Star /><Star /><Star /><Star />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>C# </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star /><Star /><Star /><Star /><Star />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Java</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star /><Star /><Star />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Inglês</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star /><Star /><Star /><Star /><Star />
                    </View>
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',

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
    containerSkills: {
        width: "80%",

    },
    text: {

        fontSize: 17,
        fontWeight: "bold",
        color: '#fff',

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        borderRadius: 7,
        padding: 5,
        backgroundColor: '#088cff'

    }



})