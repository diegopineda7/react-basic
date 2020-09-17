import React, { Component } from 'react';
import './styles/styles.css';

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        // { id: 0, name: 'Gym' },
        // { id: 1, name: 'Buy book' },
        // { id: 2, name: 'Watch movie' }
      ],
      done: [],
      name: ''
    }
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    document.title = this.state.list.length > 0
      ? `Practice - ToDo App (${this.state.list.length})`
      : 'Practice - ToDo App';
    this.inputRef.current.focus();
  }

  componentDidUpdate(prevState) {
    if (prevState.list !== this.state.list)
      document.title = this.state.list.length > 0
        ? `Practice - ToDo App (${this.state.list.length})`
        : 'Practice - ToDo App';
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  addTodo = () => {
    if (this.state.name !== '') {
      let list = [...this.state.list];
      const newTodo = {
        id: list.length > 0
          ? list[list.length - 1].id + 1
          : 0,
        name: this.state.name
      };
      list.push(newTodo);
      this.setState({
        list,
        name: ''
      });
    } else {
      this.inputRef.current.placeholder = 'Type something';
    }
    this.inputRef.current.focus();
  }

  doneTodo = id => {
    let list = [...this.state.list];
    let done = [...this.state.done];
    const doneItem = list.find(item => item.id === id);
    const newList = list.filter(item => item.id !== id);

    done.push(doneItem);
    this.setState({
      list: newList,
      done
    });
  }

  sortByNewer = () => {
    let list = [...this.state.list];
    list.sort((a, b) => (a.id - b.id));
    this.setState({ list });
  }

  sortByOlder = () => {
    let list = [...this.state.list];
    list.sort((a, b) => (b.id - a.id));
    this.setState({ list });
  }

  render() {
    const { name, list, done } = this.state;
    return (
      <div>
        <h1>Add a new ToDo</h1>
        <div>
          <label>Name</label>
          <input name='name' value={name} onChange={this.handleChange} ref={this.inputRef} />
        </div>
        <button onClick={this.addTodo} className='button'>Add it!</button>
        <div className='list'>
          <h2 className='itemTodo'>My ToDos</h2>
          {
            list.length > 0
              ? list.map(item => (
                <div key={item.id} className='todo'>
                  <h3 className='itemTodo'>{item.id}</h3>
                  <h3 className='itemTodo'>{item.name}</h3>
                  <button
                    className='doneButton'
                    onClick={() => this.doneTodo(item.id)}
                  >
                    Done
                  </button>
                </div>
              ))
              : 'No ToDos created'
          }
        </div>
        <button onClick={this.sortByNewer}>By newer</button>
        <button onClick={this.sortByOlder}>By older</button>
        <div className='list'>
          <h2 className='itemTodo'>Done</h2>
          {
            done.length > 0
              ? done.map(item => (
                <div key={item.id} className='todo'>
                  <h3 className='itemTodo'>{item.id}</h3>
                  <h3 className='itemTodo'>{item.name}</h3>
                </div>
              ))
              : 'No ToDos done'
          }
        </div>
      </div>
    )
  }
}
