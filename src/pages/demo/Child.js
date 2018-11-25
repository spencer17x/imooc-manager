import React, { Component } from 'react';

export default class Child extends Component {
  render () {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
  componentWillMount () {
    console.log('child will mount');
  }
  componentDidMount () {
    console.log('child did mount');
  }
  componentWillReceiveProps(newProps) {
    console.log('child will props：' + newProps.name);
  }
  shouldComponentUpdate () {
    console.log('child should update');
    return true;
  }
  componentWillUpdate () {
    console.log('child will update');
  }
  componentDidUpdate () {
    console.log('child did update');
  }
}