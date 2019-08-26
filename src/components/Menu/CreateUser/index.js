import React from 'react';
import './index.css';


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {MenuItem,Select,InputLabel,Typography,Card,CardContent} from '@material-ui/core';


const rolename=[
  {
    value:"HR",
    label:"HR"
  },
  {
    value:"Interviewer",
    label:"Interviewer"
  },
  {
    value:"Candidate",
    label:"candidate"
  }
];

const CreateUser = (role,roles,handleRoleChange) =>(
      <Grid container>
             <Grid item md ={12}  classes= {{root:"displaying"}} >
               <Card>
                 <CardContent>
                 <Typography>Registeration</Typography>
                 <Typography  color="textSecondary" gutterBottom>
                 <TextField
                   id="outlined-name"
                   label="Name"
                   margin="normal"
                  variant="outlined"
                />
                   </Typography>

                   <Typography  color="textSecondary" gutterBottom>
                   <TextField
                     id="outlined-name"
                     label="Mobile"
                     margin="normal"
                    variant="outlined"
                  />
                     </Typography>
                     <Typography  color="textSecondary" gutterBottom>
                     <TextField
                       id="outlined-name"
                       label="E Mail"
                       margin="normal"
                      variant="outlined"
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
                             />
                       </Typography>
                <Typography>
                <TextField
            id="outlined-select-currency"
            select
            label="Roles"
            onChange={e => handleRoleChange(e,"role","rolename")}
            value={role.rolename}
            helperText="Please select a role"
            margin="normal"
            variant="outlined"
          >
            {rolename.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
                       </Typography>
                       <Typography>
                <Button color="primary" variant="contained">Create</Button>
                       </Typography>
               </CardContent>
                  </Card>
             </Grid>
     </Grid>
    );
  export default CreateUser;
