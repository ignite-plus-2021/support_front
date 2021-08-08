import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { useHistory as UseHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(70),
    height: theme.spacing(55),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "1px 1px 4px 4px #115293",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainContent: {
    padding: "2%",
    alignItems: "center",
  },
}));

export const ForgotPassword = () => {
 
  const [emailAddress, setEmailAddress] = useState("");
 
  const classes = useStyles();
  let history = UseHistory();

  
  const ForgotPassword = () => {
    const jsonBody = {
      
      emailId: emailAddress,
     
    };
    axios
      .post("http://localhost:8080/forgotpassword", jsonBody)

      .then((response) => {
        if (response.status === 200) {
          alert("Sucessfully sent OTP");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };



  
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           ForgotPassword
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
             
             
         {/* <Grid item xs={12} sm={6}> */}
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setEmailAddress(event.target.value);
                  }}
                  value={emailAddress}
                />
              </Grid>

             

          
               {/* </Grid> */}

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                history.push("/verifyotp");
              }}


              
              disabled={
              
                emailAddress === "" 
              
              }
            >
             Send OTP
            </Button>
            {/* 
            <Button variant="contained" color="primary">
              Primary
            </Button> */}

           </Grid>
         
          </form>
          </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
