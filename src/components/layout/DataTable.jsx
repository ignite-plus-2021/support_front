import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import MaterialTable from "material-table";
import { createTheme } from "@material-ui/core/styles";
import axios from "axios";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Checkbox from "@material-ui/core/Checkbox";

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
    ShortDescription: "FAN NOT WORKING",
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
    maxHeight: 1000,
    maxWidth: 2800,

    borderWidth: 3,
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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#115293",
      },
      secondary: {
        main: "#115293",
      },
    },
  });

  return (
    <div className={classes.Table}>
      <TableContainer className={classes.container}>
        <Checkbox
          className="checkbox"
          checked={filter}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <label>Filters</label>
        {/* <div className={classes.checkbox}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={closeRequest}
          ></Button> */}
        {/* </div> */}
        <MuiThemeProvider theme={theme}>
          <MaterialTable
            style={{ padding: "0 25px" }}
            columns={[
              {
                title: "Number",
                field: "Number",
                filtering: false,
              },
              { title: "Name", field: "Name", filtering: false },
              { title: "Assigned To", field: "AssignedTo" },
              { title: "Location", field: "Location" },
              { title: "Impacted Service", field: "ImpactedService" },
              {
                title: "Short Description",
                field: "ShortDescription",
              },
              { title: "Date Created", field: "DateCreated" },
              { title: "State", field: "State" },
            ]}
            data={rows}
            onSelectionChange={(rows) => setSelectedRows(rows)}
            options={{
              filtering: filter,
              selection: true,
              showTitle: false,
              headerStyle: {
                backgroundColor: "#01579b",
                color: "#FFF",
                fontFamily: "sans-serif",
                fontSize: "20px",
              },

              rowStyle: {
                backgroundColor: "#EEE",
                fontSize: "20px",
              },
            }}
            actions={[
              {
                icon: "delete",
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
        </MuiThemeProvider>
      </TableContainer>
    </div>
  );
}
