import { useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase-config';


const HomeScreen:React.FC = () => {
  const navigator = useNavigation();

  const signOut = ():void => {
    auth
     .signOut()
     .then(() => {
       navigator.navigate("Login");
     })
     .catch(error => console.log(error.message))
  }

  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:20}}>Email : {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    backgroundColor:'#262a34',
    width:'60%',
    padding:15,
    borderRadius:10,
    alignItems:'center',
    marginTop:10,
  },
  buttonText: {
      color:'lightgray',
      fontWeight:'700',
      fontSize:16,
  },
});