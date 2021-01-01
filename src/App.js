import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
        <div className="container">
          <AuthProvider>
            <Router>
                <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/account/:id' component={Dashboard} />
                </Switch>
            </Router>
          </AuthProvider>  
        </div>
  );
}

export default App;
