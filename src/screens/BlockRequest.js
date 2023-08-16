import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const BlockRequest = ({route,navigation}) => {

    const user_id=route.params.user_id; 
    const user_type=route.params.user_type; 
    var fetchInsertApi="https://lrtextile.com.pk/projectmart/admin/block_request.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            user_id:user_id,
            user_type:user_type,
            

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
                    
             
                    navigation.navigate("ViewRequest");
                 }
                 else{
                  alert('Request Not been Approved Please Try Again');
                  navigation.navigate("ViewRequest");
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
   
   
  
   
      return(
       
       <View style={{marginTop:30}}>
        <Text>Approving Request Please Wait...!</Text>
       </View>
   
      );
   
   };

   export default BlockRequest;