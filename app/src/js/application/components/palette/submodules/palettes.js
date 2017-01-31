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