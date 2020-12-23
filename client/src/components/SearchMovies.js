import React, { useState } from 'react';
import { Header, Input, Button } from 'semantic-ui-react';
import { apikey } from '../apikey';

const SearchMovies = () => {
	const [query, setQuery] = useState();
	const [movies, setMovies] = useState();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleClick = () => {
		fetch('http://www.omdbapi.com/?apikey=' + apikey + '&t=' + query)
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	const renderMovies = () => {};

	return (
		<div>
			<Header as='h1'>Search for Movies</Header>
			<Input
				icon='search'
				placeholder='Search...'
				onChange={handleChange}
			/>
			<Button onClick={handleClick}>Search</Button>
		</div>
	);
};

export default SearchMovies;
