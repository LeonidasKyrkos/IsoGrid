import { changeBrush } from '../../actions';
import { createElement, appendElement } from '../../utils/element';
import { createSubPalette } from './submodules/palettes';

export default class Palette {
	constructor(store) {
		this.store = store;
		this.wrap = document.getElementById('isogridWrap');
		this.saveButton = document.querySelector('[data-js="pushToFirebase"]');
		this.terrain = this.store.getState().assets.terrain || [];
		this.structure = this.store.getState().assets.structure || [];

		if(this.store.getState().settings.buildMode) {
			this.init();
		}		
	}

	init() {
		this.palette = createElement('div','palette');
		createSubPalette(this.terrain, this.palette, 'terrain');
		createSubPalette(this.structure, this.palette, 'structure');
		this.saveButton.classList.remove('hide');
		this.wrap.appendChild(this.palette);
		this.eventListeners();
	}

	eventListeners() {
		this.paletteItems = document.querySelectorAll('[data-js="paletteItem"]');

		this.paletteItems.forEach((el,i)=>{
			el.addEventListener('click',this.changeBrush.bind(this));
		});
	}

	changeBrush(e) {
		this.clearBrushes();

		let target = e.currentTarget;
		target.classList.add('active');

		let brushID = target.getAttribute('data-brush-id');
		let brushType = target.getAttribute('data-brush-type');

		this.store.dispatch(changeBrush({ type: brushType, id: brushID }));
	}

	clearBrushes() {
		this.paletteItems.forEach((el,i)=>{
			el.classList.remove('active');
		})
	}
}