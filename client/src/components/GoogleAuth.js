import React from 'react';
import jwt_decode from "jwt-decode";
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

	componentDidMount() {
		const handleCredentialResponse = (response) => {
	        const token = jwt_decode(response.credential);
	        this.props.signIn(token);
	        document.getElementById('buttonDiv').hidden = true;
	    }

        window.onload = function() {
          window.google.accounts.id.initialize({
            client_id: "289281937373-m6knc4vpvhk51anaku6r9smjg36nicsd.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });

          window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          // window.google.accounts.id.prompt(); // also display the One Tap dialog
        }
	}

	componentDidUpdate() {

		if (!this.props.auth?.isSignedIn) {
			document.getElementById('buttonDiv').hidden = false;
		}
	}

	renderLogInStatus() {
		if (this.props.auth?.isSignedIn) {
			return (
				<div>
					Welcome {this.props.auth.userToken.name}
					<button onClick={() => {this.props.signOut()}}>Sign out</button>	
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<div id="buttonDiv"></div> 
				{this.renderLogInStatus()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {auth: state.auth}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);