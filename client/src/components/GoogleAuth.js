import React from 'react';
import jwt_decode from "jwt-decode";

class GoogleAuth extends React.Component {

	componentDidMount() {
		 function handleCredentialResponse(response) {
          console.log(jwt_decode(response.credential));
        }
        window.onload = function () {
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

	render() {
		return (
			<div>
				GoogleAuth
				<div id="buttonDiv"></div> 
			</div>
		);
	}
}

export default GoogleAuth;