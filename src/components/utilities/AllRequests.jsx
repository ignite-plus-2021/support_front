import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory as UseHistory } from "react-router-dom";

import DataTable from "../layout/DataTable";
import Typography from "@material-ui/core/Typography";

const UseStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    maxHeight: 900,
    maxWidth: 2800,
    marginLeft: 35,
    marginRight: 55,
  },

  root: {
    flexGrow: 1,
  },

  table: {
    marginTop: 70,
    maxHeight: 1000,
    maxWidth: 2300,
    marginLeft: 35,
    marginRight: 55,
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
      State: "Active",
      description: "Tap not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "05-06-2021",
    },
    {
      requestId: "REQ0556",
      user: { userName: "Lilly" },
      State: "Active",
      description: "Tap not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "10-08-2021",
    },
    {
      requestId: "REQ9956",
      user: { userName: "James" },
      State: "Completed",
      description: "Fan not working",
      location: " GWS First Floor",
      impactedService: "Rest Room",
      service: { supportTeam: "Facilities Team" },
      DateCreated: "11-08-2021",
    },
  ];

  return (
    // <div className={classes.root}>
    <>
      <div className={classes.container}>
        <Typography variant="h4" noWrap>
          REQUESTS
        </Typography>
      </div>
      <div className={classes.table}>
        {/* when u dont have backend  up and running use dummy data  */}

        <DataTable />

        {/* else use this data from backend */}
      </div>
      {/* </div> */}
    </>
  );
};

export default AllRequests;
