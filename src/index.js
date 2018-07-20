'use strict';

import Login from './common/components/login/Login';
import App from './common/components/app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS
require('normalize.css');
require('./styles/main.css');

var content = document.getElementById('content');

// TODO:MOVE ROUTES TO ../SOMEWHERE/routes.jsx
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/app" component={App} />
 </Router>
), content);
