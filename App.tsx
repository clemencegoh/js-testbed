import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          strict
          path='/hooks'
          component={() => <div>Hello from test</div>}
        />
        <Route
          component={() => <div className={'center-content'}>Looking for something? Page does not exist 😢</div>}
        />
      </Switch>
    </HashRouter>
  );
};
export default App;