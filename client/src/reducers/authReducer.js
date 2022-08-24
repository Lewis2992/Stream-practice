const initState = {
	isSignedIn: false,
	userId: null
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {...state, isSignedIn: true, userId: action.payload}
		default:
			return state;
	}
};

export default authReducer;