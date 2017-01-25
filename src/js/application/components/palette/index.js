import { render } from './render';

export default class Palette {
	constructor(store) {
		this.store = store;
		render(store, document.getElementById('main'));
	}
}