import React, { Component } from 'react';

export default class InputLocation extends Component {
  constructor() {
    super();

    this.state = {
      cityName: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(ev) {
    ev.preventDefault();
    this.setState({ cityName: ev.target.value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.getData(this.state.cityName);
    this.setState({ cityName: '' });
  }

  render() {
    return (
      <div className="hero background-location" >
        <div className="container">
          <div className="alert alert-danger">
            <strong>{this.props.error}</strong>
          </div>
          <form className="find-location" onSubmit={this.onSubmit}>
            <input type="text" placeholder="Find your location..."
              value={this.state.cityName}
              onChange={this.onInputChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}