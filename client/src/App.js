import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchMovies from './components/SearchMovies';
import Nominations from './components/Nominations';

function App() {
	return (
		<Router>
			<NavBar></NavBar>
			<Switch>
				<Route exact path='/' component={SearchMovies} />
				<Route path='/searchmovies' component={SearchMovies} />
				<Route path='/nominations' component={Nominations} />
			</Switch>
		</Router>
	);
}

export default App;
