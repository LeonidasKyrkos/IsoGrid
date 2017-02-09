import { changeBrush } from '../../actions';
import { createElement, appendElement } from '../../utils/element';
import { createSubPalette, createHtmlPalette } from './submodules/palettes';
import { assets as html } from '../../constants/html';

export default class Palette {
	constructor(store) {
		this.store = store;
		this.active = this.displayTest();
		this.wrap = document.getElementById('isogrid');
		this.paletteToggle = document.querySelector('[data-js="togglePalettes"]');

		let state = this.store.getState();
		this.terrain = state.assets.terrain || [];
		this.structure = state.assets.structure || [];
		this.html = html;

		if(this.active) {
			this.init();
		}
	}

	displayTest() {
		let buildMode = this.store.getState().settings.buildMode;
		let aniMode = this.store.getState().settings.animationMode;

		return buildMode && !aniMode;
	}

	init() {
		this.initialised = true;
		this.render();
		this.eventListeners();
		this.store.subscribe(this.handleChange.bind(this));
	}	

	handleChange() {
		this.active = this.displayTest();

		if(previous !== this.active) {
			this.initialised && this.active ? this.render() : this.destroy();
			!this.initialised && this.active && this.init();
		}

		let previous = this.active;
	}

	render() {
		this.palette = createElement('div','palette','palette.wrap');
		createSubPalette(this.terrain, this.palette, 'terrain');
		createSubPalette(this.structure, this.palette, 'structure');
		createHtmlPalette(this.html, this.palette, 'html');
		this.wrap.appendChild(this.palette);
	}

	destroy() {
		if(this.palette) {
			this.wrap.removeChild(this.palette);
			delete this.palette;
		}
	}

	eventListeners() {
		this.paletteItems = document.querySelectorAll('[data-js="paletteItem"]');

		this.paletteItems.forEach((el,i)=>{
			el.addEventListener('click',this.changeBrush.bind(this));
		});

		this.paletteToggle.addEventListener('click',this.togglePalettes);
	}

	togglePalettes() {
		let palettes = document.querySelector('[data-js="palette.wrap"]');

		if(palettes) {
			palettes.classList.toggle('hide');
		}
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