import React from 'react';
import { connect } from 'react-redux';

const App = props => (
    <div>{props.label}</div>
);

const ConnectedApp = connect(state=>({
    label: state.label
}))(App);

export {ConnectedApp as App}