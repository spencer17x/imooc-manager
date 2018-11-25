import React, { Component } from 'react';
import { Menu } from 'antd';
import menuList from '../../config/menuConfig';
import './style.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
  render () {
    return (
      <div className="nav-left-wrap">
        <div className="header">
          <img src='/assets/logo-ant.svg' alt="" className="logo"/>
          <h1>React MS</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTree}
        </Menu>
      </div>
    )
  }
  componentWillMount () {
    const menuTree = this.renderMenu(menuList);
    this.setState({
      menuTree
    })
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          {item.title}
        </Menu.Item>
      )
    })
  }
}