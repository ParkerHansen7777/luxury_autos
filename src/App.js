import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home.component';


function App() {
  return (
    
    <BrowserRouter> 
    <Redirect from='/' to='/Home' />
      <Switch>
        <Route path ="/Home">
         <Home />
        </Route>
		</Switch>
  </BrowserRouter> 
  );
}

export default App;
