import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
import {doc,setDoc,collection,getDoc,addDoc} from '@firebase/firestore';
import {db} from '../firebase-config';

//auth/wrong-password
//auth/invalid-email
//auth/email-already-in-use

// error display
const getErrorMessage = (err:string):string => {
    if(err == "Firebase: Error (auth/invalid-email)." || err == "Firebase: Error (auth/wrong-password).")
       return "Invalid email or password";
    else if(err == "Firebase: Error (auth/email-already-in-use).")
       return "This user already exists"
    return "Error. Unable to login"
}


interface Info{
    auth:any,
    email:string,
    password:string
}

// FIrebase createUser and adds a doc to firestore for user
const signUp = (info:Info):void => {
    createUserWithEmailAndPassword(info.auth,info.email,info.password)
    .then(async userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
        const userId = user.uid;
        try {
            await setDoc(doc(db, "user-data",userId),{
            })
            console.log("Document written");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    })
     .catch (err => {
        const errorToDisplay:string = getErrorMessage(err.message);
        createTwoButtonAlert(errorToDisplay);
        console.log(err.message);
     })
};


// login
const logIn = (info:Info):void => {
signInWithEmailAndPassword(info.auth,info.email,info.password)
.then(userCredentials => {
    const user = userCredentials.user;
    console.log(user.email);
})
    .catch (err => {
    const errorToDisplay:string = getErrorMessage(err.message);
    createTwoButtonAlert(errorToDisplay);
    console.log(err.message);
    })
};

// signup alerts
const createTwoButtonAlert = (error:string) =>
Alert.alert(
    "Error",
    error,
    [
    {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
);


export {logIn,signUp};