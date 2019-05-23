import React, { Component } from 'react';
import App from './App';
import Admin from './admin';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";
import Common from './Common';
import Loadable from 'react-loadable';
import Loading from './LoadingC';

let Home = Loadable({
  loader: () => import('./pages/home'),
  loading: Loading
})
let Login = Loadable({
  loader: () => import('./pages/login'),
  loading: Loading
})
let Buttons = Loadable({
  loader: () => import('./pages/ui/buttons'),
  loading: Loading
})
let Loadings = Loadable({
  loader: () => import('./pages/ui/loadings'),
  loading: Loading
})
let Notice = Loadable({
  loader: () => import('./pages/ui/notice'),
  loading: Loading
})
let Messages = Loadable({
  loader: () => import('./pages/ui/messages'),
  loading: Loading
})
let Tabs = Loadable({
  loader: () => import('./pages/ui/tabs'),
  loading: Loading
})
let Gallery = Loadable({
  loader: () => import('./pages/ui/gallery'),
  loading: Loading
})
let Carousels = Loadable({
  loader: () => import('./pages/ui/carousel'),
  loading: Loading
})
let FormLogin = Loadable({
  loader: () => import('./pages/form/login'),
  loading: Loading
})
let FormRegister = Loadable({
  loader: () => import('./pages/form/register'),
  loading: Loading
})
let BasicTable = Loadable({
  loader: () => import('./pages/table/basicTable'),
  loading: Loading
})
let NoMatch = Loadable({
  loader: () => import('./pages/noMatch'),
  loading: Loading
})
let Modals = Loadable({
  loader: () => import('./pages/ui/modals'),
  loading: Loading
})
let HighTable = Loadable({
  loader: () => import('./pages/table/highTable'),
  loading: Loading
})
let City = Loadable({
  loader: () => import('./pages/city/city'),
  loading: Loading
})
let Order = Loadable({
  loader: () => import('./pages/order/order'),
  loading: Loading
})
let OrderDetail = Loadable({
  loader: () => import('./pages/common/orderDetail'),
  loading: Loading
})
let User = Loadable({
  loader: () => import('./pages/user/user'),
  loading: Loading
})
let Rich = Loadable({
  loader: () => import('./pages/rich/rich'),
  loading: Loading
})
let BikeMap = Loadable({
  loader: () => import('./pages/bikeMap/bikeMap'),
  loading: Loading
})
let Bar = Loadable({
  loader: () => import('./pages/echarts/bar'),
  loading: Loading
})
let Pie = Loadable({
  loader: () => import('./pages/echarts/pie'),
  loading: Loading
})
let Line = Loadable({
  loader: () => import('./pages/echarts/line'),
  loading: Loading
})
let Permission = Loadable({
  loader: () => import('./pages/permission/permission'),
  loading: Loading
})

const history = createHashHistory();

export default class IRouter extends Component {
  render () {
    return (
      <Router history={history}>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/admin" render={() => 
              <Admin history={history}>
                <Switch>
                  <Route path="/admin/home" component={Home} />
                  <Route path="/admin/ui/buttons" component={Buttons}/>
                  <Route path="/admin/ui/modals" component={Modals}/>
                  <Route path="/admin/ui/loadings" component={Loadings}/>
                  <Route path="/admin/ui/notification" component={Notice}/>
                  <Route path="/admin/ui/messages" component={Messages}/>
                  <Route path="/admin/ui/tabs" component={Tabs}/>
                  <Route path="/admin/ui/gallery" component={Gallery}/>
                  <Route path="/admin/ui/carousel" component={Carousels}/>
                  <Route path="/admin/form/login" component={FormLogin}/>
                  <Route path="/admin/form/reg" component={FormRegister}/>
                  <Route path="/admin/table/basic" component={BasicTable}/>
                  <Route path="/admin/table/high" component={HighTable}/>
                  <Route path="/admin/city" component={City}/>
                  <Route path="/admin/order" component={Order}/>
                  <Route path="/admin/order" component={Order}/>
                  <Route path="/admin/user" component={User}/>
                  <Route path="/admin/rich" component={Rich}/>
                  <Route path="/admin/bikeMap" component={BikeMap}/>
                  <Route path="/admin/charts/bar" component={Bar}/>
                  <Route path="/admin/charts/pie" component={Pie}/>
                  <Route path="/admin/charts/line" component={Line}/>
                  <Route path="/admin/permission" component={Permission}/>
                  <Route component={NoMatch}/>
                </Switch>
              </Admin>
            }/>
            <Route path="/common" render={({match}) => 
              <Common>
                <Route path={`${match.url}/order/detail`} component={OrderDetail}/>
              </Common>
            }/>
            <Redirect to="/login"/>
          </Switch>
        </App>
      </Router>
    )
  }
}