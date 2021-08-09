import React ,{ useState ,useEffect} from "react";
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




  // const [requests, setrequests] = useState("");
  // const fetchAllRequests = () => {
   
  //   axios
  //     .get("http://localhost:8080/myrequests")
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
    fetch('http://localhost:8080/myrequests',
    {
      method:'Get',
      headers:{
        'Content-Type':'application/json',
      }
    })
    .then(resp=>resp.json())
    .then(resp=>setRequests(resp))

    
   },[])


   function createData(Number, Name, State,AssignedTo,ShortDescription, DateCreated) {
    return { Number, Name, State,AssignedTo, ShortDescription, DateCreated };
  }

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
        "Name":"Jack",
        "State": "ACTIVE",  
        "ShortDescription":"fan not working",
        "AssignedTo":"Facilities Team",
        "DateCreated":"08-06-2021"
         }
  
  ];
   

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

        <Grid item xs={12}>
          <TableLayout rows={rows} />
        </Grid> 
      </Grid>
    </div>
  );
};


export default MyRequests;
