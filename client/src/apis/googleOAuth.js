import axios from 'axios';

const googleOAuth = axios.create({
	baseURL: 'https://accounts.google.com/o/oauth2/v2/auth',
	params: {
		client_id: '289281937373-m6knc4vpvhk51anaku6r9smjg36nicsd.apps.googleusercontent.com',
		redirect_uri: 'http://localhost:3000',
		response_type: 'token',
		scope: 'https://www.googleapis.com/auth/userinfo.email'
	}
});

export default googleOAuth;