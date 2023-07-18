import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home.component';
import NewCar from './components/new_car.component'
import PageNotFound from "./components/pageNotFound.component"
import './components/page.css'
function App() {
  return (
    
		<Switch>
			<Route exact path="/" component={ Home } />
			<Route path="/cars" component={ NewCar } />
			<Route path="*" exact component={PageNotFound} />
		</Switch>
	
  );
}

export default App;
