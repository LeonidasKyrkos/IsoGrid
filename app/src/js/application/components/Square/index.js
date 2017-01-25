import { sqWidth as width, sqHeight as height } from '../../constants/dimensions';

export default class Square {
	constructor(row, col) {
		this.position = { row, col };
		this.width = width;
		this.height = height;
		this.terrainID = 1;
		this.points = this.getPoints(row, col);
	}

	getPoints(row, col) {
		const x1 = row % 2 === 0 ? width * col : (width + width/2) * col;
		const x2 = x1 + (width/2);
		const x3 = x1 + width;
		const x4 = x2;
		const y1 = ((height / 2) * row) + height/2;
		const y2 = y1 - height/2;
		const y3 = y1;
		const y4 = y2 + height;

		return {
			1: {
				x: x1,
				y: y1
			},
			2: {
				x: x2,
				y: y2
			},
			3: {
				x: x3,
				y: y3
			},
			4: {
				x: x4,
				y: y4
			},
			5: {
				x: x1,
				y: y1
			}
		}
	}
}