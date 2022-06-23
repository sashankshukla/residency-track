import { StyleSheet, Text, KeyboardAvoidingView, View, TextInput,TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import {auth} from '../firebase-config';
import { logIn, signUp } from '../controllers/login';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const LoginScreen:React.FC = () => {
  const navigator = useNavigation();
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
            navigator.navigate("Main");
        }
    })
    return unsubscribe;
  },[]);

  const handleSignUp = ():void => signUp({auth:auth,email:email,password:password});
  const handleLogin = ():void => logIn({auth:auth,email:email,password:password});

  return (
    <KeyboardAvoidingView style= {styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Please sign in or register</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor='lightgray' placeholder='email' value={email} 
        onChangeText={text => setEmail(text)} style = {styles.input}></TextInput>
         <TextInput placeholderTextColor='lightgray' placeholder='password' value={password} 
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
      <View>
      <Text style={{color:'lightgrey', marginTop:15,fontSize:15}}>or</Text>
      </View>
      <View style={styles.iconContainer}>
          {/* <SimpleLineIcons name='social-google' style={[styles.icons,styles.google]}/> */}
          <AntDesign style={[styles.icons,styles.google]} name='google'></AntDesign>
          <AntDesign style={styles.icons} name='github'></AntDesign>
          <AntDesign style={[styles.icons,styles.twitter]} name='twitter'></AntDesign>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer:{
       justifyContent:'center',
       alignItems:'center',
       marginBottom:25,
    },
    title:{
      color:'lightgray',
      fontSize: 30,
      fontWeight:'500',
    },
    subtitle:{
     color:'gray',
     fontSize : 22,
     fontWeight:'300',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor:'#262a34',
        color:'lightgray',
        paddingHorizontal:15,
        paddingVertical:12,
        borderRadius:10,
        marginTop:10,
    },
    buttonContainer: {
        width:'55%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button: {
        backgroundColor:'#5568fd',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
    },
    buttonText: {
        color:'white',
        fontWeight:'500',
        fontSize:16,
    },
    buttonOutline: {
        backgroundColor:'lightgray',
        marginTop:10,
    },
    buttonOutlineText: {
    color:'black',
    fontWeight:'500',
    fontSize:16,
    },
    iconContainer :{
       marginLeft:'5%',
       marginTop: 18,
       flexDirection:'row'
    },
    icons : {
        color: 'lightgray',
        fontSize:30,
        marginRight : 15,
    },
    twitter:{
        color:'#1b96e8',
    },
    google : {
        color:'#ffcb2b',
        borderColor:'red',
    }
});