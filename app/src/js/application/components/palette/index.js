import { changeBrush } from '../../actions';

export default class Palette {
	constructor(store) {
		this.store = store;
		this.wrap = document.getElementById('isogridWrap');
		this.terrain = this.store.getState().terrain;
		this.init();
	}

	init() {
		this.renderPalette();
		this.eventListeners();
	}

	renderPalette() {
		let palette = document.createElement('div');
		palette.setAttribute('class','palette');

		let paletteInner = document.createElement('div');
		paletteInner.setAttribute('class','palette__inner');

		let deleter = document.createElement('span');
		deleter.setAttribute('class', 'palette__item active');
		deleter.setAttribute('data-js','terrain');
		deleter.classList.add('empty');

		paletteInner.appendChild(deleter);

		for(let terrain in this.terrain) {
			const classlist = 'palette__item'

			if(this.terrain[terrain].imageSrc) {
				let item = document.createElement('img');
				item.setAttribute('class',classlist);
				item.setAttribute('data-js','terrain');
				item.setAttribute('data-terrain',this.terrain);
				item.setAttribute('src',this.terrain[terrain].imageSrc);
				
				paletteInner.appendChild(item);
			}
		}

		palette.appendChild(paletteInner);
		this.wrap.appendChild(palette);
	}

	eventListeners() {
		this.terrainSwitches = document.querySelectorAll('[data-js="terrain"]');

		this.terrainSwitches.forEach((el,i)=>{
			el.addEventListener('click',this.changeBrush.bind(this))
		});
	}

	changeBrush(e) {
		this.clearBrushes();

		let target = e.currentTarget;		
		target.classList.add('active');

		let brushID = target.getAttribute('data-terrain');

		this.store.dispatch(changeBrush(brushID));
	}

	clearBrushes() {
		this.terrainSwitches.forEach((el,i)=>{
			el.classList.remove('active');
		})
	}
}