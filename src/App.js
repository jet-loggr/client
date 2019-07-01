import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Callback from "./containers/auth-zero/Callback/Callback";
import LandingPage from "./containers/LandingPage";
import ErrorPage from "./containers/ErrorPage";
import Auth from "./containers/auth-zero/Auth/Auth.js";
import "./styles/App.scss";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
