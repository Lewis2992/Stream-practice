import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import StreamCreate from './stream/StreamCreate';
import StreamDelete from './stream/StreamDelete';
import StreamEdit from './stream/StreamEdit';
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';

const App = (props) => {
	return (
		<div>
			<BrowserRouter>
			{props.children} {/*Header component*/}
				<Routes>
					<Route path="/" element={<StreamList/>}/>
					<Route path="/streams/new" element={<StreamCreate/>}/>
					<Route path="/streams/edit/:id" element={<StreamEdit/>}/>
					<Route path="/streams/delete/:id" element={<StreamDelete/>}/>
					<Route path="/streams/:id" element={<StreamShow/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;