import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

const StreamList = (props) => {

	useEffect(() => {
		props.fetchStreams();
	}, []);
	
	const renderAdmin = (stream) => {
		if (!props.isSignedIn) return;

		if (stream?.userId === props.currentUserId) {
			return (
				<div>
					<Link to={`/streams/edit/${stream.id}`} className="btn">Edit</Link>
				</div>
			);
		}
	};

	const renderList = () => {
		return props.streams.map((stream) => {
			return (
				<div key={stream.id} className="stream">
					<h2 className="stream__name">{stream.stream_name}</h2>
					<h3 className="stream__desc">{stream.stream_desc}</h3>
					{renderAdmin(stream)}
				</div>
			);
		});
	};

	return (
		<div className="streamlist">
			{renderList()}
			<Link to="/streams/new">
				Create stream
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn,
		currentUserId: state?.auth?.userToken?.sub,
		streams: Object.values(state.streams)
	};
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);