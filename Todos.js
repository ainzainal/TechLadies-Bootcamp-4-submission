import React from "react";

export class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoDescription: "",
      counter: 0,
      editing: false
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTodoClick = currentToDo => {
    currentToDo.isDone = !currentToDo.isDone;

    const updatedState = {
      todos: this.state.todos
    };

    this.setState(updatedState);
  };

  handleAddTodo = () => {
    const newTodoDescription = this.state.newTodoDescription;

    const newTodo = {
      description: newTodoDescription,
      isDone: false,
      id: this.state.counter
    };

    const newTodos = [newTodo, ...this.state.todos];

    this.setState({
      todos: newTodos,
      newTodoDescription: "",
      counter: this.state.counter + 1
    });
  };

  handleTodoDelete = deleteTodo => {
    const deleteItems = this.state.todos.indexOf(deleteTodo);

    this.setState({
      todos: this.state.todos.splice(deleteItems, 1)
    })
  }

  handleEditTodos(event) {
    this.setState({ editing: true, changedText: this.props.todo.description });
  }

  handleEditTodosDone(event) {
    if (event.keyCode === 13) {
      this.setState({ editing: false });
    }
  }

  handleEditTodosChange(event) {
    const changedText = event.target.value ;
    this.setState({ changedText: changedText });
  }

  render() {
    const todoList = {};
    const editField = {};

    if (this.state.editing) {
      todoList.display = "none";
    } else {
      editField.display = "none";
    }

    return (
      <div className="todoList">
        <h1>My Todo List</h1>
        <label htmlFor="newTodoDescription" />
        <input
          placeholder="Enter todos here"
          type="text"
          value={this.state.newTodoDescription}
          name="newTodoDescription"
          id="newTodoDescription"
          onChange={this.handleOnChange}
        />

        <button onClick={this.handleAddTodo}> Submit </button>
        <ul>
          {this.state.todos.map(todo => {
            let completeClass = "";
            if (todo.isDone) {
              completeClass = "complete";
            }
            return (
              <li
                key={todo.id}
                className={completeClass}
                onClick={() => this.handleTodoClick(todo)}
              >
                {todo.description}
                <input
                  type="text"
                  onKeyDown={this.handleEditTodosDone.bind(this)}
                  onChange={this.handleEditTodosChange.bind(this)}
                  className={editField}
                  value={this.state.changedText}
                />

                <button
                  onClick={() => this.handleTodoDelete(todo)}
                  className="delete"
                  key={todo.id}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
