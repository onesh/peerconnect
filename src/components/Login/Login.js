import React, { useState } from 'react';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';


const LoginForm = ({ login, loginErrorMessage }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      style={{ 'flexDirection': 'column' }}>
      {loginErrorMessage && <Alert severity={loginErrorMessage.type} >{loginErrorMessage.message}</Alert> }


      <Paper
      style={{
        width: '15%',
        margin: '1%',
        padding: '10%',
      }}>
      <h4>Welcome back! Please login</h4>
    <Grid item xs={8}>
      <Grid item xs={12}>
          <TextField required onChange={event => setUserData({ username: event.target.value.trim(), password: userData.password })} label="Username" />
        </Grid>

      <Grid item xs={12}>
        <TextField required onChange={event => setUserData({ username: userData.username, password: event.target.value.trim() })} label="Password" />
      </Grid>

      <Grid item xs={12}>
        <Button style={{ marginTop: '10%' }} variant="contained" color="primary" disableElevation onClick={() => login(userData)} label="Password" theme="primary" disabled={!userData.username || !userData.password}>Login</Button>
      </Grid>
    
    </Grid>

    <Grid item xs={4}>
    </Grid>
      </Paper>
    </Grid>);
};

LoginForm.propTypes = {
  login: PropTypes.func,
  loginErrorMessage: PropTypes.string
};


if (process.env.WEBPACK) {
  require('./Login.css'); // eslint-disable-line global-require
}

const Login = ({ user, login, loginErrorMessage }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  // user.token ? true : false;
  if (!loggedIn && user.token) {
    setLoggedIn(true);
    // redirect to profile page [edit, or view mode] depending if there is data
  } else {
    return <LoginForm login={login} user={user} loginErrorMessage={loginErrorMessage} />;
  }
};

Login.propTypes = {
  user: PropTypes.object,
  login: PropTypes.func,
  loginErrorMessage: PropTypes.object
};

export default Login;
