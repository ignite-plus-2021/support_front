import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import MaterialTable from "material-table";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";

const rows = [
  {
    Number: 556,
    Name: "Maahi",
    AssignedTo: "Facilities Team",
    Location: "GWS First Floor",
    ImpactedService: "REST ROOM",
    ShortDescription: "TAP NOT WORKING",
    DateCreated: "09-05-2021",
    State: "Active",
  },
  {
    Number: 458,
    Name: "JACK",
    AssignedTo: "Facilities Team",
    Location: "GWS First Floor",
    ImpactedService: "REST ROOM",
    ShortDescription: "TAP NOT WORKING",
    DateCreated: "09-05-2021",
    State: "Active",
  },
  {
    Number: 956,
    Name: "LILLY",
    AssignedTo: "Facilities Team",
    Location: "GWS Second Floor",
    ImpactedService: "CAFETERIA",
    ShortDescription: "FAN NOT WORKING",
    DateCreated: "09-05-2021",
    State: "Active",
  },
  {
    Number: 456,
    Name: "Johhny",
    AssignedTo: "Facilities Team",
    Location: "GWS Second Floor",
    ImpactedService: "MEET ROOM",
    ShortDescription: "FAn NOT WORKING",
    DateCreated: "09-05-2021",
    State: "Completed",
  },
  {
    Number: 456,
    Name: "Johhny",
    AssignedTo: "Facilities Team",
    Location: "GWS Second Floor",
    ImpactedService: "MEET ROOM",
    ShortDescription: "TAP NOT WORKING",
    DateCreated: "09-05-2021",
    State: "Active",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  container: {
    marginTop: 30,
    maxHeight: 900,
    maxWidth: 1800,
    marginLeft: 25,
    marginRight: 55,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "groove",
  },

  formControl: {
    margin: theme.spacing(1),
    marginTop: 10,
    marginLeft: 1365,
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  button: {
    margin: theme.spacing(1),
    // marginTop: theme.spacing(10),
    marginLeft: theme.spacing(165),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 3px 3px grey",
    width: "30px",
    height: "30px",
  },

  Table: {
    marginTop: theme.spacing(35),
  },
}));

export default function DataTable() {
  //console.log(rows);

  const classes = useStyles();
  const [reqstate, setReqState] = React.useState("AllRequests");
  const [filter, setFilter] = React.useState(false);
  const [selectedrows, setSelectedRows] = React.useState([]);
  const [requestids, setrequestids] = React.useState([]);

  const CloseRequests = () => {
    const jsonBody = {};
    axios
      .post("http://localhost:8080/requests/closerequests", jsonBody)

      .then((response) => {
        if (response.status === 200) {
          alert("Sucessfully  Closed  all the requests");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = () => {
    setFilter(!filter);
  };

  let myPaddingStyle = {
    paddingTop: 25,
    paddingBottom: 35,
  };
  const closeRequest = () => {
    alert("requests closed sucessfully");
  };

  return (
    <div className={classes.Table}>
      <TableContainer className={classes.container}>
        {/* <Checkbox
          className="checkbox"
          checked={filter}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <label>Filters</label> */}

        {/* <div className={classes.checkbox}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={closeRequest}
          ></Button>
        </div> */}
        <MaterialTable
          title="REQUESTS"
          columns={[
            { title: "Number", field: "Number", filtering: false },
            { title: "Name", field: "Name", filtering: false },
            { title: "Assigned To", field: "AssignedTo" },
            { title: "Location", field: "Location" },
            { title: "Impacted Service", field: "ImpactedService" },
            {
              title: "Short Description",
              field: "ShortDescription",
            },
            { title: "Date Created", field: "DateCreated", filtering: false },
            { title: "State", field: "State" },
          ]}
          data={rows}
          onSelectionChange={(rows) => setSelectedRows(rows)}
          options={{
            filtering: filter,
            selection: true,
          }}
          actions={[
            {
              icon: "",
              tooltip: "Close All selected Requests",
              onClick: () => {
                console.log(selectedrows);
                alert("Succesfully closed all selected requests");
                // {
                //   closeRequest;
                // }
              },
            },
          ]}
        />
      </TableContainer>
    </div>
  );
}
