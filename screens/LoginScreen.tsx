import { StyleSheet, Text, KeyboardAvoidingView, View, TextInput, Touchable, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../firebase';
//import {auth} from '../firebase';

//initializeApp(firebaseConfig);

const LoginScreen:React.FC = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');

//   const signUp = () => {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth,email, password)
//         .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user.email);
//         })
//         .catch((error) => {
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         });
//     };

//   const logIn = () => {
//     auth
//     .createUserWithEmailAndPassword(email,password)
//     .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log(user.email);
//     })
//     .catch(err => alert(err.message));
//   };

  return (
    <KeyboardAvoidingView style= {styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Text style={styles.title}>ResTrack</Text>
        <Text style={styles.subtitle}>Track your physical presence in Canada</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor='black' placeholder='email' value={email} 
        onChangeText={text => setEmail(text)} style = {styles.input}></TextInput>
         <TextInput placeholderTextColor='black' placeholder='password' value={password} 
        onChangeText={text => setPassword(text)} secureTextEntry style = {styles.input}></TextInput>
      </View>

      <View style={styles.buttonContainer}>
            <TouchableOpacity
               onPress={() => {}}
               style = {styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => {}}
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
        marginTop:5,
        borderColor:'#eab31a',
        borderWidth:3,
    },
    buttonOutlineText: {
    color:'#091c32',
    fontWeight:'700',
    fontSize:16,
    },
});