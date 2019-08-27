import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from './components/Menu';
import Login from './components/Login';
import CreateUser from './components/Menu/CreateUser';
import Roles from './components/Menu/Roles';

function App() {
  return (
<div>
 <Router>

   <Route exact path="/"  component={Login} />
   <Route  path="/user/menu"  component={Menu} />

   </Router>
</div>
);
}

export default App;
