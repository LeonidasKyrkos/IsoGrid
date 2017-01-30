import Grid from './components/grid/';
import Palette from './components/palette/';
import dragscroll from 'dragscroll';
import { findSquare } from './utils/findSquare';
import { sqWidth, sqHeight } from './constants/dimensions';
import { updateSquareTerrain } from './actions';
import pushStateToFirebase from './utils/pushStateToFirebase';

export default class IsoGrid {
	constructor(store) {
		this.canvas = document.getElementById('isogrid');
		this.canvasWrap = this.canvas.parentNode;
		this.store = store;
		this.firebasePushButton = document.querySelector('[data-js="pushToFirebase"]');
		this.saveAlert = document.querySelector('[data-js="saveAlert"]');

		this.init();
	}

	init() {
		this.grid = new Grid(this.store, this.canvas);
		this.palette = new Palette(this.store);
		this.eventListeners();
	}

	eventListeners() {
		this.canvas.addEventListener('dblclick',this.handleClick.bind(this));

		this.saveAlert.addEventListener('click',(e)=>{
			this.saveAlert.classList.add('hide');
			this.saveAlert.innerHTML = 'Loading...';
		});

		this.firebasePushButton.addEventListener('click',(e)=>{
			this.onSave();
		});
	}

	handleClick(e) {
		const x = e.x + this.canvasWrap.scrollLeft;
		const y = e.y + this.canvasWrap.scrollTop;
		const square = findSquare(x, y, this.store);

		if(square) {
			const col = square.position.col;
			const row = square.position.row;
			const terrainID = this.store.getState().activeBrush;

			this.store.dispatch(updateSquareTerrain({ col, row, terrainID }));
		}
	}

	onSave(e) {
		this.saveAlert.classList.remove('hide');

		let state = this.store.getState();
		let promise = new Promise((resolve,reject)=>{
			pushStateToFirebase(state, resolve, reject);
		});

		promise.then((status)=>{
			this.saveAlert.innerHTML = status;
		});

		promise.catch((status)=>{
			this.saveAlert.innerHTML = status;
		})
	}
}