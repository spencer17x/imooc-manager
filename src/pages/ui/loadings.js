import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from "antd";
import './ui.less';

export default class Loadings extends Component {
  render () {
    const icon = <Icon type="loading" style={{fontSize: 24}}></Icon>
    return (
      <div>
        <Card title="Spin用法">
          <Spin size="small"/>
          <Spin style={{margin: '0 10px'}}/>
          <Spin size="large"/>
          <Spin indicator={icon} style={{marginLeft: 10}}/>
        </Card>
        <Card title="内容遮罩" className="card-top">
          <Alert 
            message="React"
            description="welcome!!!"
            type="info"
            />
          <Spin >
            <Alert 
              message="React"
              description="welcome!!!"
              type="warning"
              style={{marginTop: '20px'}}
              />
          </Spin>
          <Spin tip="加载中...">
            <Alert 
              style={{marginTop: '20px'}}
              message="React"
              description="welcome!!!"
              type="warning"
              />
          </Spin>
          <Spin tip="加载中..." indicator={icon}>
            <Alert 
              style={{marginTop: '20px'}}
              message="React"
              description="welcome!!!"
              type="warning"
              />
          </Spin>
        </Card>
      </div>
    )
  }
}