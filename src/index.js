import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './app/App';
import Home from './home/Home';
import Notebook from './notebook/Notebook';

import './index.css';

// Vendors
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="notebook" component={Notebook} />
        </Route>
    </Router>
), document.getElementById('root'));
