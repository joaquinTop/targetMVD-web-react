import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';
import HomePage from './containers/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SignUpPage} />
    <Route path="sign-in" component={SignInPage}/>
    <Route path="home" component={HomePage}/>
  </Route>
);
