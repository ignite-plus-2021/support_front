import React from "react";
import { useHistory as UseHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AirplayIcon from "@material-ui/icons/Airplay";

const UseStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(30),
    marginLeft: theme.spacing(10),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 7px 7px grey",
    width: "230px",
    height: "140px",
  },
}));

export const HomePage = () => {
  const classes = UseStyles();
  let history = UseHistory();

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            // return <Redirect to="/login"/>
            history.push("/requestform");
          }}
        >
          <div className={classes.buttonlabel}>
            <p>Accessing from Mobile?</p>
            <p>Scan to Request</p>
          </div>
          {<AddAPhotoIcon />}
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            history.push("/requestform");
          }}
        >
          <div className={classes.buttonlabel}>
            <p>Accessing from Desktop?</p>
            <p>New Request</p>
          </div>
          {<AirplayIcon />}
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            history.push("/myrequests");
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
          onClick={() => {
            history.push("/allrequests");
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

export default HomePage;
