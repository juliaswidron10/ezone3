import React from "react";
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <div className={`checkboxdiv ${this.state.checked ? "active" : ''}`} onClick={() => this.setState({ checked: !this.state.checked })}>
        <label
          htmlFor={this.props.name}
          
        >
          {this.props.title}
        </label>
        <input
          type="checkbox"
          id={this.props.name}
          className="switch"
          name={this.props.name}
          onChange={this.props.onCheckboxChange}
        ></input>
      </div>
    );
  }
}
  

