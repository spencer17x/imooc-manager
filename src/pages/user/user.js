import React, { Component } from 'react';
import { Card, Input, Button, Form, Table, Modal, Radio, TimePicker, DatePicker } from 'antd';
import './user.less';
import axios from '../../axios';
import Utils from '../../utils/utils';
import TextArea from 'antd/lib/input/TextArea';
import  moment from 'moment';

class User extends Component {
  state = {
    dataSource: [],
    selectedRowKeys: [],
    isVisible: false,
    selectRows: [],
    editor_title: '创建员工'
  }
  params = {
    page: 1
  }
  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'user_id'
      }, {
        title: '用户名',
        dataIndex: 'user_name'
      }, {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex == 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          return state == 1 ? '阿里巴巴' : '腾讯'
        }
      }, {
        title: '爱好',
        dataIndex: 'hobby',
        render (hobby) {
          return ['篮球', '足球', '乒乓球', '台球'][hobby - 1]
        }
      }, {
        title: '是否已婚',
        dataIndex: 'marriage',
        render (marriage) {
          return marriage == 1 ? '已婚' : '未婚'
        }
      }, {
        title: '生日',
        dataIndex: 'birthday'
      }, {
        title: '联系地址',
        dataIndex: 'address'
      }, {
        title: '早起时间',
        dataIndex: 'rise_time'
      }
    ];
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys
    }
    return (
      <div>
        <Card>
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>
        <div className="user card-top">
          <Form layout="inline" style={{marginLeft: 20, paddingTop: 20}}>
            <Form.Item>
              <Button type="primary" icon="plus" onClick={() => this.handleBtn('创建员工')}>创建员工</Button>
            </Form.Item>
            <Form.Item>
              <Button icon="edit" onClick={() => this.handleBtn('编辑员工')}>编辑员工</Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={() => this.handleBtn('员工详情')}>员工详情</Button>
            </Form.Item>
            <Form.Item>
              <Button icon="delete" type="danger" onClick={() => this.handleBtn('删除员工')}>删除员工</Button>
            </Form.Item>
          </Form>
          <Table 
            bodyStyle={{marginTop: 20}}
            dataSource={this.state.dataSource}
            bordered
            columns={columns}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record) => {
              return {
                onClick: () => {
                  this.selectRow(record)
                }
              }
            }}
          />
          <EditorUser 
            btnEvent={this.btnEvent}
            isVisible={this.state.isVisible}
            selectRows={this.state.selectRows}
            title={this.state.editor_title}
            />
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.request()
  }
  request = () => {
    let options = {
      url: '/mock/user',
      data: {
        params: this.params,
        isShowLoading: true
      }
    }
    axios.ajax(options)
      .then((res) => {
        if (res.code === 20000) {
          let dataSource = res.result.list;
          dataSource.map(function (item, index) {
            item.key = index;
          });
          this.setState({
            dataSource,
            pagination: Utils.pagination(res, this.changePage)
          });
        }
      })
  }
  changePage = () => {
    this.request()
  }
  selectRow = (record) => {
    this.setState({
      selectedRowKeys: [record.key],
      selectRows: record
    });
  }
  handleBtn = (info) => {
    let infoArr = ['编辑员工', '员工详情', '删除员工']
    if (infoArr.includes(info) && !this.state.selectRows.user_name) {
      Modal.info({
        title: '信息',
        content: '请选择一个用户'
      });
    } else {
      if (info === '创建员工') {
        this.setState({
          selectRows: [],
          selectedRowKeys: []
        })
      }
      this.setState({
        isVisible: true,
        editor_title: info
      });
    }
  }
  btnEvent = (info) => {
    if (info === 'ok') {
      this.request();
      this.setState({
        selectRows: [],
        selectedRowKeys: []
      })
    }
    this.setState({
      isVisible: false
    })
  }
}
export default User;

class EditorUser extends Component {
  render () {
    const fromItemCol = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    }
    const { getFieldDecorator } = this.props.form
    const { selectRows } = this.props;
    return (
      <Modal 
        title={this.props.title}
        visible={this.props.isVisible}
        onCancel={() => this.props.btnEvent('cancel')}
        onOk={() => this.props.btnEvent('ok')}  
      >
        <Form layout="horizontal">
          <Form.Item {...fromItemCol} label="姓名">
            {
              getFieldDecorator('editor_name', {
                initialValue: selectRows.user_name 
              })(<Input placeholder="请输入姓名"/>)
            }
          </Form.Item>
          <Form.Item {...fromItemCol} label="性别">
            {
              getFieldDecorator('editor_sex', {
                initialValue: selectRows.sex 
              })(
                <Radio.Group>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </Radio.Group>
              )
            }
          </Form.Item>
          <Form.Item {...fromItemCol} label="状态">
            {
              getFieldDecorator('editor_state', {
                initialValue: selectRows.state 
              })(<Input />)
            }
          </Form.Item>
          <Form.Item {...fromItemCol} label="生日">
            {
              getFieldDecorator('editor_bidthday', {
                initialValue: moment(new Date())
              })(<DatePicker />)
            }
          </Form.Item>
          <Form.Item {...fromItemCol} label="联系地址">
            {
              getFieldDecorator('editor_address', {
                initialValue: selectRows.address 
              })(<TextArea placeholder="请输入联系地址"/>)
            }
          </Form.Item>
        </Form>
      </Modal>
    )
  }
  componentDidUpdate () {
    console.log(this.props.selectRows);
  }
}

EditorUser = Form.create()(EditorUser);