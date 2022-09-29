import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchStream} from '../../actions';

const StreamShow = (props) => {
	const params = useParams();

	useEffect(() => {
		props.fetchStream(params.id);
	}, []);

	const {stream_name, stream_desc} = props.stream[params.id];
	
	return (
		<div>
			<h1>{stream_name}</h1>
			<h5>{stream_desc}</h5>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {stream: state.streams}
};

export default connect(mapStateToProps, {fetchStream})(StreamShow);