import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {toggleModal} from '../store/actions/cart';
import CartList from '../components/CartList';

const CartContainer = ({
    visible
}) => visible ? (
    <div className="modal is-active">
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
                <a className="button is-success is-disabled">Send to RockPlus.inc</a>
                <a className="button is-danger is-disabled">Empty cart</a>
            </footer>
        </div>
    </div>
) : null;

CartContainer.propTypes = {
    visible: PropTypes.bool
};

export default connect(state => ({
    visible: state.cart.isVisible
}))(CartContainer);
