import Grid from './components/grid/';
import Palette from './components/palette/';
import dragscroll from 'dragscroll';
import { findSquare } from './utils/findSquare';
import { colWidth as sqWidth, rowHeight as sqHeight } from './constants/dimensions';
import { updateSquareTerrain } from './actions';
import pushStateToFirebase from './utils/pushStateToFirebase';
import { saveStateToLocalStorage, clearLocalStorage } from './utils/localStorage';

export default class IsoGrid {
	constructor(store) {
		this.canvas = document.getElementById('isogrid');
		this.canvasWrap = this.canvas.parentNode;
		this.store = store;
		this.firebasePushButton = document.querySelector('[data-js="pushToFirebase"]');
		this.saveAlert = document.querySelector('[data-js="saveAlert"]');
		this.clearCache = document.querySelector('[data-js="clearCache"]');
		this.animationMode = this.selectAnimationMode(this.store.getState());

		this.init();
	}

	init() {
		this.grid = new Grid(this.store, this.canvas);
		this.palette = new Palette(this.store);
		this.eventListeners();
		this.store.subscribe(this.handleChange.bind(this));
	}

	eventListeners() {
		this.canvas.addEventListener('dblclick',this.handleClick.bind(this));

		this.saveAlert.addEventListener('click',(e)=>{
			this.saveAlert.classList.add('hide');
			this.saveAlert.innerHTML = 'Loading...';
		});

		this.firebasePushButton.addEventListener('click',this.onSave.bind(this));

		this.clearCache.addEventListener('click',clearLocalStorage);
	}

	handleChange() {
		let previousValue = this.animationMode;
		this.animationMode = this.selectAnimationMode(this.store.getState());

		if(previousValue !== this.animationMode) {
			this.animationMode ? this.activateAnimationClass() : this.removeAnimationClass();
		}
	}

	activateAnimationClass() {
		this.canvas.classList.add('animationMode');
	}

	removeAnimationClass() {
		this.canvas.classList.remove('animationMode');
	}

	handleClick(e) {
		const x = e.x + this.canvasWrap.scrollLeft;
		const y = e.y + this.canvasWrap.scrollTop;
		const square = findSquare(x, y, this.store);
		let state = this.store.getState();

		if(square) {
			const col = square.position.col;
			const row = square.position.row;
			const brushType = state.settings.activeBrush.type;
			const brushID = state.settings.activeBrush.id;

			this.store.dispatch(updateSquareTerrain({ col, row, brushType, brushID }));
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

	selectAnimationMode(state) {
		return state.settings.animationMode;
	}
}