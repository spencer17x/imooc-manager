import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from "antd";
import './ui.less';

export default class Messages extends Component {
  newTabIndex = 0
  state = {
    panes: [{
      title: 'tab 1',
      content: 'welcome to tab1',
      key: '1'
    }, {
      title: 'tab 2',
      content: 'welcome to tab2',
      key: '2'
    }, {
      title: 'tab 3',
      content: 'welcome to tab3',
      key: '3',
      closable: false
    }],
    activeKey: '1'
  }
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
          <Tabs type="editable-card" onChange={this.onChange} onEdit={this.onEdit} activeKey={this.state.activeKey}>
            {/* <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane> */}
            {
              this.state.panes.map(pane => 
                <Tabs.TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                  {pane.content}
                </Tabs.TabPane>  
              )
            }
          </Tabs>
        </Card>
      </div>
    )
  }
  callback = (key) => {
    message.success(`你切换到了页面${key}`)
  }
  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: `New Tab${this.newTabIndex}`, content: `New Tab Pane${this.newTabIndex}`, key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
      let activeKey = this.state.activeKey;
      let lastIndex;
      this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.state.panes.filter(pane => pane.key !== targetKey);
      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }
      this.setState({ panes, activeKey });
    }
}