import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className="header">
			<Link to="/" className="header__logo">Streamy</Link>
			<GoogleAuth/>
		</div>
	);
};

export default Header;