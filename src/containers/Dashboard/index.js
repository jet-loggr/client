import React from "react";
import {Route} from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <SideNavigation />
        <Route exact path="/dashboard/" component={DashboardHome}/>
        <Route path="/dashboard/logbook/" component={LogBook} />
        {/* <Route path="/dashboard/ac-form" component={} />
        <Route path="/dashboard/flight-form" component={} /> */}
        <Route component={} />
      </>
    );
  }
}

export default Dashboard;
