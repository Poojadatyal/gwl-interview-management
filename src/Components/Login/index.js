import React from 'react';
import './index.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Card,CardContent,Toolbar,Typography,AppBar} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';

class Login extends React.Component{
  state={
 Username: "",
    password: "",
  open: false,
  vertical: 'top',
    horizontal: 'center',
}

  handleChangename=(e)=>{
    this.setState({
            Username : e.target.value,

    })
  };
  handleChangepassword=(e)=>{
    this.setState({
            password : e.target.value
    })
  };
  handleClick = () => {
      this.setState({ open: true });
    };
    handleClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }

       this.setState({ open: false });
     };


  onClickValidate=()=>{
    const {Username} =this.state;
    const {history}=this.props;
    const {password} = this.state;
     // Username =="GWL" && password == "123" ?this.props.history.push('/Menu'): window.alert("Authentication Error");
     if(Username==="GWL" && password==="123")
     {
         history.push('/Menu');
     }
     else if(Username ==="" && password==="")
     {
            /*  alert("Authentication Failed ! CREDENTIALS MISMATCH");*/
              this.handleClick();
      }
     else {
         this.handleClick();
     }
  };

  render(){
    const { classes } = this.props;

    return(
      <React.Fragment>
      <Grid container>
      <Grid item md = {12}>



      <AppBar position="static" style= {{background : "#009688"}}>

             <Toolbar>
               <Grid item md={12}>
              <Typography style= {{ fontFamily: '"Apple Color Emoji"'}} variant ="h5">GoodWorks Colloquio</Typography>
              </Grid>
             </Toolbar>
           </AppBar>



      </Grid>
      </Grid>
      <Grid container style = {{marginTop: 10}}>
       <Grid item md ={12} classes={{root : "displaying"}}>
                 <Card classes ={{root: "card"}}>
                 <CardContent>
             <Typography>Login</Typography>
                    <Typography  color="textSecondary" gutterBottom>
                    <TextField
                      id="outlined-name"
                      label="Name"
                      margin="normal"
                    variant="outlined"
                    onChange = {this.handleChangename}
                       />
             </Typography>

             <Typography  color="textSecondary" gutterBottom>
               <TextField
                       id="outlined-password-input"
                       label="Password"
                       type="password"
                       autoComplete="current-password"
                       margin="normal"
                       variant="outlined"
                       onChange = {this.handleChangepassword}
                     />
               </Typography>

                  <Typography> <Button variant="contained" style= {{background : "#009688", color :"white"}} onClick ={this.onClickValidate}>
        SUBMIT
      </Button></Typography>
      </CardContent>
      </Card>
                  </Grid>
               </Grid>

               <Snackbar  
                         anchorOrigin={{
                           vertical: 'top',
                           horizontal: 'center',

                         }}
                         open={this.state.open}
                         autoHideDuration={3000}

                         onClose={this.handleClose}
                         ContentProps={{
                           'aria-describedby': 'message-id',
                         }}
                         message={<span id="message-id">INVALID CREDENTIALS !!!</span>}
                         action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"

              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}

                       />


</React.Fragment>

    );
  }
}

export default Login;
