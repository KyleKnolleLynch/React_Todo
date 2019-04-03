import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import './App.css';
import AddTodo from './components/todos/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
      .catch(err => console.log(err));
  }

  //  Checkbox Toggler
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
        todo.completed = !todo.completed
        }
        return todo;
    }) });
  }

  //  Delete Todo Item
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
      .catch(err => console.log(err));
   
  }

  //  Add Todo Item
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                 <AddTodo addTodo={this.addTodo} />
                 <Todos todos={this.state.todos} markComplete={this.markComplete}     delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
