import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router';
import { ParallaxScrollView } from 

function Card({name, age, breed, location, image}) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardAge}>{age}</Text>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardLocation}>{location}</Text>
            <Image source={{uri: image}} style={styles.cardImage}/>
        </View>
    );
}

export default function NextToCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mascotas perdidas cerca de ti</Text>
            <View style={styles.cardContainer}>
                <Card name="Firulais" age="2 años" breed="Corgi" location="Calle 123" image="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"/>
                <Card name="Firulais" age="2 años" breed="Corgi" location="Calle 123" image="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"/>
                <Card name="Firulais" age="2 años" breed="Corgi" location="Calle 123" image="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'left',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'system-ui',
    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        margin: 10,
    },
    cardName: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'system-ui',
    },
    cardAge: {
        fontSize: 15,
        color: 'gray',
        fontFamily: 'system-ui',
    },
    cardBreed: {
        fontSize: 15,
        fontFamily: 'system-ui',
    },
    cardLocation: {
        fontSize: 15,
        fontFamily: 'system-ui',
        color: 'gray',
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

});

