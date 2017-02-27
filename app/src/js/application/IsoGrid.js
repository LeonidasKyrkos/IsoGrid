import Grid from './components/grid/';
import Palette from './components/palette/';
import AnimationPalette from './components/animations';
import dragscroll from 'dragscroll';
import { findSquare } from './utils/findSquare';
import { colWidth as sqWidth, rowHeight as sqHeight, cvWidth, cvHeight } from './constants/dimensions';
import { updateSquareTerrain, updateAnimationMode, updateBuildMode } from './actions';
import pushStateToFirebase from './utils/pushStateToFirebase';
import { saveStateToLocalStorage, clearLocalStorage } from './utils/localStorage';

export default class IsoGrid {
	constructor(store) {
		this.wrap = document.getElementById('isogrid');
		this.wrap.setAttribute('style',`width: ${cvWidth * 2}px; height: ${cvHeight}px`);
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
		this.buildModeButton = document.querySelector('[data-js="toggleBuildMode"]');
	}

	runSelectors() {
		let state = this.store.getState();

		this.selectors = {
			animationMode: this.selectAnimationMode(state),
			buildMode: this.selectBuildMode(state)
		}
	}

	init() {
		this.grids = new Grid(this.store);
		this.palette = new Palette(this.store);
		this.animationPalette = new AnimationPalette(this.store);
		this.currentScale = 1;
		this.eventListeners();
		this.store.subscribe(this.handleChanges.bind(this));
	}

	eventListeners() {
		this.wrap.addEventListener('click',this.handleClick.bind(this));

		this.saveAlert.addEventListener('click', e => {
			this.saveAlert.classList.add('hide');
			this.saveAlert.innerHTML = 'Loading...';
		});

		this.firebasePushButton.addEventListener('click',this.onSave.bind(this));
		this.animationModeButton.addEventListener('click',this.toggleAnimationMode.bind(this));
		this.buildModeButton.addEventListener('click',this.toggleBuildMode.bind(this));

		this.clearCache.addEventListener('click',clearLocalStorage);

		document.querySelector('[data-js="zoom.out"]').addEventListener('click',this.zoomOut.bind(this));
		document.querySelector('[data-js="zoom.in"]').addEventListener('click',this.zoomIn.bind(this));
	}

	zoomOut() {
		this.currentScale -= 0.2;
		this.wrap.style.transform = `scale3d(${this.currentScale},${this.currentScale},${this.currentScale})`;
		this.wrap.style['transform-origin'] = `${this.wrap.parentNode.scrollLeft - window.innerWidth / 2}px center 0px`;
	}

	zoomIn() {
		this.currentScale += 0.2;
		this.wrap.style.transform = `scale3d(${this.currentScale},${this.currentScale},${this.currentScale})`;
		this.wrap.style['transform-origin'] = `${this.wrap.parentNode.scrollLeft - window.innerWidth / 2}px center 0px`;
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
		this.buildModeButton.classList.add('active');
		this.buildTools.classList.remove('hide');
	}

	hideBuildTools() {
		this.buildModeButton.classList.remove('active');
		this.buildTools.classList.add('hide');
	}

	toggleAnimationMode() {
		this.runSelectors();
		this.store.dispatch(updateAnimationMode(!this.selectors.animationMode));
	}

	toggleBuildMode() {
		this.runSelectors();
		this.store.dispatch(updateBuildMode(!this.selectors.buildMode));
	}

	activateAnimationClass() {
		this.animationModeButton.classList.add('active');
		this.wrap.classList.add('animationMode');
	}

	removeAnimationClass() {
		this.animationModeButton.classList.remove('active');
		this.wrap.classList.remove('animationMode');
	}

	handleClick(e) {
		let state = this.store.getState();

		if(state.settings.buildMode && !state.settings.animationMode) {
			const x = e.x + this.wrap.parentNode.scrollLeft;
			const y = e.y + this.wrap.parentNode.scrollTop;
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