import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import {toggleModal} from '../store/actions/cart';
import CartList from '../components/CartList';

const CartContainer = ({
    visible
}) => (
    <div className={cx('modal', {'is-active': visible})}>
        <div className="modal-background" onClick={toggleModal} />
            <div className="modal-content">
                <CartList />
            </div>
        <button className="modal-close" onClick={toggleModal} />
    </div>
);

CartContainer.propTypes = {
    visible: PropTypes.bool
};

export default connect(state => ({
    visible: state.cart.isVisible
}))(CartContainer);
