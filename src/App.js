import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoginForm from './components/auth/LoginForm';
import ConfirmForm from './components/auth/ConfirmForm';
import PrivateRoute from './components/route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/layout/NotFound';
import {Test} from './components/form/test/Test'
import Form2 from './components/form/Form';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/test">
            <Test />
          </PrivateRoute>
          <PrivateRoute path='/formularz'>
            <Form2 />
          </PrivateRoute>
          <PrivateRoute path="/test3">
            <Test />
          </PrivateRoute>          
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/confirm">
            <ConfirmForm />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
