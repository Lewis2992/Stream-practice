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