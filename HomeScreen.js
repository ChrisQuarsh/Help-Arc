import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.demo}>
                    <View style={styles.adImage}>
                        <TouchableOpacity onPress={() => { navigation.navigate('AdsProfile') }}>
                            <Image source={require('./assets/fg.png')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.info1}>
                            <Feather name="phone" size={20} color="green" style={styles.icon} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt1}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.info1}>
                            <AntDesign name="message1" size={20} color="green" style={styles.icon2} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.demo}>
                    <View style={styles.adImage}>
                        <TouchableOpacity onPress={() => { navigation.navigate('AdsProfile') }}>
                            <Image source={require('./assets/hss.jpg')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.info1}>
                            <Feather name="phone" size={20} color="green" style={styles.icon} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt1}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.info1}>
                            <AntDesign name="message1" size={20} color="green" style={styles.icon2} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.demo}>
                    <View style={styles.adImage}>
                        <TouchableOpacity>
                            <Image source={require('./assets/capee.jpg')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.info1}>
                            <Feather name="phone" size={20} color="green" style={styles.icon} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt1}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.info1}>
                            <AntDesign name="message1" size={20} color="green" style={styles.icon2} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.demo}>
                    <View style={styles.adImage}>
                        <TouchableOpacity>
                            <Image source={require('./assets/seat.jpg')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.info1}>
                            <Feather name="phone" size={20} color="green" style={styles.icon} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt1}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.info1}>
                            <AntDesign name="message1" size={20} color="green" style={styles.icon2} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.demo}>
                    <View style={styles.adImage}>
                        <TouchableOpacity>
                            <Image source={require('./assets/tailor.jpg')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.info1}>
                            <Feather name="phone" size={20} color="green" style={styles.icon} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt1}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.info1}>
                            <AntDesign name="message1" size={20} color="green" style={styles.icon2} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.demo}>
                    <View style={styles.adImage}>
                        <TouchableOpacity>
                            <Image source={require('./assets/gard.jpg')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.info1}>
                            <Feather name="phone" size={20} color="green" style={styles.icon} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt1}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.info1}>
                            <AntDesign name="message1" size={20} color="green" style={styles.icon2} />
                            <TouchableOpacity>
                                <Text style={styles.infotxt}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    demo: {
        paddingVertical:5
    },
    adImage: {},
    image: {
        height: 170,
        width: 360
    },
    info: {
        flexDirection: "row"
    },
    info1: {
        justifyContent:"center",
        flexDirection: "row",
        borderColor:"green",
        borderWidth:1,
        height:40,
        width:180
    },
    infotxt1:{
        color:"green",
        marginTop:8,
        marginLeft: 10
    },
    infotxt:{
        color:"green",
        marginTop:8,
        marginLeft: 10
    },
    icon:{
        marginLeft:-17,
        marginTop:8
    },
    icon2:{
        marginLeft: -19,
        marginTop:8
    }


});
