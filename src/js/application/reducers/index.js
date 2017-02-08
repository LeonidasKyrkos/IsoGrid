import { ADD_SQUARES, UPDATE_SQUARE_TERRAIN, ADD_TERRAIN, CHANGE_BRUSH, UPDATE_ANIMATIONS, UPDATE_ANIMATION_MODE, ADD_ANIMATION } from '../actions';
import _ from 'lodash';

const isoGrid = (state = initialState, action) => {
	switch(action.type){
		case ADD_SQUARES:
			return {...state, gridSquares: action.squares };

		case UPDATE_SQUARE_TERRAIN:
			let UST_newState = _.cloneDeep(state);
			let square = UST_newState.gridSquares[action.data.row][action.data.col];

			square.brushes[action.data.brushType] = action.data.brushID;

			return UST_newState;

		case ADD_TERRAIN:
			return state;

		case CHANGE_BRUSH:
			return Object.assign({}, state, {
				settings: {
					...state.settings,
					activeBrush: {
						type: action.brush.type,
						id: action.brush.id
					}
				}				
			});

		case ADD_ANIMATION:
			return Object.assign({}, state, {
				assets: {
					...state.assets,
					animations: {
						...state.assets.animations,
						instances: [
							...state.assets.animations.instances,
							action.animation
						]
					}
				}
			});

		case UPDATE_ANIMATIONS:
			return Object.assign({}, state, {
				assets: {
					...state.assets,
					animations: action.payload
				}				
			});

		case UPDATE_ANIMATION_MODE:
			return Object.assign({}, state, {
				settings: {
					...state.settings,
					animationMode: action.payload
				}
			});

		default:
			return state;
	}
}

export default isoGrid;