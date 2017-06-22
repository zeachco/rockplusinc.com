import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AutoBind from 'auto-bind-es5';

import {toggleModal, sendCart} from '../store/actions/cart';
import CartList from '../components/CartList';

class CartContainer extends Component {
    constructor(props) {
        super(props);
        AutoBind(this);
    }
    render() {
        if (this.props.visible) return <div />;
        return (
            <div className="modal is-active">
                <div className="modal-background" onClick={toggleModal} />
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Saved items</p>
                        <button className="modal-close" onClick={toggleModal} />
                    </header>
                    <section className="modal-card-body">
                        <CartList />
                        <hr/>
                        <div className="field">
                            <p className="control">
                                <textarea
                                    className="textarea"
                                    placeholder="Additionnal informations..."
                                    ref={el => this.message = el}
                                />
                            </p>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <a className="button is-success" onClick={() => sendCart(this.message.value)}>Send this order</a>
                        <a className="button is-outline" disabled onClick={() => console.log('reset')}>Empty cart</a>
                    </footer>
                </div>
            </div>
        );
    }
}

CartContainer.propTypes = {
    visible: PropTypes.bool
};

export default connect(state => ({
    visible: state.cart.isVisible
}))(CartContainer);
