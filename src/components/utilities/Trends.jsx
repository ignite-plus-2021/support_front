import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

export const Trends = () => {
  const classes = useStyles();
  //   let history = UseHistory();

  //   //Method to call endpoint trends
  //   const Trends = () => {
  //     const jsonBody = {
  //
  //     };
  //     axios
  //       .post("http://localhost:8080/trends", jsonBody)

  //       .then((response) => {
  //         if (response.status === 200) {
  //           alert(".....");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5">
            Trends
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Trends;
