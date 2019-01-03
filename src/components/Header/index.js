import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
import './style.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 
class Header extends Component {
  render () {
    const isOrderDetail = this.props.part === 'orderDetail';
    return (
      <div className="header" style={{background: isOrderDetail ? '#1890ff' : '#fff'}}>
        <Row className="header-top">
          <Col span="24">
            {
              isOrderDetail ?  <Link className="order-detail-wrap" to="/">
              <img src="/assets/logo-ant.svg" alt="" className="order-detail-logo"/>
              <div>React.JS通用管理系统</div>
            </Link> : null
            }
            <span style={{color: isOrderDetail ? '#fff' : ''}}>欢迎，{this.state.userName}</span>
            <a href="/">退出</a>
          </Col>
        </Row>
        {
          isOrderDetail ? null : <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            {this.props.title}
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.currentTime}</span>
            <img src={this.state.dayPictureUrl} alt=""/>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
        }
      </div>
    )
  }
  componentWillMount () {
    this.setState({
      userName: 'Sev'
    });
    this.getWeatherData();
    this.getCurrentTime();
  }
  getWeatherData = () => {
    let city = '杭州';
    axios.jsonP({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=GizvIAityXvXfH4DqPZpM63dcnTBWWrS`
    }).then((res) => {
      if (res.status === 'success') {
        const weatherData = res.results[0].weather_data;
        const dayPictureUrl = weatherData[0].dayPictureUrl;
        const weather = weatherData[0].weather;
        this.setState({
          weather,
          dayPictureUrl
        });
      }
    })
  }
  getCurrentTime = () => {
    setInterval(() => {
      const time = new Date().getTime();
      const currentTime = Utils.formateDate(time);
      this.setState({
        currentTime
      });
    }, 1000);
  }
}

const mapState = (state) => {
  return {
    title: state.title
  }
}

export default connect(mapState)(Header)