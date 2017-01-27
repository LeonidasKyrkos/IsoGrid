import { ADD_SQUARES, UPDATE_SQUARE_TERRAIN, ADD_TERRAIN, CHANGE_BRUSH } from '../actions';
import _ from 'lodash';

const isoGrid = (state = initialState, action) => {
	switch(action.type){
		case ADD_SQUARES:
			return Object.assign({}, state, { gridSquares: action.squares });

		case UPDATE_SQUARE_TERRAIN:
			let UST_newState = _.cloneDeep(state);
			UST_newState.gridSquares[action.data.squareID].terrainID = action.data.terrainID;
			return UST_newState;

		case ADD_TERRAIN:
			return state;

		case CHANGE_BRUSH:
			return Object.assign({}, state, {
				activeBrush: action.id
			});

		default:
			return state;
	}
}

export default isoGrid;