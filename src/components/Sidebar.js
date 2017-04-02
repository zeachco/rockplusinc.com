import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import cx from 'classnames';

const Sidebar = ({ categories, displayName, isMobile, params }) => {
  const current = params && params.category;

  const navigate = (ev) => {
    browserHistory.push(`/category/${ev.target.value}`);
  };

  const renderCategory = ({value, style, label, count}) => {
    const classes = cx(`category__${value}`, {
      current: value === current
    });
    return (
      <li key={value}>
        <Link style={style} className={classes} to={`/category/${value}`}><span className="menu-label">{label}</span> <span className="menu-count">({count})</span></Link>
      </li>
    );
  };

  renderCategory.propTypes = {
    value: React.PropTypes.string.isRequired,
    style: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired
  };

  if (!isMobile) {
    return (
      <div id="sidenav">
        <ul>
          Welcome<br/> {displayName}
          <hr/>
          <li>
            <Link to="/" className={cx({ current })} >Home</Link>
          </li>
          <li>
              <Link to="/logout">logout</Link>
          </li>
          <li>
            <Link style={{
              color: 'red'
            }} to="/category/new">New Products</Link>
          </li>
          <li>
            <Link
              style={{
              color: 'orange'
            }}
              to="/category/arrival">New Arrivals</Link>
          </li>
          <li>
            <Link
              style={{
              color: 'teal'
            }}
              to="/category/clearance">Clearance</Link>
          </li>
          <hr/> {categories.map(renderCategory)}
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
          ...categories
        ].map(cat => (
          <option style={cat.style} key={`category_${cat.value}`} value={cat.value}>{cat.label} ({cat.count})</option>
        ))}
      </select>
    </div>
  }
}

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  displayName: PropTypes.string.isRequired,
  params: PropTypes.object
}

const mapStatetoProps = store => {
  return ({
    isAuth: store.session.isAuth,
    isLoading: store.session.isLoading,
    session: store.session,
    categories: store.categories,
    displayName: store.session.firstName || store.session.username || '',
    isMobile: store.geometry.innerWidth <= 800
  })
};

module.exports = connect(mapStatetoProps)(Sidebar);
