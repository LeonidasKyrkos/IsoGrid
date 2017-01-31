// styles
import style from '../scss/main.scss';

// firebase
import * as firebase from 'firebase';

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
	DB.ref('/').once('value',(snapshot)=>{
		if(snapshot.val()) {
			resolve(snapshot.val());
		} else {
			resolve(defaultState);
		}
	})
});

promise.then((state) => {
	const store = createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

	const grid = new IsoGrid(store);
});