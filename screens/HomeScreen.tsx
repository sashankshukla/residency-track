import { useNavigation } from '@react-navigation/native';
import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const HomeScreen:React.FC = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/react-icon.png')}/>
      <Text style={styles.text}>ResTrack</Text>
      <Text style={[styles.text,{fontWeight:'500',fontSize:35,marginVertical:'10%'}]}>Tracking your physical presence made easier</Text>
      <TouchableOpacity style={styles.button}onPress={() => {navigator.navigate("Login")}}>
        <Text style={styles.buttonText}>Get Started</Text>
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
    justifyContent:'flex-start',
    alignItems:'center',
   },
   img : {
    tintColor:'#5568fd',
    height : '32%',
    width : '80%',
    marginBottom:20,
    marginTop:'30%',
   },
   text : {
    fontSize:34,
    fontWeight:'200',
    color:'lightgray',
   },
   button: {
    backgroundColor:'#262a34',
    width:'60%',
    marginTop:20,
    padding:15,
    borderRadius:10,
    alignItems:'center',
    borderWidth:1,
    borderColor:'#5568fd'
   },
   buttonText : {
    fontSize:20,
    color:'lightgrey'
   }
})