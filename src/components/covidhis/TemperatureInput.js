import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    
    return (
      <fieldset>
        <legend> Enter temp in {scaleNames[this.props.scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export default TemperatureInput;