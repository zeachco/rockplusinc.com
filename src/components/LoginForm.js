import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import sessionAction from '../store/actions/session';

const login = e => {
  e.preventDefault();
  sessionAction.login(e.target.user.value, e.target.pass.value);
}

const LoginForm  = ({
  loading
}) => (
  <form disabled={loading} onSubmit={login}>
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
  loading: PropTypes.bool.isRequired
};

module.exports = connect(state => ({
  loading: state.session.isLoading
}))(LoginForm);
