export const ADD_SQUARES = 'ADD_SQUARES';
export const UPDATE_SQUARE_TERRAIN = 'UPDATE_SQUARE_TERRAIN';
export const ADD_TERRAIN = 'ADD_TERRAIN';
export const CHANGE_BRUSH = 'CHANGE_BRUSH';

export const addSquares = (squares) => {
	return {
		type: ADD_SQUARES,
		squares
	}
}

export const updateSquareTerrain = ({ col, row, brushType, brushID }) => {
	return {
		type: UPDATE_SQUARE_TERRAIN,
		data: {
			col,
			row,
			brushType,
			brushID			
		}
	}
}

export const addTerrain = (imgSource) => {
	return {
		type: ADD_TERRAIN,
		terrainID
	}
}

export const changeBrush = ({ type, id }) => {
	return {
		type: CHANGE_BRUSH,
		brush: { type, id }
	}
}