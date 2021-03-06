import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="site">
          {window.location.pathname == '/' ? <Header /> : ''}
          <Nav />
          <Main />
          {window.location.pathname !== '/' ? <Footer /> : ''}
        </div>
      </Router>
    );
  }
}

export default App;
