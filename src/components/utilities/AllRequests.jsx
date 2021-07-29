import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory as UseHistory } from "react-router-dom";
import {TableLayout} from "../layout/TableLayout";
import Grid from "@material-ui/core/Grid";

const UseStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 7px 7px grey",
    width: "200px",
    height: "100px",
    display: "inline-block",
  },

  root: {
    flexGrow: 1,
  },
}));

export const AllRequests = () => {
  const classes = UseStyles();
  let history = UseHistory();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            Assigned
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            Unassigned
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            All Requests
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            Trends
          </Button>
        </Grid>
      </Grid>

      {<TableLayout /> }
      
    </div>
  );
};

export default AllRequests;
