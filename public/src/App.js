// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Products from './Products';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
