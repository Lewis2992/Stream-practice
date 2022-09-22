const stateObj = {
	isSignedIn: null,
};

const authReducer = (state = stateObj, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {...state, isSignedIn: true, userToken: action.payload};
		case 'SIGN_OUT':
			return {stateObj};
		default:
			return state;
	}
};

export default authReducer;