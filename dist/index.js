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

/***/ "./src/component/css/searchButton.css":
/*!********************************************!*\
  !*** ./src/component/css/searchButton.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"div{\\r\\n    width:90px;\\r\\n    height: 34px;\\r\\n}\\r\\n\\r\\ndiv > button{\\r\\n    width:auto;\\r\\n    color: black;\\r\\n    font-size: larger;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cthulhu/./src/component/css/searchButton.css?");

/***/ }),

/***/ "./src/component/css/sideMenu.css":
/*!****************************************!*\
  !*** ./src/component/css/sideMenu.css ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"aside{\\r\\n    position:absolute;\\r\\n    padding: 0;\\r\\n    height:100%;\\r\\n    top:0px;\\r\\n    background-color: rgba(0,0,0);\\r\\n    color:white;\\r\\n    transition:width 1s ease-in-out;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\naside.inactive{\\r\\n    width: 0;\\r\\n}\\r\\n\\r\\naside.active{\\r\\n    width:377px;\\r\\n}\\r\\n\\r\\naside > span{\\r\\n    margin-left: 5%;\\r\\n    padding: 1px ;\\r\\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\r\\n    font-size:xx-large;\\r\\n}\\r\\n\\r\\naside > span:hover{\\r\\n    cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cthulhu/./src/component/css/sideMenu.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cthulhu/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cthulhu/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HtmlComponent\": () => (/* binding */ HtmlComponent),\n/* harmony export */   \"component\": () => (/* binding */ component),\n/* harmony export */   \"define\": () => (/* binding */ define),\n/* harmony export */   \"trait\": () => (/* binding */ trait)\n/* harmony export */ });\n/* harmony import */ var _cthulhu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cthulhu */ \"./src/cthulhu.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\nclass HtmlComponent extends HTMLElement{\r\n    constructor(){\r\n        super();\r\n        this.template={};\r\n        this.element = this.attachShadow({mode:'closed'});\r\n    }\r\n\r\n    disconnectedCallback(){\r\n        this.root.dispose();\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.root = new _cthulhu__WEBPACK_IMPORTED_MODULE_0__.Cthulhu(this.template);\r\n        this.root.build(true).then(e=>this.element.appendChild(e));        \r\n    }\r\n\r\n    appendChild(node=new Node){\r\n        this.element.appendChild(node);\r\n    }\r\n}\r\n\r\nconst define=(type)=>{\r\n    const name = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.kek)(type.name);\r\n    if (customElements.get(name)===undefined)customElements.define(name,type);\r\n}\r\n\r\nconst component = (func, param = null)=>{\r\n    const name = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.kek)(func.name);\r\n    let elementInstance = customElements.get(name);\r\n    if (elementInstance===undefined){\r\n        customElements.define(name,\r\n        class extends HtmlComponent{\r\n            constructor(param = undefined){\r\n                super();\r\n                this.template = !!param?func(param):func();\r\n            }\r\n        });\r\n\r\n        elementInstance = customElements.get(name);\r\n    }\r\n\r\n    return new elementInstance(param);\r\n}\r\n\r\nconst trait = (func,param = null) =>{\r\n    const name = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.kek)(func.name);\r\n    return new _cthulhu__WEBPACK_IMPORTED_MODULE_0__.Cthulhu(!!param?func(param):func(),name);\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/component.js?");

/***/ }),

/***/ "./src/component/hamburger.js":
/*!************************************!*\
  !*** ./src/component/hamburger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HamburgerMenu\": () => (/* binding */ HamburgerMenu)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/component.js\");\n\r\n\r\nconst style={\r\n    content:`\r\n        div{\r\n            padding:3px 5px;\r\n            width:34px;\r\n            transition:transform 1s;\r\n        }\r\n        \r\n        div.bordered{\r\n            border:1px solid black;\r\n        }\r\n\r\n        div.clicked{\r\n            transform:rotate(90deg);\r\n        }\r\n\r\n        hr{\r\n            border:1px solid black;\r\n        }`\r\n}\r\n\r\nclass HamburgerMenu extends _component__WEBPACK_IMPORTED_MODULE_0__.HtmlComponent{\r\n    #clicked;\r\n    #rotate;\r\n    constructor(){\r\n        super();\r\n        this.#rotate= false;\r\n        this.#clicked=false;\r\n        this.template = {\r\n            style,\r\n            div:{\r\n                events:{\r\n                    click:()=>this.clickedUp()\r\n                },\r\n                attributes:{\r\n                    class:''\r\n                },\r\n                hr:[{},{},{}]\r\n            }\r\n        };\r\n    }\r\n\r\n    clickedUp(){\r\n        this.#clicked = !this.#clicked;\r\n        const css = this.root.div.attributes['class'];\r\n        if (this.#rotate){\r\n            if (this.#clicked){\r\n                this.root.div.setAttribute('class',`${css} clicked`);\r\n            } else { \r\n                this.root.div.setAttribute('class',css.replace(' clicked',''))\r\n            }\r\n        }\r\n        this.root.div.build();\r\n    }\r\n\r\n    set border(state = false){\r\n        this.root.div.setAttribute('class',state?\"bordered\":\"\");\r\n    }\r\n\r\n    set backgroundColor(color = ''){\r\n        this.root.div.setAttribute('style',color===''?'':`background-color:${color}`);\r\n    }\r\n\r\n    set stripeColor(color = ''){\r\n        this.root.div.hr[0].setAttribute('style',color===''?'':`border-color:${color}`);\r\n        this.root.div.hr[1].setAttribute('style',color===''?'':`border-color:${color}`);\r\n        this.root.div.hr[2].setAttribute('style',color===''?'':`border-color:${color}`);\r\n    }\r\n\r\n    connectedCallback(){\r\n        super.connectedCallback();\r\n\r\n        this.style.width = \"fit-content\";\r\n        this.style.display = \"flex\";\r\n\r\n        this.#rotate = this.getAttribute('rotate')==='true';\r\n        this.border = this.getAttribute('border')==='true';\r\n        this.backgroundColor = this.getAttribute('background-color');\r\n        this.stripeColor = this.getAttribute('stripe-color');\r\n    }\r\n\r\n    static get observedAttributes(){\r\n        return ['border','background-color','stripe-color','rotate'];\r\n    }\r\n\r\n    attributeChangedCallback(name, oldValue, newValue) {\r\n        if (!!oldValue){\r\n            switch(name){\r\n                case 'rotate':{\r\n                    this.rotate = newValue=='true';\r\n                };break;\r\n                case 'border':{\r\n                    this.border = newValue;\r\n                };break;\r\n                case 'background-color':{\r\n                    this.backgroundColor = newValue;\r\n                };break;\r\n                case 'stripe-color':{\r\n                    this.stripeColor = newValue\r\n                };break;\r\n            }\r\n            this.root.div.build();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/component/hamburger.js?");

/***/ }),

/***/ "./src/component/header.js":
/*!*********************************!*\
  !*** ./src/component/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/component.js\");\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger */ \"./src/component/hamburger.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./src/component/search.js\");\n/* harmony import */ var _sideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideMenu */ \"./src/component/sideMenu.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_component__WEBPACK_IMPORTED_MODULE_0__.define)(_hamburger__WEBPACK_IMPORTED_MODULE_1__.HamburgerMenu);\r\n(0,_component__WEBPACK_IMPORTED_MODULE_0__.define)(_sideMenu__WEBPACK_IMPORTED_MODULE_3__.SideMenu);\r\n(0,_component__WEBPACK_IMPORTED_MODULE_0__.define)(_search__WEBPACK_IMPORTED_MODULE_2__.SearchButton);\r\nconst Header=()=>{\r\n    const sideMenu = new _sideMenu__WEBPACK_IMPORTED_MODULE_3__.SideMenu()\r\n    const search = new _search__WEBPACK_IMPORTED_MODULE_2__.SearchButton();\r\n    return {\r\n        hamburgerMenu:{\r\n            attributes:{\r\n                border:false,\r\n                backgroundColor:'black',\r\n                stripeColor:'white'\r\n            },\r\n            sideMenu,\r\n            events:{\r\n                click:()=>sideMenu.status(true)\r\n            }\r\n        },\r\n        search\r\n    }\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/component/header.js?");

/***/ }),

/***/ "./src/component/search.js":
/*!*********************************!*\
  !*** ./src/component/search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchButton\": () => (/* binding */ SearchButton)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/component.js\");\n/* harmony import */ var _css_searchButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/searchButton.css */ \"./src/component/css/searchButton.css\");\n\r\n\r\n\r\nclass SearchButton extends _component__WEBPACK_IMPORTED_MODULE_0__.HtmlComponent{\r\n    constructor(){\r\n        super();\r\n        this.template={\r\n            style:{\r\n                content:_css_searchButton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n            },\r\n            div:{\r\n                button:{\r\n                    content:String.fromCodePoint(128270)\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/component/search.js?");

/***/ }),

/***/ "./src/component/sideMenu.js":
/*!***********************************!*\
  !*** ./src/component/sideMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideMenu\": () => (/* binding */ SideMenu)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/component.js\");\n/* harmony import */ var _css_sideMenu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/sideMenu.css */ \"./src/component/css/sideMenu.css\");\n\r\n\r\n\r\nclass SideMenu extends _component__WEBPACK_IMPORTED_MODULE_0__.HtmlComponent{\r\n    constructor(){\r\n        super();\r\n        this.template={\r\n            style:{\r\n                content:_css_sideMenu_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n            },\r\n            aside:{\r\n                attributes:{\r\n                    class:'inactive'\r\n                },\r\n                span:[\r\n                    {\r\n                        content:String.fromCodePoint(9746), \r\n                        events:{                                \r\n                            click:(e)=>{\r\n                                e.stopPropagation();\r\n                                this.status(false)\r\n                            }\r\n                        }\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n    }\r\n\r\n    connectedCallback(){\r\n        super.connectedCallback();\r\n\r\n        this.style.width = \"fit-content\";\r\n    }\r\n\r\n    static get observedAttributes(){\r\n        return ['active'];\r\n    }\r\n\r\n    status=(s = false)=>{\r\n        console.log(s)\r\n        this.root.aside.setAttribute('class',s?'active':'inactive');\r\n        this.root.aside.build();\r\n    }\r\n\r\n    attributeChangedCallback(name, oldValue, newValue) {\r\n        if (!!oldValue && name=='active'){\r\n            this.status(newValue=='true');\r\n        }\r\n    }    \r\n}\n\n//# sourceURL=webpack://cthulhu/./src/component/sideMenu.js?");

/***/ }),

/***/ "./src/cthulhu.js":
/*!************************!*\
  !*** ./src/cthulhu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cthulhu\": () => (/* binding */ Cthulhu)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/component.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\nconst fthagn=(e,prop)=>\r\n    e instanceof Cthulhu || e instanceof HTMLElement\r\n        ?e\r\n        :new Cthulhu(e,prop);\r\n\r\nclass Cthulhu{\r\n    #element = new DocumentFragment();\r\n    #content = undefined|'';\r\n    #attributes=undefined|new Map();\r\n    #events = undefined|new Map();\r\n    #eventsToRemove=new Map();\r\n    #state={\r\n        content:false,\r\n        attributes:new Map(),\r\n        events:new Map()\r\n    };\r\n\r\n    get element(){\r\n        return this.#element;\r\n    }\r\n\r\n    get content(){\r\n        return this.#content;\r\n    }\r\n\r\n    set content(value=''){\r\n        this.#content = value;\r\n        this.#state.content = true;\r\n    }\r\n\r\n    get attributes(){\r\n        return Object.fromEntries(this.#attributes);\r\n    }\r\n\r\n    set attributes(value={}){\r\n        const attr = Object.entries(value);\r\n        for (const [prop,val] of attr)\r\n            this.setAttribute(prop,val);\r\n    }\r\n\r\n    get events(){\r\n        return Object.fromEntries(this.#events);\r\n    }\r\n\r\n    set events(value={}){\r\n        const ev = Object.entries(value);\r\n        for (const [prop,val] of ev)\r\n            this.addEvent(prop,val);\r\n    }    \r\n\r\n    async removeAttribute(name=''){\r\n        this.#attributes.delete(name);\r\n        this.#state.attributes.set(name,true);\r\n    }\r\n\r\n    setAttribute(name='',value){\r\n        if (this.#attributes===0) this.#attributes = new Map();\r\n        this.#attributes.set(name,value);\r\n        this.#state.attributes.set(name,true);\r\n    }\r\n\r\n    async addEvent(name='',event=()=>{}){\r\n        this.#events.set(name,event);\r\n        this.#state.events.set(name,true);\r\n    }\r\n\r\n    async removeEvent(name=''){\r\n        this.#eventsToRemove.set(name,this.#events.get(name))\r\n        this.#events.delete(name);\r\n        this.#state.events.set(name,true);\r\n    }\r\n\r\n    dispose(){\r\n        for (const [event,callback] of this.#events)\r\n            this.#element.removeEventListener(event,callback);\r\n\r\n        const me = new Map(Object.entries(this));\r\n\r\n        for (const [prop,instance] of me){\r\n            if (instance instanceof Cthulhu) instance.dispose();\r\n            else if (instance instanceof Array)\r\n                instance.forEach(i=>{\r\n                    if (i instanceof Cthulhu)i.dispose();\r\n                });\r\n        }\r\n    }\r\n\r\n    async remove(child='',index=0){\r\n        if (this[child] instanceof Array){\r\n            const subject = this[child][index];\r\n            if (subject instanceof Cthulhu){\r\n                subject.dispose();\r\n                this.#element.removeChild(this[child][index].element);\r\n            }\r\n            \r\n            this[child].splice(index,1);\r\n        } else {\r\n            if (this[child] instanceof Cthulhu){\r\n                this[child].dispose();\r\n                this.#element.removeChild(this[child].element);\r\n            }\r\n            \r\n            delete this[child];\r\n        } \r\n    }\r\n\r\n    constructor(o = {},name = ''){\r\n        const map = new Map(Object.entries(o));\r\n\r\n        if (name!=='') this.#element = document.createElement((0,_utils__WEBPACK_IMPORTED_MODULE_1__.kek)(name));\r\n\r\n        if (map.has('content')){\r\n            this.#content= map.get('content');\r\n            this.#state.content= true;\r\n            map.delete('content');\r\n        }\r\n\r\n        if (map.has('events')){\r\n            this.#events = new Map(Object.entries(o.events));\r\n            for (const ev of this.#events.keys()){\r\n                this.#state.events.set(ev,true);\r\n            }\r\n            map.delete('events');\r\n        }        \r\n\r\n        if (map.has('attributes')){\r\n            this.#attributes = new Map(Object.entries(o.attributes));\r\n            for(const attr of this.#attributes.keys()){\r\n                this.#state.attributes.set(attr,true);\r\n            }\r\n            map.delete('attributes');\r\n        }\r\n\r\n        for(const [prop,e] of map)\r\n            Array.isArray(map.get(prop))\r\n                ?this[prop] = e.map(sub=>fthagn(sub,prop))\r\n                :this[prop] = fthagn(e,prop)\r\n    }\r\n\r\n    conciliateAttributes(key=''){\r\n        if (this.#attributes.has(key)) {\r\n            this.#element.setAttribute((0,_utils__WEBPACK_IMPORTED_MODULE_1__.kek)(key),this.#attributes.get(key));\r\n            this.#state.attributes.set(key,false);\r\n        } else {\r\n            this.#element.removeAttribute(key); \r\n            this.#state.attributes.delete(key);\r\n        }\r\n    }\r\n\r\n    conciliateEvents(key=''){\r\n        if (this.#events.has(key)){\r\n            this.#element.addEventListener(key,this.#events.get(key));\r\n            this.#state.events.set(key,false);\r\n        } else {\r\n            this.#element.removeEventListener(key,this.#eventsToRemove.get(key));\r\n            this.#eventsToRemove.delete(key);\r\n            this.#state.events.delete(key);\r\n        }\r\n    }\r\n\r\n    async createChild(instance,compose=false){\r\n        const element = (instance instanceof Cthulhu)\r\n                            ?await instance.build(compose)\r\n                            :instance;\r\n        if (compose)this.#element.appendChild(element);\r\n    }\r\n\r\n    async build(compose=false)\r\n    {\r\n        if (this.#state.content){\r\n            this.#element.textContent = this.#content;\r\n            this.#state.content = false;\r\n        }\r\n\r\n        for (const [key,value] of this.#state.attributes)\r\n            if (value)this.conciliateAttributes(key);\r\n\r\n        for (const [key,value] of this.#state.events)\r\n            if (value)this.conciliateEvents(key);\r\n\r\n        const me = new Map(Object.entries(this));\r\n\r\n        for (const [prop,instance] of me){\r\n            if (instance instanceof Array){\r\n                instance.forEach(async (i,index)=>{\r\n                    if (i instanceof Cthulhu || i instanceof _component__WEBPACK_IMPORTED_MODULE_0__.HtmlComponent) {\r\n                        await this.createChild(i,compose);\r\n                    } else {\r\n                        this[prop][index] =new Cthulhu(i,prop);\r\n                        await this.createChild(this[prop][index],true);\r\n                    }\r\n                });\r\n            } else if(instance instanceof Cthulhu || instance instanceof _component__WEBPACK_IMPORTED_MODULE_0__.HtmlComponent){\r\n                await this.createChild(instance,compose);\r\n            } else {\r\n                this[prop]=new Cthulhu(instance,prop);\r\n                await this.createChild(this[prop],true);\r\n            }\r\n        }\r\n        \r\n        return this.#element;\r\n    }\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/cthulhu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing */ \"./src/routing.js\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./src/component.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/header */ \"./src/component/header.js\");\n\r\n\r\n\r\n\r\n\r\nconst AppMain=()=>{\r\n    return {\r\n        header:(0,_component__WEBPACK_IMPORTED_MODULE_1__.trait)(_component_header__WEBPACK_IMPORTED_MODULE_3__.Header)\r\n    }\r\n}\r\n\r\n;(0,_view__WEBPACK_IMPORTED_MODULE_2__.entry)(new _routing__WEBPACK_IMPORTED_MODULE_0__.Routing({\r\n    index:()=>(0,_component__WEBPACK_IMPORTED_MODULE_1__.component)(AppMain)\r\n}));\r\n\n\n//# sourceURL=webpack://cthulhu/./src/index.js?");

/***/ }),

/***/ "./src/routing.js":
/*!************************!*\
  !*** ./src/routing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routing\": () => (/* binding */ Routing)\n/* harmony export */ });\nclass Routing {\r\n    constructor(routes){\r\n        this.routes = routes;\r\n    }\r\n\r\n    to=(path='/')=> {\r\n        const tokenPath=path.split('/');\r\n        let route={};\r\n        let paramIndex = 0;\r\n        let params=[];\r\n        let skip = false;\r\n\r\n        tokenPath.every((p,i)=>{\r\n            if (p===''){\r\n                route = this.routes;\r\n                params =('params' in route)?Object.keys(route.params):[];\r\n                skip = ('master' in route)?route.master:false;                \r\n            }\r\n            else {\r\n                if (!!route){\r\n                    if (p in route){\r\n                        if (skip){\r\n                            route.sub={\r\n                                routing:route[p],\r\n                                url:'/'+tokenPath.slice(i+1,tokenPath.length).join('/')\r\n                            }\r\n                            return false;\r\n                        }\r\n                        route = route[p];\r\n                        params =('params' in route)?Object.keys(route.params):[];\r\n                        skip = ('master' in route)?route.master:false;\r\n                    } else if (params.length>0){\r\n                        route.params[params[paramIndex]]=p;\r\n                        paramIndex++;\r\n                    } else route=undefined;\r\n                }\r\n            }\r\n\r\n            return true;\r\n        })\r\n\r\n        if ('index' in route){\r\n            history.pushState({state:'new'},'',path);\r\n            return {\r\n                index:route.index,\r\n                params:route.params,\r\n                sub:!!route.sub?route.sub:null\r\n            }\r\n        } else return route.notFound;\r\n    }\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/routing.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kek\": () => (/* binding */ kek)\n/* harmony export */ });\nconst kek=(t='')=>t.replace(/[A-Z]/g,(m,i)=>i==0?m.toLowerCase():`-${m.toLowerCase()}`);\n\n//# sourceURL=webpack://cthulhu/./src/utils.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"entry\": () => (/* binding */ entry),\n/* harmony export */   \"view\": () => (/* binding */ view)\n/* harmony export */ });\n/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing */ \"./src/routing.js\");\n\r\n\r\nconst view=(instance=async()=>{})=>{\r\n    document.body.innerHTML='';\r\n    document.body.appendChild(instance());\r\n};\r\n\r\nconst entry=(routing=new _routing__WEBPACK_IMPORTED_MODULE_0__.Routing())=>{\r\n    window.onpopstate=()=>view(routing.to(window.location.pathname).index);\r\n    view(routing.to(window.location.pathname).index);\r\n}\n\n//# sourceURL=webpack://cthulhu/./src/view.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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