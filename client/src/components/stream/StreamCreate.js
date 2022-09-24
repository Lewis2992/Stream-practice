import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Field} from 'react-final-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

const StreamCreate = props => {
	//Router
	const navigate = useNavigate();

	const onSubmit = values => {
		if (props.isSignedIn) {
			props.createStream(values);
			navigate('/');
		}
	}

	return (
		<div>
			<StreamForm onSubmit={onSubmit}/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {createStream})(StreamCreate);