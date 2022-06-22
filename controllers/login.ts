import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';


//auth/wrong-password
//auth/invalid-email
//auth/email-already-in-use

const getErrorMessage = (err:string):string => {
    if(err == "Firebase: Error (auth/wrong-password).")
       return "Incorrect password"
    else if(err == "Firebase: Error (auth/invalid-email).")
       return "Invalid email";
    else if(err == "Firebase: Error (email-already-in-use).")
       return "This user already exists"
    else
       return "Error. Unable to login"
}


interface Info{
    auth:any,
    email:string,
    password:string
}

const signUp = (info:Info):void => {
    createUserWithEmailAndPassword(info.auth,info.email,info.password)
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