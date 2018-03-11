import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

const HeaderLogoImage = require('../img/headerLogo.png');
const year = new Date().getFullYear();

const repeats = [];
for (let i = 1; i <= 20; i++) {
  const style = {
    opacity: Math.random(),
    wordSpacing: Math.ceil(Math.random() * 30) + 'px'
  };
  repeats.push(<span key={`edition_text_${i}`} style={style} className={cx({green: Math.random() > .8})}>{` edition ${year}`}</span>);
}

const Header = () => (
  <div>
    <Link to='/'>
      <div id='header'>
        <div className='edition'>{repeats}</div>
        <img className="rockplus-header-logo" src={HeaderLogoImage} alt="Rock Plus inc." />
      </div>
    </Link>
  </div>
);

export default Header;
