import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AuthorQuotes from './pages/AuthorQuotes';
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route path={process.env.PUBLIC_URL + "/author/:authorName"} exact component={AuthorQuotes} />
      </Switch>
    </>
  );
};

export default App;
