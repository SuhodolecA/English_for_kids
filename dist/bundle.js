/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/cardItem.js":
/*!***************************************!*\
  !*** ./src/js/components/cardItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* eslint-disable import/no-cycle */

var createCardItem = function createCardItem(imgPath, imgAlt, cardTitle, cardSection) {
  var cardTranslation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var soundPath = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  // create card item
  var cardItem = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('li');
  cardItem.classList.add('card');
  cardItem.classList.add('card-list__item');
  cardItem.dataset.section = cardSection;
  cardItem.dataset.sound = soundPath;

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
  cardFrontImg.src = imgPath;
  cardFrontImg.alt = imgAlt;
  cardFrontImgContainer.append(cardFrontImg);
  cardFront.append(cardFrontImgContainer);

  // create card front title
  var cardFrontTitle = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
  cardFrontTitle.classList.add('card-front__title');
  cardFrontTitle.classList.add('card-title');
  cardFrontTitle.textContent = cardTitle;
  cardFront.append(cardFrontTitle);

  // create card front rotate button
  var cardFrontRotateBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  cardFrontRotateBtn.classList.add('card-front__rotate');
  cardFrontRotateBtn.classList.add('rotate-btn');
  cardFrontRotateBtn.type = 'button';
  cardFrontRotateBtn.textContent = 'rotate button';
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
  cardBackImg.src = imgPath;
  cardBackImg.alt = imgAlt;
  cardBackImgContainer.append(cardBackImg);
  cardBack.append(cardBackImgContainer);

  // create card back title
  var cardBackTitle = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
  cardBackTitle.classList.add('card-back__title');
  cardBackTitle.classList.add('card-title');
  cardBackTitle.textContent = cardTranslation;
  cardBack.append(cardBackTitle);
  cardInner.append(cardFront);
  cardInner.append(cardBack);
  cardItem.append(cardInner);
  return cardItem;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardItem);

/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createFooter = function createFooter() {
  // create footer
  var footerElement = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer');
  footerElement.classList.add('footer');

  // create footer paragraph
  var paragraph = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('p');
  paragraph.classList.add('footer-text');
  paragraph.textContent = 'Created by ';

  // create footer paragraph link
  var paragraphLink = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('a');
  paragraphLink.classList.add('footer-text__link');
  paragraphLink.target = '_blank';
  paragraphLink.textContent = 'Anton Sukhadolets';
  paragraphLink.href = 'https://github.com/SuhodolecA';
  paragraph.append(paragraphLink);

  // create footer container
  var footerContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  footerContainer.classList.add('container');
  footerContainer.append(paragraph);
  footerElement.append(footerContainer);
  return footerElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _statisticsBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statisticsBtn */ "./src/js/components/statisticsBtn.js");







var createHeader = function createHeader() {
  var headerElement = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('header');
  headerElement.classList.add('header');

  // create header logo
  var headerLogo = (0,_logo__WEBPACK_IMPORTED_MODULE_3__.createLogo)('English for kids', '#home');

  // create header buttons container
  var headerBtnsContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('div');
  headerBtnsContainer.classList.add('header-buttons');

  // create header toggle
  var toggleBtn = (0,_toggleBtn__WEBPACK_IMPORTED_MODULE_4__.createToggle)();

  // create header statistics button
  var statBtn = (0,_statisticsBtn__WEBPACK_IMPORTED_MODULE_6__.createStatisticsBtn)();
  headerBtnsContainer.append(toggleBtn);
  headerBtnsContainer.append(statBtn);

  // create nav
  var headerNav = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('nav');
  headerNav.classList.add('header-nav');

  // create nav menu button
  var navMenuBtn = (0,_navMenuBtn__WEBPACK_IMPORTED_MODULE_5__.createNavMenuBtn)();

  // create nav menu
  var navigationMenu = (0,_navMenu__WEBPACK_IMPORTED_MODULE_2__.createNavMenu)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
/* harmony export */   "createLogo": () => (/* binding */ createLogo),
/* harmony export */   "setLogoEventListener": () => (/* binding */ setLogoEventListener)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");



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
var logoFunctionality = function logoFunctionality() {
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.hideStatTable)();
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createStartPageCardSet)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
var setLogoEventListener = function setLogoEventListener() {
  var headerLogo = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('headerLogo');
  headerLogo.addEventListener('click', logoFunctionality);
};


/***/ }),

/***/ "./src/js/components/main.js":
/*!***********************************!*\
  !*** ./src/js/components/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "mainMenuFunctionality": () => (/* binding */ mainMenuFunctionality),
/* harmony export */   "mainSectionFunctionality": () => (/* binding */ mainSectionFunctionality),
/* harmony export */   "setMainSectionFunctionality": () => (/* binding */ setMainSectionFunctionality)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navMenu */ "./src/js/components/navMenu.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay */ "./src/js/components/overlay.js");
/* harmony import */ var _playRepeatBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playRepeatBtn */ "./src/js/components/playRepeatBtn.js");
/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalWindow */ "./src/js/components/modalWindow.js");
/* eslint-disable import/no-cycle */







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
  categoryName.textContent = '';

  // cards list
  var cardList = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul');
  cardList.classList.add('cards-list');
  cardList.dataset.category = '';
  cardList.dataset.mode = '';

  // create playRepeat button
  var playRepeatBtn = (0,_playRepeatBtn__WEBPACK_IMPORTED_MODULE_5__.createPlayRepeatBtn)();
  mainContainer.append(categoryName);
  mainContainer.append(cardList);
  mainContainer.append(playRepeatBtn);
  mainElement.append(mainContainer);
  return mainElement;
};
var mainMenuFunctionality = function mainMenuFunctionality(target) {
  var section = target.closest('.card-list__item').dataset.section;
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createCardsListSection)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_2__["default"], section);
  (0,_navMenu__WEBPACK_IMPORTED_MODULE_3__.updateNavMeunLinksState)(section);
};
var mainSectionFunctionality = function mainSectionFunctionality(event) {
  var target = event.target;
  var cardsList = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('cardsList');
  var cardInner = target.closest('.card-inner');
  if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isMainMenu)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isCard)(target)) {
    mainMenuFunctionality(target);
  } else if (!(0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isMainMenu)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isTrainMode)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isCard)(target)) {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.trainModeFunctionality)(target, cardInner);
  } else if (!(0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isMainMenu)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isPlayMode)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isCard)(target) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameStarted)()) {
    var currentCard = target.closest('.card-list__item');
    var currentCardFront = currentCard.querySelector('.card-front');
    var currentCardSound = currentCard.dataset.sound;
    var currentSound = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('soundsList').at(-1);
    var playRepeatBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('playRepeatBtn');
    var correctAnswerSound = 'assets/audio/answers-sound/correct-choice.mp3';
    var successSound = 'assets/audio/answers-sound/success.mp3';
    var correctIconSrc = 'assets/images/score-icons/correct.png';
    var wrongIconSrc = 'assets/images/score-icons/wrong.png';
    var wrongAnswerSound = 'assets/audio/answers-sound/negative_beeps.mp3';
    var failureSound = 'assets/audio/answers-sound/failure.mp3';
    if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isActiveCard)(currentCardFront) && !playRepeatBtn.classList.contains('playing')) {
      (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.updateStatisticsPageData)('play', currentCard, currentCardSound === currentSound);
      if (currentCardSound === currentSound) {
        currentCardFront.classList.add('inactive');
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.addScoreIcon)(currentCard, correctIconSrc);
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(currentCard, correctAnswerSound);
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.updateSoundList)();
        (0,_playRepeatBtn__WEBPACK_IMPORTED_MODULE_5__.playRepeatBtnFunctionality)(playRepeatBtn);
        if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameOver)()) {
          (0,_overlay__WEBPACK_IMPORTED_MODULE_4__.showOverlay)();
          if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameOverSuccess)()) {
            (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(currentCard, successSound);
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.showModalWindow)();
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.hideModalWindow)();
          } else {
            (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(currentCard, failureSound);
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.showModalWindow)();
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.hideModalWindow)();
          }
        }
      } else {
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.addScoreIcon)(currentCard, wrongIconSrc);
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(currentCard, wrongAnswerSound);
      }
    }
  }
};
var setMainSectionFunctionality = function setMainSectionFunctionality() {
  var cardsList = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('cardsList');
  cardsList.addEventListener('click', mainSectionFunctionality);
};


/***/ }),

/***/ "./src/js/components/modalWindow.js":
/*!******************************************!*\
  !*** ./src/js/components/modalWindow.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModalWindow": () => (/* binding */ createModalWindow),
/* harmony export */   "hideModalWindow": () => (/* binding */ hideModalWindow),
/* harmony export */   "showModalWindow": () => (/* binding */ showModalWindow)
/* harmony export */ });
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay */ "./src/js/components/overlay.js");
/* eslint-disable import/no-cycle */




var createModalWindow = function createModalWindow() {
  var modalWindow = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('div');
  modalWindow.classList.add('modal-window');
  var icon = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('img');
  icon.classList.add('modal-window__icon');
  icon.src = '';
  icon.alt = 'icon';
  var text = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('p');
  text.classList.add('modal-window__text');
  text.textContent = '';
  modalWindow.append(icon);
  modalWindow.append(text);
  return modalWindow;
};
var showModalWindow = function showModalWindow() {
  var modalWindow = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindow');
  var modalWindowIcon = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindowIcon');
  var modalWindowText = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindowText');
  if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.isGameOverSuccess)()) {
    modalWindowIcon.src = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindowIconWin');
    modalWindowText.textContent = 'You are win!';
    modalWindow.classList.add('appear');
  } else {
    modalWindowIcon.src = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindowIconLose');
    modalWindowText.textContent = 'You are lose!';
    modalWindow.classList.add('appear');
  }
};
var hideModalWindow = function hideModalWindow() {
  var modalWindow = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindow');
  setTimeout(function () {
    modalWindow.classList.remove('appear');
    (0,_overlay__WEBPACK_IMPORTED_MODULE_3__.hideOverlay)();
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createStartPageCardSet)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }, 3000);
};


/***/ }),

/***/ "./src/js/components/navMenu.js":
/*!**************************************!*\
  !*** ./src/js/components/navMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeNavMenu": () => (/* binding */ closeNavMenu),
/* harmony export */   "createNavMenu": () => (/* binding */ createNavMenu),
/* harmony export */   "hamburgerMenuFunctionality": () => (/* binding */ hamburgerMenuFunctionality),
/* harmony export */   "openNavMenu": () => (/* binding */ openNavMenu),
/* harmony export */   "setHamburgerMenuEventListener": () => (/* binding */ setHamburgerMenuEventListener),
/* harmony export */   "updateNavMeunLinksState": () => (/* binding */ updateNavMeunLinksState)
/* harmony export */ });
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _navMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navMenuItem */ "./src/js/components/navMenuItem.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* eslint-disable import/no-cycle */




var createNavMenu = function createNavMenu(dataSet) {
  // create nav ul
  var navMenuUl = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul');
  navMenuUl.classList.add('header-menu');
  for (var i = 0; i < dataSet.length; i += 1) {
    navMenuUl.append((0,_navMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"])(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"][i].section));
  }
  return navMenuUl;
};
var openNavMenu = function openNavMenu(headerNav) {
  var headerMenu = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('headerMenu');
  var navMenuLinks = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('navMenuLinks');
  navMenuLinks.forEach(function (link) {
    link.tabIndex = 0;
  });
  headerNav.classList.add('open');
  headerMenu.classList.remove('slide-out');
  headerMenu.classList.add('slide-in');
};
var closeNavMenu = function closeNavMenu(headerNav) {
  var headerMenu = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('headerMenu');
  var navMenuLinks = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('navMenuLinks');
  headerNav.classList.remove('open');
  headerMenu.classList.remove('slide-in');
  headerMenu.classList.add('slide-out');
  navMenuLinks.forEach(function (link) {
    link.tabIndex = -1;
  });
};
var setNavMenuActiveState = function setNavMenuActiveState(links, category) {
  links.forEach(function (link) {
    var linkSection = link.dataset.section;
    if (linkSection === category) {
      link.classList.add('active');
    }
  });
};
var removeNavMenuActiveState = function removeNavMenuActiveState(links) {
  links.forEach(function (link) {
    link.classList.remove('active');
  });
};
var updateNavMeunLinksState = function updateNavMeunLinksState(category) {
  var navMenuLinks = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('navMenuLinks');
  removeNavMenuActiveState(navMenuLinks);
  setNavMenuActiveState(navMenuLinks, category);
};
var hamburgerMenuFunctionality = function hamburgerMenuFunctionality(event) {
  var target = event.target;
  var categoryName = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('categoryName');
  var hamburgerBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('hamburgerBtn');
  var section = target.dataset.section;
  categoryName.textContent = section;
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.hideStatTable)();
  if (section === 'Home') {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createStartPageCardSet)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"]);
    hamburgerBtn.click();
  } else if (section === undefined) {
    return;
  } else {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createCardsListSection)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"], section);
    hamburgerBtn.click();
  }
  updateNavMeunLinksState(categoryName.textContent);
};
var setHamburgerMenuEventListener = function setHamburgerMenuEventListener() {
  var headerMenu = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('headerMenu');
  headerMenu.addEventListener('click', hamburgerMenuFunctionality);
};


/***/ }),

/***/ "./src/js/components/navMenuBtn.js":
/*!*****************************************!*\
  !*** ./src/js/components/navMenuBtn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavMenuBtn": () => (/* binding */ createNavMenuBtn),
/* harmony export */   "navMenuBtnFunctionality": () => (/* binding */ navMenuBtnFunctionality)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay */ "./src/js/components/overlay.js");
/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navMenu */ "./src/js/components/navMenu.js");




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
var navMenuBtnFunctionality = function navMenuBtnFunctionality() {
  var hamburgerBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('hamburgerBtn');
  var headerNav = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('headerNav');
  hamburgerBtn.addEventListener('click', function () {
    if (headerNav.classList.contains('open')) {
      (0,_navMenu__WEBPACK_IMPORTED_MODULE_3__.closeNavMenu)(headerNav);
      (0,_overlay__WEBPACK_IMPORTED_MODULE_2__.hideOverlay)();
    } else {
      (0,_navMenu__WEBPACK_IMPORTED_MODULE_3__.openNavMenu)(headerNav);
      (0,_overlay__WEBPACK_IMPORTED_MODULE_2__.showOverlay)();
    }
  });
};


/***/ }),

/***/ "./src/js/components/navMenuItem.js":
/*!******************************************!*\
  !*** ./src/js/components/navMenuItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* eslint-disable import/no-cycle */

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
  link.tabIndex = -1;
  li.append(link);
  return li;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavMenuItem);

/***/ }),

/***/ "./src/js/components/overlay.js":
/*!**************************************!*\
  !*** ./src/js/components/overlay.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOverlay": () => (/* binding */ createOverlay),
/* harmony export */   "hideOverlay": () => (/* binding */ hideOverlay),
/* harmony export */   "overlayFunctionality": () => (/* binding */ overlayFunctionality),
/* harmony export */   "showOverlay": () => (/* binding */ showOverlay)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navMenu */ "./src/js/components/navMenu.js");
/* eslint-disable import/no-cycle */



var createOverlay = function createOverlay() {
  // create overlay element
  var overlayElement = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  overlayElement.classList.add('overlay');
  return overlayElement;
};
var hideOverlay = function hideOverlay() {
  var overlay = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('overlay');
  var body = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('body');
  body.classList.remove('noscroll');
  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');
};
var showOverlay = function showOverlay() {
  var overlay = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('overlay');
  var body = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('body');
  body.classList.add('noscroll');
  overlay.classList.remove('fade-out');
  overlay.classList.add('fade-in');
};
var overlayFunctionality = function overlayFunctionality() {
  var overlay = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('overlay');
  var headerNav = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('headerNav');
  overlay.addEventListener('click', function () {
    if (headerNav.classList.contains('open')) {
      hideOverlay();
      (0,_navMenu__WEBPACK_IMPORTED_MODULE_2__.closeNavMenu)(headerNav);
    }
  });
};


/***/ }),

/***/ "./src/js/components/playRepeatBtn.js":
/*!********************************************!*\
  !*** ./src/js/components/playRepeatBtn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayRepeatBtn": () => (/* binding */ createPlayRepeatBtn),
/* harmony export */   "playRepeatBtnFunctionality": () => (/* binding */ playRepeatBtnFunctionality),
/* harmony export */   "resetPlayRepeatBtnState": () => (/* binding */ resetPlayRepeatBtnState),
/* harmony export */   "setPlayRepeatBtnFunctionality": () => (/* binding */ setPlayRepeatBtnFunctionality)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* eslint-disable import/no-cycle */


var createPlayRepeatBtn = function createPlayRepeatBtn() {
  var button = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  button.type = 'button';
  button.classList.add('play-btn');
  button.textContent = 'play';
  return button;
};
var playRepeatBtnFunctionality = function playRepeatBtnFunctionality() {
  var playRepeatBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('playRepeatBtn');
  var soundsList = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('soundsList');
  var currentSound = soundsList.at(-1);
  if (soundsList.length === 0) return;
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(playRepeatBtn, currentSound);
  if (!playRepeatBtn.classList.contains('repeat')) {
    playRepeatBtn.classList.add('repeat');
  }
};
var resetPlayRepeatBtnState = function resetPlayRepeatBtnState() {
  var playRepeatBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('playRepeatBtn');
  if (playRepeatBtn.classList.contains('repeat')) {
    playRepeatBtn.classList.remove('repeat');
  }
};
var setPlayRepeatBtnFunctionality = function setPlayRepeatBtnFunctionality() {
  var playRepeatBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('playRepeatBtn');
  playRepeatBtn.addEventListener('click', playRepeatBtnFunctionality);
};


/***/ }),

/***/ "./src/js/components/scoreLineIcon.js":
/*!********************************************!*\
  !*** ./src/js/components/scoreLineIcon.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* eslint-disable import/no-cycle */

var createScoreLineIcon = function createScoreLineIcon(src) {
  var scoreIcon = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('img');
  scoreIcon.classList.add('score-line__icon');
  scoreIcon.src = src;
  scoreIcon.alt = 'icon';
  return scoreIcon;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createScoreLineIcon);

/***/ }),

/***/ "./src/js/components/statisticsBtn.js":
/*!********************************************!*\
  !*** ./src/js/components/statisticsBtn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStatisticsBtn": () => (/* binding */ createStatisticsBtn),
/* harmony export */   "statisticsBtnFunctionality": () => (/* binding */ statisticsBtnFunctionality)
/* harmony export */ });
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");




// create header statistics button
var createStatisticsBtn = function createStatisticsBtn() {
  var statBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('button');
  statBtn.type = 'button';
  statBtn.classList.add('statistics-button');
  statBtn.textContent = 'Statistics';
  return statBtn;
};
var statisticsBtnFunctionality = function statisticsBtnFunctionality() {
  var statBtn = document.querySelector('.statistics-button');
  statBtn.addEventListener('click', function () {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.setGlobalValues)();
    var statisticsPage = document.querySelector('.statistics-page');
    var statisticsPageContainer = statisticsPage.querySelector('.container');
    var statisticsTable = document.querySelector('.stat-table');
    var statisticData = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('statisticData').slice();
    statisticsTable.remove();
    statisticsPageContainer.append((0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createStatisticsTable)(statisticData));
    var repeatBtn = document.querySelector('.repeat-btn');
    statisticData.sort(function (a, b) {
      var elem1 = a['Accuracy %'];
      var elem2 = b['Accuracy %'];
      return elem1 - elem2;
    });
    var repeatedData = statisticData.filter(function (item) {
      return item['Accuracy %'] !== 'n/e' && item['Accuracy %'] !== 100;
    }).slice(0, 8).map(function (elem) {
      return elem.Translation;
    });
    var repeatedDataSet = _assets_data_data_json__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (item) {
      return item.sectionWords;
    }).map(function (elem) {
      return elem.sectionWords;
    }).flat().filter(function (item) {
      return repeatedData.includes(item.translation);
    });
    (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.SET_VAR)('repeatedDataSet', repeatedDataSet);
    if (repeatedDataSet.length !== 0) {
      repeatBtn.disabled = false;
    } else {
      repeatBtn.disabled = true;
    }
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.setStatisticsTableFunctionality)();
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.showStatTable)();
  });
};


/***/ }),

/***/ "./src/js/components/statisticsPage.js":
/*!*********************************************!*\
  !*** ./src/js/components/statisticsPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStatisticsPage": () => (/* binding */ createStatisticsPage),
/* harmony export */   "repeatDiffWordsFunctionality": () => (/* binding */ repeatDiffWordsFunctionality),
/* harmony export */   "resetStatisticsBtnFunctionality": () => (/* binding */ resetStatisticsBtnFunctionality)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");


var createStatisticsPage = function createStatisticsPage() {
  var statisticsData = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('statisticData');
  // create statistics page
  var statisticsPage = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  statisticsPage.classList.add('statistics-page');

  // create statistics page container
  var statisticsPageContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  statisticsPageContainer.classList.add('container');

  // create statistics page buttons container
  var statisticsPageButtons = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  statisticsPageButtons.classList.add('statistics-page__controls');

  // create repeat difficult words button
  var repeatBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  repeatBtn.type = 'button';
  repeatBtn.disabled = true;
  repeatBtn.classList.add('statistics-page__controls-btn');
  repeatBtn.classList.add('repeat-btn');
  repeatBtn.textContent = 'Repeat difficult words';

  // create reset button
  var resetBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  resetBtn.type = 'button';
  resetBtn.classList.add('statistics-page__controls-btn');
  resetBtn.classList.add('reset-btn');
  resetBtn.textContent = 'Reset statistic';
  statisticsPageButtons.append(repeatBtn);
  statisticsPageButtons.append(resetBtn);

  // create statistics page table
  var statisticsPageTable = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createStatisticsTable)(statisticsData);
  statisticsPageContainer.append(statisticsPageButtons);
  statisticsPageContainer.append(statisticsPageTable);
  statisticsPage.append(statisticsPageContainer);
  return statisticsPage;
};
var resetStatisticsBtnFunctionality = function resetStatisticsBtnFunctionality() {
  var resetStatBtn = document.querySelector('.reset-btn');
  resetStatBtn.addEventListener('click', function () {
    localStorage.clear();
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.setGlobalValues)();
    var statisticsPage = document.querySelector('.statistics-page');
    var statisticsPageContainer = statisticsPage.querySelector('.container');
    var statisticsTable = document.querySelector('.stat-table');
    var statisticsData = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('statisticData');
    statisticsTable.remove();
    statisticsPageContainer.append((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createStatisticsTable)(statisticsData));
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.setStatisticsTableFunctionality)();
    var repeatBtn = document.querySelector('.repeat-btn');
    repeatBtn.disabled = true;
  });
};
var repeatDiffWordsFunctionality = function repeatDiffWordsFunctionality() {
  var repeatDiffWordsBtn = document.querySelector('.repeat-btn');
  repeatDiffWordsBtn.addEventListener('click', function () {
    var repeatedDataSet = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('repeatedDataSet');
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createDiffWordsSection)(repeatedDataSet, 'Difficult words');
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.hideStatTable)();
  });
};


/***/ }),

/***/ "./src/js/components/toggleBtn.js":
/*!****************************************!*\
  !*** ./src/js/components/toggleBtn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToggle": () => (/* binding */ createToggle),
/* harmony export */   "setToggleBtnFunctionality": () => (/* binding */ setToggleBtnFunctionality),
/* harmony export */   "toggleBtnFunctionality": () => (/* binding */ toggleBtnFunctionality)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");


var createToggle = function createToggle() {
  // create toggle
  var toggleBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  toggleBtn.type = 'button';
  toggleBtn.classList.add('toggle-button');
  toggleBtn.ariaPressed = false;

  // create toggle mode train
  var toggleModeTrain = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');
  toggleModeTrain.classList.add('toggle-button__mode');
  toggleModeTrain.classList.add('toggle-button__train');
  toggleModeTrain.textContent = 'Train';

  // create toggle mode play
  var toggleModePlay = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');
  toggleModePlay.classList.add('toggle-button__mode');
  toggleModePlay.classList.add('toggle-button__play');
  toggleModePlay.textContent = 'Play';
  toggleBtn.append(toggleModeTrain);
  toggleBtn.append(toggleModePlay);
  return toggleBtn;
};
var toggleBtnFunctionality = function toggleBtnFunctionality() {
  var toggleBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('toggleBtn');
  toggleBtn.ariaPressed = toggleBtn.ariaPressed === 'false' ? 'true' : 'false';
  (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.SET_VAR)('isPlayMode', toggleBtn.ariaPressed);
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.updateMode)();
};
var setToggleBtnFunctionality = function setToggleBtnFunctionality() {
  var toggleBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('toggleBtn');
  toggleBtn.addEventListener('click', toggleBtnFunctionality);
};


/***/ }),

/***/ "./src/js/utils/events.js":
/*!********************************!*\
  !*** ./src/js/utils/events.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navMenuBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navMenuBtn */ "./src/js/components/navMenuBtn.js");
/* harmony import */ var _components_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/overlay */ "./src/js/components/overlay.js");
/* harmony import */ var _components_navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navMenu */ "./src/js/components/navMenu.js");
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/logo */ "./src/js/components/logo.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main */ "./src/js/components/main.js");
/* harmony import */ var _components_toggleBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/toggleBtn */ "./src/js/components/toggleBtn.js");
/* harmony import */ var _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/playRepeatBtn */ "./src/js/components/playRepeatBtn.js");
/* harmony import */ var _components_statisticsBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/statisticsBtn */ "./src/js/components/statisticsBtn.js");
/* harmony import */ var _components_statisticsPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/statisticsPage */ "./src/js/components/statisticsPage.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper */ "./src/js/utils/helper.js");










var setEventListeners = function setEventListeners() {
  (0,_components_navMenuBtn__WEBPACK_IMPORTED_MODULE_0__.navMenuBtnFunctionality)();
  (0,_components_overlay__WEBPACK_IMPORTED_MODULE_1__.overlayFunctionality)();
  (0,_components_navMenu__WEBPACK_IMPORTED_MODULE_2__.setHamburgerMenuEventListener)();
  (0,_components_logo__WEBPACK_IMPORTED_MODULE_3__.setLogoEventListener)();
  (0,_components_main__WEBPACK_IMPORTED_MODULE_4__.setMainSectionFunctionality)();
  (0,_components_toggleBtn__WEBPACK_IMPORTED_MODULE_5__.setToggleBtnFunctionality)();
  (0,_components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_6__.setPlayRepeatBtnFunctionality)();
  (0,_helper__WEBPACK_IMPORTED_MODULE_9__.setStatisticsTableFunctionality)();
  (0,_components_statisticsBtn__WEBPACK_IMPORTED_MODULE_7__.statisticsBtnFunctionality)();
  (0,_components_statisticsPage__WEBPACK_IMPORTED_MODULE_8__.repeatDiffWordsFunctionality)();
  (0,_components_statisticsPage__WEBPACK_IMPORTED_MODULE_8__.resetStatisticsBtnFunctionality)();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setEventListeners);

/***/ }),

/***/ "./src/js/utils/helper.js":
/*!********************************!*\
  !*** ./src/js/utils/helper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScoreIcon": () => (/* binding */ addScoreIcon),
/* harmony export */   "capitalizeFirstWord": () => (/* binding */ capitalizeFirstWord),
/* harmony export */   "clearCardsListContainer": () => (/* binding */ clearCardsListContainer),
/* harmony export */   "createCardsListSection": () => (/* binding */ createCardsListSection),
/* harmony export */   "createDiffWordsSection": () => (/* binding */ createDiffWordsSection),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createStartPageCardSet": () => (/* binding */ createStartPageCardSet),
/* harmony export */   "createStatisticsTable": () => (/* binding */ createStatisticsTable),
/* harmony export */   "createStatisticsTableBody": () => (/* binding */ createStatisticsTableBody),
/* harmony export */   "hideStatTable": () => (/* binding */ hideStatTable),
/* harmony export */   "isActiveCard": () => (/* binding */ isActiveCard),
/* harmony export */   "isCard": () => (/* binding */ isCard),
/* harmony export */   "isGameOver": () => (/* binding */ isGameOver),
/* harmony export */   "isGameOverSuccess": () => (/* binding */ isGameOverSuccess),
/* harmony export */   "isGameStarted": () => (/* binding */ isGameStarted),
/* harmony export */   "isMainMenu": () => (/* binding */ isMainMenu),
/* harmony export */   "isPlayMode": () => (/* binding */ isPlayMode),
/* harmony export */   "isTrainMode": () => (/* binding */ isTrainMode),
/* harmony export */   "playSound": () => (/* binding */ playSound),
/* harmony export */   "rotateBack": () => (/* binding */ rotateBack),
/* harmony export */   "rotateCard": () => (/* binding */ rotateCard),
/* harmony export */   "setGlobalValues": () => (/* binding */ setGlobalValues),
/* harmony export */   "setStatisticsTableFunctionality": () => (/* binding */ setStatisticsTableFunctionality),
/* harmony export */   "showStatTable": () => (/* binding */ showStatTable),
/* harmony export */   "shuffleArray": () => (/* binding */ shuffleArray),
/* harmony export */   "trainModeFunctionality": () => (/* binding */ trainModeFunctionality),
/* harmony export */   "updateMode": () => (/* binding */ updateMode),
/* harmony export */   "updateSoundList": () => (/* binding */ updateSoundList),
/* harmony export */   "updateStatisticsPageData": () => (/* binding */ updateStatisticsPageData)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/utils/variables.js");
/* harmony import */ var _components_cardItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cardItem */ "./src/js/components/cardItem.js");
/* harmony import */ var _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/playRepeatBtn */ "./src/js/components/playRepeatBtn.js");
/* harmony import */ var _components_scoreLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scoreLineIcon */ "./src/js/components/scoreLineIcon.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main */ "./src/js/components/main.js");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* eslint-disable import/no-cycle */







// create element
var createElement = function createElement(name) {
  var element = document.createElement(name);
  return element;
};
var isMainMenu = function isMainMenu(element) {
  return element.classList.contains('start-page');
};
var isCard = function isCard(element) {
  return element.closest('.card-list__item');
};
var isActiveCard = function isActiveCard(card) {
  return !card.classList.contains('inactive');
};
var isTrainMode = function isTrainMode(element) {
  return element.dataset.mode === 'train';
};
var isPlayMode = function isPlayMode(element) {
  return element.dataset.mode === 'play';
};
var isGameStarted = function isGameStarted() {
  return (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('playRepeatBtn').classList.contains('repeat');
};
var isGameOver = function isGameOver() {
  return (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('soundsList').length === 0;
};
var isGameOverSuccess = function isGameOverSuccess() {
  var iconsAmount = document.querySelectorAll('.score-line__icon').length;
  var cardsAmount = document.querySelectorAll('.card-list__item').length;
  return iconsAmount === cardsAmount;
};
var clearCardsListContainer = function clearCardsListContainer() {
  var container = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  container.innerHTML = '';
};
var shuffleArray = function shuffleArray(array) {
  var shuffled = _toConsumableArray(array);
  for (var i = shuffled.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [shuffled[j], shuffled[i]];
    shuffled[i] = _ref[0];
    shuffled[j] = _ref[1];
  }
  return shuffled;
};
var updateSoundList = function updateSoundList() {
  var soundsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('soundsList').slice();
  soundsList.pop();
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('soundsList', soundsList);
};
var createNewSoundsList = function createNewSoundsList() {
  var cards = document.querySelectorAll('.card-list__item');
  var soundsList = [];
  cards.forEach(function (card) {
    var sound = card.dataset.sound;
    soundsList.push(sound);
  });
  return soundsList;
};
var percentCorrectAnswers = function percentCorrectAnswers(obj) {
  return Math.round(obj.Correct / (obj.Correct + obj.Incorrect) * 100);
};
var createStartingStatisticData = function createStartingStatisticData(data) {
  var result = [];
  data.forEach(function (item) {
    if (item.section !== 'home') {
      item.sectionWords.forEach(function (elem) {
        var obj = {
          Category: item.sectionTitle,
          Word: elem.word,
          Translation: elem.translation,
          Trained: 0,
          Correct: 0,
          Incorrect: 0,
          'Accuracy %': 'n/e'
        };
        result.push(obj);
      });
    }
  });
  return result;
};
var createStatisticsData = function createStatisticsData(data) {
  var result = [];
  var savedData = localStorage.getItem('statisticData');
  if (!savedData) {
    var startingData = createStartingStatisticData(data);
    var startingDataToJson = JSON.stringify(startingData);
    localStorage.setItem('statisticData', startingDataToJson);
    result.push.apply(result, _toConsumableArray(startingData));
  } else {
    var currentData = JSON.parse(savedData);
    result.push.apply(result, _toConsumableArray(currentData));
  }
  return result;
};
var capitalizeFirstWord = function capitalizeFirstWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
var setGlobalValues = function setGlobalValues() {
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('mainSection', document.querySelector('.main'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('categoryName', document.querySelector('.category-name'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('cardsList', document.querySelector('.cards-list'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('hamburgerBtn', document.querySelector('.header-hamburger'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('headerNav', document.querySelector('.header-nav'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('headerMenu', document.querySelector('.header-menu'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('navMenuLinks', document.querySelectorAll('.header-menu__item-link'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('overlay', document.querySelector('.overlay'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('body', document.querySelector('body'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('headerLogo', document.querySelector('.header-logo__link'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('toggleBtn', document.querySelector('.toggle-button'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('playRepeatBtn', document.querySelector('.play-btn'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('scoreLine', document.querySelector('.score-line'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('modalWindow', document.querySelector('.modal-window'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('modalWindowText', document.querySelector('.modal-window__text'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('modalWindowIcon', document.querySelector('.modal-window__icon'));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('statisticData', createStatisticsData(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_5__["default"]));
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('isPlayMode', (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('toggleBtn').ariaPressed);
};
var resetCardsState = function resetCardsState() {
  var cards = document.querySelectorAll('.card-front');
  cards.forEach(function (card) {
    return card.classList.remove('inactive');
  });
};
var showStatTable = function showStatTable() {
  var statisticsPage = document.querySelector('.statistics-page');
  var mainSection = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('mainSection');
  var mainSectionContainer = mainSection.querySelector('.container');
  mainSectionContainer.classList.remove('appear');
  statisticsPage.classList.remove('slide-up');
  mainSectionContainer.classList.add('disappear');
  statisticsPage.classList.add('slide-down');
};
var hideStatTable = function hideStatTable() {
  var statisticsPage = document.querySelector('.statistics-page');
  if (statisticsPage.classList.contains('slide-down')) {
    var mainSection = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('mainSection');
    var mainSectionContainer = mainSection.querySelector('.container');
    statisticsPage.classList.remove('slide-down');
    statisticsPage.classList.add('slide-up');
    mainSectionContainer.classList.remove('disappear');
    mainSectionContainer.classList.add('appear');
  }
};
var resetCardsSoundsList = function resetCardsSoundsList() {
  var soundsList = createNewSoundsList();
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('soundsList', shuffleArray(soundsList));
};
var resetScoreLine = function resetScoreLine() {
  var scoreLine = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('scoreLine');
  scoreLine.innerHTML = '';
};
var updateMode = function updateMode() {
  var cardsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  var playMode = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('isPlayMode');
  (0,_components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__.resetPlayRepeatBtnState)();
  resetCardsState();
  resetCardsSoundsList();
  resetScoreLine();
  if (playMode === 'true') {
    cardsList.dataset.mode = 'play';
  } else {
    cardsList.dataset.mode = 'train';
  }
};
var createStatisticsTableHead = function createStatisticsTableHead(data) {
  var statisticsTableHead = createElement('thead');
  statisticsTableHead.classList.add('stat-table__head');
  var headerRow = createElement('tr');
  headerRow.classList.add('stat-table__head-row');
  headerRow.classList.add('table-row');
  var headerRowData = Object.keys(data[0]);
  headerRowData.forEach(function (key) {
    var headerRowTh = createElement('th');
    headerRowTh.classList.add('stat-table__head-row__cell');
    headerRowTh.classList.add('table-cell');
    headerRowTh.dataset.column = key;
    headerRowTh.dataset.sort = key === 'Category' || key === 'Word' || key === 'Translation' ? 'alph' : 'num';
    headerRowTh.textContent = key;
    headerRow.append(headerRowTh);
  });
  statisticsTableHead.append(headerRow);
  return statisticsTableHead;
};
var createStatisticsTableBody = function createStatisticsTableBody(data) {
  // create statistics table body
  var statisticsTableBody = createElement('tbody');
  statisticsTableBody.classList.add('stat-table__body');
  data.forEach(function (item) {
    var tBodyRow = createElement('tr');
    tBodyRow.classList.add('stat-table__body-row');
    tBodyRow.classList.add('table-row');
    var tBodyRowData = Object.values(item);
    var rowCategory = Object.values(item)[0];
    var rowWord = Object.values(item)[1];
    var headerRowData = Object.keys(data[0]);
    tBodyRow.dataset.row = rowWord;
    tBodyRowData.forEach(function (value, index) {
      var tBodyRowCell = createElement('td');
      tBodyRowCell.classList.add('stat-table__body-row__cell');
      tBodyRowCell.classList.add('table-cell');
      tBodyRowCell.dataset.category = rowCategory;
      tBodyRowCell.dataset.cell = headerRowData[index];
      tBodyRowCell.textContent = value;
      tBodyRow.append(tBodyRowCell);
    });
    statisticsTableBody.append(tBodyRow);
  });
  return statisticsTableBody;
};
var createStatisticsTable = function createStatisticsTable(data) {
  // create statistics table
  var statisticsTable = createElement('table');
  statisticsTable.classList.add('stat-table');

  // create statistics table head
  var statisticsTableHead = createStatisticsTableHead(data);

  // create statistics table body
  var statisticsTableBody = createStatisticsTableBody(data);
  statisticsTable.append(statisticsTableHead);
  statisticsTable.append(statisticsTableBody);
  return statisticsTable;
};
var setStatisticsTableFunctionality = function setStatisticsTableFunctionality() {
  var statTable = document.querySelector('.stat-table');
  var statTableHeader = statTable.querySelector('.stat-table__head');
  var statTableHeaderCells = statTable.querySelectorAll('.stat-table__head-row__cell');
  var statisticsData = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('statisticData');
  statTableHeader.addEventListener('click', function (event) {
    var target = event.target;
    var statTableBody = statTable.querySelector('.stat-table__body');
    var sortType = target.dataset.sort;
    var sortCategory = target.dataset.column;
    var sortCategoryCells = statTable.querySelectorAll("[data-cell='".concat(sortCategory, "']"));
    var sortCategoryCellsValues = Array.from(sortCategoryCells).map(function (cell) {
      return cell.textContent;
    });
    var areEmptyCells = sortCategoryCellsValues.every(function (item) {
      return item === '0' || item === 'n/e';
    });
    if (areEmptyCells) {
      return;
    }
    if (!target.classList.contains('ascend')) {
      statTableHeaderCells.forEach(function (item) {
        return item.classList.remove('ascend');
      });
      statisticsData.sort(function (a, b) {
        var num1 = a[[sortCategory]] === 'n/e' ? -1 : a[sortCategory];
        var num2 = b[[sortCategory]] === 'n/e' ? -1 : b[sortCategory];
        target.classList.add('ascend');
        if (sortType === 'alph') {
          return num1.localeCompare(num2);
        }
        return num2 - num1;
      });
    } else {
      statisticsData.reverse();
      target.classList.remove('ascend');
    }
    statTableBody.remove();
    statTable.append(createStatisticsTableBody(statisticsData));
  });
};
var updateStatisticsPageData = function updateStatisticsPageData(mode, card, result) {
  var savedData = localStorage.getItem('statisticData');
  var currentData = JSON.parse(savedData);
  var cardBackTitle = card.querySelector('.card-back__title').textContent;
  var currentItem = currentData.filter(function (item) {
    return item.Translation === cardBackTitle;
  })[0];
  if (mode === 'train') {
    currentItem.Trained += 1;
  }
  if (result) {
    currentItem.Correct += 1;
    currentItem['Accuracy %'] = percentCorrectAnswers(currentItem);
  } else {
    var cardListItems = Array.from(document.querySelectorAll('.card-list__item'));
    var currentSound = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('soundsList').at(-1);
    var currentCard = cardListItems.filter(function (item) {
      return item.dataset.sound === currentSound;
    })[0];
    var _currentData$filter = currentData.filter(function (item) {
      return item.Translation === currentCard.querySelector('.card-back__title').textContent;
    });
    var _currentData$filter2 = _slicedToArray(_currentData$filter, 1);
    currentItem = _currentData$filter2[0];
    currentItem.Incorrect += 1;
    currentItem['Accuracy %'] = percentCorrectAnswers(currentItem);
  }
  var currentDataToJson = JSON.stringify(currentData);
  localStorage.setItem('statisticData', currentDataToJson);
};
var createStartPageCardSet = function createStartPageCardSet(array) {
  var cardsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  var categoryName = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('categoryName');
  categoryName.textContent = 'Home';
  cardsList.classList.add('start-page');
  cardsList.dataset.category = 'main-menu';
  updateMode();
  clearCardsListContainer();
  array.forEach(function (element) {
    if (element.section !== 'home') {
      var imgPath = element.startImage;
      var imgAlt = element.sectionWords[0].alt;
      var cardTitle = element.sectionTitle;
      var cardItem = (0,_components_cardItem__WEBPACK_IMPORTED_MODULE_1__["default"])(imgPath, imgAlt, cardTitle, cardTitle);
      cardsList.append(cardItem);
    }
  });
};
var createDiffWordsSection = function createDiffWordsSection(array, section) {
  var cardsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  cardsList.classList.remove('start-page');
  var categoryName = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('categoryName');
  categoryName.textContent = section;
  cardsList.dataset.category = section;
  updateMode();
  clearCardsListContainer();
  array.forEach(function (item) {
    var imgPath = item.image;
    var imgAlt = item.alt;
    var cardSection = categoryName.textContent;
    var cardTitle = item.word;
    var cardTranslation = item.translation;
    var soundPath = item.audioSrc;
    var cardItem = (0,_components_cardItem__WEBPACK_IMPORTED_MODULE_1__["default"])(imgPath, imgAlt, cardTitle, cardSection, cardTranslation, soundPath);
    cardsList.append(cardItem);
  });
  resetCardsSoundsList();
};
var createCardsListSection = function createCardsListSection(array, section) {
  var cardsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  cardsList.classList.remove('start-page');
  var categoryName = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('categoryName');
  categoryName.textContent = section;
  cardsList.dataset.category = section;
  updateMode();
  clearCardsListContainer();
  array.forEach(function (element) {
    if (element.sectionTitle === section) {
      var sectionData = element.sectionWords;
      sectionData.forEach(function (item) {
        var imgPath = item.image;
        var imgAlt = item.alt;
        var cardSection = categoryName.textContent;
        var cardTitle = item.word;
        var cardTranslation = item.translation;
        var soundPath = item.audioSrc;
        var cardItem = (0,_components_cardItem__WEBPACK_IMPORTED_MODULE_1__["default"])(imgPath, imgAlt, cardTitle, cardSection, cardTranslation, soundPath);
        cardsList.append(cardItem);
      });
    }
  });
  resetCardsSoundsList();
};
var playSound = function playSound(element, soundPath) {
  var audio = new Audio(soundPath);
  var cardsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  var playRepeatBtn = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('playRepeatBtn');
  audio.play();
  if (element === playRepeatBtn) {
    playRepeatBtn.removeEventListener('click', _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__.playRepeatBtnFunctionality);
    audio.addEventListener('ended', function () {
      playRepeatBtn.addEventListener('click', _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__.playRepeatBtnFunctionality);
    });
  } else {
    cardsList.removeEventListener('click', _components_main__WEBPACK_IMPORTED_MODULE_4__.mainSectionFunctionality);
    audio.addEventListener('ended', function () {
      cardsList.addEventListener('click', _components_main__WEBPACK_IMPORTED_MODULE_4__.mainSectionFunctionality);
    });
  }
};
var rotateCard = function rotateCard(element) {
  if (!element.classList.contains('rotate')) {
    element.classList.add('rotate');
  }
};
var rotateBack = function rotateBack(element) {
  if (element.classList.contains('rotate')) {
    element.classList.remove('rotate');
  }
};
var trainModeFunctionality = function trainModeFunctionality(target, cardInner) {
  if (target.classList.contains('rotate-btn')) {
    rotateCard(cardInner);
    cardInner.addEventListener('mouseleave', function () {
      rotateBack(cardInner);
    });
  } else if (!cardInner.classList.contains('rotate')) {
    var currentCard = target.closest('.card-list__item');
    var soundPath = currentCard.dataset.sound;
    var card = target.closest('.card-list__item');
    playSound(card, soundPath);
    updateStatisticsPageData('train', currentCard);
  }
};
var addScoreIcon = function addScoreIcon(card, src) {
  if (!card.classList.contains('playing')) {
    var scoreIcon = (0,_components_scoreLineIcon__WEBPACK_IMPORTED_MODULE_3__["default"])(src);
    var scoreLine = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('scoreLine');
    scoreLine.prepend(scoreIcon);
  }
};


/***/ }),

/***/ "./src/js/utils/variables.js":
/*!***********************************!*\
  !*** ./src/js/utils/variables.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_VAR": () => (/* binding */ GET_VAR),
/* harmony export */   "SET_VAR": () => (/* binding */ SET_VAR)
/* harmony export */ });
var VARIABLES = {
  mainSection: 'initial value',
  categoryName: 'initial value',
  cardsList: 'initial value',
  soundsList: 'initial value',
  hamburgerBtn: 'initial value',
  headerNav: 'initial value',
  headerMenu: 'initial value',
  navMenuLinks: 'initial value',
  headerLogo: 'initial value',
  overlay: 'initial value',
  body: 'initial value',
  toggleBtn: 'initial value',
  isPlayMode: 'initial value',
  playRepeatBtn: 'initial value',
  scoreLine: 'initial value',
  modalWindow: 'initial value',
  modalWindowIcon: 'initial value',
  modalWindowText: 'initial value',
  modalWindowIconWin: 'assets/images/score-icons/win-icon.png',
  modalWindowIconLose: 'assets/images/score-icons/lose-icon.png',
  statisticData: [],
  repeatedDataSet: 'initial value'
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

/***/ "./src/assets/data/data.json":
/*!***********************************!*\
  !*** ./src/assets/data/data.json ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{section:'home',category:'main-menu'},{section:'clothes',startImage:'./assets/images/start-page-cards-img/v-sweater.png',linkPath:'#clothes',sectionTitle:'Clothes',sectionWords:[{word:'cap',translation:'шапка',image:'./assets/images/cards-images/clothes/a-cap.png',audioSrc:'assets/audio/clothes/cap.mp3',alt:'cap image'},{word:'jacket',translation:'куртка',image:'./assets/images/cards-images/clothes/a-jacket.png',audioSrc:'assets/audio/clothes/jacket.mp3',alt:'jacket image'},{word:'scarf',translation:'шарф',image:'./assets/images/cards-images/clothes/a-scarf.png',audioSrc:'assets/audio/clothes/scarf.mp3',alt:'scarf image'},{word:'shoes',translation:'ботинки',image:'./assets/images/cards-images/clothes/a-shoes.png',audioSrc:'assets/audio/clothes/shoes.mp3',alt:'shoes image'},{word:'blouse',translation:'блузка',image:'./assets/images/cards-images/clothes/v-blouse.png',audioSrc:'assets/audio/clothes/blouse.mp3',alt:'blouse image'},{word:'coat',translation:'пальто',image:'./assets/images/cards-images/clothes/v-coat.png',audioSrc:'assets/audio/clothes/coat.mp3',alt:'coat image'},{word:'dress',translation:'платье',image:'./assets/images/cards-images/clothes/v-dress.png',audioSrc:'assets/audio/clothes/dress.mp3',alt:'dress image'},{word:'shirt',translation:'рубашка',image:'./assets/images/cards-images/clothes/v-shirt.png',audioSrc:'assets/audio/clothes/shirt.mp3',alt:'shirt image'}]},{section:'colours',startImage:'./assets/images/start-page-cards-img/v-yellow.png',linkPath:'#colours',sectionTitle:'Colours',sectionWords:[{word:'black',translation:'черный',image:'./assets/images/cards-images/colours/v-black.png',audioSrc:'assets/audio/colours/black.mp3',alt:'black image'},{word:'blue',translation:'синий',image:'./assets/images/cards-images/colours/v-blue.png',audioSrc:'assets/audio/colours/blue.mp3',alt:'blue image'},{word:'brown',translation:'коричневый',image:'./assets/images/cards-images/colours/v-brown.png',audioSrc:'assets/audio/colours/brown.mp3',alt:'brown image'},{word:'green',translation:'зелёный',image:'./assets/images/cards-images/colours/v-green.png',audioSrc:'assets/audio/colours/green.mp3',alt:'green image'},{word:'grey',translation:'серый',image:'./assets/images/cards-images/colours/v-grey.png',audioSrc:'assets/audio/colours/grey.mp3',alt:'grey image'},{word:'orange',translation:'оранжевый',image:'./assets/images/cards-images/colours/v-orange-c.png',audioSrc:'assets/audio/colours/orange.mp3',alt:'orange image'},{word:'pink',translation:'розовый',image:'./assets/images/cards-images/colours/v-pink.png',audioSrc:'assets/audio/colours/pink.mp3',alt:'pink image'},{word:'red',translation:'красный',image:'./assets/images/cards-images/colours/v-red.png',audioSrc:'assets/audio/colours/red.mp3',alt:'red image'}]},{section:'family',startImage:'./assets/images/start-page-cards-img/v-family.png',linkPath:'#family',sectionTitle:'Family',sectionWords:[{word:'aunt',translation:'тетя',image:'./assets/images/cards-images/family/v-aunt.png',audioSrc:'assets/audio/family/aunt.mp3',alt:'aunt image'},{word:'brother',translation:'брат',image:'./assets/images/cards-images/family/v-brother.png',audioSrc:'assets/audio/family/brother.mp3',alt:'brother image'},{word:'daddy',translation:'папа',image:'./assets/images/cards-images/family/v-daddy.png',audioSrc:'assets/audio/family/daddy.mp3',alt:'daddy image'},{word:'grandma',translation:'бабушка',image:'./assets/images/cards-images/family/v-grandma.png',audioSrc:'assets/audio/family/grandma.mp3',alt:'grandma image'},{word:'grandpa',translation:'дедушка',image:'./assets/images/cards-images/family/v-grandpa.png',audioSrc:'assets/audio/family/grandpa.mp3',alt:'grandpa image'},{word:'mummy',translation:'мама',image:'./assets/images/cards-images/family/v-mummy.png',audioSrc:'assets/audio/family/mummy.mp3',alt:'mummy image'},{word:'sister',translation:'сестра',image:'./assets/images/cards-images/family/v-sister.png',audioSrc:'assets/audio/family/sister.mp3',alt:'sister image'},{word:'uncle',translation:'дядя',image:'./assets/images/cards-images/family/v-uncle.png',audioSrc:'assets/audio/family/uncle.mp3',alt:'uncle image'}]},{section:'food',startImage:'./assets/images/start-page-cards-img/a-hamburger.png',linkPath:'#food',sectionTitle:'Food',sectionWords:[{word:'egg',translation:'яйцо',image:'./assets/images/cards-images/food/a-egg.png',audioSrc:'assets/audio/food/egg.mp3',alt:'egg image'},{word:'ice cream',translation:'мороженое',image:'./assets/images/cards-images/food/a-icecream.png',audioSrc:'assets/audio/food/ice-cream.mp3',alt:'ice cream image'},{word:'bread',translation:'хлеб',image:'./assets/images/cards-images/food/v-bread.png',audioSrc:'assets/audio/food/bread.mp3',alt:'bread image'},{word:'butter',translation:'масло',image:'./assets/images/cards-images/food/v-butter.png',audioSrc:'assets/audio/food/butter.mp3',alt:'butter image'},{word:'cake',translation:'пирожное',image:'./assets/images/cards-images/food/v-cake.png',audioSrc:'assets/audio/food/cake.mp3',alt:'cake image'},{word:'cheese',translation:'сыр',image:'./assets/images/cards-images/food/v-cheese.png',audioSrc:'assets/audio/food/cheese.mp3',alt:'cheese image'},{word:'pizza',translation:'пицца',image:'./assets/images/cards-images/food/v-pizza.png',audioSrc:'assets/audio/food/pizza.mp3',alt:'pizza image'},{word:'sandwich',translation:'бутерброд',image:'./assets/images/cards-images/food/v-sandwich.png',audioSrc:'assets/audio/food/sandwich.mp3',alt:'sandwich image'}]},{section:'fruits',startImage:'./assets/images/start-page-cards-img/v-strawberry.png',linkPath:'#fruits',sectionTitle:'Fruits',sectionWords:[{word:'apple',translation:'яблоко',image:'./assets/images/cards-images/fruits/a-apple.png',audioSrc:'assets/audio/fruits/apple.mp3',alt:'apple image'},{word:'cherry',translation:'вишня',image:'./assets/images/cards-images/fruits/a-cherry.png',audioSrc:'assets/audio/fruits/cherry.mp3',alt:'cherry image'},{word:'grape',translation:'фигурное катание',image:'./assets/images/cards-images/fruits/a-grapes.png',audioSrc:'assets/audio/fruits/grape.mp3',alt:'grape image'},{word:'orange',translation:'апельсин',image:'./assets/images/cards-images/fruits/a-orange.png',audioSrc:'assets/audio/fruits/orange.mp3',alt:'orange image'},{word:'peach',translation:'персик',image:'./assets/images/cards-images/fruits/a-peach.png',audioSrc:'assets/audio/fruits/peach.mp3',alt:'peach image'},{word:'pineapple',translation:'ананас',image:'./assets/images/cards-images/fruits/a-pineapple.png',audioSrc:'assets/audio/fruits/pineapple.mp3',alt:'pineapple image'},{word:'banana',translation:'банан',image:'./assets/images/cards-images/fruits/v-banana.png',audioSrc:'assets/audio/fruits/banana.mp3',alt:'banana image'},{word:'lemon',translation:'лимон',image:'./assets/images/cards-images/fruits/v-lemon.png',audioSrc:'assets/audio/fruits/lemon.mp3',alt:'lemon image'}]},{section:'pets',startImage:'./assets/images/start-page-cards-img/v-pony.png',linkPath:'#pets',sectionTitle:'Pets',sectionWords:[{word:'hamster',translation:'хомяк',image:'./assets/images/cards-images/pets/a-hamster.png',audioSrc:'assets/audio/pets/hamster.mp3',alt:'hamster image'},{word:'parrot',translation:'попугай',image:'./assets/images/cards-images/pets/a-parrot.png',audioSrc:'assets/audio/pets/parrot.mp3',alt:'parrot image'},{word:'turtle',translation:'черепаха',image:'./assets/images/cards-images/pets/a-turtle.png',audioSrc:'assets/audio/pets/turtle.mp3',alt:'turtle image'},{word:'kitten',translation:'котёнок',image:'./assets/images/cards-images/pets/h-kitten.png',audioSrc:'assets/audio/pets/kitten.mp3',alt:'kitten image'},{word:'puppy',translation:'щенок',image:'./assets/images/cards-images/pets/h-puppy.png',audioSrc:'assets/audio/pets/puppy.mp3',alt:'puppy image'},{word:'ferret',translation:'хорек',image:'./assets/images/cards-images/pets/v-ferret.png',audioSrc:'assets/audio/pets/ferret.mp3',alt:'ferret image'},{word:'fish',translation:'рыба',image:'./assets/images/cards-images/pets/v-fish.png',audioSrc:'assets/audio/pets/fish.mp3',alt:'fish image'},{word:'mouse',translation:'мышь',image:'./assets/images/cards-images/pets/v-mouse.png',audioSrc:'assets/audio/pets/mouse.mp3',alt:'mouse image'}]},{section:'school',startImage:'./assets/images/start-page-cards-img/v-pupil.png',linkPath:'#school',sectionTitle:'School',sectionWords:[{word:'board',translation:'доска',image:'./assets/images/cards-images/school/v-board.png',audioSrc:'assets/audio/school/board.mp3',alt:'board image'},{word:'book',translation:'книга',image:'./assets/images/cards-images/school/v-book.png',audioSrc:'assets/audio/school/book.mp3',alt:'book image'},{word:'calculator',translation:'черепаха',image:'./assets/images/cards-images/school/v-calculator.png',audioSrc:'assets/audio/school/calculator.mp3',alt:'calculator image'},{word:'classroom',translation:'школьный класс',image:'./assets/images/cards-images/school/v-classroom.png',audioSrc:'assets/audio/school/classroom.mp3',alt:'classroom image'},{word:'map',translation:'карта',image:'./assets/images/cards-images/school/v-map.png',audioSrc:'assets/audio/school/map.mp3',alt:'map image'},{word:'notebook',translation:'тетрадь',image:'./assets/images/cards-images/school/v-notebook.png',audioSrc:'assets/audio/school/notebook.mp3',alt:'notebook image'},{word:'schoolbag',translation:'портфель',image:'./assets/images/cards-images/school/v-schoolbag.png',audioSrc:'assets/audio/school/schoolbag.mp3',alt:'schoolbag image'},{word:'teacher',translation:'учитель',image:'./assets/images/cards-images/school/v-teacher.png',audioSrc:'assets/audio/school/teacher.mp3',alt:'teacher image'}]},{section:'sport',startImage:'./assets/images/start-page-cards-img/v-tennis.png',linkPath:'#sport',sectionTitle:'Sport',sectionWords:[{word:'basketball',translation:'баскетбол',image:'./assets/images/cards-images/sport/v-basketball.png',audioSrc:'assets/audio/sport/basketball.mp3',alt:'basketball image'},{word:'cycling',translation:'езда на велосипеде',image:'./assets/images/cards-images/sport/v-cycling.png',audioSrc:'assets/audio/sport/cycling.mp3',alt:'cycling image'},{word:'figure skating',translation:'фигурное катание',image:'./assets/images/cards-images/sport/v-figure-skating.png',audioSrc:'assets/audio/sport/figure-skating.mp3',alt:'figure skating image'},{word:'football',translation:'футбол',image:'./assets/images/cards-images/sport/v-football.png',audioSrc:'assets/audio/sport/football.mp3',alt:'football image'},{word:'hockey',translation:'хоккей',image:'./assets/images/cards-images/sport/v-hockey.png',audioSrc:'assets/audio/sport/hockey.mp3',alt:'hockey image'},{word:'skiing',translation:'лыжный спорт',image:'./assets/images/cards-images/sport/v-skiing.png',audioSrc:'assets/audio/sport/skiing.mp3',alt:'skiing image'},{word:'swimming',translation:'плавание',image:'./assets/images/cards-images/sport/v-swimming.png',audioSrc:'assets/audio/sport/swimming.mp3',alt:'swimming image'},{word:'boxing',translation:'бокс',image:'./assets/images/cards-images/sport/v-boxing.png',audioSrc:'assets/audio/sport/boxing.mp3',alt:'boxing image'}]}]);

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/data/data.json */ "./src/assets/data/data.json");
/* harmony import */ var _components_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/overlay */ "./src/js/components/overlay.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ "./src/js/components/main.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _components_modalWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modalWindow */ "./src/js/components/modalWindow.js");
/* harmony import */ var _components_statisticsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/statisticsPage */ "./src/js/components/statisticsPage.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/events */ "./src/js/utils/events.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/variables */ "./src/js/utils/variables.js");











var appWrapper = document.querySelector('.wrapper');
appWrapper.append((0,_components_overlay__WEBPACK_IMPORTED_MODULE_2__.createOverlay)());
appWrapper.append((0,_components_header__WEBPACK_IMPORTED_MODULE_3__["default"])());
appWrapper.append((0,_components_modalWindow__WEBPACK_IMPORTED_MODULE_6__.createModalWindow)());
appWrapper.append((0,_components_main__WEBPACK_IMPORTED_MODULE_4__.createMain)());
appWrapper.append((0,_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());
document.addEventListener('DOMContentLoaded', function () {
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_9__.setGlobalValues)();
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_9__.createStartPageCardSet)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var mainSection = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_10__.GET_VAR)('mainSection');
  mainSection.append((0,_components_statisticsPage__WEBPACK_IMPORTED_MODULE_7__.createStatisticsPage)());
  (0,_utils_events__WEBPACK_IMPORTED_MODULE_8__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbERpRyw4REFBZSxFQUFFO0VBQ2pCekcscUVBQXNCLENBQUNoQiw4REFBSSxDQUFDO0VBQzVCLElBQU15TixXQUFXLEdBQUd2TSwwREFBTyxDQUFDLGFBQWEsQ0FBQztFQUMxQ3VNLFdBQVcsQ0FBQ3pPLE1BQU0sQ0FBQ3VLLGdGQUFvQixFQUFFLENBQUM7RUFDMUNpQix5REFBaUIsRUFBRTtBQUNyQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9jYXJkSXRlbS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ28uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsV2luZG93LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51QnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51SXRlbS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc2NvcmVMaW5lSWNvbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RhdGlzdGljc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZUJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2Fzc2V0cy9kYXRhL2RhdGEuanNvbiIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzYxNSIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVDYXJkSXRlbSA9IChpbWdQYXRoLCBpbWdBbHQsIGNhcmRUaXRsZSwgY2FyZFNlY3Rpb24sIGNhcmRUcmFuc2xhdGlvbiA9ICcnLCBzb3VuZFBhdGggPSAnJykgPT4ge1xuICAvLyBjcmVhdGUgY2FyZCBpdGVtXG4gIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkLWxpc3RfX2l0ZW0nKTtcbiAgY2FyZEl0ZW0uZGF0YXNldC5zZWN0aW9uID0gY2FyZFNlY3Rpb247XG4gIGNhcmRJdGVtLmRhdGFzZXQuc291bmQgPSBzb3VuZFBhdGg7XG5cbiAgLy8gY3JlYXRlIGNhcmQgaW5uZXJcbiAgY29uc3QgY2FyZElubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRJbm5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWlubmVyJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgc2lkZVxuICBjb25zdCBjYXJkRnJvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEZyb250LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnQnKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCBpbWFnZSBjb250YWluZXJcbiAgY29uc3QgY2FyZEZyb250SW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19waWMnKTtcbiAgY2FyZEZyb250SW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcGljJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgaW1hZ2VcbiAgY29uc3QgY2FyZEZyb250SW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNhcmRGcm9udEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19waWMtaW1nJyk7XG4gIGNhcmRGcm9udEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICBjYXJkRnJvbnRJbWcuc3JjID0gaW1nUGF0aDtcbiAgY2FyZEZyb250SW1nLmFsdCA9IGltZ0FsdDtcblxuICBjYXJkRnJvbnRJbWdDb250YWluZXIuYXBwZW5kKGNhcmRGcm9udEltZyk7XG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250SW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCB0aXRsZVxuICBjb25zdCBjYXJkRnJvbnRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNhcmRGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnRfX3RpdGxlJyk7XG4gIGNhcmRGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgY2FyZEZyb250VGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVGl0bGU7XG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250VGl0bGUpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHJvdGF0ZSBidXR0b25cbiAgY29uc3QgY2FyZEZyb250Um90YXRlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhcmRGcm9udFJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19yb3RhdGUnKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idG4nKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgY2FyZEZyb250Um90YXRlQnRuLnRleHRDb250ZW50ID0gJ3JvdGF0ZSBidXR0b24nO1xuXG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250Um90YXRlQnRuKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIHNpZGVcbiAgY29uc3QgY2FyZEJhY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJhY2suY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayBpbWFnZSBjb250YWluZXJcbiAgY29uc3QgY2FyZEJhY2tJbWdDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJhY2tJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrX19waWMnKTtcbiAgY2FyZEJhY2tJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1waWMnKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIGltYWdlXG4gIGNvbnN0IGNhcmRCYWNrSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNhcmRCYWNrSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFja19fcGljLWltZycpO1xuICBjYXJkQmFja0ltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICBjYXJkQmFja0ltZy5zcmMgPSBpbWdQYXRoO1xuICBjYXJkQmFja0ltZy5hbHQgPSBpbWdBbHQ7XG5cbiAgY2FyZEJhY2tJbWdDb250YWluZXIuYXBwZW5kKGNhcmRCYWNrSW1nKTtcblxuICBjYXJkQmFjay5hcHBlbmQoY2FyZEJhY2tJbWdDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgdGl0bGVcbiAgY29uc3QgY2FyZEJhY2tUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNhcmRCYWNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrX190aXRsZScpO1xuICBjYXJkQmFja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgY2FyZEJhY2tUaXRsZS50ZXh0Q29udGVudCA9IGNhcmRUcmFuc2xhdGlvbjtcblxuICBjYXJkQmFjay5hcHBlbmQoY2FyZEJhY2tUaXRsZSk7XG5cbiAgY2FyZElubmVyLmFwcGVuZChjYXJkRnJvbnQpO1xuICBjYXJkSW5uZXIuYXBwZW5kKGNhcmRCYWNrKTtcblxuICBjYXJkSXRlbS5hcHBlbmQoY2FyZElubmVyKTtcbiAgcmV0dXJuIGNhcmRJdGVtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZEl0ZW07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgZm9vdGVyXG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAvLyBjcmVhdGUgZm9vdGVyIHBhcmFncmFwaFxuICBjb25zdCBwYXJhZ3JhcGggPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdmb290ZXItdGV4dCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSAnO1xuXG4gIC8vIGNyZWF0ZSBmb290ZXIgcGFyYWdyYXBoIGxpbmtcbiAgY29uc3QgcGFyYWdyYXBoTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcGFyYWdyYXBoTGluay5jbGFzc0xpc3QuYWRkKCdmb290ZXItdGV4dF9fbGluaycpO1xuICBwYXJhZ3JhcGhMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICBwYXJhZ3JhcGhMaW5rLnRleHRDb250ZW50ID0gJ0FudG9uIFN1a2hhZG9sZXRzJztcbiAgcGFyYWdyYXBoTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9TdWhvZG9sZWNBJztcblxuICBwYXJhZ3JhcGguYXBwZW5kKHBhcmFncmFwaExpbmspO1xuXG4gIC8vIGNyZWF0ZSBmb290ZXIgY29udGFpbmVyXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZChwYXJhZ3JhcGgpO1xuXG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kKGZvb3RlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7XG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBjcmVhdGVOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcbmltcG9ydCB7IGNyZWF0ZUxvZ28gfSBmcm9tICcuL2xvZ28nO1xuaW1wb3J0IHsgY3JlYXRlVG9nZ2xlIH0gZnJvbSAnLi90b2dnbGVCdG4nO1xuaW1wb3J0IHsgY3JlYXRlTmF2TWVudUJ0biB9IGZyb20gJy4vbmF2TWVudUJ0bic7XG5pbXBvcnQgeyBjcmVhdGVTdGF0aXN0aWNzQnRuIH0gZnJvbSAnLi9zdGF0aXN0aWNzQnRuJztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBsb2dvXG4gIGNvbnN0IGhlYWRlckxvZ28gPSBjcmVhdGVMb2dvKCdFbmdsaXNoIGZvciBraWRzJywgJyNob21lJyk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBidXR0b25zIGNvbnRhaW5lclxuICBjb25zdCBoZWFkZXJCdG5zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIHRvZ2dsZVxuICBjb25zdCB0b2dnbGVCdG4gPSBjcmVhdGVUb2dnbGUoKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIHN0YXRpc3RpY3MgYnV0dG9uXG4gIGNvbnN0IHN0YXRCdG4gPSBjcmVhdGVTdGF0aXN0aWNzQnRuKCk7XG5cbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5hcHBlbmQodG9nZ2xlQnRuKTtcbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5hcHBlbmQoc3RhdEJ0bik7XG5cbiAgLy8gY3JlYXRlIG5hdlxuICBjb25zdCBoZWFkZXJOYXYgPSBjcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgaGVhZGVyTmF2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1uYXYnKTtcblxuICAvLyBjcmVhdGUgbmF2IG1lbnUgYnV0dG9uXG4gIGNvbnN0IG5hdk1lbnVCdG4gPSBjcmVhdGVOYXZNZW51QnRuKCk7XG5cbiAgLy8gY3JlYXRlIG5hdiBtZW51XG4gIGNvbnN0IG5hdmlnYXRpb25NZW51ID0gY3JlYXRlTmF2TWVudShkYXRhKTtcblxuICBoZWFkZXJOYXYuYXBwZW5kKG5hdk1lbnVCdG4pO1xuICBoZWFkZXJOYXYuYXBwZW5kKG5hdmlnYXRpb25NZW51KTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGNvbnRhaW5lclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTmF2KTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJMb2dvKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJCdG5zQ29udGFpbmVyKTtcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmQoaGVhZGVyQ29udGFpbmVyKTtcblxuICByZXR1cm4gaGVhZGVyRWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQsIGhpZGVTdGF0VGFibGUgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVMb2dvID0gKGxvZ29UZXh0LCBsb2dvSHJlZikgPT4ge1xuICAvLyBjcmVhdGUgbG9nb1xuICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuXG4gIGNvbnN0IGhlYWRlckxvZ29MaW5rID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBoZWFkZXJMb2dvTGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nb19fbGluaycpO1xuICBoZWFkZXJMb2dvTGluay50ZXh0Q29udGVudCA9IGxvZ29UZXh0O1xuICBoZWFkZXJMb2dvTGluay5ocmVmID0gbG9nb0hyZWY7XG5cbiAgaGVhZGVyTG9nby5hcHBlbmQoaGVhZGVyTG9nb0xpbmspO1xuXG4gIHJldHVybiBoZWFkZXJMb2dvO1xufTtcblxuY29uc3QgbG9nb0Z1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGhpZGVTdGF0VGFibGUoKTtcbiAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbn07XG5cbmNvbnN0IHNldExvZ29FdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJMb2dvID0gR0VUX1ZBUignaGVhZGVyTG9nbycpO1xuICBoZWFkZXJMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb0Z1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTG9nbywgc2V0TG9nb0V2ZW50TGlzdGVuZXIgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbiwgaXNNYWluTWVudSwgaXNDYXJkLCBpc1RyYWluTW9kZSxcbiAgaXNQbGF5TW9kZSwgdHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSwgaXNHYW1lU3RhcnRlZCxcbiAgaXNBY3RpdmVDYXJkLCB1cGRhdGVTb3VuZExpc3QsIGFkZFNjb3JlSWNvbiwgcGxheVNvdW5kLCBpc0dhbWVPdmVyLFxuICBpc0dhbWVPdmVyU3VjY2VzcywgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUgfSBmcm9tICcuL25hdk1lbnUnO1xuaW1wb3J0IHsgc2hvd092ZXJsYXkgfSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IHsgY3JlYXRlUGxheVJlcGVhdEJ0biwgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuL3BsYXlSZXBlYXRCdG4nO1xuaW1wb3J0IHsgc2hvd01vZGFsV2luZG93LCBoaWRlTW9kYWxXaW5kb3cgfSBmcm9tICcuL21vZGFsV2luZG93JztcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIG1haW4gZWxlbWVudFxuICBjb25zdCBtYWluRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIC8vIGNyZWF0ZSBtYWluIGNvbnRhaW5lclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgLy8gY3JlYXRlIHNjb3JlIGxpbmVcbiAgY29uc3Qgc2NvcmVMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjb3JlTGluZS5jbGFzc0xpc3QuYWRkKCdzY29yZS1saW5lJyk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoc2NvcmVMaW5lKTtcblxuICAvLyBjcmVhdGUgY2F0ZWdvcnkgbmFtZVxuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBjcmVhdGVFbGVtZW50KCdoMicpO1xuICBjYXRlZ29yeU5hbWUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktbmFtZScpO1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSAnJztcblxuICAvLyBjYXJkcyBsaXN0XG4gIGNvbnN0IGNhcmRMaXN0ID0gY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY2FyZExpc3QuY2xhc3NMaXN0LmFkZCgnY2FyZHMtbGlzdCcpO1xuICBjYXJkTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gJyc7XG4gIGNhcmRMaXN0LmRhdGFzZXQubW9kZSA9ICcnO1xuXG4gIC8vIGNyZWF0ZSBwbGF5UmVwZWF0IGJ1dHRvblxuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gY3JlYXRlUGxheVJlcGVhdEJ0bigpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKGNhdGVnb3J5TmFtZSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKGNhcmRMaXN0KTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQocGxheVJlcGVhdEJ0bik7XG5cbiAgbWFpbkVsZW1lbnQuYXBwZW5kKG1haW5Db250YWluZXIpO1xuXG4gIHJldHVybiBtYWluRWxlbWVudDtcbn07XG5cbmNvbnN0IG1haW5NZW51RnVuY3Rpb25hbGl0eSA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgeyBzZWN0aW9uIH0gPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpLmRhdGFzZXQ7XG4gIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24oZGF0YSwgc2VjdGlvbik7XG4gIHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlKHNlY3Rpb24pO1xufTtcblxuY29uc3QgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IGNhcmRJbm5lciA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1pbm5lcicpO1xuICBpZiAoaXNNYWluTWVudShjYXJkc0xpc3QpICYmIGlzQ2FyZCh0YXJnZXQpKSB7XG4gICAgbWFpbk1lbnVGdW5jdGlvbmFsaXR5KHRhcmdldCk7XG4gIH0gZWxzZSBpZiAoIWlzTWFpbk1lbnUoY2FyZHNMaXN0KSAmJiBpc1RyYWluTW9kZShjYXJkc0xpc3QpICYmIGlzQ2FyZCh0YXJnZXQpKSB7XG4gICAgdHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSh0YXJnZXQsIGNhcmRJbm5lcik7XG4gIH0gZWxzZSBpZiAoIWlzTWFpbk1lbnUoY2FyZHNMaXN0KSAmJiBpc1BsYXlNb2RlKGNhcmRzTGlzdCkgJiYgaXNDYXJkKHRhcmdldClcbiAgICAmJiBpc0dhbWVTdGFydGVkKCkpIHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG4gICAgY29uc3QgY3VycmVudENhcmRGcm9udCA9IGN1cnJlbnRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWZyb250Jyk7XG4gICAgY29uc3QgY3VycmVudENhcmRTb3VuZCA9IGN1cnJlbnRDYXJkLmRhdGFzZXQuc291bmQ7XG4gICAgY29uc3QgY3VycmVudFNvdW5kID0gR0VUX1ZBUignc291bmRzTGlzdCcpLmF0KC0xKTtcbiAgICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9jb3JyZWN0LWNob2ljZS5tcDMnO1xuICAgIGNvbnN0IHN1Y2Nlc3NTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9zdWNjZXNzLm1wMyc7XG4gICAgY29uc3QgY29ycmVjdEljb25TcmMgPSAnYXNzZXRzL2ltYWdlcy9zY29yZS1pY29ucy9jb3JyZWN0LnBuZyc7XG4gICAgY29uc3Qgd3JvbmdJY29uU3JjID0gJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvd3JvbmcucG5nJztcbiAgICBjb25zdCB3cm9uZ0Fuc3dlclNvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL25lZ2F0aXZlX2JlZXBzLm1wMyc7XG4gICAgY29uc3QgZmFpbHVyZVNvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL2ZhaWx1cmUubXAzJztcbiAgICBpZiAoaXNBY3RpdmVDYXJkKGN1cnJlbnRDYXJkRnJvbnQpICYmICFwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5jb250YWlucygncGxheWluZycpKSB7XG4gICAgICB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEoJ3BsYXknLCBjdXJyZW50Q2FyZCwgY3VycmVudENhcmRTb3VuZCA9PT0gY3VycmVudFNvdW5kKTtcbiAgICAgIGlmIChjdXJyZW50Q2FyZFNvdW5kID09PSBjdXJyZW50U291bmQpIHtcbiAgICAgICAgY3VycmVudENhcmRGcm9udC5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICBhZGRTY29yZUljb24oY3VycmVudENhcmQsIGNvcnJlY3RJY29uU3JjKTtcbiAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBjb3JyZWN0QW5zd2VyU291bmQpO1xuICAgICAgICB1cGRhdGVTb3VuZExpc3QoKTtcbiAgICAgICAgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkocGxheVJlcGVhdEJ0bik7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICBzaG93T3ZlcmxheSgpO1xuICAgICAgICAgIGlmIChpc0dhbWVPdmVyU3VjY2VzcygpKSB7XG4gICAgICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIHN1Y2Nlc3NTb3VuZCk7XG4gICAgICAgICAgICBzaG93TW9kYWxXaW5kb3coKTtcbiAgICAgICAgICAgIGhpZGVNb2RhbFdpbmRvdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIGZhaWx1cmVTb3VuZCk7XG4gICAgICAgICAgICBzaG93TW9kYWxXaW5kb3coKTtcbiAgICAgICAgICAgIGhpZGVNb2RhbFdpbmRvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkU2NvcmVJY29uKGN1cnJlbnRDYXJkLCB3cm9uZ0ljb25TcmMpO1xuICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIHdyb25nQW5zd2VyU291bmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY2FyZHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU1haW4sIG1haW5NZW51RnVuY3Rpb25hbGl0eSwgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5LFxuICBzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgaXNHYW1lT3ZlclN1Y2Nlc3MsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBoaWRlT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XG5cbmNvbnN0IGNyZWF0ZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3cnKTtcblxuICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X19pY29uJyk7XG4gIGljb24uc3JjID0gJyc7XG4gIGljb24uYWx0ID0gJ2ljb24nO1xuXG4gIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X190ZXh0Jyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnJztcblxuICBtb2RhbFdpbmRvdy5hcHBlbmQoaWNvbik7XG4gIG1vZGFsV2luZG93LmFwcGVuZCh0ZXh0KTtcblxuICByZXR1cm4gbW9kYWxXaW5kb3c7XG59O1xuXG5jb25zdCBzaG93TW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsV2luZG93ID0gR0VUX1ZBUignbW9kYWxXaW5kb3cnKTtcbiAgY29uc3QgbW9kYWxXaW5kb3dJY29uID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uJyk7XG4gIGNvbnN0IG1vZGFsV2luZG93VGV4dCA9IEdFVF9WQVIoJ21vZGFsV2luZG93VGV4dCcpO1xuICBpZiAoaXNHYW1lT3ZlclN1Y2Nlc3MoKSkge1xuICAgIG1vZGFsV2luZG93SWNvbi5zcmMgPSBHRVRfVkFSKCdtb2RhbFdpbmRvd0ljb25XaW4nKTtcbiAgICBtb2RhbFdpbmRvd1RleHQudGV4dENvbnRlbnQgPSAnWW91IGFyZSB3aW4hJztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfSBlbHNlIHtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uTG9zZScpO1xuICAgIG1vZGFsV2luZG93VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgYXJlIGxvc2UhJztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhcicpO1xuICAgIGhpZGVPdmVybGF5KCk7XG4gICAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgfSwgMzAwMCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdywgc2hvd01vZGFsV2luZG93LCBoaWRlTW9kYWxXaW5kb3cgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQsIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24sXG4gIGhpZGVTdGF0VGFibGUsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgY3JlYXRlTmF2TWVudUl0ZW0gZnJvbSAnLi9uYXZNZW51SXRlbSc7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlTmF2TWVudSA9IChkYXRhU2V0KSA9PiB7XG4gIC8vIGNyZWF0ZSBuYXYgdWxcbiAgY29uc3QgbmF2TWVudVVsID0gY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2TWVudVVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhU2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbmF2TWVudVVsLmFwcGVuZChjcmVhdGVOYXZNZW51SXRlbShkYXRhW2ldLnNlY3Rpb24pKTtcbiAgfVxuXG4gIHJldHVybiBuYXZNZW51VWw7XG59O1xuXG5jb25zdCBvcGVuTmF2TWVudSA9IChoZWFkZXJOYXYpID0+IHtcbiAgY29uc3QgaGVhZGVyTWVudSA9IEdFVF9WQVIoJ2hlYWRlck1lbnUnKTtcbiAgY29uc3QgbmF2TWVudUxpbmtzID0gR0VUX1ZBUignbmF2TWVudUxpbmtzJyk7XG4gIG5hdk1lbnVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay50YWJJbmRleCA9IDA7XG4gIH0pO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW91dCcpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluJyk7XG59O1xuXG5jb25zdCBjbG9zZU5hdk1lbnUgPSAoaGVhZGVyTmF2KSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLWluJyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnc2xpZGUtb3V0Jyk7XG4gIG5hdk1lbnVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay50YWJJbmRleCA9IC0xO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldE5hdk1lbnVBY3RpdmVTdGF0ZSA9IChsaW5rcywgY2F0ZWdvcnkpID0+IHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGxpbmtTZWN0aW9uID0gbGluay5kYXRhc2V0LnNlY3Rpb247XG4gICAgaWYgKGxpbmtTZWN0aW9uID09PSBjYXRlZ29yeSkge1xuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlTmF2TWVudUFjdGl2ZVN0YXRlID0gKGxpbmtzKSA9PiB7XG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICByZW1vdmVOYXZNZW51QWN0aXZlU3RhdGUobmF2TWVudUxpbmtzKTtcbiAgc2V0TmF2TWVudUFjdGl2ZVN0YXRlKG5hdk1lbnVMaW5rcywgY2F0ZWdvcnkpO1xufTtcblxuY29uc3QgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHkgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY29uc3QgaGFtYnVyZ2VyQnRuID0gR0VUX1ZBUignaGFtYnVyZ2VyQnRuJyk7XG4gIGNvbnN0IHsgc2VjdGlvbiB9ID0gdGFyZ2V0LmRhdGFzZXQ7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XG4gIGhpZGVTdGF0VGFibGUoKTtcbiAgaWYgKHNlY3Rpb24gPT09ICdIb21lJykge1xuICAgIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG4gICAgaGFtYnVyZ2VyQnRuLmNsaWNrKCk7XG4gIH0gZWxzZSBpZiAoc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24oZGF0YSwgc2VjdGlvbik7XG4gICAgaGFtYnVyZ2VyQnRuLmNsaWNrKCk7XG4gIH1cbiAgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUoY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50KTtcbn07XG5cbmNvbnN0IHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJNZW51ID0gR0VUX1ZBUignaGVhZGVyTWVudScpO1xuICBoZWFkZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTmF2TWVudSwgb3Blbk5hdk1lbnUsIGNsb3NlTmF2TWVudSwgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHksXG4gIHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyLCB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgc2hvd092ZXJsYXksIGhpZGVPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7IG9wZW5OYXZNZW51LCBjbG9zZU5hdk1lbnUgfSBmcm9tICcuL25hdk1lbnUnO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51QnRuID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IGJ1dHRvblxuICBjb25zdCBuYXZNZW51QnRuID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBuYXZNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1oYW1idXJnZXInKTtcbiAgbmF2TWVudUJ0bi5ocmVmID0gJyMnO1xuXG4gIGNvbnN0IHNwYW4xID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzcGFuMiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3Qgc3BhbjMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjEpO1xuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMik7XG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4zKTtcblxuICByZXR1cm4gbmF2TWVudUJ0bjtcbn07XG5cbmNvbnN0IG5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBoYW1idXJnZXJCdG4gPSBHRVRfVkFSKCdoYW1idXJnZXJCdG4nKTtcbiAgY29uc3QgaGVhZGVyTmF2ID0gR0VUX1ZBUignaGVhZGVyTmF2Jyk7XG4gIGhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaGVhZGVyTmF2LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICBjbG9zZU5hdk1lbnUoaGVhZGVyTmF2KTtcbiAgICAgIGhpZGVPdmVybGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5OYXZNZW51KGhlYWRlck5hdik7XG4gICAgICBzaG93T3ZlcmxheSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVOYXZNZW51QnRuLCBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjYXBpdGFsaXplRmlyc3RXb3JkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlTmF2TWVudUl0ZW0gPSAobGlua05hbWUpID0+IHtcbiAgLy8gY3JlYXRlIGxpXG4gIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0nKTtcblxuICAvLyBjcmVhdGUgbWVudSBsaW5rXG4gIGNvbnN0IGxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpO1xuICBsaW5rLmhyZWYgPSBgIyR7bGlua05hbWV9YDtcbiAgbGluay5kYXRhc2V0LnNlY3Rpb24gPSBjYXBpdGFsaXplRmlyc3RXb3JkKGxpbmtOYW1lKTtcbiAgbGluay50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuICBsaW5rLnRhYkluZGV4ID0gLTE7XG5cbiAgbGkuYXBwZW5kKGxpbmspO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdk1lbnVJdGVtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgY2xvc2VOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcblxuY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIG92ZXJsYXkgZWxlbWVudFxuICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xufTtcblxuY29uc3QgaGlkZU92ZXJsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBHRVRfVkFSKCdvdmVybGF5Jyk7XG4gIGNvbnN0IGJvZHkgPSBHRVRfVkFSKCdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbn07XG5cbmNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gR0VUX1ZBUignb3ZlcmxheScpO1xuICBjb25zdCBib2R5ID0gR0VUX1ZBUignYm9keScpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG59O1xuXG5jb25zdCBvdmVybGF5RnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IEdFVF9WQVIoJ292ZXJsYXknKTtcbiAgY29uc3QgaGVhZGVyTmF2ID0gR0VUX1ZBUignaGVhZGVyTmF2Jyk7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhlYWRlck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgIGNsb3NlTmF2TWVudShoZWFkZXJOYXYpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVPdmVybGF5LCBzaG93T3ZlcmxheSwgaGlkZU92ZXJsYXksIG92ZXJsYXlGdW5jdGlvbmFsaXR5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgcGxheVNvdW5kIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVQbGF5UmVwZWF0QnRuID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXktYnRuJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdwbGF5JztcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGNvbnN0IHNvdW5kc0xpc3QgPSBHRVRfVkFSKCdzb3VuZHNMaXN0Jyk7XG4gIGNvbnN0IGN1cnJlbnRTb3VuZCA9IHNvdW5kc0xpc3QuYXQoLTEpO1xuICBpZiAoc291bmRzTGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgcGxheVNvdW5kKHBsYXlSZXBlYXRCdG4sIGN1cnJlbnRTb3VuZCk7XG4gIGlmICghcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlcGVhdCcpKSB7XG4gICAgcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQnKTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGlmIChwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0JykpIHtcbiAgICBwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcGVhdCcpO1xuICB9XG59O1xuXG5jb25zdCBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgcGxheVJlcGVhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVBsYXlSZXBlYXRCdG4sIHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5LCByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSxcbiAgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlU2NvcmVMaW5lSWNvbiA9IChzcmMpID0+IHtcbiAgY29uc3Qgc2NvcmVJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNjb3JlSWNvbi5jbGFzc0xpc3QuYWRkKCdzY29yZS1saW5lX19pY29uJyk7XG4gIHNjb3JlSWNvbi5zcmMgPSBzcmM7XG4gIHNjb3JlSWNvbi5hbHQgPSAnaWNvbic7XG5cbiAgcmV0dXJuIHNjb3JlSWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNjb3JlTGluZUljb247XG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3RhdGlzdGljc1RhYmxlLCBzZXRHbG9iYWxWYWx1ZXMsXG4gIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHksIHNob3dTdGF0VGFibGUsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSLCBTRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuLy8gY3JlYXRlIGhlYWRlciBzdGF0aXN0aWNzIGJ1dHRvblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc0J0biA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgc3RhdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLWJ1dHRvbicpO1xuICBzdGF0QnRuLnRleHRDb250ZW50ID0gJ1N0YXRpc3RpY3MnO1xuXG4gIHJldHVybiBzdGF0QnRuO1xufTtcblxuY29uc3Qgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1idXR0b24nKTtcbiAgc3RhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRHbG9iYWxWYWx1ZXMoKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLXBhZ2UnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IHN0YXRpc3RpY3NQYWdlLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZScpO1xuICAgIGNvbnN0IHN0YXRpc3RpY0RhdGEgPSBHRVRfVkFSKCdzdGF0aXN0aWNEYXRhJykuc2xpY2UoKTtcbiAgICBzdGF0aXN0aWNzVGFibGUucmVtb3ZlKCk7XG4gICAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNEYXRhKSk7XG4gICAgY29uc3QgcmVwZWF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgICBzdGF0aXN0aWNEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGVsZW0xID0gYVsnQWNjdXJhY3kgJSddO1xuICAgICAgY29uc3QgZWxlbTIgPSBiWydBY2N1cmFjeSAlJ107XG5cbiAgICAgIHJldHVybiBlbGVtMSAtIGVsZW0yO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlcGVhdGVkRGF0YSA9IHN0YXRpc3RpY0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtWydBY2N1cmFjeSAlJ10gIT09ICduL2UnICYmIGl0ZW1bJ0FjY3VyYWN5ICUnXSAhPT0gMTAwKVxuICAgICAgLnNsaWNlKDAsIDgpXG4gICAgICAubWFwKChlbGVtKSA9PiBlbGVtLlRyYW5zbGF0aW9uKTtcblxuICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNldCA9IGRhdGFcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VjdGlvbldvcmRzKVxuICAgICAgLm1hcCgoZWxlbSkgPT4gZWxlbS5zZWN0aW9uV29yZHMpXG4gICAgICAuZmxhdCgpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiByZXBlYXRlZERhdGEuaW5jbHVkZXMoaXRlbS50cmFuc2xhdGlvbikpO1xuICAgIFNFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcsIHJlcGVhdGVkRGF0YVNldCk7XG4gICAgaWYgKHJlcGVhdGVkRGF0YVNldC5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBlYXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5KCk7XG5cbiAgICBzaG93U3RhdFRhYmxlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3RhdGlzdGljc0J0biwgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgaGlkZVN0YXRUYWJsZSwgY3JlYXRlRGlmZldvcmRzU2VjdGlvbixcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSwgc2V0R2xvYmFsVmFsdWVzLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZVxuICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2UnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGNvbnRhaW5lclxuICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlQnV0dG9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scycpO1xuXG4gIC8vIGNyZWF0ZSByZXBlYXQgZGlmZmljdWx0IHdvcmRzIGJ1dHRvblxuICBjb25zdCByZXBlYXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVwZWF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVwZWF0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZV9fY29udHJvbHMtYnRuJyk7XG4gIHJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQtYnRuJyk7XG4gIHJlcGVhdEJ0bi50ZXh0Q29udGVudCA9ICdSZXBlYXQgZGlmZmljdWx0IHdvcmRzJztcblxuICAvLyBjcmVhdGUgcmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scy1idG4nKTtcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXQtYnRuJyk7XG4gIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHN0YXRpc3RpYyc7XG5cbiAgc3RhdGlzdGljc1BhZ2VCdXR0b25zLmFwcGVuZChyZXBlYXRCdG4pO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuYXBwZW5kKHJlc2V0QnRuKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIHRhYmxlXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlVGFibGUgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGUoc3RhdGlzdGljc0RhdGEpO1xuXG4gIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChzdGF0aXN0aWNzUGFnZUJ1dHRvbnMpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoc3RhdGlzdGljc1BhZ2VUYWJsZSk7XG5cbiAgc3RhdGlzdGljc1BhZ2UuYXBwZW5kKHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyKTtcbiAgcmV0dXJuIHN0YXRpc3RpY3NQYWdlO1xufTtcblxuY29uc3QgcmVzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXRTdGF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuICByZXNldFN0YXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2VDb250YWluZXIgPSBzdGF0aXN0aWNzUGFnZS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgICBzdGF0aXN0aWNzVGFibGUucmVtb3ZlKCk7XG4gICAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNzRGF0YSkpO1xuICAgIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0LWJ0bicpO1xuICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufTtcblxuY29uc3QgcmVwZWF0RGlmZldvcmRzRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVwZWF0RGlmZldvcmRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgcmVwZWF0RGlmZldvcmRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNldCA9IEdFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcpO1xuICAgIGNyZWF0ZURpZmZXb3Jkc1NlY3Rpb24ocmVwZWF0ZWREYXRhU2V0LCAnRGlmZmljdWx0IHdvcmRzJyk7XG4gICAgaGlkZVN0YXRUYWJsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NQYWdlLCByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1cGRhdGVNb2RlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVUb2dnbGUgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9IGZhbHNlO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSB0cmFpblxuICBjb25zdCB0b2dnbGVNb2RlVHJhaW4gPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX190cmFpbicpO1xuICB0b2dnbGVNb2RlVHJhaW4udGV4dENvbnRlbnQgPSAnVHJhaW4nO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSBwbGF5XG4gIGNvbnN0IHRvZ2dsZU1vZGVQbGF5ID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2dnbGVNb2RlUGxheS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVQbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3BsYXknKTtcbiAgdG9nZ2xlTW9kZVBsYXkudGV4dENvbnRlbnQgPSAnUGxheSc7XG5cbiAgdG9nZ2xlQnRuLmFwcGVuZCh0b2dnbGVNb2RlVHJhaW4pO1xuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGVQbGF5KTtcblxuICByZXR1cm4gdG9nZ2xlQnRuO1xufTtcblxuY29uc3QgdG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQnRuID0gR0VUX1ZBUigndG9nZ2xlQnRuJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9ICh0b2dnbGVCdG4uYXJpYVByZXNzZWQgPT09ICdmYWxzZScpID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgU0VUX1ZBUignaXNQbGF5TW9kZScsIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCk7XG4gIHVwZGF0ZU1vZGUoKTtcbn07XG5cbmNvbnN0IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUJ0biA9IEdFVF9WQVIoJ3RvZ2dsZUJ0bicpO1xuICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVCdG5GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZ2dsZSwgdG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSwgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiaW1wb3J0IHsgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnVCdG4nO1xuaW1wb3J0IHsgb3ZlcmxheUZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL292ZXJsYXknO1xuaW1wb3J0IHsgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnUnO1xuaW1wb3J0IHsgc2V0TG9nb0V2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IHsgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCB7IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvZ2dsZUJ0bic7XG5pbXBvcnQgeyBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgeyBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bic7XG5pbXBvcnQgeyByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZSc7XG5pbXBvcnQgeyBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgb3ZlcmxheUZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TG9nb0V2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KCk7XG4gIHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSgpO1xuICBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSgpO1xuICByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5KCk7XG4gIHJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldEV2ZW50TGlzdGVuZXJzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IGNyZWF0ZUNhcmRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZEl0ZW0nO1xuaW1wb3J0IHsgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCBjcmVhdGVTY29yZUxpbmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvc2NvcmVMaW5lSWNvbic7XG5pbXBvcnQgeyBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IGRhdGFTZXQgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcblxuLy8gY3JlYXRlIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc01haW5NZW51ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydC1wYWdlJyk7XG5jb25zdCBpc0NhcmQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG5jb25zdCBpc0FjdGl2ZUNhcmQgPSAoY2FyZCkgPT4gIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpO1xuY29uc3QgaXNUcmFpbk1vZGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0Lm1vZGUgPT09ICd0cmFpbic7XG5jb25zdCBpc1BsYXlNb2RlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC5tb2RlID09PSAncGxheSc7XG5jb25zdCBpc0dhbWVTdGFydGVkID0gKCkgPT4gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0Jyk7XG5jb25zdCBpc0dhbWVPdmVyID0gKCkgPT4gR0VUX1ZBUignc291bmRzTGlzdCcpLmxlbmd0aCA9PT0gMDtcbmNvbnN0IGlzR2FtZU92ZXJTdWNjZXNzID0gKCkgPT4ge1xuICBjb25zdCBpY29uc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZS1saW5lX19pY29uJykubGVuZ3RoO1xuICBjb25zdCBjYXJkc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKS5sZW5ndGg7XG4gIHJldHVybiBpY29uc0Ftb3VudCA9PT0gY2FyZHNBbW91bnQ7XG59O1xuXG5jb25zdCBjbGVhckNhcmRzTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn07XG5cbmNvbnN0IHNodWZmbGVBcnJheSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzaHVmZmxlZCA9IFsuLi5hcnJheV07XG4gIGZvciAobGV0IGkgPSBzaHVmZmxlZC5sZW5ndGggLSAxOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFtzaHVmZmxlZFtpXSwgc2h1ZmZsZWRbal1dID0gW3NodWZmbGVkW2pdLCBzaHVmZmxlZFtpXV07XG4gIH1cbiAgcmV0dXJuIHNodWZmbGVkO1xufTtcblxuY29uc3QgdXBkYXRlU291bmRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gR0VUX1ZBUignc291bmRzTGlzdCcpLnNsaWNlKCk7XG4gIHNvdW5kc0xpc3QucG9wKCk7XG4gIFNFVF9WQVIoJ3NvdW5kc0xpc3QnLCBzb3VuZHNMaXN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1NvdW5kc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICBjb25zdCBzb3VuZHNMaXN0ID0gW107XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCB7IHNvdW5kIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgc291bmRzTGlzdC5wdXNoKHNvdW5kKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNvdW5kc0xpc3Q7XG59O1xuXG5jb25zdCBwZXJjZW50Q29ycmVjdEFuc3dlcnMgPSAob2JqKSA9PiBNYXRoLnJvdW5kKChcbiAgb2JqLkNvcnJlY3QgLyAob2JqLkNvcnJlY3QgKyBvYmouSW5jb3JyZWN0KSkgKiAxMDApO1xuXG5jb25zdCBjcmVhdGVTdGFydGluZ1N0YXRpc3RpY0RhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uc2VjdGlvbiAhPT0gJ2hvbWUnKSB7XG4gICAgICBpdGVtLnNlY3Rpb25Xb3Jkcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBDYXRlZ29yeTogaXRlbS5zZWN0aW9uVGl0bGUsXG4gICAgICAgICAgV29yZDogZWxlbS53b3JkLFxuICAgICAgICAgIFRyYW5zbGF0aW9uOiBlbGVtLnRyYW5zbGF0aW9uLFxuICAgICAgICAgIFRyYWluZWQ6IDAsXG4gICAgICAgICAgQ29ycmVjdDogMCxcbiAgICAgICAgICBJbmNvcnJlY3Q6IDAsXG4gICAgICAgICAgJ0FjY3VyYWN5ICUnOiAnbi9lJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0LnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzRGF0YSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGlzdGljRGF0YScpO1xuICBpZiAoIXNhdmVkRGF0YSkge1xuICAgIGNvbnN0IHN0YXJ0aW5nRGF0YSA9IGNyZWF0ZVN0YXJ0aW5nU3RhdGlzdGljRGF0YShkYXRhKTtcbiAgICBjb25zdCBzdGFydGluZ0RhdGFUb0pzb24gPSBKU09OLnN0cmluZ2lmeShzdGFydGluZ0RhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0aXN0aWNEYXRhJywgc3RhcnRpbmdEYXRhVG9Kc29uKTtcbiAgICByZXN1bHQucHVzaCguLi5zdGFydGluZ0RhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICAgIHJlc3VsdC5wdXNoKC4uLmN1cnJlbnREYXRhKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RXb3JkID0gKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG5jb25zdCBzZXRHbG9iYWxWYWx1ZXMgPSAoKSA9PiB7XG4gIFNFVF9WQVIoJ21haW5TZWN0aW9uJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSk7XG4gIFNFVF9WQVIoJ2NhdGVnb3J5TmFtZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1uYW1lJykpO1xuICBTRVRfVkFSKCdjYXJkc0xpc3QnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbGlzdCcpKTtcbiAgU0VUX1ZBUignaGFtYnVyZ2VyQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1oYW1idXJnZXInKSk7XG4gIFNFVF9WQVIoJ2hlYWRlck5hdicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2JykpO1xuICBTRVRfVkFSKCdoZWFkZXJNZW51JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1tZW51JykpO1xuICBTRVRfVkFSKCduYXZNZW51TGlua3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpKTtcbiAgU0VUX1ZBUignb3ZlcmxheScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xuICBTRVRfVkFSKCdib2R5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKTtcbiAgU0VUX1ZBUignaGVhZGVyTG9nbycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nb19fbGluaycpKTtcbiAgU0VUX1ZBUigndG9nZ2xlQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1idXR0b24nKSk7XG4gIFNFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idG4nKSk7XG4gIFNFVF9WQVIoJ3Njb3JlTGluZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1saW5lJykpO1xuICBTRVRfVkFSKCdtb2RhbFdpbmRvdycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93VGV4dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX3RleHQnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93SWNvbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2ljb24nKSk7XG4gIFNFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnLCBjcmVhdGVTdGF0aXN0aWNzRGF0YShkYXRhU2V0KSk7XG4gIFNFVF9WQVIoJ2lzUGxheU1vZGUnLCBHRVRfVkFSKCd0b2dnbGVCdG4nKS5hcmlhUHJlc3NlZCk7XG59O1xuXG5jb25zdCByZXNldENhcmRzU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZnJvbnQnKTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpKTtcbn07XG5cbmNvbnN0IHNob3dTdGF0VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICBjb25zdCBtYWluU2VjdGlvbiA9IEdFVF9WQVIoJ21haW5TZWN0aW9uJyk7XG4gIGNvbnN0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXInKTtcbiAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtdXAnKTtcbiAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzYXBwZWFyJyk7XG4gIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWRvd24nKTtcbn07XG5cbmNvbnN0IGhpZGVTdGF0VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICBpZiAoc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS1kb3duJykpIHtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IEdFVF9WQVIoJ21haW5TZWN0aW9uJyk7XG4gICAgY29uc3QgbWFpblNlY3Rpb25Db250YWluZXIgPSBtYWluU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtZG93bicpO1xuICAgIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLXVwJyk7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYXBwZWFyJyk7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0Q2FyZHNTb3VuZHNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gY3JlYXRlTmV3U291bmRzTGlzdCgpO1xuICBTRVRfVkFSKCdzb3VuZHNMaXN0Jywgc2h1ZmZsZUFycmF5KHNvdW5kc0xpc3QpKTtcbn07XG5cbmNvbnN0IHJlc2V0U2NvcmVMaW5lID0gKCkgPT4ge1xuICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgc2NvcmVMaW5lLmlubmVySFRNTCA9ICcnO1xufTtcblxuY29uc3QgdXBkYXRlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IHBsYXlNb2RlID0gR0VUX1ZBUignaXNQbGF5TW9kZScpO1xuICByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSgpO1xuICByZXNldENhcmRzU3RhdGUoKTtcbiAgcmVzZXRDYXJkc1NvdW5kc0xpc3QoKTtcbiAgcmVzZXRTY29yZUxpbmUoKTtcbiAgaWYgKHBsYXlNb2RlID09PSAndHJ1ZScpIHtcbiAgICBjYXJkc0xpc3QuZGF0YXNldC5tb2RlID0gJ3BsYXknO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5kYXRhc2V0Lm1vZGUgPSAndHJhaW4nO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzVGFibGVIZWFkID0gKGRhdGEpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlSGVhZCA9IGNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gIHN0YXRpc3RpY3NUYWJsZUhlYWQuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZCcpO1xuICBjb25zdCBoZWFkZXJSb3cgPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuICBoZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZC1yb3cnKTtcbiAgaGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlLXJvdycpO1xuICBjb25zdCBoZWFkZXJSb3dEYXRhID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG5cbiAgaGVhZGVyUm93RGF0YS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBoZWFkZXJSb3dUaCA9IGNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgaGVhZGVyUm93VGguY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZC1yb3dfX2NlbGwnKTtcbiAgICBoZWFkZXJSb3dUaC5jbGFzc0xpc3QuYWRkKCd0YWJsZS1jZWxsJyk7XG4gICAgaGVhZGVyUm93VGguZGF0YXNldC5jb2x1bW4gPSBrZXk7XG4gICAgaGVhZGVyUm93VGguZGF0YXNldC5zb3J0ID0gKGtleSA9PT0gJ0NhdGVnb3J5JykgfHwgKGtleSA9PT0gJ1dvcmQnKSB8fCAoa2V5ID09PSAnVHJhbnNsYXRpb24nKSA/ICdhbHBoJyA6ICdudW0nO1xuICAgIGhlYWRlclJvd1RoLnRleHRDb250ZW50ID0ga2V5O1xuICAgIGhlYWRlclJvdy5hcHBlbmQoaGVhZGVyUm93VGgpO1xuICB9KTtcblxuICBzdGF0aXN0aWNzVGFibGVIZWFkLmFwcGVuZChoZWFkZXJSb3cpO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGVIZWFkO1xufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keSA9IChkYXRhKSA9PiB7XG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGJvZHlcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlQm9keSA9IGNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gIHN0YXRpc3RpY3NUYWJsZUJvZHkuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9fYm9keScpO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHRCb2R5Um93ID0gY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0Qm9keVJvdy5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19ib2R5LXJvdycpO1xuICAgIHRCb2R5Um93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlLXJvdycpO1xuICAgIGNvbnN0IHRCb2R5Um93RGF0YSA9IE9iamVjdC52YWx1ZXMoaXRlbSk7XG4gICAgY29uc3Qgcm93Q2F0ZWdvcnkgPSBPYmplY3QudmFsdWVzKGl0ZW0pWzBdO1xuICAgIGNvbnN0IHJvd1dvcmQgPSBPYmplY3QudmFsdWVzKGl0ZW0pWzFdO1xuICAgIGNvbnN0IGhlYWRlclJvd0RhdGEgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcbiAgICB0Qm9keVJvdy5kYXRhc2V0LnJvdyA9IHJvd1dvcmQ7XG5cbiAgICB0Qm9keVJvd0RhdGEuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0Qm9keVJvd0NlbGwgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdEJvZHlSb3dDZWxsLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2JvZHktcm93X19jZWxsJyk7XG4gICAgICB0Qm9keVJvd0NlbGwuY2xhc3NMaXN0LmFkZCgndGFibGUtY2VsbCcpO1xuICAgICAgdEJvZHlSb3dDZWxsLmRhdGFzZXQuY2F0ZWdvcnkgPSByb3dDYXRlZ29yeTtcbiAgICAgIHRCb2R5Um93Q2VsbC5kYXRhc2V0LmNlbGwgPSBoZWFkZXJSb3dEYXRhW2luZGV4XTtcbiAgICAgIHRCb2R5Um93Q2VsbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgdEJvZHlSb3cuYXBwZW5kKHRCb2R5Um93Q2VsbCk7XG4gICAgfSk7XG5cbiAgICBzdGF0aXN0aWNzVGFibGVCb2R5LmFwcGVuZCh0Qm9keVJvdyk7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGVCb2R5O1xufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1RhYmxlID0gKGRhdGEpID0+IHtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGVcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgc3RhdGlzdGljc1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGUnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyB0YWJsZSBoZWFkXG4gIGNvbnN0IHN0YXRpc3RpY3NUYWJsZUhlYWQgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGVIZWFkKGRhdGEpO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGJvZHlcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlQm9keSA9IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkoZGF0YSk7XG5cbiAgc3RhdGlzdGljc1RhYmxlLmFwcGVuZChzdGF0aXN0aWNzVGFibGVIZWFkKTtcbiAgc3RhdGlzdGljc1RhYmxlLmFwcGVuZChzdGF0aXN0aWNzVGFibGVCb2R5KTtcblxuICByZXR1cm4gc3RhdGlzdGljc1RhYmxlO1xufTtcblxuY29uc3Qgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgY29uc3Qgc3RhdFRhYmxlSGVhZGVyID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlX19oZWFkJyk7XG4gIGNvbnN0IHN0YXRUYWJsZUhlYWRlckNlbGxzID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0LXRhYmxlX19oZWFkLXJvd19fY2VsbCcpO1xuICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcblxuICBzdGF0VGFibGVIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdFRhYmxlQm9keSA9IHN0YXRUYWJsZS5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZV9fYm9keScpO1xuICAgIGNvbnN0IHNvcnRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuc29ydDtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnkgPSB0YXJnZXQuZGF0YXNldC5jb2x1bW47XG4gICAgY29uc3Qgc29ydENhdGVnb3J5Q2VsbHMgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY2VsbD0nJHtzb3J0Q2F0ZWdvcnl9J11gKTtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcyA9IEFycmF5LmZyb20oc29ydENhdGVnb3J5Q2VsbHMpLm1hcCgoY2VsbCkgPT4gY2VsbC50ZXh0Q29udGVudCk7XG4gICAgY29uc3QgYXJlRW1wdHlDZWxscyA9IHNvcnRDYXRlZ29yeUNlbGxzVmFsdWVzLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnMCcgfHwgaXRlbSA9PT0gJ24vZScpO1xuICAgIGlmIChhcmVFbXB0eUNlbGxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYXNjZW5kJykpIHtcbiAgICAgIHN0YXRUYWJsZUhlYWRlckNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYXNjZW5kJykpO1xuICAgICAgc3RhdGlzdGljc0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBudW0xID0gYVtbc29ydENhdGVnb3J5XV0gPT09ICduL2UnID8gLTEgOiBhW3NvcnRDYXRlZ29yeV07XG4gICAgICAgIGNvbnN0IG51bTIgPSBiW1tzb3J0Q2F0ZWdvcnldXSA9PT0gJ24vZScgPyAtMSA6IGJbc29ydENhdGVnb3J5XTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FzY2VuZCcpO1xuICAgICAgICBpZiAoc29ydFR5cGUgPT09ICdhbHBoJykge1xuICAgICAgICAgIHJldHVybiBudW0xLmxvY2FsZUNvbXBhcmUobnVtMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTIgLSBudW0xO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRpc3RpY3NEYXRhLnJldmVyc2UoKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhc2NlbmQnKTtcbiAgICB9XG4gICAgc3RhdFRhYmxlQm9keS5yZW1vdmUoKTtcbiAgICBzdGF0VGFibGUuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkoc3RhdGlzdGljc0RhdGEpKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEgPSAobW9kZSwgY2FyZCwgcmVzdWx0KSA9PiB7XG4gIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0aXN0aWNEYXRhJyk7XG4gIGNvbnN0IGN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICBjb25zdCBjYXJkQmFja1RpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1iYWNrX190aXRsZScpLnRleHRDb250ZW50O1xuICBsZXQgY3VycmVudEl0ZW0gPSBjdXJyZW50RGF0YVxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IChpdGVtLlRyYW5zbGF0aW9uID09PSBjYXJkQmFja1RpdGxlKSlbMF07XG4gIGlmIChtb2RlID09PSAndHJhaW4nKSB7XG4gICAgY3VycmVudEl0ZW0uVHJhaW5lZCArPSAxO1xuICB9XG4gIGlmIChyZXN1bHQpIHtcbiAgICBjdXJyZW50SXRlbS5Db3JyZWN0ICs9IDE7XG4gICAgY3VycmVudEl0ZW1bJ0FjY3VyYWN5ICUnXSA9IHBlcmNlbnRDb3JyZWN0QW5zd2VycyhjdXJyZW50SXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2FyZExpc3RJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpKTtcbiAgICBjb25zdCBjdXJyZW50U291bmQgPSBHRVRfVkFSKCdzb3VuZHNMaXN0JykuYXQoLTEpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gY2FyZExpc3RJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZGF0YXNldC5zb3VuZCA9PT0gY3VycmVudFNvdW5kKVswXTtcbiAgICBbY3VycmVudEl0ZW1dID0gY3VycmVudERhdGFcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgaXRlbS5UcmFuc2xhdGlvbiA9PT0gY3VycmVudENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtYmFja19fdGl0bGUnKVxuICAgICAgICAgIC50ZXh0Q29udGVudCkpO1xuICAgIGN1cnJlbnRJdGVtLkluY29ycmVjdCArPSAxO1xuICAgIGN1cnJlbnRJdGVtWydBY2N1cmFjeSAlJ10gPSBwZXJjZW50Q29ycmVjdEFuc3dlcnMoY3VycmVudEl0ZW0pO1xuICB9XG4gIGNvbnN0IGN1cnJlbnREYXRhVG9Kc29uID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGlzdGljRGF0YScsIGN1cnJlbnREYXRhVG9Kc29uKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGNhcmRzTGlzdC5jbGFzc0xpc3QuYWRkKCdzdGFydC1wYWdlJyk7XG4gIGNhcmRzTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gJ21haW4tbWVudSc7XG4gIHVwZGF0ZU1vZGUoKTtcbiAgY2xlYXJDYXJkc0xpc3RDb250YWluZXIoKTtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnNlY3Rpb24gIT09ICdob21lJykge1xuICAgICAgY29uc3QgaW1nUGF0aCA9IGVsZW1lbnQuc3RhcnRJbWFnZTtcbiAgICAgIGNvbnN0IGltZ0FsdCA9IGVsZW1lbnQuc2VjdGlvbldvcmRzWzBdLmFsdDtcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnQuc2VjdGlvblRpdGxlO1xuICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShpbWdQYXRoLCBpbWdBbHQsIGNhcmRUaXRsZSwgY2FyZFRpdGxlKTtcbiAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEl0ZW0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpbWdQYXRoID0gaXRlbS5pbWFnZTtcbiAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICBjb25zdCBjYXJkU2VjdGlvbiA9IGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBpdGVtLndvcmQ7XG4gICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICBjb25zdCBzb3VuZFBhdGggPSBpdGVtLmF1ZGlvU3JjO1xuICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oXG4gICAgICBpbWdQYXRoLFxuICAgICAgaW1nQWx0LFxuICAgICAgY2FyZFRpdGxlLFxuICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICBjYXJkVHJhbnNsYXRpb24sXG4gICAgICBzb3VuZFBhdGgsXG4gICAgKTtcbiAgICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRJdGVtKTtcbiAgfSk7XG4gIHJlc2V0Q2FyZHNTb3VuZHNMaXN0KCk7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWN0aW9uVGl0bGUgPT09IHNlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25EYXRhID0gZWxlbWVudC5zZWN0aW9uV29yZHM7XG4gICAgICBzZWN0aW9uRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ1BhdGggPSBpdGVtLmltYWdlO1xuICAgICAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGl0ZW0ud29yZDtcbiAgICAgICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICAgICAgY29uc3Qgc291bmRQYXRoID0gaXRlbS5hdWRpb1NyYztcbiAgICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShcbiAgICAgICAgICBpbWdQYXRoLFxuICAgICAgICAgIGltZ0FsdCxcbiAgICAgICAgICBjYXJkVGl0bGUsXG4gICAgICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICAgICAgY2FyZFRyYW5zbGF0aW9uLFxuICAgICAgICAgIHNvdW5kUGF0aCxcbiAgICAgICAgKTtcbiAgICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXNldENhcmRzU291bmRzTGlzdCgpO1xufTtcblxuY29uc3QgcGxheVNvdW5kID0gKGVsZW1lbnQsIHNvdW5kUGF0aCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhzb3VuZFBhdGgpO1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgYXVkaW8ucGxheSgpO1xuICBpZiAoZWxlbWVudCA9PT0gcGxheVJlcGVhdEJ0bikge1xuICAgIHBsYXlSZXBlYXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBwbGF5UmVwZWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBjYXJkc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVDYXJkID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVCYWNrID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHRyYWluTW9kZUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0LCBjYXJkSW5uZXIpID0+IHtcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZS1idG4nKSkge1xuICAgIHJvdGF0ZUNhcmQoY2FyZElubmVyKTtcbiAgICBjYXJkSW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHJvdGF0ZUJhY2soY2FyZElubmVyKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghY2FyZElubmVyLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG4gICAgY29uc3Qgc291bmRQYXRoID0gY3VycmVudENhcmQuZGF0YXNldC5zb3VuZDtcbiAgICBjb25zdCBjYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBwbGF5U291bmQoY2FyZCwgc291bmRQYXRoKTtcbiAgICB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEoJ3RyYWluJywgY3VycmVudENhcmQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRTY29yZUljb24gPSAoY2FyZCwgc3JjKSA9PiB7XG4gIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgIGNvbnN0IHNjb3JlSWNvbiA9IGNyZWF0ZVNjb3JlTGluZUljb24oc3JjKTtcbiAgICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgICBzY29yZUxpbmUucHJlcGVuZChzY29yZUljb24pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBzZXRHbG9iYWxWYWx1ZXMsIGNhcGl0YWxpemVGaXJzdFdvcmQsXG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LFxuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCB1cGRhdGVNb2RlLCBwbGF5U291bmQsXG4gIHJvdGF0ZUNhcmQsIHJvdGF0ZUJhY2ssIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIHNodWZmbGVBcnJheSwgdXBkYXRlU291bmRMaXN0LFxuICBpc0dhbWVTdGFydGVkLCBhZGRTY29yZUljb24sIGlzQWN0aXZlQ2FyZCwgaXNHYW1lT3ZlciwgaXNHYW1lT3ZlclN1Y2Nlc3MsXG4gIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhLCBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5LFxuICBjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5LCBzaG93U3RhdFRhYmxlLCBoaWRlU3RhdFRhYmxlLCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uLFxufTtcbiIsImNvbnN0IFZBUklBQkxFUyA9IHtcbiAgbWFpblNlY3Rpb246ICdpbml0aWFsIHZhbHVlJyxcbiAgY2F0ZWdvcnlOYW1lOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGNhcmRzTGlzdDogJ2luaXRpYWwgdmFsdWUnLFxuICBzb3VuZHNMaXN0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhhbWJ1cmdlckJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJOYXY6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTWVudTogJ2luaXRpYWwgdmFsdWUnLFxuICBuYXZNZW51TGlua3M6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTG9nbzogJ2luaXRpYWwgdmFsdWUnLFxuICBvdmVybGF5OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGJvZHk6ICdpbml0aWFsIHZhbHVlJyxcbiAgdG9nZ2xlQnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGlzUGxheU1vZGU6ICdpbml0aWFsIHZhbHVlJyxcbiAgcGxheVJlcGVhdEJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBzY29yZUxpbmU6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3c6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3dJY29uOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93VGV4dDogJ2luaXRpYWwgdmFsdWUnLFxuICBtb2RhbFdpbmRvd0ljb25XaW46ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dpbi1pY29uLnBuZycsXG4gIG1vZGFsV2luZG93SWNvbkxvc2U6ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL2xvc2UtaWNvbi5wbmcnLFxuICBzdGF0aXN0aWNEYXRhOiBbXSxcbiAgcmVwZWF0ZWREYXRhU2V0OiAnaW5pdGlhbCB2YWx1ZScsXG59O1xuXG5jb25zdCBTRVRfVkFSID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoVkFSSUFCTEVTLCBuYW1lKSkge1xuICAgIFZBUklBQkxFU1tuYW1lXSA9IHZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBHRVRfVkFSID0gKG5hbWUpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChWQVJJQUJMRVMsIG5hbWUpKSB7XG4gICAgcmV0dXJuIFZBUklBQkxFU1tuYW1lXTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH07XG4iLCJleHBvcnQgZGVmYXVsdCBbe3NlY3Rpb246J2hvbWUnLGNhdGVnb3J5OidtYWluLW1lbnUnfSx7c2VjdGlvbjonY2xvdGhlcycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3Ytc3dlYXRlci5wbmcnLGxpbmtQYXRoOicjY2xvdGhlcycsc2VjdGlvblRpdGxlOidDbG90aGVzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidjYXAnLHRyYW5zbGF0aW9uOifRiNCw0L/QutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2EtY2FwLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2NhcC5tcDMnLGFsdDonY2FwIGltYWdlJ30se3dvcmQ6J2phY2tldCcsdHJhbnNsYXRpb246J9C60YPRgNGC0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLWphY2tldC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9qYWNrZXQubXAzJyxhbHQ6J2phY2tldCBpbWFnZSd9LHt3b3JkOidzY2FyZicsdHJhbnNsYXRpb246J9GI0LDRgNGEJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2Etc2NhcmYucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2NhcmYubXAzJyxhbHQ6J3NjYXJmIGltYWdlJ30se3dvcmQ6J3Nob2VzJyx0cmFuc2xhdGlvbjon0LHQvtGC0LjQvdC60LgnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1zaG9lcy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zaG9lcy5tcDMnLGFsdDonc2hvZXMgaW1hZ2UnfSx7d29yZDonYmxvdXNlJyx0cmFuc2xhdGlvbjon0LHQu9GD0LfQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtYmxvdXNlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2Jsb3VzZS5tcDMnLGFsdDonYmxvdXNlIGltYWdlJ30se3dvcmQ6J2NvYXQnLHRyYW5zbGF0aW9uOifQv9Cw0LvRjNGC0L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1jb2F0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2NvYXQubXAzJyxhbHQ6J2NvYXQgaW1hZ2UnfSx7d29yZDonZHJlc3MnLHRyYW5zbGF0aW9uOifQv9C70LDRgtGM0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1kcmVzcy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9kcmVzcy5tcDMnLGFsdDonZHJlc3MgaW1hZ2UnfSx7d29yZDonc2hpcnQnLHRyYW5zbGF0aW9uOifRgNGD0LHQsNGI0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LXNoaXJ0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3NoaXJ0Lm1wMycsYWx0OidzaGlydCBpbWFnZSd9XX0se3NlY3Rpb246J2NvbG91cnMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXllbGxvdy5wbmcnLGxpbmtQYXRoOicjY29sb3Vycycsc2VjdGlvblRpdGxlOidDb2xvdXJzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidibGFjaycsdHJhbnNsYXRpb246J9GH0LXRgNC90YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJsYWNrLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2JsYWNrLm1wMycsYWx0OidibGFjayBpbWFnZSd9LHt3b3JkOidibHVlJyx0cmFuc2xhdGlvbjon0YHQuNC90LjQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJsdWUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvYmx1ZS5tcDMnLGFsdDonYmx1ZSBpbWFnZSd9LHt3b3JkOidicm93bicsdHJhbnNsYXRpb246J9C60L7RgNC40YfQvdC10LLRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtYnJvd24ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvYnJvd24ubXAzJyxhbHQ6J2Jyb3duIGltYWdlJ30se3dvcmQ6J2dyZWVuJyx0cmFuc2xhdGlvbjon0LfQtdC70ZHQvdGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ncmVlbi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ncmVlbi5tcDMnLGFsdDonZ3JlZW4gaW1hZ2UnfSx7d29yZDonZ3JleScsdHJhbnNsYXRpb246J9GB0LXRgNGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ncmV5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2dyZXkubXAzJyxhbHQ6J2dyZXkgaW1hZ2UnfSx7d29yZDonb3JhbmdlJyx0cmFuc2xhdGlvbjon0L7RgNCw0L3QttC10LLRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3Ytb3JhbmdlLWMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvb3JhbmdlLm1wMycsYWx0OidvcmFuZ2UgaW1hZ2UnfSx7d29yZDoncGluaycsdHJhbnNsYXRpb246J9GA0L7Qt9C+0LLRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtcGluay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9waW5rLm1wMycsYWx0OidwaW5rIGltYWdlJ30se3dvcmQ6J3JlZCcsdHJhbnNsYXRpb246J9C60YDQsNGB0L3Ri9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtcmVkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL3JlZC5tcDMnLGFsdDoncmVkIGltYWdlJ31dfSx7c2VjdGlvbjonZmFtaWx5JyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1mYW1pbHkucG5nJyxsaW5rUGF0aDonI2ZhbWlseScsc2VjdGlvblRpdGxlOidGYW1pbHknLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2F1bnQnLHRyYW5zbGF0aW9uOifRgtC10YLRjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtYXVudC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2F1bnQubXAzJyxhbHQ6J2F1bnQgaW1hZ2UnfSx7d29yZDonYnJvdGhlcicsdHJhbnNsYXRpb246J9Cx0YDQsNGCJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1icm90aGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvYnJvdGhlci5tcDMnLGFsdDonYnJvdGhlciBpbWFnZSd9LHt3b3JkOidkYWRkeScsdHJhbnNsYXRpb246J9C/0LDQv9CwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1kYWRkeS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2RhZGR5Lm1wMycsYWx0OidkYWRkeSBpbWFnZSd9LHt3b3JkOidncmFuZG1hJyx0cmFuc2xhdGlvbjon0LHQsNCx0YPRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWdyYW5kbWEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9ncmFuZG1hLm1wMycsYWx0OidncmFuZG1hIGltYWdlJ30se3dvcmQ6J2dyYW5kcGEnLHRyYW5zbGF0aW9uOifQtNC10LTRg9GI0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtZ3JhbmRwYS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2dyYW5kcGEubXAzJyxhbHQ6J2dyYW5kcGEgaW1hZ2UnfSx7d29yZDonbXVtbXknLHRyYW5zbGF0aW9uOifQvNCw0LzQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtbXVtbXkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9tdW1teS5tcDMnLGFsdDonbXVtbXkgaW1hZ2UnfSx7d29yZDonc2lzdGVyJyx0cmFuc2xhdGlvbjon0YHQtdGB0YLRgNCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1zaXN0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9zaXN0ZXIubXAzJyxhbHQ6J3Npc3RlciBpbWFnZSd9LHt3b3JkOid1bmNsZScsdHJhbnNsYXRpb246J9C00Y/QtNGPJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi11bmNsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L3VuY2xlLm1wMycsYWx0Oid1bmNsZSBpbWFnZSd9XX0se3NlY3Rpb246J2Zvb2QnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy9hLWhhbWJ1cmdlci5wbmcnLGxpbmtQYXRoOicjZm9vZCcsc2VjdGlvblRpdGxlOidGb29kJyxzZWN0aW9uV29yZHM6W3t3b3JkOidlZ2cnLHRyYW5zbGF0aW9uOifRj9C50YbQvicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC9hLWVnZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9lZ2cubXAzJyxhbHQ6J2VnZyBpbWFnZSd9LHt3b3JkOidpY2UgY3JlYW0nLHRyYW5zbGF0aW9uOifQvNC+0YDQvtC20LXQvdC+0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2QvYS1pY2VjcmVhbS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9pY2UtY3JlYW0ubXAzJyxhbHQ6J2ljZSBjcmVhbSBpbWFnZSd9LHt3b3JkOidicmVhZCcsdHJhbnNsYXRpb246J9GF0LvQtdCxJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtYnJlYWQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvYnJlYWQubXAzJyxhbHQ6J2JyZWFkIGltYWdlJ30se3dvcmQ6J2J1dHRlcicsdHJhbnNsYXRpb246J9C80LDRgdC70L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1idXR0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvYnV0dGVyLm1wMycsYWx0OididXR0ZXIgaW1hZ2UnfSx7d29yZDonY2FrZScsdHJhbnNsYXRpb246J9C/0LjRgNC+0LbQvdC+0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1jYWtlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2Nha2UubXAzJyxhbHQ6J2Nha2UgaW1hZ2UnfSx7d29yZDonY2hlZXNlJyx0cmFuc2xhdGlvbjon0YHRi9GAJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtY2hlZXNlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2NoZWVzZS5tcDMnLGFsdDonY2hlZXNlIGltYWdlJ30se3dvcmQ6J3BpenphJyx0cmFuc2xhdGlvbjon0L/QuNGG0YbQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LXBpenphLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL3BpenphLm1wMycsYWx0OidwaXp6YSBpbWFnZSd9LHt3b3JkOidzYW5kd2ljaCcsdHJhbnNsYXRpb246J9Cx0YPRgtC10YDQsdGA0L7QtCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LXNhbmR3aWNoLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL3NhbmR3aWNoLm1wMycsYWx0OidzYW5kd2ljaCBpbWFnZSd9XX0se3NlY3Rpb246J2ZydWl0cycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3Ytc3RyYXdiZXJyeS5wbmcnLGxpbmtQYXRoOicjZnJ1aXRzJyxzZWN0aW9uVGl0bGU6J0ZydWl0cycsc2VjdGlvbldvcmRzOlt7d29yZDonYXBwbGUnLHRyYW5zbGF0aW9uOifRj9Cx0LvQvtC60L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLWFwcGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvYXBwbGUubXAzJyxhbHQ6J2FwcGxlIGltYWdlJ30se3dvcmQ6J2NoZXJyeScsdHJhbnNsYXRpb246J9Cy0LjRiNC90Y8nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLWNoZXJyeS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2NoZXJyeS5tcDMnLGFsdDonY2hlcnJ5IGltYWdlJ30se3dvcmQ6J2dyYXBlJyx0cmFuc2xhdGlvbjon0YTQuNCz0YPRgNC90L7QtSDQutCw0YLQsNC90LjQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtZ3JhcGVzLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvZ3JhcGUubXAzJyxhbHQ6J2dyYXBlIGltYWdlJ30se3dvcmQ6J29yYW5nZScsdHJhbnNsYXRpb246J9Cw0L/QtdC70YzRgdC40L0nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLW9yYW5nZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL29yYW5nZS5tcDMnLGFsdDonb3JhbmdlIGltYWdlJ30se3dvcmQ6J3BlYWNoJyx0cmFuc2xhdGlvbjon0L/QtdGA0YHQuNC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1wZWFjaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL3BlYWNoLm1wMycsYWx0OidwZWFjaCBpbWFnZSd9LHt3b3JkOidwaW5lYXBwbGUnLHRyYW5zbGF0aW9uOifQsNC90LDQvdCw0YEnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLXBpbmVhcHBsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL3BpbmVhcHBsZS5tcDMnLGFsdDoncGluZWFwcGxlIGltYWdlJ30se3dvcmQ6J2JhbmFuYScsdHJhbnNsYXRpb246J9Cx0LDQvdCw0L0nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy92LWJhbmFuYS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2JhbmFuYS5tcDMnLGFsdDonYmFuYW5hIGltYWdlJ30se3dvcmQ6J2xlbW9uJyx0cmFuc2xhdGlvbjon0LvQuNC80L7QvScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL3YtbGVtb24ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9sZW1vbi5tcDMnLGFsdDonbGVtb24gaW1hZ2UnfV19LHtzZWN0aW9uOidwZXRzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1wb255LnBuZycsbGlua1BhdGg6JyNwZXRzJyxzZWN0aW9uVGl0bGU6J1BldHMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2hhbXN0ZXInLHRyYW5zbGF0aW9uOifRhdC+0LzRj9C6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2EtaGFtc3Rlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9oYW1zdGVyLm1wMycsYWx0OidoYW1zdGVyIGltYWdlJ30se3dvcmQ6J3BhcnJvdCcsdHJhbnNsYXRpb246J9C/0L7Qv9GD0LPQsNC5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2EtcGFycm90LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3BhcnJvdC5tcDMnLGFsdDoncGFycm90IGltYWdlJ30se3dvcmQ6J3R1cnRsZScsdHJhbnNsYXRpb246J9GH0LXRgNC10L/QsNGF0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvYS10dXJ0bGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvdHVydGxlLm1wMycsYWx0Oid0dXJ0bGUgaW1hZ2UnfSx7d29yZDona2l0dGVuJyx0cmFuc2xhdGlvbjon0LrQvtGC0ZHQvdC+0LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvaC1raXR0ZW4ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMva2l0dGVuLm1wMycsYWx0OidraXR0ZW4gaW1hZ2UnfSx7d29yZDoncHVwcHknLHRyYW5zbGF0aW9uOifRidC10L3QvtC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2gtcHVwcHkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvcHVwcHkubXAzJyxhbHQ6J3B1cHB5IGltYWdlJ30se3dvcmQ6J2ZlcnJldCcsdHJhbnNsYXRpb246J9GF0L7RgNC10LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvdi1mZXJyZXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvZmVycmV0Lm1wMycsYWx0OidmZXJyZXQgaW1hZ2UnfSx7d29yZDonZmlzaCcsdHJhbnNsYXRpb246J9GA0YvQsdCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtZmlzaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9maXNoLm1wMycsYWx0OidmaXNoIGltYWdlJ30se3dvcmQ6J21vdXNlJyx0cmFuc2xhdGlvbjon0LzRi9GI0YwnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvdi1tb3VzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9tb3VzZS5tcDMnLGFsdDonbW91c2UgaW1hZ2UnfV19LHtzZWN0aW9uOidzY2hvb2wnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXB1cGlsLnBuZycsbGlua1BhdGg6JyNzY2hvb2wnLHNlY3Rpb25UaXRsZTonU2Nob29sJyxzZWN0aW9uV29yZHM6W3t3b3JkOidib2FyZCcsdHJhbnNsYXRpb246J9C00L7RgdC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWJvYXJkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvYm9hcmQubXAzJyxhbHQ6J2JvYXJkIGltYWdlJ30se3dvcmQ6J2Jvb2snLHRyYW5zbGF0aW9uOifQutC90LjQs9CwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ib29rLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvYm9vay5tcDMnLGFsdDonYm9vayBpbWFnZSd9LHt3b3JkOidjYWxjdWxhdG9yJyx0cmFuc2xhdGlvbjon0YfQtdGA0LXQv9Cw0YXQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtY2FsY3VsYXRvci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2NhbGN1bGF0b3IubXAzJyxhbHQ6J2NhbGN1bGF0b3IgaW1hZ2UnfSx7d29yZDonY2xhc3Nyb29tJyx0cmFuc2xhdGlvbjon0YjQutC+0LvRjNC90YvQuSDQutC70LDRgdGBJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1jbGFzc3Jvb20ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9jbGFzc3Jvb20ubXAzJyxhbHQ6J2NsYXNzcm9vbSBpbWFnZSd9LHt3b3JkOidtYXAnLHRyYW5zbGF0aW9uOifQutCw0YDRgtCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1tYXAucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9tYXAubXAzJyxhbHQ6J21hcCBpbWFnZSd9LHt3b3JkOidub3RlYm9vaycsdHJhbnNsYXRpb246J9GC0LXRgtGA0LDQtNGMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ub3RlYm9vay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL25vdGVib29rLm1wMycsYWx0Oidub3RlYm9vayBpbWFnZSd9LHt3b3JkOidzY2hvb2xiYWcnLHRyYW5zbGF0aW9uOifQv9C+0YDRgtGE0LXQu9GMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1zY2hvb2xiYWcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9zY2hvb2xiYWcubXAzJyxhbHQ6J3NjaG9vbGJhZyBpbWFnZSd9LHt3b3JkOid0ZWFjaGVyJyx0cmFuc2xhdGlvbjon0YPRh9C40YLQtdC70YwnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LXRlYWNoZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC90ZWFjaGVyLm1wMycsYWx0Oid0ZWFjaGVyIGltYWdlJ31dfSx7c2VjdGlvbjonc3BvcnQnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXRlbm5pcy5wbmcnLGxpbmtQYXRoOicjc3BvcnQnLHNlY3Rpb25UaXRsZTonU3BvcnQnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2Jhc2tldGJhbGwnLHRyYW5zbGF0aW9uOifQsdCw0YHQutC10YLQsdC+0LsnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtYmFza2V0YmFsbC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvYmFza2V0YmFsbC5tcDMnLGFsdDonYmFza2V0YmFsbCBpbWFnZSd9LHt3b3JkOidjeWNsaW5nJyx0cmFuc2xhdGlvbjon0LXQt9C00LAg0L3QsCDQstC10LvQvtGB0LjQv9C10LTQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1jeWNsaW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9jeWNsaW5nLm1wMycsYWx0OidjeWNsaW5nIGltYWdlJ30se3dvcmQ6J2ZpZ3VyZSBza2F0aW5nJyx0cmFuc2xhdGlvbjon0YTQuNCz0YPRgNC90L7QtSDQutCw0YLQsNC90LjQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1maWd1cmUtc2thdGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvZmlndXJlLXNrYXRpbmcubXAzJyxhbHQ6J2ZpZ3VyZSBza2F0aW5nIGltYWdlJ30se3dvcmQ6J2Zvb3RiYWxsJyx0cmFuc2xhdGlvbjon0YTRg9GC0LHQvtC7JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWZvb3RiYWxsLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9mb290YmFsbC5tcDMnLGFsdDonZm9vdGJhbGwgaW1hZ2UnfSx7d29yZDonaG9ja2V5Jyx0cmFuc2xhdGlvbjon0YXQvtC60LrQtdC5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWhvY2tleS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvaG9ja2V5Lm1wMycsYWx0Oidob2NrZXkgaW1hZ2UnfSx7d29yZDonc2tpaW5nJyx0cmFuc2xhdGlvbjon0LvRi9C20L3Ri9C5INGB0L/QvtGA0YInLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3Ytc2tpaW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9za2lpbmcubXAzJyxhbHQ6J3NraWluZyBpbWFnZSd9LHt3b3JkOidzd2ltbWluZycsdHJhbnNsYXRpb246J9C/0LvQsNCy0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3Ytc3dpbW1pbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L3N3aW1taW5nLm1wMycsYWx0Oidzd2ltbWluZyBpbWFnZSd9LHt3b3JkOidib3hpbmcnLHRyYW5zbGF0aW9uOifQsdC+0LrRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1ib3hpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2JveGluZy5tcDMnLGFsdDonYm94aW5nIGltYWdlJ31dfV0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlT3ZlcmxheSB9IGZyb20gJy4vY29tcG9uZW50cy9vdmVybGF5JztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSAnLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZU1vZGFsV2luZG93IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsV2luZG93JztcbmltcG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NQYWdlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRpc3RpY3NQYWdlJztcbmltcG9ydCBzZXRFdmVudExpc3RlbmVycyBmcm9tICcuL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBzZXRHbG9iYWxWYWx1ZXMsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBhcHBXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZU92ZXJsYXkoKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVNb2RhbFdpbmRvdygpKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZU1haW4oKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVGb290ZXIoKSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBzZXRHbG9iYWxWYWx1ZXMoKTtcbiAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBHRVRfVkFSKCdtYWluU2VjdGlvbicpO1xuICBtYWluU2VjdGlvbi5hcHBlbmQoY3JlYXRlU3RhdGlzdGljc1BhZ2UoKSk7XG4gIHNldEV2ZW50TGlzdGVuZXJzKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiY3JlYXRlQ2FyZEl0ZW0iLCJpbWdQYXRoIiwiaW1nQWx0IiwiY2FyZFRpdGxlIiwiY2FyZFNlY3Rpb24iLCJjYXJkVHJhbnNsYXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzb3VuZFBhdGgiLCJjYXJkSXRlbSIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJzZWN0aW9uIiwic291bmQiLCJjYXJkSW5uZXIiLCJjYXJkRnJvbnQiLCJjYXJkRnJvbnRJbWdDb250YWluZXIiLCJjYXJkRnJvbnRJbWciLCJzcmMiLCJhbHQiLCJhcHBlbmQiLCJjYXJkRnJvbnRUaXRsZSIsInRleHRDb250ZW50IiwiY2FyZEZyb250Um90YXRlQnRuIiwidHlwZSIsImNhcmRCYWNrIiwiY2FyZEJhY2tJbWdDb250YWluZXIiLCJjYXJkQmFja0ltZyIsImNhcmRCYWNrVGl0bGUiLCJjcmVhdGVGb290ZXIiLCJmb290ZXJFbGVtZW50IiwicGFyYWdyYXBoIiwicGFyYWdyYXBoTGluayIsInRhcmdldCIsImhyZWYiLCJmb290ZXJDb250YWluZXIiLCJkYXRhIiwiY3JlYXRlTmF2TWVudSIsImNyZWF0ZUxvZ28iLCJjcmVhdGVUb2dnbGUiLCJjcmVhdGVOYXZNZW51QnRuIiwiY3JlYXRlU3RhdGlzdGljc0J0biIsImNyZWF0ZUhlYWRlciIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJMb2dvIiwiaGVhZGVyQnRuc0NvbnRhaW5lciIsInRvZ2dsZUJ0biIsInN0YXRCdG4iLCJoZWFkZXJOYXYiLCJuYXZNZW51QnRuIiwibmF2aWdhdGlvbk1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IiwiaGlkZVN0YXRUYWJsZSIsIkdFVF9WQVIiLCJsb2dvVGV4dCIsImxvZ29IcmVmIiwiaGVhZGVyTG9nb0xpbmsiLCJsb2dvRnVuY3Rpb25hbGl0eSIsInNldExvZ29FdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24iLCJpc01haW5NZW51IiwiaXNDYXJkIiwiaXNUcmFpbk1vZGUiLCJpc1BsYXlNb2RlIiwidHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSIsImlzR2FtZVN0YXJ0ZWQiLCJpc0FjdGl2ZUNhcmQiLCJ1cGRhdGVTb3VuZExpc3QiLCJhZGRTY29yZUljb24iLCJwbGF5U291bmQiLCJpc0dhbWVPdmVyIiwiaXNHYW1lT3ZlclN1Y2Nlc3MiLCJ1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEiLCJ1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSIsInNob3dPdmVybGF5IiwiY3JlYXRlUGxheVJlcGVhdEJ0biIsInBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5Iiwic2hvd01vZGFsV2luZG93IiwiaGlkZU1vZGFsV2luZG93IiwiY3JlYXRlTWFpbiIsIm1haW5FbGVtZW50IiwibWFpbkNvbnRhaW5lciIsInNjb3JlTGluZSIsImNhdGVnb3J5TmFtZSIsImNhcmRMaXN0IiwiY2F0ZWdvcnkiLCJtb2RlIiwicGxheVJlcGVhdEJ0biIsIm1haW5NZW51RnVuY3Rpb25hbGl0eSIsImNsb3Nlc3QiLCJtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkiLCJldmVudCIsImNhcmRzTGlzdCIsImN1cnJlbnRDYXJkIiwiY3VycmVudENhcmRGcm9udCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50Q2FyZFNvdW5kIiwiY3VycmVudFNvdW5kIiwiYXQiLCJjb3JyZWN0QW5zd2VyU291bmQiLCJzdWNjZXNzU291bmQiLCJjb3JyZWN0SWNvblNyYyIsIndyb25nSWNvblNyYyIsIndyb25nQW5zd2VyU291bmQiLCJmYWlsdXJlU291bmQiLCJjb250YWlucyIsInNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSIsImhpZGVPdmVybGF5IiwiY3JlYXRlTW9kYWxXaW5kb3ciLCJtb2RhbFdpbmRvdyIsImljb24iLCJ0ZXh0IiwibW9kYWxXaW5kb3dJY29uIiwibW9kYWxXaW5kb3dUZXh0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNyZWF0ZU5hdk1lbnVJdGVtIiwiZGF0YVNldCIsIm5hdk1lbnVVbCIsImkiLCJvcGVuTmF2TWVudSIsImhlYWRlck1lbnUiLCJuYXZNZW51TGlua3MiLCJmb3JFYWNoIiwibGluayIsInRhYkluZGV4IiwiY2xvc2VOYXZNZW51Iiwic2V0TmF2TWVudUFjdGl2ZVN0YXRlIiwibGlua3MiLCJsaW5rU2VjdGlvbiIsInJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSIsImhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5IiwiaGFtYnVyZ2VyQnRuIiwiY2xpY2siLCJzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciIsInNwYW4xIiwic3BhbjIiLCJzcGFuMyIsIm5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IiwiY2FwaXRhbGl6ZUZpcnN0V29yZCIsImxpbmtOYW1lIiwibGkiLCJjb25jYXQiLCJjcmVhdGVPdmVybGF5Iiwib3ZlcmxheUVsZW1lbnQiLCJvdmVybGF5IiwiYm9keSIsIm92ZXJsYXlGdW5jdGlvbmFsaXR5IiwiYnV0dG9uIiwic291bmRzTGlzdCIsInJlc2V0UGxheVJlcGVhdEJ0blN0YXRlIiwic2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkiLCJjcmVhdGVTY29yZUxpbmVJY29uIiwic2NvcmVJY29uIiwiY3JlYXRlU3RhdGlzdGljc1RhYmxlIiwic2V0R2xvYmFsVmFsdWVzIiwic2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSIsInNob3dTdGF0VGFibGUiLCJTRVRfVkFSIiwic3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJkb2N1bWVudCIsInN0YXRpc3RpY3NQYWdlIiwic3RhdGlzdGljc1BhZ2VDb250YWluZXIiLCJzdGF0aXN0aWNzVGFibGUiLCJzdGF0aXN0aWNEYXRhIiwic2xpY2UiLCJyZXBlYXRCdG4iLCJzb3J0IiwiYSIsImIiLCJlbGVtMSIsImVsZW0yIiwicmVwZWF0ZWREYXRhIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImVsZW0iLCJUcmFuc2xhdGlvbiIsInJlcGVhdGVkRGF0YVNldCIsInNlY3Rpb25Xb3JkcyIsImZsYXQiLCJpbmNsdWRlcyIsInRyYW5zbGF0aW9uIiwiZGlzYWJsZWQiLCJjcmVhdGVEaWZmV29yZHNTZWN0aW9uIiwiY3JlYXRlU3RhdGlzdGljc1BhZ2UiLCJzdGF0aXN0aWNzRGF0YSIsInN0YXRpc3RpY3NQYWdlQnV0dG9ucyIsInJlc2V0QnRuIiwic3RhdGlzdGljc1BhZ2VUYWJsZSIsInJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJyZXNldFN0YXRCdG4iLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHkiLCJyZXBlYXREaWZmV29yZHNCdG4iLCJ1cGRhdGVNb2RlIiwiYXJpYVByZXNzZWQiLCJ0b2dnbGVNb2RlVHJhaW4iLCJ0b2dnbGVNb2RlUGxheSIsInRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkiLCJzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJuYW1lIiwiZWxlbWVudCIsImNhcmQiLCJpY29uc0Ftb3VudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkc0Ftb3VudCIsImNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyIiwiY29udGFpbmVyIiwiaW5uZXJIVE1MIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJzaHVmZmxlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfcmVmIiwicG9wIiwiY3JlYXRlTmV3U291bmRzTGlzdCIsImNhcmRzIiwicHVzaCIsInBlcmNlbnRDb3JyZWN0QW5zd2VycyIsIm9iaiIsInJvdW5kIiwiQ29ycmVjdCIsIkluY29ycmVjdCIsImNyZWF0ZVN0YXJ0aW5nU3RhdGlzdGljRGF0YSIsInJlc3VsdCIsIkNhdGVnb3J5Iiwic2VjdGlvblRpdGxlIiwiV29yZCIsIndvcmQiLCJUcmFpbmVkIiwiY3JlYXRlU3RhdGlzdGljc0RhdGEiLCJzYXZlZERhdGEiLCJnZXRJdGVtIiwic3RhcnRpbmdEYXRhIiwic3RhcnRpbmdEYXRhVG9Kc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJhcHBseSIsImN1cnJlbnREYXRhIiwicGFyc2UiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInJlc2V0Q2FyZHNTdGF0ZSIsIm1haW5TZWN0aW9uIiwibWFpblNlY3Rpb25Db250YWluZXIiLCJyZXNldENhcmRzU291bmRzTGlzdCIsInJlc2V0U2NvcmVMaW5lIiwicGxheU1vZGUiLCJjcmVhdGVTdGF0aXN0aWNzVGFibGVIZWFkIiwic3RhdGlzdGljc1RhYmxlSGVhZCIsImhlYWRlclJvdyIsImhlYWRlclJvd0RhdGEiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiaGVhZGVyUm93VGgiLCJjb2x1bW4iLCJjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5Iiwic3RhdGlzdGljc1RhYmxlQm9keSIsInRCb2R5Um93IiwidEJvZHlSb3dEYXRhIiwidmFsdWVzIiwicm93Q2F0ZWdvcnkiLCJyb3dXb3JkIiwicm93IiwidmFsdWUiLCJpbmRleCIsInRCb2R5Um93Q2VsbCIsImNlbGwiLCJzdGF0VGFibGUiLCJzdGF0VGFibGVIZWFkZXIiLCJzdGF0VGFibGVIZWFkZXJDZWxscyIsInN0YXRUYWJsZUJvZHkiLCJzb3J0VHlwZSIsInNvcnRDYXRlZ29yeSIsInNvcnRDYXRlZ29yeUNlbGxzIiwic29ydENhdGVnb3J5Q2VsbHNWYWx1ZXMiLCJBcnJheSIsImZyb20iLCJhcmVFbXB0eUNlbGxzIiwiZXZlcnkiLCJudW0xIiwibnVtMiIsImxvY2FsZUNvbXBhcmUiLCJyZXZlcnNlIiwiY3VycmVudEl0ZW0iLCJjYXJkTGlzdEl0ZW1zIiwiX2N1cnJlbnREYXRhJGZpbHRlciIsIl9jdXJyZW50RGF0YSRmaWx0ZXIyIiwiX3NsaWNlZFRvQXJyYXkiLCJjdXJyZW50RGF0YVRvSnNvbiIsInN0YXJ0SW1hZ2UiLCJpbWFnZSIsImF1ZGlvU3JjIiwic2VjdGlvbkRhdGEiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyb3RhdGVDYXJkIiwicm90YXRlQmFjayIsInByZXBlbmQiLCJWQVJJQUJMRVMiLCJtb2RhbFdpbmRvd0ljb25XaW4iLCJtb2RhbFdpbmRvd0ljb25Mb3NlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=