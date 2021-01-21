import { connect } from 'react-redux';
import { fireLogin, fireSignup } from '../../actions';
import Login from './Login';

const mapStateToProps = (state) => {
  const { user, loginErrorMessage } = state;
  return {
    user,
    loginErrorMessage
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: userData => dispatch(fireLogin(userData)),
    signup: userData => dispatch(fireSignup(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
