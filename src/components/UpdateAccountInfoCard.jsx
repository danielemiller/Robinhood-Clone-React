import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import './SignupCard.css';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const UpdateAccountInfoCard = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const history = useHistory();

    const handleSumbmit = (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true);

        if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))  
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/dashboard')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        });
    }

    return (
        <div className="card__container">
            <Card>
                <Card.Body className='signup__card'>
                    <h1 className='heading'>Update Account</h1>
                    {error && <Alert variant='danger' className='alert'>{error}</Alert>}
                    <Form onSubmit={handleSumbmit} className='form'>
                        <Form.Group id="email" className='form__group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password" className='form__group'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} placeholder='Leave blank to keep the same' />
                        </Form.Group>
                        <Form.Group id="password-confirm" className='form__group'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same' />
                        </Form.Group>
                        <Button disabled={loading} className='button' type='submit'>Save Changes</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='login__text'>
                <Link to='/dashboard'>Cancel</Link>
            </div>
        </div>
    )
}

export default UpdateAccountInfoCard
