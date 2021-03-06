import * as React from 'react';
import { Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from "./screens/Home";
import Statistic from "./screens/Statistic";
import TimeTable from "./screens/TimeTable";
import Profile from "./screens/Profile";
import ContactUs from "./screens/ContactUs";
import Report from "./screens/Report";
import Root from "./screens/RootScreen";


const Tab = createBottomTabNavigator();

Entypo.loadFont();

function Blank(){
  return(
    <View></View>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name == 'Home') {
      iconName = 'home';
    }else if (route.name == 'Food') {
      iconName = 'google-hangouts';
    }else if (route.name == 'Exercise') {
      iconName = 'user';
    }else if (route.name == 'Profile') {
      iconName = 'user';
    }
    
    return <Entypo name={iconName} size={size} color={color} />;
  },
});

function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={screenOptions}

      tabBarOptions={{
        activeTintColor: '#3282b8',
        inactiveTintColor: '#464962',
      }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Food" component={TimeTable} />
        <Tab.Screen name="Exercise" component={Profile} />
        <Tab.Screen name="Profile" component={Statistic} />
    </Tab.Navigator>
  );
}

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home Workout" component={HomeScreen} />
        <Drawer.Screen name="Report" component={Report} />
        <Drawer.Screen name="Reminder" component={Report} />
        <Drawer.Screen name="Restart progress" component={Report} />
  </Drawer.Navigator>
    </NavigationContainer>
  );
}