// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  creatBottomTabNavigator,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { SignIn, CreateAccount, Profile, Home ,Search} from "./Screens";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Profile" component={Search}/>
  </SearchStack.Navigator>
)

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Search" component={SearchStackScreen} />
      </Tabs.Navigator>

      {/* <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Sign In" }}
        />
        <AuthStack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: "Create Account" }}
        />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
