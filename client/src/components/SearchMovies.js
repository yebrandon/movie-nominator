import React, { useState } from 'react';
import { Header, Input, Button, Card } from 'semantic-ui-react';
import { apikey } from '../apikey';

const SearchMovies = ({ movies, setMovies, nominations, setNominations }) => {
	const [query, setQuery] = useState();
	const [error, setError] = useState();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const search = () => {
		if (query) {
			fetch(
				'http://www.omdbapi.com/?apikey=' +
					apikey +
					'&type=movie&s=' +
					query
			)
				.then((response) => response.json())
				.then((data) => {
					if (data['Response'] === 'True') {
						setMovies(data['Search']);
						setError();
					} else if (data['Error'] === 'Too many results.') {
						setError(
							'Too many results, please use a more specific search!'
						);
					}
				});
		} else {
			setError('Please enter a valid search!');
		}
	};

	const renderMovies = () => {
		if (movies.length > 0) {
			return movies.map((movie) => {
				return (
					<Card>
						<Card.Content>
							<Card.Header>{movie.Title}</Card.Header>
							<Card.Meta>{movie.Year}</Card.Meta>
							<Card.Description>{movie.Plot}</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div>
								<Button
									disabled={nominations.includes(movie)}
									onClick={() => {
										setNominations((movies) => [
											...movies,
											movie
										]);
									}}
									basic
									color='green'
									content={
										nominations.includes(movie)
											? 'Nominated!'
											: 'Nominate'
									}
								></Button>
							</div>
						</Card.Content>
					</Card>
				);
			});
		}
	};

	return (
		<div>
			<Header as='h1'>Search for Movies</Header>

			<Input
				icon='search'
				placeholder='Search...'
				onChange={handleChange}
			/>
			<br></br>
			<Button onClick={search}>Search</Button>
			<br></br>
			{error}
			<br></br>
			{renderMovies()}
		</div>
	);
};

export default SearchMovies;
