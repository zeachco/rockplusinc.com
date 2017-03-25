import React from 'react';

const Header = require('./Header');
const HeaderNavigation = require('./HeaderNavigation');

const Application = props => (
  <div>
    <HeaderNavigation/>
    <Header/>
    <main>{props.children}</main>
  </div>
);

module.exports = Application;
