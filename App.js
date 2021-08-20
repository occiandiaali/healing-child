import React from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen';
import StudyScreen from './src/Screens/StudyScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Healing Child" component={HomeScreen} />
        <Tab.Screen name="Settings" component={StudyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
