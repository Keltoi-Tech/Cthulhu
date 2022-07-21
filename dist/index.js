/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing */ \"./src/routing.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\r\n\r\n\r\n\r\nconst routing=new _routing__WEBPACK_IMPORTED_MODULE_1__.Routing(\r\n    {\r\n      produtos:{\r\n        calcas:'redirect to calças'\r\n      }  \r\n    }\r\n)\r\n\r\nconst display=()=>(0,_model__WEBPACK_IMPORTED_MODULE_0__.component)(\r\n    {\r\n        h1:{\r\n            content:'Goodbye fucking world!'\r\n        },\r\n        hr:{},\r\n        p:[\r\n            {content:'Cthulhu is coming'},\r\n            {content:'Smile :)'}\r\n        ]\r\n    }\r\n);\r\n\r\nconst displays=()=>(0,_model__WEBPACK_IMPORTED_MODULE_0__.component)(\r\n    [\r\n        display(),\r\n        display(),\r\n        display(),\r\n        display()\r\n    ]\r\n)\r\n\r\nalert(routing.to('/produtos/calcas'));\r\n(0,_view__WEBPACK_IMPORTED_MODULE_2__.view)(displays);\n\n//# sourceURL=webpack://cthulhu/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cthulhu\": () => (/* binding */ Cthulhu),\n/* harmony export */   \"component\": () => (/* binding */ component),\n/* harmony export */   \"cthulhu\": () => (/* binding */ cthulhu),\n/* harmony export */   \"kebabize\": () => (/* binding */ kebabize),\n/* harmony export */   \"notIn\": () => (/* binding */ notIn),\n/* harmony export */   \"register\": () => (/* binding */ register)\n/* harmony export */ });\nlet prefix='app';\r\n\r\nconst register=(name,component)=>customElements.define(`${prefix}-${name}`,component);\r\n\r\nconst notIn=(e,...row)=>!row.includes(e);\r\n\r\nconst upperFinder=new RegExp(\"[A-Z]\");\r\n\r\nconst kebab=(l,i)=>upperFinder.test(l) && i>0?`-${l.toLowerCase()}`:l;\r\n\r\nconst kebabize=str=>str.split('').map((s,i)=>kebab(s,i)).join('');\r\n\r\nclass Fhtagn extends HTMLElement\r\n{\r\n    constructor(o,s=undefined){\r\n        super();\r\n        this.element = this.attachShadow({mode:'closed'});\r\n        this.doom = o;\r\n        if (!!s)\r\n            cthulhu(this.element,this.doom,s);\r\n        else \r\n            cthulhu(this.element,this.doom);\r\n    }\r\n}\r\n\r\ncustomElements.define('component-fthagn',Fhtagn);\r\n\r\nconst build=async (e,o,p,s=undefined)=>{\r\n    if (Array.isArray(o[p]))\r\n        o[p].forEach(async le=>{\r\n            if (le instanceof (Fhtagn))\r\n                e.appendChild(le);\r\n            else \r\n                e.appendChild(await fhtagn(p,le,s))\r\n        });\r\n    else if(o[p] instanceof Fhtagn)\r\n        e.appendChild(o[p]);\r\n    else\r\n        e.appendChild(await fhtagn(p,o[p],s));\r\n}\r\n\r\nconst doom=(o,e)=>{\r\n    o.attr.recon=()=>{\r\n        const k=Object.keys(o.attr);\r\n        k.forEach(a=>{\r\n            if (e.hasAttribute(a))\r\n                if (o.attr[a]!=e.getAttribute(a))\r\n                    e.setAttribute(a,o.attr[a]);\r\n            else \r\n                e.setAttribute(a,o.attr[a]);\r\n        });\r\n\r\n        e\r\n        .getAttributeNames()\r\n        .filter(a=>!k.includes(a))\r\n        .forEach(a=>e.removeAttribute(a));\r\n    }\r\n    \r\n    o.event.add = ev=>e.addEventListener(ev,o.event[ev]);\r\n    o.event.remove=ev=>e.removeEventListener(ev);\r\n\r\n    o.recon=()=>{\r\n        if (!!o.content)e.textContent=o.content;\r\n    }\r\n\r\n    o.build=async (s=undefined)=>{\r\n        o.recon();\r\n        o.attr.recon();\r\n\r\n        const children=\r\n            Object.keys(o)\r\n            .filter(prop=>notIn(prop,'attr','event','content','recon','build','service'));\r\n\r\n        if (children.length>0){\r\n            e.textContent='';\r\n            children.forEach(async prop=>await build(e,o,prop,s?s:undefined));\r\n        }\r\n    }\r\n\r\n    return o;\r\n}\r\n\r\nconst fhtagn=async (p,o,s=undefined)=>{\r\n    let e = document.createElement(kebabize(p));\r\n\r\n    if(!o.attr)o.attr={};\r\n\r\n    if (!!o.event)\r\n        Object\r\n        .keys(o.event)\r\n        .forEach(ev=>e.addEventListener(ev,o.event[ev]));\r\n    else \r\n        o.event = {};\r\n\r\n    o = doom(o,e);\r\n\r\n    await s?o.build(s):o.build();\r\n\r\n    return e;\r\n}\r\n\r\nconst component=(o,s=undefined)=>\r\n    !!s?new Fhtagn(o,s):new Fhtagn(o);\r\n\r\nconst cthulhu=async(p,o,s=undefined)=>{\r\n    Object\r\n    .keys(o)\r\n    .forEach(async prop=>await build(p,o,prop,s));\r\n}\r\n\r\nclass Cthulhu extends HTMLElement{\r\n    constructor(o,attrs){\r\n        super();\r\n\r\n        this.element = this.attachShadow({mode:'closed'});\r\n        this.doom = o;\r\n        this.attrs = attrs;\r\n    }    \r\n\r\n    static get observedAttributes(){return Object.keys(this.attr);}\r\n\r\n    build(){}\r\n\r\n    connectedCallbacks(){\r\n        Cthulhu.observedAttributes.forEach(attr=>{\r\n            this[attr]=this.getAttribute(attr);\r\n        });\r\n        cthulhu(this.element,this.doom,this.service);\r\n    }\r\n\r\n    attributeChangedCallback(name, oldValue, newValue) \r\n    {\r\n        if (oldValue!=newValue && !!oldValue){\r\n            this[attr] = this.getAttribute(name);\r\n            this.build();\r\n        }\r\n    }\r\n\r\n    disconnectedCallback(){\r\n        this.doom = null;\r\n        this.service = null;\r\n        this.attrs = null;\r\n    }    \r\n}\r\n\n\n//# sourceURL=webpack://cthulhu/./src/model.js?");

/***/ }),

/***/ "./src/routing.js":
/*!************************!*\
  !*** ./src/routing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routing\": () => (/* binding */ Routing)\n/* harmony export */ });\nclass Routing {\r\n    constructor(routes){\r\n        this.root=window.location.pathname;\r\n        this.routes = routes;\r\n        if (!this.routes.notFound)this.routes.notFound='/';\r\n    }\r\n\r\n    to=(path='/')=>\r\n    {\r\n        const goTo = path.split('/');\r\n        let destiny = this.routes;\r\n        goTo\r\n        .filter(p=>!p=='')\r\n        .forEach(p=>{\r\n            destiny = destiny[p];\r\n        });\r\n        history.replaceState(null,null,path);\r\n        return destiny;\r\n    }\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/routing.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"view\": () => (/* binding */ view)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\r\n\r\n\r\nconst view=async (fthagn,service=undefined)=>{\r\n    if (!!service)\r\n        (0,_model__WEBPACK_IMPORTED_MODULE_0__.cthulhu)(document.body,await fthagn(service),service);\r\n    else \r\n        (0,_model__WEBPACK_IMPORTED_MODULE_0__.cthulhu)(document.body,await fthagn());\r\n};\n\n//# sourceURL=webpack://cthulhu/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;