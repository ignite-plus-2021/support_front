import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  Number,
  Name,
  State,
  AssignedTo,
  Location,
  ImpactedService,
  ShortDescription,
  DateCreated
) {
  return {
    Number,
    Name,
    State,
    AssignedTo,
    Location,
    ImpactedService,
    ShortDescription,
    DateCreated,
  };
}

const useStyles = makeStyles({
  table: {
    width: "1500px",
    height: "300px",
    marginTop: "75px",
    marginLeft: "160px",
  },
});

export const TableLayout = ({ rows }) => {
  const classes = useStyles();
  return (
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow align="center">
          <StyledTableCell align="right">
            <span className={classes.headings}>
              <h2>Number</h2>
            </span>
          </StyledTableCell>
          <StyledTableCell align="right">
            <h2>Name</h2>
          </StyledTableCell>
          <StyledTableCell align="right">
            <h2>State</h2>
          </StyledTableCell>
          <StyledTableCell align="right">
            <h2>Assigned to</h2>
          </StyledTableCell>
          <StyledTableCell align="right">
            <h2>Location</h2>
          </StyledTableCell>
          <StyledTableCell align="right">
            <h2>Impacted Service</h2>
          </StyledTableCell>
          <StyledTableCell align="right">
            <h2>Short Description</h2>
          </StyledTableCell>
          <StyledTableCell align="right">
            <h2>Date Created</h2>
          </StyledTableCell>
          <StyledTableCell></StyledTableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell align="right">
              <h3>{row.requestId}</h3>
            </StyledTableCell>
            <StyledTableCell align="right">
              <h3>{row.user.userName}</h3>
            </StyledTableCell>
            <StyledTableCell align="right">
              <h3>{row.state}</h3>
            </StyledTableCell>

            <StyledTableCell align="right">
              <h3>{row.service.supportTeam}</h3>
            </StyledTableCell>
            <StyledTableCell align="right">
              <h3>{row.location}</h3>
            </StyledTableCell>
            <StyledTableCell align="right">
              <h3>{row.impactedService}</h3>
            </StyledTableCell>
            <StyledTableCell align="right">
              <h3>{row.description}</h3>
            </StyledTableCell>
            <StyledTableCell align="right">
              <h3>{row.DateCreated}</h3>
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableLayout;
