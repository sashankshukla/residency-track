import { useNavigation } from '@react-navigation/native';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase-config';

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
        console.log(err.message);
     })
  };

 

  export {logIn,signUp};