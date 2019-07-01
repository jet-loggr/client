import React from 'react';
import RequiresAuth from '../RequiresAuth/RequiresAuth';

class Dashboard extends React.Component {
  render() {
    return <h1>Dashboard</h1>;
  }
}

export default RequiresAuth(Dashboard);
