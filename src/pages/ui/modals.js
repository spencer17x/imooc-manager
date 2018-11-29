import React, { Component } from 'react';
import { Card, Button, Modal } from "antd";
import './ui.less';

export default class Buttons extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }
  render () {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹窗</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap card-top">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => this.handleCancel('showModal1')}
        >
          <p>欢迎来到react单车项目后台系统</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.handleCancel('showModal2')}
        >
          <p>欢迎来到react单车项目后台系统</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal3}
          style={{top: '20px'}}
          onCancel={() => this.handleCancel('showModal3')}
        >
          <p>欢迎来到react单车项目后台系统</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal4}
          okText="好的"
          cancelText="算了"
          wrapClassName="vertical-center-modal"
          onCancel={() => this.handleCancel('showModal4')}
        >
          <p>欢迎来到react单车项目后台系统</p>
        </Modal>
      </div>
    )
  }
  handleOpen (type) {
    this.setState({
      [type]: true
    })
  }
  handleCancel = (type) => {
    this.setState({
      [type]: false,
    });
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: '确认？',
      content: 'Are you sure?',
      maskClosable: true,
      onOk () {
        console.log('Ok');
      },
      onCancel () {
        console.log('cancel');
      }
    })
  }
}