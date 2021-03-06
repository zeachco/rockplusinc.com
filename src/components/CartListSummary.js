import React from 'react';
import PropTypes from 'prop-types';

const total = (items => items
    .reduce((sum, item) => (sum + item.quantity * item.data.getPrice()), 0)
    .toFixed(2)
);

const CartListSummary = ({
    items
}) => (
    <div className="card">
        <header className="card-header">
            <p className="card-header-title">
                Cart Summary
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
                    <div className="columns">
                        <div className="column">
                        Total
                        </div>
                        <div className="column">
                        {total(items)} $
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="card-footer">
        </footer>
    </div>
);

CartListSummary.propTypes = {
    items: PropTypes.array.isRequired
};

export default CartListSummary;
