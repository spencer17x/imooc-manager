import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from "antd";
import './ui.less';

export default class Messages extends Component {
  render () {
    return (
      <div>
        <Card title="Tab页签">
          <Tabs onChange={this.callback}>
            <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图标页签" className="card-top">
          <Tabs onChange={this.callback}>
            <Tabs.TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">Content of Tab Pane 1</Tabs.TabPane>
            <Tabs.TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">Content of Tab Pane 2</Tabs.TabPane>
            <Tabs.TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">Content of Tab Pane 3</Tabs.TabPane>
          </Tabs>
        </Card>
        <Card title="Tab可关闭卡片式页签" className="card-top">
          <Tabs>
            <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
  callback = (key) => {
    message.success(`你切换到了页面${key}`)
  }
}