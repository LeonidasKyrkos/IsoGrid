import { sqWidth as width, sqHeight as height } from '../../constants/dimensions';

export default class Square {
	constructor( { row, col }, id) {
		this.position = { row, col };
		this.width = width;
		this.height = height;
		this.brushes = { terrain: 1, structure: 0, html: 0 };
	}
}