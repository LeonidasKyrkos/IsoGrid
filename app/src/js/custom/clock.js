let previousTime = {};

export const clockHandler = () => {
	updateClocks();
	setInterval(updateClocks, 1000);
}

/**
 * returns { hours, minutes }
 */
const getTime = () => {
	const date = new Date();
	const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours().toString();
	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes().toString();
	const seconds = date.getSeconds().toString();

	return {
		hours,
		minutes,
		seconds
	}
}

const updateClocks = () => {
	let time = getTime();

	if(time.hours !== previousTime.hours) {
		const hourClocks = document.querySelectorAll('[data-js="bigben.hours"]');
		hourClocks.length && hourClocks.forEach(el => {
			el.textContent = time.hours;
		});
		
		previousTime.hours = time.hours;
	}

	if(time.seconds !== previousTime.minutes) {
		const minuteClocks = document.querySelectorAll('[data-js="bigben.minutes"]');
		minuteClocks.length && minuteClocks.forEach(el => {
			el.textContent = time.minutes;
		})

		previousTime.minutes = time.minutes;
	}
}