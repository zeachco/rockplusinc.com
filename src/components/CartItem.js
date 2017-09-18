import React from 'react';
import PropTypes from 'prop-types';

import {addToCart} from '../store/actions/cart';

const addQty = (item, qty, options) => ev => {
    ev.preventDefault();
    addToCart(item._id, qty, options);
}

const CartItem = ({
    item,
    quantity,
    options
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
                            { Object.keys(options).map(key => (<p key={key} className="subtitle is-6">{ `${key}: ${options[key]}`}</p>)) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="card-footer">
            <a className="card-footer-item" onClick={addQty(item, -1, options)}>-</a>
            <span className="card-footer-item">{quantity}</span>
            <a className="card-footer-item" onClick={addQty(item, 1, options)}>+</a>
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
    quantity: PropTypes.number.isRequired,
    options: PropTypes.object
};

CartItem.defaultProps = {
    options: {}
};

export default CartItem;

