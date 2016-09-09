import React from 'react';
import store from '../store';
import axios from 'axios';
import {browserHistory} from 'react-router';

export class Logout extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    // console.log('mount!');
    this.setState({loading: true});
    axios.delete('/api/v2/logout').then(() => {
      store.dispatch({type: 'LOGIN_REQUEST_FAIL'});
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
              <p><img src="/img/loading.gif" alt="loading..."/>
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

export default Logout;
