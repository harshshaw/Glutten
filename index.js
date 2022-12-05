import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import app from "./App";

const Index = () => {
  return (
    <NavigationContainer
    navigationOptions={{headerShown: false}}>
      <app/>
    </NavigationContainer>
  );
};

export default Index;