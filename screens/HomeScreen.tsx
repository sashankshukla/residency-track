import { useNavigation } from '@react-navigation/native'
import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const HomeScreen:React.FC = () => {
  const navigator = useNavigation();
  const switchScreen = () =>{
     navigator.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/icon.png')}/>
      <Text style={styles.text}>ResTrack</Text>
      <TouchableOpacity style={styles.button}onPress={switchScreen}>
        <Text style={styles.buttonText}>Head to Login</Text>
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
   img : {
    height : '12%',
    width : '25%',
    marginBottom:20,
   },
   text : {
    fontSize:34,
    fontWeight:'200',
    color:'white',
   },
   button: {
    backgroundColor:'#262a34',
    width:'60%',
    marginTop:20,
    padding:15,
    borderRadius:10,
    alignItems:'center',
   },
   buttonText : {
    fontSize:20,
    color:'lightgrey'
   }
})