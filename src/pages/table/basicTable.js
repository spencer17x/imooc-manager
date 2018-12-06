import React, { Component } from 'react';
import { Card, Table} from 'antd';
import { Modal } from 'antd';
import axios from '../../axios';

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
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          const config = {
            '1': 'react',
            '2': 'vue',
            '3': 'angular',
            '4': 'backbone'
          };
          return config[state]
        }
      }, {
        title: '爱好',
        dataIndex: 'interest',
        render (interest) {
          const config = {
            '1': '篮球',
            '2': '乒乓球',
            '3': '台球',
            '4': '羽毛球'
          };
          return config[interest];
        }
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
            rowKey="id"
          />
        </Card>
        <Card title="动态数据渲染表格" className="card-top">
          <Table 
            bordered
            rowKey="id"
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource2}
          />
        </Card>
      </div>
    )
  }
  request = () => {
    axios.ajax({
      url: 'table/list',
      method: 'get',
      data: {
        params: {
          page: 1
        },
        isShowLoading: true
      }
    }).then(res => {
      if (res.code === 20000) {
        this.setState({
          dataSource2: res.result
        })
      }
    }).catch(err => {
      Modal.warning({
        title: '警告',
        content: err + ''
      })
    });
  }
  componentDidMount () {
    const dataSource = [
      {
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