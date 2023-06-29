import React, { useState}  from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './DashboardCard.css'

const DashboardCard = () => {
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
        <div className="card__container">
          <Card>
            <Card.Body className='card__body'>
              <h1 className='heading'>Profile</h1>
              {error && <Alert variant='danger' className='alert'>{error}</Alert>}
              <p><strong>Email: </strong> {currentUser.email}</p>
              <Link to='/update-account' className='text'>Update Account Information</Link>
            </Card.Body>  
          </Card>  
          <div className='signup__text'>
            <Button variant='link' onClick={handleLogout} className='button'>Log Out</Button>
          </div>
        </div>
    )
}

export default DashboardCard
