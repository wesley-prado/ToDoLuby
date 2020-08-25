import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

import Home from './pages/home/home'
import React from 'react';

function App() {
  return (
   <Router>
     <Route exact path="/" component={Home}/>
   </Router>
  );
}

export default App;
