import React, { Component } from 'react';
import { Menu } from 'antd';
import menuList from '../../config/menuConfig';
// import { Link } from "react-router-dom";
import './style.less';
import { connect } from 'react-redux';
import { handleChangeTitle } from '../../redux/actionCreators';

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
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
          <div onClick={() => this.changeRoute(item)}>{item.title}</div>
        </Menu.Item>
      )
    })
  }
  changeRoute = (route) => {
    window.location.href = `/#${route.key}`;
    this.props.changeTitle(route.title);
  }
}

const mapState = () => {
  return {
    
  }
}

const mapDispatchState = (dispatch) => {
  return {
    changeTitle (title) {
      dispatch(handleChangeTitle(title))
    }
  }
}

export default connect(mapState, mapDispatchState)(NavLeft);