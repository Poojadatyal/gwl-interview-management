import React from 'react';
import './index.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Card,CardContent,Toolbar,Typography,AppBar} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Login extends React.Component{
  state={
    Username: "",
    password: "",

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

  onClickValidate=()=>{
    const {Username} =this.state;
    const {history}=this.props;
    const {password} = this.state;
     // Username =="GWL" && password == "123" ?this.props.history.push('/Menu'): window.alert("Authentication Error");
     if(Username=="GWL" && password=="123"){
         history.push('/Menu');
     }
     else{
       alert("Authentication Failed !Try Again")
     }
  };

  render(){
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
      <Grid container style = {{marginTop: 100}}>
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



</React.Fragment>

    );
  }
}
export default Login;
