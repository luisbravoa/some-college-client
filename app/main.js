require('expose?$!expose?jQuery!jquery');
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './stores/index';
import actions from './actions/index';

const app = document.getElementById('app');
const render = () => {
    ReactDOM.render(<App {...store.getState()}/>, app);
};

render();
store.subscribe(render);
