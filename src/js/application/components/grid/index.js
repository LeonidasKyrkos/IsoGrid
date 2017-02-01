import { rows, cols, cvWidth as width, cvHeight as height } from '../../constants/dimensions';
import { updateSquareTerrain, addSquares } from '../../actions';
import Square from '../../components/square';
import deepEqual from 'deep-equal';
import { instantiateImages } from '../../utils/instantiateTerrain';
import { getSquarePoints } from '../../utils/getSquarePoints';
import { assets as html } from '../../constants/html';
import _ from 'lodash';


export default class Grid {
	constructor(store, canvas) {
		this.store = store;
		this.canvas = canvas;
		this.canvasWrap = this.canvas.parentNode;
		this.currentValue = {};

		this.init();
	}

	init() {
		const state = this.store.getState();
		this.setupCanvas();
		
		if(!state.gridSquares.length) {
			this.setupGridSquares();
		}
		
		// load images and render when complete
		let terrain = instantiateImages(state.assets.terrain);
		let structure = instantiateImages(state.assets.structure);

		terrain.then((terrain)=>{
			this.terrain = terrain;
		})

		structure.then((structure)=>{
			this.structure = structure;
		});

		Promise.all([terrain,structure]).then(()=>{
			this.startRendering();
		});
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
		let state = this.store.getState();
		let gridSquares = state.gridSquares;

		gridSquares.forEach((row,i)=>{
			row.forEach((square,i)=>{
				this.drawTerrain(square);
			});
		});

		gridSquares.forEach((row,i)=>{
			row.forEach((square,i)=>{
				this.drawStructures(square);
			});
		});

		let wrap = document.getElementById('htmlwrap');
		if(wrap) { wrap.remove() };
		wrap = document.createElement('div');
		wrap.setAttribute('id','htmlwrap');
		gridSquares.forEach((row,i)=>{
			row.forEach((square,i)=>{
				this.addHtml(square,wrap);
			});
		});
		this.canvasWrap.appendChild(wrap);

		// performance testing [active with debug flag in settings]
		let finish = Math.floor(window.performance.now() - start);
		state.settings.debug && console.log(`${finish}ms to render`);
	}

	drawTerrain(square) {
		if(square && square.brushes && square.brushes.terrain && this.terrain[square.brushes.terrain]) {
			const tID = square.brushes.terrain;
			const image = this.terrain[tID].image;
			const offsetY = this.terrain[tID].offsetY || 0;
			const row = square.position.row;
			const col = square.position.col;

			const x = row % 2 === 0 ? square.width * col : (square.width * col) +  square.width/2;
			const y = ((square.height / 2) * row) + square.height/2;

			this.ctx.globalCompositeOperation = 'source-over';

			if(image) {
				this.ctx.drawImage(image, x, (y - image.height/2 + 8) + offsetY);
			}
		}
	}

	drawStructures(square) {
		if(square && square.brushes && square.brushes.structure && this.structure[square.brushes.structure]) {
			const sID = square.brushes.structure;
			const image = this.structure[sID].image;
			const offsetY = this.structure[sID].offsetY || 0;
			const row = square.position.row;
			const col = square.position.col;

			const x = row % 2 === 0 ? square.width * col : (square.width * col) +  square.width/2;
			const y = ((square.height / 2) * row) + square.height/2;

			this.ctx.globalCompositeOperation = 'source-over';

			if(image) {
				this.ctx.save();
				this.ctx.translate(x + image.width/2, (y - image.height/2 + 8) + offsetY + image.height/2);				
				this.ctx.drawImage(image, -image.width/2, -image.height/2);
				this.ctx.restore();
			}
		}
	}

	addHtml(square, wrap) {
		const row = square.position.row;
		const col = square.position.col;
		const x = row % 2 === 0 ? square.width * col : (square.width * col) +  square.width/2;
		const y = ((square.height / 2) * row) + square.height/2;

		if(square && square.brushes && square.brushes.html && html[square.brushes.html]) {
			let htmlObj = html[square.brushes.html];
			let el = htmlObj.template.cloneNode(true);
			el.removeAttribute('id');
			el.setAttribute('style',`position: absolute; left: ${x}px; top: ${y - htmlObj.height}px; width: ${htmlObj.width}px; height: ${htmlObj.height}px;`);
			wrap.appendChild(el);
		}
	}

	startRendering() {
		this.renderInterval = setInterval(this.handleChange.bind(this), 16);
	}

	stopRendering() {
		clearInterval(this.renderInterval);
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