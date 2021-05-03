import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { loginEmailAccount } from './actions/authActions';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class LoginScreen extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: "",
    //         password: "",
    //     }
    // }
    // handleUpdateState = (name, value) => {
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleOnSubmit = () => {
    //     {
    //         this.props.loginEmailAccount("email and password do notmatch")

    //     }
    // }
    // connect(mapStateToProp, { loginEmailAccount })
    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Image source={require('./assets/login.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.all}>
                        <View style={styles.login}>
                            <Text style={styles.logtext}>Welcome!</Text>
                        </View>
                        <View style={styles.UserBox}>
                            {/* {
                                auth.error.login &&
                                <Text style={{ color: 'red' }}>{auth.error.login}</Text>
                            }  */}
                            <AntDesign style={styles.user} name="user" size={20} />
                            <TextInput
                                style={styles.input1}
                                placeholder="username"
                                autoCapitalize="none"
                                autoCorrect={false}
                            // value={this.state.username}
                            // onChangeText={(text) => {
                            //     this.handleUpdateState('username', text)
                            // }}
                            />

                        </View >
                        <View style={styles.passwordBox}>
                            <AntDesign style={styles.lock} name="lock1" size={20} />
                            <TextInput
                                style={styles.input2}
                                placeholder="password"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                autoCorrect={false}
                            // value={this.state.password}
                            // onChangeText={(text) => {
                            //     this.handleUpdateState('passwoed', text)
                            // }}
                            />
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity onPress={() => { navigation.navigate("HomeScreen")}} >
                                <Text style={styles.formList1}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// const mapStateToProp = (state) => {
//     return { auth: state }
// }
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
    },
    logtext: {
        color: "green",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        marginHorizontal: 10
    },
    image: {
        height: 200,
        width: 300,
        marginHorizontal: 28,
        marginVertical: 60
    },
    all: {
        marginVertical: 0,
    },
    btn: {
        marginVertical: 20,
        backgroundColor: "green",
        marginVertical: 25,
        height: 40,
        width: 100,
        alignSelf: "center",
        borderRadius: 20
    },
    formList1: {
        alignSelf: "center",
        fontSize: 20,
        color: "white",
        marginVertical: 4
    },
    passwordBox: {
        marginHorizontal: 60,
        marginVertical: 20,
        borderColor: "green",
        borderWidth: 1,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        height: 40


    },
    lock: {
        padding: 10,
    },
    input2: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        color: '#424242',
        fontSize: 17,
        borderRadius: 15
    },
    UserBox: {
        marginHorizontal: 60,
        borderColor: "green",
        borderWidth: 1,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        height: 40
    },
    user: {
        padding: 10,
    },
    input1: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        color: '#424242',
        fontSize: 17,
    },

})

