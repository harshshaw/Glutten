import * as React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebaseConfig";

export const ProfileScreen = () => {
  // const auth = getAuth();
createUserWithEmailAndPassword(auth, "try@try.com", "12345678")

  .then((userCredential) => {
    // Signed in 
    alert("done");
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

 
  return (
    <View>
        <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

