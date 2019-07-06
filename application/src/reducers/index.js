import { combineReducers } from 'redux';
import {mainReducer} from './main';
import { router5Reducer } from 'redux-router5';

export default function createRootReducer(){
	return combineReducers({
		router: router5Reducer,
		mainReducer
	});
};
