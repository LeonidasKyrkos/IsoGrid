const tutorial = document.querySelector('[data-js="tutorial"]');
const tutorialClose = document.querySelector('[data-js="tutorial"] [data-js="lightbox.toggle"]');

export const tutorialHandler = () => {	
	tutorialClose.addEventListener('click',closeTutorial);
}

const closeTutorial = () => {
	tutorial.classList.add('hide');
}