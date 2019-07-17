import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./containers/Dashboard";
import Callback from "./containers/auth-zero/Callback/Callback";
import LandingPage from "./containers/LandingPage";
import ErrorPage from "./containers/ErrorPage";
import Auth from "./containers/auth-zero/Auth/Auth.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./styles/App.scss";

// TOUR STUFF
import Reactour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
const tourConfig = [
  {
    selector: '[data-tut="reactour__cards"]',
    content: `This is the dashboard. Here, you can see a brief overview of the flights you have logged on JetLogr.`
  },
  {
    selector: '[data-tut="reactour__line-graph"]',
    content: `Here you can view your flights in the past week.`
  },
  {
    selector: '[data-tut="reactour__add-flight-btn"]',
    content: `Click here to add a new flight to your log book.`
  },
  {
    selector: '[data-tut="reactour__add-flight-form"]',
    content: `You can fill out flight information on this form.`
  }
];

const Tour = withRouter(
  ({ isOpen, closeTour, location: { pathname }, history }) => {
    const steps = [
      {
        selector: '[data-tut="reactour__cards"]',
        content: `This is the dashboard. Here, you can see a brief overview of the flights you have logged on JetLogr.`
      },
      {
        selector: '[data-tut="reactour__line-graph"]',
        content: `Here you can view your flights in the past week.`
      },
      {
        selector: '[data-tut="reactour__add-flight-btn"]',
        content: `Click here to add a new flight to your log book. (No really, click it!)`
      },
      {
        selector: '[data-tut="reactour__add-flight-form"]',
        content: `You can fill out flight information on this form.`
      }
    ];
    return (
      <Reactour
        steps={steps}
        isOpen={isOpen}
        onRequestClose={closeTour}
        update={pathname}
      />
    );
  }
);

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3777f7"
    },
    secondary: {
      main: "#e91e63"
    }
  },
  shadows: ["none"]
});

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  const [isTourOpen, handleTourOpen] = useState(false);
  const disableBody = target => disableBodyScroll(target);
  const enableBody = target => enableBodyScroll(target);
  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <LandingPage {...props} auth={auth} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route
            path="/dashboard"
            render={props => <Dashboard {...props} auth={auth} />}
          />
          <Route
            path="*"
            render={props => <ErrorPage {...props} auth={auth} />}
          />
        </Switch>
      </ThemeProvider>
      <ToastContainer
        position="bottom-right"
        style={{ zIndex: "999999999999", fontSize: "1.2rem" }}
      />
      <Tour
        isOpen={isTourOpen}
        onRequestClose={() => handleTourOpen(false)}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        maskClassName="mask"
        className="helper"
        rounded={5}
      />
      {/* <Tour
        onRequestClose={() => handleTourOpen(false)}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
      /> */}
      <button onClick={() => handleTourOpen(true)}>Start Tour</button>
    </div>
  );
}

export default App;
