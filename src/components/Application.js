import React from 'react';
import {Header, Footer} from '.';

export const Application = props => (
  <div>
    <Header/>
    <main>{props.children}</main>
    <Footer/>
  </div>
);

export default Application;
