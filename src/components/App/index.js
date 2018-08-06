import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import RouteListener from '../RouteListener';
import * as routes from '../../constants/routes';
import LandingPage from '../LandingPage';
import Dashboard from '../Dashboard';

const App = () => (
  <Router>
    <div>
      <RouteListener />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />  
        <Route exact path={routes.DASHBOARD} component={Dashboard} />   
      </Switch>
    </div>
  </Router>
)

export default App;