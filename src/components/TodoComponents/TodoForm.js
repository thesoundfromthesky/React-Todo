/*
  - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
  - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
  - Once a todo is submitted, the Todo List should re-render and show the added todo.
*/

import React, { Component } from "react";
import "./Todo.css";

export default class TodoForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { form: { task: "" } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  handleChange(ev) {
    const target = ev.target;
    this.setState(prev => ({
      form: {
        ...prev.form,
        [target.name]: target.value
      }
    }));
  }

  handleSubmit(ev) {
    ev.preventDefault();

    if (!this.state.form.task) return;

    this.props.handleSubmit({
      ...this.state.form,
      id: Date.now(),
      completed: false
    });
    this.setState({ form: { task: "" } });
  }

  clearCompleted() {
    const { clearCompleted } = this.props;
    clearCompleted();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="task"
            value={this.state.form.task}
            placeholder="enter your task"
          />
          <button type="submit">Add Todo</button>
          <button type="button" onClick={this.clearCompleted}>
            Clear Completed
          </button>
        </form>
      </div>
    );
  }
}
