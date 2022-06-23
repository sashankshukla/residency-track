import {StyleSheet, Text, TouchableOpacity, View ,SafeAreaView} from 'react-native'
import { auth } from '../firebase-config';
import {doc,addDoc,setDoc,getDoc} from "@firebase/firestore";
import {db} from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const HomeScreen:React.FC = () => {

  const navigator = useNavigation();
  const signOut = ():void => {
    auth
    .signOut()
    .then(() => {
        navigator.navigate("Home");
    })
    .catch(error => console.log(error.message))
  }
  const userId:string = auth.currentUser? auth.currentUser.uid : "string";

  const addDate = async ():Promise<void> => {
      //const docRef = doc(db, "user-data", userId);
      await setDoc(doc(db, "user-data", userId), {date:new Date()})
      .then( () => {
          console.log('succesful');
      })
      .catch((err) => console.log(err.message));
  }

  const viewDate = async ():Promise<void> => {
      const docRef = doc(db, "user-data", userId);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
      console.log('data : ' + new Date(docSnap.data().date.seconds*1000));
      }
      else{
      console.log('doc dont exist');
      }
  }

  const [selected,changeSelected] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{color:'white',fontSize:20}}>Email : {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addDate} style={styles.button}>
        <Text style={styles.buttonText}>add Date</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={viewDate} style={styles.button}>
        <Text style={styles.buttonText}>view Date</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Get Entry and Exit Data</Text>
      </View> */}
      <View style={styles.inner}>
        <TouchableOpacity onPress={signOut}>
          <Text style={styles.subText}>Sign out</Text>
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.headerText}>Hi, Sashank!</Text>
          <Text style={styles.subText}>View your progress by selecting one of the following:</Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => changeSelected(!selected)} style={[styles.button,styles.b1,{backgroundColor : selected? '#262a34' : 'black'}]}>
          <Text style={styles.buttonText}>PR Renewal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeSelected(!selected)} style={[styles.button,styles.b2,{backgroundColor : !selected? '#262a34' : 'black'}]}>
          <Text style={styles.buttonText}>Citizenship</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.navView}>
        <TouchableOpacity style={[styles.navs,styles.req]}>
          <Text style={[styles.linkText,{color:'white'}]}>View Requirements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navs,styles.apply]}>
          <Text style={styles.linkText}>Apply</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  inner : {
     marginTop:'15%',
     justifyContent:'center',
     alignItems:'center',
  },
  headerText:{
    fontSize:40,
    color:'lightgrey',
  },
  buttonContainer: {
    width:'55%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  button: {
      width:'60%',
      height:'100%',
      borderRadius:7,
      alignItems:'center',
  },
  b1 : {
    marginRight: '10%',
    marginLeft:'10%',
    //backgroundColor: 'black',
  },
  b2 : {
    //backgroundColor:'#6c0f2a',
  },
  buttonText: {
      color:'lightgrey',
      fontWeight:'400',
      fontSize:20,
  },
  subText : {
    fontSize:15,
    color:'lightgrey',
    marginTop:'10%',
  },
  navs:{
    padding:10,
    paddingHorizontal:40,
    backgroundColor:'#262a34',
    borderRadius:7,
    marginBottom:'5%',
    justifyContent:'center',
    alignItems:'center',
  },
  linkText :{
    color:'black',
    fontSize:18,
  },
  navView : {
    justifyContent:'center',
    marginTop:'100%',
  },
  apply:{
    backgroundColor:'lightgrey',
  },
  req:{
    backgroundColor:'#5568fd',
  },
});