import React, { Component } from 'react';
import App from './App';
import Home from './pages/home';
import Admin from './admin';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Switch } from 'antd';

export default class IRouter extends Component {
  render () {
    return (
      <HashRouter>
        <App>
          <Admin>
            <Switch>
              <Route path="/admin" render={() => 
                <div>
                  <Route path="/admin" component={Home}/>
                </div>
              }/>
            </Switch>
          </Admin>
          <Redirect to="/admin"/>
        </App>
      </HashRouter>
    )
  }
}