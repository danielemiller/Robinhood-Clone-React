import React, { useState}  from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
const Dashboard = () => {
    const [ error, setError ] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    
    async function handleLogout() {
        setError('')

        try {
          await logout();
          history.push('/login')
        } catch {

        }
    };
    
    return (
        <>
          <Card>
            <Card.Body>
              <h1 className='heading'>Profile</h1>
              {error && <Alert variant='danger' className='alert'>{error}</Alert>}
              <strong>Email: </strong> {currentUser.email}
              <Link to='/update-profile' className='btn btn-primary'>Update Profile</Link>
            </Card.Body>  
          </Card>  
          <div className='signup__text'>
            <Button variant='link' onClick={handleLogout}>Log Out</Button>
          </div>
        </>
    )
}

export default Dashboard
