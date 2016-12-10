import React from 'react';
import {Header, Footer, HeaderNavigation} from '.';

export const Application = props => (
  <div>
    <HeaderNavigation/>
    <Header/>
    <main>{props.children}</main>
    <Footer/>
  </div>
);

export default Application;
