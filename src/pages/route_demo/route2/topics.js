import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Topics extends Component {
  render () {
    return (
      <div>
        Topics
        <ul>
          <li><Link to="/home/a">a</Link></li>
          <li><Link to="/home/b">b</Link></li>
          <li><Link to="/home/c">c</Link></li>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/home/fdsfdsfds/fdss">Home-No-Match</Link></li>
          <li><Link to="/fdsfdsfds/fdss">No-Match</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}