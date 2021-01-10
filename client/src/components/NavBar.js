import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import Logo from '../img/logo.png';

const NavBar = () => {
	const [activeTab, setActiveItem] = useState('searchmovies');

	const handleItemClick = ({ name }) => {
		setActiveItem(name);
	};

	return (
		<Menu>
			<Menu.Item fitted className='borderless'>
				<img className='logo' src={Logo} alt='' />
			</Menu.Item>
			<Menu.Item className='logo-text'>Movie Nominator</Menu.Item>
			<Menu.Item
				as={Link}
				name='searchmovies'
				active={activeTab === 'searchmovies'}
				onClick={handleItemClick}
				to='/searchmovies'
			>
				Search Movies
			</Menu.Item>
			<Menu.Item
				as={Link}
				name='nominations'
				active={activeTab === 'nominations'}
				onClick={handleItemClick}
				to='/nominations'
			>
				Nominations
			</Menu.Item>
			<Menu.Menu position='right'>
				<Menu.Item
					as='a'
					href='https://github.com/yebrandon/movie-nominator'
				>
					<Icon fitted size='big' name='github'></Icon>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default NavBar;
