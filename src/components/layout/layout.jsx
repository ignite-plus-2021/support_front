import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { CssBaseline, AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Link, Route, Switch } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import SignUp from "../login/SignUp";
import HomePage from "../utilities/HomePage";
import SignIn from "../login/SignIn";
import MyRequests from "../utilities/MyRequests";
import { AllRequests } from "../utilities/AllRequests";
import RequestForm from "../utilities/RequestForm";
import PersonIcon from "@material-ui/icons/Person";
import ForgotPassword from "../utilities/ForgotPassword";
import ResetPassword from "../utilities/ResetPassword";
import VerifyOTP from "../utilities/verifyotp";
import Trends from "../utilities/Trends";
import StickyHeadTable from "../layout/newtable2";
import PermanentDrawerLeft from "../layout/newlayout";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import DashboardIcon from "@material-ui/icons/Dashboard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#3f51b5",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  logoImage: {
    filter: "saturate(1)",
    border: 1,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "#fafafa",
    borderRadius: "50%",
    height: 50,
    marginRight: theme.spacing(1),
  },
  spacer: {
    flex: 1,
  },
  titleLink: {
    color: "inherit",
    textDecoration: "none",
  },
  logoutSection: {
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 2,
    paddingLeft: "70%",
  },
  logoutButton: {
    paddingLeft: "2%",
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

export const Layout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">
            <Link to="/" className={classes.titleLink}>
              Support HUB
            </Link>
          </Typography>

          {/* { <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={logout}
          >
            <ExitToAppIcon />
          </Button> } */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <Divider />
        <List>
          {/* ICONS AT THE NAV BAR */}
          <ListItemLink primary="Home" to="/" icon={<HomeIcon />} open={open} />
          <ListItemLink
            primary="New Request"
            to="/requestform"
            icon={<LibraryAddIcon />}
            open={open}
          />
          {/* <ListItemLink primary="" to="" icon={<ListAltIcon/>} open={open} /> */}
          <ListItemLink
            primary="My requests"
            to="/myrequests"
            icon={<LibraryBooksIcon />}
            open={open}
          />
          <ListItemLink
            primary="DashBoard"
            to="/allrequests"
            icon={<DashboardIcon />}
            open={open}
          />
          <ListItemLink
            primary="Register"
            to="/register"
            icon={<PersonIcon />}
            open={open}
          />
        </List>
        <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          {<Route key="/" exact path="/" component={HomePage} />}
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
          {/* <Route
            key="/tables"
            exact
            path="/tables"
            component={CollapsibleTable}
          /> */}
          <Route
            key="/tables2"
            exact
            path="/tables2"
            component={StickyHeadTable}
          />
          {/* <Route
            key="/tables"
            exact
            path="/tables"
            component={CollapsibleTable}
          /> */}

          <Route
            key="/verifyOTP"
            exact
            path="/verifyOTP"
            component={VerifyOTP}
          />

          <Route
            key="/newlayout"
            exact
            path="/newlayout"
            component={PermanentDrawerLeft}
          />

          <Route key="/trends" exact path="/trends" component={Trends} />
          {/* admindashboard/trends */}
        </Switch>
      </main>
    </div>
  );
};

export default Layout;
