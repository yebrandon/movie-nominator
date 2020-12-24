import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import Logo from '../img/logo.png';

const NavBar = () => {
	const [activeItem, setActiveItem] = useState('searchmovies');

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<Menu>
			<Menu.Item className='borderless'>
				<Header
					className='logo-text'
					as='h3'
					image={Logo}
					content='The Shoppies'
				/>
			</Menu.Item>
			<Menu.Item
				as={Link}
				name='searchmovies'
				active={activeItem === 'searchmovies'}
				onClick={handleItemClick}
				to='/searchmovies'
			>
				<div className='tab'>Search Movies</div>
			</Menu.Item>
			<Menu.Item
				as={Link}
				name='nominations'
				active={activeItem === 'nominations'}
				onClick={handleItemClick}
				to='/nominations'
			>
				Nominations
			</Menu.Item>
		</Menu>
	);
};

export default NavBar;
