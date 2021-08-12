import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';


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

function createData(Number, Name, State,AssignedTo,ShortDescription, DateCreated) {
  return { Number, Name, State,AssignedTo, ShortDescription, DateCreated };
}






const useStyles = makeStyles({
  table: {
    width: "900px",
    marginTop: "75px",
    marginLeft: "270px",
  },
});

export const TableLayout = ({rows }) => {
  const classes = useStyles();

  return (


    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow align="center">
          <StyledTableCell align="right">
            <span className={classes.headings}>Number</span>
          </StyledTableCell>
          <StyledTableCell align="right">Name</StyledTableCell>
          <StyledTableCell align="right">State</StyledTableCell>
          <StyledTableCell align="right">Short Description</StyledTableCell>
          <StyledTableCell align="right">Assigned to</StyledTableCell>
          {/* <StyledTableCell align="right">Date Created</StyledTableCell> */}
        </TableRow>
      </TableHead>



        <TableBody>
        {
          rows.map((row) => (
          <StyledTableRow key={row.name}>
        
            <StyledTableCell align="right">{row.requestId}</StyledTableCell>
             <StyledTableCell align="right">{row.user.userName}</StyledTableCell> 
             <StyledTableCell align="right">{row.state}</StyledTableCell> 
              <StyledTableCell align="right">{row.description}</StyledTableCell>
             <StyledTableCell align="right">{row.service.supportTeam}</StyledTableCell>
             {/* <StyledTableCell align="right">{row.DateCreated}</StyledTableCell>   */}
            
          </StyledTableRow>
        ))
   }
      </TableBody>  



    </Table>
    </TableContainer>



  );
};

export default TableLayout;
