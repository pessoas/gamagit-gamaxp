import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from "./pages/Repositories/Repositories";
import Home from "./pages/Home/Home"

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;