import { changeBrush } from '../../actions';

export default class Palette {
	constructor(store) {
		this.store = store;
		this.wrap = document.getElementById('isogridWrap');
		this.saveButton = document.querySelector('[data-js="pushToFirebase"]');
		this.terrain = this.store.getState().terrain;

		if(this.store.getState().buildMode) {
			this.init();
		}		
	}

	init() {
		this.renderPalette();
		this.saveButton.classList.remove('hide');
		this.eventListeners();
	}

	renderPalette() {
		let palette = document.createElement('div');
		palette.setAttribute('class','palette');

		let paletteInner = document.createElement('div');
		paletteInner.setAttribute('class','palette__inner');

		let eraser = document.createElement('span');
		eraser.setAttribute('class', 'palette__item active');
		eraser.setAttribute('data-js','terrain');
		eraser.classList.add('empty');

		paletteInner.appendChild(eraser);

		for(let terrain in this.terrain) {
			const classlist = 'palette__item'

			if(this.terrain[terrain].imageSrc) {
				let item = document.createElement('img');
				item.setAttribute('class',classlist);
				item.setAttribute('data-js','terrain');
				item.setAttribute('data-terrain',terrain);
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
			el.addEventListener('click',this.changeBrush.bind(this));
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