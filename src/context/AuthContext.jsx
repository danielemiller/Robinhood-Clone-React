import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../database/firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState()

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    useEffect( () => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user);
      })
      
      return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        signup
    }
    
    return (
        <AuthContext.Provider value={value}>
          {children}  
        </AuthContext.Provider>
    )
}