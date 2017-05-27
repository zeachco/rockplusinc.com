import React from 'react';
import axios from 'axios';
import store from '../store';
import {browserHistory} from 'react-router';
import sessionAction from '../store/actions/session';

class LoginForm extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }
  submit(ev) {
    ev.preventDefault();
    let username = ev.target.user.value;
    let password = ev.target.pass.value;
    this.setState({message: 'checking...', loading: true});
    sessionAction.login(username, password);
  }
  render() {
    // const {message} = this.props;
    return (
      <form disabled={this.state.loading} onSubmit={this.submit.bind(this)}>
        <p>{this.state.message}</p>
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
  }
}

module.exports = LoginForm;
