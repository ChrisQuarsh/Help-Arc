// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View } from 'react-native';
// import LandingScreen from '../LandingScreen';
// import HomeScreen from '../HomeScreen';
// import SignupScreen from '../SignupScreen';
// import LoginScreen from '../LoginScreen';
// import RegisterScreen from '../RegisterScreen';
// import PaymentScreen from '../RegisterScreen';
// import { NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';
// import AdsScreen from '../AdsScreen';
// import ArtisanProfile from '../ClientProfile';
// import ClientProfile from '../ClientProfile';
// import {connect} from 'redux-thunk';

// const Stack = createStackNavigator()

// function AppContainer({auth}) {
//   return (
//     // <View>
//     //   {/* <LandingScreen /> */}
//     //  {/* <HomeScreen/> */}
//     // {/* <SignupScreen/> */}
//     //   {/* <LoginScreen/> */}
//     //   {/* <RegisterScreen/> */}
//     //   <PaymentScreen/>
//     //   {/* <AdsScreen/> */}
//     // </View>


// <NavigationContainer>
// <Stack.Navigator>
// <Stack.Screen
// name="LandingScreen"
// component={LandingScreen}/>
// <Stack.Screen
// name="HomeScreen"
// component={HomeScreen}/>
// <Stack.Screen
// name="RegisterScreen"
// component={RegisterScreen}/>
// <Stack.Screen
// name="SignupScreen"
// component={SignupScreen}/>
// <Stack.Screen
// name="ClintProfile"
// component={AdsScreen}/>
// <Stack.Screen
// name="ArtisanProfile"
// component={AdsScreen}/>
// {
//     auth.login ?
//     <Stack.Screen
// name="LoginScreen"
// component={LoginScreen}/>
// : 
// <Stack.Screen
// name="AdsScreen"
// component={AdsScreen}/>
// }
// </Stack.Navigator>
// </NavigationContainer>

//   );
// }

// const mapStateToProp = (state) => {
//     return {auth: state}
// }

// export default connect(mapStateToProp)(AppContainer);

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
