import React from 'react';
import PropTypes from 'prop-types';

import {addToCart} from '../store/actions/cart';

const addQty = (item, qty) => ev => {
    ev.preventDefault();
    addToCart(item, qty);
}

const CartItem = ({
    item,
    quantity
}) => (
    <div className="card">
        <header className="card-header">
            <p className="card-header-title">
                {item.name}
            </p>
            <a className="card-header-icon">
            <span className="icon">
                <i className="fa fa-angle-down"></i>
            </span>
            </a>
        </header>
        <div className="card-content">
            <div className="content">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128" style={{
                                    width: '128px',
                                    height: 'auto'
                                }}
                                      >
                                <img src={item.files && item.files[0]} alt={item.name}  style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%'
                                }}/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{item.name}</p>
                            <p className="subtitle is-6">{item.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="card-footer">
            <a className="card-footer-item" onClick={addQty(item._id, -1)}>-</a>
            <span className="card-footer-item">{quantity}</span>
            <a className="card-footer-item" onClick={addQty(item._id, 1)}>+</a>
        </footer>
    </div>
);

CartItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        shortDescription: PropTypes.string,
        files: PropTypes.array
    }).isRequired,
    quantity: PropTypes.number.isRequired
}

export default CartItem;

