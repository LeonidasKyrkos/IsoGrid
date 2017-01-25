export default class IsoGrid {
	constructor(canvas, database={}, buildMode=false) {
		this.canvas = canvas;
		this.database = database;
		this.buildMode = buildMode;

		this.canvas && this.setupIsoGrid();
	}

	setupIsoGrid() {
		console.log('test');
	}
}