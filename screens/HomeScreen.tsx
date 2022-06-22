import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const HomeScreen:React.FC = () => {
  const navigator = useNavigation();
  const switchScreen = () =>{
     navigator.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity onPress={switchScreen}>
        <Text style={styles.text}>Head to Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
   container:{
    backgroundColor:'black',
    color:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   },
   text : {
    color:'white',
   }
})