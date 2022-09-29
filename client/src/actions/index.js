import {streams} from '../apis/streams';

export const signIn = (userToken) => {
	return {
		type: 'SIGN_IN',
		payload: userToken
	};
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT',
	};
};

export const createStream = (formValues) => {
	return async (dispatch, getState) => {
		const {sub} = getState()?.auth?.userToken;
		const res = await streams.post('/streams', {...formValues, userId: sub})

		dispatch({
			type: 'CREATE_STREAM',
			payload: res.data
		});
	};
};

export const fetchStreams = () => {
	return async (dispatch) => {
		const res = await streams.get('/streams');

		dispatch({
			type: 'FETCH_STREAMS',
			payload: res.data
		})

		// console.log(res.data);
	}
};

export const fetchStream = (id) => {
	return async (dispatch) => {
		// console.log(id);
		const res = await streams.get(`/streams/${id}`);

		dispatch({
			type: 'FETCH_STREAM',
			payload: res.data
		})
		
	};
};

export const editStream = (id, formValues) => {
	return async (dispatch) => {
		const res = await streams.patch(`/streams/${id}`, formValues);

		dispatch({
			type: 'EDIT_STREAM',
			payload: res.data
		})
	}
};

export const deleteStream = (id) => {
	return async(dispatch) => {
		await streams.delete(`/streams/${id}`);
		dispatch({
			type: 'DELETE_STREAM',
			payload: id
		});
	};
};