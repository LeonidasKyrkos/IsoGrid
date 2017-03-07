// // styles
// import '../scss/main.scss';

// // data
// import * as firebase from 'firebase';
// import { saveStateToLocalStorage } from './application/utils/localStorage';
// import data from '../../data.json';

// // redux
// import { createStore } from 'redux';
// import reducers from './application/reducers/';

// // IsoGrid
// import config from './configuration/firebase';
// import IsoGrid from './application/IsoGrid';
// import { defaultState } from './configuration/defaultState';

// // Custom JS
// import { clockHandler } from './custom/clock';
// import Navigation from './custom/nav';

// export const App = firebase.initializeApp(config);
// export const DB = firebase.database();

// let promise = new Promise((resolve, reject) => {
// 	if (localStorage.getItem('IsoGrid')) {
// 		let cache = JSON.parse(localStorage.getItem('IsoGrid'));
// 		resolve(Object.assign({}, defaultState, cache));
// 	} else {
// 		DB.ref('/').once('value', (snapshot) => {
// 			if (snapshot.val()) {
// 				resolve(Object.assign({}, defaultState, snapshot.val()));
// 			} else {
// 				resolve(defaultState);
// 			}
// 		})
// 	}
// });

// promise.then((state) => {
// 	const store = createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// 	const Grid = new IsoGrid(store);
// 	const outerwrap = document.getElementById('isogridWrap');

// 	saveStateToLocalStorage(state);	

// 	outerwrap.addEventListener('loaded', () => { initExtras(outerwrap, Grid) });
// });

//  const initExtras = (outerwrap, Grid) => {
// 	const wrap = document.getElementById('isogrid').parentNode;	
// 	const loader = document.getElementById('loader');

// 	wrap.scrollLeft = window.innerWidth + 700;
// 	wrap.scrollTop = 150;
// 	loader.classList.add('hidden');
// 	outerwrap.classList.remove('hidden');
// 	clockHandler();
// 	const nav = new Navigation(Grid);
// }