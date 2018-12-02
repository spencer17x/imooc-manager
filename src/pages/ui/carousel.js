import React, { Component } from 'react';
import { Card, Carousel } from 'antd';

export default class Carousels extends Component {
  render () {
    return (
      <div>
        <Card title="文字背景轮播">
          <Carousel effect="fade" autoplay>
            <div><h3>welcome to React 1</h3></div>
            <div><h3>welcome to React 2</h3></div>
            <div><h3>welcome to React 3</h3></div>
          </Carousel>
        </Card>
        <Card title="图片轮播" className="card-top slider-wrap">
          <Carousel effect="fade" autoplay>
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg" alt=""/>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}