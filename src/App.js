import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Menu from './Components/Menu';

//import Login from './Components/Login';

import Login from './components/Login';
import Menu from './components/Menu';
function App() {
  return (
  /*  <Router>
    <div>

   </div>
   <Route exact path="/"  component={Login} />
   <Route exact path="/Menu"  component={Menu} />
   </Router>*/
 <div>
   <Menu/>

   </div>
  );
}

export default App;
