import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

 const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)



       

    // create user 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    // sign in user 

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    // google sign in 

    const signWithGoogle = () =>{
      return  signInWithPopup(auth,googleProvider)
    }

  // observer user 

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
        setLoading(false)
        console.log('an user auth current provide ',currentUser)
    })
     return () =>{
        unSubscribe()
     }
  },[])

  // signOut 

  const logOut = () =>{
    return signOut(auth)
  }


       
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signWithGoogle,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider;
