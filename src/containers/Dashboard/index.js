import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import LinkMU from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { mainListItems } from "../../components/ListItems";
import { Route, Switch, Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import LogBook from "../LogBook/LogBook";
import DashboardHome from "../../components/DashboardHome";
import FlightForm from "../../components/FlightForm";
import requiresAuth from "../RequiresAuth/RequiresAuth";
import Profile from "../../components/Profile";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with ❤️ by "}
      <LinkMU color="inherit" href="https://jet-loggr.netlify.com/">
        the 'bunch of hackers' 🤓
      </LinkMU>
      {" team."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100vw"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1,
    fontWeight: 600
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    width: "100%"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },

  paper2: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
  fixedHeight: {
    height: 240
  }
}));

function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  let small = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false); // load closed
  const handleDrawerOpen = () => {
    setOpen(true);
    small = !small;
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  console.log(small);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <img
              src={require("../../assets/bars-light.svg")}
              alt="hamburger menu"
              style={{ width: "25px", height: "25px" }}
            />
          </IconButton>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "unset",
                display: "flex",
                alignItems: "center"
              }}
            >
              <img
                src={require("../../assets/planelogo.svg")}
                alt="hamburger menu"
                style={{ width: "25px", height: "25px", marginRight: "5px" }}
              />{" "}
              JetLogr
            </Link>
          </Typography>
          <Link
            to="/dashboard/flight-form"
            style={{ color: "unset", textDecoration: "none", fontWeight: 800 }}
          >
            Add a flight
            <IconButton color="inherit">
              <img
                src={require("../../assets/plus-circle-light.svg")}
                alt="log-out"
                style={{ height: "25px", width: "25px" }}
              />
            </IconButton>
          </Link>
          <IconButton color="inherit" onClick={handleOpen}>
            <img
              src={require("../../assets/sign-out-light.svg")}
              alt="log-out"
              style={{ height: "25px", width: "25px" }}
            />
          </IconButton>
        </Toolbar>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openModal}
          onClose={handleClose}
        >
          <div
            style={{
              top: `50%`,
              left: `50%`,
              transform: `translate(-50%, -50%)`
            }}
            className={classes.paper2}
          >
            <Typography variant="h6" id="modal-title">
              Are you sure you want to log out?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                props.auth.logout();
                handleClose();
              }}
            >
              Log out
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Modal>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
        // if 600px or less && menu closed then remove sidenav
        style={small && !open ? { display: "none" } : null}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <img
              src={require("../../assets/chevron-left-light.svg")}
              alt="left"
              style={{ height: "25px", width: "25px" }}
            />
          </IconButton>
        </div>
        <Divider />
        <List onClick={handleDrawerClose}>{mainListItems}</List>
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/dashboard/" component={DashboardHome} />
            <Route
              path="/dashboard/logbook"
              render={props => <LogBook {...props} />}
            />
            {/* <Route
            path="/dashboard/enhanced-logbook"
            render={props => <EnhancedTable {...props} />}
          /> */}
            {/* <Route path="/dashboard/ac-form" component={} /> */}
            <Route path="/dashboard/flight-form" component={FlightForm} />
            <Route path="/dashboard/profile" component={Profile} />
            <Route
              path="/dashboard/*"
              render={props => <ErrorPage {...props} />}
            />
          </Switch>
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
}

export default requiresAuth(Dashboard);

/**
 *
 *
 * / Landing
 * /About
 * /Dashboard
 */
