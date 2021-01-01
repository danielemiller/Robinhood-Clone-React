import React from 'react';
import { Container } from 'react-bootstrap';
import SignupCard from '../components/SignupCard';
import Header from '../components/Header';
import { AuthProvider } from '../context/AuthContext';

const Signup = () => {
    return (
        <AuthProvider>
          <div>
            <Header />    
            <SignupCard />
          </div>  
        </AuthProvider>
    )
}

export default Signup
