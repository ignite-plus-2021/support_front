// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import Button from "@material-ui/core/Button";

// const useRowStyles = makeStyles({
//   root: {
//     "& > *": {
//       borderBottom: "unset",
//     },
//   },
// });

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [""],
//   };
// }

// // function createData(
// //   Number,
// //   Name,
// //   State,
// //   AssignedTo,
// //   Location,
// //   ImpactedService,
// //   ShortDescription,
// //   DateCreated
// // ) {
// //   return {
// //     Number,
// //     Name,
// //     State,
// //     AssignedTo,
// //     Location,
// //     ImpactedService,
// //     ShortDescription,
// //     DateCreated,
// //   };
// // }

// const useStyles = makeStyles({
//   table: {
//     width: "1200px",
//     height: "300px",
//     marginTop: "75px",
//     marginLeft: "170px",
//     borderWidth: 10,
//     borderColor: "blue",
//     borderStyle: "groove",
//   },

//   rows: {
//     borderWidth: 10,
//     borderColor: "blue",
//   },
// });

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();

//   return (
//     <React.Fragment>
//       <TableRow className={classes.root}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           <h3> {row.name}</h3>
//         </TableCell>
//         <TableCell>
//           <h3>{row.calories}</h3>
//         </TableCell>
//         <TableCell>
//           <h3>{row.fat}</h3>
//         </TableCell>
//         <TableCell>
//           <h3>{row.carbs}</h3>
//         </TableCell>
//         {/* <TableCell align="right">{row.protein}</TableCell> */}
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               {/* <Typography variant="h6" gutterBottom component="div"> */}
//               {/* <h2>SERVICE</h2> */}
//               {/* </Typography> */}
//               <Table aria-label="purchases">
//                 {/* <Table size="small" aria-label="purchases"> */}
//                 <TableHead>
//                   <TableRow className={classes.root}>
//                     <TableCell>
//                       <h2>Impacted Service</h2>
//                     </TableCell>
//                     <TableCell>
//                       <h2>Location</h2>
//                     </TableCell>
//                     <TableCell>
//                       <h2>Short Description</h2>
//                     </TableCell>
//                     <TableCell>
//                       <h2>Status</h2>
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     // <TableRow key={historyRow.date}>
//                     //   <TableCell component="th" scope="row">
//                     //     {historyRow.date}
//                     //   </TableCell>
//                     //   <TableCell>{historyRow.customerId}</TableCell>
//                     //   <TableCell align="right">{historyRow.amount}</TableCell>

//                     <TableRow>
//                       <TableCell component="th" scope="row">
//                         <h3>REST ROOM</h3>
//                       </TableCell>
//                       <TableCell>
//                         <h3>GWS First Floor</h3>
//                       </TableCell>
//                       <TableCell>
//                         <h3>Tap Not Working</h3>
//                       </TableCell>
//                       <TableCell>
//                         <Button
//                           variant="contained"
//                           color="primary"
//                           size="large"
//                           className={classes.button}
//                         >
//                           Active
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// function TablePaginationActions(props) {
//   const classes = useStyles1();
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <div className={classes.root}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </div>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// export default function CustomPaginationActionsTable() {
//   const classes = useStyles2();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

// const rows = [
//   createData("REQ0456", "Jack", "Facilities Team", "05-06-2021"),
//   createData("REQ0456", "Jack", "Facilities Team", "05-06-2021"),
//   createData("REQ0456", "Jack", "Facilities Team", "05-06-2021"),
//   createData("REQ0456", "Jack", "Facilities Team", "05-06-2021"),
//   createData("REQ0456", "Jack", "Facilities Team", "05-06-2021"),
// ];

// // {
// //   requestId: "REQ0456",
// //   user: { userName: "Jack" },
// //   state: "ACTIVE",
// //   description: "Tap not working",
// //   location: " GWS First Floor",
// //   impactedService: "Rest Room",
// //   service: { supportTeam: "Facilities Team" },
// //   DateCreated: "05-06-2021",
// // }

// export default function CollapsibleTable() {
//   const classes = useStyles();
//   return (
//     // <TableContainer component={Paper}>
//     <TableContainer>
//       <Table aria-label="collapsible table" className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>
//               <h2>REQUEST ID</h2>
//             </TableCell>
//             <TableCell>
//               <h2>NAME</h2>
//             </TableCell>
//             <TableCell>
//               <h2>ASSIGNED TO</h2>
//             </TableCell>
//             <TableCell>
//               <h2>DATE CREATED</h2>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>

//     </TableContainer>
//   );
// }
