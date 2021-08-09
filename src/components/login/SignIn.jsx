import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Support Hub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(55),
    height: theme.spacing(60),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "1px 1px 7px 7px #115293",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
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
    padding: "1%",
  },

  endContent: {
    marginTop: theme.spacing(5),
  },
}));

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const UserLogin = () => {
    const jsonBody = {
      userName: userName,
      password: password,
    };
    console.log(jsonBody);
    dispatch({
      type: "SET_USERNAME",
      data: userName,
    });

    axios
      .post("http://localhost:8080/api/login", jsonBody)

      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: "SET_USERNAME",
            data: userName,
          });
          alert("Logged in sucessfully");
        }
      })
      .catch((error) => {
        console.log("Invalid Email or Password");
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign In
            </Typography>

            <form className={classes.form} noValidate>
              <Grid container spacing={3} align-items="center">
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    autoFocus
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                    value={userName}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    value={password}
                  />
                </Grid>

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={UserLogin}
                  disabled={userName === "" || password === ""}
                >
                  Sign In
                </Button>
              </Grid>

              <Grid
                container
                justifyContent="space-evenly"
                className={classes.endContent}
              >
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="#" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>

          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );
}
