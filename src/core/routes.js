import React from 'react';
import {Application} from '../components';
import {Logout, Login, Home, NotFound, Products} from '../pages';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

const Routes = props => {
  const {session} = props;
  const requireAuth = (nextState, replace) => {
    if (!session.isAuth) {
      replace({
        pathname: '/login',
        state: {
          nextPathname: nextState.location.pathname
        }
      });
    }
  };
  return (
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
};

const mapStatetoProps = (store, ownProps) => ({isAuth: store.session.isAuth, isLoading: store.session.isLoading, session: store.session});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user, pass) => dispatch({type: 'LOGIN_REQUEST'})
});

const ConnectedRoutes = connect(mapStatetoProps, mapDispatchToProps)(Routes)

export {ConnectedRoutes as Routes};
export default ConnectedRoutes;
