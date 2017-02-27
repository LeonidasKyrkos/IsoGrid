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

const mobile = window.innerWidth < 750;
const loaded = new Event('loaded');
const body = document.getElementById('body');

export default class Grid {
	constructor(store, canvas) {
		this.store = store;		
		this.wrap = document.getElementById('isogrid');
		this.lastRender = 0;
		this.setupCanvases();
		this.init();
		this.paused = false;
	}

	init() {
		const state = this.store.getState();
		this.setup();
		
		if(!state.gridSquares || state.gridSquares && !state.gridSquares.length) {
			this.setupGridSquares();
		}

		this.loadImages(state);
		this.attachEventHandlers();
	}

	loadImages(state) {
		// load images and render when complete
		let terrain = instantiateImages(state.assets.terrain);
		let structure = instantiateImages(state.assets.structure);
		let structureUnder = instantiateImages(state.assets.structureUnder);
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

		structureUnder.then( subStructures => {
			this.structureUnder = subStructures;
		})

		Promise.all([terrain, structure, structureUnder, animations]).then(()=>{
			this.startRendering();			
			this.handleChange();
			this.store.subscribe(this.handleChange.bind(this));
		});
	}

	setup() {
		for(let name in this.canvases) {
			let subCanvas = this.canvases[name];
			subCanvas.canvas.width = width;
			subCanvas.canvas.height = height;
			subCanvas.ctx = subCanvas.canvas.getContext('2d');
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

	htmlLoop(gridSquares) {
		let wrap = document.getElementById('htmlwrap');
		if(wrap) { wrap.remove() };
		wrap = document.createElement('div');
		wrap.setAttribute('id','htmlwrap');
		this.store.getState().gridSquares.forEach((row,i)=>{
			row.forEach((square,i)=>{
				this.addHtml(square,wrap);
			});
		});
		this.wrap.appendChild(wrap);
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
				ctx.drawImage(image, Math.floor(x + offsetX),Math.floor((y - image.height/2) + offsetY));
			}
		}
	}

	drawAnimations(animations) {		
		animations.forEach( animation => {
			if(!animation.active) { return };
			const ctx = animation.zIndex === 0 ? this.canvases.animationUnder.ctx : this.canvases.animation.ctx;
			const aID = animation.type;
			const image = this.animations[aID].images[animation.direction].image;
			const offsetX = -image.width/2;
			const offsetY = -image.height/2;
			const currentCoordinates = animation.currentCoordinates;
			const previousImage = animation.previousDirection ? this.animations[aID].images[animation.previousDirection].image : image;

			if(animation.previousCoordinates && previousImage) {
				ctx.clearRect(animation.previousCoordinates.x - previousImage.width/2, animation.previousCoordinates.y - previousImage.height/2, previousImage.width + 25, previousImage.height + 25);
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
			if(!this.paused && performance.now() - this.lastRender >= refreshRate) {
				this.lastRender = performance.now();
				this.render();
			}
			this.startRendering();
		})

		if(this.lastRender === 0) {
			document.getElementById('isogridWrap').dispatchEvent(loaded);
		}
	}

	render() {
		const state = this.store.getState();

		for(let name in this.canvases) {
			let subCanvas = this.canvases[name];

			if(!mobile && (name === 'animation' || name === 'animationUnder') && state.animations && state.animations.length) {
				subCanvas.render(state.animations);
			}

			if(subCanvas.queued) {
				subCanvas.render(state.gridSquares);
				subCanvas.queued = false;
			}
		}
	}

	handleChange() {
		let state = this.store.getState();
		
		Object.keys(this.canvases).forEach(name => {
			if(name === 'animation' || name === 'animationUnder') { return };

			let subCanvas = this.canvases[name];
			let newVal = subCanvas.selector(state);
			
			if(typeof subCanvas.current === 'undefined' || !deepEqual(subCanvas.current, newVal)) {				
				subCanvas.queued = true;
				subCanvas.current = _.cloneDeep(newVal);
			}
		});
	}

	select(state) {
		return state.gridSquares;
	}

	attachEventHandlers() {
		window.addEventListener('mousedown',this.pause.bind(this));
		window.addEventListener('mouseup',this.unpause.bind(this));
	}

	pause() {
		body.classList.add('scrolling');
		this.paused = true;
	}

	unpause() {
		body.classList.remove('scrolling');
		this.paused = false;
	}

	setupCanvases() {
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
				canvas: document.querySelector('[data-js="isogrid.canvas"][data-canvas="animation.over"]'),
				selector: (state) => {
					return state.animations.filter(animation => animation.zIndex > 0);
				},
				render: (animations) => {
					if(!animations || animations && !animations.length) { return };
					updateAnimationHandler(this.store);					
					this.drawAnimations(animations);
				}
			},
			animationUnder: {
				canvas: document.querySelector('[data-js="isogrid.canvas"][data-canvas="animation.under"]'),
				selector: (state) => {
					return state.animations.filter(animation => animation.zIndex === 0);
				},
				render: (animations) => {
					if(!animations || animations && !animations.length) { return };
					updateAnimationHandler(this.store);					
					this.drawAnimations(animations);					
				}
			},
			structure: {
				canvas: document.querySelector('[data-js="isogrid.canvas"][data-canvas="structure.over"]'),
				selector: (state) => {
					return state.gridSquares.map(row => {
						return row.filter(square => square.brushes.structure > 0 || square.brushes.html !== 0);
					});
				},
				render: (gridSquares) => {
					this.canvases.structure.ctx.clearRect(0, 0, width, height);

					gridSquares.forEach((row,i)=>{
						row.forEach((square,i)=>{
							this.drawGridSquare(square,'structure')
						});
					});

					this.htmlLoop();
				}
			},
			structureUnder: {
				canvas: document.querySelector('[data-js="isogrid.canvas"][data-canvas="structure.under"]'),
				selector: (state) => {
					return state.gridSquares.map(row => {
						return row.filter(square => square.brushes.structureUnder > 0);
					});
				},
				render: (gridSquares) => {
					this.canvases.structureUnder.ctx.clearRect(0, 0, width, height);

					gridSquares.forEach((row,i)=>{
						row.forEach((square,i)=>{
							this.drawGridSquare(square,'structureUnder')
						});
					});
				}
			}
		}
	}
}