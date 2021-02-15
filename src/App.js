import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './pages/projects';
import Project from './pages/project';

const App = React.memo(props => {
  return (
    <Router>
      <Switch>
        <Route path="/project/:id">
          <Project />
        </Route>
        <Route path="/" exact>
          <Projects />
        </Route>
      </Switch>
    </Router>
  )
});

export default App;