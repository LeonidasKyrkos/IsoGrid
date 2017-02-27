import scroll from 'scroll';

const dragscroll = document.getElementById('dragscroll');
const articles = document.getElementById('articles');

const transEvents = {
	webkit: 'webkitTransitionEnd',
	opera: 'otransitionend',
	operaTwo: 'oTransitionEnd',
	ms: 'msTransitionEnd',
	transition: 'transitionend'
}

export const navHandler = () => {
	const navItems = document.querySelectorAll('[data-js="nav.trigger"]');

	navItems.forEach(el => {
		el.addEventListener('click',handleClick);
	});

	dragscroll.addEventListener('click',()=>{
		!articles.classList.contains('inactive') && closeArticles();
	});
}

const handleClick = (e) => {
	const el = e.currentTarget;
	const targetName = el.getAttribute('data-target');
	const target = document.querySelector(`[data-js="${targetName}"]`);
	const scrollX = target.offsetLeft;
	const scrollY = target.offsetTop;
	const dragscroll = document.getElementById('dragscroll');
	const articles = document.getElementById('articles');
	const offset = getOffset(target);

	articles.classList.remove('inactive');
	scrollTo(dragscroll, scrollX - offset.x, scrollY - offset.y);
}

const getOffset = (target) => {
	const targetName = target.getAttribute('data-js');
	const paddingX = document.getElementById('sidepanels').offsetWidth;
	const defaultOffset = { x: paddingX, y: 300 }
	const windowOffset = window.innerHeight/2 - target.offsetHeight/2;

	switch(targetName) {		
		case 'eye':
			return { x: -300, y: windowOffset };
		case 'tower-bridge':
			return { x: -400, y: windowOffset };
		case 'shard':
			return { x: -300, y: windowOffset };
		case 'battersea':
			return { x: -450, y: windowOffset };
		case 'tate-modern':
			return { x: -500, y: windowOffset };
		case 'o2':
			return { x: -360, y: windowOffset };
		case 'kew':
			return { x: -400, y: windowOffset };
		case 'big-ben':
			return { x: -200, y: windowOffset };
		default: 
			return defaultOffset;
	}
}

const closeArticles = () => {
	articles.classList.add('inactive');
}

const scrollTo = (element, x, y) => {
	scroll.left(element, x);
	scroll.top(element, y);
}