import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchStream, deleteStream, fetchStreams} from '../../actions';
import Modal from '../Modal';

const StreamDelete = (props) => {
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		props.fetchStream(params.id);
	});


	const deleteStream = () => {
		props.deleteStream(params.id);
		props.fetchStreams();
		navigate('/');
	};

	const actions = () => {
		return (
			<React.Fragment>
				<button onClick={deleteStream} className="modal__button modal__button--confirm">Delete</button>
				<button className="modal__button modal__button--decline">Cancel</button>
			</React.Fragment>
		);
	};

	const onClose = (e) => {
		const clicked = e.target.classList.contains('modal-dim');
		if (clicked) navigate('/');
	}

	return (
		<div>
			StreamDelete
			<Modal
				title="Delete stream"
				textBody="Are you sure you want to delete?"
				actions={actions()}
				onClose={onClose}
			/>
		</div>
	);
};

export default connect(null, {fetchStream, deleteStream, fetchStreams})(StreamDelete);