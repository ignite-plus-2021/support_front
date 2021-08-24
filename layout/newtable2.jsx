import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// const columns = [
//   { id: "Number", label: "Request ID" },
//   { id: "Name", label: "Name" },
//   { id: "AssignedTo", label: "Assigned To" },
//   { id: "Location", label: "Location" },
//   { id: "ImpactedService", label: "Impacted Service" },
//   { id: "ShortDescription", label: "Short Description" },
//   { id: "DateCreated", label: "Date Created" },
//   { id: "State", label: "State" },
// ];

function createData(
  Number,
  Name,
  AssignedTo,
  Location,
  ImpactedService,
  ShortDescription,
  DateCreated,
  State
) {
  return {
    Number,
    Name,
    AssignedTo,
    Location,
    ImpactedService,
    ShortDescription,
    DateCreated,
    State,
  };
}

// const rows = [
//   {
//     Number: "REQ456",
//     Name: "JACK",

//     AssignedTo: "Facilities Team",
//     Location: "GWS First Floor",
//     ImpactedService: "REST ROOM",
//     ShortDescription: "TAP NOT WORKING",
//     DateCreated: "09-05-2021",
//     State: "Active",
//   },
//   {
//     Number: "REQ456",
//     Name: "JACK",
//     AssignedTo: "Facilities Team",
//     Location: "GWS First Floor",
//     ImpactedService: "REST ROOM",
//     ShortDescription: "TAP NOT WORKING",
//     DateCreated: "09-05-2021",
//     State: "Active",
//   },
//   {
//     Number: "REQ456",
//     Name: "JACK",
//     AssignedTo: "Facilities Team",
//     Location: "GWS First Floor",
//     ImpactedService: "REST ROOM",
//     ShortDescription: "TAP NOT WORKING",
//     DateCreated: "09-05-2021",
//     State: "Active",
//   },
//   {
//     Number: "REQ456",
//     Name: "JACK",
//     AssignedTo: "Facilities Team",
//     Location: "GWS First Floor",
//     ImpactedService: "REST ROOM",
//     ShortDescription: "TAP NOT WORKING",
//     DateCreated: "09-05-2021",
//     State: "Completed",
//   },
//   {
//     Number: "REQ456",
//     Name: "JACK",
//     AssignedTo: "Facilities Team",
//     Location: "GWS First Floor",
//     ImpactedService: "REST ROOM",
//     ShortDescription: "TAP NOT WORKING",
//     DateCreated: "09-05-2021",
//     State: "Completed",
//   },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  container: {
    marginTop: 30,
    maxHeight: 500,
    maxWidth: 1600,
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
}));

export default function StickyHeadTable({ rows }) {
  console.log(rows);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [reqstate, setReqState] = React.useState("AllRequests");
  const [filter, setFilter] = React.useState(true);
  const [filteredData, setFilteredData] = useState(rows);

  const handleChange = (event) => {
    setReqState(event.target.value);
    setFilter(!filter);
  };

  useEffect(() => {
    setFilteredData(
      reqstate === "AllRequests"
        ? rows
        : rows.filter((requestState) => requestState.State === reqstate)
    );
    console.log(reqstate);
  }, [reqstate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let myPaddingStyle = {
    paddingTop: 25,
    paddingBottom: 35,
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter Requests</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={reqstate}
          onChange={handleChange}
          Style={{ width: 150 }}
        >
          <MenuItem value={"AllRequests"}>All Requests</MenuItem>
          <MenuItem value={"Active"}>Active Requests</MenuItem>
          <MenuItem value={"Completed"}>Completed Requests</MenuItem>
        </Select>
      </FormControl>

      {/* const columns = [
  { id: "Number", label: "Request ID" },
  { id: "Name", label: "Name" },
  { id: "AssignedTo", label: "Assigned To" },
  { id: "Location", label: "Location" },
  { id: "ImpactedService", label: "Impacted Service" },
  { id: "ShortDescription", label: "Short Description" },
  { id: "DateCreated", label: "Date Created" },
  { id: "State", label: "State" },
]; */}

      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          {/* <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <h2>{column.label}</h2>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} style={myPaddingStyle}>
                          <h3>{value}</h3>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody> */}
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <h2>Request ID</h2>
              </TableCell>
              <TableCell>
                {" "}
                <h2>Name</h2>
              </TableCell>
              <TableCell>
                <h2>Assigned To</h2>
              </TableCell>
              <TableCell>
                <h2>Location</h2>
              </TableCell>
              <TableCell>
                <h2>Impacted Service</h2>
              </TableCell>
              <TableCell>
                <h2>Short Description</h2>
              </TableCell>
              <TableCell>
                <h2>Date Created</h2>
              </TableCell>
              <TableCell>
                <h2>State</h2>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.map((row) => (
              <TableRow>
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell>
                  <h3>{row.requestId}</h3>
                </TableCell>
                <TableCell>
                  <h3>{row.user.userName}</h3>
                </TableCell>
                <TableCell>
                  {" "}
                  <h3>{row.service.supportTeam}</h3>
                </TableCell>
                <TableCell>
                  <h3>{row.location}</h3>
                </TableCell>
                <TableCell>
                  <h3>{row.impactedService}</h3>
                </TableCell>
                <TableCell>
                  <h3>{row.description}</h3>
                </TableCell>
                <TableCell>
                  <h3>{row.DateCreated}</h3>
                </TableCell>
                <TableCell>
                  <h3>{row.State}</h3>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
