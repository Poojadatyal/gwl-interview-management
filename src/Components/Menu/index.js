import React from 'react';
import './index.css';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';


class Menu extends React.Component{

  render(){


    return(

      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            GoodWorks Colloquio
          </Typography>
        </Toolbar>
      </AppBar>

    );
  }
}export default Menu;
