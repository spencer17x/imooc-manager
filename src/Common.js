import React, { Component } from 'react'

export default class Common extends Component {
  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    )
  }
}
