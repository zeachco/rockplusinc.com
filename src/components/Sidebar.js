import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import cx from 'classnames';

const Sidebar = ({ categories, displayName, isMobile, params }) => {
  const current = params && params.category;

  const navigate = (ev) => {
    browserHistory.push(`/category/${ev.target.value}`);
  };

  const renderCategory = ({value, parent, style, label, count}) => {
    const classes = cx(`category__${value}`, {
      current: value === current,
      subCategory: !!parent
    });
    const subs = categories.filter(c => c.parent === value).map(c => c.label);
    if(subs.length === 0 && count === 0) return null;
    if(parent) {
      const parentConfig = categories.filter(c => c.value === parent)[0];
      style = parentConfig.style;
    }
    if(subs.length) {      
      return (
        <li key={value}>
          <a style={style} title={subs.join(', ')} className={classes} ><span className="menu-label-parent">{label}</span></a>
        </li>
      );
    } else {
      return (
        <li key={value}>
          <Link style={style} title={subs.join(', ')} className={classes} to={`/category/${value}`}><span className="sidebar-menu-label">{label}</span> <span className="menu-count">({count})</span></Link>
        </li>
      );
    }
  };

  renderCategory.propTypes = {
    value: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    parent: PropTypes.string
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
        <option value="none">-- select a category --</option>
        {categories.map(cat => (
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

export default connect(mapStatetoProps)(Sidebar);
