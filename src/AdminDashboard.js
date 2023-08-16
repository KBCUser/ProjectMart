import React, {useEffect,useState} from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const AdminDashboard = ({route,navigation})=>{




   return (
    <View style={styles.container}>
        

    
     
  
       

    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("AddIdea")}>
    <Image style={styles.lineimage}  source={require("../../assets/idea.png")} />
    <Text style={styles.linetext}>Investor's</Text>

    </TouchableOpacity>

    </View>
    
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("MyIdeas")}>
    <Image style={styles.lineimage}  source={require("../../assets/idealist.png")} />
    <Text style={styles.linetext}>Pitcher's</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("PaymentRequest")}>
    <Image style={styles.lineimage}  source={require("../../assets/idealist.png")} />
    <Text style={styles.linetext}>Payment Request</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} >
    <Image style={styles.lineimage}  source={require("../../assets/speak.png")} />
    <Text style={styles.linetext}>Update Request</Text>

    </TouchableOpacity>

    </View>
    
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("Logout")}>
    <Image style={styles.lineimage}  source={require("../../assets/logout.png")} />
    <Text style={styles.linetext}>Logout</Text>

    </TouchableOpacity>

    </View>



     
    
  </View>

   );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop:40,
      backgroundColor:'white' // if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    },
    item1: {
        width: '23%' // is 50% of container width
      },
    item2: {
        width: '70%', // is 50% of container width
        marginTop:12
      },

      imagestyle:{
          marginTop:10,
          marginStart:10,
          height:60,
          width:60
      }  ,
      column1:{
         alignContent:"center",
         padding:20,
         justifyContent: 'center',
         alignItems: 'center',
      },
      linetext:{
         textAlign:"center",
         fontSize:16,
         marginTop:5,
         marginRight:1

      },
      lineimage:{
        justifyContent: 'center',
        alignItems: 'center',

      },
  });

export default AdminDashboard;