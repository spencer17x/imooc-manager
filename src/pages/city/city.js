import React, { Component } from 'react';
import { Card, Form, Select, Button } from 'antd';

const Option = Select.Option

export default class City extends Component {
  render () {
    return (
      <Card>
        <Form layout="inline">
          <Form.Item
            label="城市"
          >
            <Select
              placeholder="全部"
              style={{width: 90}}
            >
              <Option value="0">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="用车模式"
          >
            <Select
              placeholder="全部"
              style={{width: 140}}
            >
              <Option value="0">全部</Option>
              <Option value="1">指定停车点模式</Option>
              <Option value="2">禁停区模式</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="营运模式"
          >
            <Select
              placeholder="全部"
              style={{width: 90}}
            >
              <Option value="0">全部</Option>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="加盟商授权状态"
          >
            <Select
              placeholder="全部"
              style={{width: 90}}
            >
              <Option value="0">全部</Option>
              <Option value="1">已授权</Option>
              <Option value="2">未授权</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary">查询</Button>
            <Button style={{marginLeft: 20}}>重置</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}