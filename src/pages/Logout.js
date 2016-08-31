import React from 'react';
// import store from 'core/store';
// import bridge from 'core/bridge';
import {browserHistory} from 'react-router';

class LoginPage extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    bridge.delete('/api/v2/logout').then(() => {
      store.set('auth', false);
      this.setState({loading: false});
      browserHistory.push('/');
    });
  }
  componentWillUnmount() {
    // console.log('unmount!');
  }
  render() {
    return (
      <div id="login">
        <form>
          {this.state.loading
            ? (
              <p><img src="/img/loading.gif"/>
                <i>&nbsp;Login you out...</i>
              </p>
            )
            : (
              <p>
                Thank you, come again!
              </p>
            )}
        </form>
      </div>
    );
  }
}

export default LoginPage;
