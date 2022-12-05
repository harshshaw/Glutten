import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

export const GetStarted = ({navigation}) => {
  return (
    <View>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
    </View>
  )
}
