import { DB } from '../../main';
import _ from 'lodash';
import { saveStateToLocalStorage } from './localStorage';

const pushStateToFirebase = (state,resolve,reject) => {
	let editedState = _.cloneDeep(state);
	delete editedState.assets;
	delete editedState.settings;

	Object.keys(editedState.animations).forEach(key => {
		delete editedState.animations[key].remainingCoordinates;
		delete editedState.animations[key].previousCoordinates;
		delete editedState.animations[key].currentCoordinates;
		delete editedState.animations[key].direction;
		delete editedState.animations[key].previousDirection;
		delete editedState.animations[key].finished;
		delete editedState.animations[key].active;
	});

	const setter = DB.ref('/').set(editedState);

	setter.then(()=>{
		saveStateToLocalStorage(state);
		resolve('Success!');
	});

	setter.catch(()=>{
		reject('Whoops! Something went wrong!');
	});
};


export default pushStateToFirebase;