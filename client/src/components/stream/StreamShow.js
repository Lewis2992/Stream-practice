import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import flv from 'flv.js';

import {fetchStream} from '../../actions';

const StreamShow = (props) => {
	const params = useParams();

	const videoRef = useRef();

	useEffect(() => {
		props.fetchStream(params.id);

		const flvPlayer = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${params.id}.flv`
		});

		flvPlayer.attachMediaElement(videoRef.current);
		flvPlayer.load();

	console.log(videoRef);
	}, []);

	const {stream_name, stream_desc} = props.stream[params.id];

	return (
		<div>
			<video ref={videoRef} controls/>
			<h1>{stream_name}</h1>
			<h5>{stream_desc}</h5>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {stream: state.streams}
};

export default connect(mapStateToProps, {fetchStream})(StreamShow);