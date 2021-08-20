import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory as UseHistory } from "react-router-dom";
import { TableLayout } from "../layout/TableLayout";
import Grid from "@material-ui/core/Grid";

const UseStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(85),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 7px 7px grey",
    width: "300px",
    height: "150px",
    display: "inline-block",
  },

  root: {
    flexGrow: 1,
  },
}));

export const AllRequests = () => {
  const classes = UseStyles();
  let history = UseHistory();

  //Getting all requests from backend
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/requests/allrequests", {
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
      state: "ACTIVE",
      description: "Tap not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "05-06-2021",
    },
    {
      requestId: "REQ0556",
      user: { userName: "Lilly" },
      state: "ACTIVE",
      description: "Tap not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "10-08-2021",
    },
    {
      requestId: "REQ9956",
      user: { userName: "James" },
      state: "ACTIVE",
      description: "Fan not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "11-08-2021",
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container>
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
            <h3>Trends</h3>
          </Button>
        </Grid>
      </Grid>
      <TableLayout rows={rows} /> {/*send requests as props*/}
    </div>
  );
};

export default AllRequests;
