import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import SearchMovies from './components/SearchMovies';
import Nominations from './components/Nominations';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [nominations, setNominations] = useState([]);

	return (
		<Router>
			<NavBar></NavBar>
			<Switch>
				<Route
					exact
					path='/movie-nominator'
					render={() => (
						<SearchMovies
							setMovies={setMovies}
							movies={movies}
							nominations={nominations}
							setNominations={setNominations}
						/>
					)}
				/>
				<Route
					path='/movie-nominator/searchmovies'
					render={() => (
						<SearchMovies
							setMovies={setMovies}
							movies={movies}
							nominations={nominations}
							setNominations={setNominations}
						/>
					)}
				/>
				<Route
					path='/movie-nominator/searchmovies'
					render={() => (
						<Nominations
							setMovies={setMovies}
							movies={movies}
							nominations={nominations}
							setNominations={setNominations}
						/>
					)}
				/>
			</Switch>
		</Router>
	);
};

export default App;
