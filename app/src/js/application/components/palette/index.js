import { changeBrush } from '../../actions';
import { createElement, appendElement } from '../../utils/element';
import { createSubPalette, createHtmlPalette } from './submodules/palettes';
import { assets as html } from '../../constants/html';

export default class Palette {
	constructor(store) {
		this.store = store;
		this.wrap = document.getElementById('isogridWrap');
		this.toolkit = document.querySelector('[data-js="buildMode"]');
		this.toolkitToggle = document.querySelector('[data-js="toggleToolkit"]');

		let state = this.store.getState();
		this.terrain = state.assets.terrain || [];
		this.structure = state.assets.structure || [];
		this.html = html;

		if(this.store.getState().settings.buildMode) {
			this.init();
		}		
	}

	init() {
		this.palette = createElement('div','palette','palette.wrap');
		createSubPalette(this.terrain, this.palette, 'terrain');
		createSubPalette(this.structure, this.palette, 'structure');
		createHtmlPalette(this.html, this.palette, 'html');
		this.toolkit.classList.remove('hide');
		this.wrap.appendChild(this.palette);
		this.eventListeners();
	}

	eventListeners() {
		this.paletteItems = document.querySelectorAll('[data-js="paletteItem"]');

		this.paletteItems.forEach((el,i)=>{
			el.addEventListener('click',this.changeBrush.bind(this));
		});

		this.toolkitToggle.addEventListener('click',this.togglePalettes);
	}

	togglePalettes() {
		document.querySelector('[data-js="palette.wrap"]').classList.toggle('hide');
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
		this.paletteItems.forEach(el => {
			el.classList.remove('active');
		});
	}
}