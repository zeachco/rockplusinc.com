import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import sessionAction from '../store/actions/session';
import UserSpanMessage from '../components/UserSpanMessage';

const login = e => {
  e.preventDefault();
  sessionAction.login(e.target.user.value, e.target.pass.value);
}

const LoginForm  = ({
  loading,
  lastLoginFailed
}) => (
  <form disabled={loading} onSubmit={login}>
    <UserSpanMessage
      shouldAppear={`${lastLoginFailed}`}
      text="Your last login failed, check your user and password then try again" 
    />
    <br/><br/>
    <div className="log_container">
      <label htmlFor="log_user">User&nbsp;
        <input required size="15" name="user" type="text" />
      </label>
      <label htmlFor="log_pass">
        Password&nbsp;
        <input size="15" required name="pass" type="password" />
      </label>
    </div>
    <input type="submit" value="Login" />
  </form>
);

LoginForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  lastLoginFailed: PropTypes.bool
};

export default connect(state => ({
  loading: state.session.isLoading,
  lastLoginFailed: state.session.isFailedLogin
}))(LoginForm);
