import React from 'react';
import {Header, HeaderNavigation} from '.';

export const Application = props => (
  <div>
    <HeaderNavigation/>
    <Header/>
    <main>{props.children}</main>
  </div>
);

export default Application;
