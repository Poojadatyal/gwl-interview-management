import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from './components/Menu';
import Login from './components/Login';
import RegisterationForm from './components/Menu/RegisterationForm';

function App() {
  return (
<div>
 <Router>
   <Route exact path="/"  component={Login} />
   <Route  path="/Menu"  component={Menu} />
   <Route exact path = "/Menu/RegisterationForm" component = {RegisterationForm} />
   </Router>
</div>
);
}

export default App;
