import { StyleSheet, Text, KeyboardAvoidingView, View, TextInput,TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import {auth} from '../firebase-config';
import { logIn, signUp } from '../controllers/login';
import { useNavigation } from '@react-navigation/native';


const LoginScreen:React.FC = () => {
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const navigator = useNavigation();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
            navigator.navigate("Home");
        }
    })
    return unsubscribe;
  },[]);

  const handleSignUp = ():void => {
    signUp({auth:auth,email:email,password:password});
  }

  const handleLogin = ():void => {
    logIn({auth:auth,email:email,password:password});
  }

  return (
    <KeyboardAvoidingView style= {styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Text style={styles.title}>ResTrack</Text>
        <Text style={styles.subtitle}>Physical Presence Tracker</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor='black' placeholder='email' value={email} 
        onChangeText={text => setEmail(text)} style = {styles.input}></TextInput>
         <TextInput placeholderTextColor='black' placeholder='password' value={password} 
        onChangeText={text => setPassword(text)} secureTextEntry style = {styles.input}></TextInput>
      </View>

      <View style={styles.buttonContainer}>
            <TouchableOpacity
               onPress={handleLogin}
               style = {styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={handleSignUp}
               style = {[styles.button,styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#091c32',
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer:{
       justifyContent:'center',
       alignItems:'center',
       marginBottom:40,
    },
    title:{
      color:'white',
      fontSize: 35,
      fontWeight:'500',
    },
    subtitle:{
     color:'white',
     fontSize : 22,
     fontWeight:'300',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:10,
    },
    buttonContainer: {
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button: {
        backgroundColor:'lightblue',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
    },
    buttonText: {
        color:'#0a052f',
        fontWeight:'700',
        fontSize:16,
    },
    buttonOutline: {
        backgroundColor:'#eab31a',
        marginTop:10,
        borderColor:'#eab31a',
        borderWidth:3,
    },
    buttonOutlineText: {
    color:'#091c32',
    fontWeight:'700',
    fontSize:16,
    },
});