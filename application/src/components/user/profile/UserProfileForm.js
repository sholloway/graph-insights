import React, { Component} from 'react';

import './UserProfileForm.css';

function validateEmail(emailValue){
	let pattern = /^[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z_+])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}$/;
	let email = emailValue.trim();
	let patternMatch = email.match(pattern);
	return (patternMatch != null);
}

class UserProfileForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			user:{
				username: '',
				firstName: '',
				lastName: '',
				emailAddress: ''
			},
			errorMsg: ''
		};
		this.usernameTextBox = React.createRef();
		this.firstNameTextBox = React.createRef();
		this.lastNameTextBox = React.createRef();
		this.emailTextBox = React.createRef();
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	updateUserProfileState(key, value){
		let modifiedProfile = {};
		modifiedProfile[key] = value;
		let userProfile = Object.assign({}, this.state.user, modifiedProfile);
		let nextState = Object.assign({}, this.state, { user: userProfile});
		this.setState(nextState);
	}

	handleUsernameChange(event){
		this.updateUserProfileState('username', event.target.value);
	}
	
	handleFirstNameChange(event){
		this.updateUserProfileState('firstName', event.target.value);
	}

	handleLastNameChange(event){
		this.updateUserProfileState('lastName', event.target.value);
	}
	
	handleEmailChange(event){
		this.updateUserProfileState('emailAddress', event.target.value);	
	}

	handleSubmit(event) {	
		alert(JSON.stringify(this.state.user, undefined, 2));
		//This needs to fire an Action...
		event.preventDefault()
	}

	render(){
		return (
			<div className="user-profile-form">
				<p>The User Profile Form</p>
				<form onSubmit={this.handleSubmit}>
					<div className="sd-column">
						<div>
							<label>Username
								<input type="text" className="form-control"
									id="username-txt-field"
									ref={this.usernameTextBox}
									value={this.state.username}
									onChange={this.handleUsernameChange}
									required pattern="[A-Za-z]+"
									autoFocus/>
							</label>
						</div>
						<div>
							<label>First Name
								<input type="text" className="form-control"
									id="first_name-txt-field"
									ref={this.firstNameTextBox}
									value={this.state.firstName}
									onChange={this.handleFirstNameChange}
									required pattern="[A-Za-z]+"/>
							</label>
						</div>
						<div className="sd-row">
							<label>Last Name
								<input type="text" className="form-control"
									id="last_name-txt-field"
									ref={this.lastNameTextBox}
									value={this.state.lastName}
									onChange={this.handleLastNameChange}
									required pattern="[A-Za-z]+"/>
							</label>
						</div>
						<div>
							<label>Email
								<input type="email" className="form-control"
									id="email-txt-field"
									ref={this.emailTextBox}
									value={this.state.emailAddress}
									onChange={this.handleEmailChange}
									required pattern="^[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z_+])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}$"/>
							</label>
						</div>
						<div>
							<input type="submit" value="Save" />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default UserProfileForm;
