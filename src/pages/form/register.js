import React, { Component } from 'react';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class FromRegister extends Component {
  render () {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    };
    return (
      <div>
        <Card title="注册表单">
        <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
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
                })(<Input placeholder="请输入用户名" autoComplete="off"/>)
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '',
                  rules: []
                })(<Input placeholder="请输入密码" type="password"/>)
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: '17'
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '2'
                })(
                  <Select>
                    <Option value="1">angular</Option>
                    <Option value="2">react</Option>
                    <Option value="3">vue</Option>
                    <Option value="4">backbone</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: ['2', '4']
                })(
                  <Select mode="multiple">
                    <Option value="1">angular</Option>
                    <Option value="2">react</Option>
                    <Option value="3">vue</Option>
                    <Option value="4">backbone</Option>
                    <Option value="5">jquery</Option>
                    <Option value="6">three.js</Option>
                    <Option value="7">echarts</Option>
                  </Select>
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FromRegister);