const initState = {
	isSignedIn: false,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {...state, isSignedIn: true, userToken: action.payload};
		case 'SIGN_OUT':
			return {initState};
		default:
			return state;
	}
};

export default authReducer;