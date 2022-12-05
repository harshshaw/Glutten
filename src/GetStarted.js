import React from 'react';
import {View,Text,Pressable,StyleSheet,ImageBackground} from 'react-native';
import {} from '@rneui/themed';


const image = { uri: "https://thumbs.dreamstime.com/b/female-chef-restaurant-kitchen-cooking-26869165.jpg" };
export const GetStarted = ({navigation}) => {
  return (
    <View style={style.container}>
        {/* <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        /> */}
        <ImageBackground
         source={image}
         resize="cover" 
         style={style.coverImage}/>
        <View style={style.bottomCard}>
           <Text style={style.cardTextHeader}>Every Day Meal</Text>
           <Text style={style.cardTextSubheader}>Healthy, Hygienic
                <Text style={{color:"black"}}> Food</Text>
           </Text>
           
           <View>
            <Pressable style={style.button} 
            onPress={()=>navigation.navigate('Profile')}>
              <Text style={{fontSize:17, fontFamily:"sans-serif",fontWeight:"bold"}}>Get Started</Text>
            </Pressable>
           </View>
           
        </View>
    </View>
  )
}

const style=StyleSheet.create({
 container:{ 
  flex:1,
  backgroundColor:"white",
  flexDirection:'row-reverse',
  flexWrap:'wrap',
  },
 coverImage:{
  width:"100%",
  height:460,
  // flex:1,
  // justifyContent:"center"
 },
 bottomCard:{
  backgroundColor:"#ff5c33",
  height:255,
  width:"100%",
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  justifyContent:"center",
  fontfamily:"sans-serif",
  flexDirection:"column",
  flexWrap:"wrap",
  
 },
 cardTextHeader:{
  fontfamily:"sans-serif",
  fontSize:25,
  textAlign:"center",
  marginLeft:80,
  fontWeight:"bold",
  marginTop:-60,
  color:"white"
 },
 cardTextSubheader:{
  fontfamily:"arial",
  fontSize:25,
  marginLeft:80,
  marginBottom:45,
  fontWeight:"bold",
  color:"white"

 },
 cardTextContent:{
  fontfamily:"arial",
  fontSize:15,
  marginLeft:80,
  marginBottom:25,
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 12,
  borderRadius: 20,
  elevation: 3,
  backgroundColor: 'white',
  marginLeft:120,
  marginRight:30  
},
})
