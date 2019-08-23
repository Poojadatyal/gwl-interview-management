import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import RegisterationForm from '../Menu/RegisterationForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Grid,Button} from '@material-ui/core';
const drawerWidth = 220;

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent : 'center',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit ,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested : {
    paddingLeft : 45 ,
  }
});

class Menu extends React.Component {
  state = {
    open: false,
    subListOpen :false
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false });
  };
  handleOnClick = () => {
    this.setState({
      subListOpen : !this.state.subListOpen
    })
  };
  handleUserFormOnClick = () => {
    const {history} =this.props;
    history.push("../Menu/RegisterationForm");
  }

  render() {
    const { classes, theme } = this.props;
    const { open,subListOpen } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{background: "#009688", color : "white"}}
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
        < Grid container>
        <Grid item md ={11}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              GoodWorkLabs
            </Typography>
          </Toolbar>
          </Grid>
          <Grid item md={1}>
          <Typography style= {{ fontFamily: '"Apple Color Emoji"',paddingTop : "10px"}} variant ="h8" onClick ={this.onClickLogout}>Logout</Typography>
          </Grid>
</Grid>
        </AppBar>


        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={()=>{this.handleUserFormOnClick()}}>
            <ListItemText inset primary="Create User" />
            </ListItem>
            <ListItem button onClick = {this.handleOnClick}>
            <ListItemText inset primary="Roles" />
            {this.state.subListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.subListOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="HR" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Interviewer" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Candidate" />
            </ListItem>
          </List>
        </Collapse>

            <ListItem>
            <ListItemText inset primary="Actions" />
            </ListItem>
            <ListItem>
            <ListItemText inset primary="List of Roles" />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
        </main>

      </div>

    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);
