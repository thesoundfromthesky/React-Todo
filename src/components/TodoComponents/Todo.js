import React, { Component } from "react";

// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

export default class Todo extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted() {
    const { toggleCompleted, todo } = this.props;
    toggleCompleted(todo.id);
  }

  render() {
    const {
      todo: { task, completed }
    } = this.props;
    return (
      <div
        className="todo"
        style={
          completed ? { color: "red", textDecoration: "line-through" } : null
        }
        onClick={this.toggleCompleted}
      >
        {task}
      </div>
    );
  }
}
