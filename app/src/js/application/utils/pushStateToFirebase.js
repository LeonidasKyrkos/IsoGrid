import { DB } from '../../main';
import _ from 'lodash';

const pushStateToFirebase = (state) => {
	let editedState = _.cloneDeep(state);
	editedState.activeBrush = 0;
	DB.ref('/').set(editedState);
};


export default pushStateToFirebase;