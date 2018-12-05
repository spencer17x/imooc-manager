import React, { Component } from 'react';
import { Card, Table} from 'antd';
import axios from 'axios';

export default class BasicTable extends Component {
  state = {
    dataSource2: []
  }
  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      }, {
        title: '用户名',
        dataIndex: 'userName'
      }, {
        title: '性别',
        dataIndex: 'sex'
      }, {
        title: '状态',
        dataIndex: 'state'
      }, {
        title: '爱好',
        dataIndex: 'interest'
      }, {
        title: '生日',
        dataIndex: 'birthday'
      }, {
        title: '地址',
        dataIndex: 'address'
      }, {
        title: '早起时间',
        dataIndex: 'time'
      }, 
    ]
    return (
      <div>
        <Card title="基础表格">
          <Table 
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>
        <Card title="动态数据渲染表格" className="card-top">
          <Table 
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource2}
          />
        </Card>
      </div>
    )
  }
  request = () => {
    const baseUrl = 'https://easy-mock.com/mock/5c07d5c95a35be334b3a4f09/mockapi';
    axios.get(`${baseUrl}/table/list`)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          const dataSource2 = res.data.result;
          this.setState({
            dataSource2
          })
        }
      })
  }
  componentDidMount () {
    const dataSource = [
      {
        key: '0',
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '杭州市梦想小镇',
        time: '09:09'
      },
      {
        key: '1',
        id: '1',
        userName: 'Jall',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '杭州市梦想小镇',
        time: '09:09'
      },
      {
        key: '2',
        id: '2',
        userName: 'Narr',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '杭州市梦想小镇',
        time: '09:09'
      }
    ]
    this.setState({
      dataSource
    })
    this.request()
  }
}