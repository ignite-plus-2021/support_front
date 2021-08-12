import React, { useState,useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Select from "@material-ui/core/Select";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuItem from "@material-ui/core/MenuItem";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(70),
    height: theme.spacing(70),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "1px 1px 4px 4px #115293",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainContent: {
    padding: "2%",
    alignItems: "center",
  },
}));




//GET all the users from the db


export const GetUsers = () => {
 
    const [locations, setLocations] = useState([]);
    const [services, setServices] = useState([]);


     const classes = useStyles();

  
  // const fetchLocations = () => {
   
  //   axios
  //     .get("http://localhost:8080/locations")
  //      .then((response) => {
  //         setLocations(response.data);

  //          console.log(response);

  //       if (response.status === 200) {
  //         alert("Values fetched sucessfully");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });

         
  // };



  // const fetchServices = () => {
   
  //   axios
  //     .get("http://localhost:8080/services")
  //      .then((response) => {
  //         setServices(response.data);

  //          console.log(response);

  //       if (response.status === 200) {
  //         alert("Values fetched sucessfully");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });

         
  // };


  useEffect(() => {
     fetch('http://localhost:8080/services',
     {
       method:'Get',
       headers:{
         'Content-Type':'application/json',
       }
     })
     .then(resp=>resp.json())
     .then(resp=>setServices(resp))

     
    },[])




    useEffect(() => {
      fetch('http://localhost:8080/locations',
      {
        method:'Get',
        headers:{
          'Content-Type':'application/json',
        }
      })
      .then(resp=>resp.json())
      .then(resp=>setLocations(resp))
     },[])
     


  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
         
             
          
            { /*<button onClick={fetchLocations}>Locations</button> */}
             <div>
              
              
               <Select
                      labelId="impacted_service-label"
                      id="impacted_service"
                      value={locations}
                      
                      label="Impacted Service"
                      fullWidth
                    >
                      {
                      locations.map(location=> ( 
                      <MenuItem >{location.buildingName} {location.floor}</MenuItem>
                       ))
                       }
                     
               </Select>


               {/* { <button onClick={fetchServices}>Services</button> } */}
               { <Select
                      labelId="impacted_service-label"
                      id="impacted_service"
                      value={services}
                      
                      label="Impacted Service"
                      fullWidth
                    >
                      {
                       services.map(service=> ( 
                      <MenuItem >{ service.impactedService}</MenuItem>
                       ))
                       }
                     
               </Select> }
            </div>




        </div>
      </Container>
    </div>
  );
};

export default GetUsers;
