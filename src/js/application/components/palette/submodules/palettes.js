import { createElement } from '../../../utils/element';

export const createSubPalette = (list=[], destination, identifier) => {
	if(!list.length) { return };

	let wrap = createElement('div', 'palette__inner', identifier);

	list.forEach((item,index) => {
		if(item.imageSrc) {
			let el = createElement('img', 'palette__item', 'paletteItem', 
				[ 
					{ name: 'src', val: item.imageSrc },
					{ name: 'data-brush-id', val: index },
					{ name: 'data-brush-type', val: identifier }
				]);
			wrap.appendChild(el);
		} 

		if(!item.imageSrc) {
			let active = identifier === 'terrain' ? 'active' : '';

			let el = createElement('span', `palette__item empty ${active}`, 'paletteItem', 
				[ 
					{ name: 'src', val: item.imageSrc },
					{ name: 'data-brush-id', val: index },
					{ name: 'data-brush-type', val: identifier }
				]);
			wrap.appendChild(el);
		}
	})

	destination.appendChild(wrap);
}

export const createHtmlPalette = (html={}, destination, identifier) => {
	if(!Object.keys(html).length) { return };

	let wrap = createElement('div', 'palette__inner', identifier);
	let el = createElement('span', `palette__item empty`, 'paletteItem', 
		[ 
			{ name: 'data-brush-id', val: 0 },
			{ name: 'data-brush-type', val: identifier }
		]);
	wrap.appendChild(el);

	for(let item in html) {
		let itemObj = html[item];

		if(itemObj.template) {
			let elWrap = createElement('div', 'palette__item animation', 'paletteItem',[
				{ name: 'data-brush-id', val: item },
				{ name: 'data-brush-type', val: identifier }
			])
			let el = itemObj.template.cloneNode(true);
			el.removeAttribute('id');

			elWrap.appendChild(el);
			wrap.appendChild(elWrap);
		}
	}

	destination.appendChild(wrap);
}