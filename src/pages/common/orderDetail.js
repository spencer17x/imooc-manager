import React, { Component } from 'react';
import Header from '../../components/Header';
import './orderDetail.less';
import { Button } from 'antd';

export class orderDetail extends Component {
  render() {
    return (
      <div className="order-wrapper">
        <Header 
          part="orderDetail"/>
        <div className="order-detail-map">
          <Button type="primary" style={{margin: 20}}>原始轨迹</Button>
          <div className="map-container" id="map-container">
            
          </div>
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
