 import { updateAnimations } from '../../../actions';

// Animation handlers
export const updateAnimationHandler = (store) => {
	const state = store.getState();
	if(!state.animations) { return };
	
	let animations = _.cloneDeep(state.animations);

	animations.forEach(animation => updateAnimation(animation,store));

	store.dispatch(updateAnimations(animations));
}

const updateAnimation = (animation, store) => {
	animation.remainingCoordinates = animation.remainingCoordinates || animation.allCoordinates;
	
	if(animation.remainingCoordinates.length > 1) {
		animation.currentCoordinates = getNextCoordinates(animation);
	} else {
		animation.remainingCoordinates = Object.assign({},animation.allCoordinates);
	}
}

const getNextCoordinates = (animation) => {
	const vector = animation.vector || getVector(animation);
	const currentCoordinates = animation.remainingCoordinates[0];
	const destination = animation.remainingCoordinates[1];

	console.log(currentCoordinates);

	if((vector.x < 0 && currentCoordinates.x <= destination.x || vector.x > 0 && currentCoordinates.x <= destination.x) && (vector.y < 0 && currentCoordinates.y <= destination.y || vector.y > 0 && currentCoordinates.y <= destination.y)) {
		return currentCoordinates;
	} else {
		return { x: currentCoordinates.x + vector.xIncrement, y: currentCoordinates.y + vector.yIncrement };
	}
}

const getVector = (animation) => {
	const origin = animation.remainingCoordinates[0];
	const destination = animation.remainingCoordinates[1];
	let vector = {};
	
	vector.xLength = origin.x < destination.x ? destination.x - origin.x : -(origin.x - destination.x);
	vector.yLength = origin.y < destination.y ? destination.y - origin.y : -(origin.y - destination.y);
	vector.length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

	const increment = animation.speed / vector.length;
	vector.incrementX = vector.xLength * increment;
	vector.incrementY = vector.yLength * increment;

	return vector;
}