import React, { Component} from 'react';
import { storiesOf } from '@storybook/react';

class UserProfileForm extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
			<div>
				<p>The User Profile Form</p>
			</div>
		);
	}
}

storiesOf('User Profile', module)
	.add('First Story', () => (
		<UserProfileForm />
	));
