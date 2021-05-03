import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, } from 'react-native';
import ImagePickerExample from './ImagePickerExample';
import { NavigationContainer, } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './MainTabScreen';

import { DrawerContent } from './DrawerContent';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
// import ArtisanProfile from './ArtisanProfile';
// import AdsProfile from './AdsProfile';
import RegisterScreen from './RegisterScreen';
import SettingsScreen from './SettingsScreen';
import SupportScreen from './SupportScreen';
import DetailsScreen from './DetailsScreen';
import BookmarkScreen from './BookmarkScreen';
import ArtisanProfile from './ArtisanProfile';
import AdsProfile from './AdsProfile';
import LoginScreen from './LoginScreen';





const Drawer = createDrawerNavigator();


function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={MainTabScreen} />
        <Drawer.Screen name=" SupportScreen" component={SupportScreen} />
        <Drawer.Screen name=" SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <Drawer.Screen name="ArtisanProfile" component={ArtisanProfile} />
        <Drawer.Screen name="AdsProfile" component={AdsProfile} />
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="ImagePickerExample" component={ImagePickerExample} />
      </Drawer.Navigator>
    </NavigationContainer>


    // <View style={{ flex: 1 }}>
    //   {/* <HomeScreen /> */}
    //   {/* <LoginScreen /> */}
    //   {/* <RegisterScreen /> */}
    //   {/* <AdsScreen /> */}
    //   {/* <AdsProfile /> */}
    //   {/* <DrawerContent /> */}
    //   {/* <MainTabScreen /> */}
    //   {/* <ImagePickerExample />  */}
    // </View>


    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen
    //       name="LandingScreen"
    //       component={LandingScreen} /> */}
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name=" SupportScreen" component={SupportScreen} />
    //     <Drawer.Screen name=" SettingsScreen" component={SettingsScreen} />
    //     <Drawer.Screen name="BookmarkScreen " component={BookmarkScreen} />
    //     <Stack.Screen
    //       name="HomeScreen"
    //       component={HomeScreen} />
    //     <Stack.Screen
    //       name="RegisterScreen"
    //       component={RegisterScreen} />
    //     <Stack.Screen
    //       name="SignupScreen"
    //       component={SignupScreen} />
    //     <Stack.Screen
    //       name="ClientProfile"
    //       component={ClientProfile} />
    //     <Stack.Screen
    //       name="ArtisanProfile"
    //       component={ArtisanProfile} />
    //     <Stack.Screen
    //       name="LoginScreen"
    //       component={LoginScreen} />
    //     <Stack.Screen
    //       name="AdsScreen"
    //       component={AdsScreen} />
    //     <Stack.Screen
    //       name="AdsProfile"
    //       component={AdsProfile} />
    //     <Stack.Screen
    //       name="PaymentScreen"
    //       component={PaymentScreen} />
    //     <Stack.Screen
    //       name="BookmarkScreen"
    //       component={BookmarkScreen} />
    //     <Stack.Screen
    //       name="SettingsScreen"
    //       component={SettingsScreen} />
    //     <Stack.Screen
    //       name="SupportScreen"
    //       component={SupportScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
















// import React from 'react';
// import { Provider } from 'react-redux';
// import { View, } from 'react-native';
// import store from './Redux/store';
// import AppContainer from './navigation/navigation';



// export default function App() {
//   return (
//   //   // <View>
//   //   //   {/* <LandingScreen /> */}
//   //   //   {/* <HomeScreen /> */}
//   //   //   {/* <SignupScreen /> */}
//   //   //   {/* <LoginScreen /> */}
//   //   //   {/* <RegisterScreen /> */}
//   //   //   {/* <PaymentScreen /> */}
//   //   //   {/* <ClientProfile /> */}
//   //   //   <ArtisanProfile />
//   //   //   {/* <AdsScreen /> */}
//   //   // </View>

//   <Provider>
//     <AppContainer />
//   </Provider>
//   );
// }

// {/* <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="LandingScreen" component={LandingScreen} />
//     <Stack.Screen name="HomeScreen" component={HomeScreen} />
//     <Stack.Screen name="SignupScreen" component={SignupScreen} />
//     <Stack.Screen name="LoginScreen" component={LoginScreen} />
//     <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//     <Stack.Screen name="AdsScreen" component={AdsScreen} />
//   </Stack.Navigator>
// </NavigationContainer> */}
