import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import ForgotPassword from './routes/ForgotPassword'
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute'
import UpdateAccountInfo from './routes/UpdateAccountInfo';

function App() {
  return (
        <div className="container">
          <AuthProvider>
            <Router>
                <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/forgot-password' component={ForgotPassword} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/update-account' component={UpdateAccountInfo} />
                </Switch>
            </Router>
          </AuthProvider>  
        </div>
  );
}

export default App;
