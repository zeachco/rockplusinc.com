import React from 'react';
import { connect } from 'react-redux';
import { Search } from 'components';
import cx from 'classnames';

const HeaderNavigation = ({ isAuth, scrollY }) => (
  <div className={cx('header-navigation', { fixed: scrollY > 3 })} >
    {isAuth && (<Search />)}
  </div>
);

HeaderNavigation.propTypes = {
  isAuth: React.PropTypes.bool.isRequired,
  scrollY: React.PropTypes.number.isRequired,
};

const mapStatetoProps = store => ({
  isAuth: store.session.isAuth,
  isLoading: store.session.isLoading,
  scrollY: store.geometry.scrollY,
});

const ConnectedHeaderNavigation = connect(mapStatetoProps)(HeaderNavigation);

export { ConnectedHeaderNavigation as HeaderNavigation };
