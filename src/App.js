import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site-content">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;