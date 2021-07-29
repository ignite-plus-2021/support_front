import React from "react";
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
import Select from "@material-ui/core/Select";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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
  const [impacted_service, setimpacted_service] = React.useState("");
  const handleChange = (event) => {
    setimpacted_service(event.target.value);
  };
  const [request_location, setrequest_location] = React.useState("");
  const handleChanges = (event) => {
    setrequest_location(event.target.value);
  };

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
                    defaultValue="REQ0789"
                    InputProps={{
                      readOnly: true,
                    }}
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="request_state"
                    label="Request State"
                    defaultValue="Active"
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
                    defaultValue="Jack"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="impacted_service-label">
                      Impacted Service
                    </InputLabel>
                    <Select
                      labelId="impacted_service-label"
                      id="impacted_service"
                      value={impacted_service}
                      onChange={handleChange}
                      label="Impacted Service"
                      fullWidth
                    >
                      <MenuItem value={"Rest Room"}>Rest Room</MenuItem>
                      <MenuItem value={"Meeting Room"}>Meeting Room</MenuItem>
                      <MenuItem value={"Common Area"}>Common Area</MenuItem>
                      <MenuItem value={"Cafeteria"}>Cafeteria</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="request_location-label">
                      Request Location
                    </InputLabel>
                    <Select
                      labelId="request_location-label"
                      id="request_location"
                      value={request_location}
                      onChange={handleChanges}
                      label="Request Location"
                      fullWidth
                    >
                      <MenuItem value={"GWS Ground Floor"}>
                        GWS Ground Floor
                      </MenuItem>
                      <MenuItem value={"GWS First Floor"}>
                        GWS First Floor
                      </MenuItem>
                      <MenuItem value={"GWS Second Floor"}>
                        GWS Second Floor
                      </MenuItem>
                      <MenuItem value={"GWS Third Floor"}>
                        GWS Third Floor
                      </MenuItem>
                      <MenuItem value={"GWS Parking Lot"}>
                        GWS Parking Lot
                      </MenuItem>
                    </Select>
                  </FormControl>
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
                  />
                </Grid>

                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="default"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Picture
                    </Button>
                  </label>
                </Grid>

                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="default"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Document
                    </Button>
                  </label>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    fullWidth
                  >
                    Save
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    fullWidth
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
