import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from '../main';
import { ToutiaoWeb } from '../toutiao-web';

export const Catalog: React.FC = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <ToutiaoWeb />
        </Route>
        <Route path="/users">
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
  )
}