import * as React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

export const Dashboard = ({ navigation }) => {
    return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
      );
    };


// const HomeScreen = ({ navigation }) => {
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() =>
//           navigation.navigate('Profile', { name: 'Jane' })
//         }
//       />
//     );
//   };
