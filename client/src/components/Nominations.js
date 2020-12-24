import React from 'react';
import { Header, Card, Button, Message, Divider } from 'semantic-ui-react';

const Nominations = ({ nominations, setNominations }) => {
	const renderBanner = () => {
		if (nominations.length === 0) {
			return (
				<Message
					className='banner'
					icon='search'
					header='Get Started'
					content='Go to the "Search Movies" tab and nominate some movies!'
				/>
			);
		}
		if (nominations.length >= 5) {
			return (
				<Message
					className='banner'
					icon='trophy'
					header='Nice Job!'
					content="You've nominated five movies!"
				/>
			);
		}
	};

	const renderNominations = () => {
		if (nominations.length > 0) {
			return nominations.map((movie) => {
				return (
					<Card className='movie-card'>
						<Card.Content>
							<Card.Header>{movie.Title}</Card.Header>
							<Card.Meta>{movie.Year}</Card.Meta>
							<Card.Description>{movie.Plot}</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div>
								<Button
									className='remove-button'
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
		<div className='container'>
			<Header className='title' as='h1'>
				Your Nominations
			</Header>
			{renderBanner()}
			<Divider section></Divider>
			<div className='card-list'>{renderNominations()}</div>
		</div>
	);
};

export default Nominations;
