import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="social-links">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/svetoslav-mishev-989086112/"><i className="fa fa-linkedin"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/svetoslavmishev/react-touch-weather"><i className="fa fa-github"></i></a>
            </div>
          </div>
        </div>
        <p className="colophon">Copyright 2018 Touch4Weather &copy;. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;