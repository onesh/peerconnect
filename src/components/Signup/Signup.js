import React, { useState } from 'react';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const SignupForm = ({ signup, signupErrorMessage }) => {
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
      style={{ 'flexDirection': 'column' }}
      >
      {signupErrorMessage && <Alert severity="error" >{signupErrorMessage}</Alert> }
      <Paper
        style={{
          width: '15%',
          margin: '1%',
          padding: '10%',
        }}>

        <Grid item xs={8}>
        </Grid>
      <Grid item xs={12}>
      <TextField required onChange={event => setUserData({username: event.target.value, password: userData.password})}  label="Username" />
      </Grid>

      <Grid item xs={12}>
      <TextField required onChange={event => setUserData({username: userData.username, password: event.target.value})} label="Password" />
      </Grid>

      <Grid item xs={12}>
        <Button style={{ marginTop: '6%' }} variant="contained" color="primary" disableElevation onClick={() => signup(userData) } label="Password">Signup</Button>
      </Grid>
      <Grid item xs={4}></Grid>
      </Paper>
    </Grid>);
};

SignupForm.propTypes = {
  signupErrorMessage: PropTypes.string,
  signup: PropTypes.func
};


export default SignupForm;