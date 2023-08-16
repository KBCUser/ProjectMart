import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const BlockInvestor = ({route,navigation}) => {

    const user_id=route.params.user_id; 
    var fetchInsertApi="https://lrtextile.com.pk/projectmart/admin/block_investor.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            user_id:user_id,
            

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "User has been Block")
                 {
                    
             
                    navigation.navigate("ViewInvestor");
                 }
                 else{
                  alert('User Not been Block Please Try Again');
                  navigation.navigate("ViewInvestor");
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
   
   
  
   
      return(
       
       <View style={{marginTop:30}}>
        <Text>Blocking Investor Please Wait...!</Text>
       </View>
   
      );
   
   };

   export default BlockInvestor;