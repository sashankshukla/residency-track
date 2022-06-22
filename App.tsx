import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen options = {{headerShown: false}} name="Home" component={HomeScreen}/>
         <Stack.Screen  options = {{headerShown: false}} name="Login" component={LoginScreen}/>
         <Stack.Screen  options = {{headerShown: false}} name="Main" component={MainScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171c28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "lightblue",
  }
});

export default App;