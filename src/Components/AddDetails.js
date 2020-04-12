import React, { Component } from "react";

export class AddDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      addedDetail: "",
      isChecked: false,
      totalChecked: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.addedDetail.length === 0) {
      return;
    }
    const newDetail = {
      id: Date.now(),
      detail: this.state.addedDetail,
      isChecked: this.state.isChecked
    };
    this.setState(prevState => ({
      details: prevState.details.concat(newDetail),
      addedDetail: ""
    }));
  }

  handleChange(event) {
    const { value, checked, type } = event.target;
    if (type === "checkbox") {
      this.setState({
        isChecked: checked
      });
      checked === true
        ? this.setState(prevState => ({
            totalChecked: prevState.totalChecked + 1
          }))
        : this.setState(prevState => ({
            totalChecked: prevState.totalChecked - 1
          }));
    } else {
      this.setState({
        addedDetail: value
      });
    }
  }
  render() {
    let output;
    this.props.addDetails === false
      ? (output = <div></div>)
      : (output = (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label for="addDetails">Add Details:</label>
              <input
                type="text"
                id="addDetails"
                placeholder="e.g. Learn Semantics"
                onChange={this.handleChange}
                value={this.state.addedDetail}
              />
              <button type="submit">
                <strong>+ </strong>Add
              </button>
            </form>
            <ul>
              {this.state.details.map(detail => {
                return (
                  <li id={detail.id}>
                    <label>
                      <input
                        name={detail.detail}
                        type="checkbox"
                        onChange={this.handleChange}
                      />
                      {detail.detail}
                    </label>
                  </li>
                );
              })}
            </ul>
            <div>
              <p>
                <strong>Progress:</strong>
                {(this.state.totalChecked / this.state.details.length) * 100 ||
                  0}
                % Completed
              </p>
            </div>
            <progress
              min="0"
              max={this.state.details.length}
              value={this.state.totalChecked}
            />
          </div>
        ));

    return output;
  }
}

export default AddDetails;
