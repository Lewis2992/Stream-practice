import React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {fetchStream} from '../../actions';

const StreamEdit = (props) => {
	const params = useParams();
	const stream = props.streams[params.id];
	console.log(stream);
	return (
		<div>{stream.stream_name}</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {streams: state.streams};	//****Find way to directly retrieve the stream here
};

export default connect(mapStateToProps, {fetchStream})(StreamEdit);