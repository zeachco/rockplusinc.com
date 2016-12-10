import React from 'react';
import {connect} from 'react-redux';
import {Search, Cart} from '.';

const HeaderNavigation = ({isAuth, scrollY}) => {
    return (
        <div className={'header-navigation' + (scrollY > 3 ? ' fixed' :'')}>
            {isAuth && (<Cart/>)}
            {isAuth && (<Search/>)}
        </div>
    );
};

const mapStatetoProps = store => ({
    isAuth: store.session.isAuth,
    isLoading: store.session.isLoading,
    scrollY: store.geometry.scrollY
});

const ConnectedHeaderNavigation = connect(mapStatetoProps)(HeaderNavigation)

export {ConnectedHeaderNavigation as HeaderNavigation};