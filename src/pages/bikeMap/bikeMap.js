import React, { Component } from 'react'
import { Card, Button, DatePicker, Select, Form } from 'antd'
import moment from 'moment'

export default class BikeMap extends Component {
  render() {
    const bikeMapStyle = {
      width: '100%',
      height: '750px',
      padding: '30px 30px 50px',
      background: '#fff'
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card>
          <Form layout="inline">
            <Form.Item label="订单时间">
              {
                getFieldDecorator('order_start_time')(<DatePicker placeholder=""/>)
              }
            </Form.Item>
            <Form.Item label="~" colon={false}>
              {
                getFieldDecorator('order_end_time')(<DatePicker placeholder=""/>)
              }
            </Form.Item>
            <Form.Item label="订单状态">
              {
                getFieldDecorator('order_state', {
                  initialValue: 0
                })(
                  <Select style={{width: 120}}>
                    <Select.Option value={0}>全部</Select.Option>
                    <Select.Option value={1}>进行中</Select.Option>
                    <Select.Option value={2}>行程结束</Select.Option>
                  </Select>
                )
              }
            </Form.Item>
            <Form.Item style={{marginRight: 20}}>
              <Button type="primary" onClick={this.handleSearch}>查询</Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.handleReset}>重置</Button>
            </Form.Item>
          </Form>
        </Card>
        <div className="card-top" style={bikeMapStyle}>
          <div>共100辆车</div>
          <div id="bike-map" style={{width: '100%', height: '100%'}}></div>
        </div>
      </div>
    )
  }
  componentDidMount () {
    var map = new window.BMap.Map('bike-map');
    // 创建地图实例
    var point = new window.BMap.Point(116.404, 39.915);
    // 创建点坐标
    map.centerAndZoom(point, 11);
    // 初始化地图， 设置中心点坐标和地图级别
    var top_right_navigation = new window.BMap.NavigationControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT, 
      type: window.BMAP_NAVIGATION_CONTROL_RIGHT
    }); //右上角，仅包含平移和缩放按钮
    this.addControl(map, top_right_navigation);
  }
  addControl = (map, top_right_navigation) => {
    map.addControl(top_right_navigation)
  }
  handleSearch = () => {
    
  }
  handleReset = () => {
    this.props.form.resetFields();
  }
}
BikeMap = Form.create()(BikeMap);