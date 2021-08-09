import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory as UseHistory } from "react-router-dom";
import { TableLayout } from "../layout/TableLayout";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const UseStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(75),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 7px 7px grey",
    width: "230px",
    height: "140px",
  },
}));

export const MyRequests = () => {
  const loggedInUserName = useSelector(
    (state) => state.common.loggedInUserName
  );
  console.log(loggedInUserName);
  const classes = UseStyles();
  let history = UseHistory();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            My Requests
          </Button>
        </Grid>

        {
          <Grid item xs={12}>
            <TableLayout />
          </Grid>
        }
      </Grid>
    </div>
  );
};

export default MyRequests;
