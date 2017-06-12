import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({
    item
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
                            <figure className="image is-48x48">
                            <img src={item.files[0]} alt={item.name} />
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
            <a className="card-footer-item">-</a>
            <a className="card-footer-item">+</a>
            <a className="card-footer-item">Remove</a>
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

