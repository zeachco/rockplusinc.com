import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import {clearCartMessage} from '../store/actions/cart'

const UmsgContainer = ({
    messageValue,
    messageVisible
}) =>  (
    <div className={cx('modal', {'is-active': messageVisible})}>
        <div className="modal-background" onClick={clearCartMessage} />
        <div className="modal-content">
            <section className="modal-card-body">
                {messageValue}
            </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={clearCartMessage} />
    </div>
);

UmsgContainer.propTypes = {
    messageValue: PropTypes.string,
    messageVisible: PropTypes.bool
};

export default connect(state => ({
    messageVisible: state.cart.messageVisible,
    messageValue: state.cart.messageValue
}))(UmsgContainer);
