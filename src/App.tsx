import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './shared/styles/global-styles';
// Pages
import { Home, NotFound, ToDo } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={ToDo} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
