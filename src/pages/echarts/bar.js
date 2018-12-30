import React, { Component } from 'react'
import { Card } from 'antd'
import Echarts from 'echarts'

export default class Bar extends Component {
  render() {
    return (
      <div>
        <Card title="柱形图表之一">
          <div id="bar-wrapper" style={{height: 500}}></div>
        </Card>
        <Card title="柱形图表之二" className="card-top">
          <div id="bar-wrapper2" style={{height: 500}}></div>
        </Card>
      </div>
    )
  }
  componentDidMount () {
    Echarts.init(document.getElementById('bar-wrapper')).setOption({
      title: {
        text: '用户骑行订单',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {},
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        splitLine:{  
          show: true  
        },  
      },
      yAxis: {
        show: true
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
        itemStyle: {
          color: '#61a0a8'
        },
        label: {
          show: true,
          position: 'top'
        }
      }],
      grid: {
        show: true
      }
    });
    Echarts.init(document.getElementById('bar-wrapper2')).setOption({
      title: {
        text: '用户骑行订单',
        textStyle: {
          color: '#ccc'
        }
      },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ["weekday", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          ['OFO', 2000, 3000, 5500, 7000, 8000, 12000, 20000],
          ['摩拜', 1500, 3000, 4500, 6000, 8000, 10000, 15000],
          ['小蓝', 1000, 2000, 2500, 4000, 6000, 7000, 8000]
        ]
      },
      xAxis: {
        type: 'category',
        splitLine:{  
          show: true  
        }, 
      },
      // 声明一个 Y 轴，数值轴。
      yAxis: {},
      // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
      series: [
        {
          type: 'bar', 
          seriesLayoutBy: 'row', 
          label: {
            show: true,
            position: 'top'
          }
        },
        {
          type: 'bar', 
          seriesLayoutBy: 'row',
          label: {
            show: true,
            position: 'top'
          },
        },
        {
          type: 'bar', 
          seriesLayoutBy: 'row',
          label: {
            show: true,
            position: 'top'
          },
        }
      ],
      grid: {
        show: true
      }
    })
    console.log(Echarts.version);
  }
}
