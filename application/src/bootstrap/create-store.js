import { createStore, applyMiddleware, combineReducers } from 'redux'
import { router5Middleware, router5Reducer } from 'redux-router5'
import { createLogger } from 'redux-logger'

export default function configureStore(router, rootReducer, initialState) {
	let  = [];
	reduxMiddleware.push(router5Middleware(router));
	if (process.env.NODE_ENV === `development`){
		reduxMiddleware.push(createLogger());
	}
	const createStoreWithMiddleware = applyMiddleware(reduxMiddleware)(createStore);
	return createStoreWithMiddleware(rootReducer,initialState);
}
