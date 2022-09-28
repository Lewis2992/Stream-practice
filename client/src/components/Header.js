import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = (props) => {
	return (
		<div className="header">
			<Link to="/" className="header__logo">Streamy</Link>
			<button onClick={props.persistor.purge}>Destroy</button>
			<GoogleAuth/>
		</div>
	);
};

export default Header;