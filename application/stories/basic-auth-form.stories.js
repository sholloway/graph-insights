import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicAuthForm from '../src/components/user/credentials/basicAuth/BasicAuthForm';

storiesOf('Basic Auth Form', module)
	.add('Happy Path', () => (
		<BasicAuthForm />
	));
