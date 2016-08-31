import React from 'react';
// import store from './store';
import {Application} from '../components';
import {Logout, Login, Home, NotFound, Products} from '../pages';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';

const requireAuth = (nextState, replace) => {
  // if (!store.get().auth) {
  //   replace({
  //     pathname: '/login',
  //     state: {
  //       nextPathname: nextState.location.pathname
  //     }
  //   });
  // }
};

const Routes = props => (
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Home} onEnter={requireAuth.bind(props)}/>
      <Route path="search/:search" component={Products} onEnter={requireAuth}/>
      <Route path="category/:category" component={Products} onEnter={requireAuth}/>
      <Route path="login" component={Login}/>
      <Route path="logout" component={Logout}/>
      <Route path="*" component={NotFound} onEnter={requireAuth}/>
    </Route>
  </Router>
);

export default Routes;
