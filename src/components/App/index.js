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

const App = () => (
  <Router>
    <div>
      <RouteListener />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />     
      </Switch>
    </div>
  </Router>
)

export default App;