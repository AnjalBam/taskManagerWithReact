import React, { Component } from "react";
import AddDetails from "./AddDetails";

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false
    };
    this.handleAddDetails = this.handleAddDetails.bind(this);
  }

  handleAddDetails = () => {
    this.setState(prevState => ({
      details: !prevState.details
    }));
  };

  render() {
    return (
      <div>
        <h3 className="text-title">{this.props.task}</h3>
        <button onClick={this.handleAddDetails} className="detailsBtn">
          Details
        </button>
        <AddDetails addDetails={this.state.details} />
      </div>
    );
  }
}

export default Task;
