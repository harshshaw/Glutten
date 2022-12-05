import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from './src/Dashboard';
import {ProfileScreen}from './src/ProfileScreen';
import { GetStarted } from './src/GetStarted';
import { LogoScreen } from './src/LogoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='LogoScreen'
       options={{ headerShown: false }}
      >
        <Stack.Screen
        name="LogoScreen"
        component={LogoScreen}
        options={{headerShown:false}}/>
        
        <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown:false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{ title: 'Welcome' }}
        /> */}
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ headerShown: 'false' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
