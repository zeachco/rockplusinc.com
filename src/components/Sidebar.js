import React from 'react';
import {Link} from 'react-router';
// import store from 'core/store';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

const navigate = ev => {
  browserHistory.push(ev.target.value);
}

const Sidebar = props => {
  const state = props;
  const {categories, displayName} = props;
  const current = props.params && props.params.category;
  if (window.innerWidth > 800) {
    return (
      <div id="sidenav">
        <ul>
          Welcome<br/> {displayName}
          <hr/>
          <li>
            <Link to='/' className={!current
              ? 'current'
              : ''}>Home</Link>
          </li>
          <li>
            <Link to="/logout">logout</Link>
          </li>
          <hr/> {categories.map(cat => (
            <li key={cat.value}>
              <Link style={cat.style} className={cat.value === current
                ? 'current'
                : ''} to={`/category/${cat.value}`}>{cat.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div className="mobile_categories">
      <select onChange={navigate} value={current || 'home'}>
        {[
          {
            value: 'home',
            label: 'Home'
          },
          ...state.categories
        ].map(cat => (
          <option style={cat.style} key={cat.value} value={cat.value}>{cat.label}</option>
        ))}
      </select>
    </div>
  }
};

const mapStatetoProps = (store, ownProps) => {
  return ({
    isAuth: store.session.isAuth,
    isLoading: store.session.isLoading,
    session: store.session,
    categories: store.categories,
    displayName: store.session.firstName || store.session.username
  })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch({type: 'LOGOUT_REQUEST'})
});

const ConnectedSidebar = connect(mapStatetoProps, mapDispatchToProps)(Sidebar)

export {ConnectedSidebar as Sidebar};
