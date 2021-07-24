import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.spacing(70),
    height: theme.spacing(95),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '1px 1px 4px 4px #115293',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', 
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
    alignItems: 'center',
  }  
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Support Hub
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
       <div className={classes.mainContent} >
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
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userid"
                label="User ID"
                name="userid"
                autoComplete="userid"
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
              />
            </Grid>


              <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             </Grid>


             <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm-Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
              />
            </Grid>
           
            


            <Grid item xs={12}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Designation</FormLabel>
            <RadioGroup defaultValue="none" aria-label="designation" name="customized-radios">
            <FormControlLabel value="employee" control={<Radio color="primary" />} label="Employee" />
            <FormControlLabel value="admin" control={<Radio color="primary"/>} label="Admin" />
            </RadioGroup>
            </FormControl>
            </Grid>
            </Grid>

         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          Sign Up
          </Button>
        

         

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account?   Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  </div>
  );
}
