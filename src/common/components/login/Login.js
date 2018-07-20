'use strict';

import Render from './LoginRender';

import { Component } from 'react';

export default class Login extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
