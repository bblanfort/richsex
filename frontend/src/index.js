// npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// styles
import './assets/scss/main.scss';

// custom components
import Navbar from './components/shared/Navbar';
import Search from './components/exercise/Search';
import App from './components/App';
import Landing from './components/Landing';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Styleguide from './components/Styleguide';
import Footer from './components/Footer';
import Test from './components/Test';

const client = new ApolloClient({
  // uri: 'http://localhost:4444/graphql',
   uri: 'https://flexercise.herokuapp.com/graphql',
  fetchOptions: {
    credentials: 'include',
  },
});

const Root = () => (
  <Router>
    <div id="wrapper">
      <Navbar />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/search" component={Search} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/landing" component={Landing} />
        <Route path="/styleguide" component={Styleguide} />
        <Route path="/Test" component={Test} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);
