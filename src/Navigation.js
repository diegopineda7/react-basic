import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TodoApp from './TodoApp';
import Fetch from './Fetch';
import Counter from './Counter';
import Clock from './Clock';

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/todo' component={TodoApp} />
          <Route exact path='/fetch' component={Fetch} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/clock' component={Clock} />
          <Route component={Home}>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </Router>
    )
  }
}
