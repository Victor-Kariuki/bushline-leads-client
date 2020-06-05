import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login, Register } from './views';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={ Login } exact/>
        <Route to="/register" component={ Register } />
      </Switch>
    </Router>
  );
}

export default App;
