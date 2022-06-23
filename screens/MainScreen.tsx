import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase-config';
import {doc,addDoc,setDoc,getDoc} from "@firebase/firestore";
import {db} from '../firebase-config';
import { navigator } from '../App';

const HomeScreen:React.FC = () => {
  const signOut = ():void => {
    auth
     .signOut()
     .then(() => {
       navigator.navigate("Login");
     })
     .catch(error => console.log(error.message))
  }


  // current user for firestore queries
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
      console.log('data : ' + docSnap.data().date);
    }
    else{
      console.log('doc dont exist');
    }

  }


  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:20}}>Email : {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addDate} style={styles.button}>
        <Text style={styles.buttonText}>add Date</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={viewDate} style={styles.button}>
        <Text style={styles.buttonText}>view Date</Text>
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