import api from '../lib/api';
import { browserHistory } from 'react-router'

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const USER_DATA = 'USER_DATA';
export const LOGIN_ERROR_MESSAGE = 'LOGIN_ERROR_MESSAGE';
export const SIGNUP_ERROR_MESSAGE = 'SIGNUP_ERROR_MESSAGE';


export const fireLogin = (userData: {username: string, password: string}) => (dispatch) => {
  api('https://be.bhyve-app.com:3020/user/signin', userData).then(data => dispatch({
    type: USER_DATA,
    payload: {
      ...data
    }
  })).catch(({ response }) => {
    const statusCode = response.data.statusCode;
    const loginErrorMessage = response.data.message.forEach ? response.data.message.join('\n') : response.data.message;
    dispatch({
      type: LOGIN_ERROR_MESSAGE,
      payload: {
        loginErrorMessage: {
          type: 'error', message: loginErrorMessage
        }
      }
    });
    if (statusCode === 401) browserHistory.push('/signup');
  });
};

export const fireSignup = (userData: {username: string, password: string}) => (dispatch) => {
  // clear the login error message

  dispatch({
    type: LOGIN_ERROR_MESSAGE,
    payload: {
      loginErrorMessage: {
        type: 'success', message: 'Signup successful, please login now'
      }
    }
  });

  api('https://be.bhyve-app.com:3020/user/signup', userData)
  .then(() => browserHistory.push('/'))
  .catch(({ response }) => {
    const signupErrorMessage = response.data.message.forEach ? response.data.message.join('\n') : response.data.message;
    dispatch({
      type: SIGNUP_ERROR_MESSAGE,
      payload: {
        signupErrorMessage
      }
    }); 
  }) 
};
