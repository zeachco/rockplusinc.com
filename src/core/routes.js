import React from 'react';
import {Application} from '../components';
import {Logout, Login, Home, NotFound, Products} from '../pages';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import store from '../store';

const requireAuth = (nextState, replace) => {
  const {isAuth, isLoading} = store.getState().session;
  if (!isAuth && !isLoading) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    });
  }
};

function MustNotBeLogged(nextState, replace) {
  const {isAuth, isLoading} = store.getState().session;
  if (isAuth && !isLoading) {
    replace({
      pathname: '/',
      state: {
        nextPathname: nextState.location.pathname
      }
    });
  }
}

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home} onEnter={requireAuth}/>
        <Route path="search/:search" component={Products} onEnter={requireAuth}/>
        <Route path="category/:category" component={Products} onEnter={requireAuth}/>
        <Route path="login" component={Login} onEnter={MustNotBeLogged}/>
        <Route path="logout" component={Logout}/>
        <Route path="*" component={NotFound} onEnter={requireAuth}/>
      </Route>
    </Router>
  );
};

export {Routes};
export default Routes;
