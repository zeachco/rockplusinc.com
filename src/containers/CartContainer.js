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
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Saved items</p>
                <button className="modal-close" onClick={toggleModal} />
            </header>
            <section className="modal-card-body">
                <CartList />
            </section>
            <footer className="modal-card-foot">
                <a className="button is-success">Send to RockPlus.inc</a>
                <a className="button is-danger">Empty cart</a>
            </footer>
        </div>
    </div>
);

CartContainer.propTypes = {
    visible: PropTypes.bool
};

export default connect(state => ({
    visible: state.cart.isVisible
}))(CartContainer);
