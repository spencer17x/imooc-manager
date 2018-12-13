import React, { Component } from 'react';
import axios from '../../axios';
import Utils from '../../utils/utils';
import './city.less';
import { Card, Form, Select, Button, Table, Modal, Radio } from 'antd';

const Option = Select.Option

export default class City extends Component {
  state = {
    dataSource: [],
    visible: false
  }
  params = {
    page: 1
  }
  render () {
    const columns = [{
      title: '城市Id',
      dataIndex: 'city_id',
      width: 80
    }, {
      title: '城市名称',
      dataIndex: 'city_name',
      width: 140
    }, {
      title: '用车模式',
      dataIndex: 'use_mode',
      width: 80
    }, {
      title: '营运模式',
      dataIndex: 'op_mode',
      width: 80
    }, {
      title: '授权加盟商',
      dataIndex: 'auth',
      width: 80
    }, {
      title: '城市管理员',
      dataIndex: 'city_admin'
    }, {
      title: '城市开通时间',
      dataIndex: 'open_date'
    }, {
      title: '操作时间',
      dataIndex: 'operate_date',
      render (date) {
        return Utils.formateDate(date)
      }
    }, {
      title: '操作人',
      dataIndex: 'operate_name'
    }]
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    }
    return (
      <div>
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
        <div className="card-top city-wrapper">
          <Button type="primary" style={{margin: '20px 0 20px 20px'}} onClick={this.openCity}>开通城市</Button>
          <Table
            dataSource={this.state.dataSource}
            bordered
            columns={columns}
            pagination={this.state.pagination}
          ></Table>
        </div>
        <Modal
          title="开通城市"
          visible={this.state.visible}
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          onOk={this.openCityOk}
        >
          <Form layout="horizontal">
            <Form.Item label="选择城市" {...formItemLayout}>
              <Select style={{width: 100}}>
                <Option value="0">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
              </Select>
            </Form.Item>
            <Form.Item label="营运模式" {...formItemLayout}>
              <Radio>自营</Radio>
              <Radio>加盟</Radio>
            </Form.Item>
            <Form.Item label="用车模式" {...formItemLayout}>
              <Radio>指定停车点模式</Radio>
              <Radio>禁停区模式</Radio>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
  componentDidMount () {
    this.requestList();
  }
  requestList = () => {
    axios.ajax({
      url: '/mock/city',
      method: 'get',
      data: {
        params: {
          page: this.params.page
        },
        isShowLoading: true
      }
    }).then(res => {
      if (res.code === 20000) {
        res.result.list.map((item, index) => {
          item.key = index
        })
        this.setState({
          dataSource: res.result.list,
          pagination: Utils.pagination(res, (current) => {
            console.log(res)
            // to-do
            this.params.page = current;
            this.requestList();
          })
        })
      }
    }).catch(err => {
      Modal.warning({
        title: '警告',
        content: err + ''
      })
    });
  }
  // 开通城市
  openCity = () => {
    this.setState({
      visible: true
    })
  }
  // 确认开通城市
  openCityOk = () => {
    this.setState({
      visible: false
    })
    this.requestList();
  }
}

