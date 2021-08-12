
// import React, { useState,useEffect } from "react";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import axios from "axios";



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(2),
//     backgroundColor: theme.palette.background.paper,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: theme.spacing(70),
//     height: theme.spacing(78),
//     padding: theme.spacing(3),
//     borderRadius: theme.shape.borderRadius,
//     boxShadow: "1px 1px 4px 4px #115293",
//   },

//   form: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//   },

//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },


//   root: {
//     flexGrow: 1,
//   },

//   menuButton: {
//     marginRight: theme.spacing(2),
//   },

//   title: {
//     flexGrow: 1,
//   },

//   formControl: {
//     width: 245,
//   },

//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },

//   mainContent: {
//     padding: "2%",
//     alignItems: "center",
//   },


// }));


// export default function RequestForm() {
//   const classes = useStyles();
//   const [name, setname] = useState("Jack");
//   const [description, setdescription] = useState("");
//    const [requestid, setrequestid] = useState("REQ0073");
//   const [requeststate, setrequeststate] = useState("Active");


   
//    const [impacted_service, setimpacted_service] = React.useState("");
//   const handleChange = (event) => {
//     setimpacted_service(event.target.value);
//   };



  
//    const [request_location, setrequest_location] = React.useState("");
//   const handleChanges = (event) => {
//     setrequest_location(event.target.value);
//   };





//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/services',
//     {
//       method:'Get',
//       headers:{
//         'Content-Type':'application/json',
//       }
//     })
//     .then(resp=>resp.json())
//     .then(resp=>setServices(resp))
//     .catch(err => {
    
//       console.log("Error Reading data ");
//     });
    
//    },[])



   
//   const [locations, setLocations] = useState([]);
//    useEffect(() => {
//     fetch('http://localhost:8080/locations',
//     {
//       method:'Get',
//       headers:{
//         'Content-Type':'application/json',
//       }
//     })
//     .then(resp=>resp.json())
//     .then(resp=>setLocations(resp))
//     .catch(err => {
    
//       console.log("Error Reading data ");
//     });
//    },[])



// // const[requestid,setRequestId]=useState();
// //    useEffect(() => {
// //     fetch('http://localhost:8080/requestid',
// //     {
// //       method:'Get',
// //       headers:{
// //         'Content-Type':'application/json',
// //       },

     
// //     })
// //    .then(resp=>resp.json())                     
// //    .then(resp=>setRequestId(resp))
// //     .catch(err => {
// //      console.log("Error Reading data ");
// //     });
// //    },[])
   





// // const NewRequest = () => {
// //   const jsonBody = {
// //     requestid: requestid,
// //     name:name,
// //     requeststate: requeststate,
// //     impacted_service: impacted_service,
// //     request_location: request_location,
// //     description: description,
// //     //photo
// //     //document


// //   };
  
// //   axios
// //     .post("http://localhost:8080/newrequest", jsonBody)

// //     .then((response) => {
// //       if (response.status === 200) {
// //         alert("New Request Generated");
// //       }
// //     })
// //     .catch((error) => {
// //       console.log(error.message);
// //     });
// // };




// //  console.log(locations)
// //  console.log(services)
// // console.log(requestid)



//   return (
//     <div className={classes.root}>
//       <div className={classes.mainContent}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <div className={classes.paper}>
//             <Typography component="h1" variant="h5">
//               Request Form
//             </Typography>
//             <form className={classes.form} noValidate>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="request_id"
//                     label="Request Id"
//                     value={requestid}
//                     InputProps={{
//                       readOnly: true,
//                     }}
//                     autoFocus
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="request_state"
//                     label="Request State"
//                     defaultValue={requeststate}
//                     InputProps={{
//                       readOnly: true,
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="name"
//                     label="Requester Name"
//                     value={name}
//                     InputProps={{
//                       readOnly: true,
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <FormControl
//                     variant="outlined"
//                     className={classes.formControl}
//                   >
//                     <InputLabel id="impacted_service-label">
//                       Impacted Service
//                     </InputLabel>
//                     <Select
//                       labelId="impacted_service-label"
//                       id="impacted_service"
//                       label="Impacted Service"
//                       fullWidth
//                       onChange={(event) => {
//                         setimpacted_service(event.target.value);
//                       }}
//                       value={impacted_service}
//                       label="Impacted Service"
//                     >
//                     {
//                        services.map(service=> ( 
//                       <MenuItem >{ service.impactedService}</MenuItem>
//                        ))
//                        }
                        
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <FormControl
//                     variant="outlined"
//                     className={classes.formControl}
//                   >
//                     <InputLabel id="request_location-label">
//                       Request Location
//                     </InputLabel>
//                     <Select
//                       id="request_location"
                     
//                       label="Request Location"
//                       fullWidth
//                     >
//                       {
//                       locations.map(location=> ( 
//                       <MenuItem >{location.buildingName} {location.floor}</MenuItem>
//                        ))
//                        }
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     id="assigned_to"
//                     label="Assigned To"
//                     defaultValue="Facilities Team"
//                     // value={services.supportTeam}
//                     InputProps={{
//                       readOnly: true,
                     
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="description"
//                     label="Short Description"
//                     name="description"
//                     onChange={(event) => {
//                       setdescription(event.target.value);
//                     }}
//                     value={description}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <input
//                     accept="image/*"
//                     className={classes.input}
//                     id="contained-button-file"
//                     multiple
//                     type="file"
//                   />
//                   <label htmlFor="contained-button-file">
//                     <Button
//                       variant="contained"
//                       color="default"
//                       component="span"
//                       startIcon={<CloudUploadIcon />}
//                     >
//                       Upload Picture
//                     </Button>
//                   </label>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <input
//                     className={classes.input}
//                     id="contained-button-file"
//                     multiple
//                     type="file"
//                   />
//                   <label htmlFor="contained-button-file">
//                     <Button
//                       variant="contained"
//                       color="default"
//                       component="span"
//                       startIcon={<CloudUploadIcon />}
//                     >
//                       Upload Document
//                     </Button>
//                   </label>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     className={classes.submit}
//                     fullWidth
//                   >
//                     Save
//                   </Button>
//                 </Grid>

//                 {/* <Grid item xs={12} sm={6}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     className={classes.submit}
//                     fullWidth
//                     onClick={NewRequest}
//                     disabled={
//                     request_location === "" ||
//                     impacted_service === "" ||
//                     description === ""
//                     }
//                   >
//                     Submit
//                   </Button> 
//                 </Grid>*/}
//               </Grid>
//             </form>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }



import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(70),
    height: theme.spacing(78),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "1px 1px 4px 4px #115293",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3),
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

  formControl: {
    width: 245,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  mainContent: {
    padding: "2%",
    alignItems: "center",
  },


}));


export default function RequestForm() {
  const classes = useStyles();
  const [name, setname] = useState(localStorage.getItem('userName')?localStorage.getItem('userName'):'');
  const [description, setdescription] = useState("");

  const [requeststate, setrequeststate] = useState("Active");



  const [impacted_service, setimpacted_service] = React.useState("");
  const [request_location, setrequest_location] = React.useState("");
 

  const [locations, setLocations] = useState([]);
  const [services, setServices] = useState([]);


  let fd=new FormData();
  const photoSelectedHandler = (event) =>
    {
      fd.append('file', event.target.files[0], event.target.files[0].name );
    }

  
  let cd=new FormData();
  const docSelectedHandler = (event) =>
    {        
      cd.append('file', event.target.files[0], event.target.files[0].name );
    }


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





   const[requestid,setRequestId]=useState();
   useEffect(() => {
    fetch('http://localhost:8080/requestid',
    {
      method:'Get',
      headers:{
        'Content-Type':'application/json',
      },

     
    })
   .then(resp=>resp.json())                     
   .then(resp=>setRequestId(resp))
    .catch(err => {
     console.log("Error Reading data ");
    });
   },[])


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // "Access-Control-Allow-Origin": "*",
    }
  };


const NewRequest = () => {
  const postData = {
    requestid: requestid,
    name:name,
    requeststate: requeststate,
    impacted_service: impacted_service,
    request_location: request_location,
    description: description,
    photo: fd,
    document: cd
  };

  axios
    .post("http://localhost:8080/newrequest", postData,axiosConfig)

    .then((response) => {
      if (response.status === 200) {
        alert("New Request Generated");
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};



console.log(locations)
console.log(services)




return (
  <div className={classes.root}>
    <div className={classes.mainContent}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Request Form
          </Typography>
          <form className={classes.form} noValidate>
           
           
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="request_id"
                  label="Request Id"
                value={requestid}
                  InputProps={{
                    readOnly: true,
                  }}
                 
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="request_state"
                  label="Request State"
                  defaultValue={requeststate}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Requester Name"
                  value={name}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

             
             
  


                <Grid item xs={12} sm={6}>
                       <TextField value={impacted_service} 
                        id="impacted_service-label"
                        onChange= {
                          (event)=>{setimpacted_service(event.target.value)}
                        }
                        select
                        label=" Impacted Service"
                        variant="outlined"
                        fullWidth
                      >
                     
                     {services.map(option => (
                    <MenuItem
                       key={option.serviceId}
                    value={option.serviceId}
                    >
                    {option.impactedService}
                    </MenuItem>
                   
                  ))}
                   </TextField>
                   </Grid>

                    <Grid item xs={12} sm={6}>
                       <TextField value={request_location} 
                        id="request_location"
                        onChange= {(event)=>{setrequest_location(event.target.value)}}
                        select
                        label="Request Location"
                        variant="outlined"
                        fullWidth
                      >
                     
                     {locations.map(option => (
                    <MenuItem
                     key={option.locationId}
                    value={option.locationId}
                    >
                     {option.buildingName} {option.floor}
                    </MenuItem>
                   
                  ))}
                   </TextField>
                   </Grid>

                 
             
              
              




              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="assigned_to"
                  label="Assigned To"
                  defaultValue="Facilities Team"
                  
                  InputProps={{
                    readOnly: true,

                  }}
                />
              </Grid>


                

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="description"
                    label="Short Description"
                    name="description"
                    onChange={(event) => {
                      setdescription(event.target.value);
                    }}
                    value={description}
                  />
                 
                </Grid>
                

                <Grid container direction="row" alignItems="center" item xs={12} spacing={2}>
                <Grid item>
                <input accept="image/*" multiple type="file" onChange={photoSelectedHandler}/>
                </Grid>
                <Grid item>
                <AddAPhotoIcon />
                </Grid>
                    <Grid item >
                    <Typography variant="subtitle2">
                    <b>UPLOAD PICTURE</b>
                    </Typography>
                    </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center" item xs={12} spacing={2} >
                <Grid item>
                <input multiple type="file" onChange={docSelectedHandler}/>
                </Grid>
                <Grid item>
                <DescriptionIcon />
                </Grid>
                <Typography variant="subtitle2" color="palette.text.disabled">
                <b>UPLOAD DOCUMENT</b>
                </Typography>
                </Grid>

                {/* <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    fullWidth
                  >
                    Save
                  </Button>
                </Grid> */}

                <Grid item xs={12} alignItems="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    fullWidth
                    onClick={NewRequest}
                    disabled={
                    request_location === "" ||
                    impacted_service === "" ||
                    description === ""
                    }
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}