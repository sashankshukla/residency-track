import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

interface Info{
    auth:any,
    email:string,
    password:string
}

interface A{
    auth:any;
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