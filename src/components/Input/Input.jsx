import React, { Component } from 'react';

export default class InputLocation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="hero background-location" >
        <div className="container">
          <form className="find-location">
            <input type="text" placeholder="Find your location..." />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}