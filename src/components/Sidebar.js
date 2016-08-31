import React from 'react';
import {Link} from 'react-router';
// import store from 'core/store';
import {browserHistory} from 'react-router';

const navigate = ev => {
  const category = ev.target.value;
  browserHistory.push('/category/' + category);
}

export const Sidebar = props => {
  const state = props;
  const current = props.params && props.params.category;
  if (window.innerWidth > 800) {
    return (
      <div id="sidenav">
        <ul>
          Welcome<br/> {state.auth.username}
          <hr/>
          <li>
            <Link to='/' className={!current
              ? 'current'
              : ''}>Home</Link>
          </li>
          <li>
            <Link to="/logout">logout</Link>
          </li>
          <hr/> {state.categories.map(cat => (
            <li key={cat._id}>
              <Link style={cat.style} className={cat.link === current
                ? 'current'
                : ''} to={`/category/${cat.link}`}>{cat.name}</Link>
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
            link: 'home',
            name: 'Home'
          },
          ...state.categories
        ].map(cat => (
          <option style={cat.style} key={cat._id} value={cat.link}>{cat.name}</option>
        ))}
      </select>
    </div>
  }
};

export default Sidebar;
