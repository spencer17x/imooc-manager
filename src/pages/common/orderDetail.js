import React, { Component } from 'react';
import Header from '../../components/Header';
import './orderDetail.less';
import { Button } from 'antd';

export class orderDetail extends Component {
  baseInfo = [{
    title: '用车模式',
    text: '停车点',
  }, {
    title: '订单编号',
    text: 'T1803244422704080JGJI',
  }, {
    title: '车辆编号',
    text: '802410001',
  }, {
    title: '用户姓名',
    text: '曹涛',
  }, {
    title: '手机号码',
    text: '13597482075',
  }, {
    title: '用车模式',
    text: '停车点',
  }]
  bycycleInfo = [{
    title: '行程起点',
    text: '北京市昌平区回龙观东大街'
  }, {
    title: '行程终点',
    text: '北京市海淀区奥林匹克公园'
  }, {
    title: '行驶里程',
    text: '10公里'
  }]
  render() {
    return (
      <div className="order-wrapper">
        <Header 
          part="orderDetail"/>
        <div className="order-detail-map">
          <Button type="primary" style={{margin: 20}}>原始轨迹</Button>
          <div className="map-container" id="map-container"></div>
        </div>
        <div className="order-detail-footer">
          <div className="title">基础信息</div>
          <ul className="base-info">
           {
             this.baseInfo.map(function (item) {
                return (
                  <li className="item">
                    <div className="item-title">{item.title}</div>
                    <div className="item-text">{item.text}</div>
                  </li>
                )
             })
           }
          </ul>
          <div className="title">行驶轨迹</div>
          <ul>
           {
             this.bycycleInfo.map(function (item) {
                return (
                  <li className="item">
                    <div className="item-title">{item.title}</div>
                    <div className="item-text">{item.text}</div>
                  </li>
                )
             })
           }
          </ul>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.renderMap()
  }
  renderMap () {
    let map = new window.BMap.Map("map-container");
    map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别  
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT, type: window.BMAP_NAVIGATION_CONTROL_RIGHT});
    this.addControl(map, top_right_navigation); // 新增控件
  }
  addControl (map, top_right_navigation) {
		map.addControl(top_right_navigation); 
	}
}

export default orderDetail
