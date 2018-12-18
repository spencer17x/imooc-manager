import React, { Component } from 'react'
import './order.less'
import axios from '../../axios'
import { Card, Select, Form, DatePicker, Button, Table } from 'antd'

export default class Order extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card>
          <Form layout="inline">
            <Form.Item
              label="城市"
            >
              {
                getFieldDecorator('city', {
                  initialValue: '0'
                })(
                  <Select
                    style={{width: 100}}
                    >
                    <Select.Option value="0">全部</Select.Option>
                    <Select.Option value="1">北京</Select.Option>
                    <Select.Option value='2'>上海</Select.Option>
                    <Select.Option value='3'>天津</Select.Option>
                    <Select.Option value='4'>杭州</Select.Option>
                  </Select>   
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('start_time')(
                  <DatePicker 
                    placeholder="选择开始时间"
                  />
                )
              }
            </Form.Item>
            <Form.Item
              label="~"
              colon={false}
            >
              {
                getFieldDecorator('end_time')(
                  <DatePicker 
                    placeholder="选择结束时间"
                  />
                )
              }
            </Form.Item>
            <Form.Item 
              label="订单状态">
              {
                getFieldDecorator('order_state', {
                  initialValue: '0'
                })(
                  <Select
                    style={{width: 100}}
                  >
                    <Select.Option value="0">全部</Select.Option>
                    <Select.Option value="1">进行中</Select.Option>
                    <Select.Option value="2">进行中(临时锁车)</Select.Option>
                    <Select.Option value="3">行程结束</Select.Option>
                  </Select>
                )
              }
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSearch}>查询</Button>
              <Button style={{marginLeft: 20}} onClick={this.handleReset}>重置</Button>
            </Form.Item>
          </Form>
        </Card>
        <FilterForm wrappedComponentRef={ref => this.filterForm = ref}/>
      </div>
    )
  }
  handleSearch = () => {
    this.filterForm.requestList()
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log(values)
      }
    })
  }
  handleReset = () => {
    this.props.form.resetFields()
  }
}
Order = Form.create()(Order)

class FilterForm extends Component {
  state = {
    dataSource: [],
    selectedRowKeys: []
  }
  render () {
    const columns = [{
      title: '订单编号',
      dataIndex: 'order_id',
      width: 120,
      align: 'center'
    }, {
      title: '车辆编号',
      dataIndex: 'car_id',
      width: 100,
      align: 'center'
    }, {
      title: '用户名',
      dataIndex: 'user_name',
      width: 80,
      align: 'center'
    }, {
      title: '手机号码',
      dataIndex: 'phone_number',
      width: 120,
      align: 'center'
    }, {
      title: '里程',
      dataIndex: 'mileage',
      align: 'center',
      width: 70
    }, {
      title: '行程时长',
      dataIndex: 'travel_time',
      align: 'center'
    }, {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      width: 70,
      render (state) {
        return state === 1 ? '进行中' : '行程结束'
      }
    }, {
      title: '开始时间',
      dataIndex: 'start_time',
      align: 'center',
      width: 80
    }, {
      title: '结束时间',
      dataIndex: 'end_time',
      align: 'center',
      width: 80
    }, {
      title: '订单金额',
      dataIndex: 'order_price',
      align: 'center'
    }, {
      title: '实付金额',
      dataIndex: 'pay_price',
      align: 'center'
    }]
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys
    }
    return <div className="card-top" style={{background: '#fff'}}>
      <div style={{padding: '20px'}}>
        <Button type="primary">订单详情</Button>
        <Button type="primary" style={{marginLeft: 20}}>结束订单</Button>
      </div>
      <Table
        bordered
        dataSource={this.state.dataSource}
        columns={columns}
        rowSelection={rowSelection}
        onRow={(record, index) => {
          return {
            onClick: () => {
              this.handleClickRow(record, index)
            }
          }
        }}
      ></Table>
    </div>
  }
  componentDidMount () {
    this.requestList()
  }
  requestList () {
    const options = {
      url: '/mock/orderlist',
      method: 'GET',
      data: {
        params: 1,
        isShowLoading: true
      }
    }
    axios.ajax(options)
      .then(res => {
        if (res.code === 20000) {
          const dataSource = res.result.list
          dataSource.map((item, index) => {
            item.key = index
          })
          this.setState({
            dataSource
          })
        }
      })
  }
  handleClickRow = (record, index) => {
    this.setState({
      selectedRowKeys: [index]
    })
  }
}
FilterForm = Form.create()(FilterForm)