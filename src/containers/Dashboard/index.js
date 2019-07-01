import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import LogBook from "../LogBook/LogBook";
import DashboardHome from "../../components/DashboardHome";
import SideNavigation from "../../components/SideNavigation";
import FlightForm from "../../components/FlightForm";
import requiresAuth from "../RequiresAuth/RequiresAuth";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <SideNavigation />
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
          <Route
            path="/dashboard/*"
            render={props => <ErrorPage {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default requiresAuth(Dashboard);

/**
 *
 *
 * / Landing
 * /About
 * /Dashboard
 */
