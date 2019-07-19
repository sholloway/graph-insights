import createRouter from 'router5'
import loggerPlugin from 'router5/plugins/logger';
import routes from './routes'

export default function configureRouter() {
	const routerOptions = {
		defaultRoute: 'main'
	};
	const router = createRouter(routes, routerOptions);
	if (process.env.NODE_ENV === `development`){
		router.usePlugin(loggerPlugin);
	}
	return router
}
