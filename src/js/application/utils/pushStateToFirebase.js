import { DB } from '../../main';

const pushStateToFirebase = (state) => {
	DB.ref('/').set(state)
};


export default pushStateToFirebase;