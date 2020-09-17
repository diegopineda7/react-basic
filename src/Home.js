import React, { Component } from 'react';
import { NameContext } from './App';

export default class Home extends Component {
  componentDidMount() {
    document.title = 'Practice - Home';
  }

  render() {
    return (
      <NameContext.Consumer>
        {name => <h1>Welcome to {name}</h1>}
      </NameContext.Consumer>
    )
  }
}
