import React from 'react';
import './index.css';
import { Grid, Paper, Table, TableRow, TableCell,TableHead, Icon } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddAndDisplay = () => (
<Grid container>
<Grid item md ={12} className = "icon">
<AddCircleIcon button style = {{fontSize : 40, color : "gray"}} />
</Grid>
<Grid item md ={10} >
<Paper >
<Table>
<TableHead>
<TableRow>
<TableCell>Sr. No.</TableCell>
<TableCell>Name</TableCell>
<TableCell>Phone</TableCell>
<TableCell>Email</TableCell>
<TableCell>Role Type</TableCell>
</TableRow>

<TableRow>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
</TableRow>
</TableHead>
</Table>
</Paper>
</Grid>
</Grid>

);
export default AddAndDisplay;
