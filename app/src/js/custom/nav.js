import scroll from 'scroll';
import { getScrollSettings } from './scrollSettings';

const dragscroll = document.getElementById('dragscroll');
const canvasWrap = document.getElementById('isogrid');
const articles = document.getElementById('articles');
const nav = document.getElementById('nav');
const navToggleRoot = document.querySelector('[data-js="nav.toggle.root"]');
const navToggleArticles = document.querySelector('[data-js="nav.toggle.articles"]');
const sidePanels = document.getElementById('sidepanels');
let navItems;

const transEvents = {
	webkit: 'webkitTransitionEnd',
	opera: 'otransitionend',
	operaTwo: 'oTransitionEnd',
	ms: 'msTransitionEnd',
	transition: 'transitionend'
}

export const navHandler = () => {
	navItems = document.querySelectorAll('[data-js="nav.trigger"]');
	
	navItems.forEach(el => {
		el.addEventListener('click',handleClick);
	});

	dragscroll.addEventListener('click',()=>{
		closeArticles();
		deactivateTriggers();
	});

	navToggleRoot.addEventListener('click',toggleNavRoot);
	navToggleArticles.addEventListener('click',toggleArticles);
}

const handleClick = (e) => {
	const el = e.currentTarget;
	const targetName = el.getAttribute('data-target');
	const target = document.querySelector(`#htmlwrap [data-template="${targetName}"]`);
	const article = document.querySelector(`#articles [data-article="${targetName}"]`);
	const scrollX = target.offsetLeft;
	const scrollY = target.offsetTop;
	const dragscroll = document.getElementById('dragscroll');
	const offset = getOffset(target);

	deactivateTriggers();
	deactivateArticles();
	deactivateElements();
	el.classList.add('active');
	toggleArticles();
	nav.classList.add('hidden');
	target.classList.add('active');
	article.classList.add('active');	
	zoomCanvas(scrollX - offset.x);
	scrollTo(dragscroll, scrollX - offset.x, scrollY - offset.y);
}

const getOffset = (target) => {
	const targetName = target.getAttribute('data-template');
	const windowOffset = window.innerHeight/2 - target.offsetHeight/2;

	return getScrollSettings(targetName,windowOffset);
}

const closeArticles = () => {
	deactivateElements();
	deactivateArticles();
	sidePanels.classList.remove('articlesActive');
	canvasWrap.classList.remove('active');
	articles.classList.add('inactive');
}

const scrollTo = (element, x, y) => {
	scroll.left(element, x);
	scroll.top(element, y);
}

const zoomCanvas = (x) => {
	if(window.innerWidth > 1600) {
		setTimeout(()=>{
			canvasWrap.style['transform-origin'] = `${x - 200}px center 0px`;
			canvasWrap.classList.add('active');
		},300);
	}
}

const deactivateElements = () => {
	const htmlElements = htmlElements || document.querySelectorAll('#htmlwrap [data-js="template"]');

	htmlElements.forEach( el => {
		el.classList.remove('active') 
	});
}

const deactivateArticles = () => {
	const articlesWrap = document.getElementById('articles');
	const articles = document.querySelectorAll('#articles [data-js="article"]');

	articlesWrap.classList.remove('inactive');
	articles.forEach(el => {
		el.classList.remove('active');
	});
}

const toggleNavRoot = () => {
	sidePanels.classList.toggle('navActive');
}

const toggleArticles = () => {
	sidePanels.classList.contains('articlesActive') && deactivateArticles();
	sidePanels.classList.toggle('articlesActive');
}

const deactivateTriggers = () => {
	navItems.forEach(el => {
		el.classList.remove('active');
	});
}