import { DB } from '../../main';
import _ from 'lodash';

const pushStateToFirebase = (state,resolve,reject) => {
	let editedState = _.cloneDeep(state);
	editedState.activeBrush = 0;

	let setter = DB.ref('/').set(editedState);

	setter.then(()=>{
		resolve('Success!');
	});

	setter.catch(()=>{
		reject('Whoops! Something went wrong!');
	});
};


export default pushStateToFirebase;