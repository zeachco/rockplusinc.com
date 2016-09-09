import React from 'react';
import axios from 'axios';
import store from '../store';
import {browserHistory} from 'react-router';

class LoginPage extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }
  submit(ev) {
    ev.preventDefault();
    let username = ev.target.user.value;
    let password = ev.target.pass.value;
    this.setState({message: 'checking...', loading: true});
    store.dispatch({
      type: 'LOGIN_REQUEST',
      payload: {
        username,
        password
      }
    });
    axios.post('/api/v2/login', {username, password}).then(data => {
      this.setState({message: 'Connected!', loading: false});
      store.dispatch({
        type: 'LOGIN_REQUEST_DONE',
        payload: {
          username,
          password
        }
      });
      browserHistory.push('/');
    }).catch(data => {
      store.dispatch({type: 'LOGIN_REQUEST_FAIL', payload: data});
      this.setState({message: 'Could not log you in!', loading: false});
    });
  }
  render() {
    // const {message} = this.props;
    return (
      <form disabled={this.state.loading} onSubmit={this.submit.bind(this)}>
        <p>{this.state.message}</p>
        <p>
          <label htmlFor="log_user">User :
          </label>
          <input required size="15" name="user" type="text" autoFocus={true}/>
          <label htmlFor="log_pass">
            Password :
          </label>
          <input size="15" required name="pass" type="password"/>
          <input type="submit" value="Login"/>
        </p>
      </form>
    );
  }
}

const ConnectedLoginForm = LoginPage;
export {ConnectedLoginForm as LoginForm};
export default ConnectedLoginForm;
