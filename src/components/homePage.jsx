import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import axios from "axios";
import SaveIcon from '@material-ui/icons/Save';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AirplayIcon from '@material-ui/icons/Airplay';



const UseStyles = makeStyles((theme) => ({
 
root:{
   
},


button:{
margin:theme.spacing(3),
marginTop:theme.spacing(30),
marginLeft:theme.spacing(10),
borderRadius: theme.shape.borderRadius,
boxShadow: " 7px 7px grey",
width:"230px",
height:"140px",

},

p:{
fontStyle:"bold",
}

 
}));



  
 export const homePage = () => {

    const classes = UseStyles();

  return (
    <div className={classes.root}>
        
        
      <Grid container spacing={3}>
                
            
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
               
            >
                <div className={classes.buttonlabel}>
                    <p>Accessing from Mobile?</p>
                    <p>Scan to  Request</p>
                </div>
                {<AddAPhotoIcon/>}
            </Button>
           


            
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                
            >
                <div className={classes.buttonlabel}>
                    <p>Accessing from Desktop?</p>
                    <p>New Request</p>
                </div>
                {<AirplayIcon/>}
            </Button>

            
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
            >
                <div className={classes.buttonlabel}>
                    <p> My Requests</p>
                </div>
            </Button>


            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
            >
                <div className={classes.buttonlabel}>
                    <p>Admin Dashboard</p>
                </div>
            </Button>
                    
        
         </Grid>
    
    </div>
    
  );
};

export default homePage;
