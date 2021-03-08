import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home'
import Details from './containers/Details'
import Layout from './containers/Layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pokemon/:id' component={Details} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
