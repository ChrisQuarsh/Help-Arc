import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function AdsProfile({ navigation }) {
    return (
        <View>
            <View style={styles.adspro}>
                <Text style={styles.adsprotxt}>Your Ads</Text>
            </View>
            <View style={styles.profile}>
                <Image source={require('./assets/me.jpg')} style={styles.image1} />
            </View>
            <View style={styles.one}>
                <View style={styles.name}>
                    <Text style={styles.sub}>Gideon A. Osekre</Text>
                </View>
                <View style={styles.name}>
                    <Text style={styles.sub}>ablorhgieon@gmail.com</Text>
                </View>
                <View style={styles.name}>
                    <Text style={styles.sub}>Maritime Street</Text>
                </View>
                <View style={styles.name}>
                    <Text style={styles.sub}>Accra-Ghana</Text>
                </View>
                <View style={styles.name}>
                    <Text style={styles.sub}>+233 (0) 266406166</Text>
                </View>
            </View>

            <View style={styles.imageContainer}>
                <View style={styles.adImage}>
                    <Image source={require('./assets/lee.png')} style={styles.image} />
                </View>
                <View style={styles.adImage}>
                    <Image source={require('./assets/fg.png')} style={styles.image} />
                </View>
                <View style={styles.adImage}>
                    <Image source={require('./assets/dp2.png')} style={styles.image} />
                </View>
                <View style={styles.adImage}>
                    <Image source={require('./assets/fg.png')} style={styles.image} />
                </View>
                <View style={styles.adImage}>
                    <Image source={require('./assets/fg.png')} style={styles.image} />
                </View>
            </View>
        </View>
    )
}

export default AdsProfile

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        margin: 4
    },
    imageContainer: {
        flexDirection: "row",
        margin: 6,

    },
    protxt: {
        fontSize: 30,
        alignSelf: "center",
        marginTop: 30,
        fontWeight: "bold"
    },
    one:{
        marginTop:-20
    },
    profile: {
        marginLeft: 20,
        marginVertical: 30,
    },
    image1: {
        height: 80,
        width: 80,
        borderRadius: 80
    },
    sub: {
        marginLeft: 10,
        paddingVertical: 8,
    },
    adspro:{
        backgroundColor:"green",
        marginVertical:40,
        height:50,
        width:360
    },
    adsprotxt:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        marginHorizontal:20
    }
})
