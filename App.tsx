import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import TodoPage from './src/TodoPage/TodoPage';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          strict
          path='/todo'
          component={TodoPage}
        />
        <Route
          component={() => <div className={'center-content'}>Looking for something? Page does not exist 😢</div>}
        />
      </Switch>
    </HashRouter>
  );
};
export default App;