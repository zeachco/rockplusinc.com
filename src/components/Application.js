import React from 'react';

import CartContainer from '../containers/CartContainer';
import Header from './Header';
import HeaderNavigation from './HeaderNavigation';

const Application = props => (
  <div>
    <HeaderNavigation/>
    <Header/>
    <CartContainer />
    <main>{props.children}</main>
  </div>
);

export default Application;
