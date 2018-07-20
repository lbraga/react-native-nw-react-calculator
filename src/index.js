'use strict';

import Login from './common/components/login/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS
require('normalize.css');
require('./styles/main.css');

var content = document.getElementById('content');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
  </Router>
), content);
