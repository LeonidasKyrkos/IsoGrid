import { DB } from '../../main';
import _ from 'lodash';

const pushStateToFirebase = (state,resolve,reject) => {
	let editedState = _.cloneDeep(state);
	editedState.settings.activeBrush = 0;

	const setter = DB.ref('/').set(editedState);

	setter.then(()=>{
		resolve('Success!');
	});

	setter.catch(()=>{
		reject('Whoops! Something went wrong!');
	});
};


export default pushStateToFirebase;