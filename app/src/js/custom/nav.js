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
		dragscroll.classList.contains('active') && closeArticles();
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

	if(!dragscroll.classList.contains('active')) {
		articles.classList.add('active');
		dragscroll.classList.add('active');	

		for(let prop in transEvents) {
			dragscroll.addEventListener(transEvents[prop], () => {
				scrollTo(dragscroll, scrollX - offset.x, scrollY - offset.y);
			}, { once: true });
		}
	} else {
		articles.classList.add('active');
		dragscroll.classList.add('active');
		scrollTo(dragscroll, scrollX - offset.x, scrollY - offset.y);
	}	
}

const getOffset = (target) => {
	const targetName = target.getAttribute('data-js');
	const paddingX = document.getElementById('sidepanels').offsetWidth;
	const defaultOffset = { x: paddingX, y: 300 }
	const windowOffset = window.innerHeight/2 - target.offsetHeight/2;

	switch(targetName) {		
		case 'eye':
			return { x: -100, y: windowOffset };
		case 'tower-bridge':
			return { x: -200, y: windowOffset };
		case 'shard':
			return { x: 0, y: windowOffset };
		case 'battersea':
			return { x: -150, y: windowOffset };
		case 'tate-modern':
			return { x: -200, y: windowOffset };
		case 'o2':
			return { x: -160, y: windowOffset };
		case 'kew':
			return { x: -120, y: windowOffset };
		case 'big-ben':
			return { x: 0, y: windowOffset };
		default: 
			return defaultOffset;
	}
}

const closeArticles = () => {
	dragscroll.classList.remove('active');
	articles.classList.remove('active');
}

const scrollTo = (element, x, y) => {
	scroll.left(element, x);
	scroll.top(element, y);
}