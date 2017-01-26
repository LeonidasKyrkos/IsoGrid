import { sqWidth as width, sqHeight as height } from '../../constants/dimensions';

export default class Square {
	constructor( { row, col }, id) {
		this.position = { row, col };
		this.id = id;
		this.width = width;
		this.height = height;
		this.terrainID = 1;
	}
}