import React from 'react';

import {logout} from '../store/actions/session';
import LoadingImg from '../img/loading.gif';

class Logout extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    logout();
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

export default Logout;
