import {
  USER_DATA, LOGIN_ERROR_MESSAGE, SIGNUP_ERROR_MESSAGE
} from '../actions';


const defaultState = {
  user: {
    token: '',
    user: {

    }
  },
  loginErrorMessage: '',
};

export default (state = {
  user: {
    token: '',
    user: {

    }
  },
  loginErrorMessage: '',
}, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user: {
          token: action.payload.user.token,
          user: { ...action.payload.user }
        },
        loginErrorMessage: ''
      };
    case LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        loginErrorMessage: action.payload.loginErrorMessage
      };
    case SIGNUP_ERROR_MESSAGE: 
      return {
        ...state,
        signupErrorMessage: action.payload.signupErrorMessage
      };
    default:
      return defaultState;
  }
};
