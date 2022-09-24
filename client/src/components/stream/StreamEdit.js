import {React, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
	const params = useParams();
		const stream = props.streams[params.id];
		console.log(stream);

	// useEffect(() => {
	// 	props.fetchStream(stream);
	// }, [])

	return (
		<div>
			<StreamForm initFormValues={{stream_name: 'my name', stream_desc: 'my desc'}}/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {streams: state.streams};	//****Find way to directly retrieve the stream here
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);