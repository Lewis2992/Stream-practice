import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
	const navigate = useNavigate();
	const params = useParams();
	const stream = props.streams[params.id];
	const {stream_name, stream_desc} = stream;

	useEffect(() => {
		props.fetchStream(stream.id);
	}, [])

	const onSubmit = (values) => {
		props.editStream(stream.id, values);
		navigate('/')
	};

	return (
		<div>
			Edit stream
			<StreamForm initFormValues={{stream_name: stream_name, stream_desc: stream_desc}} onSubmit={onSubmit}/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {streams: state.streams};	//****Find way to directly retrieve the stream here
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);