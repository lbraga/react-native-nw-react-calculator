'use strict';

import React from 'react';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

export default function () {
  return (
    <div className="screen">
      <form id="simple-form" onSubmit={this.handleSubmit}>
        <label>Login</label>
        <br/>
        <input type="text" value={this.state.inputvalue} onChange={this.handleChange} />
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" value={this.state.inputvalue} onChange={this.handleChange} />
        <br/>
        <input type="submit" value="Submit" />
        <br/>
        <div className="link">
          <Link to={'app'}>Forget about, click here</Link>
        </div>
      </form>
    </div>
  );
}
