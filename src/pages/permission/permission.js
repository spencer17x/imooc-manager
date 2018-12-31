import React, { Component } from 'react'
import { Button, Table, Modal, Form, Input, Select } from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'

export default class Permission extends Component {
  params = {
    page: 1
  }
  state = {
    dataSource: [],
    pagination: '',
    selectedRowKeys: [],
    createVisible: false
  }
  render() {
    const columns = [{
      title: '角色ID',
      dataIndex: 'role_id',
      width: 80,
      align: 'center'
    }, {
      title: '角色名称',
      dataIndex: 'role_name',
      render (name) {
        return ['管理人员', '市场专员', '人力专员', '财务专员'][name-1]
      },
      width: 160,
      align: 'center'
    }, {
      title: '创建时间',
      dataIndex: 'create_time',
      align: 'center',
      width: 160
    }, {
      title: '使用状态',
      dataIndex: 'use_state',
      render (state) {
        return ['启用', '停用'][state-1]
      },
      align: 'center'
    }, {
      title: '授权时间',
      dataIndex: 'auth_time',
      align: 'center'
    }, {
      title: '授权人',
      dataIndex: 'auth_name',
      align: 'center'
    }];
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys
    };
    return (
      <div style={{background: '#fff'}}>
        <div style={{padding: '20px 0 0 20px'}}>
          <Button type="primary" onClick={() => {
            this.setState({
              createVisible: true
            })
          }}>创建角色</Button>
          <Button style={{marginLeft: 10}} type="primary">设置权限</Button>
          <Button style={{marginLeft: 10}} type="primary">用户授权</Button>
        </div>
        <Table 
          bordered
          bodyStyle={{
            marginTop: 20
          }}
          dataSource={this.state.dataSource}
          columns={columns}
          rowSelection={rowSelection}
          pagination={this.state.pagination}
          onRow={(record) => {
            return {
              onClick: () => {
                this.selectedRows(record)
              }
            }
          }}
        />
        <CreateRole 
          createVisible={this.state.createVisible}
          handleCreate={this.handleCreate}
          handleCancel={this.handleCancel}
          request={this.request}
        />
      </div>
    )
  }
  componentDidMount () {
    this.request();
  }
  request = () => {
    axios.ajax({
      url: '/user/permission',
      data: {
        params: {
          page: this.params.page
        },
        isShowLoading: true
      }
    }).then(res => {
      if (res.code === 20000) {
        const dataSource = res.result.list;
        dataSource.map((item, index) => {
          item.key = index
        });
        this.setState({
          dataSource,
          pagination: Utils.pagination(res, this.changePage)
        })
      }
    })
  }
  changePage = () => {
    console.log('change Page');
    this.request();
  }
  selectedRows = (record) => {
    this.setState({
      selectedRowKeys: [record.key]
    })
  }
  handleCancel = () => {
    this.setState({
      createVisible: false
    })
  }
}

class CreateRole extends Component {
  render () {
    const formWrapper = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 16
      }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal 
        title="创建角色" 
        visible={this.props.createVisible}
        onCancel={this.props.handleCancel}
        onOk={this.handleCreate}
      >
        <Form layout="horizontal"> 
          <Form.Item label="角色名称" {...formWrapper}>
            {
              getFieldDecorator('role_name')(<Input placeholder="请输入角色名称"/>)
            }
          </Form.Item>
          <Form.Item label="状态" {...formWrapper}>
            {
              getFieldDecorator('create_state', {
                initialValue: 1
              })(
                <Select>
                  <Select.Option value={1}>开启</Select.Option>
                  <Select.Option value={2}>关闭</Select.Option>
                </Select>
              )
            }
          </Form.Item>
        </Form>
      </Modal>
    )
  }
  handleCreate = () => {
    this.props.handleCancel();
    this.props.request();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        console.log(values)
      }
    });
  }
}

CreateRole = Form.create()(CreateRole);