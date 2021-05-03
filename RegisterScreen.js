import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import ArtisanProfile from './ArtisanProfile';
import HomeScreen from './HomeScreen';
import { createEmailAccount, registerError, } from './actions/authActions';
import AdsProfile from './AdsProfile';
import { AntDesign } from '@expo/vector-icons';
import ImagePickerExample from './ImagePickerExample';


class RegisterScreen extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         firstname: "",
    //         lastname: "",
    //         email: "",
    //         password: "",
    //         address: "",
    //         location: "",
    //         contact: "",
    //     }
    // }
    // handleUpdateState = (name, value) => {
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleOnSubmit = () => {
    //     if(this.state.password !== this.state.password) {
    //         this.props.createEmailAccount("email and password do notmatch")
    //         return;
    //         this.props.createEmailAccount(
    //             this.state.email,
    //             this.state.firstname,  
    //             this.state.lastname,
    //             this.state.address,
    //             this.state.location,
    //             this.state.contact,
    //             this.state.password,)
    //     }
    // }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.head}>
                        <Text style={styles.headtext}>Register</Text>
                    </View>

                    <View style={styles.flow}>
                        {/* {
                            auth.error.registre &&
                            <Text style={{ color: 'red' }}>{auth.error.registre}</Text>
                        }  */}
                        <View style={styles.row1}>
                            <TextInput
                                style={styles.input1}
                                placeholder="firstname"
                                autoCapitalize="none"
                                autoCorrect={false}
                            // value={this.state.firstname}
                            // onChangeText={(text) => {
                            //     this.handleUpdateState('firstname', text)
                            // }}
                            />
                        </View>
                        <View style={styles.row2}>
                            <TextInput
                                style={styles.input1}
                                placeholder="lastname"
                                autoCapitalize="none"
                                autoCorrect={false}
                            // value={this.state.lastname}
                            // onChangeText={(text) => {
                            //     this.handleUpdateState('lastname', text)
                            // }}
                            />
                        </View>
                    </View>

                    <View style={styles.row3}>
                        <TextInput
                            style={styles.input2}
                            placeholder="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                        // value={this.state.email}
                        // onChangeText={(text) => {
                        //     this.handleUpdateState('email', text)
                        // }}
                        />
                    </View>
                    <View style={styles.inn}>
                        <TextInput
                            style={styles.input2}
                            placeholder="password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            autoCorrect={false}
                        // value={this.state.password}
                        // onChangeText={(text) => {
                        //     this.handleUpdateState('password', text)
                        // }}
                        />
                    </View>
                    <View style={styles.inn}>
                        <TextInput
                            style={styles.input2}
                            placeholder="address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        // value={this.state.address}
                        // onChangeText={(text) => {
                        //     this.handleUpdateState('address', text)
                        // }}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text>Category</Text>
                    </View>
                    <View style={styles.row5}>
                        <Picker
                            style={{ color: "#777" }}
                            // selectedValue={this.state.gender
                        >
                            <Picker.Item label="Mason" value="" />
                            <Picker.Item label="Carpenter" value="Carpenter" />
                            <Picker.Item label="Graphic Designer" value="Graphic Designer" />
                            <Picker.Item label="Hardware Technician" value="Hardware Technician" />
                            <Picker.Item label="Graphic Designer" value="Graphic Designer" />
                        </Picker>
                    </View>

                    <View style={styles.row3}>
                        <TextInput
                            style={styles.input2}
                            placeholder="location"
                            autoCapitalize="none"
                            autoCorrect={false}
                        // value={this.state.location}
                        // onChangeText={(text) => {
                        //     this.handleUpdateState('location', text)
                        // }}
                        />
                    </View>
                    <View style={styles.inn}>
                        <TextInput
                            style={styles.input2}
                            placeholder="contact"
                            autoCapitalize="none"
                            autoCorrect={false}
                        // value={this.state.contact}
                        // onChangeText={(text) => {
                        //     this.handleUpdateState('contact', text)
                        // }}
                        />
                    </View>
                    <View style={styles.last}>
                        <View style={styles.btn1}>
                            <TouchableOpacity onPress={() => { navigation.navigate("ImagePickerExample") }}>
                                <AntDesign style={styles.plus} name="plus" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btn}
                        onPress={this.handleOnSubmit}
                    >
                        <TouchableOpacity onPress={() => { navigation.navigate("HomeScreen") }}>
                            <Text style={styles.formList1}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

// const mapStateToProp=(State)=>{
//     return {auth:state}
// }
// connect({mapStateToProp},{createEmailAccount, registerError})

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    plus: {
        color: "white",
        marginVertical: 25,
        fontSize: 40,
        alignSelf: "center"
    },
    head: {
        marginVertical: 30,
    },
    headtext: {
        color: "green",
        fontWeight: "normal",
        fontSize: 35,
        alignSelf: 'center',
    },
    flow: {
        flexDirection: "row",
        marginHorizontal: 20
    },
    row2: {
        marginHorizontal: 25,
    },
    row3: {
        margin: 20,
    },
    inn: {
        margin: 10,
        marginHorizontal: 20
    },

    field: {
        paddingLeft: 20,
    },

    row5: {
        width: 322,
        height: 40,
        borderColor: "#D3D3D3",
        borderWidth: 1,
        marginHorizontal: 20
    },

    input1: {
        borderColor: "#D3D3D3",
        borderWidth: 1,
        height: 40,
        width: 150,
        paddingHorizontal: 7
    },
    input2: {
        width: 322,
        height: 40,
        borderColor: "#D3D3D3",
        borderWidth: 1,
        paddingHorizontal: 7,
        marginVertical: 3,
        marginVertical: -3,
    },
    last: {
        flexDirection: "row",
    },
    btntext: {
        fontSize: 13,
        marginVertical: 50,
        marginHorizontal: 15,
        color: "white",
    },
    btntext2: {
        color: "green",
    },
    btn1: {
        marginHorizontal: 15,
        backgroundColor: "#D3D3D3",
        height: 100,
        width: 100,
        borderRadius: 60
    },
    last2: {
        marginVertical: 30,
        marginHorizontal: 12,
    },
    btn: {
        marginVertical: 20,
        backgroundColor: "green",
        marginVertical: 25,
        height: 40,
        width: 150,
        alignSelf: "center",
        borderRadius: 20
    },
    formList1: {
        alignSelf: "center",
        marginVertical: 5,
        fontSize: 15,
        color: "white",
        fontSize: 20
    },
})
