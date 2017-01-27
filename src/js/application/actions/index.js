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

export const updateSquareTerrain = ({col, row, terrainID}) => {
	return {
		type: UPDATE_SQUARE_TERRAIN,
		data: {
			col,
			row,
			terrainID
		}
	}
}

export const addTerrain = (imgSource) => {
	return {
		type: ADD_TERRAIN,
		terrainID
	}
}

export const changeBrush = (id) => {
	return {
		type: CHANGE_BRUSH,
		id
	}
}