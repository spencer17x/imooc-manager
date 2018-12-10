import React, { Component } from 'react';
import { Card, Table, Button, Modal, message } from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';

export default class BasicTable extends Component {
  state = {
    dataSource2: []
  }
  params = {
    page: 1
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
    ];
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys: this.state.selectedCheckKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedCheckKeys: selectedRowKeys,
          selectedCheckRows: selectedRows
        })
      }
    }
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
        <Card title="动态数据渲染表格-Mock" className="card-top">
          <Table 
            bordered
            rowKey="id"
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource2}
          />
        </Card>
        <Card title="Mock-单选" className="card-top">
          <Table 
            bordered
            rowKey="id"
            pagination={false}
            columns={columns}
            rowSelection={rowSelection}
            dataSource={this.state.dataSource2}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                }
              }
            }}
          />
        </Card>
        <Card title="Mock-多选" className="card-top">
          <div style={{marginBottom: '10px'}}>
            <Button onClick={this.handleDel}>删除</Button>
          </div>
          <Table 
            bordered
            rowKey="id"
            pagination={false}
            columns={columns}
            rowSelection={rowCheckSelection}
            dataSource={this.state.dataSource2}
          />
        </Card>
        <Card title="Mock-分页" className="card-top">
          <Table 
            bordered
            rowKey="id"
            pagination={this.state.pagination}
            columns={columns}
            dataSource={this.state.dataSource2}
          />
        </Card>
      </div>
    )
  }
  // 多选执行删除动作
  handleDel = () => {
    let rows = this.state.selectedCheckRows;
    let ids = [];
    rows.map(item => ids.push(item.id))
    Modal.confirm({
      content: `您确定要删除这些数据吗？${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功');
        this.request();
        this.setState({
          selectedCheckKeys: [],
          selectedCheckRows: []
        })
        // const { dataSource2 } = this.state;
        // ids.map((item, index) => dataSource2.splice(item - index - 1, 1));
        // dataSource2.map((item, index) => item.id = index)
        // this.setState({
        //   dataSource2,
        //   selectedCheckKeys: [],
        //   selectedCheckRows: []
        // })
      }
    })
  }
  request = () => {
    axios.ajax({
      url: 'table/list',
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
          dataSource2: res.result.list,
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