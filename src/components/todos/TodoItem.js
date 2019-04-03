import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#333",
      color: "darkcyan",
      padding: "10px",
      borderBottom: "2px darkmagenta dotted"
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//  PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

//  Button Style
const btnStyle = {
  background: 'red',
  border: 'none',
  float: 'right',
  padding: '5px 10px',
  color: '#fff',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default TodoItem
