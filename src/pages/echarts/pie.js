import React, { Component } from 'react'
import { Card } from 'antd'
import Echarts from 'echarts'

export default class Pie extends Component {
  state = {
    options: {
      title: {
        text: '用户骑行订单',
        x: 'center',
        textStyle: {
          color: 'red'
        }
      },
      series: {
        type: 'pie',
        radius: '50%',
        data: [
          {name: '周一', value: 1000},
          {name: '周二', value: 1000},
          {name: '周三', value: 2000},
          {name: '周四', value: 1500},
          {name: '周五', value: 3000},
          {name: '周六', value: 2000},
          {name: '周日', value: 1200},
        ]
      },
      legend: {
        right: '20',
        orient: 'vertical'
      },
      tooltip: {
        trigger: 'item',
        formatter: "订单量 <br/>{b} : {c} ({d}%)"
      }
    },
    options2: {
      title: {
        text: '用户骑行订单',
        x: 'center',
        textStyle: {
          color: 'red'
        }
      },
      series: {
        type: 'pie',
        radius: ['50%', '80%'],
        data: [
          {name: '周一', value: 1000},
          {name: '周二', value: 1000},
          {name: '周三', value: 2000},
          {name: '周四', value: 1500},
          {name: '周五', value: 3000},
          {name: '周六', value: 2000},
          {name: '周日', value: 1200},
        ]
      },
      legend: {
        right: '20',
        orient: 'vertical'
      },
      tooltip: {
        trigger: 'item',
        formatter: "订单量 <br/>{b} : {c} ({d}%)"
      }
    },
    options3: {
      title: {
        text: '用户骑行订单',
        x: 'center',
        textStyle: {
          color: 'red'
        }
      },
      series: {
        type: 'pie',
        data: [
          {name: '周一', value: 1000},
          {name: '周二', value: 1000},
          {name: '周三', value: 2000},
          {name: '周四', value: 1500},
          {name: '周五', value: 3000},
          {name: '周六', value: 2000},
          {name: '周日', value: 1200},
        ].sort((a, b) => {
          return a.value - b.value;
        }),
        roseType: 'radius',
        radius: '50%'
      },
      legend: {
        right: '20',
        orient: 'vertical'
      },
      tooltip: {
        trigger: 'item',
        formatter: "订单量 <br/>{b} : {c} ({d}%)"
      }
    }
  }
  render() {
    return (
      <div>
        <Card title="饼形图表之一">
          {/* <div id="pie-wrapper" style={{height: 500}}></div> */}
          <PieCharts 
            options={this.state.options}
            index=""
          />
        </Card>
        <Card title="饼形图表之二" className="card-top">
          {/* <div id="pie-wrapper2" style={{height: 500}}></div> */}
          <PieCharts 
            options={this.state.options2}
            index="2"
          />
        </Card>  
        <Card title="饼形图表之三" className="card-top">
          {/* <div id="pie-wrapper3" style={{height: 500}}></div> */}
          <PieCharts 
            options={this.state.options3}
            index="3"
          />
        </Card>  
      </div>
    )
  }
}

class PieCharts extends Component {
  render () {
    return (
      <div id={`pie-wrapper${this.props.index}`} style={{height: 500}}></div>
    )
  }
  componentDidMount () {
    Echarts.init(document.getElementById(`pie-wrapper${this.props.index}`)).setOption(this.props.options)
  }
}