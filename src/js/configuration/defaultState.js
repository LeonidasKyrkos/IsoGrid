import { terrain } from '../application/constants/terrain';
import { structure } from '../application/constants/structure';
import { animations } from '../application/constants/animations';

export const defaultState = {
	assets: {
		terrain,
		structure,
		animations
	},
	gridSquares: [],
	settings: {
		activeBrush: {
			type: 'terrain',
			id: 0
		},
		buildMode: true,
		animationMode: false,
		debug: true
	}
}