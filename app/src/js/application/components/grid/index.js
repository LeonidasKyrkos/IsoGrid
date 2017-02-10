import { rows, cols, colWidth, rowHeight, cvWidth as width, cvHeight as height } from '../../constants/dimensions';
import { updateSquareTerrain, addSquares } from '../../actions';
import Square from '../../components/square';
import deepEqual from 'deep-equal';
import { instantiateImages, instantiateAnimationImages } from '../../utils/instantiateImages';
import { getSquarePoints } from '../../utils/getSquarePoints';
import { assets as html } from '../../constants/html';
import { refreshRate } from '../../constants/settings';
import { updateAnimationHandler } from '../animations/submodules/updateHandlers';
import _ from 'lodash';

// Grid build system. It takes whatever data we give it and spits out a grid to match. 
// Doesn't have any update methods. It just diffs the new state and triggers a re-render where necessary.

// TODOS at bottom

export default class Grid {
	constructor(store, canvas) {
		this.store = store;		
		this.wrap = document.getElementById('isogrid');
		this.lastRender = 0;

		this.canvases = {
			terrain: {
				canvas: document.querySelector('[data-js="isogrid.canvas"][data-canvas="terrain"]'),
				selector: (state) => {
					return state.gridSquares;
				},
				render: (gridSquares) => {
					this.canvases.terrain.ctx.clearRect(0, 0, width, height);

					gridSquares.forEach((row,i)=>{
						row.forEach((square,i)=>{
							this.drawGridSquare(square,'terrain');
						});
					});
				}
			},
			animation: {
				canvas: document.querySelector('[data-js="isogrid.canvas"][data-canvas="animation"]'),
				selector: (state) => {
					return state.animations;
				},
				render: (animations) => {
					if(!animations || animations && !animations.length) { return };
					updateAnimationHandler(this.store);					
					this.drawAnimations(animations);					
				}
			},
			structure: {
				canvas: document.querySelector('[data-js="isogrid.canvas"][data-canvas="structure"]'),
				selector: (state) => {
					return state.gridSquares;
				},
				render: (gridSquares) => {
					gridSquares.forEach((row,i)=>{
						row.forEach((square,i)=>{
							this.drawGridSquare(square,'structure')
						});
					});
				}
			}				
		}

		this.init();
	}

	init() {
		const state = this.store.getState();
		this.setup();
		
		if(!state.gridSquares || state.gridSquares && !state.gridSquares.length) {
			this.setupGridSquares();
		}
		
		// load images and render when complete
		let terrain = instantiateImages(state.assets.terrain);
		let structure = instantiateImages(state.assets.structure);

		let animations = instantiateAnimationImages(state.assets.animations);

		terrain.then( terrain => {
			this.terrain = terrain;
		})

		structure.then( structure => {
			this.structure = structure;
		});

		animations.then( animations => {
			this.animations = animations;
		})

		Promise.all([terrain, structure, animations]).then(()=>{
			this.startRendering();
		});
	}

	setup() {
		for(let name in this.canvases) {
			let subCanvas = this.canvases[name];
			subCanvas.canvas.width = width;
			subCanvas.canvas.height = height;
			subCanvas.ctx = subCanvas.canvas.getContext('2d');
			subCanvas.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
		}
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

	drawGradient() {
		const gradient = this.ctx.createLinearGradient(0,0,0,height);
		gradient.addColorStop(0,'rgba(36,134,197,0.3)');
		gradient.addColorStop(0.2,'rgba(36,134,197,0)');
		gradient.addColorStop(0.8,'rgba(36,134,197,0)');
		gradient.addColorStop(1,'rgba(36,134,197,0.3)');
		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, width, height);
	}

	htmlLoop(gridSquares) {
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
	}

	drawGridSquare(square,type) {
		if(square && square.brushes && square.brushes[type] && this[type][square.brushes[type]]) {
			const ctx = this.canvases[type].ctx;
			const tID = square.brushes[type];
			const image = this[type][tID].image;
			const offsetY = this[type][tID].offsetY || 0;
			const offsetX = this[type][tID].offsetX || 0;
			const row = square.position.row;
			const col = square.position.col;

			const x = row % 2 === 0 ? colWidth * col : (colWidth * col) +  colWidth/2;
			const y = ((rowHeight / 2) * row) + rowHeight/2 + 8;

			if(image) {
				ctx.drawImage(image, x + offsetX, (y - image.height/2) + offsetY);
			}
		}
	}

	drawAnimations(animations) {
		const ctx = this.canvases.animation.ctx;
		
		animations.forEach( animation => {
			if(!animation.active) { return };
			const aID = animation.type;
			const image = this.animations[aID].images[animation.direction].image;
			const offsetX = -image.width/2;
			const offsetY = -image.height/2;
			let currentCoordinates = animation.currentCoordinates;
			const previousImage = animation.previousDirection ? this.animations[aID].images[animation.previousDirection].image : image;

			if(animation.previousCoordinates && previousImage) {
				ctx.clearRect(animation.previousCoordinates.x, animation.previousCoordinates.y, previousImage.width, previousImage.height);
			}

			if(image && currentCoordinates) {
				const x = currentCoordinates.x + offsetX + animation.offsetX;
				const y = currentCoordinates.y + offsetY + animation.offsetY;

				ctx.drawImage(image, x, y);
				animation.previousCoordinates = { x, y };
			}
		})
	}

	addHtml(square, wrap) {
		const row = square.position.row;
		const col = square.position.col;
		const x = row % 2 === 0 ? colWidth * col : (colWidth * col) +  colWidth/2;
		const y = ((rowHeight / 2) * row) + rowHeight/2;

		if(square && square.brushes && square.brushes.html && html[square.brushes.html]) {
			let htmlObj = html[square.brushes.html];
			let el = htmlObj.template.cloneNode(true);
			el.removeAttribute('id');
			el.setAttribute('style',`position: absolute; left: ${x}px; top: ${y - htmlObj.height}px; width: ${htmlObj.width}px; height: ${htmlObj.height}px;`);
			wrap.appendChild(el);
		}
	}

	startRendering() {
		window.requestAnimationFrame(()=>{
			if(Date.now() - this.lastRender >= refreshRate) {
				this.lastRender = Date.now();
				this.handleChange();
			}
			this.startRendering();
		})
	}

	stopRendering() {
		clearInterval(this.renderInterval);
	}

	handleChange() {
		let state = this.store.getState();

		for(let name in this.canvases) {
			let subCanvas = this.canvases[name];
			let newVal = subCanvas.selector(state);

			if(name = 'animation' && state.animations && state.animations.length) {
				subCanvas.render(newVal);
			}

			if(name = 'animation' !== 'animation' && typeof subCanvas.current === 'undefined' || !deepEqual(subCanvas.current, newVal)) {
				subCanvas.render(newVal);
				subCanvas.current = _.cloneDeep(newVal);
			}
		}

	}

	select(state) {
		return state.gridSquares;
	}
}

// TODO:
// Should definitely cut down on the amount of things being rendered. Ideal situation would be re-rendering
// on a square by square basis but that's unlikely considering the >1 square spanning structures. Current
// bet involves rendering the curent row and some number of subsequent rows. Maybe if the tallest structure
// in the map = 6 rows then we render our updated square's row and the next 6 rows after it. Seems lazy but 
// would be an improvement.