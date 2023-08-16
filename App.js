import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import AdminDashboard from './src/screens/AdminDashboard';
import Logout from './src/screens/Logout';
import ViewInvestor from './src/screens/ViewInvestor';
import BlockInvestor from './src/screens/BlockInvestor';
import ViewPitcher from './src/screens/ViewPitcher';
import BlockPitcher from './src/screens/BlockPitcher';
import ViewRequest from './src/screens/ViewRequest';
import BlockRequest from './src/screens/BlockRequest';
import PaymentRequest from './src/screens/PaymentRequest';
import IdeasList from './src/screens/IdeasList';
import PayNow from './src/screens/PayNow';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">

         <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
         <Stack.Screen name="AdminDashboard" component={AdminDashboard}  />
         <Stack.Screen name="Logout" component={Logout}  />
         <Stack.Screen name="ViewInvestor" component={ViewInvestor}  />
         <Stack.Screen name="BlockInvestor" component={BlockInvestor}  />
         <Stack.Screen name="ViewPitcher" component={ViewPitcher}  />
         <Stack.Screen name="BlockPitcher" component={BlockPitcher}  />
         <Stack.Screen name="ViewRequest" component={ViewRequest}  />
         <Stack.Screen name="BlockRequest" component={BlockRequest}  />
         <Stack.Screen name="PaymentRequest" component={PaymentRequest}  />
         <Stack.Screen name="IdeasList" component={IdeasList}  />
         <Stack.Screen name="PayNow" component={PayNow}  />
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

