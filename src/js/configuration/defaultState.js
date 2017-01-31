import { terrain } from '../application/constants/terrain';
import { buildings } from '../application/constants/buildings';

export const defaultState = {
	assets: {
		terrain: [],
		structures: []
	},
	gridSquares: [],
	settings: {
		activeBrush: {
			type: 'terrain',
			id: 0
		},
		buildMode: true,
		debug: true
	}
}