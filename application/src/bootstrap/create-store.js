/**
 * Responsible for creating the application's state store.
 * @module bootstrap
 */

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { router5Middleware, router5Reducer } from 'redux-router5'
import { createLogger } from 'redux-logger'

/**
 * Creates the application state store.
 * @param {Router} router 
 * @param {Reducer} rootReducer 
 * @param {Object} initialState 
 * @returns {Store}
 */
export default function configureStore(router, rootReducer, initialState) {
	let reduxMiddleware = [];
	reduxMiddleware.push(router5Middleware(router));
	if (process.env.NODE_ENV === `development`){
		reduxMiddleware.push(createLogger());
	}
	const createStoreWithMiddleware = applyMiddleware(reduxMiddleware)(createStore);
	return createStoreWithMiddleware(rootReducer,initialState);
}
