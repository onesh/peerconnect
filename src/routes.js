import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ErrorHandler from './components/ErrorHandler';
import Login from './components/Login';
import Signup from './components/Signup';

// import ProfilePage from './components/ProfilePage/ProfilePage';
// import EditProfile from './components/EditProfile/EditProfile';


export default (
  <Router>
    <Switch>
      <ErrorHandler>
        <Route path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </ErrorHandler>
    </Switch>
  </Router>
);
