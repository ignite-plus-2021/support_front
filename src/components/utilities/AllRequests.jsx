import React,{useState,useEffect} from "react";
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
    marginLeft: theme.spacing(30),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 7px 7px grey",
    width: "200px",
    height: "100px",
    display: "inline-block",
  },

  root: {
    flexGrow: 1,
  },
}));














export const AllRequests = () => {
  const classes = UseStyles();
  let history = UseHistory();

  //const [requests, setrequests] = useState("");
  // const fetchAllRequests = () => {
   
  //   axios
  //     .get("http://localhost:8080/allrequests")
  //      .then((response) => {
        
  //       setrequests(response.data);
  //       ///Print all the requests  to console
  //       console.log(response);


  //       if (response.status === 200) {
  //         alert("Values fetched sucessfully");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });

        
         
  // };



  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/allrequests',
    {
      method:'Get',
      headers:{
        'Content-Type':'application/json',
      }
    })
    .then(resp=>resp.json())
    .then(resp=>setRequests(resp))

    
   },[])









  const rows =[
    {
   "Number":"REQ0456",
   "Name":"Jack",
   "State": "ACTIVE",
   "ShortDescription":"Tap not working",
   "AssignedTo":"Facilities Team",
   "DateCreated":"05-06-2021"

    
    },
    {
      "Number":"REQ0486",
      "Name":"Lilly",
      "State": "ACTIVE",  
      "ShortDescription":"fan not working",
      "AssignedTo":"Facilities Team",
      "DateCreated":"08-06-2021"
       }

];







  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            Assigned
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            Unassigned
          </Button>
        </Grid>

        {/* <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            All Requests
          </Button>
        </Grid> */}

        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              history.push("#");
            }}
          >
            Trends
          </Button>
        </Grid>
      </Grid>
        <TableLayout rows={rows}/> 
     
      
    </div>
  );
};

export default AllRequests;
