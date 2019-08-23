import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
/*import Login from './Components/Login';
import Menu from './Components/Menu';*/
import Registeration_Frm from './Components/Registeration_Frm';
import Login from './components/Login';
import Menu from './components/Menu';

function App() {
  return (
  /* <Router>
    <div>
<Registeration_Frm/>
   </div>
   <Route exact path="/"  component={Login} />
   <Route exact path="/Menu"  component={Menu} />
   </Router>*/
 <div>
   <Menu/>
  </div>

>>>>>>> 62f3bd80c52ee4fed4ce69497cde5758d0498c64
  );
}

export default App;
