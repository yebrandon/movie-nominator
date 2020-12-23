import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Logo from '../img/logo.png';
import './NavBar.css';

const NavBar = () => {
	const [activeItem, setActiveItem] = useState('searchmovies');

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<Menu>
			<Menu.Item>
				<img src={Logo} /> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{' '}
				The Shoppies
			</Menu.Item>
			<Menu.Item
				as={Link}
				name='searchmovies'
				active={activeItem === 'searchmovies'}
				onClick={handleItemClick}
				to='/searchmovies'
			>
				Search Movies
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
