import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import React from 'react';
import Home from './pages/home/Home'
import GlobalStyles from './shared/styles/global-styles'

function App() {
  return (
    <Router>
      <GlobalStyles/>
     <Route exact path="/" component={Home}/>
   </Router>
  );
}

export default App;
