import React from 'react';
import {Link} from 'react-router';
import {Search} from '.';
import {connect} from 'react-redux';
import HeaderLogo from '../img/headerLogo.png';

const year = new Date().getFullYear();

const Header = ({isAuth}) => (
  <div>
    {isAuth && (<Search/>)}
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
        <img src={HeaderLogo} alt="Rock Plus inc."/>
      </div>
    </Link>
  </div>
);

const mapStatetoProps = (store, ownProps) => ({isAuth: store.session.isAuth, isLoading: store.session.isLoading, session: store.session, categories: store.categories});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch({type: 'LOGOUT_REQUEST'})
});

const ConnectedHeader = connect(mapStatetoProps, mapDispatchToProps)(Header)

export {ConnectedHeader as Header};
export default ConnectedHeader;
