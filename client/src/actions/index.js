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
		console.log(sub);
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
		const res = await streams.get(`/streams/${id}`)

		dispatch({
			type: 'FETCH_STREAM',
			payload: res.data
		})
	};
};