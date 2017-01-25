/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _main = __webpack_require__(1);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log('Boileoplate installed successfully');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./main.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block; }\n\nblockquote,\nq {\n  quotes: none; }\n\nq:before,\nq:after,\nblockquote:before,\nblockquote:after {\n  content: \"\"; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\nimg {\n  -ms-interpolation-mode: bicubic; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title],\ndfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ninput,\nselect {\n  vertical-align: middle; }\n\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none; }\n\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  font-size: 100%;\n  vertical-align: middle; }\n\nbutton,\ninput {\n  overflow: visible;\n  line-height: normal; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  cursor: pointer;\n  -webkit-appearance: button; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  -webkit-appearance: textfield; }\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\nh1, h2, h3, h4, h5 {\n  line-height: normal; }\n\n.rteCopy h1, .alpha {\n  font-size: 50px;\n  font-size: 5rem;\n  font-family: Arial, serif;\n  color: inherit;\n  line-height: 1.1;\n  font-weight: 400; }\n\n.alpha {\n  margin-bottom: 0.84em; }\n\n.rteCopy h2, .beta {\n  font-size: 40px;\n  font-size: 4rem;\n  font-family: Arial, serif;\n  color: inherit;\n  line-height: 1;\n  font-weight: 500; }\n\n.beta {\n  margin-bottom: 1.05em; }\n\n.rteCopy h3, .gamma {\n  font-size: 20px;\n  font-size: 2rem;\n  font-family: Arial, serif;\n  color: inherit;\n  line-height: 1.4;\n  font-weight: 500; }\n\n.gamma {\n  margin-bottom: 1em; }\n\n.rteCopy h4, .delta {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-family: Arial, sans-serif;\n  color: inherit;\n  line-height: 1.1875;\n  font-weight: 700; }\n\n.delta {\n  margin-bottom: 0.625em; }\n\nbody {\n  background-color: red; }\n", "", {"version":3,"sources":["/./app/src/scss/app/src/scss/utils/_resets.scss","/./app/src/scss/app/src/scss/components/_typography.scss","/./app/src/scss/app/src/scss/utils/_custom-mixins.scss","/./app/src/scss/app/src/scss/utils/_variables.scss","/./app/src/scss/app/src/scss/main.scss"],"names":[],"mappings":"AAMA;EACC,UAAQ;EACR,WAAS;EACT,UAAQ;EACR,WAAS;EACT,gBAAc;EACd,yBAAuB;EACvB,wBAAsB,EACtB;;AAED;EACC,eAAa,EACb;;AAED;;EAEC,iBAAgB,EAChB;;AAED;;;;;;;;;;;;EAYC,eAAa,EACb;;AAED;;EAEC,aAAW,EACX;;AAGD;;;;EAIE,YAAW,EACZ;;AAED;EACC,UAAQ;EACR,WAAS;EACT,gBAAc;EACd,yBAAuB;EACvB,wBAAsB,EACtB;;AAED;EACC,gCAA+B,EAC/B;;AAED;EACC,8BAA6B,EAC7B;;AAED;;EAEC,0BAAwB;EACxB,aAAW,EACX;;AAED;EACC,0BAAwB;EACxB,kBAAgB,EAChB;;AAED;;EAEC,uBAAqB,EACrB;;AAED;EACC,uBAAqB;EACrB,YAAU;EACV,sBAAoB,EACpB;;AAED;EACC,uBAAqB;EACrB,YAAU;EACV,mBAAiB;EACjB,kBAAgB,EAChB;;AAID;;;;EAIE,UAAS;EACT,gBAAe;EACf,uBAAsB,EACvB;;AACD;;EAEE,kBAAiB;EACjB,oBAAmB,EACpB;;AACD;;EAEE,WAAU;EACV,UAAS,EACV;;AACD;;;;EAIE,gBAAe;EACf,2BAA0B,EAC3B;;AACD;EACE,gCAA+B;EAC/B,6BAA4B;EAC5B,wBAAuB;EACvB,8BAA6B,EAC9B;;AACD;;EAEE,yBAAwB,EACzB;;AACD;EACE,eAAc;EACd,oBAAmB,EACpB;;ACvID;EACC,oBAAmB,EACnB;;AAIA;ECCC,gBAA0B;EAC1B,gBAAkC;EDAlC,0BAAa;EACb,eAAO;EACP,iBAAgE;EAChE,iBEW2B,EFV3B;;AAED;EACC,sBCd8B,EDe9B;;AAVD;ECCC,gBAA0B;EAC1B,gBAAkC;EDAlC,0BAAa;EACb,eAAO;EACP,eAAgE;EAChE,iBEWgC,EFVhC;;AAED;EACC,sBCd8B,EDe9B;;AAVD;ECCC,gBAA0B;EAC1B,gBAAkC;EDAlC,0BAAa;EACb,eAAO;EACP,iBAAgE;EAChE,iBEWqC,EFVrC;;AAED;EACC,mBCd8B,EDe9B;;AAVD;ECCC,gBAA0B;EAC1B,kBAAkC;EDAlC,+BAAa;EACb,eAAO;EACP,oBAAgE;EAChE,iBEW0C,EFV1C;;AAED;EACC,uBCd8B,EDe9B;;AGVF;EACC,sBAAqB,EACrB","file":"main.scss","sourcesContent":["\n//\n// Resets\n// --------------------------------------------------\n\n\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {\n\tmargin:0; \n\tpadding:0; \n\tborder:0; \n\toutline:0; \n\tfont-size:100%; \n\tvertical-align:baseline; \n\tbackground:transparent;\n}\n\nbody {\n\tline-height:1;\n}\n\nol, \nul{\n\tlist-style: none;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain{\n\tdisplay:block;\n}\n\nblockquote,\nq {\n\tquotes:none;\n}\n\n// Quotes\nq:before,\nq:after,\nblockquote:before,\nblockquote:after {\n  content: \"\";\n}\n\na {\n\tmargin:0;\n\tpadding:0;\n\tfont-size:100%;\n\tvertical-align:baseline;\n\tbackground:transparent;\n}\n\nimg {\n\t-ms-interpolation-mode: bicubic;\n}\n\ndel {\n\ttext-decoration: line-through;\n}\n\nabbr[title], \ndfn[title] {\n\tborder-bottom:1px dotted;\n\tcursor:help;\n}\n\ntable {\n\tborder-collapse:collapse;\n\tborder-spacing:0;\n}\n\ninput,\nselect { \n\tvertical-align:middle;\n}\n\nins {\n\tbackground-color:#ff9; \n\tcolor:#000; \n\ttext-decoration:none;\n}\n\nmark {\n\tbackground-color:#ff9;\n\tcolor:#000; \n\tfont-style:italic; \n\tfont-weight:bold;\n}\n\n// Form Resets\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  font-size: 100%;\n  vertical-align: middle;\n}\nbutton,\ninput {\n  overflow: visible;\n  line-height: normal;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}","// Headings\n// -------------------------\n\nh1,h2,h3,h4,h5 {\n\tline-height: normal;\n}\n\n\n@for $i from 1 through length($headings) {\n\t.rteCopy h#{$i},#{nth($headings,$i)} {\n\t\t@include font-size(nth($headingSizes,$i));\n\t\tfont-family: #{nth($headingFamilies,$i)};\n\t\tcolor: #{nth($headingColors,$i)};\n\t\tline-height: (nth($headingLineHeights,$i)/nth($headingSizes,$i));\n\t\tfont-weight: nth($headingFontWeights,$i);\n\t}\n\t\n\t#{nth($headings,$i)} {\n\t\tmargin-bottom: em(nth($headingMargins,$i),nth($headingSizes,$i));\n\t}\n}","// Convert pixels to ems\n// eg. for a relational value of 12px write em(12) when the parent is 16px\n// if the parent is another value say 24px write em(12, 24)\n@function em($pxval, $base: $font-size-base) {\n  @return ($pxval / $base) * 1em;\n}\n\n// Font sizing using rems with a fallback to px in unsupported\n// Font-size of 62.5% must be set on body\n@mixin font-size($sizeValue: 16){\n  font-size: $sizeValue + px;\n  font-size: ($sizeValue / 10) + rem;\n}","// variables //\n\n// Typography\n// -------------------------\t\n\t\n\t// family\n\t$ffBase: \t\t\tArial, sans-serif;\n\t$ffSecondary: \t\tArial, sans-serif;\n\t$ffHeadings: \t\tArial, serif;\n\t\n\t\n\t// style\n\t$fzBase: \t\t\t16 !default;\n\t$lhBase: \t\t\t19 !default;\n\t$fwBase: \t\t\t400;\n\n// Headings\n// -------------------------\n\n\t$headings: \t\t\t\t\t\t\t'.alpha','.beta','.gamma','.delta';\n\t$headingSizes: \t\t\t\t\t\t50,40,20,16;\n\t$headingFamilies: \t\t\t\t\t$ffHeadings, $ffHeadings, $ffHeadings, $ffBase;\n\t$headingColors: \t\t\t\t\tinherit , inherit, inherit, inherit;\n\t$headingMargins: \t\t\t\t\t42,42,20,10;\n\t$headingLineHeights: \t\t\t\t55,40,28,19;\n\t$headingFontWeights: \t\t\t\t400, 500, 500, 700;\n\n","@import 'bourbon';\n@import 'utils/variables';\n@import 'utils/custom-mixins';\n@import 'utils/media-queries';\n@import 'utils/resets';\n@import 'utils/placeholders';\n@import 'components/global';\n@import 'components/typography';\n\nbody {\n\tbackground-color: red;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzdlZmMyZmEzYzkwNTM1YWY1MjUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2FwcC9zcmMvc2Nzcy9tYWluLnNjc3M/NzMyMyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUNBOzs7Ozs7QUFFQUEsU0FBUUMsR0FBUixDQUFZLG9DQUFaLEU7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrYkFBOGIsY0FBYyxlQUFlLGNBQWMsZUFBZSxvQkFBb0IsNkJBQTZCLDRCQUE0QixFQUFFLFVBQVUsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSw4R0FBOEcsbUJBQW1CLEVBQUUsb0JBQW9CLGlCQUFpQixFQUFFLCtEQUErRCxrQkFBa0IsRUFBRSxPQUFPLGNBQWMsZUFBZSxvQkFBb0IsNkJBQTZCLDRCQUE0QixFQUFFLFNBQVMsb0NBQW9DLEVBQUUsU0FB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OztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUEsOEJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM3ZWZjMmZhM2M5MDUzNWFmNTI1IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuY29uc29sZS5sb2coJ0JvaWxlb3BsYXRlIGluc3RhbGxlZCBzdWNjZXNzZnVsbHknKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc3JjL2pzL21haW4uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3NyYy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3Bhbiwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYWJiciwgYWRkcmVzcywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzYW1wLCBzbWFsbCwgc3Ryb25nLCBzdWIsIHN1cCwgdmFyLCBiLCBpLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5xOmJlZm9yZSxcXG5xOmFmdGVyLFxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7IH1cXG5cXG5hIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbmltZyB7XFxuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyB9XFxuXFxuZGVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XFxuXFxuYWJiclt0aXRsZV0sXFxuZGZuW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbiAgY3Vyc29yOiBoZWxwOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG5pbnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH1cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDsgfVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyB9XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH1cXG5cXG4ucnRlQ29weSBoMSwgLmFscGhhIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2VyaWY7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuLmFscGhhIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuODRlbTsgfVxcblxcbi5ydGVDb3B5IGgyLCAuYmV0YSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNlcmlmO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uYmV0YSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjA1ZW07IH1cXG5cXG4ucnRlQ29weSBoMywgLmdhbW1hIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2VyaWY7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLmdhbW1hIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5ydGVDb3B5IGg0LCAuZGVsdGEge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE4NzU7XFxuICBmb250LXdlaWdodDogNzAwOyB9XFxuXFxuLmRlbHRhIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgfVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9hcHAvc3JjL3Njc3MvYXBwL3NyYy9zY3NzL3V0aWxzL19yZXNldHMuc2Nzc1wiLFwiLy4vYXBwL3NyYy9zY3NzL2FwcC9zcmMvc2Nzcy9jb21wb25lbnRzL190eXBvZ3JhcGh5LnNjc3NcIixcIi8uL2FwcC9zcmMvc2Nzcy9hcHAvc3JjL3Njc3MvdXRpbHMvX2N1c3RvbS1taXhpbnMuc2Nzc1wiLFwiLy4vYXBwL3NyYy9zY3NzL2FwcC9zcmMvc2Nzcy91dGlscy9fdmFyaWFibGVzLnNjc3NcIixcIi8uL2FwcC9zcmMvc2Nzcy9hcHAvc3JjL3Njc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBQ0MsVUFBUTtFQUNSLFdBQVM7RUFDVCxVQUFRO0VBQ1IsV0FBUztFQUNULGdCQUFjO0VBQ2QseUJBQXVCO0VBQ3ZCLHdCQUFzQixFQUN0Qjs7QUFFRDtFQUNDLGVBQWEsRUFDYjs7QUFFRDs7RUFFQyxpQkFBZ0IsRUFDaEI7O0FBRUQ7Ozs7Ozs7Ozs7OztFQVlDLGVBQWEsRUFDYjs7QUFFRDs7RUFFQyxhQUFXLEVBQ1g7O0FBR0Q7Ozs7RUFJRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDQyxVQUFRO0VBQ1IsV0FBUztFQUNULGdCQUFjO0VBQ2QseUJBQXVCO0VBQ3ZCLHdCQUFzQixFQUN0Qjs7QUFFRDtFQUNDLGdDQUErQixFQUMvQjs7QUFFRDtFQUNDLDhCQUE2QixFQUM3Qjs7QUFFRDs7RUFFQywwQkFBd0I7RUFDeEIsYUFBVyxFQUNYOztBQUVEO0VBQ0MsMEJBQXdCO0VBQ3hCLGtCQUFnQixFQUNoQjs7QUFFRDs7RUFFQyx1QkFBcUIsRUFDckI7O0FBRUQ7RUFDQyx1QkFBcUI7RUFDckIsWUFBVTtFQUNWLHNCQUFvQixFQUNwQjs7QUFFRDtFQUNDLHVCQUFxQjtFQUNyQixZQUFVO0VBQ1YsbUJBQWlCO0VBQ2pCLGtCQUFnQixFQUNoQjs7QUFJRDs7OztFQUlFLFVBQVM7RUFDVCxnQkFBZTtFQUNmLHVCQUFzQixFQUN2Qjs7QUFDRDs7RUFFRSxrQkFBaUI7RUFDakIsb0JBQW1CLEVBQ3BCOztBQUNEOztFQUVFLFdBQVU7RUFDVixVQUFTLEVBQ1Y7O0FBQ0Q7Ozs7RUFJRSxnQkFBZTtFQUNmLDJCQUEwQixFQUMzQjs7QUFDRDtFQUNFLGdDQUErQjtFQUMvQiw2QkFBNEI7RUFDNUIsd0JBQXVCO0VBQ3ZCLDhCQUE2QixFQUM5Qjs7QUFDRDs7RUFFRSx5QkFBd0IsRUFDekI7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3BCOztBQ3ZJRDtFQUNDLG9CQUFtQixFQUNuQjs7QUFJQTtFQ0NDLGdCQUEwQjtFQUMxQixnQkFBa0M7RURBbEMsMEJBQWE7RUFDYixlQUFPO0VBQ1AsaUJBQWdFO0VBQ2hFLGlCRVcyQixFRlYzQjs7QUFFRDtFQUNDLHNCQ2Q4QixFRGU5Qjs7QUFWRDtFQ0NDLGdCQUEwQjtFQUMxQixnQkFBa0M7RURBbEMsMEJBQWE7RUFDYixlQUFPO0VBQ1AsZUFBZ0U7RUFDaEUsaUJFV2dDLEVGVmhDOztBQUVEO0VBQ0Msc0JDZDhCLEVEZTlCOztBQVZEO0VDQ0MsZ0JBQTBCO0VBQzFCLGdCQUFrQztFREFsQywwQkFBYTtFQUNiLGVBQU87RUFDUCxpQkFBZ0U7RUFDaEUsaUJFV3FDLEVGVnJDOztBQUVEO0VBQ0MsbUJDZDhCLEVEZTlCOztBQVZEO0VDQ0MsZ0JBQTBCO0VBQzFCLGtCQUFrQztFREFsQywrQkFBYTtFQUNiLGVBQU87RUFDUCxvQkFBZ0U7RUFDaEUsaUJFVzBDLEVGVjFDOztBQUVEO0VBQ0MsdUJDZDhCLEVEZTlCOztBR1ZGO0VBQ0Msc0JBQXFCLEVBQ3JCXCIsXCJmaWxlXCI6XCJtYWluLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLy9cXG4vLyBSZXNldHNcXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3Bhbiwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYWJiciwgYWRkcmVzcywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzYW1wLCBzbWFsbCwgc3Ryb25nLCBzdWIsIHN1cCwgdmFyLCBiLCBpLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjowOyBcXG5cXHRwYWRkaW5nOjA7IFxcblxcdGJvcmRlcjowOyBcXG5cXHRvdXRsaW5lOjA7IFxcblxcdGZvbnQtc2l6ZToxMDAlOyBcXG5cXHR2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTsgXFxuXFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6MTtcXG59XFxuXFxub2wsIFxcbnVse1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbm1haW57XFxuXFx0ZGlzcGxheTpibG9jaztcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG5cXHRxdW90ZXM6bm9uZTtcXG59XFxuXFxuLy8gUXVvdGVzXFxucTpiZWZvcmUsXFxucTphZnRlcixcXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG5hIHtcXG5cXHRtYXJnaW46MDtcXG5cXHRwYWRkaW5nOjA7XFxuXFx0Zm9udC1zaXplOjEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246YmFzZWxpbmU7XFxuXFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcXG59XFxuXFxuaW1nIHtcXG5cXHQtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xcbn1cXG5cXG5kZWwge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5hYmJyW3RpdGxlXSwgXFxuZGZuW3RpdGxlXSB7XFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkO1xcblxcdGN1cnNvcjpoZWxwO1xcbn1cXG5cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOjA7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7IFxcblxcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXG59XFxuXFxuaW5zIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZjk7IFxcblxcdGNvbG9yOiMwMDA7IFxcblxcdHRleHQtZGVjb3JhdGlvbjpub25lO1xcbn1cXG5cXG5tYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZjk7XFxuXFx0Y29sb3I6IzAwMDsgXFxuXFx0Zm9udC1zdHlsZTppdGFsaWM7IFxcblxcdGZvbnQtd2VpZ2h0OmJvbGQ7XFxufVxcblxcbi8vIEZvcm0gUmVzZXRzXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVwiLFwiLy8gSGVhZGluZ3NcXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuaDEsaDIsaDMsaDQsaDUge1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcblxcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRoZWFkaW5ncykge1xcblxcdC5ydGVDb3B5IGgjeyRpfSwje250aCgkaGVhZGluZ3MsJGkpfSB7XFxuXFx0XFx0QGluY2x1ZGUgZm9udC1zaXplKG50aCgkaGVhZGluZ1NpemVzLCRpKSk7XFxuXFx0XFx0Zm9udC1mYW1pbHk6ICN7bnRoKCRoZWFkaW5nRmFtaWxpZXMsJGkpfTtcXG5cXHRcXHRjb2xvcjogI3tudGgoJGhlYWRpbmdDb2xvcnMsJGkpfTtcXG5cXHRcXHRsaW5lLWhlaWdodDogKG50aCgkaGVhZGluZ0xpbmVIZWlnaHRzLCRpKS9udGgoJGhlYWRpbmdTaXplcywkaSkpO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBudGgoJGhlYWRpbmdGb250V2VpZ2h0cywkaSk7XFxuXFx0fVxcblxcdFxcblxcdCN7bnRoKCRoZWFkaW5ncywkaSl9IHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiBlbShudGgoJGhlYWRpbmdNYXJnaW5zLCRpKSxudGgoJGhlYWRpbmdTaXplcywkaSkpO1xcblxcdH1cXG59XCIsXCIvLyBDb252ZXJ0IHBpeGVscyB0byBlbXNcXG4vLyBlZy4gZm9yIGEgcmVsYXRpb25hbCB2YWx1ZSBvZiAxMnB4IHdyaXRlIGVtKDEyKSB3aGVuIHRoZSBwYXJlbnQgaXMgMTZweFxcbi8vIGlmIHRoZSBwYXJlbnQgaXMgYW5vdGhlciB2YWx1ZSBzYXkgMjRweCB3cml0ZSBlbSgxMiwgMjQpXFxuQGZ1bmN0aW9uIGVtKCRweHZhbCwgJGJhc2U6ICRmb250LXNpemUtYmFzZSkge1xcbiAgQHJldHVybiAoJHB4dmFsIC8gJGJhc2UpICogMWVtO1xcbn1cXG5cXG4vLyBGb250IHNpemluZyB1c2luZyByZW1zIHdpdGggYSBmYWxsYmFjayB0byBweCBpbiB1bnN1cHBvcnRlZFxcbi8vIEZvbnQtc2l6ZSBvZiA2Mi41JSBtdXN0IGJlIHNldCBvbiBib2R5XFxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZVZhbHVlOiAxNil7XFxuICBmb250LXNpemU6ICRzaXplVmFsdWUgKyBweDtcXG4gIGZvbnQtc2l6ZTogKCRzaXplVmFsdWUgLyAxMCkgKyByZW07XFxufVwiLFwiLy8gdmFyaWFibGVzIC8vXFxuXFxuLy8gVHlwb2dyYXBoeVxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHRcXG5cXHRcXG5cXHQvLyBmYW1pbHlcXG5cXHQkZmZCYXNlOiBcXHRcXHRcXHRBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHQkZmZTZWNvbmRhcnk6IFxcdFxcdEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdCRmZkhlYWRpbmdzOiBcXHRcXHRBcmlhbCwgc2VyaWY7XFxuXFx0XFxuXFx0XFxuXFx0Ly8gc3R5bGVcXG5cXHQkZnpCYXNlOiBcXHRcXHRcXHQxNiAhZGVmYXVsdDtcXG5cXHQkbGhCYXNlOiBcXHRcXHRcXHQxOSAhZGVmYXVsdDtcXG5cXHQkZndCYXNlOiBcXHRcXHRcXHQ0MDA7XFxuXFxuLy8gSGVhZGluZ3NcXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuXFx0JGhlYWRpbmdzOiBcXHRcXHRcXHRcXHRcXHRcXHRcXHQnLmFscGhhJywnLmJldGEnLCcuZ2FtbWEnLCcuZGVsdGEnO1xcblxcdCRoZWFkaW5nU2l6ZXM6IFxcdFxcdFxcdFxcdFxcdFxcdDUwLDQwLDIwLDE2O1xcblxcdCRoZWFkaW5nRmFtaWxpZXM6IFxcdFxcdFxcdFxcdFxcdCRmZkhlYWRpbmdzLCAkZmZIZWFkaW5ncywgJGZmSGVhZGluZ3MsICRmZkJhc2U7XFxuXFx0JGhlYWRpbmdDb2xvcnM6IFxcdFxcdFxcdFxcdFxcdGluaGVyaXQgLCBpbmhlcml0LCBpbmhlcml0LCBpbmhlcml0O1xcblxcdCRoZWFkaW5nTWFyZ2luczogXFx0XFx0XFx0XFx0XFx0NDIsNDIsMjAsMTA7XFxuXFx0JGhlYWRpbmdMaW5lSGVpZ2h0czogXFx0XFx0XFx0XFx0NTUsNDAsMjgsMTk7XFxuXFx0JGhlYWRpbmdGb250V2VpZ2h0czogXFx0XFx0XFx0XFx0NDAwLCA1MDAsIDUwMCwgNzAwO1xcblxcblwiLFwiQGltcG9ydCAnYm91cmJvbic7XFxuQGltcG9ydCAndXRpbHMvdmFyaWFibGVzJztcXG5AaW1wb3J0ICd1dGlscy9jdXN0b20tbWl4aW5zJztcXG5AaW1wb3J0ICd1dGlscy9tZWRpYS1xdWVyaWVzJztcXG5AaW1wb3J0ICd1dGlscy9yZXNldHMnO1xcbkBpbXBvcnQgJ3V0aWxzL3BsYWNlaG9sZGVycyc7XFxuQGltcG9ydCAnY29tcG9uZW50cy9nbG9iYWwnO1xcbkBpbXBvcnQgJ2NvbXBvbmVudHMvdHlwb2dyYXBoeSc7XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwIS4vYXBwL3NyYy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==