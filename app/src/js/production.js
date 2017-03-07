// styles
import '../scss/main.scss';

// data
import data from '../../data.json';

// redux
import { createStore } from 'redux';
import reducers from './application/reducers/';

// IsoGrid
import IsoGrid from './application/IsoGrid';
import { defaultState } from './configuration/defaultState';

// Custom JS
import { clockHandler } from './custom/clock';
import Navigation from './custom/nav';

let state = Object.assign({}, defaultState, data)
const store = createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const Grid = new IsoGrid(store);
const outerwrap = document.getElementById('isogridWrap');

outerwrap.addEventListener('loaded', () => { 
	setTimeout(()=>{
		initExtras(outerwrap, Grid) 
	},2000);
});

const initExtras = (outerwrap, Grid) => {
	const wrap = document.getElementById('isogrid').parentNode;	
	const loader = document.getElementById('loader');

	wrap.scrollLeft = window.innerWidth + 700;
	wrap.scrollTop = 150;
	loader.classList.add('hidden');
	outerwrap.classList.remove('hidden');
	clockHandler();
	const nav = new Navigation(Grid);
}