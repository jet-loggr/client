import React from "react";
import { Route, Switch } from "react-router-dom";
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

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3777f7"
    },
    secondary: {
      main: "#FFF"
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
    </div>
  );
}

export default App;
