import { configure } from '@storybook/react';
function loadStories() {
	console.log('Running the loadStories() function');
	const req = require.context('../stories', true, /\.stories\.js$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
