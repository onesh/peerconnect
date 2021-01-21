import { connect } from 'react-redux';
import { fireSignup } from '../../actions';
import Signup from './Signup';

const mapStateToProps = (state) => {
  const { signupErrorMessage } = state;
  return {
    signupErrorMessage
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: userData => dispatch(fireSignup(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
