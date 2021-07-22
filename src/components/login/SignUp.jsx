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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(70),
    height: theme.spacing(95),
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
    padding: "2%",
    alignItems: "center",
  },
}));

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const classes = useStyles();

  //Method to call endpoint and register
  const RegisterUser = () => {
    // axios
    //   .post("https://localhost:8080/api/register")
    axios({
      method: "post",
      url: "https://localhost:8080/api/register",
      data: {
        firstName: firstName,
        lastName: lastName,
        password: password,
        emailId: emailAddress,
        phoneNo: contact,
        role: designation,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("User Registered");
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    // console.log(firstName);
                  }}
                  value={firstName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  value={lastName}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="contact"
                  label="Contact"
                  name="contact"
                  autoComplete="contact"
                  onChange={(event) => {
                    setContact(event.target.value);
                  }}
                  value={contact}
                />
              </Grid>

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
                    if (event.target.value === "") {
                      setErrorMsg(false);
                      setConfirmPassword("");
                    }
                  }}
                  value={password}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  error={errorMsg}
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm-Password"
                  type="password"
                  id="confirm-password"
                  helperText={errorMsg ? "Password Not Matching" : ""}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    if (password !== null) {
                      if (password !== event.target.value) {
                        setErrorMsg(true);
                      } else {
                        setErrorMsg(false);
                      }
                    }
                  }}
                  value={confirmPassword}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Designation</FormLabel>
                  <RadioGroup
                    defaultValue="none"
                    aria-label="designation"
                    name="customized-radios"
                    onChange={(event) => {
                      setDesignation(event.target.value);
                    }}
                    value={designation}
                  >
                    <FormControlLabel
                      value="employee"
                      control={<Radio color="primary" />}
                      label="Employee"
                    />
                    <FormControlLabel
                      value="admin"
                      control={<Radio color="primary" />}
                      label="Admin"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={RegisterUser}
              disabled={
                firstName === "" ||
                lastName === "" ||
                contact === "" ||
                emailAddress === "" ||
                password === "" ||
                confirmPassword === "" ||
                designation === ""
              }
            >
              Sign Up
            </Button>
            {/* 
            <Button variant="contained" color="primary">
              Primary
            </Button> */}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
