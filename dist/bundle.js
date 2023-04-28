/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/cardItem.js":
/*!***************************************!*\
  !*** ./src/js/components/cardItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* eslint-disable import/no-cycle */

var createCardItem = function createCardItem(imgPath, imgAlt, cardTitle) {
  var cardTranslation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  // create card item
  var cardItem = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('li');
  cardItem.classList.add('card');
  cardItem.classList.add('card-list__item');

  // create card inner
  var cardInner = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  cardInner.classList.add('card-inner');

  // create card front side
  var cardFront = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  cardFront.classList.add('card-front');

  // create card front image container
  var cardFrontImgContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  cardFrontImgContainer.classList.add('card-front__pic');
  cardFrontImgContainer.classList.add('card-pic');

  // create card front image
  var cardFrontImg = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('img');
  cardFrontImg.classList.add('card-front__pic-img');
  cardFrontImg.classList.add('card-img');
  cardFrontImg.src = imgPath; // data.img
  cardFrontImg.alt = imgAlt; // data.alt

  cardFrontImgContainer.append(cardFrontImg);
  cardFront.append(cardFrontImgContainer);

  // create card front title
  var cardFrontTitle = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
  cardFrontTitle.classList.add('card-front__title');
  cardFrontTitle.classList.add('card-title');
  cardFrontTitle.textContent = cardTitle; // data.titleFront

  cardFront.append(cardFrontTitle);

  // create card front rotate button
  var cardFrontRotateBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  cardFrontRotateBtn.classList.add('card-front__rotate');
  cardFrontRotateBtn.classList.add('rotate-btn');
  cardFrontRotateBtn.type = 'button';
  cardFront.append(cardFrontRotateBtn);

  // create card back side
  var cardBack = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  cardBack.classList.add('card-back');

  // create card back image container
  var cardBackImgContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  cardBackImgContainer.classList.add('card-back__pic');
  cardBackImgContainer.classList.add('card-pic');

  // create card back image
  var cardBackImg = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('img');
  cardBackImg.classList.add('card-back__pic-img');
  cardBackImg.classList.add('card-img');
  cardBackImg.src = imgPath; // data.img
  cardBackImg.alt = imgAlt; // data.alt

  cardBackImgContainer.append(cardBackImg);
  cardBack.append(cardBackImgContainer);

  // create card back title
  var cardBackTitle = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
  cardBackTitle.classList.add('card-back__title');
  cardBackTitle.classList.add('card-title');
  cardBackTitle.textContent = cardTranslation; // data.titleBack

  cardBack.append(cardBackTitle);
  cardInner.append(cardFront);
  cardInner.append(cardBack);
  cardItem.append(cardInner);
  return cardItem;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardItem);

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
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
  var navigationMenu = (0,_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

"use strict";
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

/***/ "./src/js/components/main.js":
/*!***********************************!*\
  !*** ./src/js/components/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createMain = function createMain() {
  // create main element
  var mainElement = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('main');
  mainElement.classList.add('main');

  // create main container
  var mainContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  mainContainer.classList.add('container');

  // create score line
  var scoreLine = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  scoreLine.classList.add('score-line');
  mainContainer.append(scoreLine);

  // create category name
  var categoryName = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2');
  categoryName.classList.add('category-name');
  categoryName.textContent = 'Home';

  // cards list
  var cardList = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul');
  cardList.classList.add('cards-list');
  mainContainer.append(categoryName);
  mainContainer.append(cardList);
  mainElement.append(mainContainer);
  return mainElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

/***/ }),

/***/ "./src/js/components/navMenu.js":
/*!**************************************!*\
  !*** ./src/js/components/navMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _navMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navMenuItem */ "./src/js/components/navMenuItem.js");


var createNavMenu = function createNavMenu(data) {
  // create nav ul
  var navMenuUl = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul');
  navMenuUl.classList.add('header-menu');
  for (var i = 0; i < data.length; i += 1) {
    navMenuUl.append((0,_navMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])(data[i].section));
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

"use strict";
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

/***/ "./src/js/components/navMenuItem.js":
/*!******************************************!*\
  !*** ./src/js/components/navMenuItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createNavMenuItem = function createNavMenuItem(linkName) {
  // create li
  var li = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('li');
  li.classList.add('header-menu__item');

  // create menu link
  var link = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('a');
  link.classList.add('header-menu__item-link');
  link.href = "#".concat(linkName);
  link.dataset.section = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstWord)(linkName);
  link.textContent = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstWord)(linkName);
  li.append(link);
  return li;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavMenuItem);

/***/ }),

/***/ "./src/js/components/toggleBtn.js":
/*!****************************************!*\
  !*** ./src/js/components/toggleBtn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/utils/createStartPgageCardsList.js":
/*!***************************************************!*\
  !*** ./src/js/utils/createStartPgageCardsList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/utils/variables.js");
/* harmony import */ var _components_cardItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cardItem */ "./src/js/components/cardItem.js");
/* eslint-disable import/no-cycle */


var createStartPageCardSet = function createStartPageCardSet(array) {
  var cardsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  array.forEach(function (element) {
    if (element.section !== 'home') {
      var imgPath = element.startImage;
      var imgAlt = element.sectionWords[0].alt;
      var cardTitle = element.sectionTitle;
      // imgPath, imgAlt, cardTitle, cardTranslation
      var cardItem = (0,_components_cardItem__WEBPACK_IMPORTED_MODULE_1__["default"])(imgPath, imgAlt, cardTitle);
      cardsList.append(cardItem);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStartPageCardSet);

/***/ }),

/***/ "./src/js/utils/events.js":
/*!********************************!*\
  !*** ./src/js/utils/events.js ***!
  \********************************/
/***/ (() => {

// document.addEventListener('DOMContentLoaded', () => {
//   SET_VAR('categoryName', document.querySelector('.category-name'));
//   //   categoryName = 'new value';
//   console.log('categoryName2', GET_VAR('categoryName'));
// });

/***/ }),

/***/ "./src/js/utils/helper.js":
/*!********************************!*\
  !*** ./src/js/utils/helper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstWord": () => (/* binding */ capitalizeFirstWord),
/* harmony export */   "createCardsSet": () => (/* binding */ createCardsSet),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "setGlobalValues": () => (/* binding */ setGlobalValues)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/utils/variables.js");
/* harmony import */ var _createStartPgageCardsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStartPgageCardsList */ "./src/js/utils/createStartPgageCardsList.js");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
/* eslint-disable import/no-cycle */




// create element
var createElement = function createElement(name) {
  var element = document.createElement(name);
  return element;
};
var capitalizeFirstWord = function capitalizeFirstWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
var setGlobalValues = function setGlobalValues() {
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('categoryName', document.querySelector('.category-name'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('cardsList', document.querySelector('.cards-list'));
};
var createCardsSet = function createCardsSet() {
  var category = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('categoryName').textContent;
  console.log('category', category);
  if (category === 'Home') {
    // generate start page
    (0,_createStartPgageCardsList__WEBPACK_IMPORTED_MODULE_1__["default"])(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_2__["default"]);
  } else {
    // generate current category page
  }
};


/***/ }),

/***/ "./src/js/utils/variables.js":
/*!***********************************!*\
  !*** ./src/js/utils/variables.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_VAR": () => (/* binding */ GET_VAR),
/* harmony export */   "SET_VAR": () => (/* binding */ SET_VAR)
/* harmony export */ });
var VARIABLES = {
  categoryName: 'initial value',
  cardsList: 'initial value'
};
var SET_VAR = function SET_VAR(name, value) {
  if (Object.prototype.hasOwnProperty.call(VARIABLES, name)) {
    VARIABLES[name] = value;
  }
};
var GET_VAR = function GET_VAR(name) {
  if (Object.prototype.hasOwnProperty.call(VARIABLES, name)) {
    return VARIABLES[name];
  }
  return false;
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/main.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/main.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/home.png */ "./src/assets/images/header-menu-icons/home.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/clothes.png */ "./src/assets/images/header-menu-icons/clothes.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/food.png */ "./src/assets/images/header-menu-icons/food.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/colours.png */ "./src/assets/images/header-menu-icons/colours.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/fruits.png */ "./src/assets/images/header-menu-icons/fruits.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/pets.png */ "./src/assets/images/header-menu-icons/pets.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/school.png */ "./src/assets/images/header-menu-icons/school.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/sports.png */ "./src/assets/images/header-menu-icons/sports.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-menu-icons/family.png */ "./src/assets/images/header-menu-icons/family.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{box-sizing:border-box;font-size:100%;scroll-behavior:smooth}*,:after,:before{box-sizing:inherit;margin:0;padding:0}a,a:hover,a:visited{text-decoration:none}ul{list-style-type:none}h1,h2,h3,h4,h5,h6,ul{margin:0;padding:0}body{background-color:#23a7d7;font-family:Comic Neue,cursive}.container{margin:0 auto;max-width:75rem}.header-hamburger{left:1.5em;position:fixed;top:1.6em;z-index:30}.header-hamburger>span{background-color:#fff;border-radius:.6em;display:block;height:.2125em;transform-origin:3px 1px;transition:all .3s ease-in-out;width:2.1125em}.header-hamburger>span:not(:last-child){margin-bottom:.4125em}.header-hamburger:hover>span:first-child{transform:translateX(.1875rem)}.header-hamburger:hover>span:nth-child(2){transform:translateX(-.1875rem)}.header-hamburger:hover>span:last-child{transform:translateX(.1875rem)}.header-menu{background:linear-gradient(40deg,#ffd970,#fc6464);box-shadow:.1875em 0 .625em rgba(0,0,0,.5),inset .1875em 0 1.25em rgba(0,0,0,.5);left:0;left:-20.625rem;min-height:100vh;min-width:20rem;padding-left:2.8125em;padding-top:6em;position:fixed;top:0;transition:all .4s ease-in-out;z-index:10}.header-menu__item:not(:last-child){margin-bottom:1.75em}.header-menu__item-link{-webkit-text-stroke:1px hsla(0,0%,100%,.8);color:transparent;font-size:1.4em;letter-spacing:2px;line-height:.6em;padding-left:2em;position:relative;text-transform:uppercase}.header-menu__item-link.active:before,.header-menu__item-link:hover:before{-webkit-text-stroke:1px #fff;filter:drop-shadow(0 0 25px hsl(0,0%,100%));width:100%}.header-menu__item-link:before{-webkit-text-stroke:1px #fff;color:#fff;content:attr(data-section);overflow:hidden;position:absolute;transition:width .3s ease-in-out;width:0}.header-menu__item-link:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link:after,.header-menu__item-link[data-section=Clothes]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Clothes]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Food]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Colours]:after,.header-menu__item-link[data-section=Food]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Colours]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Fruits]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Fruits]:after,.header-menu__item-link[data-section=Pets]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Pets]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=School]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=School]:after,.header-menu__item-link[data-section=Sport]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Sport]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Family]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover;content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.toggle-button{background-color:hsla(248,1%,56%,.56);border:0;border-radius:.5em;color:#fff;cursor:pointer;display:flex;overflow:hidden}.toggle-button[aria-pressed=true] .toggle-button__train{background-color:transparent}.toggle-button[aria-pressed=true] .toggle-button__play{background-color:#23d7ad}.toggle-button__mode{flex-basis:50%;font-weight:700;padding:.5em;transition:background .3s ease-in-out}@media (min-width:28.125rem){.toggle-button__mode{font-size:.9em;margin-top:0}}@media (min-width:48rem){.toggle-button__mode{font-size:1.2em}}@media (min-width:62.5rem){.toggle-button__mode{font-size:1.5em}}.toggle-button__train{background-color:#23d7ad}.statistics-button{background-color:#22d7f7;border:0;border-radius:.8em;color:#fff;cursor:pointer;font-weight:700;letter-spacing:.1em;padding:.5em .7em;transition:background .2s ease-in-out}.statistics-button:hover{background-color:#53e0f9}@media (min-width:28.125rem){.statistics-button{font-size:.9em;margin-top:0}}@media (min-width:48rem){.statistics-button{font-size:1.2em}}@media (min-width:62.5rem){.statistics-button{font-size:1.5em}}.header{padding:1.5em 1em}.header .container{align-items:center;display:flex;justify-content:space-between}.header-buttons{display:flex;flex-direction:column;font-size:.9em;gap:.5em}.header-logo__link{color:#fff;display:inline-block;font-size:.7em;margin-top:1em;text-shadow:2px 2px 5px #fff;transition:color .3s ease-in-out}.header-logo__link:hover{color:hsla(0,0%,100%,.6)}@media (min-width:28.125rem){.header-logo__link{font-size:.9em;margin-top:0}}@media (min-width:48rem){.header-logo__link{font-size:1.2em}}@media (min-width:62.5rem){.header-logo__link{font-size:1.5em}}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_globals.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/components/_navMenuBtn.scss","webpack://./src/scss/components/navMenu.scss","webpack://./src/scss/abstracts/_mixins.scss","webpack://./src/scss/components/_toggleBtn.scss","webpack://./src/scss/components/_statisticsBtn.scss","webpack://./src/scss/layout/_header.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n:root {\n  font-size: 100%;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:hover {\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: hsl(196, 72%, 49%);\n  font-family: \"Comic Neue\", cursive;\n}\n\n.container {\n  max-width: 75rem;\n  margin: 0 auto;\n}\n\n.header-hamburger {\n  position: fixed;\n  z-index: 30;\n  left: 1.5em;\n  top: 1.6em;\n}\n.header-hamburger > span {\n  display: block;\n  width: 2.1125em;\n  height: 0.2125em;\n  border-radius: 0.6em;\n  background-color: hsl(0, 0%, 100%);\n  transform-origin: 3px 1px;\n  transition: all 0.3s ease-in-out;\n}\n.header-hamburger > span:not(:last-child) {\n  margin-bottom: 0.4125em;\n}\n.header-hamburger:hover > span:first-child {\n  transform: translateX(0.1875rem);\n}\n.header-hamburger:hover > span:nth-child(2) {\n  transform: translateX(-0.1875rem);\n}\n.header-hamburger:hover > span:last-child {\n  transform: translateX(0.1875rem);\n}\n\n.header-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  left: -20.625rem;\n  z-index: 10;\n  min-width: 20rem;\n  min-height: 100vh;\n  padding-top: 6em;\n  padding-left: 2.8125em;\n  background: linear-gradient(40deg, hsl(44, 100%, 72%), hsl(0, 96%, 69%));\n  box-shadow: 0.1875em 0 0.625em hsla(0, 0%, 0%, 0.5), inset 0.1875em 0 1.25em hsla(0, 0%, 0%, 0.5);\n  transition: all 0.4s ease-in-out;\n}\n.header-menu__item:not(:last-child) {\n  margin-bottom: 1.75em;\n}\n.header-menu__item-link {\n  font-size: 1.4em;\n  line-height: 0.6em;\n  padding-left: 2em;\n  color: transparent;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  position: relative;\n  -webkit-text-stroke: 1px hsla(0, 0%, 100%, 0.8);\n}\n.header-menu__item-link.active::before {\n  width: 100%;\n  -webkit-text-stroke: 1px hsl(0, 0%, 100%);\n  filter: drop-shadow(0 0 25px hsl(0, 0%, 100%));\n}\n.header-menu__item-link:hover::before {\n  width: 100%;\n  -webkit-text-stroke: 1px hsl(0, 0%, 100%);\n  filter: drop-shadow(0 0 25px hsl(0, 0%, 100%));\n}\n.header-menu__item-link::before {\n  content: attr(data-section);\n  position: absolute;\n  color: hsl(0, 0%, 100%);\n  width: 0%;\n  overflow: hidden;\n  transition: width 0.3s ease-in-out;\n  -webkit-text-stroke: 1px hsl(0, 0%, 100%);\n}\n.header-menu__item-link::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/home.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Clothes]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/clothes.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Food]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/food.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Colours]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/colours.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Fruits]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/fruits.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Pets]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/pets.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=School]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/school.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Sport]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/sports.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Family]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/family.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n\n.toggle-button {\n  background-color: hsla(248, 1%, 56%, 0.56);\n  color: hsl(0, 0%, 100%);\n  border: 0;\n  border-radius: 0.5em;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n}\n.toggle-button[aria-pressed=true] .toggle-button__train {\n  background-color: transparent;\n}\n.toggle-button[aria-pressed=true] .toggle-button__play {\n  background-color: hsl(166, 72%, 49%);\n}\n.toggle-button__mode {\n  flex-basis: 50%;\n  padding: 0.5em;\n  font-weight: 700;\n  transition: background 0.3s ease-in-out;\n}\n@media (min-width: 28.125rem) {\n  .toggle-button__mode {\n    font-size: 0.9em;\n    margin-top: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .toggle-button__mode {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 62.5rem) {\n  .toggle-button__mode {\n    font-size: 1.5em;\n  }\n}\n.toggle-button__train {\n  background-color: hsl(166, 72%, 49%);\n}\n\n.statistics-button {\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(189, 93%, 55%);\n  border: 0;\n  border-radius: 0.8em;\n  padding: 0.5em 0.7em;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.statistics-button:hover {\n  background-color: hsl(189, 93%, 65%);\n}\n@media (min-width: 28.125rem) {\n  .statistics-button {\n    font-size: 0.9em;\n    margin-top: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .statistics-button {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 62.5rem) {\n  .statistics-button {\n    font-size: 1.5em;\n  }\n}\n\n.header {\n  padding: 1.5em 1em;\n}\n.header .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  font-size: 0.9em;\n}\n.header-logo__link {\n  color: hsl(0, 0%, 100%);\n  font-size: 0.7em;\n  display: inline-block;\n  margin-top: 1em;\n  text-shadow: 2px 2px 5px hsl(0, 10%, 100%);\n  transition: color 0.3s ease-in-out;\n}\n.header-logo__link:hover {\n  color: hsla(0, 0%, 100%, 0.6);\n}\n@media (min-width: 28.125rem) {\n  .header-logo__link {\n    font-size: 0.9em;\n    margin-top: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .header-logo__link {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 62.5rem) {\n  .header-logo__link {\n    font-size: 1.5em;\n  }\n}",":root {\r\n  font-size: 100%;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// Links\r\na,\r\na:visited,\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n// Lists\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// Headlines\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// font-family: 'Chango', cursive;\r\n//font-family: 'Comic Neue', cursive;\r\n\r\nbody {\r\n  background-color: $color-primary;\r\n  font-family: 'Comic Neue', cursive;\r\n}\r\n\r\n// container\r\n.container {\r\n  max-width: 75rem;\r\n  margin: 0 auto;\r\n}\r\n","// Colors\r\n$color-primary: hsl(196, 72%, 49%);\r\n$whiteColor: hsl(0, 0%, 100%);\r\n$whiteColorShadow: hsl(0, 10%, 100%);\r\n$whiteColorHover: hsla(0, 0%, 100%, 0.6);\r\n\r\n// $toggleBlue: hsla(248, 100%, 50%, .56);\r\n$turquoiseColor: hsl(166, 72%, 49%);\r\n$lightBlueColor: hsl(189, 93%, 55%);\r\n$lightBlueColorHover: hsl(189, 93%, 65%);\r\n$inActiveColor: hsla(248, 1%, 56%, 0.56);\r\n",".header-hamburger {\r\n  position: fixed;\r\n  z-index: 30;\r\n  left: 1.5em;\r\n  top: 1.6em;\r\n  > span {\r\n    display: block;\r\n    width: 2.1125em;\r\n    height: 0.2125em;\r\n    border-radius: 0.6em;\r\n    background-color: $whiteColor;\r\n    transform-origin: 3px 1px;\r\n    transition: all 0.3s ease-in-out;\r\n\r\n    &:not(:last-child) {\r\n      margin-bottom: 0.4125em;\r\n    }\r\n  }\r\n\r\n  &:hover {\r\n    > span:first-child {\r\n      transform: translateX(0.1875rem);\r\n    }\r\n\r\n    > span:nth-child(2) {\r\n      transform: translateX(-0.1875rem);\r\n    }\r\n\r\n    > span:last-child {\r\n      transform: translateX(0.1875rem);\r\n    }\r\n  }\r\n}\r\n",".header-menu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  left: -20.625rem;\r\n  z-index: 10;\r\n  min-width: 20rem;\r\n  min-height: 100vh;\r\n  padding-top: 6em;\r\n  padding-left: 2.8125em;\r\n  background: linear-gradient(40deg, hsl(44, 100%, 72%), hsl(0, 96%, 69%));\r\n  box-shadow: 0.1875em 0 0.625em hsla(0, 0%, 0%, 0.5), inset 0.1875em 0 1.25em hsla(0, 0%, 0%, 0.5);\r\n  transition: all 0.4s ease-in-out;\r\n\r\n  &__item:not(:last-child) {\r\n    margin-bottom: 1.75em;\r\n  }\r\n\r\n  &__item-link {\r\n    font-size: 1.4em;\r\n    line-height: 0.6em;\r\n    padding-left: 2em;\r\n    color: transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    -webkit-text-stroke: 1px hsla(0, 0%, 100%, 0.8);\r\n\r\n    &.active::before {\r\n      width: 100%;\r\n      -webkit-text-stroke: 1px $whiteColor;\r\n      filter: drop-shadow(0 0 25px $whiteColor);\r\n    }\r\n\r\n    &:hover {\r\n      &::before {\r\n        width: 100%;\r\n        -webkit-text-stroke: 1px $whiteColor;\r\n        filter: drop-shadow(0 0 25px $whiteColor);\r\n      }\r\n    }\r\n\r\n    &::before {\r\n      content: attr(data-section);\r\n      position: absolute;\r\n      color: $whiteColor;\r\n      width: 0%;\r\n      overflow: hidden;\r\n      transition: width 0.3s ease-in-out;\r\n      -webkit-text-stroke: 1px $whiteColor;\r\n    }\r\n\r\n    &::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/home.png');\r\n    }\r\n\r\n    &[data-section='Clothes']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/clothes.png');\r\n    }\r\n\r\n    &[data-section='Food']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/food.png');\r\n    }\r\n\r\n    &[data-section='Colours']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/colours.png');\r\n    }\r\n\r\n    &[data-section='Fruits']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/fruits.png');\r\n    }\r\n\r\n    &[data-section='Pets']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/pets.png');\r\n    }\r\n\r\n    &[data-section='School']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/school.png');\r\n    }\r\n\r\n    &[data-section='Sport']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/sports.png');\r\n    }\r\n\r\n    &[data-section='Family']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/family.png');\r\n    }\r\n  }\r\n}\r\n","@mixin insert-icons($path) {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background: url($path);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 1.5625rem;\r\n  height: 1.5625rem;\r\n}\r\n",".toggle-button {\r\n  background-color: $inActiveColor;\r\n  color: $whiteColor;\r\n  border: 0;\r\n  border-radius: 0.5em;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  display: flex;\r\n\r\n  &[aria-pressed='true'] {\r\n    .toggle-button__train {\r\n      background-color: transparent;\r\n    }\r\n\r\n    .toggle-button__play {\r\n      background-color: $turquoiseColor;\r\n    }\r\n  }\r\n\r\n  &__mode {\r\n    flex-basis: 50%;\r\n    padding: 0.5em;\r\n    font-weight: 700;\r\n    transition: background 0.3s ease-in-out;\r\n\r\n    @media (min-width: 28.125rem) {\r\n      font-size: 0.9em;\r\n      margin-top: 0;\r\n    }\r\n\r\n    @media (min-width: 48rem) {\r\n      font-size: 1.2em;\r\n    }\r\n\r\n    @media (min-width: 62.5rem) {\r\n      font-size: 1.5em;\r\n    }\r\n  }\r\n\r\n  &__train {\r\n    background-color: $turquoiseColor;\r\n  }\r\n}\r\n",".statistics-button {\r\n  font-weight: 700;\r\n  letter-spacing: 0.1em;\r\n  color: $whiteColor;\r\n  background-color: $lightBlueColor;\r\n  border: 0;\r\n  border-radius: 0.8em;\r\n  padding: 0.5em 0.7em;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease-in-out;\r\n\r\n  &:hover {\r\n    background-color: $lightBlueColorHover;\r\n  }\r\n\r\n  @media (min-width: 28.125rem) {\r\n    font-size: 0.9em;\r\n    margin-top: 0;\r\n  }\r\n\r\n  @media (min-width: 48rem) {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  @media (min-width: 62.5rem) {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n","@import '../components/navMenuBtn';\r\n@import '../components/navMenu';\r\n@import '../components/toggleBtn';\r\n@import '../components/statisticsBtn';\r\n\r\n.header {\r\n  padding: 1.5em 1em;\r\n\r\n  .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  &-buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5em;\r\n    font-size: 0.9em;\r\n  }\r\n\r\n  &-logo__link {\r\n    color: $whiteColor;\r\n    font-size: 0.7em;\r\n    display: inline-block;\r\n    margin-top: 1em;\r\n    text-shadow: 2px 2px 5px $whiteColorShadow;\r\n    transition: color 0.3s ease-in-out;\r\n\r\n    &:hover {\r\n      color: $whiteColorHover;\r\n    }\r\n\r\n    @media (min-width: 28.125rem) {\r\n      font-size: 0.9em;\r\n      margin-top: 0;\r\n    }\r\n\r\n    @media (min-width: 48rem) {\r\n      font-size: 1.2em;\r\n    }\r\n\r\n    @media (min-width: 62.5rem) {\r\n      font-size: 1.5em;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/assets/data/data.json":
/*!***********************************!*\
  !*** ./src/assets/data/data.json ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{section:'home'},{section:'clothes',startImage:'./assets/images/cards-images/clothes/v-sweater.png',linkPath:'#clothes',sectionTitle:'Clothes',sectionWords:[{word:'cap',translation:'шапка',image:'./assets/images/cards-images/clothes/a-cap.png',audioSrc:'assets/audio/clothes/cap.mp3',alt:'cap image'},{word:'jacket',translation:'куртка',image:'../images/cards-images/clothes/a-jacket.png',audioSrc:'assets/audio/clothes/jacket.mp3',alt:'jacket image'},{word:'scarf',translation:'шарф',image:'./assets/images/cards-images/clothes/a-scarf.png',audioSrc:'assets/audio/clothes/scarf.mp3',alt:'scarf image'},{word:'shoes',translation:'ботинки',image:'./assets/images/cards-images/clothes/a-shoes.png',audioSrc:'assets/audio/clothes/shoes.mp3',alt:'shoes image'},{word:'blouse',translation:'блузка',image:'./assets/images/cards-images/clothes/v-blouse.png',audioSrc:'assets/audio/clothes/blouse.mp3',alt:'blouse image'},{word:'coat',translation:'блузка',image:'./assets/images/cards-images/clothes/v-coat.png',audioSrc:'assets/audio/clothes/coat.mp3',alt:'coat image'},{word:'dress',translation:'платье',image:'./assets/images/cards-images/clothes/v-dress.png',audioSrc:'assets/audio/clothes/dress.mp3',alt:'dress image'},{word:'shirt',translation:'рубашка',image:'./assets/images/cards-images/clothes/v-shirt.png',audioSrc:'assets/audio/clothes/shirt.mp3',alt:'shirt image'}]},{section:'colours',startImage:'./assets/images/cards-images/colours/v-yellow.png',linkPath:'#colours',sectionTitle:'Colours',sectionWords:[{word:'black',translation:'черный',image:'./assets/images/cards-images/colours/v-black.png',audioSrc:'assets/audio/colours/black.mp3',alt:'black image'},{word:'blue',translation:'синий',image:'./assets/images/cards-images/colours/v-blue.png',audioSrc:'assets/audio/colours/blue.mp3',alt:'blue image'},{word:'brown',translation:'коричневый',image:'./assets/images/cards-images/colours/v-brown.png',audioSrc:'assets/audio/colours/brown.mp3',alt:'brown image'},{word:'green',translation:'зелёный',image:'./assets/images/cards-images/colours/v-green.png',audioSrc:'assets/audio/colours/green.mp3',alt:'green image'},{word:'grey',translation:'серый',image:'./assets/images/cards-images/colours/v-grey.png',audioSrc:'assets/audio/colours/grey.mp3',alt:'grey image'},{word:'orange',translation:'оранжевый',image:'./assets/images/cards-images/colours/v-orange-c.png',audioSrc:'assets/audio/colours/orange.mp3',alt:'orange image'},{word:'pink',translation:'розовый',image:'./assets/images/cards-images/colours/v-pink.png',audioSrc:'assets/audio/colours/pink.mp3',alt:'pink image'},{word:'red',translation:'красный',image:'./assets/images/cards-images/colours/v-red.png',audioSrc:'assets/audio/colours/red.mp3',alt:'red image'}]},{section:'family',startImage:'./assets/images/cards-images/family/v-family.png',linkPath:'#family',sectionTitle:'Family',sectionWords:[{word:'aunt',translation:'тетя',image:'./assets/images/cards-images/family/v-aunt.png',audioSrc:'assets/audio/family/aunt.mp3',alt:'aunt image'},{word:'brother',translation:'брат',image:'./assets/images/cards-images/family/v-brother.png',audioSrc:'assets/audio/family/brother.mp3',alt:'brother image'},{word:'daddy',translation:'папа',image:'./assets/images/cards-images/family/v-daddy.png',audioSrc:'assets/audio/family/daddy.mp3',alt:'daddy image'},{word:'grandma',translation:'бабушка',image:'./assets/images/cards-images/family/v-grandma.png',audioSrc:'assets/audio/family/grandma.mp3',alt:'grandma image'},{word:'grandpa',translation:'дедушка',image:'./assets/images/cards-images/family/v-grandpa.png',audioSrc:'assets/audio/family/grandpa.mp3',alt:'grandpa image'},{word:'mummy',translation:'мама',image:'./assets/images/cards-images/family/v-mummy.png',audioSrc:'assets/audio/family/mummy.mp3',alt:'mummy image'},{word:'sister',translation:'сестра',image:'./assets/images/cards-images/family/v-sister.png',audioSrc:'assets/audio/family/sister.mp3',alt:'sister image'},{word:'uncle',translation:'дядя',image:'./assets/images/cards-images/family/v-uncle.png',audioSrc:'assets/audio/family/uncle.mp3',alt:'uncle image'}]},{section:'food',startImage:'./assets/images/cards-images/food/a-hamburger.png',linkPath:'#food',sectionTitle:'Food',sectionWords:[{word:'egg',translation:'яйцо',image:'./assets/images/cards-images/food/a-egg.png',audioSrc:'assets/audio/food/egg.mp3',alt:'egg image'},{word:'ice cream',translation:'мороженое',image:'./assets/images/cards-images/food/a-icecream.png',audioSrc:'assets/audio/food/ice-cream.mp3',alt:'ice cream image'},{word:'bread',translation:'хлеб',image:'./assets/images/cards-images/food/v-bread.png',audioSrc:'assets/audio/food/bread.mp3',alt:'bread image'},{word:'butter',translation:'масло',image:'./assets/images/cards-images/food/v-butter.png',audioSrc:'assets/audio/food/butter.mp3',alt:'butter image'},{word:'cake',translation:'пирожное',image:'./assets/images/cards-images/food/v-cake.png',audioSrc:'assets/audio/food/cake.mp3',alt:'cake image'},{word:'cheese',translation:'сыр',image:'./assets/images/cards-images/food/v-cheese.png',audioSrc:'assets/audio/food/cheese.mp3',alt:'cheese image'},{word:'pizza',translation:'пицца',image:'./assets/images/cards-images/food/v-pizza.png',audioSrc:'assets/audio/food/pizza.mp3',alt:'pizza image'},{word:'sandwich',translation:'бутерброд',image:'./assets/images/cards-images/food/v-sandwich.png',audioSrc:'assets/audio/food/sandwich.mp3',alt:'sandwich image'}]},{section:'fruits',startImage:'./assets/images/cards-images/fruits/v-strawberry.png',linkPath:'#fruits',sectionTitle:'Fruits',sectionWords:[{word:'apple',translation:'яблоко',image:'./assets/images/cards-images/fruits/a-apple.png',audioSrc:'assets/audio/fruits/apple.mp3',alt:'apple image'},{word:'cherry',translation:'вишня',image:'./assets/images/cards-images/fruits/a-cherry.png',audioSrc:'assets/audio/fruits/cherry.mp3',alt:'cherry image'},{word:'grape',translation:'фигурное катание',image:'./assets/images/cards-images/fruits/a-grapes.png',audioSrc:'assets/audio/fruits/grape.mp3',alt:'grape image'},{word:'orange',translation:'апельсин',image:'./assets/images/cards-images/fruits/a-orange.png',audioSrc:'assets/audio/fruits/orange.mp3',alt:'orange image'},{word:'peach',translation:'персик',image:'./assets/images/cards-images/fruits/a-peach.png',audioSrc:'assets/audio/fruits/peach.mp3',alt:'peach image'},{word:'pineapple',translation:'ананас',image:'./assets/images/cards-images/fruits/a-pineapple.png',audioSrc:'assets/audio/fruits/pineapple.mp3',alt:'pineapple image'},{word:'banana',translation:'банан',image:'./assets/images/cards-images/fruits/v-banana.png',audioSrc:'assets/audio/fruits/banana.mp3',alt:'banana image'},{word:'lemon',translation:'лимон',image:'./assets/images/cards-images/fruits/v-lemon.png',audioSrc:'assets/audio/fruits/lemon.mp3',alt:'lemon image'}]},{section:'pets',startImage:'./assets/images/cards-images/pets/v-pony.png',linkPath:'#pets',sectionTitle:'Pets',sectionWords:[{word:'hamster',translation:'хомяк',image:'./assets/images/cards-images/pets/a-hamster.png',audioSrc:'assets/audio/pets/hamster.mp3',alt:'hamster image'},{word:'parrot',translation:'попугай',image:'./assets/images/cards-images/pets/a-parrot.png',audioSrc:'assets/audio/pets/parrot.mp3',alt:'parrot image'},{word:'turtle',translation:'черепаха',image:'./assets/images/cards-images/pets/a-turtle.png',audioSrc:'assets/audio/pets/turtle.mp3',alt:'turtle image'},{word:'kitten',translation:'котёнок',image:'./assets/images/cards-images/pets/h-kitten.png',audioSrc:'assets/audio/pets/kitten.mp3',alt:'kitten image'},{word:'puppy',translation:'щенок',image:'./assets/images/cards-images/pets/h-puppy.png',audioSrc:'assets/audio/pets/puppy.mp3',alt:'puppy image'},{word:'ferret',translation:'хорек',image:'./assets/images/cards-images/pets/v-ferret.png',audioSrc:'assets/audio/pets/ferret.mp3',alt:'ferret image'},{word:'fish',translation:'рыба',image:'./assets/images/cards-images/pets/v-fish.png',audioSrc:'assets/audio/pets/fish.mp3',alt:'fish image'},{word:'mouse',translation:'мышь',image:'./assets/images/cards-images/pets/v-mouse.png',audioSrc:'assets/audio/pets/mouse.mp3',alt:'mouse image'}]},{section:'school',startImage:'./assets/images/cards-images/school/v-pupil.png',linkPath:'#school',sectionTitle:'School',sectionWords:[{word:'board',translation:'доска',image:'./assets/images/cards-images/school/v-board.png',audioSrc:'assets/audio/school/board.mp3',alt:'board image'},{word:'book',translation:'книга',image:'./assets/images/cards-images/school/v-book.png',audioSrc:'assets/audio/school/book.mp3',alt:'book image'},{word:'calculator',translation:'черепаха',image:'./assets/images/cards-images/school/v-calculator.png',audioSrc:'assets/audio/school/calculator.mp3',alt:'calculator image'},{word:'classroom',translation:'школьный класс',image:'./assets/images/cards-images/school/v-classroom.png',audioSrc:'assets/audio/school/classroom.mp3',alt:'classroom image'},{word:'map',translation:'карта',image:'./assets/images/cards-images/school/v-map.png',audioSrc:'assets/audio/school/map.mp3',alt:'map image'},{word:'notebook',translation:'тетрадь',image:'./assets/images/cards-images/school/v-notebook.png',audioSrc:'assets/audio/school/notebook.mp3',alt:'notebook image'},{word:'schoolbag',translation:'портфель',image:'./assets/images/cards-images/school/v-schoolbag.png',audioSrc:'assets/audio/school/schoolbag.mp3',alt:'schoolbag image'},{word:'teacher',translation:'учитель',image:'./assets/images/cards-images/school/v-teacher.png',audioSrc:'assets/audio/school/teacher.mp3',alt:'teacher image'}]},{section:'sport',startImage:'./assets/images/cards-images/sport/v-tennis.png',linkPath:'#sport',sectionTitle:'Sport',sectionWords:[{word:'basketball',translation:'баскетбол',image:'./assets/images/cards-images/sport/v-basketball.png',audioSrc:'assets/audio/sport/basketball.mp3',alt:'basketball image'},{word:'cycling',translation:'езда на велосипеде',image:'./assets/images/cards-images/sport/v-cycling.png',audioSrc:'assets/audio/sport/cycling.mp3',alt:'cycling image'},{word:'figure skating',translation:'фигурное катание',image:'./assets/images/cards-images/sport/v-figure-skating.png',audioSrc:'assets/audio/sport/figure-skating.mp3',alt:'figure skating image'},{word:'football',translation:'футбол',image:'./assets/images/cards-images/sport/v-football.png',audioSrc:'assets/audio/sport/football.mp3',alt:'football image'},{word:'hockey',translation:'хоккей',image:'./assets/images/cards-images/sport/v-hockey.png',audioSrc:'assets/audio/sport/hockey.mp3',alt:'hockey image'},{word:'skiing',translation:'лыжный спорт',image:'./assets/images/cards-images/sport/v-skiing.png',audioSrc:'assets/audio/sport/skiing.mp3',alt:'skiing image'},{word:'swimming',translation:'плавание',image:'./assets/images/cards-images/sport/v-swimming.png',audioSrc:'assets/audio/sport/swimming.mp3',alt:'swimming image'},{word:'boxing',translation:'бокс',image:'./assets/images/cards-images/sport/v-boxing.png',audioSrc:'assets/audio/sport/boxing.mp3',alt:'boxing image'}]}]);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ }),

/***/ "./src/assets/images/header-menu-icons/clothes.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/clothes.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2e2628a19ceae81a4719.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/colours.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/colours.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2496b0050196e9d198f0.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/family.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/family.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f8de43418ecf0f89d4ea.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/food.png":
/*!******************************************************!*\
  !*** ./src/assets/images/header-menu-icons/food.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cfa1eae099cbfc59742a.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/fruits.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/fruits.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aa9c14ad189249e76c3a.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/home.png":
/*!******************************************************!*\
  !*** ./src/assets/images/header-menu-icons/home.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c9b2cf52aed67772d7eb.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/pets.png":
/*!******************************************************!*\
  !*** ./src/assets/images/header-menu-icons/pets.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05926d4c49803452c57b.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/school.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/school.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b530b5c31eb5c6510564.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/sports.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/sports.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9264f4bfe95e00e7f113.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ "./src/js/components/main.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/events */ "./src/js/utils/events.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/variables */ "./src/js/utils/variables.js");






// import createCardItem from './components/cardItem';

var appWrapper = document.querySelector('.wrapper');
appWrapper.append((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
appWrapper.append((0,_components_main__WEBPACK_IMPORTED_MODULE_2__["default"])());
document.addEventListener('DOMContentLoaded', function () {
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__.setGlobalValues)();
  console.log((0,_utils_variables__WEBPACK_IMPORTED_MODULE_5__.GET_VAR)('categoryName'));
  console.log((0,_utils_variables__WEBPACK_IMPORTED_MODULE_5__.GET_VAR)('cardsList'));
  // console.log(createCardItem());
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__.createCardsSet)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9qcy9jb21wb25lbnRzL2NhcmRJdGVtLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ28uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnUuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnVCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnVJdGVtLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy90b2dnbGVCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy9jcmVhdGVTdGFydFBnYWdlQ2FyZHNMaXN0LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvZXZlbnRzLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvaGVscGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvYXNzZXRzL2RhdGEvZGF0YS5qc29uIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvc2Nzcy9tYWluLnNjc3M/MGU1MCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVDYXJkSXRlbSA9IChpbWdQYXRoLCBpbWdBbHQsIGNhcmRUaXRsZSwgY2FyZFRyYW5zbGF0aW9uID0gJycpID0+IHtcbiAgLy8gY3JlYXRlIGNhcmQgaXRlbVxuICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1saXN0X19pdGVtJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgaW5uZXJcbiAgY29uc3QgY2FyZElubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRJbm5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWlubmVyJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgc2lkZVxuICBjb25zdCBjYXJkRnJvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEZyb250LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnQnKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCBpbWFnZSBjb250YWluZXJcbiAgY29uc3QgY2FyZEZyb250SW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19waWMnKTtcbiAgY2FyZEZyb250SW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcGljJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgaW1hZ2VcbiAgY29uc3QgY2FyZEZyb250SW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNhcmRGcm9udEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19waWMtaW1nJyk7XG4gIGNhcmRGcm9udEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICBjYXJkRnJvbnRJbWcuc3JjID0gaW1nUGF0aDsgLy8gZGF0YS5pbWdcbiAgY2FyZEZyb250SW1nLmFsdCA9IGltZ0FsdDsgLy8gZGF0YS5hbHRcblxuICBjYXJkRnJvbnRJbWdDb250YWluZXIuYXBwZW5kKGNhcmRGcm9udEltZyk7XG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250SW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCB0aXRsZVxuICBjb25zdCBjYXJkRnJvbnRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNhcmRGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnRfX3RpdGxlJyk7XG4gIGNhcmRGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgY2FyZEZyb250VGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVGl0bGU7IC8vIGRhdGEudGl0bGVGcm9udFxuXG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250VGl0bGUpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHJvdGF0ZSBidXR0b25cbiAgY29uc3QgY2FyZEZyb250Um90YXRlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhcmRGcm9udFJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19yb3RhdGUnKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idG4nKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcblxuICBjYXJkRnJvbnQuYXBwZW5kKGNhcmRGcm9udFJvdGF0ZUJ0bik7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayBzaWRlXG4gIGNvbnN0IGNhcmRCYWNrID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCYWNrLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFjaycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgaW1hZ2UgY29udGFpbmVyXG4gIGNvbnN0IGNhcmRCYWNrSW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCYWNrSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFja19fcGljJyk7XG4gIGNhcmRCYWNrSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcGljJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayBpbWFnZVxuICBjb25zdCBjYXJkQmFja0ltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjYXJkQmFja0ltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2tfX3BpYy1pbWcnKTtcbiAgY2FyZEJhY2tJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgY2FyZEJhY2tJbWcuc3JjID0gaW1nUGF0aDsgLy8gZGF0YS5pbWdcbiAgY2FyZEJhY2tJbWcuYWx0ID0gaW1nQWx0OyAvLyBkYXRhLmFsdFxuXG4gIGNhcmRCYWNrSW1nQ29udGFpbmVyLmFwcGVuZChjYXJkQmFja0ltZyk7XG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrSW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIHRpdGxlXG4gIGNvbnN0IGNhcmRCYWNrVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICBjYXJkQmFja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFja19fdGl0bGUnKTtcbiAgY2FyZEJhY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gIGNhcmRCYWNrVGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVHJhbnNsYXRpb247IC8vIGRhdGEudGl0bGVCYWNrXG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrVGl0bGUpO1xuXG4gIGNhcmRJbm5lci5hcHBlbmQoY2FyZEZyb250KTtcbiAgY2FyZElubmVyLmFwcGVuZChjYXJkQmFjayk7XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRJbm5lcik7XG5cbiAgcmV0dXJuIGNhcmRJdGVtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZEl0ZW07XG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgY3JlYXRlTmF2TWVudSBmcm9tICcuL25hdk1lbnUnO1xuaW1wb3J0IGNyZWF0ZUxvZ28gZnJvbSAnLi9sb2dvJztcbmltcG9ydCBjcmVhdGVUb2dnbGUgZnJvbSAnLi90b2dnbGVCdG4nO1xuaW1wb3J0IGNyZWF0ZU5hdk1lbnVCdG4gZnJvbSAnLi9uYXZNZW51QnRuJztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBsb2dvXG4gIGNvbnN0IGhlYWRlckxvZ28gPSBjcmVhdGVMb2dvKCdFbmdsaXNoIGZvciBraWRzJywgJyNob21lJyk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBidXR0b25zIGNvbnRhaW5lclxuICBjb25zdCBoZWFkZXJCdG5zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIHRvZ2dsZVxuICBjb25zdCB0b2dnbGVCdG4gPSBjcmVhdGVUb2dnbGUoKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIHN0YXRpc3RpY3MgYnV0dG9uXG4gIGNvbnN0IHN0YXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHN0YXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1idXR0b24nKTtcbiAgc3RhdEJ0bi50ZXh0Q29udGVudCA9ICdTdGF0aXN0aWNzJztcblxuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVCdG4pO1xuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZChzdGF0QnRuKTtcblxuICAvLyBjcmVhdGUgbmF2XG4gIGNvbnN0IGhlYWRlck5hdiA9IGNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hdicpO1xuXG4gIC8vIGNyZWF0ZSBuYXYgbWVudSBidXR0b25cbiAgY29uc3QgbmF2TWVudUJ0biA9IGNyZWF0ZU5hdk1lbnVCdG4oKTtcblxuICAvLyBjcmVhdGUgbmF2IG1lbnVcbiAgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSBjcmVhdGVOYXZNZW51KGRhdGEpO1xuXG4gIGhlYWRlck5hdi5hcHBlbmQobmF2TWVudUJ0bik7XG4gIGhlYWRlck5hdi5hcHBlbmQobmF2aWdhdGlvbk1lbnUpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJOYXYpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckxvZ28pO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckJ0bnNDb250YWluZXIpO1xuICBoZWFkZXJFbGVtZW50LmFwcGVuZChoZWFkZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBoZWFkZXJFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZUxvZ28gPSAobG9nb1RleHQsIGxvZ29IcmVmKSA9PiB7XG4gIC8vIGNyZWF0ZSBsb2dvXG4gIGNvbnN0IGhlYWRlckxvZ28gPSBjcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG5cbiAgY29uc3QgaGVhZGVyTG9nb0xpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIGhlYWRlckxvZ29MaW5rLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvX19saW5rJyk7XG4gIGhlYWRlckxvZ29MaW5rLnRleHRDb250ZW50ID0gbG9nb1RleHQ7XG4gIGhlYWRlckxvZ29MaW5rLmhyZWYgPSBsb2dvSHJlZjtcblxuICBoZWFkZXJMb2dvLmFwcGVuZChoZWFkZXJMb2dvTGluayk7XG5cbiAgcmV0dXJuIGhlYWRlckxvZ287XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMb2dvO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBtYWluIGVsZW1lbnRcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAvLyBjcmVhdGUgbWFpbiBjb250YWluZXJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIC8vIGNyZWF0ZSBzY29yZSBsaW5lXG4gIGNvbnN0IHNjb3JlTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY29yZUxpbmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUtbGluZScpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKHNjb3JlTGluZSk7XG5cbiAgLy8gY3JlYXRlIGNhdGVnb3J5IG5hbWVcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY2F0ZWdvcnlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LW5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gIC8vIGNhcmRzIGxpc3RcbiAgY29uc3QgY2FyZExpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjYXJkTGlzdC5jbGFzc0xpc3QuYWRkKCdjYXJkcy1saXN0Jyk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnlOYW1lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2FyZExpc3QpO1xuXG4gIG1haW5FbGVtZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbkVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgY3JlYXRlTmF2TWVudUl0ZW0gZnJvbSAnLi9uYXZNZW51SXRlbSc7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnUgPSAoZGF0YSkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IHVsXG4gIGNvbnN0IG5hdk1lbnVVbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdk1lbnVVbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5hdk1lbnVVbC5hcHBlbmQoY3JlYXRlTmF2TWVudUl0ZW0oZGF0YVtpXS5zZWN0aW9uKSk7XG4gIH1cblxuICByZXR1cm4gbmF2TWVudVVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2TWVudTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51QnRuID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IGJ1dHRvblxuICBjb25zdCBuYXZNZW51QnRuID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBuYXZNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1oYW1idXJnZXInKTtcbiAgbmF2TWVudUJ0bi5ocmVmID0gJyMnO1xuXG4gIGNvbnN0IHNwYW4xID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzcGFuMiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3Qgc3BhbjMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjEpO1xuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMik7XG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4zKTtcblxuICByZXR1cm4gbmF2TWVudUJ0bjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdk1lbnVCdG47XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjYXBpdGFsaXplRmlyc3RXb3JkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlTmF2TWVudUl0ZW0gPSAobGlua05hbWUpID0+IHtcbiAgLy8gY3JlYXRlIGxpXG4gIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0nKTtcblxuICAvLyBjcmVhdGUgbWVudSBsaW5rXG4gIGNvbnN0IGxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpO1xuICBsaW5rLmhyZWYgPSBgIyR7bGlua05hbWV9YDtcbiAgbGluay5kYXRhc2V0LnNlY3Rpb24gPSBjYXBpdGFsaXplRmlyc3RXb3JkKGxpbmtOYW1lKTtcbiAgbGluay50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuXG4gIGxpLmFwcGVuZChsaW5rKTtcblxuICByZXR1cm4gbGk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZNZW51SXRlbTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVUb2dnbGUgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9IGZhbHNlO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZS0xXG4gIGNvbnN0IHRvZ2dsZU1vZGUxID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2dnbGVNb2RlMS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGUxLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3RyYWluJyk7XG4gIHRvZ2dsZU1vZGUxLnRleHRDb250ZW50ID0gJ1RyYWluJztcblxuICAvLyBjcmVhdGUgdG9nZ2xlIG1vZGUtMlxuICBjb25zdCB0b2dnbGVNb2RlMiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9nZ2xlTW9kZTIuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbl9fbW9kZScpO1xuICB0b2dnbGVNb2RlMi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19wbGF5Jyk7XG4gIHRvZ2dsZU1vZGUyLnRleHRDb250ZW50ID0gJ1BsYXknO1xuXG4gIHRvZ2dsZUJ0bi5hcHBlbmQodG9nZ2xlTW9kZTEpO1xuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGUyKTtcblxuICByZXR1cm4gdG9nZ2xlQnRuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9nZ2xlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IGNyZWF0ZUNhcmRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZEl0ZW0nO1xuXG5jb25zdCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuXG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWN0aW9uICE9PSAnaG9tZScpIHtcbiAgICAgIGNvbnN0IGltZ1BhdGggPSBlbGVtZW50LnN0YXJ0SW1hZ2U7XG4gICAgICBjb25zdCBpbWdBbHQgPSBlbGVtZW50LnNlY3Rpb25Xb3Jkc1swXS5hbHQ7XG4gICAgICBjb25zdCBjYXJkVGl0bGUgPSBlbGVtZW50LnNlY3Rpb25UaXRsZTtcbiAgICAgIC8vIGltZ1BhdGgsIGltZ0FsdCwgY2FyZFRpdGxlLCBjYXJkVHJhbnNsYXRpb25cbiAgICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oaW1nUGF0aCwgaW1nQWx0LCBjYXJkVGl0bGUpO1xuICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkSXRlbSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQ7XG4iLCIvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy8gICBTRVRfVkFSKCdjYXRlZ29yeU5hbWUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktbmFtZScpKTtcbi8vICAgLy8gICBjYXRlZ29yeU5hbWUgPSAnbmV3IHZhbHVlJztcbi8vICAgY29uc29sZS5sb2coJ2NhdGVnb3J5TmFtZTInLCBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKSk7XG4vLyB9KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgU0VUX1ZBUiwgR0VUX1ZBUiB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IGZyb20gJy4vY3JlYXRlU3RhcnRQZ2FnZUNhcmRzTGlzdCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuXG4vLyBjcmVhdGUgZWxlbWVudFxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNhcGl0YWxpemVGaXJzdFdvcmQgPSAod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG5cbmNvbnN0IHNldEdsb2JhbFZhbHVlcyA9ICgpID0+IHtcbiAgU0VUX1ZBUignY2F0ZWdvcnlOYW1lJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LW5hbWUnKSk7XG4gIFNFVF9WQVIoJ2NhcmRzTGlzdCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1saXN0JykpO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZHNTZXQgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gR0VUX1ZBUignY2F0ZWdvcnlOYW1lJykudGV4dENvbnRlbnQ7XG4gIGNvbnNvbGUubG9nKCdjYXRlZ29yeScsIGNhdGVnb3J5KTtcbiAgaWYgKGNhdGVnb3J5ID09PSAnSG9tZScpIHtcbiAgICAvLyBnZW5lcmF0ZSBzdGFydCBwYWdlXG4gICAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBnZW5lcmF0ZSBjdXJyZW50IGNhdGVnb3J5IHBhZ2VcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgc2V0R2xvYmFsVmFsdWVzLCBjcmVhdGVDYXJkc1NldCwgY2FwaXRhbGl6ZUZpcnN0V29yZCxcbn07XG4iLCJjb25zdCBWQVJJQUJMRVMgPSB7XG4gIGNhdGVnb3J5TmFtZTogJ2luaXRpYWwgdmFsdWUnLFxuICBjYXJkc0xpc3Q6ICdpbml0aWFsIHZhbHVlJyxcbn07XG5cbmNvbnN0IFNFVF9WQVIgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChWQVJJQUJMRVMsIG5hbWUpKSB7XG4gICAgVkFSSUFCTEVTW25hbWVdID0gdmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IEdFVF9WQVIgPSAobmFtZSkgPT4ge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFZBUklBQkxFUywgbmFtZSkpIHtcbiAgICByZXR1cm4gVkFSSUFCTEVTW25hbWVdO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2hvbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9jbG90aGVzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvZm9vZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2NvbG91cnMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9mcnVpdHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9wZXRzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvc2Nob29sLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvc3BvcnRzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvZmFtaWx5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL2h0bWx7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7bGluZS1oZWlnaHQ6MS4xNX1ib2R5e21hcmdpbjowfW1haW57ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1wcmV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTstd2Via2l0LXRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGRlcn1jb2RlLGtiZCxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1Yntib3R0b206LS4yNWVtfXN1cHt0b3A6LS41ZW19aW1ne2JvcmRlci1zdHlsZTpub25lfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTAwJTtsaW5lLWhlaWdodDoxLjE1O21hcmdpbjowfWJ1dHRvbixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6MH1bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZ3tvdXRsaW5lOjFweCBkb3R0ZWQgQnV0dG9uVGV4dH1maWVsZHNldHtwYWRkaW5nOi4zNWVtIC43NWVtIC42MjVlbX1sZWdlbmR7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTp0YWJsZTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm9ybWFsfXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXRleHRhcmVhe292ZXJmbG93OmF1dG99W3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXR9ZGV0YWlsc3tkaXNwbGF5OmJsb2NrfXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19W2hpZGRlbl0sdGVtcGxhdGV7ZGlzcGxheTpub25lfTpyb290e2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LXNpemU6MTAwJTtzY3JvbGwtYmVoYXZpb3I6c21vb3RofSosOmFmdGVyLDpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0O21hcmdpbjowO3BhZGRpbmc6MH1hLGE6aG92ZXIsYTp2aXNpdGVke3RleHQtZGVjb3JhdGlvbjpub25lfXVse2xpc3Qtc3R5bGUtdHlwZTpub25lfWgxLGgyLGgzLGg0LGg1LGg2LHVse21hcmdpbjowO3BhZGRpbmc6MH1ib2R5e2JhY2tncm91bmQtY29sb3I6IzIzYTdkNztmb250LWZhbWlseTpDb21pYyBOZXVlLGN1cnNpdmV9LmNvbnRhaW5lcnttYXJnaW46MCBhdXRvO21heC13aWR0aDo3NXJlbX0uaGVhZGVyLWhhbWJ1cmdlcntsZWZ0OjEuNWVtO3Bvc2l0aW9uOmZpeGVkO3RvcDoxLjZlbTt6LWluZGV4OjMwfS5oZWFkZXItaGFtYnVyZ2VyPnNwYW57YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6LjZlbTtkaXNwbGF5OmJsb2NrO2hlaWdodDouMjEyNWVtO3RyYW5zZm9ybS1vcmlnaW46M3B4IDFweDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7d2lkdGg6Mi4xMTI1ZW19LmhlYWRlci1oYW1idXJnZXI+c3Bhbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206LjQxMjVlbX0uaGVhZGVyLWhhbWJ1cmdlcjpob3Zlcj5zcGFuOmZpcnN0LWNoaWxke3RyYW5zZm9ybTp0cmFuc2xhdGVYKC4xODc1cmVtKX0uaGVhZGVyLWhhbWJ1cmdlcjpob3Zlcj5zcGFuOm50aC1jaGlsZCgyKXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjE4NzVyZW0pfS5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyPnNwYW46bGFzdC1jaGlsZHt0cmFuc2Zvcm06dHJhbnNsYXRlWCguMTg3NXJlbSl9LmhlYWRlci1tZW51e2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQwZGVnLCNmZmQ5NzAsI2ZjNjQ2NCk7Ym94LXNoYWRvdzouMTg3NWVtIDAgLjYyNWVtIHJnYmEoMCwwLDAsLjUpLGluc2V0IC4xODc1ZW0gMCAxLjI1ZW0gcmdiYSgwLDAsMCwuNSk7bGVmdDowO2xlZnQ6LTIwLjYyNXJlbTttaW4taGVpZ2h0OjEwMHZoO21pbi13aWR0aDoyMHJlbTtwYWRkaW5nLWxlZnQ6Mi44MTI1ZW07cGFkZGluZy10b3A6NmVtO3Bvc2l0aW9uOmZpeGVkO3RvcDowO3RyYW5zaXRpb246YWxsIC40cyBlYXNlLWluLW91dDt6LWluZGV4OjEwfS5oZWFkZXItbWVudV9faXRlbTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS43NWVtfS5oZWFkZXItbWVudV9faXRlbS1saW5rey13ZWJraXQtdGV4dC1zdHJva2U6MXB4IGhzbGEoMCwwJSwxMDAlLC44KTtjb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6MS40ZW07bGV0dGVyLXNwYWNpbmc6MnB4O2xpbmUtaGVpZ2h0Oi42ZW07cGFkZGluZy1sZWZ0OjJlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LmhlYWRlci1tZW51X19pdGVtLWxpbmsuYWN0aXZlOmJlZm9yZSwuaGVhZGVyLW1lbnVfX2l0ZW0tbGluazpob3ZlcjpiZWZvcmV7LXdlYmtpdC10ZXh0LXN0cm9rZToxcHggI2ZmZjtmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDI1cHggaHNsKDAsMCUsMTAwJSkpO3dpZHRoOjEwMCV9LmhlYWRlci1tZW51X19pdGVtLWxpbms6YmVmb3Jley13ZWJraXQtdGV4dC1zdHJva2U6MXB4ICNmZmY7Y29sb3I6I2ZmZjtjb250ZW50OmF0dHIoZGF0YS1zZWN0aW9uKTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7dHJhbnNpdGlvbjp3aWR0aCAuM3MgZWFzZS1pbi1vdXQ7d2lkdGg6MH0uaGVhZGVyLW1lbnVfX2l0ZW0tbGluazphZnRlcntiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3Zlcn0uaGVhZGVyLW1lbnVfX2l0ZW0tbGluazphZnRlciwuaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249Q2xvdGhlc106YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxLjU2MjVyZW07bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6MS41NjI1cmVtfS5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1DbG90aGVzXTphZnRlcntiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3Zlcn0uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249Rm9vZF06YWZ0ZXJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUNvbG91cnNdOmFmdGVyLC5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1Gb29kXTphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEuNTYyNXJlbTtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDoxLjU2MjVyZW19LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUNvbG91cnNdOmFmdGVye2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1GcnVpdHNdOmFmdGVye2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1GcnVpdHNdOmFmdGVyLC5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1QZXRzXTphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEuNTYyNXJlbTtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDoxLjU2MjVyZW19LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVBldHNdOmFmdGVye2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1TY2hvb2xdOmFmdGVye2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1TY2hvb2xdOmFmdGVyLC5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1TcG9ydF06YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxLjU2MjVyZW07bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6MS41NjI1cmVtfS5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1TcG9ydF06YWZ0ZXJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUZhbWlseV06YWZ0ZXJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxLjU2MjVyZW07bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6MS41NjI1cmVtfS50b2dnbGUtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6aHNsYSgyNDgsMSUsNTYlLC41Nik7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouNWVtO2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O292ZXJmbG93OmhpZGRlbn0udG9nZ2xlLWJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0gLnRvZ2dsZS1idXR0b25fX3RyYWlue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnRvZ2dsZS1idXR0b25bYXJpYS1wcmVzc2VkPXRydWVdIC50b2dnbGUtYnV0dG9uX19wbGF5e2JhY2tncm91bmQtY29sb3I6IzIzZDdhZH0udG9nZ2xlLWJ1dHRvbl9fbW9kZXtmbGV4LWJhc2lzOjUwJTtmb250LXdlaWdodDo3MDA7cGFkZGluZzouNWVtO3RyYW5zaXRpb246YmFja2dyb3VuZCAuM3MgZWFzZS1pbi1vdXR9QG1lZGlhIChtaW4td2lkdGg6MjguMTI1cmVtKXsudG9nZ2xlLWJ1dHRvbl9fbW9kZXtmb250LXNpemU6LjllbTttYXJnaW4tdG9wOjB9fUBtZWRpYSAobWluLXdpZHRoOjQ4cmVtKXsudG9nZ2xlLWJ1dHRvbl9fbW9kZXtmb250LXNpemU6MS4yZW19fUBtZWRpYSAobWluLXdpZHRoOjYyLjVyZW0pey50b2dnbGUtYnV0dG9uX19tb2Rle2ZvbnQtc2l6ZToxLjVlbX19LnRvZ2dsZS1idXR0b25fX3RyYWlue2JhY2tncm91bmQtY29sb3I6IzIzZDdhZH0uc3RhdGlzdGljcy1idXR0b257YmFja2dyb3VuZC1jb2xvcjojMjJkN2Y3O2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjhlbTtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouMWVtO3BhZGRpbmc6LjVlbSAuN2VtO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXR9LnN0YXRpc3RpY3MtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzUzZTBmOX1AbWVkaWEgKG1pbi13aWR0aDoyOC4xMjVyZW0pey5zdGF0aXN0aWNzLWJ1dHRvbntmb250LXNpemU6LjllbTttYXJnaW4tdG9wOjB9fUBtZWRpYSAobWluLXdpZHRoOjQ4cmVtKXsuc3RhdGlzdGljcy1idXR0b257Zm9udC1zaXplOjEuMmVtfX1AbWVkaWEgKG1pbi13aWR0aDo2Mi41cmVtKXsuc3RhdGlzdGljcy1idXR0b257Zm9udC1zaXplOjEuNWVtfX0uaGVhZGVye3BhZGRpbmc6MS41ZW0gMWVtfS5oZWFkZXIgLmNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5oZWFkZXItYnV0dG9uc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZvbnQtc2l6ZTouOWVtO2dhcDouNWVtfS5oZWFkZXItbG9nb19fbGlua3tjb2xvcjojZmZmO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZTouN2VtO21hcmdpbi10b3A6MWVtO3RleHQtc2hhZG93OjJweCAycHggNXB4ICNmZmY7dHJhbnNpdGlvbjpjb2xvciAuM3MgZWFzZS1pbi1vdXR9LmhlYWRlci1sb2dvX19saW5rOmhvdmVye2NvbG9yOmhzbGEoMCwwJSwxMDAlLC42KX1AbWVkaWEgKG1pbi13aWR0aDoyOC4xMjVyZW0pey5oZWFkZXItbG9nb19fbGlua3tmb250LXNpemU6LjllbTttYXJnaW4tdG9wOjB9fUBtZWRpYSAobWluLXdpZHRoOjQ4cmVtKXsuaGVhZGVyLWxvZ29fX2xpbmt7Zm9udC1zaXplOjEuMmVtfX1AbWVkaWEgKG1pbi13aWR0aDo2Mi41cmVtKXsuaGVhZGVyLWxvZ29fX2xpbmt7Zm9udC1zaXplOjEuNWVtfX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2dsb2JhbHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fbmF2TWVudUJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL25hdk1lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYWJzdHJhY3RzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fdG9nZ2xlQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3N0YXRpc3RpY3NCdG4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBQSxDQUVBLEtBRUUsNkJBQUEsQ0FEQSxnQkNDRixDRFVBLEtBQ0UsUUNGRixDRFNBLEtBQ0UsYUNIRixDRFdBLEdBQ0UsYUFBQSxDQUNBLGNDSkYsQ0RlQSxHQUNFLHNCQUFBLENBQ0EsUUFBQSxDQUNBLGdCQ05GLENEY0EsSUFDRSwrQkFBQSxDQUNBLGFDUEYsQ0RpQkEsRUFDRSw0QkNURixDRGlCQSxZQUNFLGtCQUFBLENBQ0EseUJBQUEsQ0FDQSx3Q0FBQSxDQUFBLGdDQ1ZGLENEaUJBLFNBRUUsa0JDWEYsQ0RtQkEsY0FHRSwrQkFBQSxDQUNBLGFDWkYsQ0RtQkEsTUFDRSxhQ2JGLENEcUJBLFFBRUUsYUFBQSxDQUNBLGFBQUEsQ0FDQSxpQkFBQSxDQUNBLHVCQ2RGLENEaUJBLElBQ0UsYUNkRixDRGlCQSxJQUNFLFNDZEYsQ0R3QkEsSUFDRSxpQkNoQkYsQ0QyQkEsc0NBS0UsbUJBQUEsQ0FDQSxjQUFBLENBQ0EsZ0JBQUEsQ0FDQSxRQ2xCRixDRDBCQSxhQUdFLGdCQ25CRixDRDJCQSxjQUdFLG1CQ3BCRixDRDJCQSxnREFJRSx5QkNyQkYsQ0Q0QkEsd0hBSUUsaUJBQUEsQ0FDQSxTQ3RCRixDRDZCQSw0R0FJRSw2QkN2QkYsQ0Q4QkEsU0FDRSwwQkN4QkYsQ0RrQ0EsT0FDRSxxQkFBQSxDQUNBLGFBQUEsQ0FDQSxhQUFBLENBQ0EsY0FBQSxDQUNBLFNBQUEsQ0FDQSxrQkN6QkYsQ0RnQ0EsU0FDRSx1QkMxQkYsQ0RpQ0EsU0FDRSxhQzNCRixDRG1DQSw2QkFFRSxxQkFBQSxDQUNBLFNDNUJGLENEbUNBLGtGQUVFLFdDN0JGLENEcUNBLGNBQ0UsNEJBQUEsQ0FDQSxtQkM5QkYsQ0RxQ0EseUNBQ0UsdUJDL0JGLENEdUNBLDZCQUNFLHlCQUFBLENBQ0EsWUNo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QUFBLENBRkEsVUFBQSxDQUlBLGNBQUEsQ0FDQSxZQUFBLENBRkEsZU4yaUJGLENNdGlCSSx3REFDRSw0Qk53aUJOLENNcmlCSSx1REFDRSx3Qk51aUJOLENNbmlCRSxxQkFDRSxjQUFBLENBRUEsZUFBQSxDQURBLFlBQUEsQ0FFQSxxQ05xaUJKLENNbmlCSSw2QkFORixxQkFPSSxjQUFBLENBQ0EsWU5zaUJKLENBQ0YsQ01waUJJLHlCQVhGLHFCQVlJLGVOdWlCSixDQUNGLENNcmlCSSwyQkFmRixxQkFnQkksZU53aUJKLENBQ0YsQ01yaUJFLHNCQUNFLHdCTnVpQkosQ08va0JBLG1CQUlFLHdCTEllLENLSGYsUUFBQSxDQUNBLGtCQUFBLENBSEEsVUxEVyxDS01YLGNBQUEsQ0FQQSxlQUFBLENBQ0EsbUJBQUEsQ0FLQSxpQkFBQSxDQUVBLHFDUGtsQkYsQ09obEJFLHlCQUNFLHdCUGtsQkosQ08va0JFLDZCQWZGLG1CQWdCSSxjQUFBLENBQ0EsWVBrbEJGLENBQ0YsQ09obEJFLHlCQXBCRixtQkFxQkksZVBtbEJGLENBQ0YsQ09qbEJFLDJCQXhCRixtQkF5QkksZVBvbEJGLENBQ0YsQ1F6bUJBLFFBQ0UsaUJSNG1CRixDUTFtQkUsbUJBR0Usa0JBQUEsQ0FGQSxZQUFBLENBQ0EsNkJSNm1CSixDUXptQkUsZ0JBQ0UsWUFBQSxDQUNBLHFCQUFBLENBRUEsY0FBQSxDQURBLFFSNG1CSixDUXhtQkUsbUJBQ0UsVU5wQlMsQ01zQlQsb0JBQUEsQ0FEQSxjQUFBLENBRUEsY0FBQSxDQUNBLDRCQUFBLENBQ0EsZ0NSMG1CSixDUXhtQkkseUJBQ0Usd0JSMG1CTixDUXZtQkksNkJBWkYsbUJBYUksY0FBQSxDQUNBLFlSMG1CSixDQUNGLENReG1CSSx5QkFqQkYsbUJBa0JJLGVSMm1CSixDQUNGLENRem1CSSwyQkFyQkYsbUJBc0JJLGVSNG1CSixDQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxyXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAqIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgLyogMSAqL1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPSdidXR0b24nXSxcXHJcXG5bdHlwZT0ncmVzZXQnXSxcXHJcXG5bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXHJcXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1idXR0b25dLFxcblt0eXBlPXJlc2V0XSxcXG5bdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9Y2hlY2tib3hdLFxcblt0eXBlPXJhZGlvXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTYsIDcyJSwgNDklKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29taWMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA3NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAzMDtcXG4gIGxlZnQ6IDEuNWVtO1xcbiAgdG9wOiAxLjZlbTtcXG59XFxuLmhlYWRlci1oYW1idXJnZXIgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIuMTEyNWVtO1xcbiAgaGVpZ2h0OiAwLjIxMjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDNweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmhlYWRlci1oYW1idXJnZXIgPiBzcGFuOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40MTI1ZW07XFxufVxcbi5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4xODc1cmVtKTtcXG59XFxuLmhlYWRlci1oYW1idXJnZXI6aG92ZXIgPiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTg3NXJlbSk7XFxufVxcbi5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjE4NzVyZW0pO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGxlZnQ6IC0yMC42MjVyZW07XFxuICB6LWluZGV4OiAxMDtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiA2ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIuODEyNWVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCBoc2woNDQsIDEwMCUsIDcyJSksIGhzbCgwLCA5NiUsIDY5JSkpO1xcbiAgYm94LXNoYWRvdzogMC4xODc1ZW0gMCAwLjYyNWVtIGhzbGEoMCwgMCUsIDAlLCAwLjUpLCBpbnNldCAwLjE4NzVlbSAwIDEuMjVlbSBoc2xhKDAsIDAlLCAwJSwgMC41KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjc1ZW07XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rIHtcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxuICBsaW5lLWhlaWdodDogMC42ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGhzbGEoMCwgMCUsIDEwMCUsIDAuOCk7XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rLmFjdGl2ZTo6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyNXB4IGhzbCgwLCAwJSwgMTAwJSkpO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGluazpob3Zlcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyNXB4IGhzbCgwLCAwJSwgMTAwJSkpO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGluazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWN0aW9uKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgd2lkdGg6IDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbms6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvaG9tZS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUNsb3RoZXNdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2Nsb3RoZXMucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjU2MjVyZW07XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1Gb29kXTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9mb29kLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gIGhlaWdodDogMS41NjI1cmVtO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249Q29sb3Vyc106OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvY29sb3Vycy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUZydWl0c106OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvZnJ1aXRzLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gIGhlaWdodDogMS41NjI1cmVtO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249UGV0c106OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvcGV0cy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVNjaG9vbF06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvc2Nob29sLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gIGhlaWdodDogMS41NjI1cmVtO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249U3BvcnRdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL3Nwb3J0cy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUZhbWlseV06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvZmFtaWx5LnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gIGhlaWdodDogMS41NjI1cmVtO1xcbn1cXG5cXG4udG9nZ2xlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI0OCwgMSUsIDU2JSwgMC41Nik7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b2dnbGUtYnV0dG9uW2FyaWEtcHJlc3NlZD10cnVlXSAudG9nZ2xlLWJ1dHRvbl9fdHJhaW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi50b2dnbGUtYnV0dG9uW2FyaWEtcHJlc3NlZD10cnVlXSAudG9nZ2xlLWJ1dHRvbl9fcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTY2LCA3MiUsIDQ5JSk7XFxufVxcbi50b2dnbGUtYnV0dG9uX19tb2RlIHtcXG4gIGZsZXgtYmFzaXM6IDUwJTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDI4LjEyNXJlbSkge1xcbiAgLnRvZ2dsZS1idXR0b25fX21vZGUge1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gIC50b2dnbGUtYnV0dG9uX19tb2RlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYyLjVyZW0pIHtcXG4gIC50b2dnbGUtYnV0dG9uX19tb2RlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG59XFxuLnRvZ2dsZS1idXR0b25fX3RyYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNjYsIDcyJSwgNDklKTtcXG59XFxuXFxuLnN0YXRpc3RpY3MtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODksIDkzJSwgNTUlKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbiAgcGFkZGluZzogMC41ZW0gMC43ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zdGF0aXN0aWNzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg5LCA5MyUsIDY1JSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyOC4xMjVyZW0pIHtcXG4gIC5zdGF0aXN0aWNzLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xcbiAgLnN0YXRpc3RpY3MtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYyLjVyZW0pIHtcXG4gIC5zdGF0aXN0aWNzLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMS41ZW0gMWVtO1xcbn1cXG4uaGVhZGVyIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXItYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG4uaGVhZGVyLWxvZ29fX2xpbmsge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGhzbCgwLCAxMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmhlYWRlci1sb2dvX19saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjYpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjguMTI1cmVtKSB7XFxuICAuaGVhZGVyLWxvZ29fX2xpbmsge1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gIC5oZWFkZXItbG9nb19fbGluayB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2Mi41cmVtKSB7XFxuICAuaGVhZGVyLWxvZ29fX2xpbmsge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbn1cIixcIjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8vIExpbmtzXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8vIExpc3RzXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gSGVhZGxpbmVzXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gZm9udC1mYW1pbHk6ICdDaGFuZ28nLCBjdXJzaXZlO1xcclxcbi8vZm9udC1mYW1pbHk6ICdDb21pYyBOZXVlJywgY3Vyc2l2ZTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb21pYyBOZXVlJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gY29udGFpbmVyXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDc1cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblwiLFwiLy8gQ29sb3JzXFxyXFxuJGNvbG9yLXByaW1hcnk6IGhzbCgxOTYsIDcyJSwgNDklKTtcXHJcXG4kd2hpdGVDb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4kd2hpdGVDb2xvclNoYWRvdzogaHNsKDAsIDEwJSwgMTAwJSk7XFxyXFxuJHdoaXRlQ29sb3JIb3ZlcjogaHNsYSgwLCAwJSwgMTAwJSwgMC42KTtcXHJcXG5cXHJcXG4vLyAkdG9nZ2xlQmx1ZTogaHNsYSgyNDgsIDEwMCUsIDUwJSwgLjU2KTtcXHJcXG4kdHVycXVvaXNlQ29sb3I6IGhzbCgxNjYsIDcyJSwgNDklKTtcXHJcXG4kbGlnaHRCbHVlQ29sb3I6IGhzbCgxODksIDkzJSwgNTUlKTtcXHJcXG4kbGlnaHRCbHVlQ29sb3JIb3ZlcjogaHNsKDE4OSwgOTMlLCA2NSUpO1xcclxcbiRpbkFjdGl2ZUNvbG9yOiBoc2xhKDI0OCwgMSUsIDU2JSwgMC41Nik7XFxyXFxuXCIsXCIuaGVhZGVyLWhhbWJ1cmdlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAzMDtcXHJcXG4gIGxlZnQ6IDEuNWVtO1xcclxcbiAgdG9wOiAxLjZlbTtcXHJcXG4gID4gc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMi4xMTI1ZW07XFxyXFxuICAgIGhlaWdodDogMC4yMTI1ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVDb2xvcjtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogM3B4IDFweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC40MTI1ZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICA+IHNwYW46Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjE4NzVyZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gc3BhbjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4xODc1cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTg3NXJlbSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIuaGVhZGVyLW1lbnUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGxlZnQ6IC0yMC42MjVyZW07XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIG1pbi13aWR0aDogMjByZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmctdG9wOiA2ZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIuODEyNWVtO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCBoc2woNDQsIDEwMCUsIDcyJSksIGhzbCgwLCA5NiUsIDY5JSkpO1xcclxcbiAgYm94LXNoYWRvdzogMC4xODc1ZW0gMCAwLjYyNWVtIGhzbGEoMCwgMCUsIDAlLCAwLjUpLCBpbnNldCAwLjE4NzVlbSAwIDEuMjVlbSBoc2xhKDAsIDAlLCAwJSwgMC41KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgJl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS43NWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1saW5rIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDAuNmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBoc2xhKDAsIDAlLCAxMDAlLCAwLjgpO1xcclxcblxcclxcbiAgICAmLmFjdGl2ZTo6YmVmb3JlIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHdoaXRlQ29sb3I7XFxyXFxuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjVweCAkd2hpdGVDb2xvcik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICR3aGl0ZUNvbG9yO1xcclxcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjVweCAkd2hpdGVDb2xvcik7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogYXR0cihkYXRhLXNlY3Rpb24pO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBjb2xvcjogJHdoaXRlQ29sb3I7XFxyXFxuICAgICAgd2lkdGg6IDAlO1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHdoaXRlQ29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9ob21lLnBuZycpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZbZGF0YS1zZWN0aW9uPSdDbG90aGVzJ106OmFmdGVyIHtcXHJcXG4gICAgICBAaW5jbHVkZSBpbnNlcnQtaWNvbnMoJy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvY2xvdGhlcy5wbmcnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmW2RhdGEtc2VjdGlvbj0nRm9vZCddOjphZnRlciB7XFxyXFxuICAgICAgQGluY2x1ZGUgaW5zZXJ0LWljb25zKCcuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2Zvb2QucG5nJyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJltkYXRhLXNlY3Rpb249J0NvbG91cnMnXTo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9jb2xvdXJzLnBuZycpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZbZGF0YS1zZWN0aW9uPSdGcnVpdHMnXTo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9mcnVpdHMucG5nJyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJltkYXRhLXNlY3Rpb249J1BldHMnXTo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9wZXRzLnBuZycpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZbZGF0YS1zZWN0aW9uPSdTY2hvb2wnXTo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9zY2hvb2wucG5nJyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJltkYXRhLXNlY3Rpb249J1Nwb3J0J106OmFmdGVyIHtcXHJcXG4gICAgICBAaW5jbHVkZSBpbnNlcnQtaWNvbnMoJy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvc3BvcnRzLnBuZycpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZbZGF0YS1zZWN0aW9uPSdGYW1pbHknXTo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9mYW1pbHkucG5nJyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAbWl4aW4gaW5zZXJ0LWljb25zKCRwYXRoKSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCRwYXRoKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXHJcXG59XFxyXFxuXCIsXCIudG9nZ2xlLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5BY3RpdmVDb2xvcjtcXHJcXG4gIGNvbG9yOiAkd2hpdGVDb2xvcjtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAmW2FyaWEtcHJlc3NlZD0ndHJ1ZSddIHtcXHJcXG4gICAgLnRvZ2dsZS1idXR0b25fX3RyYWluIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9nZ2xlLWJ1dHRvbl9fcGxheSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHR1cnF1b2lzZUNvbG9yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19tb2RlIHtcXHJcXG4gICAgZmxleC1iYXNpczogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMjguMTI1cmVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYyLjVyZW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190cmFpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0dXJxdW9pc2VDb2xvcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIuc3RhdGlzdGljcy1idXR0b24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG4gIGNvbG9yOiAkd2hpdGVDb2xvcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodEJsdWVDb2xvcjtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMC43ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZUNvbG9ySG92ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMjguMTI1cmVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2Mi41cmVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vY29tcG9uZW50cy9uYXZNZW51QnRuJztcXHJcXG5AaW1wb3J0ICcuLi9jb21wb25lbnRzL25hdk1lbnUnO1xcclxcbkBpbXBvcnQgJy4uL2NvbXBvbmVudHMvdG9nZ2xlQnRuJztcXHJcXG5AaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3NCdG4nO1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMS41ZW0gMWVtO1xcclxcblxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLWxvZ29fX2xpbmsge1xcclxcbiAgICBjb2xvcjogJHdoaXRlQ29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggJHdoaXRlQ29sb3JTaGFkb3c7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGNvbG9yOiAkd2hpdGVDb2xvckhvdmVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAyOC4xMjVyZW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjIuNXJlbSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgW3tzZWN0aW9uOidob21lJ30se3NlY3Rpb246J2Nsb3RoZXMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LXN3ZWF0ZXIucG5nJyxsaW5rUGF0aDonI2Nsb3RoZXMnLHNlY3Rpb25UaXRsZTonQ2xvdGhlcycsc2VjdGlvbldvcmRzOlt7d29yZDonY2FwJyx0cmFuc2xhdGlvbjon0YjQsNC/0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLWNhcC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9jYXAubXAzJyxhbHQ6J2NhcCBpbWFnZSd9LHt3b3JkOidqYWNrZXQnLHRyYW5zbGF0aW9uOifQutGD0YDRgtC60LAnLGltYWdlOicuLi9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1qYWNrZXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvamFja2V0Lm1wMycsYWx0OidqYWNrZXQgaW1hZ2UnfSx7d29yZDonc2NhcmYnLHRyYW5zbGF0aW9uOifRiNCw0YDRhCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLXNjYXJmLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3NjYXJmLm1wMycsYWx0OidzY2FyZiBpbWFnZSd9LHt3b3JkOidzaG9lcycsdHJhbnNsYXRpb246J9Cx0L7RgtC40L3QutC4JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2Etc2hvZXMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2hvZXMubXAzJyxhbHQ6J3Nob2VzIGltYWdlJ30se3dvcmQ6J2Jsb3VzZScsdHJhbnNsYXRpb246J9Cx0LvRg9C30LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LWJsb3VzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9ibG91c2UubXAzJyxhbHQ6J2Jsb3VzZSBpbWFnZSd9LHt3b3JkOidjb2F0Jyx0cmFuc2xhdGlvbjon0LHQu9GD0LfQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtY29hdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9jb2F0Lm1wMycsYWx0Oidjb2F0IGltYWdlJ30se3dvcmQ6J2RyZXNzJyx0cmFuc2xhdGlvbjon0L/Qu9Cw0YLRjNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtZHJlc3MucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvZHJlc3MubXAzJyxhbHQ6J2RyZXNzIGltYWdlJ30se3dvcmQ6J3NoaXJ0Jyx0cmFuc2xhdGlvbjon0YDRg9Cx0LDRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1zaGlydC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zaGlydC5tcDMnLGFsdDonc2hpcnQgaW1hZ2UnfV19LHtzZWN0aW9uOidjb2xvdXJzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi15ZWxsb3cucG5nJyxsaW5rUGF0aDonI2NvbG91cnMnLHNlY3Rpb25UaXRsZTonQ29sb3Vycycsc2VjdGlvbldvcmRzOlt7d29yZDonYmxhY2snLHRyYW5zbGF0aW9uOifRh9C10YDQvdGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibGFjay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ibGFjay5tcDMnLGFsdDonYmxhY2sgaW1hZ2UnfSx7d29yZDonYmx1ZScsdHJhbnNsYXRpb246J9GB0LjQvdC40LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibHVlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2JsdWUubXAzJyxhbHQ6J2JsdWUgaW1hZ2UnfSx7d29yZDonYnJvd24nLHRyYW5zbGF0aW9uOifQutC+0YDQuNGH0L3QtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJyb3duLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2Jyb3duLm1wMycsYWx0Oidicm93biBpbWFnZSd9LHt3b3JkOidncmVlbicsdHJhbnNsYXRpb246J9C30LXQu9GR0L3Ri9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JlZW4ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvZ3JlZW4ubXAzJyxhbHQ6J2dyZWVuIGltYWdlJ30se3dvcmQ6J2dyZXknLHRyYW5zbGF0aW9uOifRgdC10YDRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JleS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ncmV5Lm1wMycsYWx0OidncmV5IGltYWdlJ30se3dvcmQ6J29yYW5nZScsdHJhbnNsYXRpb246J9C+0YDQsNC90LbQtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LW9yYW5nZS1jLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL29yYW5nZS5tcDMnLGFsdDonb3JhbmdlIGltYWdlJ30se3dvcmQ6J3BpbmsnLHRyYW5zbGF0aW9uOifRgNC+0LfQvtCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXBpbmsucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvcGluay5tcDMnLGFsdDoncGluayBpbWFnZSd9LHt3b3JkOidyZWQnLHRyYW5zbGF0aW9uOifQutGA0LDRgdC90YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXJlZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9yZWQubXAzJyxhbHQ6J3JlZCBpbWFnZSd9XX0se3NlY3Rpb246J2ZhbWlseScsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1mYW1pbHkucG5nJyxsaW5rUGF0aDonI2ZhbWlseScsc2VjdGlvblRpdGxlOidGYW1pbHknLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2F1bnQnLHRyYW5zbGF0aW9uOifRgtC10YLRjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtYXVudC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2F1bnQubXAzJyxhbHQ6J2F1bnQgaW1hZ2UnfSx7d29yZDonYnJvdGhlcicsdHJhbnNsYXRpb246J9Cx0YDQsNGCJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1icm90aGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvYnJvdGhlci5tcDMnLGFsdDonYnJvdGhlciBpbWFnZSd9LHt3b3JkOidkYWRkeScsdHJhbnNsYXRpb246J9C/0LDQv9CwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1kYWRkeS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2RhZGR5Lm1wMycsYWx0OidkYWRkeSBpbWFnZSd9LHt3b3JkOidncmFuZG1hJyx0cmFuc2xhdGlvbjon0LHQsNCx0YPRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWdyYW5kbWEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9ncmFuZG1hLm1wMycsYWx0OidncmFuZG1hIGltYWdlJ30se3dvcmQ6J2dyYW5kcGEnLHRyYW5zbGF0aW9uOifQtNC10LTRg9GI0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtZ3JhbmRwYS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2dyYW5kcGEubXAzJyxhbHQ6J2dyYW5kcGEgaW1hZ2UnfSx7d29yZDonbXVtbXknLHRyYW5zbGF0aW9uOifQvNCw0LzQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtbXVtbXkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9tdW1teS5tcDMnLGFsdDonbXVtbXkgaW1hZ2UnfSx7d29yZDonc2lzdGVyJyx0cmFuc2xhdGlvbjon0YHQtdGB0YLRgNCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1zaXN0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9zaXN0ZXIubXAzJyxhbHQ6J3Npc3RlciBpbWFnZSd9LHt3b3JkOid1bmNsZScsdHJhbnNsYXRpb246J9C00Y/QtNGPJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi11bmNsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L3VuY2xlLm1wMycsYWx0Oid1bmNsZSBpbWFnZSd9XX0se3NlY3Rpb246J2Zvb2QnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC9hLWhhbWJ1cmdlci5wbmcnLGxpbmtQYXRoOicjZm9vZCcsc2VjdGlvblRpdGxlOidGb29kJyxzZWN0aW9uV29yZHM6W3t3b3JkOidlZ2cnLHRyYW5zbGF0aW9uOifRj9C50YbQvicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC9hLWVnZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9lZ2cubXAzJyxhbHQ6J2VnZyBpbWFnZSd9LHt3b3JkOidpY2UgY3JlYW0nLHRyYW5zbGF0aW9uOifQvNC+0YDQvtC20LXQvdC+0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2QvYS1pY2VjcmVhbS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9pY2UtY3JlYW0ubXAzJyxhbHQ6J2ljZSBjcmVhbSBpbWFnZSd9LHt3b3JkOidicmVhZCcsdHJhbnNsYXRpb246J9GF0LvQtdCxJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtYnJlYWQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvYnJlYWQubXAzJyxhbHQ6J2JyZWFkIGltYWdlJ30se3dvcmQ6J2J1dHRlcicsdHJhbnNsYXRpb246J9C80LDRgdC70L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1idXR0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvYnV0dGVyLm1wMycsYWx0OididXR0ZXIgaW1hZ2UnfSx7d29yZDonY2FrZScsdHJhbnNsYXRpb246J9C/0LjRgNC+0LbQvdC+0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1jYWtlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2Nha2UubXAzJyxhbHQ6J2Nha2UgaW1hZ2UnfSx7d29yZDonY2hlZXNlJyx0cmFuc2xhdGlvbjon0YHRi9GAJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtY2hlZXNlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2NoZWVzZS5tcDMnLGFsdDonY2hlZXNlIGltYWdlJ30se3dvcmQ6J3BpenphJyx0cmFuc2xhdGlvbjon0L/QuNGG0YbQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LXBpenphLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL3BpenphLm1wMycsYWx0OidwaXp6YSBpbWFnZSd9LHt3b3JkOidzYW5kd2ljaCcsdHJhbnNsYXRpb246J9Cx0YPRgtC10YDQsdGA0L7QtCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LXNhbmR3aWNoLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL3NhbmR3aWNoLm1wMycsYWx0OidzYW5kd2ljaCBpbWFnZSd9XX0se3NlY3Rpb246J2ZydWl0cycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvdi1zdHJhd2JlcnJ5LnBuZycsbGlua1BhdGg6JyNmcnVpdHMnLHNlY3Rpb25UaXRsZTonRnJ1aXRzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidhcHBsZScsdHJhbnNsYXRpb246J9GP0LHQu9C+0LrQvicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtYXBwbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9hcHBsZS5tcDMnLGFsdDonYXBwbGUgaW1hZ2UnfSx7d29yZDonY2hlcnJ5Jyx0cmFuc2xhdGlvbjon0LLQuNGI0L3RjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtY2hlcnJ5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvY2hlcnJ5Lm1wMycsYWx0OidjaGVycnkgaW1hZ2UnfSx7d29yZDonZ3JhcGUnLHRyYW5zbGF0aW9uOifRhNC40LPRg9GA0L3QvtC1INC60LDRgtCw0L3QuNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1ncmFwZXMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9ncmFwZS5tcDMnLGFsdDonZ3JhcGUgaW1hZ2UnfSx7d29yZDonb3JhbmdlJyx0cmFuc2xhdGlvbjon0LDQv9C10LvRjNGB0LjQvScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2Etb3JhbmdlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvb3JhbmdlLm1wMycsYWx0OidvcmFuZ2UgaW1hZ2UnfSx7d29yZDoncGVhY2gnLHRyYW5zbGF0aW9uOifQv9C10YDRgdC40LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLXBlYWNoLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvcGVhY2gubXAzJyxhbHQ6J3BlYWNoIGltYWdlJ30se3dvcmQ6J3BpbmVhcHBsZScsdHJhbnNsYXRpb246J9Cw0L3QsNC90LDRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtcGluZWFwcGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvcGluZWFwcGxlLm1wMycsYWx0OidwaW5lYXBwbGUgaW1hZ2UnfSx7d29yZDonYmFuYW5hJyx0cmFuc2xhdGlvbjon0LHQsNC90LDQvScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL3YtYmFuYW5hLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvYmFuYW5hLm1wMycsYWx0OidiYW5hbmEgaW1hZ2UnfSx7d29yZDonbGVtb24nLHRyYW5zbGF0aW9uOifQu9C40LzQvtC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvdi1sZW1vbi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2xlbW9uLm1wMycsYWx0OidsZW1vbiBpbWFnZSd9XX0se3NlY3Rpb246J3BldHMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LXBvbnkucG5nJyxsaW5rUGF0aDonI3BldHMnLHNlY3Rpb25UaXRsZTonUGV0cycsc2VjdGlvbldvcmRzOlt7d29yZDonaGFtc3RlcicsdHJhbnNsYXRpb246J9GF0L7QvNGP0LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvYS1oYW1zdGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2hhbXN0ZXIubXAzJyxhbHQ6J2hhbXN0ZXIgaW1hZ2UnfSx7d29yZDoncGFycm90Jyx0cmFuc2xhdGlvbjon0L/QvtC/0YPQs9Cw0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvYS1wYXJyb3QucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvcGFycm90Lm1wMycsYWx0OidwYXJyb3QgaW1hZ2UnfSx7d29yZDondHVydGxlJyx0cmFuc2xhdGlvbjon0YfQtdGA0LXQv9Cw0YXQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLXR1cnRsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy90dXJ0bGUubXAzJyxhbHQ6J3R1cnRsZSBpbWFnZSd9LHt3b3JkOidraXR0ZW4nLHRyYW5zbGF0aW9uOifQutC+0YLRkdC90L7QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9oLWtpdHRlbi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9raXR0ZW4ubXAzJyxhbHQ6J2tpdHRlbiBpbWFnZSd9LHt3b3JkOidwdXBweScsdHJhbnNsYXRpb246J9GJ0LXQvdC+0LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvaC1wdXBweS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9wdXBweS5tcDMnLGFsdDoncHVwcHkgaW1hZ2UnfSx7d29yZDonZmVycmV0Jyx0cmFuc2xhdGlvbjon0YXQvtGA0LXQuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LWZlcnJldC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9mZXJyZXQubXAzJyxhbHQ6J2ZlcnJldCBpbWFnZSd9LHt3b3JkOidmaXNoJyx0cmFuc2xhdGlvbjon0YDRi9Cx0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvdi1maXNoLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2Zpc2gubXAzJyxhbHQ6J2Zpc2ggaW1hZ2UnfSx7d29yZDonbW91c2UnLHRyYW5zbGF0aW9uOifQvNGL0YjRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LW1vdXNlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL21vdXNlLm1wMycsYWx0Oidtb3VzZSBpbWFnZSd9XX0se3NlY3Rpb246J3NjaG9vbCcsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1wdXBpbC5wbmcnLGxpbmtQYXRoOicjc2Nob29sJyxzZWN0aW9uVGl0bGU6J1NjaG9vbCcsc2VjdGlvbldvcmRzOlt7d29yZDonYm9hcmQnLHRyYW5zbGF0aW9uOifQtNC+0YHQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ib2FyZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2JvYXJkLm1wMycsYWx0Oidib2FyZCBpbWFnZSd9LHt3b3JkOidib29rJyx0cmFuc2xhdGlvbjon0LrQvdC40LPQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtYm9vay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2Jvb2subXAzJyxhbHQ6J2Jvb2sgaW1hZ2UnfSx7d29yZDonY2FsY3VsYXRvcicsdHJhbnNsYXRpb246J9GH0LXRgNC10L/QsNGF0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWNhbGN1bGF0b3IucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9jYWxjdWxhdG9yLm1wMycsYWx0OidjYWxjdWxhdG9yIGltYWdlJ30se3dvcmQ6J2NsYXNzcm9vbScsdHJhbnNsYXRpb246J9GI0LrQvtC70YzQvdGL0Lkg0LrQu9Cw0YHRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtY2xhc3Nyb29tLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvY2xhc3Nyb29tLm1wMycsYWx0OidjbGFzc3Jvb20gaW1hZ2UnfSx7d29yZDonbWFwJyx0cmFuc2xhdGlvbjon0LrQsNGA0YLQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtbWFwLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvbWFwLm1wMycsYWx0OidtYXAgaW1hZ2UnfSx7d29yZDonbm90ZWJvb2snLHRyYW5zbGF0aW9uOifRgtC10YLRgNCw0LTRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytbm90ZWJvb2sucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ub3RlYm9vay5tcDMnLGFsdDonbm90ZWJvb2sgaW1hZ2UnfSx7d29yZDonc2Nob29sYmFnJyx0cmFuc2xhdGlvbjon0L/QvtGA0YLRhNC10LvRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytc2Nob29sYmFnLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvc2Nob29sYmFnLm1wMycsYWx0OidzY2hvb2xiYWcgaW1hZ2UnfSx7d29yZDondGVhY2hlcicsdHJhbnNsYXRpb246J9GD0YfQuNGC0LXQu9GMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi10ZWFjaGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvdGVhY2hlci5tcDMnLGFsdDondGVhY2hlciBpbWFnZSd9XX0se3NlY3Rpb246J3Nwb3J0JyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtdGVubmlzLnBuZycsbGlua1BhdGg6JyNzcG9ydCcsc2VjdGlvblRpdGxlOidTcG9ydCcsc2VjdGlvbldvcmRzOlt7d29yZDonYmFza2V0YmFsbCcsdHJhbnNsYXRpb246J9Cx0LDRgdC60LXRgtCx0L7QuycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1iYXNrZXRiYWxsLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9iYXNrZXRiYWxsLm1wMycsYWx0OidiYXNrZXRiYWxsIGltYWdlJ30se3dvcmQ6J2N5Y2xpbmcnLHRyYW5zbGF0aW9uOifQtdC30LTQsCDQvdCwINCy0LXQu9C+0YHQuNC/0LXQtNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWN5Y2xpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2N5Y2xpbmcubXAzJyxhbHQ6J2N5Y2xpbmcgaW1hZ2UnfSx7d29yZDonZmlndXJlIHNrYXRpbmcnLHRyYW5zbGF0aW9uOifRhNC40LPRg9GA0L3QvtC1INC60LDRgtCw0L3QuNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWZpZ3VyZS1za2F0aW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9maWd1cmUtc2thdGluZy5tcDMnLGFsdDonZmlndXJlIHNrYXRpbmcgaW1hZ2UnfSx7d29yZDonZm9vdGJhbGwnLHRyYW5zbGF0aW9uOifRhNGD0YLQsdC+0LsnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtZm9vdGJhbGwucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2Zvb3RiYWxsLm1wMycsYWx0Oidmb290YmFsbCBpbWFnZSd9LHt3b3JkOidob2NrZXknLHRyYW5zbGF0aW9uOifRhdC+0LrQutC10LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtaG9ja2V5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9ob2NrZXkubXAzJyxhbHQ6J2hvY2tleSBpbWFnZSd9LHt3b3JkOidza2lpbmcnLHRyYW5zbGF0aW9uOifQu9GL0LbQvdGL0Lkg0YHQv9C+0YDRgicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1za2lpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L3NraWluZy5tcDMnLGFsdDonc2tpaW5nIGltYWdlJ30se3dvcmQ6J3N3aW1taW5nJyx0cmFuc2xhdGlvbjon0L/Qu9Cw0LLQsNC90LjQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1zd2ltbWluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvc3dpbW1pbmcubXAzJyxhbHQ6J3N3aW1taW5nIGltYWdlJ30se3dvcmQ6J2JveGluZycsdHJhbnNsYXRpb246J9Cx0L7QutGBJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWJveGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvYm94aW5nLm1wMycsYWx0Oidib3hpbmcgaW1hZ2UnfV19XSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbM10hLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvbWFpbic7XG5pbXBvcnQgJy4vdXRpbHMvZXZlbnRzJztcbmltcG9ydCB7IHNldEdsb2JhbFZhbHVlcywgY3JlYXRlQ2FyZHNTZXQgfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi91dGlscy92YXJpYWJsZXMnO1xuLy8gaW1wb3J0IGNyZWF0ZUNhcmRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9jYXJkSXRlbSc7XG5cbmNvbnN0IGFwcFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuXG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVNYWluKCkpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gIGNvbnNvbGUubG9nKEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpKTtcbiAgY29uc29sZS5sb2coR0VUX1ZBUignY2FyZHNMaXN0JykpO1xuICAvLyBjb25zb2xlLmxvZyhjcmVhdGVDYXJkSXRlbSgpKTtcbiAgY3JlYXRlQ2FyZHNTZXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVDYXJkSXRlbSIsImltZ1BhdGgiLCJpbWdBbHQiLCJjYXJkVGl0bGUiLCJjYXJkVHJhbnNsYXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjYXJkSXRlbSIsImNsYXNzTGlzdCIsImFkZCIsImNhcmRJbm5lciIsImNhcmRGcm9udCIsImNhcmRGcm9udEltZ0NvbnRhaW5lciIsImNhcmRGcm9udEltZyIsInNyYyIsImFsdCIsImFwcGVuZCIsImNhcmRGcm9udFRpdGxlIiwidGV4dENvbnRlbnQiLCJjYXJkRnJvbnRSb3RhdGVCdG4iLCJ0eXBlIiwiY2FyZEJhY2siLCJjYXJkQmFja0ltZ0NvbnRhaW5lciIsImNhcmRCYWNrSW1nIiwiY2FyZEJhY2tUaXRsZSIsImRhdGEiLCJjcmVhdGVOYXZNZW51IiwiY3JlYXRlTG9nbyIsImNyZWF0ZVRvZ2dsZSIsImNyZWF0ZU5hdk1lbnVCdG4iLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyTG9nbyIsImhlYWRlckJ0bnNDb250YWluZXIiLCJ0b2dnbGVCdG4iLCJzdGF0QnRuIiwiaGVhZGVyTmF2IiwibmF2TWVudUJ0biIsIm5hdmlnYXRpb25NZW51IiwiaGVhZGVyQ29udGFpbmVyIiwibG9nb1RleHQiLCJsb2dvSHJlZiIsImhlYWRlckxvZ29MaW5rIiwiaHJlZiIsImNyZWF0ZU1haW4iLCJtYWluRWxlbWVudCIsIm1haW5Db250YWluZXIiLCJzY29yZUxpbmUiLCJjYXRlZ29yeU5hbWUiLCJjYXJkTGlzdCIsImNyZWF0ZU5hdk1lbnVJdGVtIiwibmF2TWVudVVsIiwiaSIsInNlY3Rpb24iLCJzcGFuMSIsInNwYW4yIiwic3BhbjMiLCJjYXBpdGFsaXplRmlyc3RXb3JkIiwibGlua05hbWUiLCJsaSIsImxpbmsiLCJjb25jYXQiLCJkYXRhc2V0IiwiYXJpYVByZXNzZWQiLCJ0b2dnbGVNb2RlMSIsInRvZ2dsZU1vZGUyIiwiR0VUX1ZBUiIsImNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQiLCJhcnJheSIsImNhcmRzTGlzdCIsImZvckVhY2giLCJlbGVtZW50Iiwic3RhcnRJbWFnZSIsInNlY3Rpb25Xb3JkcyIsInNlY3Rpb25UaXRsZSIsIlNFVF9WQVIiLCJuYW1lIiwiZG9jdW1lbnQiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInNldEdsb2JhbFZhbHVlcyIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVDYXJkc1NldCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsIlZBUklBQkxFUyIsInZhbHVlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwV3JhcHBlciIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9