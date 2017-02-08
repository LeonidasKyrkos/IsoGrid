import Grid from './components/grid/';
import Palette from './components/palette/';
import AnimationPalette from './components/animations';
import dragscroll from 'dragscroll';
import { findSquare } from './utils/findSquare';
import { colWidth as sqWidth, rowHeight as sqHeight } from './constants/dimensions';
import { updateSquareTerrain, updateAnimationMode, updateBuildMode } from './actions';
import pushStateToFirebase from './utils/pushStateToFirebase';
import { saveStateToLocalStorage, clearLocalStorage } from './utils/localStorage';

export default class IsoGrid {
	constructor(store) {
		this.canvas = document.getElementById('isogrid');
		this.canvasWrap = this.canvas.parentNode;
		this.store = store;
		this.elementSelectors();
		this.runSelectors();
		this.init();
	}

	elementSelectors() {
		this.firebasePushButton = document.querySelector('[data-js="pushToFirebase"]');
		this.animationModeButton = document.querySelector('[data-js="toggleAnimationMode"]');
		this.saveAlert = document.querySelector('[data-js="saveAlert"]');
		this.clearCache = document.querySelector('[data-js="clearCache"]');
		this.buildTools = document.querySelector('[data-js="buildMode"]');
	}

	runSelectors() {
		let state = this.store.getState();

		this.selectors = {
			animationMode: this.selectAnimationMode(state),
			buildMode: this.selectBuildMode(state)
		}
	}

	init() {
		this.grid = new Grid(this.store, this.canvas);
		this.palette = new Palette(this.store);
		this.animationPalette = new AnimationPalette(this.store, this.canvas);
		this.handleChanges();
		this.eventListeners();
		this.store.subscribe(this.handleChanges.bind(this));
	}

	eventListeners() {
		this.canvas.addEventListener('click',this.handleClick.bind(this));

		this.saveAlert.addEventListener('click', e => {
			this.saveAlert.classList.add('hide');
			this.saveAlert.innerHTML = 'Loading...';
		});

		this.firebasePushButton.addEventListener('click',this.onSave.bind(this));
		this.animationModeButton.addEventListener('click',this.toggleAnimationMode.bind(this));
		document.querySelector('[data-js="toggleBuildMode"]').addEventListener('click',this.toggleBuildMode.bind(this));

		this.clearCache.addEventListener('click',clearLocalStorage);
	}

	handleChanges() {
		this.runSelectors();
		this.handleAniModeChange();
		this.handleBuildModeChange();
	}

	handleAniModeChange() {
		if(typeof prevAniMode === 'undefined' || prevAniMode !== this.selectors.animationMode) {
			this.selectors.animationMode ? this.activateAnimationClass() : this.removeAnimationClass();
		}

		let prevAniMode = this.selectors.animationMode;
	}

	handleBuildModeChange() {
		if(typeof prevBuildMode === 'undefined' || prevBuildMode !== this.selectors.buildMode) {
			this.selectors.buildMode ? this.showBuildTools() : this.hideBuildTools();
		}

		let prevBuildMode = this.selectors.buildMode;
	}

	showBuildTools() {
		this.buildTools.classList.remove('hide');
	}

	hideBuildTools() {
		this.buildTools.classList.add('hide');
	}

	toggleAnimationMode() {
		this.runSelectors();

		this.selectors.animationMode ? this.store.dispatch(updateAnimationMode(false)) : this.store.dispatch(updateAnimationMode(true));
	}

	toggleBuildMode() {
		this.runSelectors();

		this.selectors.buildMode ? this.store.dispatch(updateBuildMode(false)) : this.store.dispatch(updateBuildMode(true));
	}

	activateAnimationClass() {
		this.canvas.classList.add('animationMode');
	}

	removeAnimationClass() {
		this.canvas.classList.remove('animationMode');
	}

	handleClick(e) {
		let state = this.store.getState();

		if(!state.settings.animationMode) {
			const x = e.x + this.canvasWrap.scrollLeft;
			const y = e.y + this.canvasWrap.scrollTop;
			const square = findSquare(x, y, this.store);			

			if(square) {
				const col = square.position.col;
				const row = square.position.row;
				const brushType = state.settings.activeBrush.type;
				const brushID = state.settings.activeBrush.id;

				
				this.store.dispatch(updateSquareTerrain({ col, row, brushType, brushID }));		
			}
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

	selectBuildMode(state) {
		return state.settings.buildMode;
	}
}