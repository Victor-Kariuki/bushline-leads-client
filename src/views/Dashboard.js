import React, { Component } from 'react';

import { DashboardLayout } from '../layouts';

class Dashboard extends Component
{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <DashboardLayout></DashboardLayout>
    )
  }
}

export default Dashboard;
