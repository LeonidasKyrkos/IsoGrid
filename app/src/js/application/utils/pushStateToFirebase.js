import { DB } from '../../main';
import _ from 'lodash';
import { saveStateToLocalStorage } from './localStorage';

const pushStateToFirebase = (state,resolve,reject) => {
	let editedState = _.cloneDeep(state);
	delete editedState.assets;
	delete editedState.settings;

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