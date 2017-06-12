import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';

import Search from './Search';
import CartPreview from './CartPreview';

const HeaderNavigation = ({ isAuth, scrollY, cartTotalItems }) => (
  <div className={cx('header-navigation', { fixed: scrollY > 3 })} >
    {cartTotalItems ? (<CartPreview />) : null}
    {isAuth && (<Search />)}
  </div>
);

HeaderNavigation.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  scrollY: PropTypes.number.isRequired,
  cartTotalItems: PropTypes.number.isRequired
};

const mapStatetoProps = store => ({
  isAuth: store.session.isAuth,
  isLoading: store.session.isLoading,
  scrollY: store.geometry.scrollY,
  cartTotalItems: store.cart.totalItems
});

module.exports = connect(mapStatetoProps)(HeaderNavigation);
