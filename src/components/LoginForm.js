import React from 'react';
// import store from 'core/store';
// import bridge from 'core/bridge';
import {browserHistory} from 'react-router';

class LoginPage extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }
  componentDidMount() {
    // bridge.delete('/api/v2/logout');
  }
  componentWillUnmount() {
    // console.log('unmount!');
  }
  submit(ev) {
    ev.preventDefault();
    let username = ev.target.user.value;
    let password = ev.target.pass.value;
    this.setState({message: 'checking...', loading: true});
    bridge.post('/api/v2/login', {username, password}).then(data => {
      this.setState({message: 'connected!', loading: false});
      store.set('auth', data);
      browserHistory.push('/');
    });
  }
  render() {
    const {message} = this.props;
    return (
      <form disabled={this.state.loading} onSubmit={this.submit.bind(this)}>
        <p>{message}</p>
        <p>
          <label for="log_user">User :
          </label>
          <input required size="15" name="user" type="text" autoFocus={true}/>
          <label for="log_pass">
            Password :
          </label>
          <input size="15" required name="pass" type="password"/>
          <input type="submit" value="Login"/>
        </p>
      </form>
    );
  }
}

export default LoginPage;
