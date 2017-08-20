import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class UmsgContainer extends Component {
    constructor(...props) {
        super(...props);
        this.self = this;
        this.state = {
            messageVisible: false,
            messageValue: ''
        };        
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;    
    }
    componentWillUnmount() {
        if (typeof this.timer !== 'undefined') clearTimeout(this.timer);
    }
    setTimer() {
        this.timer = setTimeout(this.timeUpdate.bind(this), 5000);
    }
    timeUpdate() {
        this.setState.bind(this, {messageVisible: false, messageValue: ''});
        this.forceUpdate.bind(this);
    }
    render() {
        const {
            messageVisible,
            messageValue
        } = this.props;
        if (!messageVisible) return null;
        this.setTimer();    
        return (
            <div> 
                <span>{messageValue}</span>
            </div>
        );
    }
}

UmsgContainer.propTypes = {
    messageVisible: PropTypes.bool,
    messageValue: PropTypes.node
};

export default connect(state => ({
    messageVisible: state.cart.messageVisible,
    messageValue: state.cart.messageValue
}))(UmsgContainer);
