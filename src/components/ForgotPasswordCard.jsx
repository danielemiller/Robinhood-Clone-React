import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPasswordCard = () => {
    const emailRef = useRef();
    const { login, resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState('');

    const handleSumbmit = async (e) => {
        e.preventDefault();

        try {
          setError('')
          setLoading(true)
          await resetPassword(emailRef.current.value);
          setMessage('Check your inbox for further instructions')
        } catch {
          setError('Failed to reset password')  
        }

        setLoading(false)
    }

    return (
        <div className="card__container">
            <Card>
                <Card.Body className='signup__card'>
                    <h1 className='heading'>Password Reset</h1>
                    {error && <Alert variant='danger' className='alert'>{error}</Alert>}
                    {message && <Alert variant='success' className='alert'>{message}</Alert>}
                    <Form onSubmit={handleSumbmit} className='form'>
                        <Form.Group id="email" className='form__group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='button' type='submit'>Reset Password</Button>
                    </Form>
                    <div className='signup__text'>
                      <Link to='/login'>Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='signup__text'>
                Don't have an account? <Link to='/Signup'>Sign Up</Link>
            </div>
        </div>
    )
}

export default ForgotPasswordCard