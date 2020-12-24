import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import SearchMovies from './components/SearchMovies';
import Nominations from './components/Nominations';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [nominations, setNominations] = useState([]);

	return (
		<HashRouter basename='/'>
			<NavBar></NavBar>
			<Switch>
				<Route
					exact
					path='/'
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
					path='/searchmovies'
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
					path='/nominations'
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
		</HashRouter>
	);
};

export default App;
