import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(80),
    height: theme.spacing(65),
    padding: theme.spacing(2),
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

  button: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    boxShadow: " 2px 1px grey",
  },
}));

export default function CloseRequest() {
  const classes = useStyles();

  const [name, setname] = useState(
    localStorage.getItem("userName") ? localStorage.getItem("userName") : ""
  );
  const [requeststate, setrequeststate] = useState("");

  const [request, setRequest] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/requests/allrequests/:id", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setRequest(resp));
  }, []);

  const CloseRequest = (event) => {
    const jsonBody = {
      state: requeststate,
      userName: name,
    };
    axios
      .put("http://localhost:8080/requests/allrequests/:id", jsonBody)

      .then((response) => {
        if (response.status === 200) {
          alert("Request Closed");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Close Request Form
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Request Id"
                    value={request.requestid}
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
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="request_state"
                    label="Request State"
                    onChange={(event) => {
                      setrequeststate(event.target.value);
                    }}
                    value={requeststate}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="impacted_service"
                    label="Impacted Service"
                    value={request.service}
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
                    id="request_location"
                    label="Request Location"
                    value={request.location}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
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
                    value={request.description}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className={classes.submit}
                    href="/allrequests"
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    fullWidth
                    onClick={(event) => CloseRequest(event)}
                    disabled={requeststate === ""}
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
