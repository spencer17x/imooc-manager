import React, { Component } from 'react';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FromRegister extends Component {
  state = {}
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
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
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
                getFieldDecorator('hobbies', {
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
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-8-8 12:20:9')
                })(
                  <DatePicker 
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '杭州市梦想小镇'
                })(
                  <TextArea
                    autosize={{
                      minRows: 3,
                      maxRows: 4
                    }}
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              <TimePicker 
                defaultValue={moment('12:08:23', 'HH:mm:ss')}
              />
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload 
                    name="avatar"
                    className="avatar-uploader"
                    listType="picture-card"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                    {this.state.userImg ? <img src={this.state.userImg} alt=""/> : <Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('read', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>我已阅读<a href="#">慕课协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('register')(
                  <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }));
    }
  }
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleSubmit = () => {
    // let userInfo = this.props.form.getFieldsValue()
    // message.success(`${userInfo.userName}恭喜你，通过注册`)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${values.userName} 恭喜你，通过验证，你的密码是${values.userPwd}`)
      }
    })
  }
}

export default Form.create()(FromRegister);