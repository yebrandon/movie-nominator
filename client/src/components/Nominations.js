import React from 'react';
import { Header, Card, Button } from 'semantic-ui-react';

const Nominations = ({ nominations, setNominations }) => {
	const renderNominations = () => {
		nominations.forEach((movie) => (
			<Card>
				<Card.Content>
					<Card.Header>{movie.Title}</Card.Header>
					<Card.Meta>{movie.Year}</Card.Meta>
					<Card.Description>{movie.Plot}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div>
						<Button
							disabled={nominations.includes(movie['imdbID'])}
							onClick={setNominations(...movie['imdbID'])}
							basic
							color='green'
						>
							Nominate
						</Button>
					</div>
				</Card.Content>
			</Card>
		));
	};

	return (
		<div>
			<Header as='h1'>Your Nominations</Header>
			{renderNominations()}
		</div>
	);
};

export default Nominations;
