import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "Number", label: "Request ID" },
  { id: "Name", label: "Name" },
  { id: "AssignedTo", label: "Assigned To" },
  { id: "Location", label: "Location" },
  { id: "ImpactedService", label: "ImpactedService" },
  { id: "ShortDescription", label: "Short Description" },
  { id: "DateCreated", label: "Date Created" },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

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

const rows = [
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
  createData(
    "REQ456",
    "JACK",
    "Facilities Team",
    "GWS First Floor",
    "REST ROOM",
    "TAP NOT WORKING",
    "09-05-2021"
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  container: {
    marginTop: 100,
    maxHeight: 500,
    maxWidth: 1600,
    marginLeft: 65,
    marginRight: 55,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "groove",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    // <Paper className={classes.root}>
    <>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <h2>{column.label}</h2>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
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
