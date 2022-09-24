const streamsReducer = (state = {}, action) => {
	switch(action.type) {
		case 'FETCH_STREAMS':
			const stateObj = action.payload.reduce((acc, cur) => {
				acc[cur.id] = cur;
				return acc;
			}, {});
			return {...state, ...stateObj};

		case 'CREATE_STREAM':
			return {...state, [action.payload.id]: action.payload};

		case 'EDIT_STREAM':
			return {...state, [action.payload.id]: action.payload}

		case 'DELETE_STREAM':
			const newState = {...state};
			delete newState[action.payload];
			return newState;

		default:
			return state;
	};
};

export default streamsReducer;