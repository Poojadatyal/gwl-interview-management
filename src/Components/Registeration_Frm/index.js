import React from 'react';
import './index.css';


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
class Registeration_Frm extends React.Component{
  render(){
    return(

   <Grid container >
        <Paper>

                REGISTERATION
             <Grid container>
             <TextField   id="standard-required test"     label="NAME"     defaultValue=""   margin="normal"   />
             </Grid>

             <Grid container>
             <TextField   id="standard-required test"     label="MAIL"     defaultValue=""   margin="normal"   />
             </Grid>

             <Grid container>
             <TextField   id="standard-required test"     label="MOBILE"     defaultValue=""   margin="normal"   />
             </Grid>

              <Grid container>
             <TextField   id="standard-password-input"   label="Password" type="password" autoComplete="current-password" margin="normal"  />
             </Grid>

             <Grid container>
            <Button variant="contained" color="primary" >
               SUBMIT
          </Button>
         </Grid>



        </Paper>
   </Grid>
    );

  }
}export default Registeration_Frm;
