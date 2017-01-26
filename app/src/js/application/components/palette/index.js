import { terrain } from '../../constants/terrain';
import { changeBrush } from '../../actions';

export default class Palette {
	constructor(store) {
		this.store = store;
		this.wrap = document.getElementById('isogridWrap');
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

		for(let terr in terrain) {
			const classlist = terr == 0 ? 'palette__item active' : 'palette__item'

			if(terrain[terr].imageSrc) {
				let item = document.createElement('img');
				item.setAttribute('class',classlist);
				item.setAttribute('data-js','terrain');
				item.setAttribute('data-terrain',terr);
				item.setAttribute('src',terrain[terr].imageSrc);
				
				paletteInner.appendChild(item);
			} else {
				let item = document.createElement('span');
				item.setAttribute('class', classlist);
				item.setAttribute('data-js','terrain');
				item.setAttribute('data-terrain',terr);
				item.classList.add('empty');

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