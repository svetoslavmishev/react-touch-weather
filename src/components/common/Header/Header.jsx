import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="site-header">
        <div className="container">
          <NavLink to="/" className="branding">
            <img src="images/logo.jpg" alt="" className="logo" />
            <div className="logo-type">
              <h1 className="site-title">Touch&Weather</h1>
              <small className="site-description">type some tagline here</small>
            </div>
          </NavLink>
          <div className="main-navigation">
            <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
            <ul className="menu">
              <li className="menu-item current-menu-item"><NavLink to="/">Home</NavLink></li>
              <li className="menu-item"><NavLink to="contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="mobile-navigation"></div>
        </div>
      </div>
    );
  }
}