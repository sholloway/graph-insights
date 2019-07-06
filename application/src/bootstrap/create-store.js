import { createStore, applyMiddleware, combineReducers } from 'redux'
import { router5Middleware, router5Reducer } from 'redux-router5'
import { createLogger } from 'redux-logger'

export default function configureStore(router, rootReducer, initialState) {
	const createStoreWithMiddleware = applyMiddleware(
		router5Middleware(router),
		createLogger()
	)(createStore);
	return createStoreWithMiddleware(rootReducer,initialState);
}
