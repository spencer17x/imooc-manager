import React, { Component } from 'react';
import App from './App';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import Login from './pages/login';
import NoMatch from './pages/noMatch';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Modals from './pages/ui/modals';
import Home from './pages/home';
import HighTable from './pages/table/highTable';
import City from './pages/city/city';
import Order from './pages/order/order';
import Common from './Common';
import OrderDetail from './pages/common/orderDetail';

export default class IRouter extends Component {
  render () {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/admin" render={() => 
              <Admin>
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
                  <Route component={NoMatch}/>
                </Switch>
              </Admin>
            }/>
            <Route path="/common" render={({match}) => 
              <Common>
                <Route path={`${match.url}/order/detail`} component={OrderDetail}/>
              </Common>
            }/>            
            <Redirect to="/admin/home"/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}