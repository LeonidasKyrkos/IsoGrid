import { rows, cols, cvWidth as width, cvHeight as height } from '../../constants/dimensions';
import { updateSquareTerrain, addSquares } from '../../actions';
import Square from '../../components/square';
import deepEqual from 'deep-equal';
import { instantiateTerrain } from '../../utils/instantiateTerrain';
import { getSquarePoints } from '../../utils/getSquarePoints';
import _ from 'lodash';


export default class Grid {
	constructor(store, canvas) {
		this.store = store;
		this.canvas = canvas;
		this.currentValue = {};

		this.init();
	}

	init() {
		this.setupCanvas();
		
		if(!this.store.getState().gridSquares) {
			this.setupGridSquares();
		}

		let terrain = instantiateTerrain(this.store);

		terrain.then((terrain)=>{
			this.terrain = terrain;
			this.render();
			this.store.subscribe(this.handleChange.bind(this));	
		})
	}

	setupCanvas() {
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');
		this.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
	}

	setupGridSquares() {
		let gridSquares = [];

		for(let row = 0; row <= rows; row++) {
			let arr = [];
			for(let col = 0; col <= cols; col++) {
				let gridSquare = new Square({ row, col });
				arr.push(gridSquare);
			}
			gridSquares.push(arr);
		}

		this.store.dispatch(addSquares(gridSquares));
	}

	render() {
		this.ctx.clearRect(0, 0, width, height);
		let start = window.performance.now();
		let gridSquares = this.store.getState().gridSquares;

		gridSquares.forEach((row,i)=>{
			row.forEach((square,i)=>{
				this.drawTerrain(square);
			});
		});

		let finish = Math.floor(window.performance.now() - start);
		this.store.getState().debug && console.log(`${finish}ms to render`);
	}

	// Paints the provided square.
	drawSquare = (square) => {
		let counter = 0;
		this.ctx.beginPath();

		let points = getSquarePoints(square);

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

	drawTerrain = (square) => {
		let image = this.terrain[square.terrainID].image;
		let row = square.position.row;
		let col = square.position.col;

		let x = row % 2 === 0 ? square.width * col : (square.width * col) +  square.width/2;
		let y = ((square.height / 2) * row) + square.height/2;

		this.ctx.globalCompositeOperation = 'source-over';

		if(image) {
			this.ctx.drawImage(image, x, y - image.height/2 + 8);
		}
	}

	handleChange() {
		let newVal = this.select(this.store.getState());

		if(!deepEqual(newVal,this.currentValue,{ strict: true })) {
			this.currentValue = _.cloneDeep(newVal);
			this.render();
		}
	}

	select(state) {
		return state.gridSquares;
	}
}