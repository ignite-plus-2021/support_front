import React ,{ useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory as UseHistory } from "react-router-dom";
 import {TableLayout} from "../layout/TableLayout";
import Grid from "@material-ui/core/Grid";
import axios from "axios";


const UseStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(75),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 7px 7px grey",
    width: "230px",
    height: "140px",
  },
}));

export const MyRequests = () => {
  const classes = UseStyles();
  let history = UseHistory();




  const [requests, setrequests] = useState("");
  const fetchAllRequests = () => {
   
    axios
      .get("http://localhost:8080/myrequests")
       .then((response) => {
        
        setrequests(response.data);
        ///Print all the requests  to console
        console.log(response);


        if (response.status === 200) {
          alert("Values fetched sucessfully");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

        
         
  };






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
            My Requests
          </Button>
        </Grid>

        { <Grid item xs={12}>
          <TableLayout />
        </Grid> }
      </Grid>
    </div>
  );
};

export default MyRequests;
