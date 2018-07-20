'use strict';

import Render from './LoginRender';

import { Component } from 'react';
import { hasHistory } from 'react-router'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please login.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var data = {'a':'1'}
    this.props.history.push({pathname: `/app`, query: data});

    event.preventDefault();
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
