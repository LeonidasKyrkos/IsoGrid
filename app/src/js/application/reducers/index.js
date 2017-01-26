import { ADD_SQUARE, UPDATE_SQUARE_TERRAIN, ADD_TERRAIN, CHANGE_BRUSH } from '../actions';

const isoGrid = (state = initialState, action) => {
	let id;
	let newState = {};

	switch(action.type){
		case ADD_SQUARE:
			id = action.square.id;
			newState = Object.assign({}, state);
			newState.gridSquares[id] = action.square;
			return newState;

		case UPDATE_SQUARE_TERRAIN:
			id = action.id;
			newState = Object.assign({}, state);
			newState.gridSquares[action.id].terrainID = state.activeBrush;
			return newState;

		case ADD_TERRAIN:
			return state;

		case CHANGE_BRUSH:
			newState = Object.assign({}, state, {
				activeBrush: action.id
			})
			return newState;

		default:
			return state;
	}
}

export default isoGrid;