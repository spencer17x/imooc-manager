import React, { Component } from 'react';
import App from './App';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
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
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
        </App>
      </HashRouter>
    )
  }
}