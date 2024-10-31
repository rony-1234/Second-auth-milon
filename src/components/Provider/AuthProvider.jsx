import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
       

    // create user 
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    // sign in user 

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)

    }

    const authInfo = {
        user,
        createUser,
        signIn
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
