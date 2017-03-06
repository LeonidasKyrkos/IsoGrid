import Grid from './components/grid/';
import Palette from './components/palette/';
import AnimationPalette from './components/animations';
import dragscroll from 'dragscroll';
import { findSquare } from './utils/findSquare';
import { colWidth as sqWidth, rowHeight as sqHeight, cvWidth, cvHeight } from './constants/dimensions';
import { updateSquareTerrain, updateAnimationMode, updateBuildMode } from './actions';
import pushStateToFirebase from './utils/pushStateToFirebase';
import { saveStateToLocalStorage, clearLocalStorage } from './utils/localStorage';
import { settings } from './constants/isoGridSettings';


export default class IsoGrid {
	/**
	 * Instantiates the IsoGrid Object
	 * @constructor
	 * @param {Object} redux store
	 * @return void
	 */
	constructor(store) {
		this.wrap = document.getElementById('isogrid');
		this.wrap.setAttribute('style',`width: ${cvWidth * 2}px; height: ${cvHeight}px`);
		this.store = store;
		this.settings = Object.assign({},settings);
		this.domElementSelectors();
		this.runStateSelectors();
		this.init();
	}

	/**
	 * Collect our DOM elements for event handling.
	 * @return void
	 */
	domElementSelectors() {
		this.firebasePushButton = document.querySelector('[data-js="pushToFirebase"]');
		this.animationModeButton = document.querySelector('[data-js="toggleAnimationMode"]');
		this.saveAlert = document.querySelector('[data-js="saveAlert"]');
		this.clearCache = document.querySelector('[data-js="clearCache"]');
		this.buildTools = document.querySelector('[data-js="buildMode"]');
		this.buildModeButton = document.querySelector('[data-js="toggleBuildMode"]');
		this.zoomInEl = document.querySelector('[data-js="zoom.in"]');
		this.zoomOutEl = document.querySelector('[data-js="zoom.out"]');
		this.builderControls = document.querySelector('[data-js="builder.controls"]');
	}

	/**
	 * Update the local state.
	 * @return void
	 */
	runStateSelectors() {
		let state = this.store.getState();

		this.selectors = {
			builder: this.selectBuilderStatus(state),
			animationMode: this.selectAnimationMode(state),
			buildMode: this.selectBuildMode(state)
		}
	}

	/**
	 * Initialise the 3 core components of IsoGrid. Grid renderer and 2 builder palettes
	 * @return void
	 */
	init() {
		this.Grid = new Grid(this.store);

		if(this.selectors.builder) {
			this.builderControls && this.builderControls.classList.remove('hide');
			this.palette = new Palette(this.store);
			this.animationPalette = new AnimationPalette(this.store);
		}

		this.currentScale = 1;
		this.eventListeners();
		this.store.subscribe(this.handleChanges.bind(this));
		this.settings.zoomIncrement = 0.2;
	}

	/**
	 * Attach event listeners to dom elements
	 * @return void
	 */
	eventListeners() {
		this.wrap.addEventListener('click',this.handleClick.bind(this));
		this.saveAlert.addEventListener('click',this.resetSaveAlert.bind(this));
		this.firebasePushButton.addEventListener('click',this.onSave.bind(this));
		this.animationModeButton.addEventListener('click',this.toggleAnimationMode.bind(this));
		this.buildModeButton.addEventListener('click',this.toggleBuildMode.bind(this));
		this.clearCache.addEventListener('click',clearLocalStorage);
		this.zoomOutEl.addEventListener('click',this.zoomOut.bind(this));
		this.zoomInEl.addEventListener('click',this.zoomIn.bind(this));
	}

	/**
	 * Zooms the canvas out using a css transform
	 * @return void
	 */
	zoomOut() {
		if(this.settings && this.settings.zoomIncrement) {
			this.currentScale -= this.settings.zoomIncrement;
			this.wrap.style.transform = `scale3d(${this.currentScale},${this.currentScale},${this.currentScale})`;
			this.wrap.style['transform-origin'] = `${this.wrap.parentNode.scrollLeft - window.innerWidth / 2}px ${this.wrap.parentNode.scrollTop + window.innerHeight / 2}px`;
		}
	}

	/**
	 * Zooms the canvas in using a css transform
	 * @return void
	 */
	zoomIn() {
		if(this.settings && this.settings.zoomIncrement) {
			this.currentScale += this.settings.zoomIncrement;
			this.wrap.style.transform = `scale3d(${this.currentScale},${this.currentScale},${this.currentScale})`;
			this.wrap.style['transform-origin'] = `${this.wrap.parentNode.scrollLeft - window.innerWidth / 2}px ${this.wrap.parentNode.scrollTop + window.innerHeight / 2}px`;
		}
	}

	/**
	 * Called when the state changes. Updates local state values and calls DOM handlers to make any necessary updates
	 * @return void
	 */
	handleChanges() {
		this.runStateSelectors();
		this.handleAniModeChange();
		this.handleBuildModeChange();
	}

	/**
	 * If the animation mode has changed or never been set then show or hide the animation palette.
	 * @return void
	 */
	handleAniModeChange() {
		if(typeof prevAniMode === 'undefined' || prevAniMode !== this.selectors.animationMode) {
			this.selectors.animationMode ? this.activateAnimationClass() : this.removeAnimationClass();
		}

		let prevAniMode = this.selectors.animationMode;
	}

	/**
	 * If the build mode has changed or never been set then show or hide the landscape palette.
	 * @return void
	 */
	handleBuildModeChange() {
		if(typeof prevBuildMode === 'undefined' || prevBuildMode !== this.selectors.buildMode) {
			this.selectors.buildMode ? this.showBuildTools() : this.hideBuildTools();
		}

		let prevBuildMode = this.selectors.buildMode;
	}

	/**
	 * Show the build tools
	 * @return void
	 */
	showBuildTools() {
		this.buildModeButton.classList.add('active');
		this.buildTools.classList.remove('hide');
	}

	/**
	 * Hide the build tools
	 * @return void
	 */
	hideBuildTools() {
		this.buildModeButton.classList.remove('active');
		this.buildTools.classList.add('hide');
	}

	/**
	 * Submit action to toggle the animation mode.
	 * @return void
	 */
	toggleAnimationMode() {
		this.runStateSelectors();
		this.store.dispatch(updateAnimationMode(!this.selectors.animationMode));
	}

	/**
	 * Submit action to toggle the build mode
	 * @return void
	 */
	toggleBuildMode() {
		this.runStateSelectors();
		this.store.dispatch(updateBuildMode(!this.selectors.buildMode));
	}

	/**
	 * Show animation palette
	 * @return void
	 */
	activateAnimationClass() {
		this.animationModeButton.classList.add('active');
		this.wrap.classList.add('animationMode');
	}

	/**
	 * Hide animation palette
	 * @return void
	 */
	removeAnimationClass() {
		this.animationModeButton.classList.remove('active');
		this.wrap.classList.remove('animationMode');
	}

	/**
	 * Handler for map clicks when in build mode. Could be moved to the grid renderer but not convinced it's more related.
	 * @param {Object} click event
	 * @return void
	 */
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

	/**
	 * Handler for the Save button. Calls the push to firebase method and then updates the saveAlert's markup accordingly.
	 * @return void
	 */
	onSave() {
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

	/**
	 * Select the current build state
	 * @param {Object} current state
	 * @return {Bool} current builder status
	 */
	selectBuilderStatus(state) {
		return state.settings.builder;
	}

	/**
	 * Select the current animation mode from the store.
	 * @param {Object} current state
	 * @return {Bool} current animation mode
	 */
	selectAnimationMode(state) {
		return state.settings.animationMode;
	}

	/**
	 * Select the current build mode from the store
	 * @param {Object} current state
	 * @return {Bool} current build mode
	 */
	selectBuildMode(state) {
		return state.settings.buildMode;
	}

	/**
	 * Reset the saveAlert element's content and hide it.
	 * @return void
	 */
	resetSaveAlert() {
		this.saveAlert.classList.add('hide');
		this.saveAlert.innerHTML = 'Loading...';
	}
}