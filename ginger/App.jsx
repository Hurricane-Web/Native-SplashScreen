import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";

export default function App() {

  useEffect(() => {
    if (Platform.OS === "android") {
    SplashScreen.hide();
    }
    }, []);
    
  return (
    <View style={{display:'flex',marginTop:10, justifyContent:'center', alignItems:'center'}} >
      <Text style={{color:'green', fontSize:20}} >Hello world</Text>
    </View>
  )
}