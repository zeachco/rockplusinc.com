import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {toggleModal, sendCart, emptyCart} from '../store/actions/cart';
import CartList from '../components/CartList';

class CartContainer extends Component {
    render() {
        const {
            visible,
            loading,
            autoclosePrompt
        } = this.props;
        if (!visible) return null;
        const opacity = loading ? .5 : 1;
        return (
            <div className="modal cart-popup is-active">
                <div className="modal-background" onClick={toggleModal} />
                <div className="modal-card" style={{opacity}}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Saved items</p>
                        <button className="delete" onClick={toggleModal} />
                    </header>
                    <section className="modal-card-body">
                        <CartList />
                        <hr/>
                        <div className="field">
                            <p className="control">
                                <textarea
                                    className="textarea"
                                    placeholder="Additional information..."
                                    ref={el => this.message = el}
                                />
                            </p>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <a className="button is-success" onClick={toggleModal}>Continue shopping</a>
                        <a className="button is-success" onClick={() => sendCart(this.message.value, autoclosePrompt)}>Send this order</a>
                        <a className="button is-outline" onClick={() => emptyCart()}>Empty cart</a>
                    </footer>
                </div>
            </div>
        );
    }
}

CartContainer.propTypes = {
    visible: PropTypes.bool,
    loading: PropTypes.bool,
    autoclosePrompt: PropTypes.bool
};

export default connect(state => ({
    visible: state.cart.isVisible,
    loading: state.cart.isLoading,
    autoclosePrompt: !!state.session.email
}))(CartContainer);
