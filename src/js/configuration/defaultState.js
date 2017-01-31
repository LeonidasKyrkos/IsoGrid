import { terrain } from '../application/constants/terrain';
import { structure } from '../application/constants/structure';

export const defaultState = {
	assets: {
		terrain,
		structure
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