import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Field} from 'react-final-form';

const StreamForm = props => {
	//Router
	const navigate = useNavigate();

	//Form
	const required = value => {
		return value ? undefined : 'required'
	}

	const onSubmit = values => {
		props.onSubmit(values);
	}

	return (
		<Form onSubmit={onSubmit} initialValues={props.initFormValues}>
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
				);
			}}
		</Form>
	);
};

export default StreamForm;