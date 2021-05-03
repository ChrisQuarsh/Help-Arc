import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function ArtisanProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.pro}>
                <Text style={styles.protxt}>Profile</Text>
            </View>
            <View style={styles.profile}>
                <Image source={require('./assets/me.jpg')} style={styles.image} />
            </View>
            <View style={styles.all}>
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

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    pro:{
        
    },
    protxt:{
        fontSize:30,
        alignSelf:"center",
        marginTop:70,
        fontWeight:"bold"
    },
    profile:{
        alignSelf:"center",
        marginVertical: 30,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 80
    },
    head: {
        fontWeight: "bold",
        fontSize: 15,
        marginLeft:20
    },
    sub: {
        marginLeft: 20
    },
    name: {
        flexDirection: "row",
        margin: 10,

    },
    all:{
        marginTop:-20
    }


})
export default ArtisanProfile
