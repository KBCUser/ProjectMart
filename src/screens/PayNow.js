import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const PayNow = ({route,navigation}) => {

    const mid=route.params.mid; 
    var fetchInsertApi="https://lrtextile.com.pk/projectmart/admin/payment_now.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            mid:mid,
            

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Payment has been Pay")
                 {
                    
             
                    navigation.navigate("PaymentRequest");
                 }
                 else{
                  alert('Payment Not been Send Please Try Again');
                  navigation.navigate("PaymentRequest");
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
   
   
  
   
      return(
       
       <View style={{marginTop:30}}>
        <Text>Payment Send Please Wait...!</Text>
       </View>
   
      );
   
   };

   export default PayNow;