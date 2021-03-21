import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from './context/index';

import Home from './views/Home/index'
import Details from './views/Details'
import Favorites from './views/Favorites'
import Layout from './containers/Layout'

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pokemon/:id' component={Details} />
            <Route exact path='/Favorites' component={Favorites} />
          </Switch>
        </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
