// npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import withSession from './components/withSession';

// styles
import './assets/scss/main.scss';

// custom public components
// custom public components
import Navbar from './components/shared/Navbar';
import Search from './components/nail/Search';
import App from './components/App';
import Landing from './components/Landing';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import About from './components/About';
import Contact from './components/Contact';
import Styleguide from './components/Styleguide';
import Footer from './components/Footer';
// custom private components
import AddNail from './components/nail/AddNail';
import Profile from './components/profile/Profile';

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
  // uri: 'https://flexercise.herokuapp.com/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error', networkError);
    }
  },
});

const Root = ({ refetch, session }) => (
  <Router>
    <div id="wrapper">
      <Navbar session={session} />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/search" component={Search} />
        <Route path="/signin" render={() => <Signin refetch={refetch} />} />
        <Route path="/signup" render={() => <Signup refetch={refetch} />} />
        <Route path="/landing" component={Landing} />
        <Route path="/styleguide" component={Styleguide} />
        <Route path="/nail/add" component={AddNail} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);
