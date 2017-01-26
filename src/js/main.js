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
import { terrain } from './application/constants/terrain';
import { buildings } from './application/constants/buildings';

const App = firebase.initializeApp(config);
const DB = firebase.database();

const initialState = {
	gridSquares: {},
	buildMode: false,
	terrain,
	buildings,
	debug: true,
	activeBrush: 0
}

const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const grid = new IsoGrid(store);