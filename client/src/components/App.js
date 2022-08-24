import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Header';
import StreamCreate from './stream/StreamCreate';
import StreamDelete from './stream/StreamDelete';
import StreamEdit from './stream/StreamEdit';
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';

const App = () => {
	return (
		<div>
			<BrowserRouter>
			<Header/>
				<Routes>
					<Route path="/" element={<StreamList/>}/>
					<Route path="/streams/new" element={<StreamCreate/>}/>
					<Route path="/streams/edit" element={<StreamEdit/>}/>
					<Route path="/streams/delete" element={<StreamDelete/>}/>
					<Route path="/streams/show" element={<StreamShow/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;