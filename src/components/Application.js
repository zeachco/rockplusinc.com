import React from 'react';

import CartContainer from '../containers/CartContainer';
const Header = require('./Header');
const HeaderNavigation = require('./HeaderNavigation');

const Application = props => (
  <div>
    <HeaderNavigation/>
    <Header/>
    <CartContainer />
    <main>{props.children}</main>
  </div>
);

module.exports = Application;
