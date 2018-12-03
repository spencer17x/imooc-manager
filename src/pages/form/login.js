import React, { Component } from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

class FormLogin extends Component {
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" className="card-top">
          <Form layout="horizontal" style={{width: '300px'}}>
            <FormItem>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [{
                    required: true,
                    message: '请输入用户名'
                  }, {
                    min: 5,
                    max: 10,
                    message: '长度不在范围内'
                  }, {
                    pattern: new RegExp('^\\w+$', 'g'),
                    message: '用户名必须为字母或数字'
                  }]
                })(<Input prefix={<Icon type="user"/>} placeholder="请输入用户名" autoComplete="off"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '',
                  rules: []
                })(<Input prefix={<Icon type="lock"/>} placeholder="请输入密码" type="password"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('checkbox', {
                  initialValue: true,
                  valuePropName: 'checked'
                })(<Checkbox>记住密码</Checkbox>)
              }
              <a href="#" style={{float: 'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit} style={{width: '300px'}}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
  handleSubmit = () => {
    // let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        message.success(`${values.userName} 恭喜你，通过验证，你的密码是${values.userPwd}`)
      }
    })
  }
}

export default Form.create()(FormLogin);