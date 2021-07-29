import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import SaveIcon from '@material-ui/icons/Save';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AirplayIcon from '@material-ui/icons/Airplay';
import { useHistory  as UseHistory} from "react-router-dom";



const UseStyles = makeStyles((theme) => ({
 

button:{
margin:theme.spacing(3),
marginTop:theme.spacing(30),
marginLeft:theme.spacing(10),
borderRadius: theme.shape.borderRadius,
boxShadow: " 7px 7px grey",
width:"230px",
height:"140px",

},

 
}));




  
 export const homePage = () => {

    const classes = UseStyles();
    let history = UseHistory();




  return (
    <div className={classes.root}>
        
        
      <Grid container spacing={3}>
                
            
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                onClick={()=>{
                    history.push("/login");
                }}
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
                onClick={()=>{
                    history.push("/");
                }}
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
                onClick={()=>{
                    history.push("/");
                }}
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
                onClick={()=>{
                    history.push("/");
                }}
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
