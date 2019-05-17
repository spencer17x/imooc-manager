import React, { Component } from 'react'
import './style.less'
import { Input, Form, Button, Modal } from 'antd'
import axios from '../../axios'

export default class Login extends Component {
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <img src="/assets/logo-ant.svg" alt=""/>
            <span>React全家桶+AntD共享经济热门项目后台管理系统</span>
          </div>
        </div>
        <div className="login-wrapper">
          <div className="login-content">
            <h1 className="title">共享出行<br/>引领城市新经济</h1>
            <div className="login-form">
              <div className="title">React欢迎你</div>
              <Form>
                <Form.Item style={{width: 300, margin: '0 auto',}}>
                  {
                    getFieldDecorator('user_account', {
                      initialValue: 'admin'
                    })(<Input />)
                  }
                </Form.Item>
                <Form.Item style={{width: 300, margin: '20px auto 0'}}>
                  {
                    getFieldDecorator('user_password', {
                      initialValue: '123456'
                    })(<Input type="password"/>)
                  }
                </Form.Item>
                <Form.Item style={{width: 300, margin: '30px auto 0'}}>
                  <Button style={{width: 300}} type="primary" onClick={this.loginSubmit}>登录</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="login-footer">版权所有：React&Sev（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：Sev</div>
      </div>
    )
  }
  loginSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.user_account === 'admin' && values.user_password === '123456') {
          this.props.history.push('/admin/home');
        } else {
          Modal.error({
            title: '警告',
            content: '账号或密码错误，请重新输入'
          })
        }
      }
    })
  }
}

Login = Form.create()(Login)