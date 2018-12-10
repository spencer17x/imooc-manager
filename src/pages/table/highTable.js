import React, { Component } from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';

export default class BasicTable extends Component {
  state = {
    dataSource: []
  }
  params = {
    page: 1
  }
  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80
      }, {
        title: '用户名',
        dataIndex: 'userName',
        width: 80
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
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
        },
        width: 80
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
        },
        width: 80
      }, {
        title: '生日',
        dataIndex: 'birthday',
        width: 120
      }, {
        title: '地址',
        dataIndex: 'address',
        width: 120
      }, {
        title: '早起时间',
        dataIndex: 'time',
        width: 160
      }, 
    ];
    const columns2 = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80,
        fixed: 'left'
      }, {
        title: '用户名',
        dataIndex: 'userName',
        width: 80,
        fixed: 'left'
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
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
        },
        width: 80
      },{
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
        },
        width: 80
      },{
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
        },
        width: 80
      },{
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
        },
        width: 80
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
        },
        width: 80
      }, {
        title: '生日',
        dataIndex: 'birthday',
        width: 120
      }, {
        title: '地址',
        dataIndex: 'address',
        width: 120,
        fixed: 'right'
      }, {
        title: '早起时间',
        dataIndex: 'time',
        width: 120,
        fixed: 'right'
      }, 
    ];
    const columns3 = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80
      },{
        title: '年龄',
        dataIndex: 'age',
        width: 80,
        sorter: (a, b) => {
          return a.age - b.age;
        },
        sortOrder: this.state.sortOrder
      }, {
        title: '用户名',
        dataIndex: 'userName',
        width: 80
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
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
        },
        width: 80
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
        },
        width: 80
      }, {
        title: '生日',
        dataIndex: 'birthday',
        width: 120
      }, {
        title: '地址',
        dataIndex: 'address',
        width: 120
      }, {
        title: '早起时间',
        dataIndex: 'time',
        width: 160
      }, 
    ];
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80
      },{
        title: '年龄',
        dataIndex: 'age',
        width: 80,
        sorter: (a, b) => {
          return a.age - b.age;
        },
        sortOrder: this.state.sortOrder
      }, {
        title: '用户名',
        dataIndex: 'userName',
        width: 120
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
      }, {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          const config = {
            '1': <Badge text="react" status="success"/>,
            '2': <Badge text="vue" status="processing"/>,
            '3': <Badge text="angular" status="warning"/>,
            '4': <Badge text="backbone" status="error"/>
          };
          return config[state]
        },
        width: 160
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
        },
        width: 80
      }, {
        title: '生日',
        dataIndex: 'birthday',
        width: 120
      }, {
        title: '地址',
        dataIndex: 'address',
        width: 120
      }, {
        title: '早起时间',
        dataIndex: 'time',
        width: 160
      }, {
        title: '操作',
        width: 160,
        render: (text, record) => {
          return <Button onClick={() => this.handleDel(text, record)}>删除</Button>
        }
      }
    ];
    return (
      <div>
        <Card title="头部固定">
          <Table 
            scroll={{y: 240}}
            bordered
            rowKey="id"
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>
        <Card title="左侧固定" className="card-top">
          <Table 
            scroll={{x: 1320}}
            bordered
            rowKey="id"
            pagination={false}
            columns={columns2}
            dataSource={this.state.dataSource}
          />
        </Card>
        <Card title="表格排序" className="card-top">
          <Table 
            onChange={this.handleChange}
            bordered
            rowKey="id"
            pagination={false}
            columns={columns3}
            dataSource={this.state.dataSource}
          />
        </Card>
        <Card title="操作按钮" className="card-top">
          <Table 
            bordered
            rowKey="id"
            pagination={false}
            columns={columns4}
            dataSource={this.state.dataSource}
          />
        </Card>
      </div>
    )
  }
  handleDel = (text, record) => {
    Modal.success({
      title: '删除提示',
      content: '确认删除?',
      onOk: () => {
        message.success('删除成功！')
        this.request();
      }
    })
  }
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }
  request = () => {
    axios.ajax({
      url: 'table/high/list',
      method: 'get',
      data: {
        params: {
          page: this.params.page
        },
        isShowLoading: true
      }
    }).then(res => {
      if (res.code === 20000) {
        this.setState({
          dataSource: res.result.list,
          pagination: Utils.pagination(res, (current) => {
            // to-do
            this.params.page = current;
            this.request();
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
  onRowClick = (record, index) => {
    let selectKey = [index + 1];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  }
  componentDidMount () {
    this.request()
  }
}