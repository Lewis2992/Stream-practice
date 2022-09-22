import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Field} from 'react-final-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

const StreamCreate = props => {
	//Router
	const navigate = useNavigate();

	//Form
	const required = value => {
		return value ? undefined : 'required'
	}

	const onSubmit = values => {
		if (props.isSignedIn) {
			props.createStream(values);
			navigate('/');
		}
	}

	return (
		<Form onSubmit={onSubmit}>
			{({handleSubmit}) => {
				return(
					<form onSubmit={handleSubmit} autoComplete="off">
						<div>
							<Field name="stream_name" component="input" placeholder="Stream name" validate={required}/>
							<label>Enter the name of your stream</label>
						</div>
						<div>
							<Field name="stream_desc" component="input" placeholder="Stream description" validate={required}/>
							<label>Enter your stream description</label>
						</div>
						<button type="submit">Submit</button>
					</form>
				)
			}}
		</Form>
	);
};

const mapStateToProps = (state) => {
	return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {createStream})(StreamCreate);