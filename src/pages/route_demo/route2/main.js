import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render () {
    return (
      <Fragment>
        <ul>
          <li>
            <Link to="/home">Home</Link>  
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        {this.props.children}
      </Fragment>
    )
  }
}