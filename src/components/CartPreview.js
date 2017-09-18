import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import CartIcon from 'react-icons/lib/md/shopping-cart';
import {toggleModal} from '../store/actions/cart';

const CartPreview = ({
    count,
    isLoading
}) => (
    <a
        disabled={count === 0}
        className={cx('button is-primary is-small cartPreview', {'is-loading': isLoading })}
        onClick={() => count > 0 && toggleModal()}
    >
        <CartIcon />
        {count}
    </a>
);

CartPreview.propTypes = {
    count: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired
};

CartPreview.defaultProps = {
    count: 0
};

export default connect(state => ({
    count: state.cart.totalItems,
    isLoading: state.cart.isLoading 
}))(CartPreview);
