import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './pages/projects';
import Issues from './pages/issues';

const App = React.memo(props => {
  return (
    <Router>
      <Switch>
        <Route path="/project/:id">
          <Issues />
        </Route>
        <Route path="/" exact>
          <Projects />
        </Route>
      </Switch>
    </Router>
  )
});

export default App;