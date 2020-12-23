import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchMovies from './components/SearchMovies';
import Nominations from './components/Nominations';

const App = () => {
	const [movies, setMovies] = useState();
	const [nominations, setNominations] = useState([]);

	return (
		<Router>
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
		</Router>
	);
};

export default App;
