import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';
import RegisterScreen from './RegisterScreen';
import ArtisanProfile from './ArtisanProfile';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'green',
        tabBarIcon: ({ color }) => (
          <Icon name="home-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: 'green',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="notifications-none" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Post Ad"
      component={RegisterScreen}
      options={{
        tabBarLabel: 'Post Ad',
        tabBarColor: 'green',
        tabBarIcon: ({ color }) => (
          <AntDesign name="plussquareo" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: 'green',
        tabBarIcon: ({ color }) => (
          <AntDesign name="setting" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ArtisanProfile}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: 'green',
        tabBarIcon: ({ color }) => (
          <EvilIcons name="user" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Home',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="green" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
  
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: 'green',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="green" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);