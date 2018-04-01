import React from 'react';
import { Route } from 'react-router-dom';

import CssBaseline from 'material-ui/CssBaseline';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => (
  <div style={{ height: '100%' }}>
    <CssBaseline />
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
  </div>
);

export default App;