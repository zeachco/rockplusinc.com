import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './styles/theme.scss';
import './index.html';
import store from './store';
import Routes from './core/routes';
import { fetchCategories, fetchSession } from './store/actions';

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
    });
    document.addEventListener('contextmenu', disableRightClick);
  }
  componentWillUnmount() {
    document.removeEventListener('contextmenu', disableRightClick);
  }
  render() {
    if (this.state.loading) return (<div />);
    return (<Provider store={store}><Routes /></Provider>);
  }
}

export default App;
