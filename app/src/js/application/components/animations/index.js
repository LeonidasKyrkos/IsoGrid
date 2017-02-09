import _ from 'lodash';
import { addAnimation, updateAnimationBrush, updateAnimationMode } from '../../actions';
import { refreshRate } from '../../constants/settings';
import { instantiateImages } from '../../utils/instantiateImages';
import { createElement } from '../../utils/element';
import { getCentreOfSquare } from '../../utils/square';
import { findSquare } from '../../utils/findSquare';
import newAnimation from './submodules/Animation';

export default class AnimationPalette {
	constructor(store) {
		this.store = store;
		this.wrap = document.getElementById('isogrid');
		this.runSelectors();
		this.store.subscribe(this.handleChanges.bind(this));

		this.init();
	}

	init() {
		this.animatables = document.querySelector('[data-js="animationMode.animatables"]');

		const promise = new Promise((resolve, reject) => {
			this.createAnimatables(resolve);
		});

		promise.then(() => {
			this.elementSelectors();
			this.eventHandlers();
			this.handleChanges();
		})
	}

	render() {
		this.showTools();
	}

	destroy() {
		this.hideTools();
	}

	showTools() {
		this.animationTools.classList.remove('hide');
	}

	hideTools() {
		this.clearPalette();
		this.animationTools.classList.add('hide');
	}

	addAnimation() {
		let animation = new Animation();
		this.store.dispatch(addAnimation(animation));
	}

	runSelectors() {
		let state = this.store.getState();

		this.selectors = {
			buildMode: state.settings.buildMode,
			animationMode: state.settings.animationMode,
			animationInstances: state.animations,
			animationArchetypes: state.assets.animations,
			activeAnimationBrush: state.settings.activeAnimationBrush
		}
	}

	elementSelectors() {
		this.animationTools = document.querySelector('[data-js="animationMode"]');
		this.newAnimationButton = document.querySelector('[data-js="animationMode.new"]');
		this.saveAnimationButton = document.querySelector('[data-js="animationMode.save"]');
		this.cancelAnimationButton = document.querySelector('[data-js="animationMode.cancel"]');
		this.closeAnimationButton = document.querySelector('[data-js="animationMode.close"]');
		this.paletteItems = document.querySelectorAll('[data-js="animationMode.paletteItem"]');
	}

	handleChanges() {
		this.runSelectors();
		this.handleBuildModeChanges();
		this.handleAniModeChange();
	}

	handleBuildModeChanges() {
		if(typeof this.currentBuildMode === 'undefined' || this.currentBuildMode !== this.selectors.buildMode) {
			this.selectors.buildMode ? this.showTools() : this.hideTools();
			this.currentBuildMode = this.selectors.buildMode;
		}
	}

	handleAniModeChange() {
		if(typeof this.currentAniMode === 'undefined' || this.currentAniMode !== this.selectors.animationMode) {
			console.log('hit');
			this.selectors.animationMode ? this.showTools() : this.hideTools();
			this.currentAniMode = this.selectors.animationMode;
		}		
	}

	createAnimatables(resolve, reject) {
		let animatables = instantiateImages(this.selectors.animationArchetypes);

		animatables.then( animatables => {
			this.animatableItems = animatables;
			this.renderAnimatables();
			resolve();
		});
	}

	renderAnimatables() {
		for(let name in this.animatableItems) {
			let ani = this.animatableItems[name];
			let wrap = createElement('li');
			let el = createElement('img','animation-palette__item','animationMode.paletteItem',[
				{ name: 'src', val: ani.imageSrc },
				{ name: 'data-id', val: name}
			]);

			wrap.appendChild(el);
			this.animatables.appendChild(wrap);
		}
	}

	eventHandlers() {
		this.paletteItems.forEach(this.paletteHandler.bind(this));
		this.closeAnimationButton.addEventListener('click',this.closePalette.bind(this));
		this.wrap.addEventListener('click',this.canvasClickHandler.bind(this));
		this.saveAnimationButton.addEventListener('click',this.saveAnimationPath.bind(this));
	}

	canvasClickHandler(e) {
		this.runSelectors();

		if(this.selectors.animationMode && this.selectors.activeAnimationBrush !== null) {
			const x = e.x + this.wrap.parentNode.scrollLeft;
			const y = e.y + this.wrap.parentNode.scrollTop;
			const square = findSquare(x, y, this.store);
			
			if(square) {				
				this.animationEditHandler(square);
			}
		}
	}

	animationEditHandler(square) {
		let aniObj = this.selectors.activeAnimationBrush;

		if(this.drawingAni) {
			this.addToExistingAnimationPath(square);
		} else {
			this.createNewAnimationPath(square);
		}
	}

	createNewAnimationPath(square) {
		let archetype = this.selectors.animationArchetypes[this.selectors.activeAnimationBrush];

		this.drawingAni = Object.assign({},archetype,{
			type: this.selectors.activeAnimationBrush,
			allCoordinates: [getCentreOfSquare(square)]
		});
	}

	addToExistingAnimationPath(square) {
		this.drawingAni.allCoordinates.push(getCentreOfSquare(square));
	}

	saveAnimationPath() {
		if(this.drawingAni) {
			this.store.dispatch(addAnimation(this.drawingAni));
			this.closePalette();
		}
	}

	paletteHandler(el) {
		el.addEventListener('click',this.paletteClickHandler.bind(this));
	}

	paletteClickHandler(e) {
		this.clearPalette();
		let target = e.currentTarget;
		let animationID = target.getAttribute('data-id');
		target.classList.add('active');

		this.store.dispatch(updateAnimationBrush(animationID));
	}

	clearPalette() {
		this.paletteItems.forEach( el => {
			el.classList.remove('active');
		})
	}

	closePalette() {
		this.store.dispatch(updateAnimationBrush(null));
		this.store.dispatch(updateAnimationMode(false));
		delete this.drawingAni;
	}
}