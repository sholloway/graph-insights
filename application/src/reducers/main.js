import * as MainActions from './../actions/MainActions';

let initialState = {};

export function mainReducer(state=initialState, action){
	let nextState;
	switch(action.type){
		//Add a case for each MainAction.
		default:
			nextState = state;
	}
	return nextState;
}
