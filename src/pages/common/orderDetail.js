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
          <div className="map-show">
          
          </div>
        </div>
      </div>
    )
  }
}

export default orderDetail
