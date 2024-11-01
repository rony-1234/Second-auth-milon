import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
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
