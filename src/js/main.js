import style from '../scss/main.scss';
import * as firebase from 'firebase';
import config from './configuration/firebase';
import IsoGrid from './application/IsoGrid';

const App = firebase.initializeApp(config);
const DB = firebase.database();

const canvas = document.getElementById('isogrid');

const grid = new IsoGrid(canvas);
