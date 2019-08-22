import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*import Login from './Components/Login';
import Menu from './Components/Menu';*/
import Registeration_Frm from './Components/Registeration_Frm';


function App() {
  return (
  /* <Router>
    <div>

   </div>
   <Route exact path="/"  component={Login} />
   <Route exact path="/Menu"  component={Menu} />
   </Router>*/

<Registeration_Frm/>

  );
}

export default App;
