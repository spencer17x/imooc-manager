import React, { Component } from 'react'
import './order.less'
import { Card, Select, Form, DatePicker, Button } from 'antd'

export default class order extends Component {
  render() {
    return (
      <div>
        <Card>
          <Form layout="inline">
            <Form.Item
              label="城市"
            >
              <Select
                style={{width: 100}}
                value="0"
                >
                <Select.Option value="0">全部</Select.Option>
                <Select.Option value="1">北京</Select.Option>
                <Select.Option value='2'>上海</Select.Option>
                <Select.Option value='3'>天津</Select.Option>
                <Select.Option value='4'>杭州</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <DatePicker 
                placeholder="选择开始时间"
              />
            </Form.Item>
            <Form.Item
              label="~"
              colon={false}
            >
              <DatePicker 
                placeholder="选择结束时间"
              />
            </Form.Item>
            <Form.Item 
              label="订单状态">
              <Select
                style={{width: 100}}
                value="0"
              >
                <Select.Option value="0">全部</Select.Option>
                <Select.Option value="1">进行中</Select.Option>
                <Select.Option value="2">进行中(临时锁车)</Select.Option>
                <Select.Option value="3">行程结束</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
              <Button style={{marginLeft: 20}}>重置</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
