import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

const store = require ('../store');
const LoadingImg = require ('../img/loading.gif');

class Logout extends React.Component {
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
              <p><img src={LoadingImg} alt="loading..."/>
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

module.exports = Logout;
