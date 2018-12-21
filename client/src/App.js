import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import FetchCategories from "./components/FetchCategories"
import Navbar from "./components/Navbar"
import CardForm from "./components/CardForm"


const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/categories" component={FetchCategories} />
      <Route exact path="/Jcards/new" component={CardForm} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;