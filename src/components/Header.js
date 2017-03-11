import React from 'react';
import { Link } from 'react-router';
import HeaderLogoImage from '../img/headerLogo.png';

const year = new Date().getFullYear();

export const Header = () => (
  <div>
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
        <img className="rockplus-header-logo" src={HeaderLogoImage} alt="Rock Plus inc." />
      </div>
    </Link>
  </div>
);
