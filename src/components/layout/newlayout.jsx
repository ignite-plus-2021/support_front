import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import { Link, Route, Switch } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import ForgotPassword from "../utilities/ForgotPassword";
import ResetPassword from "../utilities/ResetPassword";
import VerifyOTP from "../utilities/verifyotp";
import Trends from "../utilities/Trends";
import SignUp from "../login/SignUp";
import HomePage from "../utilities/HomePage";
import SignIn from "../login/SignIn";
import MyRequests from "../utilities/MyRequests";
import { AllRequests } from "../utilities/AllRequests";
import RequestForm from "../utilities/RequestForm";
import DataTable from "../layout/Table3";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const ListItemLink = ({ icon, primary, secondary, to, open }) => (
  <Tooltip title={!open ? primary : ""} placement="right">
    <ListItem button component={Link} to={to}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  </Tooltip>
);

export default function Permanent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            SUPPORT HUB
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {/* ICONS AT THE NAV BAR */}
          <ListItemLink primary="Home" to="/" icon={<HomeIcon />} />
          <ListItemLink
            primary="New Request"
            to="/requestform"
            icon={<LibraryAddIcon />}
          />
          {/* <ListItemLink primary="" to="" icon={<ListAltIcon/>} open={open} /> */}
          <ListItemLink
            primary="My requests"
            to="/myrequests"
            icon={<LibraryBooksIcon />}
          />
          <ListItemLink
            primary="DashBoard"
            to="/allrequests"
            icon={<DashboardIcon />}
          />
          <ListItemLink
            primary="Register"
            to="/register"
            icon={<PersonIcon />}
          />
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          {/* {<Route key="/" exact path="/" component={HomePage} />} */}
          <Route key="/register" exact path="/register" component={SignUp} />
          <Route key="/login" exact path="/login" component={SignIn} />
          <Route
            key="/myrequests"
            exact
            path="/myrequests"
            component={MyRequests}
          />
          <Route
            key="/allrequests"
            exact
            path="/allrequests"
            component={AllRequests}
          />
          <Route
            key="/requestform"
            exact
            path="/requestform"
            component={RequestForm}
          />
          <Route
            key="/forgotpassword"
            exact
            path="/forgotpassword"
            component={ForgotPassword}
          />
          <Route
            key="/resetpassword"
            exact
            path="/resetpassword"
            component={ResetPassword}
          />

          <Route
            key="/verifyOTP"
            exact
            path="/verifyOTP"
            component={VerifyOTP}
          />

          <Route key="/table3" exact path="/table3" component={DataTable} />

          <Route key="/trends" exact path="/trends" component={Trends} />
          {/* admindashboard/trends */}
        </Switch>
      </main>
    </div>
  );
}
