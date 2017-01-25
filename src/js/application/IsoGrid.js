import Grid from './components/grid/';
import Palette from './components/palette/';

export default class IsoGrid {
	constructor(store, buildMode=false) {
		this.canvas = document.getElementById('isogrid');
		this.store = store;
		this.buildMode = buildMode;

		this.init();
	}

	init() {
		this.grid = new Grid(this.store, this.canvas);
		this.palette = new Palette(this.store);
	}
}