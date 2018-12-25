import React, { Component } from 'react';
import { Card, Input, Button, Form, Table } from 'antd';
import './user.less';
import axios from '../../axios';

class User extends Component {
  state = {
    dataSource: []
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
          <Form layout="inline">
            <Form.Item>
              <Button type="primary">创建员工</Button>
            </Form.Item>
            <Form.Item>
              <Button>编辑员工</Button>
            </Form.Item>
            <Form.Item>
              <Button>员工详情</Button>
            </Form.Item>
            <Form.Item>
              <Button>删除员工</Button>
            </Form.Item>
          </Form>
          <Table 
            bodyStyle={{marginTop: 20}}
            dataSource={this.state.dataSource}
            bordered
            columns={columns}
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
        params: this.params.page
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
            dataSource
          });
        }
      })
  }
}
export default User;
