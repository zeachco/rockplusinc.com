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
                <p>We are working to automate sending your order through an automatic process, meanwhile, you may save your items in this window</p>
                <a className="button is-success" disabled >Send to RockPlus.inc</a>
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
