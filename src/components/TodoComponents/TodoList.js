import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// - `<TodoList />` receives your Todos array and iterates over the list generating
// a new `<Todo />` for each element in the array.

import React, { Component } from "react";

export default class TodoList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { todoList, toggleCompleted } = this.props;
    return (
      <>
        {todoList.map(todo => (
          <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
        ))}
      </>
    );
  }
}
