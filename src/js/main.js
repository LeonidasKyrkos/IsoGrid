// styles
import style from '../scss/main.scss';

// data
import * as firebase from 'firebase';
import { saveStateToLocalStorage } from './application/utils/localStorage';

// redux
import { createStore } from 'redux';
import reducers from './application/reducers/';

// IsoGrid
import config from './configuration/firebase';
import IsoGrid from './application/IsoGrid';
import { defaultState } from './configuration/defaultState';

export const App = firebase.initializeApp(config);
export const DB = firebase.database();

let promise = new Promise((resolve,reject)=>{
	resolve(defaultState);
	// if(localStorage.getItem('IsoGrid')) {
	// 	resolve(JSON.parse(localStorage.getItem('IsoGrid')));
	// } else {
	// 	DB.ref('/').once('value',(snapshot)=>{
	// 		if(snapshot.val()) {
	// 			resolve(snapshot.val());
	// 		} else {
	// 			resolve(defaultState);
	// 		}
	// 	})
	// }
});

promise.then((state) => {
	const store = createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	const grid = new IsoGrid(store);

	saveStateToLocalStorage(state);
});