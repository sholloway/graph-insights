import React from 'react';
import { storiesOf } from '@storybook/react';

import UserProfileForm from './../src/components/user/profile/UserProfileForm';

storiesOf('User Profile', module)
	.add('First Story', () => (
		<UserProfileForm />
	));
