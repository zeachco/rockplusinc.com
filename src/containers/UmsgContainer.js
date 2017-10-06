import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import {clearCartMessage} from '../store/actions/cart'

const UmsgContainer = ({
    messageValue,
    messageVisible,
    email
}) =>  {
    let emailSection = null;
    if (email) {
        emailSection = ( <article className="message is-info">
            <div className="message-body">A copy of your invoice will be sent to { email } .</div>
        </article> );
    } else {
        emailSection = ( <article className="message is-warning">
            <div className="message-body">Please contact us to get a summary of your orders by email.</div>
        </article>);
    }

    return (<div className={cx('modal', {'is-active': messageVisible})}>
        <div className="modal-background" onClick={clearCartMessage} />
        <div className="modal-content">
            <section className="modal-card-body">
                <div className="content">
                    <p>{messageValue}</p>
                    {emailSection}
                </div>
            </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={clearCartMessage} />
    </div>)
};

UmsgContainer.propTypes = {
    messageValue: PropTypes.string,
    messageVisible: PropTypes.bool,
    email: PropTypes.string
};

export default connect(state => ({
    messageVisible: state.cart.messageVisible,
    messageValue: state.cart.messageValue,
    email: state.session.email
}))(UmsgContainer);
