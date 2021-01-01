import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import './LoginCard.css';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const LoginCard = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const handleSumbmit = async (e) => {
        e.preventDefault();

        try {
          setError('')
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value);
        } catch {
          setError('Failed to sign in')  
        }

        setLoading(false)
    }

    return (
        <div className="card__container">
            <Card>
                <Card.Body className='signup__card'>
                    <h1 className='heading'>Login</h1>
                    {error && <Alert variant='danger' className='alert'>{error}</Alert>}
                    <Form onSubmit={handleSumbmit} className='form'>
                        <Form.Group id="email" className='form__group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password" className='form__group'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='button' type='submit'>Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='signup__text'>
                Don't have an account? <Link to='/Signup'>Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginCard
