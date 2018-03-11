import React, { Component } from 'react';

import './styles/theme.css';
import './store/actions/geometry'; // watches for resize / scroll
import Routes from './core/routes'
import { fetchCategories } from './store/actions/categories'
import { fetchSession } from './store/actions/session'

const disableRightClick = ev => ev.preventDefault();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    fetchCategories();
    fetchSession()
      .then(() => this.setState({ loading: false }))
      .catch(err => {
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

export default App;
