import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(80),
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
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(5),
  },

  root: {
    marginLeft: theme.spacing(10),
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

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
  },

  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 2px 1px grey",
  },
}));

export default function RequestForm() {
  const classes = useStyles();

  const [id, setId] = useState(2);
  const [name, setname] = useState(
    localStorage.getItem("userName") ? localStorage.getItem("userName") : ""
  );

  const [description, setdescription] = useState("");
  const [requeststate, setrequeststate] = useState("Active");

  const [impacted_service, setimpacted_service] = React.useState("");
  const [locations, setLocations] = useState([]);

  const [request_location, setrequest_location] = React.useState("");
  const [services, setServices] = useState([]);

  const [images, setImages] = useState([]);

  //Fetch services from sercies db
  useEffect(() => {
    fetch("http://localhost:8080/services", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setServices(resp));
  }, []);
  //console.log(services);

  //Fetch services from locations db
  useEffect(() => {
    fetch("http://localhost:8080/locations", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setLocations(resp));
  }, []);
 // console.log(locations);

 

  //On requestform Submit
  const NewRequest = (event) => {
    event.preventDefault();
  };
  // const postData = {
  //   // requestId: requestid,
  //   // state: requeststate,
  //   state: "state",
  //   description: description,
  //   userId: id,
  //   locationId: request_location,
  //   serviceId: impacted_service,
 
   };
  // console.log(postData);


     axios
  //     .post("http://localhost:8080/request/newrequest")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log(response.data);
  //         alert("New Request Generated");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AddBoxIcon />
            </Avatar>

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
                    id="name"
                    label="Requester Name"
                    value={name}
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
                    value={impacted_service}
                    id="impacted_service_label"
                    onChange={(event) => {
                      setimpacted_service(event.target.value);
                    }}
                    select
                    label=" Impacted Service"
                    variant="outlined"
                    fullWidth
                  >
                    {services.map((option) => (
                      <MenuItem key={option.serviceId} value={option.serviceId}>
                        {option.impactedService}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    value={request_location}
                    id="request_location"
                    onChange={(event) => {
                      setrequest_location(event.target.value);
                    }}
                    select
                    label="Request Location"
                    variant="outlined"
                    fullWidth
                  >
                    {locations.map((option) => (
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

                <div>
                  <input
                    accept="image/*"
                    className={classes.input}
                    style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={(event) => {
                      setImages((prevState) => [
                        ...prevState,
                        event.target.value,
                      ]);
                    }}
                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      className={classes.button}
                      padding="15px"
                    >
                      <span>Upload</span>
                      <CloudUploadIcon />
                    </Button>
                    {images.map(
                      (image) => (
                        (image = image.replace(/^.*\\/, "")),
                        (
                          <ul style={{ fontSize: "14px", color: "green" }}>
                            {image}
                          </ul>
                        )
                        // <Typography >{image}</Typography>
                      )
                    )}
                  </label>
                </div>

                <div>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      fullWidth
                      onClick={(event) => NewRequest(event)}
                      disabled={
                        request_location === "" ||
                        impacted_service === "" ||
                        description === ""
                      }
                    >
                      Submit
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
