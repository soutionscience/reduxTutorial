import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './componets/app';


ReactDOM.render(<Provider> <App/></Provider>, document.querySelector('.container'));