import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Layout> */}
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      {/* </Layout> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
