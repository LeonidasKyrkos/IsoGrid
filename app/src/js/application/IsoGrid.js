import Grid from './components/grid/';
import Palette from './components/palette/';
import dragscroll from 'dragscroll';
import { findSquare } from './utils/findSquare';
import { sqWidth, sqHeight } from './constants/dimensions';
import { updateSquareTerrain } from './actions';

export default class IsoGrid {
	constructor(store, buildMode=false) {
		this.canvas = document.getElementById('isogrid');
		this.canvasWrap = this.canvas.parentNode;
		this.store = store;
		this.buildMode = buildMode;

		this.init();
	}

	init() {
		this.grid = new Grid(this.store, this.canvas);
		this.palette = new Palette(this.store);
		this.eventListeners();
	}

	eventListeners() {
		this.canvas.addEventListener('dblclick',this.handleClick.bind(this));
	}

	handleClick(e) {
		const x = e.x + this.canvasWrap.scrollLeft;
		const y = e.y + this.canvasWrap.scrollTop;
		const square = findSquare(x, y, this.store);
		const squareID = square.id;
		const terrainID = this.store.getState().activeBrush;

		square && this.store.dispatch(updateSquareTerrain({ squareID, terrainID }));
	}
}