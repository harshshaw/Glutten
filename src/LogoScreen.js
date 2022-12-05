import {React,useEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export const LogoScreen = ({navigation}) => {
   /** the auth is set to false for development stage */ 
   const auth=false; 

   const LoadNextScreen=()=>{
    if(auth!=true)
        return navigation.navigate('GetStarted');
    else
        return navigation.navigate("Profile"); 
   }

    useEffect(() => {
        setTimeout(() => {
            LoadNextScreen();
        }, 3000);
    },[]);

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.LogoText}>Glutten</Text>
            {/* <Button title="test" onPress={()=>navigation.navigate('GetStarted')}></Button> */}
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff5c33',
      alignItems: 'center',
      justifyContent: 'center',

    },
    LogoText:{
        fontSize:45,
        fontFamily:"sans-serif",
        fontWeight:'bold',
        color:'white'
    }
  });
