import React, { Component} from 'react';

import './BasicAuthForm.css';

class BasicAuthForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			credential:{
				scheme: '',
				host: '',
				port: '',
				uri: '',
				username: '',
				password: ''
			}
		};
		this.schemeTextBox = React.createRef();
		this.hostTextBox = React.createRef();
		this.portNumBox = React.createRef();
		this.uriTextBox = React.createRef();
		this.usernameTextBox = React.createRef();
		this.passwordPwdBox = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateCredentialState = this.updateCredentialState.bind(this);
		this.handleSchemeChange = this.handleSchemeChange.bind(this);	
		this.handleHostChange = this.handleHostChange.bind(this);	
		this.handlePortChange = this.handlePortChange.bind(this);	
		this.handleURIChange = this.handleURIChange.bind(this);	
		this.handleUsernameChange = this.handleUsernameChange.bind(this);	
		this.handlePasswordChange = this.handlePasswordChange.bind(this);	
	}

	handleSubmit(event) {	
		alert(JSON.stringify(this.state, undefined, 2));
		//This needs to fire an Action...
		event.preventDefault()
	}

	updateCredentialState(key, value){
		let modifiedCredential = {};
		modifiedCredential[key] = value;
		let credential = Object.assign({}, this.state.credential, modifiedCredential);
		let nextState = Object.assign({}, this.state, { credential: credential});
		this.setState(nextState);
	}

	handleSchemeChange(event){
		this.updateCredentialState('scheme', event.target.value);
	}
	
	handleHostChange(event){
		this.updateCredentialState('host', event.target.value);
	}
	
	handlePortChange(event){
		this.updateCredentialState('port', event.target.value);
	}

	handleURIChange(event){
		this.updateCredentialState('uri', event.target.value);
	}
	
	handleUsernameChange(event){
		this.updateCredentialState('username', event.target.value);
	}
	
	handlePasswordChange(event){
		this.updateCredentialState('password', event.target.value);
	}

	/*
	- scheme: http, https
	- host: e.g. localhost, google.com
	- port: empty, 8080
	- uri: /api/auth
	- username: string
	- password: string
	*/
	render(){
		return (
		<div className="basic-auth-form">
			<p>Basic Auth Form</p>
			<form onSubmit={this.handleSubmit}>
				<div className="sd-column">
					<div>
						<label>Scheme
							<input type="text" className="form-control"
								id="scheme-txt-field"
								ref={this.schemeTextBox}
								value={this.state.credential.scheme}
								onChange={this.handleSchemeChange}
								required pattern="[A-Za-z]+"
								autoFocus/>
						</label>
					</div>
					<div>
						<label>Host
							<input type="text" className="form-control"
								id="host-txt-field"
								ref={this.hostTextBox}
								value={this.state.credential.host}
								onChange={this.handleHostChange}
								required pattern="[A-Za-z]+"/>
						</label>
					</div>
					<div>
						<label>Port
							<input type="number" className="form-control"
								id="port-num-field"
								ref={this.portNumBox}
								value={this.state.credential.port}
								onChange={this.handlePortChange}
								min="0" max="9999" required/>
						</label>
					</div>
					<div>
						<label>URI
							<input type="text" className="form-control"
								id="uri-txt-field"
								ref={this.uriTextBox}
								value={this.state.credential.uri}
								onChange={this.handleURIChange}
								required pattern="[A-Za-z]+"/>
						</label>
					</div>
					<div>
						<label>Username
							<input type="text" className="form-control"
								id="username-txt-field"
								ref={this.usernameTextBox}
								value={this.state.credential.username}
								onChange={this.handleUsernameChange}
								required/>
						</label>
					</div>
					<div>
						<label>Password
							<input type="password" className="form-control"
								id="password-pwd-field"
								ref={this.passwordPwdBox}
								value={this.state.credential.password}
								onChange={this.handlePasswordChange}
								required/>
						</label>
					</div>
					<div>
						<input type="submit" value="Save" />
					</div>
				</div>
			</form>
		</div>);
	}
}

export default BasicAuthForm;
