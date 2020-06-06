import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login, Register, Leads, Customers, Staff, AssetsList, Asset, Appointments, Reports } from './views';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login }/>
        <Route path="/register" component={ Register } />
        <Route path="/leads" component={ Leads } />
        <Route path="/customers" component={ Customers } />
        <Route path="/staff" component={ Staff } />
        <Route path="/assets" component={ AssetsList } />
        <Route path="/assets/:asset" component={ Asset } />
        <Route path="/appointments" component={ Appointments } />
        <Route path="/reports" component={ Reports } />
      </Switch>
    </Router>
  );
}

export default App;
