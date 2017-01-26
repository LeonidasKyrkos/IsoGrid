export const ADD_ROW = 'ADD_ROW';
export const ADD_SQUARE = 'ADD_SQUARE';
export const UPDATE_SQUARE_TERRAIN = 'UPDATE_SQUARE_TERRAIN';
export const ADD_TERRAIN = 'ADD_TERRAIN';
export const CHANGE_BRUSH = 'CHANGE_BRUSH';

export const addRow = (row) => {
	return {
		type: ADD_ROW,
		row
	}
}

export const addSquare = (square) => {
	return {
		type: ADD_SQUARE,
		square
	}
}

export const updateSquareTerrain = (id) => {
	return {
		type: UPDATE_SQUARE_TERRAIN,
		id
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