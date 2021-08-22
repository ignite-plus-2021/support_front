import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory as UseHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import StickyHeadTable from "../layout/newtable2";

const UseStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 7px 7px grey",
    width: "300px",
    height: "130px",
  },
}));

export const MyRequests = () => {
  const classes = UseStyles();
  let history = UseHistory();

  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/requests/myrequests", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setRequests(resp));
  }, []);

  //Temporary data
  const rows = [
    {
      requestId: "REQ0456",
      user: { userName: "Jack" },
      State: "Completed",
      description: "Tap not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "05-06-2021",
    },
    {
      requestId: "REQ0556",
      user: { userName: "Jack" },
      State: "Active",
      description: "Tap not working",
      location: "GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "10-08-2021",
    },
    {
      requestId: "REQ9956",
      user: { userName: "Jack" },
      State: "Active",
      description: "Fan not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "11-08-2021",
    },
  ];

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
            <h3> My Requests</h3>
          </Button>
        </Grid>
        <Grid item xs={12}>
          {/* when u dont have backend  up and running use dummy data  */}
          <StickyHeadTable rows={rows} />

          {/* else use this data from backend */}
          {/* <StickyHeadTable rows={requests} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default MyRequests;
