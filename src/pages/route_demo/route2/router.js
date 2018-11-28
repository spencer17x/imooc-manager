import React, { Component } from 'react';
import Main from './main';
import About from '../route1/about';
import Topics from './topics';
import ComponentA from './a';
import ComponentB from './b';
import ComponentC from './c';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class IRouter extends Component {
  render () {
    return (
      <HashRouter>
        <Main>
          <Switch>
            <Route path="/home" render={() => 
              <Switch>
                <Route path="/home" exact render={() => <div>home</div>}/>
                <Route path="/home/a" component={ComponentA}/>
                <Route path="/home/b" component={ComponentB}/>
                <Route path="/home/c" component={ComponentC}/>
                <Route render={() => <div>No-Match</div>}/>
              </Switch>
            }/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route render={() => <div>No-Match</div>}/>
            <Redirect to="/home"/> 
          </Switch>
        </Main>   
      </HashRouter>
    )
  }
}