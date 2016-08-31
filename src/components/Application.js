import React from 'react';
import {Header, Footer} from '.';

const Application = props => (
  <div>
    <RockPlusHeader/>
    <div>{props.children}</div>
    <Footer/>
  </div>
);

window.onresize = function(ev) {
  console.log(ev);
}

export default Application;
