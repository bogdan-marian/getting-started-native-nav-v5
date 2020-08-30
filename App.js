// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen, SignIn} from './Screens'

const AuthStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="Home" component={HomeScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;