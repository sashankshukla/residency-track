import { StyleSheet, Text, KeyboardAvoidingView, View, TextInput, Touchable, TouchableOpacity } from 'react-native'
import {useState} from 'react'

const LoginScreen = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
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
        backgroundColor:'#0a052f',
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
     fontSize : 20,
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor:'lightgray',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer: {
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button: {
        backgroundColor:'#819cfd',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
    },
    buttonText: {
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    buttonOutline: {
        backgroundColor:'lightblue',
        marginTop:5,
        borderColor:'lightblue',
        borderWidth:3,
    },
    buttonOutlineText: {
    color:'black',
    fontWeight:'700',
    fontSize:16,
    },
});