import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import './SignupCard.css';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const SignupCard = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const handleSumbmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
          setError('')
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
          setError('Failed to create an account')  
        }

        setLoading(false)
    }

    return (
        <div className="card__container">
            <Card>
                <Card.Body className='signup__card'>
                    <h1 className='heading'>Sign Up</h1>
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
                        <Form.Group id="password-confirm" className='form__group'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='button' type='submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='login__text'>
                Already have an account? <Link to='/Login'>Log In</Link>
            </div>
        </div>
    )
}

export default SignupCard
