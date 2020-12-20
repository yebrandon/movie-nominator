import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
	return (
		<Router>
			<NavBar></NavBar>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
			</Switch>
		</Router>
	);
}

export default App;
