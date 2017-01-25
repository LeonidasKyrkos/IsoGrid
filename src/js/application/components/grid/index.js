import { render } from './render';
import { setup } from './setup';
import { rows, cols, cvWidth as width, cvHeight as height } from '../../constants/dimensions';
import { updateSquareTerrain, addRow, addSquare } from '../../actions';
import Square from '../../components/Square';

export default class Grid {
	constructor(store, canvas) {
		this.store = store;
		this.canvas = canvas;

		this.init();
	}

	init() {
		this.setupCanvas();
		this.setup();
		this.render();
	}

	setupCanvas() {
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');
	}

	setup() {
		for(let row = 0; row < rows; row++) {
			this.store.dispatch(addRow());

			for(let col = 0; col < cols; col++) {
				let gridSquare = new Square(row, col);
				this.store.dispatch(addSquare(gridSquare));
			}
		}
	}

	render(store, context) {
		this.store.getState().gridRows.forEach((row,i)=>{
			row.forEach((square,i)=>{
				this.drawSquare(square);
			})
		});
	}

	// Paints the provided square.
	drawSquare = (square) => {
		const points = square.points;

		let counter = 0;
		this.ctx.beginPath();

		for (let prop in points) {
			if (!counter) {
				this.ctx.moveTo(points[prop].x, points[prop].y);
				counter++;
			} else {
				this.ctx.lineTo(points[prop].x, points[prop].y);
			}
		}

		this.ctx.stroke();
	}
}