import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Main from './main';
import About from './about';
import Topics from './topics';

export default class Home extends Component {
  render () {
    return (
      <HashRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>  
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </Switch>
        </Fragment>
      </HashRouter>
    )
  }
}