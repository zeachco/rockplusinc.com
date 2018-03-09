import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Application from '../components/Application';
import Logout from '../pages/Logout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import CartPage from '../pages/Cart';
import store from '../store';

// const Application = props => <div>test<br/>{props.children}</div>

browserHistory.listen(() => window.scrollTo(0, 0));

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

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home} onEnter={requireAuth}/>
        <Route path="search/:search" component={Products} onEnter={requireAuth}/>
        <Route path="category/:category" component={Products} onEnter={requireAuth}/>
        <Route path="cart" component={CartPage} onEnter={requireAuth}/>
        <Route path="login" component={Login} onEnter={MustNotBeLogged}/>
        <Route path="logout" component={Logout}/>
        <Route path="*" component={NotFound} onEnter={requireAuth}/>
      </Route>
    </Router>
  );
};

export default Routes;
