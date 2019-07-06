import createRouter from 'router5'
import routes from './routes'

export default function configureRouter() {
	const routerOptions = {
		defaultRoute: 'main'
	};
	const router = createRouter(routes, routerOptions);
	return router
}
