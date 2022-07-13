import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './components/pages/Skills';
import Hobbies from './components/pages/Hobbies';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/skills' component={Skills} />
          <Route path='/hobbies' component={Hobbies} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
