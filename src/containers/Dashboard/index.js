import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Logbook from "../LogBook";
import DashboardHome from "../DashboardHome";
import SideNavigation from "../SideNavigation";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <SideNavigation />
        <Switch>
          <Route exact path="/dashboard/" component={DashboardHome} />
          <Route path="/dashboard/logbook/" component={Logbook} />
          {/* <Route path="/dashboard/ac-form" component={} />
          <Route path="/dashboard/flight-form" component={} /> */}
          <Route
            path="/dashboard/*"
            render={props => <ErrorPage {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default Dashboard;

/**
 *
 *
 * / Landing
 * /About
 * /Dashboard
 */
