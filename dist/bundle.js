/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data.json */ "./src/data/data.json");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navMenu */ "./src/js/components/navMenu.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo */ "./src/js/components/logo.js");
/* harmony import */ var _toggleBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggleBtn */ "./src/js/components/toggleBtn.js");
/* harmony import */ var _navMenuBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navMenuBtn */ "./src/js/components/navMenuBtn.js");






var createHeader = function createHeader() {
  var headerElement = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('header');
  headerElement.classList.add('header');
  // create header logo
  var headerLogo = (0,_logo__WEBPACK_IMPORTED_MODULE_3__["default"])('English for kids', '#home');

  // create header buttons container
  var headerBtnsContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('div');
  headerBtnsContainer.classList.add('header-buttons');

  // create header toggle
  var toggleBtn = (0,_toggleBtn__WEBPACK_IMPORTED_MODULE_4__["default"])();

  // create header statistics button
  var statBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('button');
  statBtn.type = 'button';
  statBtn.classList.add('statistics-button');
  statBtn.textContent = 'Statistics';
  headerBtnsContainer.append(toggleBtn);
  headerBtnsContainer.append(statBtn);

  // create nav
  var headerNav = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('nav');
  headerNav.classList.add('header-nav');

  // create nav menu button
  var navMenuBtn = (0,_navMenuBtn__WEBPACK_IMPORTED_MODULE_5__["default"])();

  // create nav menu
  var navigationMenu = (0,_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"]);
  headerNav.append(navMenuBtn);
  headerNav.append(navigationMenu);

  // create header container
  var headerContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('div');
  headerContainer.classList.add('container');
  headerContainer.append(headerNav);
  headerContainer.append(headerLogo);
  headerContainer.append(headerBtnsContainer);
  headerElement.append(headerContainer);
  return headerElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/js/components/logo.js":
/*!***********************************!*\
  !*** ./src/js/components/logo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createLogo = function createLogo(logoText, logoHref) {
  // create logo
  var headerLogo = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1');
  headerLogo.classList.add('header-logo');
  var headerLogoLink = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('a');
  headerLogoLink.classList.add('header-logo__link');
  headerLogoLink.textContent = logoText;
  headerLogoLink.href = logoHref;
  headerLogo.append(headerLogoLink);
  return headerLogo;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLogo);

/***/ }),

/***/ "./src/js/components/navMenu.js":
/*!**************************************!*\
  !*** ./src/js/components/navMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createNavMenu = function createNavMenu(data) {
  // create nav ul
  var navMenuUl = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul');
  navMenuUl.classList.add('header-menu');
  for (var i = 0; i < data.length; i += 1) {
    navMenuUl.append((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createNavMenuItem)(data[i].section.toUpperCase()));
  }
  return navMenuUl;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavMenu);

/***/ }),

/***/ "./src/js/components/navMenuBtn.js":
/*!*****************************************!*\
  !*** ./src/js/components/navMenuBtn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createNavMenuBtn = function createNavMenuBtn() {
  // create nav button
  var navMenuBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('a');
  navMenuBtn.classList.add('header-hamburger');
  navMenuBtn.href = '#';
  navMenuBtn.textContent = 'Menu';
  var span1 = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');
  var span2 = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');
  var span3 = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');
  navMenuBtn.append(span1);
  navMenuBtn.append(span2);
  navMenuBtn.append(span3);
  return navMenuBtn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavMenuBtn);

/***/ }),

/***/ "./src/js/components/toggleBtn.js":
/*!****************************************!*\
  !*** ./src/js/components/toggleBtn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createToggle = function createToggle() {
  // create toggle
  var toggleBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  toggleBtn.type = 'button';
  toggleBtn.classList.add('toggle-button');
  toggleBtn.ariaPressed = false;

  // create toggle mode-1
  var toggleMode1 = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');
  toggleMode1.classList.add('toggle-button__mode');
  toggleMode1.classList.add('toggle-button__train');
  toggleMode1.textContent = 'Train';

  // create toggle mode-2
  var toggleMode2 = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');
  toggleMode2.classList.add('toggle-button__mode');
  toggleMode2.classList.add('toggle-button__play');
  toggleMode2.textContent = 'Play';
  toggleBtn.append(toggleMode1);
  toggleBtn.append(toggleMode2);
  return toggleBtn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToggle);

/***/ }),

/***/ "./src/js/utils/helper.js":
/*!********************************!*\
  !*** ./src/js/utils/helper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createNavMenuItem": () => (/* binding */ createNavMenuItem)
/* harmony export */ });
// create element
var createElement = function createElement(name) {
  var element = document.createElement(name);
  return element;
};
var capitalizeFirstWord = function capitalizeFirstWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
var createNavMenuItem = function createNavMenuItem(linkName) {
  // create li
  var li = createElement('li');
  li.classList.add('header-menu__item');

  // create menu link
  var link = createElement('a');
  link.classList.add('header-menu__item-link');
  link.href = "#".concat(linkName);
  link.dataset.section = capitalizeFirstWord(linkName);
  link.textContent = capitalizeFirstWord(linkName);
  li.append(link);
  return li;
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/main.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/main.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{box-sizing:border-box;font-size:100%;scroll-behavior:smooth}*,:after,:before{box-sizing:inherit;margin:0;padding:0}a,a:hover,a:visited{text-decoration:none}ul{list-style-type:none}h1,h2,h3,h4,h5,h6,ul{margin:0;padding:0}body{background-color:#23a7d7}.container{margin:0 auto;max-width:75rem}.header-hamburger{position:relative;z-index:50}.header-hamburger>span{background-color:#fff;border-radius:.6em;display:block;height:.2125em;transform-origin:3px 1px;transition:all .3s ease-in-out;width:2.1125em}.header-hamburger>span:not(:last-child){margin-bottom:.4125em}.header-hamburger:hover>span:first-child{transform:translateX(3px)}.header-hamburger:hover>span:nth-child(2){transform:translateX(-3px)}.header-hamburger:hover>span:last-child{transform:translateX(3px)}.header{box-shadow:0 0 0 .2em rgba(0,0,0,.3);padding:1.875em}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_globals.scss","webpack://./src/scss/components/_navMenuBtn.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/layout/_header.scss"],"names":[],"mappings":"AAAA,2EAAA,CAEA,KAEE,6BAAA,CADA,gBCCF,CDUA,KACE,QCFF,CDSA,KACE,aCHF,CDWA,GACE,aAAA,CACA,cCJF,CDeA,GACE,sBAAA,CACA,QAAA,CACA,gBCNF,CDcA,IACE,+BAAA,CACA,aCPF,CDiBA,EACE,4BCTF,CDiBA,YACE,kBAAA,CACA,yBAAA,CACA,wCAAA,CAAA,gCCVF,CDiBA,SAEE,kBCXF,CDmBA,cAGE,+BAAA,CACA,aCZF,CDmBA,MACE,aCbF,CDqBA,QAEE,aAAA,CACA,aAAA,CACA,iBAAA,CACA,uBCdF,CDiBA,IACE,aCdF,CDiBA,IACE,SCdF,CDwBA,IACE,iBChBF,CD2BA,sCAKE,mBAAA,CACA,cAAA,CACA,gBAAA,CACA,QClBF,CD0BA,aAGE,gBCnBF,CD2BA,cAGE,mBCpBF,CD2BA,gDAIE,yBCrBF,CD4BA,wHAIE,iBAAA,CACA,SCtBF,CD6BA,4GAIE,6BCvBF,CD8BA,SACE,0BCxBF,CDkCA,OACE,qBAAA,CACA,aAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CACA,kBCzBF,CDgCA,SACE,uBC1BF,CDiCA,SACE,aC3BF,CDmCA,6BAEE,qBAAA,CACA,SC5BF,CDmCA,kFAEE,WC7BF,CDqCA,cACE,4BAAA,CACA,mBC9BF,CDqCA,yCACE,uBC/BF,CDuCA,6BACE,yBAAA,CACA,YChCF,CD0CA,QACE,aClCF,CDyCA,QACE,iBCnCF,CDqDA,kBACE,YCtCF,CC/SA,MAEE,qBAAA,CADA,cAAA,CAEA,sBDkTF,CC/SA,iBAGE,kBAAA,CACA,QAAA,CACA,SDkTF,CC9SA,oBAGE,oBDiTF,CC7SA,GACE,oBDkTF,CC5SA,qBALE,QAAA,CACA,SD0TF,CC5SA,KACE,wBD+SF,CC3SA,WAEE,aAAA,CADA,eD+SF,CE5VA,kBACE,iBAAA,CACA,UF+VF,CE7VE,uBAKE,qBCPS,CDMT,kBAAA,CAHA,aAAA,CAEA,cAAA,CAGA,wBAAA,CACA,8BAAA,CALA,cFoWJ,CE7VI,wCACE,qBF+VN,CE1VI,yCACE,yBF4VN,CEzVI,0CACE,0BF2VN,CExVI,wCACE,yBF0VN,CIpXA,QAEE,oCAAA,CADA,eJwXF","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n:root {\n  font-size: 100%;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:hover {\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: hsl(196, 72%, 49%);\n}\n\n.container {\n  max-width: 75rem;\n  margin: 0 auto;\n}\n\n.header-hamburger {\n  position: relative;\n  z-index: 50;\n}\n.header-hamburger > span {\n  display: block;\n  width: 2.1125em;\n  height: 0.2125em;\n  border-radius: 0.6em;\n  background-color: hsl(0, 0%, 100%);\n  transform-origin: 3px 1px;\n  transition: all 0.3s ease-in-out;\n}\n.header-hamburger > span:not(:last-child) {\n  margin-bottom: 0.4125em;\n}\n.header-hamburger:hover > span:first-child {\n  transform: translateX(3px);\n}\n.header-hamburger:hover > span:nth-child(2) {\n  transform: translateX(-3px);\n}\n.header-hamburger:hover > span:last-child {\n  transform: translateX(3px);\n}\n\n.header {\n  padding: 1.875em;\n  box-shadow: 0 0 0 0.2em hsla(0, 0%, 0%, 0.3);\n}",":root {\r\n  font-size: 100%;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// Links\r\na,\r\na:visited,\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n// Lists\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// Headlines\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: $color-primary;\r\n}\r\n\r\n// container\r\n.container {\r\n  max-width: 75rem;\r\n  margin: 0 auto;\r\n}\r\n",".header-hamburger {\r\n  position: relative;\r\n  z-index: 50;\r\n\r\n  > span {\r\n    display: block;\r\n    width: 2.1125em;\r\n    height: 0.2125em;\r\n    border-radius: 0.6em;\r\n    background-color: $whiteColor;\r\n    transform-origin: 3px 1px;\r\n    transition: all 0.3s ease-in-out;\r\n\r\n    &:not(:last-child) {\r\n      margin-bottom: 0.4125em;\r\n    }\r\n  }\r\n\r\n  &:hover {\r\n    > span:first-child {\r\n      transform: translateX(3px);\r\n    }\r\n\r\n    > span:nth-child(2) {\r\n      transform: translateX(-3px);\r\n    }\r\n\r\n    > span:last-child {\r\n      transform: translateX(3px);\r\n    }\r\n  }\r\n}\r\n","// Colors\r\n$color-primary: hsl(196, 72%, 49%);\r\n$whiteColor: hsl(0, 0%, 100%);\r\n","@import '../components/navMenuBtn';\r\n\r\n.header {\r\n  padding: 1.875em;\r\n  box-shadow: 0 0 0 0.2em hsla(0, 0%, 0%, 0.3);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{section:'home'},{section:'clothes',startImage:'assets/images//start-page-cards/v-sweater.png',linkPath:'#clothes',sectionTitle:'Clothes',sectionWords:[{word:'cap',translation:'шапка',image:'assets/images/cards/clothes/a-cap.png',audioSrc:'assets/audio/clothes/cap.mp3',alt:'cap image'},{word:'jacket',translation:'куртка',image:'assets/images/cards/clothes/a-jacket.png',audioSrc:'assets/audio/clothes/jacket.mp3',alt:'jacket image'},{word:'scarf',translation:'шарф',image:'assets/images/cards/clothes/a-scarf.png',audioSrc:'assets/audio/clothes/scarf.mp3',alt:'scarf image'},{word:'shoes',translation:'ботинки',image:'assets/images/cards/clothes/a-shoes.png',audioSrc:'assets/audio/clothes/shoes.mp3',alt:'shoes image'},{word:'blouse',translation:'блузка',image:'assets/images/cards/clothes/v-blouse.png',audioSrc:'assets/audio/clothes/blouse.mp3',alt:'blouse image'},{word:'coat',translation:'блузка',image:'assets/images/cards/clothes/v-coat.png',audioSrc:'assets/audio/clothes/coat.mp3',alt:'coat image'},{word:'dress',translation:'платье',image:'assets/images/cards/clothes/v-dress.png',audioSrc:'assets/audio/clothes/dress.mp3',alt:'dress image'},{word:'shirt',translation:'рубашка',image:'assets/images/cards/clothes/v-shirt.png',audioSrc:'assets/audio/clothes/shirt.mp3',alt:'shirt image'}]},{section:'colours',startImage:'assets/images//start-page-cards/v-yellow.png',linkPath:'#colours',sectionTitle:'Colours',sectionWords:[{word:'black',translation:'черный',image:'assets/images/cards/colours/v-black.png',audioSrc:'assets/audio/colours/black.mp3',alt:'black image'},{word:'blue',translation:'синий',image:'assets/images/cards/colours/v-blue.png',audioSrc:'assets/audio/colours/blue.mp3',alt:'blue image'},{word:'brown',translation:'коричневый',image:'assets/images/cards/colours/v-brown.png',audioSrc:'assets/audio/colours/brown.mp3',alt:'brown image'},{word:'green',translation:'зелёный',image:'assets/images/cards/colours/v-green.png',audioSrc:'assets/audio/colours/green.mp3',alt:'green image'},{word:'grey',translation:'серый',image:'assets/images/cards/colours/v-grey.png',audioSrc:'assets/audio/colours/grey.mp3',alt:'grey image'},{word:'orange',translation:'оранжевый',image:'assets/images/cards/colours/v-orange-c.png',audioSrc:'assets/audio/colours/orange.mp3',alt:'orange image'},{word:'pink',translation:'розовый',image:'assets/images/cards/colours/v-pink.png',audioSrc:'assets/audio/colours/pink.mp3',alt:'pink image'},{word:'red',translation:'красный',image:'assets/images/cards/colours/v-red.png',audioSrc:'assets/audio/colours/red.mp3',alt:'red image'}]},{section:'family',startImage:'assets/images//start-page-cards/v-family.png',linkPath:'#family',sectionTitle:'Family',sectionWords:[{word:'aunt',translation:'тетя',image:'assets/images/cards/family/v-aunt.png',audioSrc:'assets/audio/family/aunt.mp3',alt:'aunt image'},{word:'brother',translation:'брат',image:'assets/images/cards/family/v-brother.png',audioSrc:'assets/audio/family/brother.mp3',alt:'brother image'},{word:'daddy',translation:'папа',image:'assets/images/cards/family/v-daddy.png',audioSrc:'assets/audio/family/daddy.mp3',alt:'daddy image'},{word:'grandma',translation:'бабушка',image:'assets/images/cards/family/v-grandma.png',audioSrc:'assets/audio/family/grandma.mp3',alt:'grandma image'},{word:'grandpa',translation:'дедушка',image:'assets/images/cards/family/v-grandpa.png',audioSrc:'assets/audio/family/grandpa.mp3',alt:'grandpa image'},{word:'mummy',translation:'мама',image:'assets/images/cards/family/v-mummy.png',audioSrc:'assets/audio/family/mummy.mp3',alt:'mummy image'},{word:'sister',translation:'сестра',image:'assets/images/cards/family/v-sister.png',audioSrc:'assets/audio/family/sister.mp3',alt:'sister image'},{word:'uncle',translation:'дядя',image:'assets/images/cards/family/v-uncle.png',audioSrc:'assets/audio/family/uncle.mp3',alt:'uncle image'}]},{section:'food',startImage:'assets/images//start-page-cards/a-hamburger.png',linkPath:'#food',sectionTitle:'Food',sectionWords:[{word:'egg',translation:'яйцо',image:'assets/images/cards/food/a-egg.png',audioSrc:'assets/audio/food/egg.mp3',alt:'egg image'},{word:'ice cream',translation:'мороженое',image:'assets/images/cards/food/a-icecream.png',audioSrc:'assets/audio/food/ice-cream.mp3',alt:'ice cream image'},{word:'bread',translation:'хлеб',image:'assets/images/cards/food/v-bread.png',audioSrc:'assets/audio/food/bread.mp3',alt:'bread image'},{word:'butter',translation:'масло',image:'assets/images/cards/food/v-butter.png',audioSrc:'assets/audio/food/butter.mp3',alt:'butter image'},{word:'cake',translation:'пирожное',image:'assets/images/cards/food/v-cake.png',audioSrc:'assets/audio/food/cake.mp3',alt:'cake image'},{word:'cheese',translation:'сыр',image:'assets/images/cards/food/v-cheese.png',audioSrc:'assets/audio/food/cheese.mp3',alt:'cheese image'},{word:'pizza',translation:'пицца',image:'assets/images/cards/food/v-pizza.png',audioSrc:'assets/audio/food/pizza.mp3',alt:'pizza image'},{word:'sandwich',translation:'бутерброд',image:'assets/images/cards/food/v-sandwich.png',audioSrc:'assets/audio/food/sandwich.mp3',alt:'sandwich image'}]},{section:'fruits',startImage:'assets/images//start-page-cards/v-strawberry.png',linkPath:'#fruits',sectionTitle:'Fruits',sectionWords:[{word:'apple',translation:'яблоко',image:'assets/images/cards/fruits/a-apple.png',audioSrc:'assets/audio/fruits/apple.mp3',alt:'apple image'},{word:'cherry',translation:'вишня',image:'assets/images/cards/fruits/a-cherry.png',audioSrc:'assets/audio/fruits/cherry.mp3',alt:'cherry image'},{word:'grape',translation:'фигурное катание',image:'assets/images/cards/fruits/a-grapes.png',audioSrc:'assets/audio/fruits/grape.mp3',alt:'grape image'},{word:'orange',translation:'апельсин',image:'assets/images/cards/fruits/a-orange.png',audioSrc:'assets/audio/fruits/orange.mp3',alt:'orange image'},{word:'peach',translation:'персик',image:'assets/images/cards/fruits/a-peach.png',audioSrc:'assets/audio/fruits/peach.mp3',alt:'peach image'},{word:'pineapple',translation:'ананас',image:'assets/images/cards/fruits/a-pineapple.png',audioSrc:'assets/audio/fruits/pineapple.mp3',alt:'pineapple image'},{word:'banana',translation:'банан',image:'assets/images/cards/fruits/v-banana.png',audioSrc:'assets/audio/fruits/banana.mp3',alt:'banana image'},{word:'lemon',translation:'лимон',image:'assets/images/cards/fruits/v-lemon.png',audioSrc:'assets/audio/fruits/lemon.mp3',alt:'lemon image'}]},{section:'pets',startImage:'assets/images//start-page-cards/v-pony.png',linkPath:'#pets',sectionTitle:'Pets',sectionWords:[{word:'hamster',translation:'хомяк',image:'assets/images/cards/pets/a-hamster.png',audioSrc:'assets/audio/pets/hamster.mp3',alt:'hamster image'},{word:'parrot',translation:'попугай',image:'assets/images/cards/pets/a-parrot.png',audioSrc:'assets/audio/pets/parrot.mp3',alt:'parrot image'},{word:'turtle',translation:'черепаха',image:'assets/images/cards/pets/a-turtle.png',audioSrc:'assets/audio/pets/turtle.mp3',alt:'turtle image'},{word:'kitten',translation:'котёнок',image:'assets/images/cards/pets/h-kitten.png',audioSrc:'assets/audio/pets/kitten.mp3',alt:'kitten image'},{word:'puppy',translation:'щенок',image:'assets/images/cards/pets/h-puppy.png',audioSrc:'assets/audio/pets/puppy.mp3',alt:'puppy image'},{word:'ferret',translation:'хорек',image:'assets/images/cards/pets/v-ferret.png',audioSrc:'assets/audio/pets/ferret.mp3',alt:'ferret image'},{word:'fish',translation:'рыба',image:'assets/images/cards/pets/v-fish.png',audioSrc:'assets/audio/pets/fish.mp3',alt:'fish image'},{word:'mouse',translation:'мышь',image:'assets/images/cards/pets/v-mouse.png',audioSrc:'assets/audio/pets/mouse.mp3',alt:'mouse image'}]},{section:'school',startImage:'assets/images//start-page-cards/v-pupil.png',linkPath:'#school',sectionTitle:'School',sectionWords:[{word:'board',translation:'доска',image:'assets/images/cards/school/v-board.png',audioSrc:'assets/audio/school/board.mp3',alt:'board image'},{word:'book',translation:'книга',image:'assets/images/cards/school/v-book.png',audioSrc:'assets/audio/school/book.mp3',alt:'book image'},{word:'calculator',translation:'черепаха',image:'assets/images/cards/school/v-calculator.png',audioSrc:'assets/audio/school/calculator.mp3',alt:'calculator image'},{word:'classroom',translation:'школьный класс',image:'assets/images/cards/school/v-classroom.png',audioSrc:'assets/audio/school/classroom.mp3',alt:'classroom image'},{word:'map',translation:'карта',image:'assets/images/cards/school/v-map.png',audioSrc:'assets/audio/school/map.mp3',alt:'map image'},{word:'notebook',translation:'тетрадь',image:'assets/images/cards/school/v-notebook.png',audioSrc:'assets/audio/school/notebook.mp3',alt:'notebook image'},{word:'schoolbag',translation:'портфель',image:'assets/images/cards/school/v-schoolbag.png',audioSrc:'assets/audio/school/schoolbag.mp3',alt:'schoolbag image'},{word:'teacher',translation:'учитель',image:'assets/images/cards/school/v-teacher.png',audioSrc:'assets/audio/school/teacher.mp3',alt:'teacher image'}]},{section:'sport',startImage:'assets/images//start-page-cards/v-tennis.png',linkPath:'#sport',sectionTitle:'Sport',sectionWords:[{word:'basketball',translation:'баскетбол',image:'assets/images/cards/sport/v-basketball.png',audioSrc:'assets/audio/sport/basketball.mp3',alt:'basketball image'},{word:'cycling',translation:'езда на велосипеде',image:'assets/images/cards/sport/v-cycling.png',audioSrc:'assets/audio/sport/cycling.mp3',alt:'cycling image'},{word:'figure skating',translation:'фигурное катание',image:'assets/images/cards/sport/v-figure-skating.png',audioSrc:'assets/audio/sport/figure-skating.mp3',alt:'figure skating image'},{word:'football',translation:'футбол',image:'assets/images/cards/sport/v-football.png',audioSrc:'assets/audio/sport/football.mp3',alt:'football image'},{word:'hockey',translation:'хоккей',image:'assets/images/cards/sport/v-hockey.png',audioSrc:'assets/audio/sport/hockey.mp3',alt:'hockey image'},{word:'skiing',translation:'лыжный спорт',image:'assets/images/cards/sport/v-skiing.png',audioSrc:'assets/audio/sport/skiing.mp3',alt:'skiing image'},{word:'swimming',translation:'плавание',image:'assets/images/cards/sport/v-swimming.png',audioSrc:'assets/audio/sport/swimming.mp3',alt:'swimming image'},{word:'boxing',translation:'бокс',image:'assets/images/cards/sport/v-boxing.png',audioSrc:'assets/audio/sport/boxing.mp3',alt:'boxing image'}]}]);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");


var appWrapper = document.querySelector('.wrapper');
appWrapper.append((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
// console.log('data', data);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNvQjtBQUUvQyxJQUFNSSxVQUFVLEdBQUdWLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUVyREQsVUFBVSxDQUFDakMsTUFBTSxDQUFDViw4REFBWSxFQUFFLENBQUM7QUFDakMsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51QnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy90b2dnbGVCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9kYXRhL2RhdGEuanNvbiIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzBlNTAiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IGNyZWF0ZU5hdk1lbnUgZnJvbSAnLi9uYXZNZW51JztcbmltcG9ydCBjcmVhdGVMb2dvIGZyb20gJy4vbG9nbyc7XG5pbXBvcnQgY3JlYXRlVG9nZ2xlIGZyb20gJy4vdG9nZ2xlQnRuJztcbmltcG9ydCBjcmVhdGVOYXZNZW51QnRuIGZyb20gJy4vbmF2TWVudUJ0bic7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAvLyBjcmVhdGUgaGVhZGVyIGxvZ29cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUxvZ28oJ0VuZ2xpc2ggZm9yIGtpZHMnLCAnI2hvbWUnKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckJ0bnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgdG9nZ2xlXG4gIGNvbnN0IHRvZ2dsZUJ0biA9IGNyZWF0ZVRvZ2dsZSgpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgc3RhdGlzdGljcyBidXR0b25cbiAgY29uc3Qgc3RhdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgc3RhdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLWJ1dHRvbicpO1xuICBzdGF0QnRuLnRleHRDb250ZW50ID0gJ1N0YXRpc3RpY3MnO1xuXG4gIGhlYWRlckJ0bnNDb250YWluZXIuYXBwZW5kKHRvZ2dsZUJ0bik7XG4gIGhlYWRlckJ0bnNDb250YWluZXIuYXBwZW5kKHN0YXRCdG4pO1xuXG4gIC8vIGNyZWF0ZSBuYXZcbiAgY29uc3QgaGVhZGVyTmF2ID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGhlYWRlck5hdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbmF2Jyk7XG5cbiAgLy8gY3JlYXRlIG5hdiBtZW51IGJ1dHRvblxuICBjb25zdCBuYXZNZW51QnRuID0gY3JlYXRlTmF2TWVudUJ0bigpO1xuXG4gIC8vIGNyZWF0ZSBuYXYgbWVudVxuICBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IGNyZWF0ZU5hdk1lbnUoZGF0YSk7XG5cbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZNZW51QnRuKTtcbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZpZ2F0aW9uTWVudSk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlck5hdik7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTG9nbyk7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyQnRuc0NvbnRhaW5lcik7XG4gIGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlTG9nbyA9IChsb2dvVGV4dCwgbG9nb0hyZWYpID0+IHtcbiAgLy8gY3JlYXRlIGxvZ29cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcblxuICBjb25zdCBoZWFkZXJMb2dvTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaGVhZGVyTG9nb0xpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ29fX2xpbmsnKTtcbiAgaGVhZGVyTG9nb0xpbmsudGV4dENvbnRlbnQgPSBsb2dvVGV4dDtcbiAgaGVhZGVyTG9nb0xpbmsuaHJlZiA9IGxvZ29IcmVmO1xuXG4gIGhlYWRlckxvZ28uYXBwZW5kKGhlYWRlckxvZ29MaW5rKTtcblxuICByZXR1cm4gaGVhZGVyTG9nbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxvZ287XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVOYXZNZW51SXRlbSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnUgPSAoZGF0YSkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IHVsXG4gIGNvbnN0IG5hdk1lbnVVbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdk1lbnVVbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5hdk1lbnVVbC5hcHBlbmQoY3JlYXRlTmF2TWVudUl0ZW0oZGF0YVtpXS5zZWN0aW9uLnRvVXBwZXJDYXNlKCkpKTtcbiAgfVxuXG4gIHJldHVybiBuYXZNZW51VWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZNZW51O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnVCdG4gPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBuYXYgYnV0dG9uXG4gIGNvbnN0IG5hdk1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5hdk1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWhhbWJ1cmdlcicpO1xuICBuYXZNZW51QnRuLmhyZWYgPSAnIyc7XG4gIG5hdk1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgY29uc3Qgc3BhbjEgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNwYW4yID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzcGFuMyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMSk7XG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4yKTtcbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjMpO1xuXG4gIHJldHVybiBuYXZNZW51QnRuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2TWVudUJ0bjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVUb2dnbGUgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9IGZhbHNlO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZS0xXG4gIGNvbnN0IHRvZ2dsZU1vZGUxID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2dnbGVNb2RlMS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGUxLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3RyYWluJyk7XG4gIHRvZ2dsZU1vZGUxLnRleHRDb250ZW50ID0gJ1RyYWluJztcblxuICAvLyBjcmVhdGUgdG9nZ2xlIG1vZGUtMlxuICBjb25zdCB0b2dnbGVNb2RlMiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9nZ2xlTW9kZTIuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbl9fbW9kZScpO1xuICB0b2dnbGVNb2RlMi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19wbGF5Jyk7XG4gIHRvZ2dsZU1vZGUyLnRleHRDb250ZW50ID0gJ1BsYXknO1xuXG4gIHRvZ2dsZUJ0bi5hcHBlbmQodG9nZ2xlTW9kZTEpO1xuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGUyKTtcblxuICByZXR1cm4gdG9nZ2xlQnRuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9nZ2xlO1xuIiwiLy8gY3JlYXRlIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RXb3JkID0gKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51SXRlbSA9IChsaW5rTmFtZSkgPT4ge1xuICAvLyBjcmVhdGUgbGlcbiAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbScpO1xuXG4gIC8vIGNyZWF0ZSBtZW51IGxpbmtcbiAgY29uc3QgbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbS1saW5rJyk7XG4gIGxpbmsuaHJlZiA9IGAjJHtsaW5rTmFtZX1gO1xuICBsaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuICBsaW5rLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0V29yZChsaW5rTmFtZSk7XG5cbiAgbGkuYXBwZW5kKGxpbmspO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZU5hdk1lbnVJdGVtIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9odG1sey13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlO2xpbmUtaGVpZ2h0OjEuMTV9Ym9keXttYXJnaW46MH1tYWlue2Rpc3BsYXk6YmxvY2t9aDF7Zm9udC1zaXplOjJlbTttYXJnaW46LjY3ZW0gMH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9cHJle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9Y29kZSxrYmQsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9W3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHN7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX06cm9vdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1zaXplOjEwMCU7c2Nyb2xsLWJlaGF2aW9yOnNtb290aH0qLDphZnRlciw6YmVmb3Jle2JveC1zaXppbmc6aW5oZXJpdDttYXJnaW46MDtwYWRkaW5nOjB9YSxhOmhvdmVyLGE6dmlzaXRlZHt0ZXh0LWRlY29yYXRpb246bm9uZX11bHtsaXN0LXN0eWxlLXR5cGU6bm9uZX1oMSxoMixoMyxoNCxoNSxoNix1bHttYXJnaW46MDtwYWRkaW5nOjB9Ym9keXtiYWNrZ3JvdW5kLWNvbG9yOiMyM2E3ZDd9LmNvbnRhaW5lcnttYXJnaW46MCBhdXRvO21heC13aWR0aDo3NXJlbX0uaGVhZGVyLWhhbWJ1cmdlcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjUwfS5oZWFkZXItaGFtYnVyZ2VyPnNwYW57YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6LjZlbTtkaXNwbGF5OmJsb2NrO2hlaWdodDouMjEyNWVtO3RyYW5zZm9ybS1vcmlnaW46M3B4IDFweDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7d2lkdGg6Mi4xMTI1ZW19LmhlYWRlci1oYW1idXJnZXI+c3Bhbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206LjQxMjVlbX0uaGVhZGVyLWhhbWJ1cmdlcjpob3Zlcj5zcGFuOmZpcnN0LWNoaWxke3RyYW5zZm9ybTp0cmFuc2xhdGVYKDNweCl9LmhlYWRlci1oYW1idXJnZXI6aG92ZXI+c3BhbjpudGgtY2hpbGQoMil7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTNweCl9LmhlYWRlci1oYW1idXJnZXI6aG92ZXI+c3BhbjpsYXN0LWNoaWxke3RyYW5zZm9ybTp0cmFuc2xhdGVYKDNweCl9LmhlYWRlcntib3gtc2hhZG93OjAgMCAwIC4yZW0gcmdiYSgwLDAsMCwuMyk7cGFkZGluZzoxLjg3NWVtfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fZ2xvYmFscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19uYXZNZW51QnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9faGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUEsQ0FFQSxLQUVFLDZCQUFBLENBREEsZ0JDQ0YsQ0RVQSxLQUNFLFFDRkYsQ0RTQSxLQUNFLGFDSEYsQ0RXQSxHQUNFLGFBQUEsQ0FDQSxjQ0pGLENEZUEsR0FDRSxzQkFBQSxDQUNBLFFBQUEsQ0FDQSxnQkNORixDRGNBLElBQ0UsK0JBQUEsQ0FDQSxhQ1BGLENEaUJBLEVBQ0UsNEJDVEYsQ0RpQkEsWUFDRSxrQkFBQSxDQUNBLHlCQUFBLENBQ0Esd0NBQUEsQ0FBQSxnQ0NWRixDRGlCQSxTQUVFLGtCQ1hGLENEbUJBLGNBR0UsK0JBQUEsQ0FDQSxhQ1pGLENEbUJBLE1BQ0UsYUNiRixDRHFCQSxRQUVFLGFBQUEsQ0FDQSxhQUFBLENBQ0EsaUJBQUEsQ0FDQSx1QkNkRixDRGlCQSxJQUNFLGFDZEYsQ0RpQkEsSUFDRSxTQ2RGLENEd0JBLElBQ0UsaUJDaEJGLENEMkJBLHNDQUtFLG1CQUFBLENBQ0EsY0FBQSxDQUNBLGdCQUFBLENBQ0EsUUNsQkYsQ0QwQkEsYUFHRSxnQkNuQkYsQ0QyQkEsY0FHRSxtQkNwQkYsQ0QyQkEsZ0RBSUUseUJDckJGLENENEJBLHdIQUlFLGlCQUFBLENBQ0EsU0N0QkYsQ0Q2QkEsNEdBSUUsNkJDdkJGLENEOEJBLFNBQ0UsMEJDeEJGLENEa0NBLE9BQ0UscUJBQUEsQ0FDQSxhQUFBLENBQ0EsYUFBQSxDQUNBLGNBQUEsQ0FDQSxTQUFBLENBQ0Esa0JDekJGLENEZ0NBLFNBQ0UsdUJDMUJGLENEaUNBLFNBQ0UsYUMzQkYsQ0RtQ0EsNkJBRUUscUJBQUEsQ0FDQSxTQzVCRixDRG1DQSxrRkFFRSxXQzdCRixDRHFDQSxjQUNFLDRCQUFBLENBQ0EsbUJDOUJGLENEcUNBLHlDQUNFLHVCQy9CRixDRHVDQSw2QkFDRSx5QkFBQSxDQUNBLFlDaENGLENEMENBLFFBQ0UsYUNsQ0YsQ0R5Q0EsUUFDRSxpQkNuQ0YsQ0RxREEsa0JBQ0UsWUN0Q0YsQ0MvU0EsTUFFRSxxQkFBQSxDQURBLGNBQUEsQ0FFQSxzQkRrVEYsQ0MvU0EsaUJBR0Usa0JBQUEsQ0FDQSxRQUFBLENBQ0EsU0RrVEYsQ0M5U0Esb0JBR0Usb0JEaVRGLENDN1NBLEdBQ0Usb0JEa1RGLENDNVNBLHFCQUxFLFFBQUEsQ0FDQSxTRDBURixDQzVTQSxLQUNFLHdCRCtTRixDQzNTQSxXQUVFLGFBQUEsQ0FEQSxlRCtTRixDRTVWQSxrQkFDRSxpQkFBQSxDQUNBLFVGK1ZGLENFN1ZFLHVCQUtFLHFCQ1BTLENETVQsa0JBQUEsQ0FIQSxhQUFBLENBRUEsY0FBQSxDQUdBLHdCQUFBLENBQ0EsOEJBQUEsQ0FMQSxjRm9XSixDRTdWSSx3Q0FDRSxxQkYrVk4sQ0UxVkkseUNBQ0UseUJGNFZOLENFelZJLDBDQUNFLDBCRjJWTixDRXhWSSx3Q0FDRSx5QkYwVk4sQ0lwWEEsUUFFRSxvQ0FBQSxDQURBLGVKd1hGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxyXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAqIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgLyogMSAqL1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPSdidXR0b24nXSxcXHJcXG5bdHlwZT0ncmVzZXQnXSxcXHJcXG5bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXHJcXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1idXR0b25dLFxcblt0eXBlPXJlc2V0XSxcXG5bdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9Y2hlY2tib3hdLFxcblt0eXBlPXJhZGlvXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTYsIDcyJSwgNDklKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG4uaGVhZGVyLWhhbWJ1cmdlciA+IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMi4xMTI1ZW07XFxuICBoZWlnaHQ6IDAuMjEyNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogM3B4IDFweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaGVhZGVyLWhhbWJ1cmdlciA+IHNwYW46bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjQxMjVlbTtcXG59XFxuLmhlYWRlci1oYW1idXJnZXI6aG92ZXIgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xcbn1cXG4uaGVhZGVyLWhhbWJ1cmdlcjpob3ZlciA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcXG59XFxuLmhlYWRlci1oYW1idXJnZXI6aG92ZXIgPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMS44NzVlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMmVtIGhzbGEoMCwgMCUsIDAlLCAwLjMpO1xcbn1cIixcIjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8vIExpbmtzXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8vIExpc3RzXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gSGVhZGxpbmVzXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gY29udGFpbmVyXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDc1cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblwiLFwiLmhlYWRlci1oYW1idXJnZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogNTA7XFxyXFxuXFxyXFxuICA+IHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDIuMTEyNWVtO1xcclxcbiAgICBoZWlnaHQ6IDAuMjEyNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjZlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlQ29sb3I7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDNweCAxcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNDEyNWVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgPiBzcGFuOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy8gQ29sb3JzXFxyXFxuJGNvbG9yLXByaW1hcnk6IGhzbCgxOTYsIDcyJSwgNDklKTtcXHJcXG4kd2hpdGVDb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG5cIixcIkBpbXBvcnQgJy4uL2NvbXBvbmVudHMvbmF2TWVudUJ0bic7XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxLjg3NWVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4yZW0gaHNsYSgwLCAwJSwgMCUsIDAuMyk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgW3tzZWN0aW9uOidob21lJ30se3NlY3Rpb246J2Nsb3RoZXMnLHN0YXJ0SW1hZ2U6J2Fzc2V0cy9pbWFnZXMvL3N0YXJ0LXBhZ2UtY2FyZHMvdi1zd2VhdGVyLnBuZycsbGlua1BhdGg6JyNjbG90aGVzJyxzZWN0aW9uVGl0bGU6J0Nsb3RoZXMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2NhcCcsdHJhbnNsYXRpb246J9GI0LDQv9C60LAnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2Nsb3RoZXMvYS1jYXAucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvY2FwLm1wMycsYWx0OidjYXAgaW1hZ2UnfSx7d29yZDonamFja2V0Jyx0cmFuc2xhdGlvbjon0LrRg9GA0YLQutCwJyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9jbG90aGVzL2EtamFja2V0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2phY2tldC5tcDMnLGFsdDonamFja2V0IGltYWdlJ30se3dvcmQ6J3NjYXJmJyx0cmFuc2xhdGlvbjon0YjQsNGA0YQnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2Nsb3RoZXMvYS1zY2FyZi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zY2FyZi5tcDMnLGFsdDonc2NhcmYgaW1hZ2UnfSx7d29yZDonc2hvZXMnLHRyYW5zbGF0aW9uOifQsdC+0YLQuNC90LrQuCcsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvY2xvdGhlcy9hLXNob2VzLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3Nob2VzLm1wMycsYWx0OidzaG9lcyBpbWFnZSd9LHt3b3JkOidibG91c2UnLHRyYW5zbGF0aW9uOifQsdC70YPQt9C60LAnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2Nsb3RoZXMvdi1ibG91c2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvYmxvdXNlLm1wMycsYWx0OidibG91c2UgaW1hZ2UnfSx7d29yZDonY29hdCcsdHJhbnNsYXRpb246J9Cx0LvRg9C30LrQsCcsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvY2xvdGhlcy92LWNvYXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvY29hdC5tcDMnLGFsdDonY29hdCBpbWFnZSd9LHt3b3JkOidkcmVzcycsdHJhbnNsYXRpb246J9C/0LvQsNGC0YzQtScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvY2xvdGhlcy92LWRyZXNzLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2RyZXNzLm1wMycsYWx0OidkcmVzcyBpbWFnZSd9LHt3b3JkOidzaGlydCcsdHJhbnNsYXRpb246J9GA0YPQsdCw0YjQutCwJyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9jbG90aGVzL3Ytc2hpcnQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2hpcnQubXAzJyxhbHQ6J3NoaXJ0IGltYWdlJ31dfSx7c2VjdGlvbjonY29sb3Vycycsc3RhcnRJbWFnZTonYXNzZXRzL2ltYWdlcy8vc3RhcnQtcGFnZS1jYXJkcy92LXllbGxvdy5wbmcnLGxpbmtQYXRoOicjY29sb3Vycycsc2VjdGlvblRpdGxlOidDb2xvdXJzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidibGFjaycsdHJhbnNsYXRpb246J9GH0LXRgNC90YvQuScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvY29sb3Vycy92LWJsYWNrLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2JsYWNrLm1wMycsYWx0OidibGFjayBpbWFnZSd9LHt3b3JkOidibHVlJyx0cmFuc2xhdGlvbjon0YHQuNC90LjQuScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvY29sb3Vycy92LWJsdWUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvYmx1ZS5tcDMnLGFsdDonYmx1ZSBpbWFnZSd9LHt3b3JkOidicm93bicsdHJhbnNsYXRpb246J9C60L7RgNC40YfQvdC10LLRi9C5JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9jb2xvdXJzL3YtYnJvd24ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvYnJvd24ubXAzJyxhbHQ6J2Jyb3duIGltYWdlJ30se3dvcmQ6J2dyZWVuJyx0cmFuc2xhdGlvbjon0LfQtdC70ZHQvdGL0LknLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2NvbG91cnMvdi1ncmVlbi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ncmVlbi5tcDMnLGFsdDonZ3JlZW4gaW1hZ2UnfSx7d29yZDonZ3JleScsdHJhbnNsYXRpb246J9GB0LXRgNGL0LknLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2NvbG91cnMvdi1ncmV5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2dyZXkubXAzJyxhbHQ6J2dyZXkgaW1hZ2UnfSx7d29yZDonb3JhbmdlJyx0cmFuc2xhdGlvbjon0L7RgNCw0L3QttC10LLRi9C5JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9jb2xvdXJzL3Ytb3JhbmdlLWMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvb3JhbmdlLm1wMycsYWx0OidvcmFuZ2UgaW1hZ2UnfSx7d29yZDoncGluaycsdHJhbnNsYXRpb246J9GA0L7Qt9C+0LLRi9C5JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9jb2xvdXJzL3YtcGluay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9waW5rLm1wMycsYWx0OidwaW5rIGltYWdlJ30se3dvcmQ6J3JlZCcsdHJhbnNsYXRpb246J9C60YDQsNGB0L3Ri9C5JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9jb2xvdXJzL3YtcmVkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL3JlZC5tcDMnLGFsdDoncmVkIGltYWdlJ31dfSx7c2VjdGlvbjonZmFtaWx5JyxzdGFydEltYWdlOidhc3NldHMvaW1hZ2VzLy9zdGFydC1wYWdlLWNhcmRzL3YtZmFtaWx5LnBuZycsbGlua1BhdGg6JyNmYW1pbHknLHNlY3Rpb25UaXRsZTonRmFtaWx5JyxzZWN0aW9uV29yZHM6W3t3b3JkOidhdW50Jyx0cmFuc2xhdGlvbjon0YLQtdGC0Y8nLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZhbWlseS92LWF1bnQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9hdW50Lm1wMycsYWx0OidhdW50IGltYWdlJ30se3dvcmQ6J2Jyb3RoZXInLHRyYW5zbGF0aW9uOifQsdGA0LDRgicsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZmFtaWx5L3YtYnJvdGhlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2Jyb3RoZXIubXAzJyxhbHQ6J2Jyb3RoZXIgaW1hZ2UnfSx7d29yZDonZGFkZHknLHRyYW5zbGF0aW9uOifQv9Cw0L/QsCcsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZmFtaWx5L3YtZGFkZHkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9kYWRkeS5tcDMnLGFsdDonZGFkZHkgaW1hZ2UnfSx7d29yZDonZ3JhbmRtYScsdHJhbnNsYXRpb246J9Cx0LDQsdGD0YjQutCwJyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9mYW1pbHkvdi1ncmFuZG1hLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvZ3JhbmRtYS5tcDMnLGFsdDonZ3JhbmRtYSBpbWFnZSd9LHt3b3JkOidncmFuZHBhJyx0cmFuc2xhdGlvbjon0LTQtdC00YPRiNC60LAnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZhbWlseS92LWdyYW5kcGEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9ncmFuZHBhLm1wMycsYWx0OidncmFuZHBhIGltYWdlJ30se3dvcmQ6J211bW15Jyx0cmFuc2xhdGlvbjon0LzQsNC80LAnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZhbWlseS92LW11bW15LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvbXVtbXkubXAzJyxhbHQ6J211bW15IGltYWdlJ30se3dvcmQ6J3Npc3RlcicsdHJhbnNsYXRpb246J9GB0LXRgdGC0YDQsCcsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZmFtaWx5L3Ytc2lzdGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvc2lzdGVyLm1wMycsYWx0OidzaXN0ZXIgaW1hZ2UnfSx7d29yZDondW5jbGUnLHRyYW5zbGF0aW9uOifQtNGP0LTRjycsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZmFtaWx5L3YtdW5jbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS91bmNsZS5tcDMnLGFsdDondW5jbGUgaW1hZ2UnfV19LHtzZWN0aW9uOidmb29kJyxzdGFydEltYWdlOidhc3NldHMvaW1hZ2VzLy9zdGFydC1wYWdlLWNhcmRzL2EtaGFtYnVyZ2VyLnBuZycsbGlua1BhdGg6JyNmb29kJyxzZWN0aW9uVGl0bGU6J0Zvb2QnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2VnZycsdHJhbnNsYXRpb246J9GP0LnRhtC+JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9mb29kL2EtZWdnLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2VnZy5tcDMnLGFsdDonZWdnIGltYWdlJ30se3dvcmQ6J2ljZSBjcmVhbScsdHJhbnNsYXRpb246J9C80L7RgNC+0LbQtdC90L7QtScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZm9vZC9hLWljZWNyZWFtLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2ljZS1jcmVhbS5tcDMnLGFsdDonaWNlIGNyZWFtIGltYWdlJ30se3dvcmQ6J2JyZWFkJyx0cmFuc2xhdGlvbjon0YXQu9C10LEnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2Zvb2Qvdi1icmVhZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9icmVhZC5tcDMnLGFsdDonYnJlYWQgaW1hZ2UnfSx7d29yZDonYnV0dGVyJyx0cmFuc2xhdGlvbjon0LzQsNGB0LvQvicsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZm9vZC92LWJ1dHRlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9idXR0ZXIubXAzJyxhbHQ6J2J1dHRlciBpbWFnZSd9LHt3b3JkOidjYWtlJyx0cmFuc2xhdGlvbjon0L/QuNGA0L7QttC90L7QtScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZm9vZC92LWNha2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvY2FrZS5tcDMnLGFsdDonY2FrZSBpbWFnZSd9LHt3b3JkOidjaGVlc2UnLHRyYW5zbGF0aW9uOifRgdGL0YAnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2Zvb2Qvdi1jaGVlc2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvY2hlZXNlLm1wMycsYWx0OidjaGVlc2UgaW1hZ2UnfSx7d29yZDoncGl6emEnLHRyYW5zbGF0aW9uOifQv9C40YbRhtCwJyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9mb29kL3YtcGl6emEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvcGl6emEubXAzJyxhbHQ6J3BpenphIGltYWdlJ30se3dvcmQ6J3NhbmR3aWNoJyx0cmFuc2xhdGlvbjon0LHRg9GC0LXRgNCx0YDQvtC0JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9mb29kL3Ytc2FuZHdpY2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2Qvc2FuZHdpY2gubXAzJyxhbHQ6J3NhbmR3aWNoIGltYWdlJ31dfSx7c2VjdGlvbjonZnJ1aXRzJyxzdGFydEltYWdlOidhc3NldHMvaW1hZ2VzLy9zdGFydC1wYWdlLWNhcmRzL3Ytc3RyYXdiZXJyeS5wbmcnLGxpbmtQYXRoOicjZnJ1aXRzJyxzZWN0aW9uVGl0bGU6J0ZydWl0cycsc2VjdGlvbldvcmRzOlt7d29yZDonYXBwbGUnLHRyYW5zbGF0aW9uOifRj9Cx0LvQvtC60L4nLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZydWl0cy9hLWFwcGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvYXBwbGUubXAzJyxhbHQ6J2FwcGxlIGltYWdlJ30se3dvcmQ6J2NoZXJyeScsdHJhbnNsYXRpb246J9Cy0LjRiNC90Y8nLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZydWl0cy9hLWNoZXJyeS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2NoZXJyeS5tcDMnLGFsdDonY2hlcnJ5IGltYWdlJ30se3dvcmQ6J2dyYXBlJyx0cmFuc2xhdGlvbjon0YTQuNCz0YPRgNC90L7QtSDQutCw0YLQsNC90LjQtScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZnJ1aXRzL2EtZ3JhcGVzLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvZ3JhcGUubXAzJyxhbHQ6J2dyYXBlIGltYWdlJ30se3dvcmQ6J29yYW5nZScsdHJhbnNsYXRpb246J9Cw0L/QtdC70YzRgdC40L0nLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZydWl0cy9hLW9yYW5nZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL29yYW5nZS5tcDMnLGFsdDonb3JhbmdlIGltYWdlJ30se3dvcmQ6J3BlYWNoJyx0cmFuc2xhdGlvbjon0L/QtdGA0YHQuNC6JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9mcnVpdHMvYS1wZWFjaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL3BlYWNoLm1wMycsYWx0OidwZWFjaCBpbWFnZSd9LHt3b3JkOidwaW5lYXBwbGUnLHRyYW5zbGF0aW9uOifQsNC90LDQvdCw0YEnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZydWl0cy9hLXBpbmVhcHBsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL3BpbmVhcHBsZS5tcDMnLGFsdDoncGluZWFwcGxlIGltYWdlJ30se3dvcmQ6J2JhbmFuYScsdHJhbnNsYXRpb246J9Cx0LDQvdCw0L0nLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL2ZydWl0cy92LWJhbmFuYS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2JhbmFuYS5tcDMnLGFsdDonYmFuYW5hIGltYWdlJ30se3dvcmQ6J2xlbW9uJyx0cmFuc2xhdGlvbjon0LvQuNC80L7QvScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvZnJ1aXRzL3YtbGVtb24ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9sZW1vbi5tcDMnLGFsdDonbGVtb24gaW1hZ2UnfV19LHtzZWN0aW9uOidwZXRzJyxzdGFydEltYWdlOidhc3NldHMvaW1hZ2VzLy9zdGFydC1wYWdlLWNhcmRzL3YtcG9ueS5wbmcnLGxpbmtQYXRoOicjcGV0cycsc2VjdGlvblRpdGxlOidQZXRzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidoYW1zdGVyJyx0cmFuc2xhdGlvbjon0YXQvtC80Y/QuicsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvcGV0cy9hLWhhbXN0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvaGFtc3Rlci5tcDMnLGFsdDonaGFtc3RlciBpbWFnZSd9LHt3b3JkOidwYXJyb3QnLHRyYW5zbGF0aW9uOifQv9C+0L/Rg9Cz0LDQuScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvcGV0cy9hLXBhcnJvdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9wYXJyb3QubXAzJyxhbHQ6J3BhcnJvdCBpbWFnZSd9LHt3b3JkOid0dXJ0bGUnLHRyYW5zbGF0aW9uOifRh9C10YDQtdC/0LDRhdCwJyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9wZXRzL2EtdHVydGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3R1cnRsZS5tcDMnLGFsdDondHVydGxlIGltYWdlJ30se3dvcmQ6J2tpdHRlbicsdHJhbnNsYXRpb246J9C60L7RgtGR0L3QvtC6JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9wZXRzL2gta2l0dGVuLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2tpdHRlbi5tcDMnLGFsdDona2l0dGVuIGltYWdlJ30se3dvcmQ6J3B1cHB5Jyx0cmFuc2xhdGlvbjon0YnQtdC90L7QuicsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvcGV0cy9oLXB1cHB5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3B1cHB5Lm1wMycsYWx0OidwdXBweSBpbWFnZSd9LHt3b3JkOidmZXJyZXQnLHRyYW5zbGF0aW9uOifRhdC+0YDQtdC6JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9wZXRzL3YtZmVycmV0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2ZlcnJldC5tcDMnLGFsdDonZmVycmV0IGltYWdlJ30se3dvcmQ6J2Zpc2gnLHRyYW5zbGF0aW9uOifRgNGL0LHQsCcsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvcGV0cy92LWZpc2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvZmlzaC5tcDMnLGFsdDonZmlzaCBpbWFnZSd9LHt3b3JkOidtb3VzZScsdHJhbnNsYXRpb246J9C80YvRiNGMJyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9wZXRzL3YtbW91c2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvbW91c2UubXAzJyxhbHQ6J21vdXNlIGltYWdlJ31dfSx7c2VjdGlvbjonc2Nob29sJyxzdGFydEltYWdlOidhc3NldHMvaW1hZ2VzLy9zdGFydC1wYWdlLWNhcmRzL3YtcHVwaWwucG5nJyxsaW5rUGF0aDonI3NjaG9vbCcsc2VjdGlvblRpdGxlOidTY2hvb2wnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2JvYXJkJyx0cmFuc2xhdGlvbjon0LTQvtGB0LrQsCcsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvc2Nob29sL3YtYm9hcmQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ib2FyZC5tcDMnLGFsdDonYm9hcmQgaW1hZ2UnfSx7d29yZDonYm9vaycsdHJhbnNsYXRpb246J9C60L3QuNCz0LAnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3NjaG9vbC92LWJvb2sucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ib29rLm1wMycsYWx0Oidib29rIGltYWdlJ30se3dvcmQ6J2NhbGN1bGF0b3InLHRyYW5zbGF0aW9uOifRh9C10YDQtdC/0LDRhdCwJyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9zY2hvb2wvdi1jYWxjdWxhdG9yLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvY2FsY3VsYXRvci5tcDMnLGFsdDonY2FsY3VsYXRvciBpbWFnZSd9LHt3b3JkOidjbGFzc3Jvb20nLHRyYW5zbGF0aW9uOifRiNC60L7Qu9GM0L3Ri9C5INC60LvQsNGB0YEnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3NjaG9vbC92LWNsYXNzcm9vbS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2NsYXNzcm9vbS5tcDMnLGFsdDonY2xhc3Nyb29tIGltYWdlJ30se3dvcmQ6J21hcCcsdHJhbnNsYXRpb246J9C60LDRgNGC0LAnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3NjaG9vbC92LW1hcC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL21hcC5tcDMnLGFsdDonbWFwIGltYWdlJ30se3dvcmQ6J25vdGVib29rJyx0cmFuc2xhdGlvbjon0YLQtdGC0YDQsNC00YwnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3NjaG9vbC92LW5vdGVib29rLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvbm90ZWJvb2subXAzJyxhbHQ6J25vdGVib29rIGltYWdlJ30se3dvcmQ6J3NjaG9vbGJhZycsdHJhbnNsYXRpb246J9C/0L7RgNGC0YTQtdC70YwnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3NjaG9vbC92LXNjaG9vbGJhZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL3NjaG9vbGJhZy5tcDMnLGFsdDonc2Nob29sYmFnIGltYWdlJ30se3dvcmQ6J3RlYWNoZXInLHRyYW5zbGF0aW9uOifRg9GH0LjRgtC10LvRjCcsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvc2Nob29sL3YtdGVhY2hlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL3RlYWNoZXIubXAzJyxhbHQ6J3RlYWNoZXIgaW1hZ2UnfV19LHtzZWN0aW9uOidzcG9ydCcsc3RhcnRJbWFnZTonYXNzZXRzL2ltYWdlcy8vc3RhcnQtcGFnZS1jYXJkcy92LXRlbm5pcy5wbmcnLGxpbmtQYXRoOicjc3BvcnQnLHNlY3Rpb25UaXRsZTonU3BvcnQnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2Jhc2tldGJhbGwnLHRyYW5zbGF0aW9uOifQsdCw0YHQutC10YLQsdC+0LsnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3Nwb3J0L3YtYmFza2V0YmFsbC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvYmFza2V0YmFsbC5tcDMnLGFsdDonYmFza2V0YmFsbCBpbWFnZSd9LHt3b3JkOidjeWNsaW5nJyx0cmFuc2xhdGlvbjon0LXQt9C00LAg0L3QsCDQstC10LvQvtGB0LjQv9C10LTQtScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvc3BvcnQvdi1jeWNsaW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9jeWNsaW5nLm1wMycsYWx0OidjeWNsaW5nIGltYWdlJ30se3dvcmQ6J2ZpZ3VyZSBza2F0aW5nJyx0cmFuc2xhdGlvbjon0YTQuNCz0YPRgNC90L7QtSDQutCw0YLQsNC90LjQtScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvc3BvcnQvdi1maWd1cmUtc2thdGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvZmlndXJlLXNrYXRpbmcubXAzJyxhbHQ6J2ZpZ3VyZSBza2F0aW5nIGltYWdlJ30se3dvcmQ6J2Zvb3RiYWxsJyx0cmFuc2xhdGlvbjon0YTRg9GC0LHQvtC7JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9zcG9ydC92LWZvb3RiYWxsLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9mb290YmFsbC5tcDMnLGFsdDonZm9vdGJhbGwgaW1hZ2UnfSx7d29yZDonaG9ja2V5Jyx0cmFuc2xhdGlvbjon0YXQvtC60LrQtdC5JyxpbWFnZTonYXNzZXRzL2ltYWdlcy9jYXJkcy9zcG9ydC92LWhvY2tleS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvaG9ja2V5Lm1wMycsYWx0Oidob2NrZXkgaW1hZ2UnfSx7d29yZDonc2tpaW5nJyx0cmFuc2xhdGlvbjon0LvRi9C20L3Ri9C5INGB0L/QvtGA0YInLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3Nwb3J0L3Ytc2tpaW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9za2lpbmcubXAzJyxhbHQ6J3NraWluZyBpbWFnZSd9LHt3b3JkOidzd2ltbWluZycsdHJhbnNsYXRpb246J9C/0LvQsNCy0LDQvdC40LUnLGltYWdlOidhc3NldHMvaW1hZ2VzL2NhcmRzL3Nwb3J0L3Ytc3dpbW1pbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L3N3aW1taW5nLm1wMycsYWx0Oidzd2ltbWluZyBpbWFnZSd9LHt3b3JkOidib3hpbmcnLHRyYW5zbGF0aW9uOifQsdC+0LrRgScsaW1hZ2U6J2Fzc2V0cy9pbWFnZXMvY2FyZHMvc3BvcnQvdi1ib3hpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2JveGluZy5tcDMnLGFsdDonYm94aW5nIGltYWdlJ31dfV0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbM10hLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcblxuY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZUhlYWRlcigpKTtcbi8vIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4iXSwibmFtZXMiOlsiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVOYXZNZW51IiwiY3JlYXRlTG9nbyIsImNyZWF0ZVRvZ2dsZSIsImNyZWF0ZU5hdk1lbnVCdG4iLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXJFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGVhZGVyTG9nbyIsImhlYWRlckJ0bnNDb250YWluZXIiLCJ0b2dnbGVCdG4iLCJzdGF0QnRuIiwidHlwZSIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiaGVhZGVyTmF2IiwibmF2TWVudUJ0biIsIm5hdmlnYXRpb25NZW51IiwiaGVhZGVyQ29udGFpbmVyIiwibG9nb1RleHQiLCJsb2dvSHJlZiIsImhlYWRlckxvZ29MaW5rIiwiaHJlZiIsImNyZWF0ZU5hdk1lbnVJdGVtIiwibmF2TWVudVVsIiwiaSIsImxlbmd0aCIsInNlY3Rpb24iLCJ0b1VwcGVyQ2FzZSIsInNwYW4xIiwic3BhbjIiLCJzcGFuMyIsImFyaWFQcmVzc2VkIiwidG9nZ2xlTW9kZTEiLCJ0b2dnbGVNb2RlMiIsIm5hbWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjYXBpdGFsaXplRmlyc3RXb3JkIiwid29yZCIsImNoYXJBdCIsInNsaWNlIiwibGlua05hbWUiLCJsaSIsImxpbmsiLCJjb25jYXQiLCJkYXRhc2V0IiwiYXBwV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9