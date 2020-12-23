import React from 'react';
import { Header, Card, Button } from 'semantic-ui-react';

const Nominations = ({ nominations, setNominations }) => {
	const renderNominations = () => {
		if (nominations.length > 0) {
			return nominations.map((movie) => {
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
									onClick={() => {
										setNominations(
											nominations.filter(
												(nomination) =>
													nomination !== movie
											)
										);
									}}
									basic
									color='red'
									content={'Remove Nomination'}
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
			<Header as='h1'>Your Nominations</Header>
			{renderNominations()}
		</div>
	);
};

export default Nominations;
