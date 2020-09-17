import React, { Component } from 'react';
import { NameContext } from './App';

export default class Fetch extends Component {
  inputRef = React.createRef();

  constructor(props) {
    super(props)

    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    document.title = 'Practice - Fetch';
    this.inputRef.current.focus();
  }

  getData = id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(typeof data)
        data.title
          ? this.setState({ data: data.title })
          : this.setState({ data: 'Data not found' })
      });
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
  }

  render() {
    return (

      <div>
        <h1>Which id are you looking for?</h1>
        <div>
          <label>Id</label>
          <input ref={this.inputRef} />
        </div>
        <button className='button' onClick={() => this.getData(this.inputRef.current.value)}>Get data</button>
        <div>
          {this.state.data}
        </div>
        <NameContext.Consumer>
          {name => <h1>{name}</h1>}
        </NameContext.Consumer>
      </div>
    )
  }
}