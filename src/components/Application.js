import React from 'react';
import {Header, Footer} from '.';

export const Application = props => (
  <div>
    <Header/>
    <div>{props.children}</div>
    {/*<Footer/>*/}
  </div>
);

window.onresize = function(ev) {
  console.log(ev);
}

export default Application;
