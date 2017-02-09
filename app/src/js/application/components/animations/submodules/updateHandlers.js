 import { updateAnimations } from '../../../actions';
 import { refreshRate } from '../../../constants/settings';
 import _ from 'lodash';

// Animation handlers
export const updateAnimationHandler = (store) => {
	const state = store.getState();
	if(!state.animations) { return };
	state.animations.forEach(animation => updateAnimation(animation,store));
}

const updateAnimation = (animation) => {
	animation.remainingCoordinates = animation.remainingCoordinates || Object.assign([],animation.allCoordinates);
	
	if(animation.remainingCoordinates.length > 1) {
		animation.currentCoordinates = getNextCoordinates(animation);
	} else {
		resetAnimation(animation);
	}
}

const getNextCoordinates = (animation) => {
	let currentCoordinates = animation.currentCoordinates || animation.remainingCoordinates[0];
	let origin = animation.remainingCoordinates[0];
	let destination = animation.remainingCoordinates[1];
	let vector = getVector(origin, destination, animation.speed);

	if((vector.xLength < 0 && currentCoordinates.x <= destination.x || vector.xLength > 0 && currentCoordinates.x >= destination.x) && (vector.yLength < 0 && currentCoordinates.y <= destination.y || vector.yLength > 0 && currentCoordinates.y >= destination.y) || ((vector.xLength === 0 && vector.yLength < 0 && currentCoordinates.y <= destination.y) || (vector.xLength === 0 && vector.yLength > 0 && currentCoordinates.y >= destination.y)) || ((vector.yLength === 0 && vector.xLength < 0 && currentCoordinates.x <= destination.x) || (vector.yLength === 0 && vector.xLength > 0 && currentCoordinates.x >= destination.x))) {
		animation.remainingCoordinates.splice(0,1);
		return currentCoordinates;
	}

	return { x: currentCoordinates.x + vector.incrementX, y: currentCoordinates.y + vector.incrementY };
}

const getVector = (origin, destination, speed) => {
	let vector = {};

	vector.xLength = origin.x < destination.x ? destination.x - origin.x : -origin.x + destination.x;
	vector.yLength = origin.y < destination.y ? destination.y - origin.y : -origin.y + destination.y;
	vector.length = Math.sqrt((vector.xLength * vector.xLength) + (vector.yLength * vector.yLength));

	const incrementPercentage = (speed / (1000 / refreshRate) / (vector.length));
	
	vector.incrementX = vector.xLength * incrementPercentage;
	vector.incrementY = vector.yLength * incrementPercentage;

	return vector;
}

const resetAnimation = (animation) => {
	delete animation.remainingCoordinates;
	delete animation.currentCoordinates;
}