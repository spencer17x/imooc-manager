import React, { Component } from 'react'
import { 
  Button, 
  Table, 
  Modal, 
  Form, 
  Input, 
  Select, 
  Transfer,
  Tree 
} from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
import menuConfig from '../../config/menuConfig'

export default class Permission extends Component {
  params = {
    page: 1
  }
  state = {
    dataSource: [],
    pagination: '',
    selectedRowKeys: [],
    createVisible: false,
    permissionSettingShow: false,
    selectedRows: '',
    isAuthShow: false
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
          <Button style={{marginLeft: 10}} type="primary" onClick={this.setPermission}>设置权限</Button>
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
        <PermissionSetting 
          permissionSettingShow={this.state.permissionSettingShow}
          permissonRow={this.state.selectedRows}
          handleCancel={this.handleCancel}
          request={this.request}
        />
        <UserAuth 
          isAuthShow={this.state.isAuthShow}
          selectedRows={this.state.selectedRows}
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
      selectedRowKeys: [record.key],
      selectedRows: record
    })
  }
  handleCancel = () => {
    this.setState({
      createVisible: false,
      permissionSettingShow: false
    })
  }
  setPermission = () => {
    if (!this.state.selectedRows) {
      Modal.info({
        title: '信息',
        content: '请选择一个角色'
      })
    } else {
      this.setState({
        permissionSettingShow: true
      })
    }
  }
}

// 用户授权
class UserAuth extends Component {
  state = {
    roleName: ['管理人员', '市场专员', '人力专员', '财务专员']
  }
  render () {
    const formCol = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 18
      }
    }
    return (
      <Modal title="用户授权" visible={true} width={800}>
        <Form>
          <Form.Item label="角色名称" {...formCol}>
            <Input value={this.state.roleName[this.props.selectedRows.role_name - 1]} disabled/>
          </Form.Item>
          <Form.Item label="选择用户" {...formCol}>
            
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

// 权限设置
class PermissionSetting extends Component {
  state = {
    checkboxTree: '',
    checkedKeys: ['/admin/home', '/admin/ui'],
    roleName: ['管理人员', '市场专员', '人力专员', '财务专员']
  }
  render () {
    const formCol = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    }
    return (
      <Modal 
        title="权限设置"
        visible={this.props.permissionSettingShow}
        onCancel={this.props.handleCancel}
        onOk={() => {
          this.props.request()
          this.props.handleCancel()
        }}
      >
        <Form>
          <Form.Item label="角色名称" {...formCol}>
            <Input value={this.state.roleName[this.props.permissonRow.role_name - 1]} disabled/>
          </Form.Item>
          <Form.Item label="状态" {...formCol}>
            <Select value={this.props.permissonRow.use_state} style={{width: 100}}>
              <Select.Option value={1}>启动</Select.Option>
              <Select.Option value={2}>停用</Select.Option>
            </Select>
          </Form.Item>
        </Form>
        <Tree 
          defaultExpandAll 
          checkable 
          checkedKeys={this.state.checkedKeys}
          onSelect={this.selectTreeNode}
          onCheck={this.selectTreeNode}>
          <Tree.TreeNode title="平台权限" key="平台权限">
            {this.state.checkboxTree}
          </Tree.TreeNode>
        </Tree>
      </Modal>
    )
  }
  componentDidMount () {
    const checkboxTree = this.renderTree(menuConfig)
    this.setState({
      checkboxTree
    })
  }
  renderTree = (data) => {
    return data.map(item => {
      if (item.children) {
        return <Tree.TreeNode title={item.title} key={item.key}>
          {this.renderTree(item.children)}
        </Tree.TreeNode>
      }
      return <Tree.TreeNode title={item.title} key={item.key}/>
    })
  }
  selectTreeNode = (checkedKeys) => {
    this.setState({
      checkedKeys
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