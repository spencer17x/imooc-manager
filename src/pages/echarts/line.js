import React, { Component } from 'react'
import { Card } from 'antd'
import Echarts from 'echarts'

export default class Line extends Component {
  state = {
    options: {
      title: {
        text: '用户骑行订单',
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        splitLine:{  
          show: true  
        }, 
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
        type: 'line'
      }],
      tooltip: {
        trigger: 'axis',
        formatter: '{b} <br> 订单量：{c}'
      },
      legend: {
        
      }
    },
    options2: {
      title: {
        text: '用户骑行订单',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['OFO订单量', '摩拜订单量']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        splitLine: {
          show: true
        },
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'OFO订单量',
          type:'line',
          stack: '总量',
          data:[1000, 2000, 5000, 6000, 8000, 10000, 12000]
        },
        {
          name:'摩拜订单量',
          type:'line',
          stack: '总量',
          data:[1200, 3000, 4500, 6000, 8000, 12000, 20000]
        }
      ]
    },
    options3: {
      title: {
        text: '用户骑行订单',
        textStyle: {
          color: '#ccc'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        splitLine:{  
          show: true  
        }, 
        boundaryGap: false,
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
        type: 'line',
        areaStyle: {}
      }],
      tooltip: {
        trigger: 'axis',
        formatter: '{b} <br> 订单量：{c}'
      },
      legend: {}
    }
  }
  render() {
    return (
      <div>
        <Card title="折线图标之一">
          <LineEcharts options={this.state.options} index=""/>
        </Card>
        <Card title="折线图标之二" className="card-top">
          <LineEcharts options={this.state.options2} index="2"/>
        </Card>
        <Card title="折线图标之三" className="card-top">
          <LineEcharts options={this.state.options3} index="3"/>
        </Card>
      </div>
    )
  }
}

class LineEcharts extends Component {
  render () {
    return (
      <div id={`line-wrapper${this.props.index}`} style={{height: 600}}></div>
    )
  }
  componentDidMount () {
    Echarts.init(document.getElementById(`line-wrapper${this.props.index}`)).setOption(this.props.options);
  }
}