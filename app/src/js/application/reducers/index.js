import { ADD_ROW, ADD_SQUARE } from '../actions';
import { UPDATE_SQUARE_TERRAIN } from '../actions';
import { ADD_TERRAIN } from '../actions';

const isoGrid = (state = initialState, action) => {
	let newState = state;

	switch(action.type){
		case ADD_ROW:
			newState.gridRows.push([]);
			return newState;
		case ADD_SQUARE:
			newState.gridRows[action.square.position.row].push(action.square);
			return newState;
		case UPDATE_SQUARE_TERRAIN:
			newState.gridRows[action.row][action.col].terrainID = action.terrainID;
			return newState;
		case ADD_TERRAIN:
			console.log(action.terrainID);
			return state;
		default:
			return state;
	}
}

export default isoGrid;