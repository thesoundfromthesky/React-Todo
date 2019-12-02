import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  /*
  - `<App />` will hold all the data needed for this project. 
    It will also be the container for your Todo Components.
  - All of your application data will be stored here on `<App />`.
  - All of your `handler` functions should live here on `<App />`.
  - The `task` field is the todo title that will be shown to the user.
  - The `completed` field should default to `false` and will be 
    the field that we toggle when we complete a todo.
  - The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.
  */

  constructor() {
    super();
    this.state = { todoList: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  handleSubmit(todo) {
    this.setState(prev => ({ todoList: [...prev.todoList, todo] }));
    console.log(this.state);
  }

  toggleCompleted(id) {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id !== id) return todo;
        todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  clearCompleted() {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">TODO list</h1>
        <TodoForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
