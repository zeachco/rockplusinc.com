import React from 'react'
import store from 'core/store';
import {Link} from 'react-router';

const AdminBar = () => {
  const auth = store.get().auth;

  const requireRole = (role, child) => (auth && auth.roles.indexOf(child)
    ? child
    : null);

  return (
    <ul id="admin_bar">
      {requireRole(/^user*/, (
        <li>
          <Link to="/users">Users</Link>
        </li>
      ))}
      {requireRole(/^user*/, (
        <li>
          <Link to="/logs">Logs</Link>
        </li>
      ))}
      {requireRole(/^user*/, (
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      ))}
      {requireRole(/^user*/, (
        <li>
          <Link to="/items">Items</Link>
        </li>
      ))}
      {requireRole(/^user*/, (
        <li>
          <Link to="/backorder">Backorder</Link>
        </li>
      ))}
    </ul>
  );
};

export default AdminBar;
