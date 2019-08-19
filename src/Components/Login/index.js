import React from 'react';
import './index.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


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
    const {password} = this.state;
     Username =="GWL" && password == "123" ? window.alert("Login Successful") : window.alert("Authentication Error");
  };

  render(){
    return(

     <Grid container >
                      <Grid container>
                              <Grid item sm={1}>
                              <img  class ="login_img"src ="Assets/Images/login1.png"></img>
                              </Grid>

                              <Grid item md={5}>
                             <h2 class ="login_header"> GoodWorks Colloquio </h2>
                              </Grid>

                              <Grid item md={4}>
                              </Grid>

                              <Grid item md={2}>
                              <Button> Help </Button>
                                <Button > About Us </Button>
                              </Grid>
                      </Grid>


                      <Grid container >
                           <Paper class = "p" >

                                   LOGIN
                                <Grid container>
                                <TextField
                                id="standard-required test"
                                label="Username"
                                defaultValue=""
                                margin="normal"
                                onChange = {this.handleChangename}
                                />
                                </Grid>

                                 <Grid container>
                                <TextField
                              id="standard-password-input"
                              label="Password"
                              type="password"
                              autoComplete="current-password"
                              margin="normal"
                              onChange = {this.handleChangepassword}
                              />
                              </Grid>


                              <Grid container>
                              <Button onClick = {this.onClickValidate}>
                              Submit
                             </Button>
                            </Grid>



                           </Paper>
                      </Grid>
     </Grid>


    );
  }
}
export default Login;
