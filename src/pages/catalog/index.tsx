import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import { ToutiaoWeb } from '../toutiao-web';

export const Catalog: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <ToutiaoWeb />
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  )
}