import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoginForm from './components/auth/LoginForm';
import ConfirmForm from './components/auth/ConfirmForm';
import PrivateRoute from './components/route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/layout/NotFound';
import Form from './components/form/Form';
import { GetForm } from './components/get-form/GetForm'
import { SPView } from './components/sp-view/SPView'
// import AddNewForm from './components/forms-panel/Dashboard';

function App() {

  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/form'>
            <Form />
          </PrivateRoute>
          <PrivateRoute path='/get-form'>
            <GetForm />
          </PrivateRoute>
          <PrivateRoute path='/sp-view'>
            <SPView />
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
