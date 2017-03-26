import React, { Component } from 'react';

import './styles/theme.scss';
require('./store/actions/geometry'); // watches for resize / scroll

const Routes = require('./core/routes');

const { fetchCategories } = require('./store/actions/categories');
const { fetchSession } = require('./store/actions/session');

const disableRightClick = ev => ev.preventDefault();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    fetchCategories();
    fetchSession().then(() => {
      this.setState({ loading: false });
    }).catch(err => {
      throw err;
      // this.setState({ loading: false, error: xhr });
    });
    document.addEventListener('contextmenu', disableRightClick);
  }
  componentWillUnmount() {
    document.removeEventListener('contextmenu', disableRightClick);
  }
  render() {
    const { loading, error} = this.state;
    if (loading) return (<div>loading...</div>);
    if (error) return (
      <div>
        <h1>500 - An error occured!</h1>
        <p>please refresh to try again.</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
    return (<Routes />);
  }
}

module.exports = App;
