import React from 'react';
import {Link} from 'react-router';
import {Search} from '.';

import {AdminBar} from '.';
// import store from 'core/store';

const year = new Date().getFullYear();
const Header = () => (
  <div>
    {true /*store.get().auth*/
      ? (
        <div>
          <Search/>
        </div>
      )
    : null}
    <Link to='/'>
      <div id='header'>
        <div className='edition'>{new Array(20).fill(0).map((a, i) => (
          <span key={i} style={{
            opacity: Math.random(),
            wordSpacing: Math.ceil(Math.random() * 30) + 'px'
          }} className={Math.random() > .8
            ? 'green'
          : ''}>{` edition ${year}`}</span>
          ))}</div>
        <img src='/img/headerLogo.png'/>
      </div>
    </Link>
  </div>
);

export default Header;
