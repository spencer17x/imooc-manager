import React, { Component } from 'react';
import App from './App';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Login from './pages/login';
import NoMatch from "./pages/noMatch";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Modals from './pages/ui/modals';

export default class IRouter extends Component {
  render () {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/loadings" component={Loadings}/>
                <Route path="/admin/ui/notification" component={Notice}/>
                <Route path="/admin/ui/messages" component={Messages}/>
                <Route path="/admin/ui/tabs" component={Tabs}/>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
        </App>
      </HashRouter>
    )
  }
}