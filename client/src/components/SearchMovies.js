import React, { useState } from 'react';
import { Header, Input, Button, Card, Divider, Icon } from 'semantic-ui-react';
import { apikey } from '../apikey';

const SearchMovies = ({ movies, setMovies, nominations, setNominations }) => {
	const [query, setQuery] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			search();
		}
	};

	const search = () => {
		if (query) {
			fetch(
				'http://www.omdbapi.com/?apikey=' +
					apikey +
					'&type=movie&plot=short&s=' +
					query
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if (data['Response'] === 'True') {
						setMovies(data['Search']);
						setError();
					} else if (data['Error'] === 'Too many results.') {
						setError(
							'Too many results, please use a more specific search!'
						);
					} else if (data['Error'] === 'Movie not found!') {
						setError(
							'No results found, please try a different search!'
						);
					} else {
						setError('Something went wrong, please try again!');
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
					<Card className='movie-card'>
						<Card.Content>
							<Card.Header>{movie.Title}</Card.Header>
							<Card.Meta>{movie.Year}</Card.Meta>
						</Card.Content>
						<Card.Content extra>
							<div>
								<Button
									className='add-button'
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
		<div className='container'>
			<Header className='title' as='h1'>
				Search for Movies
			</Header>
			<Input
				className='search-bar'
				icon={<Icon name='search' link onClick={search} />}
				placeholder='Search...'
				onChange={handleChange}
				onKeyPress={handleKeyPress}
			/>
			<p className='error'>{error}</p>
			<Divider section></Divider>
			<div className='card-list'>{renderMovies()}</div>
		</div>
	);
};

export default SearchMovies;