import React, { Component } from 'react';
import Child from './Child';

export default class Life extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     count: 1
  //   }
  // }
  state = {
    count: 1
  }
  render () {
    const style = {
      padding: 50
    }
    return (
      <div style={style}>
        <p>React 生命周期介绍</p>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{this.state.count}</p>
        <p>这是子组件</p>
        <Child name={this.state.count}/>
      </div>
    )
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }
}