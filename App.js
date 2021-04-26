import React from 'react';
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

//Screens
import Login from "./App/Screens/Login";
import Home from "./App/Screens/Home";
import SignUp from "./App/Screens/SignUp";
import Profile from "./App/Screens/Profile";
import Imc from "./App/Screens/Imc";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default function App() {

  //colocar um dark mode no app; falta um arquivo style "claro"
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  }

  createStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen 
        name="Home" 
        children={this.homeDrawer}/>
      {/* <Stack.Screen name="BottomTabs" component={this.BottomTabs} /> */}
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>

  homeDrawer = () =>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="IMC" component={Imc} />
    </Drawer.Navigator>

  /* BottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Home" component={Home} 
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () =>(
            <Icon style={[{ color: 'white' }]} size={25} name={'home'}/>
          ),
        }} />
      <MaterialBottomTabs.Screen
        name="IMC" component={Imc} 
        options={{
          tabBarLabel: "IMC",
          tabBarIcon: () =>(
            <Icon style={[{ color: 'white' }]} size={25} name={'weight'}/>
          ),
        }} />
    </MaterialBottomTabs.Navigator>
  } */

  return (
    <NavigationContainer>
      {this.createStack()}
    </NavigationContainer>
  );
}

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
} */

