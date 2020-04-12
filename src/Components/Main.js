import React, { Component } from "react";
import Task from "./Task";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      addedTask: "",
      details: ""
    };
    this.handlSubmit = this.handlSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlSubmit = event => {
    event.preventDefault();
    if (this.state.addedTask.length === 0) {
      return;
    }
    const newTask = {
      id: Date.now(),
      task: this.state.addedTask
    };
    this.setState(prevState => ({
      tasks: prevState.tasks.concat(newTask),
      addedTask: ""
    }));
  };

  handleChange = event => {
    this.setState({
      addedTask: event.target.value
    });
  };

  render() {
    return (
      <div className="main-class">
        <form onSubmit={this.handlSubmit}>
          <label for="addTask">Add task:</label>
          <br />
          <input
            placeholder="e.g. Learning Html"
            id="addTask"
            value={this.state.addedTask}
            name="addTask"
            onChange={this.handleChange}
          />
          <button type="submit" className="addTaskBtn">
            <span style={{ fontWeight: 600 }}> + </span> Add Task
          </button>
        </form>
        <h2>All Tasks:</h2>
        <ul>
          {this.state.tasks.map(task => {
            return (
              <li>
                <Task task={task.task} id="task.id" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
