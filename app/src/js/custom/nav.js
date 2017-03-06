import scroll from 'scroll';
import { getScrollSettings } from './scrollSettings';
import Hammer from 'hammerjs';
import propagating from 'propagating-hammerjs';

const transEvents = {
	webkit: 'webkitTransitionEnd',
	opera: 'otransitionend',
	operaTwo: 'oTransitionEnd',
	ms: 'msTransitionEnd',
	transition: 'transitionend'
}

export default class Navigation {
	/**
	 * @constructor
	 * @param {Object} Instantiated Grid class object
	 */
	constructor(Grid) {
		this.elements = this.runDomSelectors();
		this.addEventListeners();
	}

	/**
	 * Collect DOM elements for event handlers
	 * @return {Object} all elements
	 */
	runDomSelectors() {
		return {
			articles: document.getElementById('articles'),
			allArticles: [].slice.call(document.querySelectorAll('#articles [data-js="article"]')),
			boatsCanvas: document.querySelector('[data-canvas="animation.under"]'),
			btnCloseArticles: document.querySelector('[data-js="nav.articles.close"]'),
			canvasWrap: document.getElementById('isogrid'),
			dragscroll: document.getElementById('dragscroll'),
			homeArticle: document.querySelector('[data-js="article.home"]'),
			homeToggle: document.querySelector('[data-js="nav.home"]'),
			htmlElements: [].slice.call(document.querySelectorAll('#htmlwrap [data-js="template"]')),
			htmlWrap: document.getElementById('htmlwrap'),
			nav: document.getElementById('nav'),
			navItems: [].slice.call(document.querySelectorAll('[data-js="nav.trigger"],#htmlwrap [data-js="template"]')),
			navToggleRoot: document.querySelector('[data-js="nav.toggle.root"]'),
			navToggleArticles: document.querySelector('[data-js="nav.toggle.articles"]'),
			sidePanels: document.getElementById('sidepanels')			
		}	
	}

	/**
	 * Attach event handlers to this.elements members
	 * @return void
	 */
	addEventListeners() {
		this.elements.navItems.forEach(this.setupNavItem.bind(this));
		this.addDragscrollListener();
		this.elements.navToggleRoot.addEventListener('click',this.toggleNavRoot.bind(this));
		this.elements.navToggleArticles.addEventListener('click',this.toggleArticles.bind(this));
		this.elements.homeToggle.addEventListener('click',this.toggleHomeArticle.bind(this));
		this.elements.btnCloseArticles.addEventListener('click',this.deactivate.bind(this));
	}

	/**
	 * On 'tap' activate the relevant elements for viewing articles.
	 * @return void
	 */
	setupNavItem(el) {
		const hammerEl = propagating(new Hammer(el));
		hammerEl.on('tap',(e)=>{
			e.stopPropagation();
			this.handleClick(el);
		});
	}

	/**
	 * On 'tap' deactivate everything.
	 */
	addDragscrollListener() {
		const dragHammer = propagating(new Hammer(this.elements.dragscroll));
		dragHammer.on('tap',(e)=>{
			this.deactivate();			
		});
	}

	/**
	 * Click handler for all navigation triggers. Causes a scroll, a zoom and assorted class manipulations.
	 * @param {DOM Node} clicked element
	 */
	handleClick(el) {
		const targetName = el.getAttribute('data-target');
		const trigger = document.querySelector(`#nav [data-target="${targetName}"]`);
		let target, article;

		if(targetName !== 'home') {
			target = document.querySelector(`#htmlwrap [data-template="${targetName}"]`);
			article = document.querySelector(`#articles [data-article="${targetName}"]`);
		} else {
			target = document.querySelector(`#htmlwrap [data-template="eye"]`);
			article = document.querySelector(`#articles [data-article="${targetName}"]`);
		}

		this.deactivate();	
		this.toggleArticles();
		this.activateArticle(target, targetName, article, trigger);
	}

	/**
	 * Deactivate everything. Hide articles. Show map. Etc.
	 * @return void
	 */
	deactivate() {
		this.deactivateTriggers();
		this.closeArticles();
		this.elements.boatsCanvas.classList.remove('hide');
		this.elements.htmlWrap.classList.remove('active');
	}

	/**
	 * Activate the given article
	 * @param {DOM Node} click target trigger/navItem
	 * @param {String} target-id of navItem
	 * @param {DOM Node} target article
	 * @param {DOM Node} navItem for active and visited class additions
	 * @return void
	 */
	activateArticle(target, targetName, article, trigger) {
		const scrollX = target.offsetLeft;
		const scrollY = target.offsetTop;
		const offset = this.getOffset(target);

		this.scrollTo(dragscroll, scrollX - offset.x, scrollY - offset.y).then(()=>{
			targetName === 'tower-bridge' && this.elements.boatsCanvas.classList.add('hide');
			target.classList.add('active');
			article.classList.add('active');
			this.elements.sidePanels.classList.add('navActive');
			this.elements.nav.classList.add('hidden');		
			this.elements.articles.classList.remove('inactive');
			trigger.classList.add('active');
			trigger.classList.add('visited');
			this.elements.htmlWrap.classList.add('active');
		});
	}

	/**
	 * Calculates and returns the scrollTo position
	 * @param {Object} DOM Node
	 * @return { x: number, y: number } scroll positions for given DOM Node
	 */
	getOffset(target) {
		const targetName = target.getAttribute('data-template');
		const windowOffset = window.innerHeight/2 - target.offsetHeight/2;

		return getScrollSettings(targetName,windowOffset);
	}

	/**
	 * Closes articles
	 * @return void
	 */
	closeArticles() {
		this.deactivateElements();
		this.deactivateArticles();
		this.elements.sidePanels.classList.remove('articlesActive');
		this.elements.sidePanels.classList.remove('homeActive');
		this.elements.canvasWrap.classList.remove('active');
		this.elements.articles.classList.add('inactive');
	}

	/**
	 * Function for scrolling a certain DOM element using the scroll plugin
	 * @param {Object} DOM Node to be scrolled
	 * @param {Number} x
	 * @param {Number} y
	 * @return void
	 */
	scrollTo(element, x, y) {
		return new Promise((resolve,reject)=>{
			scroll.left(element, x,()=>{
				resolve();
			});
			scroll.top(element, y);
		});		
	}

	/**
	 * Loop through elements and remove active classes.
	 * @return void
	 */
	deactivateElements() {
		this.elements.htmlElements.forEach( el => {
			el.classList.remove('active') 
		});
	}

	/**
	 * Remove active classes from articles & nav items
	 * @return void
	 */
	deactivateArticles() {		
		this.elements.homeArticle.classList.remove('active');
		this.elements.articles.classList.remove('inactive');

		this.elements.allArticles.forEach(el => {
			el.classList.remove('active');
		});

		this.elements.navItems.forEach(el => {
			el.classList.remove('active');
		});
	}

	/**
	 * If homeArticle is active then deactivate everything. Otherwise, toggle the active nav class.
	 * @return void
	 */
	toggleNavRoot() {
		if(this.elements.sidePanels.classList.contains('homeActive')) {
			this.deactivate();
		} else {
			this.elements.sidePanels.classList.toggle('navActive');
		}
	}

	/**
	 * Toggle the articles active state
	 * @return void
	 */
	toggleArticles() {
		this.elements.sidePanels.classList.contains('articlesActive') && deactivateArticles();
		this.elements.sidePanels.classList.toggle('articlesActive');
	}

	/**
	 * Remove active state from all nav triggers
	 * @return void
	 */
	deactivateTriggers() {
		this.elements.navItems.forEach(el => {
			el.classList.remove('active');
		});
	}

	toggleHomeArticle() {
		this.deactivate();
		this.elements.sidePanels.classList.add('homeActive');
		this.elements.homeArticle.classList.add('active');
		this.elements.articles.classList.remove('inactive');
	}
}