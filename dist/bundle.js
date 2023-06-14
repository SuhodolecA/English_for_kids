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


// Stop here
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{section:'home',category:'main-menu'},{section:'clothes',startImage:'./assets/images/start-page-cards-img/v-sweater.png',linkPath:'#clothes',sectionTitle:'Clothes',sectionWords:[{word:'cap',translation:'шапка',image:'./assets/images/cards-images/clothes/a-cap.png',audioSrc:'assets/audio/clothes/cap.mp3',alt:'cap image'},{word:'jacket',translation:'куртка',image:'/assets/images/cards-images/clothes/a-jacket.png',audioSrc:'assets/audio/clothes/jacket.mp3',alt:'jacket image'},{word:'scarf',translation:'шарф',image:'./assets/images/cards-images/clothes/a-scarf.png',audioSrc:'assets/audio/clothes/scarf.mp3',alt:'scarf image'},{word:'shoes',translation:'ботинки',image:'./assets/images/cards-images/clothes/a-shoes.png',audioSrc:'assets/audio/clothes/shoes.mp3',alt:'shoes image'},{word:'blouse',translation:'блузка',image:'./assets/images/cards-images/clothes/v-blouse.png',audioSrc:'assets/audio/clothes/blouse.mp3',alt:'blouse image'},{word:'coat',translation:'пальто',image:'./assets/images/cards-images/clothes/v-coat.png',audioSrc:'assets/audio/clothes/coat.mp3',alt:'coat image'},{word:'dress',translation:'платье',image:'./assets/images/cards-images/clothes/v-dress.png',audioSrc:'assets/audio/clothes/dress.mp3',alt:'dress image'},{word:'shirt',translation:'рубашка',image:'./assets/images/cards-images/clothes/v-shirt.png',audioSrc:'assets/audio/clothes/shirt.mp3',alt:'shirt image'}]},{section:'colours',startImage:'./assets/images/start-page-cards-img/v-yellow.png',linkPath:'#colours',sectionTitle:'Colours',sectionWords:[{word:'black',translation:'черный',image:'./assets/images/cards-images/colours/v-black.png',audioSrc:'assets/audio/colours/black.mp3',alt:'black image'},{word:'blue',translation:'синий',image:'./assets/images/cards-images/colours/v-blue.png',audioSrc:'assets/audio/colours/blue.mp3',alt:'blue image'},{word:'brown',translation:'коричневый',image:'./assets/images/cards-images/colours/v-brown.png',audioSrc:'assets/audio/colours/brown.mp3',alt:'brown image'},{word:'green',translation:'зелёный',image:'./assets/images/cards-images/colours/v-green.png',audioSrc:'assets/audio/colours/green.mp3',alt:'green image'},{word:'grey',translation:'серый',image:'./assets/images/cards-images/colours/v-grey.png',audioSrc:'assets/audio/colours/grey.mp3',alt:'grey image'},{word:'orange',translation:'оранжевый',image:'./assets/images/cards-images/colours/v-orange-c.png',audioSrc:'assets/audio/colours/orange.mp3',alt:'orange image'},{word:'pink',translation:'розовый',image:'./assets/images/cards-images/colours/v-pink.png',audioSrc:'assets/audio/colours/pink.mp3',alt:'pink image'},{word:'red',translation:'красный',image:'./assets/images/cards-images/colours/v-red.png',audioSrc:'assets/audio/colours/red.mp3',alt:'red image'}]},{section:'family',startImage:'./assets/images/start-page-cards-img/v-family.png',linkPath:'#family',sectionTitle:'Family',sectionWords:[{word:'aunt',translation:'тетя',image:'./assets/images/cards-images/family/v-aunt.png',audioSrc:'assets/audio/family/aunt.mp3',alt:'aunt image'},{word:'brother',translation:'брат',image:'./assets/images/cards-images/family/v-brother.png',audioSrc:'assets/audio/family/brother.mp3',alt:'brother image'},{word:'daddy',translation:'папа',image:'./assets/images/cards-images/family/v-daddy.png',audioSrc:'assets/audio/family/daddy.mp3',alt:'daddy image'},{word:'grandma',translation:'бабушка',image:'./assets/images/cards-images/family/v-grandma.png',audioSrc:'assets/audio/family/grandma.mp3',alt:'grandma image'},{word:'grandpa',translation:'дедушка',image:'./assets/images/cards-images/family/v-grandpa.png',audioSrc:'assets/audio/family/grandpa.mp3',alt:'grandpa image'},{word:'mummy',translation:'мама',image:'./assets/images/cards-images/family/v-mummy.png',audioSrc:'assets/audio/family/mummy.mp3',alt:'mummy image'},{word:'sister',translation:'сестра',image:'./assets/images/cards-images/family/v-sister.png',audioSrc:'assets/audio/family/sister.mp3',alt:'sister image'},{word:'uncle',translation:'дядя',image:'./assets/images/cards-images/family/v-uncle.png',audioSrc:'assets/audio/family/uncle.mp3',alt:'uncle image'}]},{section:'food',startImage:'./assets/images/start-page-cards-img/a-hamburger.png',linkPath:'#food',sectionTitle:'Food',sectionWords:[{word:'egg',translation:'яйцо',image:'./assets/images/cards-images/food/a-egg.png',audioSrc:'assets/audio/food/egg.mp3',alt:'egg image'},{word:'ice cream',translation:'мороженое',image:'./assets/images/cards-images/food/a-icecream.png',audioSrc:'assets/audio/food/ice-cream.mp3',alt:'ice cream image'},{word:'bread',translation:'хлеб',image:'./assets/images/cards-images/food/v-bread.png',audioSrc:'assets/audio/food/bread.mp3',alt:'bread image'},{word:'butter',translation:'масло',image:'./assets/images/cards-images/food/v-butter.png',audioSrc:'assets/audio/food/butter.mp3',alt:'butter image'},{word:'cake',translation:'пирожное',image:'./assets/images/cards-images/food/v-cake.png',audioSrc:'assets/audio/food/cake.mp3',alt:'cake image'},{word:'cheese',translation:'сыр',image:'./assets/images/cards-images/food/v-cheese.png',audioSrc:'assets/audio/food/cheese.mp3',alt:'cheese image'},{word:'pizza',translation:'пицца',image:'./assets/images/cards-images/food/v-pizza.png',audioSrc:'assets/audio/food/pizza.mp3',alt:'pizza image'},{word:'sandwich',translation:'бутерброд',image:'./assets/images/cards-images/food/v-sandwich.png',audioSrc:'assets/audio/food/sandwich.mp3',alt:'sandwich image'}]},{section:'fruits',startImage:'./assets/images/start-page-cards-img/v-strawberry.png',linkPath:'#fruits',sectionTitle:'Fruits',sectionWords:[{word:'apple',translation:'яблоко',image:'./assets/images/cards-images/fruits/a-apple.png',audioSrc:'assets/audio/fruits/apple.mp3',alt:'apple image'},{word:'cherry',translation:'вишня',image:'./assets/images/cards-images/fruits/a-cherry.png',audioSrc:'assets/audio/fruits/cherry.mp3',alt:'cherry image'},{word:'grape',translation:'фигурное катание',image:'./assets/images/cards-images/fruits/a-grapes.png',audioSrc:'assets/audio/fruits/grape.mp3',alt:'grape image'},{word:'orange',translation:'апельсин',image:'./assets/images/cards-images/fruits/a-orange.png',audioSrc:'assets/audio/fruits/orange.mp3',alt:'orange image'},{word:'peach',translation:'персик',image:'./assets/images/cards-images/fruits/a-peach.png',audioSrc:'assets/audio/fruits/peach.mp3',alt:'peach image'},{word:'pineapple',translation:'ананас',image:'./assets/images/cards-images/fruits/a-pineapple.png',audioSrc:'assets/audio/fruits/pineapple.mp3',alt:'pineapple image'},{word:'banana',translation:'банан',image:'./assets/images/cards-images/fruits/v-banana.png',audioSrc:'assets/audio/fruits/banana.mp3',alt:'banana image'},{word:'lemon',translation:'лимон',image:'./assets/images/cards-images/fruits/v-lemon.png',audioSrc:'assets/audio/fruits/lemon.mp3',alt:'lemon image'}]},{section:'pets',startImage:'./assets/images/start-page-cards-img/v-pony.png',linkPath:'#pets',sectionTitle:'Pets',sectionWords:[{word:'hamster',translation:'хомяк',image:'./assets/images/cards-images/pets/a-hamster.png',audioSrc:'assets/audio/pets/hamster.mp3',alt:'hamster image'},{word:'parrot',translation:'попугай',image:'./assets/images/cards-images/pets/a-parrot.png',audioSrc:'assets/audio/pets/parrot.mp3',alt:'parrot image'},{word:'turtle',translation:'черепаха',image:'./assets/images/cards-images/pets/a-turtle.png',audioSrc:'assets/audio/pets/turtle.mp3',alt:'turtle image'},{word:'kitten',translation:'котёнок',image:'./assets/images/cards-images/pets/h-kitten.png',audioSrc:'assets/audio/pets/kitten.mp3',alt:'kitten image'},{word:'puppy',translation:'щенок',image:'./assets/images/cards-images/pets/h-puppy.png',audioSrc:'assets/audio/pets/puppy.mp3',alt:'puppy image'},{word:'ferret',translation:'хорек',image:'./assets/images/cards-images/pets/v-ferret.png',audioSrc:'assets/audio/pets/ferret.mp3',alt:'ferret image'},{word:'fish',translation:'рыба',image:'./assets/images/cards-images/pets/v-fish.png',audioSrc:'assets/audio/pets/fish.mp3',alt:'fish image'},{word:'mouse',translation:'мышь',image:'./assets/images/cards-images/pets/v-mouse.png',audioSrc:'assets/audio/pets/mouse.mp3',alt:'mouse image'}]},{section:'school',startImage:'./assets/images/start-page-cards-img/v-pupil.png',linkPath:'#school',sectionTitle:'School',sectionWords:[{word:'board',translation:'доска',image:'./assets/images/cards-images/school/v-board.png',audioSrc:'assets/audio/school/board.mp3',alt:'board image'},{word:'book',translation:'книга',image:'./assets/images/cards-images/school/v-book.png',audioSrc:'assets/audio/school/book.mp3',alt:'book image'},{word:'calculator',translation:'черепаха',image:'./assets/images/cards-images/school/v-calculator.png',audioSrc:'assets/audio/school/calculator.mp3',alt:'calculator image'},{word:'classroom',translation:'школьный класс',image:'./assets/images/cards-images/school/v-classroom.png',audioSrc:'assets/audio/school/classroom.mp3',alt:'classroom image'},{word:'map',translation:'карта',image:'./assets/images/cards-images/school/v-map.png',audioSrc:'assets/audio/school/map.mp3',alt:'map image'},{word:'notebook',translation:'тетрадь',image:'./assets/images/cards-images/school/v-notebook.png',audioSrc:'assets/audio/school/notebook.mp3',alt:'notebook image'},{word:'schoolbag',translation:'портфель',image:'./assets/images/cards-images/school/v-schoolbag.png',audioSrc:'assets/audio/school/schoolbag.mp3',alt:'schoolbag image'},{word:'teacher',translation:'учитель',image:'./assets/images/cards-images/school/v-teacher.png',audioSrc:'assets/audio/school/teacher.mp3',alt:'teacher image'}]},{section:'sport',startImage:'./assets/images/start-page-cards-img/v-tennis.png',linkPath:'#sport',sectionTitle:'Sport',sectionWords:[{word:'basketball',translation:'баскетбол',image:'./assets/images/cards-images/sport/v-basketball.png',audioSrc:'assets/audio/sport/basketball.mp3',alt:'basketball image'},{word:'cycling',translation:'езда на велосипеде',image:'./assets/images/cards-images/sport/v-cycling.png',audioSrc:'assets/audio/sport/cycling.mp3',alt:'cycling image'},{word:'figure skating',translation:'фигурное катание',image:'./assets/images/cards-images/sport/v-figure-skating.png',audioSrc:'assets/audio/sport/figure-skating.mp3',alt:'figure skating image'},{word:'football',translation:'футбол',image:'./assets/images/cards-images/sport/v-football.png',audioSrc:'assets/audio/sport/football.mp3',alt:'football image'},{word:'hockey',translation:'хоккей',image:'./assets/images/cards-images/sport/v-hockey.png',audioSrc:'assets/audio/sport/hockey.mp3',alt:'hockey image'},{word:'skiing',translation:'лыжный спорт',image:'./assets/images/cards-images/sport/v-skiing.png',audioSrc:'assets/audio/sport/skiing.mp3',alt:'skiing image'},{word:'swimming',translation:'плавание',image:'./assets/images/cards-images/sport/v-swimming.png',audioSrc:'assets/audio/sport/swimming.mp3',alt:'swimming image'},{word:'boxing',translation:'бокс',image:'./assets/images/cards-images/sport/v-boxing.png',audioSrc:'assets/audio/sport/boxing.mp3',alt:'boxing image'}]}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RHLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbERpRyw4REFBZSxFQUFFO0VBQ2pCekcscUVBQXNCLENBQUNoQiw4REFBSSxDQUFDO0VBQzVCLElBQU15TixXQUFXLEdBQUd2TSwwREFBTyxDQUFDLGFBQWEsQ0FBQztFQUMxQ3VNLFdBQVcsQ0FBQ3pPLE1BQU0sQ0FBQ3VLLGdGQUFvQixFQUFFLENBQUM7RUFDMUNpQix5REFBaUIsRUFBRTtBQUNyQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9jYXJkSXRlbS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ28uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsV2luZG93LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51QnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51SXRlbS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc2NvcmVMaW5lSWNvbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RhdGlzdGljc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZUJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2Fzc2V0cy9kYXRhL2RhdGEuanNvbiIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzYxNSIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVDYXJkSXRlbSA9IChpbWdQYXRoLCBpbWdBbHQsIGNhcmRUaXRsZSwgY2FyZFNlY3Rpb24sIGNhcmRUcmFuc2xhdGlvbiA9ICcnLCBzb3VuZFBhdGggPSAnJykgPT4ge1xuICAvLyBjcmVhdGUgY2FyZCBpdGVtXG4gIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkLWxpc3RfX2l0ZW0nKTtcbiAgY2FyZEl0ZW0uZGF0YXNldC5zZWN0aW9uID0gY2FyZFNlY3Rpb247XG4gIGNhcmRJdGVtLmRhdGFzZXQuc291bmQgPSBzb3VuZFBhdGg7XG5cbiAgLy8gY3JlYXRlIGNhcmQgaW5uZXJcbiAgY29uc3QgY2FyZElubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRJbm5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWlubmVyJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgc2lkZVxuICBjb25zdCBjYXJkRnJvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEZyb250LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnQnKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCBpbWFnZSBjb250YWluZXJcbiAgY29uc3QgY2FyZEZyb250SW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19waWMnKTtcbiAgY2FyZEZyb250SW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcGljJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgaW1hZ2VcbiAgY29uc3QgY2FyZEZyb250SW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNhcmRGcm9udEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19waWMtaW1nJyk7XG4gIGNhcmRGcm9udEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICBjYXJkRnJvbnRJbWcuc3JjID0gaW1nUGF0aDtcbiAgY2FyZEZyb250SW1nLmFsdCA9IGltZ0FsdDtcblxuICBjYXJkRnJvbnRJbWdDb250YWluZXIuYXBwZW5kKGNhcmRGcm9udEltZyk7XG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250SW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCB0aXRsZVxuICBjb25zdCBjYXJkRnJvbnRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNhcmRGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnRfX3RpdGxlJyk7XG4gIGNhcmRGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgY2FyZEZyb250VGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVGl0bGU7XG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250VGl0bGUpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHJvdGF0ZSBidXR0b25cbiAgY29uc3QgY2FyZEZyb250Um90YXRlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhcmRGcm9udFJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X19yb3RhdGUnKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idG4nKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgY2FyZEZyb250Um90YXRlQnRuLnRleHRDb250ZW50ID0gJ3JvdGF0ZSBidXR0b24nO1xuXG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250Um90YXRlQnRuKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIHNpZGVcbiAgY29uc3QgY2FyZEJhY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJhY2suY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayBpbWFnZSBjb250YWluZXJcbiAgY29uc3QgY2FyZEJhY2tJbWdDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJhY2tJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrX19waWMnKTtcbiAgY2FyZEJhY2tJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1waWMnKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIGltYWdlXG4gIGNvbnN0IGNhcmRCYWNrSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNhcmRCYWNrSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFja19fcGljLWltZycpO1xuICBjYXJkQmFja0ltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICBjYXJkQmFja0ltZy5zcmMgPSBpbWdQYXRoO1xuICBjYXJkQmFja0ltZy5hbHQgPSBpbWdBbHQ7XG5cbiAgY2FyZEJhY2tJbWdDb250YWluZXIuYXBwZW5kKGNhcmRCYWNrSW1nKTtcblxuICBjYXJkQmFjay5hcHBlbmQoY2FyZEJhY2tJbWdDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgdGl0bGVcbiAgY29uc3QgY2FyZEJhY2tUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNhcmRCYWNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrX190aXRsZScpO1xuICBjYXJkQmFja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgY2FyZEJhY2tUaXRsZS50ZXh0Q29udGVudCA9IGNhcmRUcmFuc2xhdGlvbjtcblxuICBjYXJkQmFjay5hcHBlbmQoY2FyZEJhY2tUaXRsZSk7XG5cbiAgY2FyZElubmVyLmFwcGVuZChjYXJkRnJvbnQpO1xuICBjYXJkSW5uZXIuYXBwZW5kKGNhcmRCYWNrKTtcblxuICBjYXJkSXRlbS5hcHBlbmQoY2FyZElubmVyKTtcbiAgcmV0dXJuIGNhcmRJdGVtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZEl0ZW07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuLy8gU3RvcCBoZXJlXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBmb290ZXJcbiAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIC8vIGNyZWF0ZSBmb290ZXIgcGFyYWdyYXBoXG4gIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0Jyk7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5ICc7XG5cbiAgLy8gY3JlYXRlIGZvb3RlciBwYXJhZ3JhcGggbGlua1xuICBjb25zdCBwYXJhZ3JhcGhMaW5rID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBwYXJhZ3JhcGhMaW5rLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0X19saW5rJyk7XG4gIHBhcmFncmFwaExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIHBhcmFncmFwaExpbmsudGV4dENvbnRlbnQgPSAnQW50b24gU3VraGFkb2xldHMnO1xuICBwYXJhZ3JhcGhMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1N1aG9kb2xlY0EnO1xuXG4gIHBhcmFncmFwaC5hcHBlbmQocGFyYWdyYXBoTGluayk7XG5cbiAgLy8gY3JlYXRlIGZvb3RlciBjb250YWluZXJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBmb290ZXJDb250YWluZXIuYXBwZW5kKHBhcmFncmFwaCk7XG5cbiAgZm9vdGVyRWxlbWVudC5hcHBlbmQoZm9vdGVyQ29udGFpbmVyKTtcblxuICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcbiIsImltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IGNyZWF0ZU5hdk1lbnUgfSBmcm9tICcuL25hdk1lbnUnO1xuaW1wb3J0IHsgY3JlYXRlTG9nbyB9IGZyb20gJy4vbG9nbyc7XG5pbXBvcnQgeyBjcmVhdGVUb2dnbGUgfSBmcm9tICcuL3RvZ2dsZUJ0bic7XG5pbXBvcnQgeyBjcmVhdGVOYXZNZW51QnRuIH0gZnJvbSAnLi9uYXZNZW51QnRuJztcbmltcG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NCdG4gfSBmcm9tICcuL3N0YXRpc3RpY3NCdG4nO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGxvZ29cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUxvZ28oJ0VuZ2xpc2ggZm9yIGtpZHMnLCAnI2hvbWUnKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckJ0bnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgdG9nZ2xlXG4gIGNvbnN0IHRvZ2dsZUJ0biA9IGNyZWF0ZVRvZ2dsZSgpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgc3RhdGlzdGljcyBidXR0b25cbiAgY29uc3Qgc3RhdEJ0biA9IGNyZWF0ZVN0YXRpc3RpY3NCdG4oKTtcblxuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVCdG4pO1xuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZChzdGF0QnRuKTtcblxuICAvLyBjcmVhdGUgbmF2XG4gIGNvbnN0IGhlYWRlck5hdiA9IGNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hdicpO1xuXG4gIC8vIGNyZWF0ZSBuYXYgbWVudSBidXR0b25cbiAgY29uc3QgbmF2TWVudUJ0biA9IGNyZWF0ZU5hdk1lbnVCdG4oKTtcblxuICAvLyBjcmVhdGUgbmF2IG1lbnVcbiAgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSBjcmVhdGVOYXZNZW51KGRhdGEpO1xuXG4gIGhlYWRlck5hdi5hcHBlbmQobmF2TWVudUJ0bik7XG4gIGhlYWRlck5hdi5hcHBlbmQobmF2aWdhdGlvbk1lbnUpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJOYXYpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckxvZ28pO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckJ0bnNDb250YWluZXIpO1xuICBoZWFkZXJFbGVtZW50LmFwcGVuZChoZWFkZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBoZWFkZXJFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCwgaGlkZVN0YXRUYWJsZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZUxvZ28gPSAobG9nb1RleHQsIGxvZ29IcmVmKSA9PiB7XG4gIC8vIGNyZWF0ZSBsb2dvXG4gIGNvbnN0IGhlYWRlckxvZ28gPSBjcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG5cbiAgY29uc3QgaGVhZGVyTG9nb0xpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIGhlYWRlckxvZ29MaW5rLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvX19saW5rJyk7XG4gIGhlYWRlckxvZ29MaW5rLnRleHRDb250ZW50ID0gbG9nb1RleHQ7XG4gIGhlYWRlckxvZ29MaW5rLmhyZWYgPSBsb2dvSHJlZjtcblxuICBoZWFkZXJMb2dvLmFwcGVuZChoZWFkZXJMb2dvTGluayk7XG5cbiAgcmV0dXJuIGhlYWRlckxvZ287XG59O1xuXG5jb25zdCBsb2dvRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgaGlkZVN0YXRUYWJsZSgpO1xuICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KGRhdGEpO1xufTtcblxuY29uc3Qgc2V0TG9nb0V2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckxvZ28gPSBHRVRfVkFSKCdoZWFkZXJMb2dvJyk7XG4gIGhlYWRlckxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dvRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMb2dvLCBzZXRMb2dvRXZlbnRMaXN0ZW5lciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCBpc01haW5NZW51LCBpc0NhcmQsIGlzVHJhaW5Nb2RlLFxuICBpc1BsYXlNb2RlLCB0cmFpbk1vZGVGdW5jdGlvbmFsaXR5LCBpc0dhbWVTdGFydGVkLFxuICBpc0FjdGl2ZUNhcmQsIHVwZGF0ZVNvdW5kTGlzdCwgYWRkU2NvcmVJY29uLCBwbGF5U291bmQsIGlzR2FtZU92ZXIsXG4gIGlzR2FtZU92ZXJTdWNjZXNzLCB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSB9IGZyb20gJy4vbmF2TWVudSc7XG5pbXBvcnQgeyBzaG93T3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5UmVwZWF0QnRuLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgeyBzaG93TW9kYWxXaW5kb3csIGhpZGVNb2RhbFdpbmRvdyB9IGZyb20gJy4vbW9kYWxXaW5kb3cnO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgbWFpbiBlbGVtZW50XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgLy8gY3JlYXRlIG1haW4gY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc2NvcmUgbGluZVxuICBjb25zdCBzY29yZUxpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2NvcmVMaW5lLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWxpbmUnKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZChzY29yZUxpbmUpO1xuXG4gIC8vIGNyZWF0ZSBjYXRlZ29yeSBuYW1lXG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNhdGVnb3J5TmFtZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1uYW1lJyk7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9ICcnO1xuXG4gIC8vIGNhcmRzIGxpc3RcbiAgY29uc3QgY2FyZExpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjYXJkTGlzdC5jbGFzc0xpc3QuYWRkKCdjYXJkcy1saXN0Jyk7XG4gIGNhcmRMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSAnJztcbiAgY2FyZExpc3QuZGF0YXNldC5tb2RlID0gJyc7XG5cbiAgLy8gY3JlYXRlIHBsYXlSZXBlYXQgYnV0dG9uXG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBjcmVhdGVQbGF5UmVwZWF0QnRuKCk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnlOYW1lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2FyZExpc3QpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChwbGF5UmVwZWF0QnRuKTtcblxuICBtYWluRWxlbWVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG1haW5FbGVtZW50O1xufTtcblxuY29uc3QgbWFpbk1lbnVGdW5jdGlvbmFsaXR5ID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCB7IHNlY3Rpb24gfSA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJykuZGF0YXNldDtcbiAgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbihkYXRhLCBzZWN0aW9uKTtcbiAgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUoc2VjdGlvbik7XG59O1xuXG5jb25zdCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgY2FyZElubmVyID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWlubmVyJyk7XG4gIGlmIChpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNDYXJkKHRhcmdldCkpIHtcbiAgICBtYWluTWVudUZ1bmN0aW9uYWxpdHkodGFyZ2V0KTtcbiAgfSBlbHNlIGlmICghaXNNYWluTWVudShjYXJkc0xpc3QpICYmIGlzVHJhaW5Nb2RlKGNhcmRzTGlzdCkgJiYgaXNDYXJkKHRhcmdldCkpIHtcbiAgICB0cmFpbk1vZGVGdW5jdGlvbmFsaXR5KHRhcmdldCwgY2FyZElubmVyKTtcbiAgfSBlbHNlIGlmICghaXNNYWluTWVudShjYXJkc0xpc3QpICYmIGlzUGxheU1vZGUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KVxuICAgICYmIGlzR2FtZVN0YXJ0ZWQoKSkge1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZEZyb250ID0gY3VycmVudENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtZnJvbnQnKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZFNvdW5kID0gY3VycmVudENhcmQuZGF0YXNldC5zb3VuZDtcbiAgICBjb25zdCBjdXJyZW50U291bmQgPSBHRVRfVkFSKCdzb3VuZHNMaXN0JykuYXQoLTEpO1xuICAgIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gICAgY29uc3QgY29ycmVjdEFuc3dlclNvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL2NvcnJlY3QtY2hvaWNlLm1wMyc7XG4gICAgY29uc3Qgc3VjY2Vzc1NvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL3N1Y2Nlc3MubXAzJztcbiAgICBjb25zdCBjb3JyZWN0SWNvblNyYyA9ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL2NvcnJlY3QucG5nJztcbiAgICBjb25zdCB3cm9uZ0ljb25TcmMgPSAnYXNzZXRzL2ltYWdlcy9zY29yZS1pY29ucy93cm9uZy5wbmcnO1xuICAgIGNvbnN0IHdyb25nQW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvbmVnYXRpdmVfYmVlcHMubXAzJztcbiAgICBjb25zdCBmYWlsdXJlU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvZmFpbHVyZS5tcDMnO1xuICAgIGlmIChpc0FjdGl2ZUNhcmQoY3VycmVudENhcmRGcm9udCkgJiYgIXBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5aW5nJykpIHtcbiAgICAgIHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSgncGxheScsIGN1cnJlbnRDYXJkLCBjdXJyZW50Q2FyZFNvdW5kID09PSBjdXJyZW50U291bmQpO1xuICAgICAgaWYgKGN1cnJlbnRDYXJkU291bmQgPT09IGN1cnJlbnRTb3VuZCkge1xuICAgICAgICBjdXJyZW50Q2FyZEZyb250LmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgIGFkZFNjb3JlSWNvbihjdXJyZW50Q2FyZCwgY29ycmVjdEljb25TcmMpO1xuICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIGNvcnJlY3RBbnN3ZXJTb3VuZCk7XG4gICAgICAgIHVwZGF0ZVNvdW5kTGlzdCgpO1xuICAgICAgICBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eShwbGF5UmVwZWF0QnRuKTtcbiAgICAgICAgaWYgKGlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgIHNob3dPdmVybGF5KCk7XG4gICAgICAgICAgaWYgKGlzR2FtZU92ZXJTdWNjZXNzKCkpIHtcbiAgICAgICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgc3VjY2Vzc1NvdW5kKTtcbiAgICAgICAgICAgIHNob3dNb2RhbFdpbmRvdygpO1xuICAgICAgICAgICAgaGlkZU1vZGFsV2luZG93KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgZmFpbHVyZVNvdW5kKTtcbiAgICAgICAgICAgIHNob3dNb2RhbFdpbmRvdygpO1xuICAgICAgICAgICAgaGlkZU1vZGFsV2luZG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRTY29yZUljb24oY3VycmVudENhcmQsIHdyb25nSWNvblNyYyk7XG4gICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgd3JvbmdBbnN3ZXJTb3VuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTWFpbiwgbWFpbk1lbnVGdW5jdGlvbmFsaXR5LCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHksXG4gIHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBpc0dhbWVPdmVyU3VjY2VzcywgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCB7IGhpZGVPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcblxuY29uc3QgY3JlYXRlTW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsV2luZG93ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvdycpO1xuXG4gIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfX2ljb24nKTtcbiAgaWNvbi5zcmMgPSAnJztcbiAgaWNvbi5hbHQgPSAnaWNvbic7XG5cbiAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfX3RleHQnKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9ICcnO1xuXG4gIG1vZGFsV2luZG93LmFwcGVuZChpY29uKTtcbiAgbW9kYWxXaW5kb3cuYXBwZW5kKHRleHQpO1xuXG4gIHJldHVybiBtb2RhbFdpbmRvdztcbn07XG5cbmNvbnN0IHNob3dNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBHRVRfVkFSKCdtb2RhbFdpbmRvdycpO1xuICBjb25zdCBtb2RhbFdpbmRvd0ljb24gPSBHRVRfVkFSKCdtb2RhbFdpbmRvd0ljb24nKTtcbiAgY29uc3QgbW9kYWxXaW5kb3dUZXh0ID0gR0VUX1ZBUignbW9kYWxXaW5kb3dUZXh0Jyk7XG4gIGlmIChpc0dhbWVPdmVyU3VjY2VzcygpKSB7XG4gICAgbW9kYWxXaW5kb3dJY29uLnNyYyA9IEdFVF9WQVIoJ21vZGFsV2luZG93SWNvbldpbicpO1xuICAgIG1vZGFsV2luZG93VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgYXJlIHdpbiEnO1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICB9IGVsc2Uge1xuICAgIG1vZGFsV2luZG93SWNvbi5zcmMgPSBHRVRfVkFSKCdtb2RhbFdpbmRvd0ljb25Mb3NlJyk7XG4gICAgbW9kYWxXaW5kb3dUZXh0LnRleHRDb250ZW50ID0gJ1lvdSBhcmUgbG9zZSEnO1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICB9XG59O1xuXG5jb25zdCBoaWRlTW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsV2luZG93ID0gR0VUX1ZBUignbW9kYWxXaW5kb3cnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnYXBwZWFyJyk7XG4gICAgaGlkZU92ZXJsYXkoKTtcbiAgICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KGRhdGEpO1xuICB9LCAzMDAwKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1vZGFsV2luZG93LCBzaG93TW9kYWxXaW5kb3csIGhpZGVNb2RhbFdpbmRvdyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCwgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbixcbiAgaGlkZVN0YXRUYWJsZSxcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCBjcmVhdGVOYXZNZW51SXRlbSBmcm9tICcuL25hdk1lbnVJdGVtJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51ID0gKGRhdGFTZXQpID0+IHtcbiAgLy8gY3JlYXRlIG5hdiB1bFxuICBjb25zdCBuYXZNZW51VWwgPSBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZNZW51VWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnUnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFTZXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBuYXZNZW51VWwuYXBwZW5kKGNyZWF0ZU5hdk1lbnVJdGVtKGRhdGFbaV0uc2VjdGlvbikpO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1lbnVVbDtcbn07XG5cbmNvbnN0IG9wZW5OYXZNZW51ID0gKGhlYWRlck5hdikgPT4ge1xuICBjb25zdCBoZWFkZXJNZW51ID0gR0VUX1ZBUignaGVhZGVyTWVudScpO1xuICBjb25zdCBuYXZNZW51TGlua3MgPSBHRVRfVkFSKCduYXZNZW51TGlua3MnKTtcbiAgbmF2TWVudUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLnRhYkluZGV4ID0gMDtcbiAgfSk7XG4gIGhlYWRlck5hdi5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtb3V0Jyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4nKTtcbn07XG5cbmNvbnN0IGNsb3NlTmF2TWVudSA9IChoZWFkZXJOYXYpID0+IHtcbiAgY29uc3QgaGVhZGVyTWVudSA9IEdFVF9WQVIoJ2hlYWRlck1lbnUnKTtcbiAgY29uc3QgbmF2TWVudUxpbmtzID0gR0VUX1ZBUignbmF2TWVudUxpbmtzJyk7XG4gIGhlYWRlck5hdi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtaW4nKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZS1vdXQnKTtcbiAgbmF2TWVudUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLnRhYkluZGV4ID0gLTE7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0TmF2TWVudUFjdGl2ZVN0YXRlID0gKGxpbmtzLCBjYXRlZ29yeSkgPT4ge1xuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgY29uc3QgbGlua1NlY3Rpb24gPSBsaW5rLmRhdGFzZXQuc2VjdGlvbjtcbiAgICBpZiAobGlua1NlY3Rpb24gPT09IGNhdGVnb3J5KSB7XG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVOYXZNZW51QWN0aXZlU3RhdGUgPSAobGlua3MpID0+IHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgbmF2TWVudUxpbmtzID0gR0VUX1ZBUignbmF2TWVudUxpbmtzJyk7XG4gIHJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZShuYXZNZW51TGlua3MpO1xuICBzZXROYXZNZW51QWN0aXZlU3RhdGUobmF2TWVudUxpbmtzLCBjYXRlZ29yeSk7XG59O1xuXG5jb25zdCBoYW1idXJnZXJNZW51RnVuY3Rpb25hbGl0eSA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjb25zdCBoYW1idXJnZXJCdG4gPSBHRVRfVkFSKCdoYW1idXJnZXJCdG4nKTtcbiAgY29uc3QgeyBzZWN0aW9uIH0gPSB0YXJnZXQuZGF0YXNldDtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgaGlkZVN0YXRUYWJsZSgpO1xuICBpZiAoc2VjdGlvbiA9PT0gJ0hvbWUnKSB7XG4gICAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgICBoYW1idXJnZXJCdG4uY2xpY2soKTtcbiAgfSBlbHNlIGlmIChzZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbihkYXRhLCBzZWN0aW9uKTtcbiAgICBoYW1idXJnZXJCdG4uY2xpY2soKTtcbiAgfVxuICB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZShjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQpO1xufTtcblxuY29uc3Qgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGhlYWRlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW1idXJnZXJNZW51RnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVOYXZNZW51LCBvcGVuTmF2TWVudSwgY2xvc2VOYXZNZW51LCBoYW1idXJnZXJNZW51RnVuY3Rpb25hbGl0eSxcbiAgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIsIHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlLFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBzaG93T3ZlcmxheSwgaGlkZU92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IHsgb3Blbk5hdk1lbnUsIGNsb3NlTmF2TWVudSB9IGZyb20gJy4vbmF2TWVudSc7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnVCdG4gPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBuYXYgYnV0dG9uXG4gIGNvbnN0IG5hdk1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5hdk1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWhhbWJ1cmdlcicpO1xuICBuYXZNZW51QnRuLmhyZWYgPSAnIyc7XG5cbiAgY29uc3Qgc3BhbjEgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNwYW4yID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzcGFuMyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMSk7XG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4yKTtcbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjMpO1xuXG4gIHJldHVybiBuYXZNZW51QnRuO1xufTtcblxuY29uc3QgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IGhhbWJ1cmdlckJ0biA9IEdFVF9WQVIoJ2hhbWJ1cmdlckJ0bicpO1xuICBjb25zdCBoZWFkZXJOYXYgPSBHRVRfVkFSKCdoZWFkZXJOYXYnKTtcbiAgaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChoZWFkZXJOYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgIGNsb3NlTmF2TWVudShoZWFkZXJOYXYpO1xuICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3Blbk5hdk1lbnUoaGVhZGVyTmF2KTtcbiAgICAgIHNob3dPdmVybGF5KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdk1lbnVCdG4sIG5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNhcGl0YWxpemVGaXJzdFdvcmQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51SXRlbSA9IChsaW5rTmFtZSkgPT4ge1xuICAvLyBjcmVhdGUgbGlcbiAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbScpO1xuXG4gIC8vIGNyZWF0ZSBtZW51IGxpbmtcbiAgY29uc3QgbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbS1saW5rJyk7XG4gIGxpbmsuaHJlZiA9IGAjJHtsaW5rTmFtZX1gO1xuICBsaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuICBsaW5rLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0V29yZChsaW5rTmFtZSk7XG4gIGxpbmsudGFiSW5kZXggPSAtMTtcblxuICBsaS5hcHBlbmQobGluayk7XG5cbiAgcmV0dXJuIGxpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2TWVudUl0ZW07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBjbG9zZU5hdk1lbnUgfSBmcm9tICcuL25hdk1lbnUnO1xuXG5jb25zdCBjcmVhdGVPdmVybGF5ID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgb3ZlcmxheSBlbGVtZW50XG4gIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XG59O1xuXG5jb25zdCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IEdFVF9WQVIoJ292ZXJsYXknKTtcbiAgY29uc3QgYm9keSA9IEdFVF9WQVIoJ2JvZHknKTtcbiAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xufTtcblxuY29uc3Qgc2hvd092ZXJsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBHRVRfVkFSKCdvdmVybGF5Jyk7XG4gIGNvbnN0IGJvZHkgPSBHRVRfVkFSKCdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm9zY3JvbGwnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbn07XG5cbmNvbnN0IG92ZXJsYXlGdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gR0VUX1ZBUignb3ZlcmxheScpO1xuICBjb25zdCBoZWFkZXJOYXYgPSBHRVRfVkFSKCdoZWFkZXJOYXYnKTtcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaGVhZGVyTmF2LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICBoaWRlT3ZlcmxheSgpO1xuICAgICAgY2xvc2VOYXZNZW51KGhlYWRlck5hdik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU92ZXJsYXksIHNob3dPdmVybGF5LCBoaWRlT3ZlcmxheSwgb3ZlcmxheUZ1bmN0aW9uYWxpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBwbGF5U291bmQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVBsYXlSZXBlYXRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGxheS1idG4nKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ3BsYXknO1xuXG4gIHJldHVybiBidXR0b247XG59O1xuXG5jb25zdCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgY29uc3Qgc291bmRzTGlzdCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKTtcbiAgY29uc3QgY3VycmVudFNvdW5kID0gc291bmRzTGlzdC5hdCgtMSk7XG4gIGlmIChzb3VuZHNMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBwbGF5U291bmQocGxheVJlcGVhdEJ0biwgY3VycmVudFNvdW5kKTtcbiAgaWYgKCFwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0JykpIHtcbiAgICBwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlcGVhdCcpO1xuICB9XG59O1xuXG5jb25zdCByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgaWYgKHBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXBlYXQnKSkge1xuICAgIHBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgncmVwZWF0Jyk7XG4gIH1cbn07XG5cbmNvbnN0IHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICBwbGF5UmVwZWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUGxheVJlcGVhdEJ0biwgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHksIHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlLFxuICBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVTY29yZUxpbmVJY29uID0gKHNyYykgPT4ge1xuICBjb25zdCBzY29yZUljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2NvcmVJY29uLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWxpbmVfX2ljb24nKTtcbiAgc2NvcmVJY29uLnNyYyA9IHNyYztcbiAgc2NvcmVJY29uLmFsdCA9ICdpY29uJztcblxuICByZXR1cm4gc2NvcmVJY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2NvcmVMaW5lSWNvbjtcbiIsImltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdGF0aXN0aWNzVGFibGUsIHNldEdsb2JhbFZhbHVlcyxcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSwgc2hvd1N0YXRUYWJsZSxcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIsIFNFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG4vLyBjcmVhdGUgaGVhZGVyIHN0YXRpc3RpY3MgYnV0dG9uXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzQnRuID0gKCkgPT4ge1xuICBjb25zdCBzdGF0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0YXRCdG4udHlwZSA9ICdidXR0b24nO1xuICBzdGF0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtYnV0dG9uJyk7XG4gIHN0YXRCdG4udGV4dENvbnRlbnQgPSAnU3RhdGlzdGljcyc7XG5cbiAgcmV0dXJuIHN0YXRCdG47XG59O1xuXG5jb25zdCBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLWJ1dHRvbicpO1xuICBzdGF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEdsb2JhbFZhbHVlcygpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyID0gc3RhdGlzdGljc1BhZ2UucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3NUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKS5zbGljZSgpO1xuICAgIHN0YXRpc3RpY3NUYWJsZS5yZW1vdmUoKTtcbiAgICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU3RhdGlzdGljc1RhYmxlKHN0YXRpc3RpY0RhdGEpKTtcbiAgICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0LWJ0bicpO1xuICAgIHN0YXRpc3RpY0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgZWxlbTEgPSBhWydBY2N1cmFjeSAlJ107XG4gICAgICBjb25zdCBlbGVtMiA9IGJbJ0FjY3VyYWN5ICUnXTtcblxuICAgICAgcmV0dXJuIGVsZW0xIC0gZWxlbTI7XG4gICAgfSk7XG4gICAgY29uc3QgcmVwZWF0ZWREYXRhID0gc3RhdGlzdGljRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bJ0FjY3VyYWN5ICUnXSAhPT0gJ24vZScgJiYgaXRlbVsnQWNjdXJhY3kgJSddICE9PSAxMDApXG4gICAgICAuc2xpY2UoMCwgOClcbiAgICAgIC5tYXAoKGVsZW0pID0+IGVsZW0uVHJhbnNsYXRpb24pO1xuXG4gICAgY29uc3QgcmVwZWF0ZWREYXRhU2V0ID0gZGF0YVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zZWN0aW9uV29yZHMpXG4gICAgICAubWFwKChlbGVtKSA9PiBlbGVtLnNlY3Rpb25Xb3JkcylcbiAgICAgIC5mbGF0KClcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHJlcGVhdGVkRGF0YS5pbmNsdWRlcyhpdGVtLnRyYW5zbGF0aW9uKSk7XG4gICAgU0VUX1ZBUigncmVwZWF0ZWREYXRhU2V0JywgcmVwZWF0ZWREYXRhU2V0KTtcbiAgICBpZiAocmVwZWF0ZWREYXRhU2V0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmVwZWF0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkoKTtcblxuICAgIHNob3dTdGF0VGFibGUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVTdGF0aXN0aWNzQnRuLCBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3RhdGlzdGljc1RhYmxlLCBoaWRlU3RhdFRhYmxlLCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uLFxuICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5LCBzZXRHbG9iYWxWYWx1ZXMsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NEYXRhID0gR0VUX1ZBUignc3RhdGlzdGljRGF0YScpO1xuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZScpO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHBhZ2UgY29udGFpbmVyXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHBhZ2UgYnV0dG9ucyBjb250YWluZXJcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2VCdXR0b25zID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXRpc3RpY3NQYWdlQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2VfX2NvbnRyb2xzJyk7XG5cbiAgLy8gY3JlYXRlIHJlcGVhdCBkaWZmaWN1bHQgd29yZHMgYnV0dG9uXG4gIGNvbnN0IHJlcGVhdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXBlYXRCdG4udHlwZSA9ICdidXR0b24nO1xuICByZXBlYXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICByZXBlYXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scy1idG4nKTtcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlcGVhdC1idG4nKTtcbiAgcmVwZWF0QnRuLnRleHRDb250ZW50ID0gJ1JlcGVhdCBkaWZmaWN1bHQgd29yZHMnO1xuXG4gIC8vIGNyZWF0ZSByZXNldCBidXR0b25cbiAgY29uc3QgcmVzZXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXRCdG4udHlwZSA9ICdidXR0b24nO1xuICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2VfX2NvbnRyb2xzLWJ0bicpO1xuICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNldC1idG4nKTtcbiAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQgc3RhdGlzdGljJztcblxuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuYXBwZW5kKHJlcGVhdEJ0bik7XG4gIHN0YXRpc3RpY3NQYWdlQnV0dG9ucy5hcHBlbmQocmVzZXRCdG4pO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHBhZ2UgdGFibGVcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2VUYWJsZSA9IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNzRGF0YSk7XG5cbiAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKHN0YXRpc3RpY3NQYWdlQnV0dG9ucyk7XG4gIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChzdGF0aXN0aWNzUGFnZVRhYmxlKTtcblxuICBzdGF0aXN0aWNzUGFnZS5hcHBlbmQoc3RhdGlzdGljc1BhZ2VDb250YWluZXIpO1xuICByZXR1cm4gc3RhdGlzdGljc1BhZ2U7XG59O1xuXG5jb25zdCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCByZXNldFN0YXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XG4gIHJlc2V0U3RhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBzZXRHbG9iYWxWYWx1ZXMoKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLXBhZ2UnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IHN0YXRpc3RpY3NQYWdlLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZScpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3NEYXRhID0gR0VUX1ZBUignc3RhdGlzdGljRGF0YScpO1xuICAgIHN0YXRpc3RpY3NUYWJsZS5yZW1vdmUoKTtcbiAgICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU3RhdGlzdGljc1RhYmxlKHN0YXRpc3RpY3NEYXRhKSk7XG4gICAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSgpO1xuICAgIGNvbnN0IHJlcGVhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXQtYnRuJyk7XG4gICAgcmVwZWF0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG59O1xuXG5jb25zdCByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCByZXBlYXREaWZmV29yZHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0LWJ0bicpO1xuICByZXBlYXREaWZmV29yZHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcmVwZWF0ZWREYXRhU2V0ID0gR0VUX1ZBUigncmVwZWF0ZWREYXRhU2V0Jyk7XG4gICAgY3JlYXRlRGlmZldvcmRzU2VjdGlvbihyZXBlYXRlZERhdGFTZXQsICdEaWZmaWN1bHQgd29yZHMnKTtcbiAgICBoaWRlU3RhdFRhYmxlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3RhdGlzdGljc1BhZ2UsIHJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHksIHJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVwZGF0ZU1vZGUgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgU0VUX1ZBUiwgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVRvZ2dsZSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIHRvZ2dsZVxuICBjb25zdCB0b2dnbGVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9nZ2xlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgdG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b24nKTtcbiAgdG9nZ2xlQnRuLmFyaWFQcmVzc2VkID0gZmFsc2U7XG5cbiAgLy8gY3JlYXRlIHRvZ2dsZSBtb2RlIHRyYWluXG4gIGNvbnN0IHRvZ2dsZU1vZGVUcmFpbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9nZ2xlTW9kZVRyYWluLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX21vZGUnKTtcbiAgdG9nZ2xlTW9kZVRyYWluLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3RyYWluJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi50ZXh0Q29udGVudCA9ICdUcmFpbic7XG5cbiAgLy8gY3JlYXRlIHRvZ2dsZSBtb2RlIHBsYXlcbiAgY29uc3QgdG9nZ2xlTW9kZVBsYXkgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRvZ2dsZU1vZGVQbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX21vZGUnKTtcbiAgdG9nZ2xlTW9kZVBsYXkuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbl9fcGxheScpO1xuICB0b2dnbGVNb2RlUGxheS50ZXh0Q29udGVudCA9ICdQbGF5JztcblxuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGVUcmFpbik7XG4gIHRvZ2dsZUJ0bi5hcHBlbmQodG9nZ2xlTW9kZVBsYXkpO1xuXG4gIHJldHVybiB0b2dnbGVCdG47XG59O1xuXG5jb25zdCB0b2dnbGVCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCB0b2dnbGVCdG4gPSBHRVRfVkFSKCd0b2dnbGVCdG4nKTtcbiAgdG9nZ2xlQnRuLmFyaWFQcmVzc2VkID0gKHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9PT0gJ2ZhbHNlJykgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICBTRVRfVkFSKCdpc1BsYXlNb2RlJywgdG9nZ2xlQnRuLmFyaWFQcmVzc2VkKTtcbiAgdXBkYXRlTW9kZSgpO1xufTtcblxuY29uc3Qgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQnRuID0gR0VUX1ZBUigndG9nZ2xlQnRuJyk7XG4gIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVG9nZ2xlLCB0b2dnbGVCdG5GdW5jdGlvbmFsaXR5LCBzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCJpbXBvcnQgeyBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2TWVudUJ0bic7XG5pbXBvcnQgeyBvdmVybGF5RnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvb3ZlcmxheSc7XG5pbXBvcnQgeyBzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2TWVudSc7XG5pbXBvcnQgeyBzZXRMb2dvRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgeyBzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IHsgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9nZ2xlQnRuJztcbmltcG9ydCB7IHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCB7IHN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzQnRuJztcbmltcG9ydCB7IHJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHksIHJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3NQYWdlJztcbmltcG9ydCB7IHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuL2hlbHBlcic7XG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSgpO1xuICBvdmVybGF5RnVuY3Rpb25hbGl0eSgpO1xuICBzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lcigpO1xuICBzZXRMb2dvRXZlbnRMaXN0ZW5lcigpO1xuICBzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSgpO1xuICBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSgpO1xuICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5KCk7XG4gIHN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5KCk7XG4gIHJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHkoKTtcbiAgcmVzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0RXZlbnRMaXN0ZW5lcnM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgY3JlYXRlQ2FyZEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkSXRlbSc7XG5pbXBvcnQgeyByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSwgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3BsYXlSZXBlYXRCdG4nO1xuaW1wb3J0IGNyZWF0ZVNjb3JlTGluZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9zY29yZUxpbmVJY29uJztcbmltcG9ydCB7IG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbic7XG5pbXBvcnQgZGF0YVNldCBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuXG4vLyBjcmVhdGUgZWxlbWVudFxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGlzTWFpbk1lbnUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJ0LXBhZ2UnKTtcbmNvbnN0IGlzQ2FyZCA9IChlbGVtZW50KSA9PiBlbGVtZW50LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbmNvbnN0IGlzQWN0aXZlQ2FyZCA9IChjYXJkKSA9PiAhY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2luYWN0aXZlJyk7XG5jb25zdCBpc1RyYWluTW9kZSA9IChlbGVtZW50KSA9PiBlbGVtZW50LmRhdGFzZXQubW9kZSA9PT0gJ3RyYWluJztcbmNvbnN0IGlzUGxheU1vZGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0Lm1vZGUgPT09ICdwbGF5JztcbmNvbnN0IGlzR2FtZVN0YXJ0ZWQgPSAoKSA9PiBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXBlYXQnKTtcbmNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiBHRVRfVkFSKCdzb3VuZHNMaXN0JykubGVuZ3RoID09PSAwO1xuY29uc3QgaXNHYW1lT3ZlclN1Y2Nlc3MgPSAoKSA9PiB7XG4gIGNvbnN0IGljb25zQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlLWxpbmVfX2ljb24nKS5sZW5ndGg7XG4gIGNvbnN0IGNhcmRzQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpLmxlbmd0aDtcbiAgcmV0dXJuIGljb25zQW1vdW50ID09PSBjYXJkc0Ftb3VudDtcbn07XG5cbmNvbnN0IGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufTtcblxuY29uc3Qgc2h1ZmZsZUFycmF5ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IHNodWZmbGVkID0gWy4uLmFycmF5XTtcbiAgZm9yIChsZXQgaSA9IHNodWZmbGVkLmxlbmd0aCAtIDE7IGkgPiAwOyBpIC09IDEpIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgW3NodWZmbGVkW2ldLCBzaHVmZmxlZFtqXV0gPSBbc2h1ZmZsZWRbal0sIHNodWZmbGVkW2ldXTtcbiAgfVxuICByZXR1cm4gc2h1ZmZsZWQ7XG59O1xuXG5jb25zdCB1cGRhdGVTb3VuZExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHNvdW5kc0xpc3QgPSBHRVRfVkFSKCdzb3VuZHNMaXN0Jykuc2xpY2UoKTtcbiAgc291bmRzTGlzdC5wb3AoKTtcbiAgU0VUX1ZBUignc291bmRzTGlzdCcsIHNvdW5kc0xpc3QpO1xufTtcblxuY29uc3QgY3JlYXRlTmV3U291bmRzTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1saXN0X19pdGVtJyk7XG4gIGNvbnN0IHNvdW5kc0xpc3QgPSBbXTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNvbnN0IHsgc291bmQgfSA9IGNhcmQuZGF0YXNldDtcbiAgICBzb3VuZHNMaXN0LnB1c2goc291bmQpO1xuICB9KTtcblxuICByZXR1cm4gc291bmRzTGlzdDtcbn07XG5cbmNvbnN0IHBlcmNlbnRDb3JyZWN0QW5zd2VycyA9IChvYmopID0+IE1hdGgucm91bmQoKFxuICBvYmouQ29ycmVjdCAvIChvYmouQ29ycmVjdCArIG9iai5JbmNvcnJlY3QpKSAqIDEwMCk7XG5cbmNvbnN0IGNyZWF0ZVN0YXJ0aW5nU3RhdGlzdGljRGF0YSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5zZWN0aW9uICE9PSAnaG9tZScpIHtcbiAgICAgIGl0ZW0uc2VjdGlvbldvcmRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIENhdGVnb3J5OiBpdGVtLnNlY3Rpb25UaXRsZSxcbiAgICAgICAgICBXb3JkOiBlbGVtLndvcmQsXG4gICAgICAgICAgVHJhbnNsYXRpb246IGVsZW0udHJhbnNsYXRpb24sXG4gICAgICAgICAgVHJhaW5lZDogMCxcbiAgICAgICAgICBDb3JyZWN0OiAwLFxuICAgICAgICAgIEluY29ycmVjdDogMCxcbiAgICAgICAgICAnQWNjdXJhY3kgJSc6ICduL2UnLFxuICAgICAgICB9O1xuICAgICAgICByZXN1bHQucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NEYXRhID0gKGRhdGEpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0aXN0aWNEYXRhJyk7XG4gIGlmICghc2F2ZWREYXRhKSB7XG4gICAgY29uc3Qgc3RhcnRpbmdEYXRhID0gY3JlYXRlU3RhcnRpbmdTdGF0aXN0aWNEYXRhKGRhdGEpO1xuICAgIGNvbnN0IHN0YXJ0aW5nRGF0YVRvSnNvbiA9IEpTT04uc3RyaW5naWZ5KHN0YXJ0aW5nRGF0YSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRpc3RpY0RhdGEnLCBzdGFydGluZ0RhdGFUb0pzb24pO1xuICAgIHJlc3VsdC5wdXNoKC4uLnN0YXJ0aW5nRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNhdmVkRGF0YSk7XG4gICAgcmVzdWx0LnB1c2goLi4uY3VycmVudERhdGEpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNhcGl0YWxpemVGaXJzdFdvcmQgPSAod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG5cbmNvbnN0IHNldEdsb2JhbFZhbHVlcyA9ICgpID0+IHtcbiAgU0VUX1ZBUignbWFpblNlY3Rpb24nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpKTtcbiAgU0VUX1ZBUignY2F0ZWdvcnlOYW1lJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LW5hbWUnKSk7XG4gIFNFVF9WQVIoJ2NhcmRzTGlzdCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1saXN0JykpO1xuICBTRVRfVkFSKCdoYW1idXJnZXJCdG4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWhhbWJ1cmdlcicpKTtcbiAgU0VUX1ZBUignaGVhZGVyTmF2JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYXYnKSk7XG4gIFNFVF9WQVIoJ2hlYWRlck1lbnUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW1lbnUnKSk7XG4gIFNFVF9WQVIoJ25hdk1lbnVMaW5rcycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItbWVudV9faXRlbS1saW5rJykpO1xuICBTRVRfVkFSKCdvdmVybGF5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSk7XG4gIFNFVF9WQVIoJ2JvZHknLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpO1xuICBTRVRfVkFSKCdoZWFkZXJMb2dvJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1sb2dvX19saW5rJykpO1xuICBTRVRfVkFSKCd0b2dnbGVCdG4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWJ1dHRvbicpKTtcbiAgU0VUX1ZBUigncGxheVJlcGVhdEJ0bicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWJ0bicpKTtcbiAgU0VUX1ZBUignc2NvcmVMaW5lJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLWxpbmUnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvdycpKTtcbiAgU0VUX1ZBUignbW9kYWxXaW5kb3dUZXh0JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvd19fdGV4dCcpKTtcbiAgU0VUX1ZBUignbW9kYWxXaW5kb3dJY29uJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvd19faWNvbicpKTtcbiAgU0VUX1ZBUignc3RhdGlzdGljRGF0YScsIGNyZWF0ZVN0YXRpc3RpY3NEYXRhKGRhdGFTZXQpKTtcbiAgU0VUX1ZBUignaXNQbGF5TW9kZScsIEdFVF9WQVIoJ3RvZ2dsZUJ0bicpLmFyaWFQcmVzc2VkKTtcbn07XG5cbmNvbnN0IHJlc2V0Q2FyZHNTdGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1mcm9udCcpO1xuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJykpO1xufTtcblxuY29uc3Qgc2hvd1N0YXRUYWJsZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gR0VUX1ZBUignbWFpblNlY3Rpb24nKTtcbiAgY29uc3QgbWFpblNlY3Rpb25Db250YWluZXIgPSBtYWluU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIG1haW5TZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhcicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS11cCcpO1xuICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcbiAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmFkZCgnc2xpZGUtZG93bicpO1xufTtcblxuY29uc3QgaGlkZVN0YXRUYWJsZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gIGlmIChzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLWRvd24nKSkge1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gR0VUX1ZBUignbWFpblNlY3Rpb24nKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IG1haW5TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1kb3duJyk7XG4gICAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmFkZCgnc2xpZGUtdXAnKTtcbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhcHBlYXInKTtcbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRDYXJkc1NvdW5kc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHNvdW5kc0xpc3QgPSBjcmVhdGVOZXdTb3VuZHNMaXN0KCk7XG4gIFNFVF9WQVIoJ3NvdW5kc0xpc3QnLCBzaHVmZmxlQXJyYXkoc291bmRzTGlzdCkpO1xufTtcblxuY29uc3QgcmVzZXRTY29yZUxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlTGluZSA9IEdFVF9WQVIoJ3Njb3JlTGluZScpO1xuICBzY29yZUxpbmUuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5jb25zdCB1cGRhdGVNb2RlID0gKCkgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgcGxheU1vZGUgPSBHRVRfVkFSKCdpc1BsYXlNb2RlJyk7XG4gIHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlKCk7XG4gIHJlc2V0Q2FyZHNTdGF0ZSgpO1xuICByZXNldENhcmRzU291bmRzTGlzdCgpO1xuICByZXNldFNjb3JlTGluZSgpO1xuICBpZiAocGxheU1vZGUgPT09ICd0cnVlJykge1xuICAgIGNhcmRzTGlzdC5kYXRhc2V0Lm1vZGUgPSAncGxheSc7XG4gIH0gZWxzZSB7XG4gICAgY2FyZHNMaXN0LmRhdGFzZXQubW9kZSA9ICd0cmFpbic7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzVGFibGVIZWFkID0gY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgc3RhdGlzdGljc1RhYmxlSGVhZC5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19oZWFkJyk7XG4gIGNvbnN0IGhlYWRlclJvdyA9IGNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19oZWFkLXJvdycpO1xuICBoZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGUtcm93Jyk7XG4gIGNvbnN0IGhlYWRlclJvd0RhdGEgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcblxuICBoZWFkZXJSb3dEYXRhLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IGhlYWRlclJvd1RoID0gY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBoZWFkZXJSb3dUaC5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19oZWFkLXJvd19fY2VsbCcpO1xuICAgIGhlYWRlclJvd1RoLmNsYXNzTGlzdC5hZGQoJ3RhYmxlLWNlbGwnKTtcbiAgICBoZWFkZXJSb3dUaC5kYXRhc2V0LmNvbHVtbiA9IGtleTtcbiAgICBoZWFkZXJSb3dUaC5kYXRhc2V0LnNvcnQgPSAoa2V5ID09PSAnQ2F0ZWdvcnknKSB8fCAoa2V5ID09PSAnV29yZCcpIHx8IChrZXkgPT09ICdUcmFuc2xhdGlvbicpID8gJ2FscGgnIDogJ251bSc7XG4gICAgaGVhZGVyUm93VGgudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgaGVhZGVyUm93LmFwcGVuZChoZWFkZXJSb3dUaCk7XG4gIH0pO1xuXG4gIHN0YXRpc3RpY3NUYWJsZUhlYWQuYXBwZW5kKGhlYWRlclJvdyk7XG5cbiAgcmV0dXJuIHN0YXRpc3RpY3NUYWJsZUhlYWQ7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5ID0gKGRhdGEpID0+IHtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGUgYm9keVxuICBjb25zdCBzdGF0aXN0aWNzVGFibGVCb2R5ID0gY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgc3RhdGlzdGljc1RhYmxlQm9keS5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19ib2R5Jyk7XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgdEJvZHlSb3cgPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHRCb2R5Um93LmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2JvZHktcm93Jyk7XG4gICAgdEJvZHlSb3cuY2xhc3NMaXN0LmFkZCgndGFibGUtcm93Jyk7XG4gICAgY29uc3QgdEJvZHlSb3dEYXRhID0gT2JqZWN0LnZhbHVlcyhpdGVtKTtcbiAgICBjb25zdCByb3dDYXRlZ29yeSA9IE9iamVjdC52YWx1ZXMoaXRlbSlbMF07XG4gICAgY29uc3Qgcm93V29yZCA9IE9iamVjdC52YWx1ZXMoaXRlbSlbMV07XG4gICAgY29uc3QgaGVhZGVyUm93RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xuICAgIHRCb2R5Um93LmRhdGFzZXQucm93ID0gcm93V29yZDtcblxuICAgIHRCb2R5Um93RGF0YS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRCb2R5Um93Q2VsbCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0Qm9keVJvd0NlbGwuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9fYm9keS1yb3dfX2NlbGwnKTtcbiAgICAgIHRCb2R5Um93Q2VsbC5jbGFzc0xpc3QuYWRkKCd0YWJsZS1jZWxsJyk7XG4gICAgICB0Qm9keVJvd0NlbGwuZGF0YXNldC5jYXRlZ29yeSA9IHJvd0NhdGVnb3J5O1xuICAgICAgdEJvZHlSb3dDZWxsLmRhdGFzZXQuY2VsbCA9IGhlYWRlclJvd0RhdGFbaW5kZXhdO1xuICAgICAgdEJvZHlSb3dDZWxsLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICB0Qm9keVJvdy5hcHBlbmQodEJvZHlSb3dDZWxsKTtcbiAgICB9KTtcblxuICAgIHN0YXRpc3RpY3NUYWJsZUJvZHkuYXBwZW5kKHRCb2R5Um93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRpc3RpY3NUYWJsZUJvZHk7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzVGFibGUgPSAoZGF0YSkgPT4ge1xuICAvLyBjcmVhdGUgc3RhdGlzdGljcyB0YWJsZVxuICBjb25zdCBzdGF0aXN0aWNzVGFibGUgPSBjcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBzdGF0aXN0aWNzVGFibGUuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZScpO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGhlYWRcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlSGVhZCA9IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQoZGF0YSk7XG5cbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGUgYm9keVxuICBjb25zdCBzdGF0aXN0aWNzVGFibGVCb2R5ID0gY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keShkYXRhKTtcblxuICBzdGF0aXN0aWNzVGFibGUuYXBwZW5kKHN0YXRpc3RpY3NUYWJsZUhlYWQpO1xuICBzdGF0aXN0aWNzVGFibGUuYXBwZW5kKHN0YXRpc3RpY3NUYWJsZUJvZHkpO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGU7XG59O1xuXG5jb25zdCBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBzdGF0VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZScpO1xuICBjb25zdCBzdGF0VGFibGVIZWFkZXIgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGVfX2hlYWQnKTtcbiAgY29uc3Qgc3RhdFRhYmxlSGVhZGVyQ2VsbHMgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnN0YXQtdGFibGVfX2hlYWQtcm93X19jZWxsJyk7XG4gIGNvbnN0IHN0YXRpc3RpY3NEYXRhID0gR0VUX1ZBUignc3RhdGlzdGljRGF0YScpO1xuXG4gIHN0YXRUYWJsZUhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBjb25zdCBzdGF0VGFibGVCb2R5ID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlX19ib2R5Jyk7XG4gICAgY29uc3Qgc29ydFR5cGUgPSB0YXJnZXQuZGF0YXNldC5zb3J0O1xuICAgIGNvbnN0IHNvcnRDYXRlZ29yeSA9IHRhcmdldC5kYXRhc2V0LmNvbHVtbjtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnlDZWxscyA9IHN0YXRUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jZWxsPScke3NvcnRDYXRlZ29yeX0nXWApO1xuICAgIGNvbnN0IHNvcnRDYXRlZ29yeUNlbGxzVmFsdWVzID0gQXJyYXkuZnJvbShzb3J0Q2F0ZWdvcnlDZWxscykubWFwKChjZWxsKSA9PiBjZWxsLnRleHRDb250ZW50KTtcbiAgICBjb25zdCBhcmVFbXB0eUNlbGxzID0gc29ydENhdGVnb3J5Q2VsbHNWYWx1ZXMuZXZlcnkoKGl0ZW0pID0+IGl0ZW0gPT09ICcwJyB8fCBpdGVtID09PSAnbi9lJyk7XG4gICAgaWYgKGFyZUVtcHR5Q2VsbHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2NlbmQnKSkge1xuICAgICAgc3RhdFRhYmxlSGVhZGVyQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhc2NlbmQnKSk7XG4gICAgICBzdGF0aXN0aWNzRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bTEgPSBhW1tzb3J0Q2F0ZWdvcnldXSA9PT0gJ24vZScgPyAtMSA6IGFbc29ydENhdGVnb3J5XTtcbiAgICAgICAgY29uc3QgbnVtMiA9IGJbW3NvcnRDYXRlZ29yeV1dID09PSAnbi9lJyA/IC0xIDogYltzb3J0Q2F0ZWdvcnldO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYXNjZW5kJyk7XG4gICAgICAgIGlmIChzb3J0VHlwZSA9PT0gJ2FscGgnKSB7XG4gICAgICAgICAgcmV0dXJuIG51bTEubG9jYWxlQ29tcGFyZShudW0yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtMiAtIG51bTE7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGlzdGljc0RhdGEucmV2ZXJzZSgpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZCcpO1xuICAgIH1cbiAgICBzdGF0VGFibGVCb2R5LnJlbW92ZSgpO1xuICAgIHN0YXRUYWJsZS5hcHBlbmQoY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keShzdGF0aXN0aWNzRGF0YSkpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSA9IChtb2RlLCBjYXJkLCByZXN1bHQpID0+IHtcbiAgY29uc3Qgc2F2ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRpc3RpY0RhdGEnKTtcbiAgY29uc3QgY3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNhdmVkRGF0YSk7XG4gIGNvbnN0IGNhcmRCYWNrVGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJhY2tfX3RpdGxlJykudGV4dENvbnRlbnQ7XG4gIGxldCBjdXJyZW50SXRlbSA9IGN1cnJlbnREYXRhXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0uVHJhbnNsYXRpb24gPT09IGNhcmRCYWNrVGl0bGUpKVswXTtcbiAgaWYgKG1vZGUgPT09ICd0cmFpbicpIHtcbiAgICBjdXJyZW50SXRlbS5UcmFpbmVkICs9IDE7XG4gIH1cbiAgaWYgKHJlc3VsdCkge1xuICAgIGN1cnJlbnRJdGVtLkNvcnJlY3QgKz0gMTtcbiAgICBjdXJyZW50SXRlbVsnQWNjdXJhY3kgJSddID0gcGVyY2VudENvcnJlY3RBbnN3ZXJzKGN1cnJlbnRJdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjYXJkTGlzdEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1saXN0X19pdGVtJykpO1xuICAgIGNvbnN0IGN1cnJlbnRTb3VuZCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKS5hdCgtMSk7XG4gICAgY29uc3QgY3VycmVudENhcmQgPSBjYXJkTGlzdEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5kYXRhc2V0LnNvdW5kID09PSBjdXJyZW50U291bmQpWzBdO1xuICAgIFtjdXJyZW50SXRlbV0gPSBjdXJyZW50RGF0YVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gKFxuICAgICAgICBpdGVtLlRyYW5zbGF0aW9uID09PSBjdXJyZW50Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1iYWNrX190aXRsZScpXG4gICAgICAgICAgLnRleHRDb250ZW50KSk7XG4gICAgY3VycmVudEl0ZW0uSW5jb3JyZWN0ICs9IDE7XG4gICAgY3VycmVudEl0ZW1bJ0FjY3VyYWN5ICUnXSA9IHBlcmNlbnRDb3JyZWN0QW5zd2VycyhjdXJyZW50SXRlbSk7XG4gIH1cbiAgY29uc3QgY3VycmVudERhdGFUb0pzb24gPSBKU09OLnN0cmluZ2lmeShjdXJyZW50RGF0YSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0aXN0aWNEYXRhJywgY3VycmVudERhdGFUb0pzb24pO1xufTtcblxuY29uc3QgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCA9IChhcnJheSkgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gR0VUX1ZBUignY2F0ZWdvcnlOYW1lJyk7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgY2FyZHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LXBhZ2UnKTtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSAnbWFpbi1tZW51JztcbiAgdXBkYXRlTW9kZSgpO1xuICBjbGVhckNhcmRzTGlzdENvbnRhaW5lcigpO1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuc2VjdGlvbiAhPT0gJ2hvbWUnKSB7XG4gICAgICBjb25zdCBpbWdQYXRoID0gZWxlbWVudC5zdGFydEltYWdlO1xuICAgICAgY29uc3QgaW1nQWx0ID0gZWxlbWVudC5zZWN0aW9uV29yZHNbMF0uYWx0O1xuICAgICAgY29uc3QgY2FyZFRpdGxlID0gZWxlbWVudC5zZWN0aW9uVGl0bGU7XG4gICAgICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUNhcmRJdGVtKGltZ1BhdGgsIGltZ0FsdCwgY2FyZFRpdGxlLCBjYXJkVGl0bGUpO1xuICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkSXRlbSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZURpZmZXb3Jkc1NlY3Rpb24gPSAoYXJyYXksIHNlY3Rpb24pID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNhcmRzTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1wYWdlJyk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBzZWN0aW9uO1xuICBjYXJkc0xpc3QuZGF0YXNldC5jYXRlZ29yeSA9IHNlY3Rpb247XG4gIHVwZGF0ZU1vZGUoKTtcbiAgY2xlYXJDYXJkc0xpc3RDb250YWluZXIoKTtcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGltZ1BhdGggPSBpdGVtLmltYWdlO1xuICAgIGNvbnN0IGltZ0FsdCA9IGl0ZW0uYWx0O1xuICAgIGNvbnN0IGNhcmRTZWN0aW9uID0gY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGl0ZW0ud29yZDtcbiAgICBjb25zdCBjYXJkVHJhbnNsYXRpb24gPSBpdGVtLnRyYW5zbGF0aW9uO1xuICAgIGNvbnN0IHNvdW5kUGF0aCA9IGl0ZW0uYXVkaW9TcmM7XG4gICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShcbiAgICAgIGltZ1BhdGgsXG4gICAgICBpbWdBbHQsXG4gICAgICBjYXJkVGl0bGUsXG4gICAgICBjYXJkU2VjdGlvbixcbiAgICAgIGNhcmRUcmFuc2xhdGlvbixcbiAgICAgIHNvdW5kUGF0aCxcbiAgICApO1xuICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEl0ZW0pO1xuICB9KTtcbiAgcmVzZXRDYXJkc1NvdW5kc0xpc3QoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24gPSAoYXJyYXksIHNlY3Rpb24pID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNhcmRzTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1wYWdlJyk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBzZWN0aW9uO1xuICBjYXJkc0xpc3QuZGF0YXNldC5jYXRlZ29yeSA9IHNlY3Rpb247XG4gIHVwZGF0ZU1vZGUoKTtcbiAgY2xlYXJDYXJkc0xpc3RDb250YWluZXIoKTtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnNlY3Rpb25UaXRsZSA9PT0gc2VjdGlvbikge1xuICAgICAgY29uc3Qgc2VjdGlvbkRhdGEgPSBlbGVtZW50LnNlY3Rpb25Xb3JkcztcbiAgICAgIHNlY3Rpb25EYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaW1nUGF0aCA9IGl0ZW0uaW1hZ2U7XG4gICAgICAgIGNvbnN0IGltZ0FsdCA9IGl0ZW0uYWx0O1xuICAgICAgICBjb25zdCBjYXJkU2VjdGlvbiA9IGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gaXRlbS53b3JkO1xuICAgICAgICBjb25zdCBjYXJkVHJhbnNsYXRpb24gPSBpdGVtLnRyYW5zbGF0aW9uO1xuICAgICAgICBjb25zdCBzb3VuZFBhdGggPSBpdGVtLmF1ZGlvU3JjO1xuICAgICAgICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUNhcmRJdGVtKFxuICAgICAgICAgIGltZ1BhdGgsXG4gICAgICAgICAgaW1nQWx0LFxuICAgICAgICAgIGNhcmRUaXRsZSxcbiAgICAgICAgICBjYXJkU2VjdGlvbixcbiAgICAgICAgICBjYXJkVHJhbnNsYXRpb24sXG4gICAgICAgICAgc291bmRQYXRoLFxuICAgICAgICApO1xuICAgICAgICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJlc2V0Q2FyZHNTb3VuZHNMaXN0KCk7XG59O1xuXG5jb25zdCBwbGF5U291bmQgPSAoZWxlbWVudCwgc291bmRQYXRoKSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHNvdW5kUGF0aCk7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICBhdWRpby5wbGF5KCk7XG4gIGlmIChlbGVtZW50ID09PSBwbGF5UmVwZWF0QnRuKSB7XG4gICAgcGxheVJlcGVhdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KTtcbiAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgIHBsYXlSZXBlYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FyZHNMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KTtcbiAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgIGNhcmRzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHJvdGF0ZUNhcmQgPSAoZWxlbWVudCkgPT4ge1xuICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHJvdGF0ZUJhY2sgPSAoZWxlbWVudCkgPT4ge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcbiAgfVxufTtcblxuY29uc3QgdHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSA9ICh0YXJnZXQsIGNhcmRJbm5lcikgPT4ge1xuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlLWJ0bicpKSB7XG4gICAgcm90YXRlQ2FyZChjYXJkSW5uZXIpO1xuICAgIGNhcmRJbm5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgcm90YXRlQmFjayhjYXJkSW5uZXIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFjYXJkSW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBjb25zdCBzb3VuZFBhdGggPSBjdXJyZW50Q2FyZC5kYXRhc2V0LnNvdW5kO1xuICAgIGNvbnN0IGNhcmQgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICAgIHBsYXlTb3VuZChjYXJkLCBzb3VuZFBhdGgpO1xuICAgIHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSgndHJhaW4nLCBjdXJyZW50Q2FyZCk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZFNjb3JlSWNvbiA9IChjYXJkLCBzcmMpID0+IHtcbiAgaWYgKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucygncGxheWluZycpKSB7XG4gICAgY29uc3Qgc2NvcmVJY29uID0gY3JlYXRlU2NvcmVMaW5lSWNvbihzcmMpO1xuICAgIGNvbnN0IHNjb3JlTGluZSA9IEdFVF9WQVIoJ3Njb3JlTGluZScpO1xuICAgIHNjb3JlTGluZS5wcmVwZW5kKHNjb3JlSWNvbik7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIHNldEdsb2JhbFZhbHVlcywgY2FwaXRhbGl6ZUZpcnN0V29yZCxcbiAgY2xlYXJDYXJkc0xpc3RDb250YWluZXIsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQsXG4gIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24sIHVwZGF0ZU1vZGUsIHBsYXlTb3VuZCxcbiAgcm90YXRlQ2FyZCwgcm90YXRlQmFjaywgaXNNYWluTWVudSwgaXNDYXJkLCBpc1RyYWluTW9kZSxcbiAgaXNQbGF5TW9kZSwgdHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSwgc2h1ZmZsZUFycmF5LCB1cGRhdGVTb3VuZExpc3QsXG4gIGlzR2FtZVN0YXJ0ZWQsIGFkZFNjb3JlSWNvbiwgaXNBY3RpdmVDYXJkLCBpc0dhbWVPdmVyLCBpc0dhbWVPdmVyU3VjY2VzcyxcbiAgY3JlYXRlU3RhdGlzdGljc1RhYmxlLCB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEsIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHksXG4gIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHksIHNob3dTdGF0VGFibGUsIGhpZGVTdGF0VGFibGUsIGNyZWF0ZURpZmZXb3Jkc1NlY3Rpb24sXG59O1xuIiwiY29uc3QgVkFSSUFCTEVTID0ge1xuICBtYWluU2VjdGlvbjogJ2luaXRpYWwgdmFsdWUnLFxuICBjYXRlZ29yeU5hbWU6ICdpbml0aWFsIHZhbHVlJyxcbiAgY2FyZHNMaXN0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIHNvdW5kc0xpc3Q6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGFtYnVyZ2VyQnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhlYWRlck5hdjogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJNZW51OiAnaW5pdGlhbCB2YWx1ZScsXG4gIG5hdk1lbnVMaW5rczogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJMb2dvOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG92ZXJsYXk6ICdpbml0aWFsIHZhbHVlJyxcbiAgYm9keTogJ2luaXRpYWwgdmFsdWUnLFxuICB0b2dnbGVCdG46ICdpbml0aWFsIHZhbHVlJyxcbiAgaXNQbGF5TW9kZTogJ2luaXRpYWwgdmFsdWUnLFxuICBwbGF5UmVwZWF0QnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIHNjb3JlTGluZTogJ2luaXRpYWwgdmFsdWUnLFxuICBtb2RhbFdpbmRvdzogJ2luaXRpYWwgdmFsdWUnLFxuICBtb2RhbFdpbmRvd0ljb246ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3dUZXh0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93SWNvbldpbjogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvd2luLWljb24ucG5nJyxcbiAgbW9kYWxXaW5kb3dJY29uTG9zZTogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvbG9zZS1pY29uLnBuZycsXG4gIHN0YXRpc3RpY0RhdGE6IFtdLFxuICByZXBlYXRlZERhdGFTZXQ6ICdpbml0aWFsIHZhbHVlJyxcbn07XG5cbmNvbnN0IFNFVF9WQVIgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChWQVJJQUJMRVMsIG5hbWUpKSB7XG4gICAgVkFSSUFCTEVTW25hbWVdID0gdmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IEdFVF9WQVIgPSAobmFtZSkgPT4ge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFZBUklBQkxFUywgbmFtZSkpIHtcbiAgICByZXR1cm4gVkFSSUFCTEVTW25hbWVdO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFt7c2VjdGlvbjonaG9tZScsY2F0ZWdvcnk6J21haW4tbWVudSd9LHtzZWN0aW9uOidjbG90aGVzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1zd2VhdGVyLnBuZycsbGlua1BhdGg6JyNjbG90aGVzJyxzZWN0aW9uVGl0bGU6J0Nsb3RoZXMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2NhcCcsdHJhbnNsYXRpb246J9GI0LDQv9C60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1jYXAucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvY2FwLm1wMycsYWx0OidjYXAgaW1hZ2UnfSx7d29yZDonamFja2V0Jyx0cmFuc2xhdGlvbjon0LrRg9GA0YLQutCwJyxpbWFnZTonL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1qYWNrZXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvamFja2V0Lm1wMycsYWx0OidqYWNrZXQgaW1hZ2UnfSx7d29yZDonc2NhcmYnLHRyYW5zbGF0aW9uOifRiNCw0YDRhCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLXNjYXJmLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3NjYXJmLm1wMycsYWx0OidzY2FyZiBpbWFnZSd9LHt3b3JkOidzaG9lcycsdHJhbnNsYXRpb246J9Cx0L7RgtC40L3QutC4JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2Etc2hvZXMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2hvZXMubXAzJyxhbHQ6J3Nob2VzIGltYWdlJ30se3dvcmQ6J2Jsb3VzZScsdHJhbnNsYXRpb246J9Cx0LvRg9C30LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LWJsb3VzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9ibG91c2UubXAzJyxhbHQ6J2Jsb3VzZSBpbWFnZSd9LHt3b3JkOidjb2F0Jyx0cmFuc2xhdGlvbjon0L/QsNC70YzRgtC+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtY29hdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9jb2F0Lm1wMycsYWx0Oidjb2F0IGltYWdlJ30se3dvcmQ6J2RyZXNzJyx0cmFuc2xhdGlvbjon0L/Qu9Cw0YLRjNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtZHJlc3MucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvZHJlc3MubXAzJyxhbHQ6J2RyZXNzIGltYWdlJ30se3dvcmQ6J3NoaXJ0Jyx0cmFuc2xhdGlvbjon0YDRg9Cx0LDRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1zaGlydC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zaGlydC5tcDMnLGFsdDonc2hpcnQgaW1hZ2UnfV19LHtzZWN0aW9uOidjb2xvdXJzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi15ZWxsb3cucG5nJyxsaW5rUGF0aDonI2NvbG91cnMnLHNlY3Rpb25UaXRsZTonQ29sb3Vycycsc2VjdGlvbldvcmRzOlt7d29yZDonYmxhY2snLHRyYW5zbGF0aW9uOifRh9C10YDQvdGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibGFjay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ibGFjay5tcDMnLGFsdDonYmxhY2sgaW1hZ2UnfSx7d29yZDonYmx1ZScsdHJhbnNsYXRpb246J9GB0LjQvdC40LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibHVlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2JsdWUubXAzJyxhbHQ6J2JsdWUgaW1hZ2UnfSx7d29yZDonYnJvd24nLHRyYW5zbGF0aW9uOifQutC+0YDQuNGH0L3QtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJyb3duLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2Jyb3duLm1wMycsYWx0Oidicm93biBpbWFnZSd9LHt3b3JkOidncmVlbicsdHJhbnNsYXRpb246J9C30LXQu9GR0L3Ri9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JlZW4ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvZ3JlZW4ubXAzJyxhbHQ6J2dyZWVuIGltYWdlJ30se3dvcmQ6J2dyZXknLHRyYW5zbGF0aW9uOifRgdC10YDRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JleS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ncmV5Lm1wMycsYWx0OidncmV5IGltYWdlJ30se3dvcmQ6J29yYW5nZScsdHJhbnNsYXRpb246J9C+0YDQsNC90LbQtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LW9yYW5nZS1jLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL29yYW5nZS5tcDMnLGFsdDonb3JhbmdlIGltYWdlJ30se3dvcmQ6J3BpbmsnLHRyYW5zbGF0aW9uOifRgNC+0LfQvtCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXBpbmsucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvcGluay5tcDMnLGFsdDoncGluayBpbWFnZSd9LHt3b3JkOidyZWQnLHRyYW5zbGF0aW9uOifQutGA0LDRgdC90YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXJlZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9yZWQubXAzJyxhbHQ6J3JlZCBpbWFnZSd9XX0se3NlY3Rpb246J2ZhbWlseScsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtZmFtaWx5LnBuZycsbGlua1BhdGg6JyNmYW1pbHknLHNlY3Rpb25UaXRsZTonRmFtaWx5JyxzZWN0aW9uV29yZHM6W3t3b3JkOidhdW50Jyx0cmFuc2xhdGlvbjon0YLQtdGC0Y8nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWF1bnQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9hdW50Lm1wMycsYWx0OidhdW50IGltYWdlJ30se3dvcmQ6J2Jyb3RoZXInLHRyYW5zbGF0aW9uOifQsdGA0LDRgicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtYnJvdGhlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2Jyb3RoZXIubXAzJyxhbHQ6J2Jyb3RoZXIgaW1hZ2UnfSx7d29yZDonZGFkZHknLHRyYW5zbGF0aW9uOifQv9Cw0L/QsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtZGFkZHkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9kYWRkeS5tcDMnLGFsdDonZGFkZHkgaW1hZ2UnfSx7d29yZDonZ3JhbmRtYScsdHJhbnNsYXRpb246J9Cx0LDQsdGD0YjQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1ncmFuZG1hLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvZ3JhbmRtYS5tcDMnLGFsdDonZ3JhbmRtYSBpbWFnZSd9LHt3b3JkOidncmFuZHBhJyx0cmFuc2xhdGlvbjon0LTQtdC00YPRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWdyYW5kcGEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9ncmFuZHBhLm1wMycsYWx0OidncmFuZHBhIGltYWdlJ30se3dvcmQ6J211bW15Jyx0cmFuc2xhdGlvbjon0LzQsNC80LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LW11bW15LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvbXVtbXkubXAzJyxhbHQ6J211bW15IGltYWdlJ30se3dvcmQ6J3Npc3RlcicsdHJhbnNsYXRpb246J9GB0LXRgdGC0YDQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3Ytc2lzdGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvc2lzdGVyLm1wMycsYWx0OidzaXN0ZXIgaW1hZ2UnfSx7d29yZDondW5jbGUnLHRyYW5zbGF0aW9uOifQtNGP0LTRjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtdW5jbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS91bmNsZS5tcDMnLGFsdDondW5jbGUgaW1hZ2UnfV19LHtzZWN0aW9uOidmb29kJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvYS1oYW1idXJnZXIucG5nJyxsaW5rUGF0aDonI2Zvb2QnLHNlY3Rpb25UaXRsZTonRm9vZCcsc2VjdGlvbldvcmRzOlt7d29yZDonZWdnJyx0cmFuc2xhdGlvbjon0Y/QudGG0L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2QvYS1lZ2cucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvZWdnLm1wMycsYWx0OidlZ2cgaW1hZ2UnfSx7d29yZDonaWNlIGNyZWFtJyx0cmFuc2xhdGlvbjon0LzQvtGA0L7QttC10L3QvtC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL2EtaWNlY3JlYW0ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvaWNlLWNyZWFtLm1wMycsYWx0OidpY2UgY3JlYW0gaW1hZ2UnfSx7d29yZDonYnJlYWQnLHRyYW5zbGF0aW9uOifRhdC70LXQsScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWJyZWFkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2JyZWFkLm1wMycsYWx0OidicmVhZCBpbWFnZSd9LHt3b3JkOididXR0ZXInLHRyYW5zbGF0aW9uOifQvNCw0YHQu9C+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtYnV0dGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2J1dHRlci5tcDMnLGFsdDonYnV0dGVyIGltYWdlJ30se3dvcmQ6J2Nha2UnLHRyYW5zbGF0aW9uOifQv9C40YDQvtC20L3QvtC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtY2FrZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9jYWtlLm1wMycsYWx0OidjYWtlIGltYWdlJ30se3dvcmQ6J2NoZWVzZScsdHJhbnNsYXRpb246J9GB0YvRgCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWNoZWVzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9jaGVlc2UubXAzJyxhbHQ6J2NoZWVzZSBpbWFnZSd9LHt3b3JkOidwaXp6YScsdHJhbnNsYXRpb246J9C/0LjRhtGG0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1waXp6YS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9waXp6YS5tcDMnLGFsdDoncGl6emEgaW1hZ2UnfSx7d29yZDonc2FuZHdpY2gnLHRyYW5zbGF0aW9uOifQsdGD0YLQtdGA0LHRgNC+0LQnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1zYW5kd2ljaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9zYW5kd2ljaC5tcDMnLGFsdDonc2FuZHdpY2ggaW1hZ2UnfV19LHtzZWN0aW9uOidmcnVpdHMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXN0cmF3YmVycnkucG5nJyxsaW5rUGF0aDonI2ZydWl0cycsc2VjdGlvblRpdGxlOidGcnVpdHMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2FwcGxlJyx0cmFuc2xhdGlvbjon0Y/QsdC70L7QutC+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1hcHBsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2FwcGxlLm1wMycsYWx0OidhcHBsZSBpbWFnZSd9LHt3b3JkOidjaGVycnknLHRyYW5zbGF0aW9uOifQstC40YjQvdGPJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1jaGVycnkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9jaGVycnkubXAzJyxhbHQ6J2NoZXJyeSBpbWFnZSd9LHt3b3JkOidncmFwZScsdHJhbnNsYXRpb246J9GE0LjQs9GD0YDQvdC+0LUg0LrQsNGC0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLWdyYXBlcy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2dyYXBlLm1wMycsYWx0OidncmFwZSBpbWFnZSd9LHt3b3JkOidvcmFuZ2UnLHRyYW5zbGF0aW9uOifQsNC/0LXQu9GM0YHQuNC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1vcmFuZ2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9vcmFuZ2UubXAzJyxhbHQ6J29yYW5nZSBpbWFnZSd9LHt3b3JkOidwZWFjaCcsdHJhbnNsYXRpb246J9C/0LXRgNGB0LjQuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtcGVhY2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9wZWFjaC5tcDMnLGFsdDoncGVhY2ggaW1hZ2UnfSx7d29yZDoncGluZWFwcGxlJyx0cmFuc2xhdGlvbjon0LDQvdCw0L3QsNGBJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1waW5lYXBwbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9waW5lYXBwbGUubXAzJyxhbHQ6J3BpbmVhcHBsZSBpbWFnZSd9LHt3b3JkOidiYW5hbmEnLHRyYW5zbGF0aW9uOifQsdCw0L3QsNC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvdi1iYW5hbmEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9iYW5hbmEubXAzJyxhbHQ6J2JhbmFuYSBpbWFnZSd9LHt3b3JkOidsZW1vbicsdHJhbnNsYXRpb246J9C70LjQvNC+0L0nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy92LWxlbW9uLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvbGVtb24ubXAzJyxhbHQ6J2xlbW9uIGltYWdlJ31dfSx7c2VjdGlvbjoncGV0cycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtcG9ueS5wbmcnLGxpbmtQYXRoOicjcGV0cycsc2VjdGlvblRpdGxlOidQZXRzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidoYW1zdGVyJyx0cmFuc2xhdGlvbjon0YXQvtC80Y/QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLWhhbXN0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvaGFtc3Rlci5tcDMnLGFsdDonaGFtc3RlciBpbWFnZSd9LHt3b3JkOidwYXJyb3QnLHRyYW5zbGF0aW9uOifQv9C+0L/Rg9Cz0LDQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLXBhcnJvdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9wYXJyb3QubXAzJyxhbHQ6J3BhcnJvdCBpbWFnZSd9LHt3b3JkOid0dXJ0bGUnLHRyYW5zbGF0aW9uOifRh9C10YDQtdC/0LDRhdCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2EtdHVydGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3R1cnRsZS5tcDMnLGFsdDondHVydGxlIGltYWdlJ30se3dvcmQ6J2tpdHRlbicsdHJhbnNsYXRpb246J9C60L7RgtGR0L3QvtC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2gta2l0dGVuLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2tpdHRlbi5tcDMnLGFsdDona2l0dGVuIGltYWdlJ30se3dvcmQ6J3B1cHB5Jyx0cmFuc2xhdGlvbjon0YnQtdC90L7QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9oLXB1cHB5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3B1cHB5Lm1wMycsYWx0OidwdXBweSBpbWFnZSd9LHt3b3JkOidmZXJyZXQnLHRyYW5zbGF0aW9uOifRhdC+0YDQtdC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtZmVycmV0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2ZlcnJldC5tcDMnLGFsdDonZmVycmV0IGltYWdlJ30se3dvcmQ6J2Zpc2gnLHRyYW5zbGF0aW9uOifRgNGL0LHQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LWZpc2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvZmlzaC5tcDMnLGFsdDonZmlzaCBpbWFnZSd9LHt3b3JkOidtb3VzZScsdHJhbnNsYXRpb246J9C80YvRiNGMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtbW91c2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvbW91c2UubXAzJyxhbHQ6J21vdXNlIGltYWdlJ31dfSx7c2VjdGlvbjonc2Nob29sJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1wdXBpbC5wbmcnLGxpbmtQYXRoOicjc2Nob29sJyxzZWN0aW9uVGl0bGU6J1NjaG9vbCcsc2VjdGlvbldvcmRzOlt7d29yZDonYm9hcmQnLHRyYW5zbGF0aW9uOifQtNC+0YHQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ib2FyZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2JvYXJkLm1wMycsYWx0Oidib2FyZCBpbWFnZSd9LHt3b3JkOidib29rJyx0cmFuc2xhdGlvbjon0LrQvdC40LPQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtYm9vay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2Jvb2subXAzJyxhbHQ6J2Jvb2sgaW1hZ2UnfSx7d29yZDonY2FsY3VsYXRvcicsdHJhbnNsYXRpb246J9GH0LXRgNC10L/QsNGF0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWNhbGN1bGF0b3IucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9jYWxjdWxhdG9yLm1wMycsYWx0OidjYWxjdWxhdG9yIGltYWdlJ30se3dvcmQ6J2NsYXNzcm9vbScsdHJhbnNsYXRpb246J9GI0LrQvtC70YzQvdGL0Lkg0LrQu9Cw0YHRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtY2xhc3Nyb29tLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvY2xhc3Nyb29tLm1wMycsYWx0OidjbGFzc3Jvb20gaW1hZ2UnfSx7d29yZDonbWFwJyx0cmFuc2xhdGlvbjon0LrQsNGA0YLQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtbWFwLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvbWFwLm1wMycsYWx0OidtYXAgaW1hZ2UnfSx7d29yZDonbm90ZWJvb2snLHRyYW5zbGF0aW9uOifRgtC10YLRgNCw0LTRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytbm90ZWJvb2sucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ub3RlYm9vay5tcDMnLGFsdDonbm90ZWJvb2sgaW1hZ2UnfSx7d29yZDonc2Nob29sYmFnJyx0cmFuc2xhdGlvbjon0L/QvtGA0YLRhNC10LvRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytc2Nob29sYmFnLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvc2Nob29sYmFnLm1wMycsYWx0OidzY2hvb2xiYWcgaW1hZ2UnfSx7d29yZDondGVhY2hlcicsdHJhbnNsYXRpb246J9GD0YfQuNGC0LXQu9GMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi10ZWFjaGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvdGVhY2hlci5tcDMnLGFsdDondGVhY2hlciBpbWFnZSd9XX0se3NlY3Rpb246J3Nwb3J0JyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi10ZW5uaXMucG5nJyxsaW5rUGF0aDonI3Nwb3J0JyxzZWN0aW9uVGl0bGU6J1Nwb3J0JyxzZWN0aW9uV29yZHM6W3t3b3JkOidiYXNrZXRiYWxsJyx0cmFuc2xhdGlvbjon0LHQsNGB0LrQtdGC0LHQvtC7JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWJhc2tldGJhbGwucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2Jhc2tldGJhbGwubXAzJyxhbHQ6J2Jhc2tldGJhbGwgaW1hZ2UnfSx7d29yZDonY3ljbGluZycsdHJhbnNsYXRpb246J9C10LfQtNCwINC90LAg0LLQtdC70L7RgdC40L/QtdC00LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtY3ljbGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvY3ljbGluZy5tcDMnLGFsdDonY3ljbGluZyBpbWFnZSd9LHt3b3JkOidmaWd1cmUgc2thdGluZycsdHJhbnNsYXRpb246J9GE0LjQs9GD0YDQvdC+0LUg0LrQsNGC0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtZmlndXJlLXNrYXRpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2ZpZ3VyZS1za2F0aW5nLm1wMycsYWx0OidmaWd1cmUgc2thdGluZyBpbWFnZSd9LHt3b3JkOidmb290YmFsbCcsdHJhbnNsYXRpb246J9GE0YPRgtCx0L7QuycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1mb290YmFsbC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvZm9vdGJhbGwubXAzJyxhbHQ6J2Zvb3RiYWxsIGltYWdlJ30se3dvcmQ6J2hvY2tleScsdHJhbnNsYXRpb246J9GF0L7QutC60LXQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1ob2NrZXkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2hvY2tleS5tcDMnLGFsdDonaG9ja2V5IGltYWdlJ30se3dvcmQ6J3NraWluZycsdHJhbnNsYXRpb246J9C70YvQttC90YvQuSDRgdC/0L7RgNGCJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LXNraWluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvc2tpaW5nLm1wMycsYWx0Oidza2lpbmcgaW1hZ2UnfSx7d29yZDonc3dpbW1pbmcnLHRyYW5zbGF0aW9uOifQv9C70LDQstCw0L3QuNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LXN3aW1taW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9zd2ltbWluZy5tcDMnLGFsdDonc3dpbW1pbmcgaW1hZ2UnfSx7d29yZDonYm94aW5nJyx0cmFuc2xhdGlvbjon0LHQvtC60YEnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtYm94aW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9ib3hpbmcubXAzJyxhbHQ6J2JveGluZyBpbWFnZSd9XX1dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXkgfSBmcm9tICcuL2NvbXBvbmVudHMvb3ZlcmxheSc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlTWFpbiB9IGZyb20gJy4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdyB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbFdpbmRvdyc7XG5pbXBvcnQgeyBjcmVhdGVTdGF0aXN0aWNzUGFnZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZSc7XG5pbXBvcnQgc2V0RXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi91dGlscy9ldmVudHMnO1xuaW1wb3J0IHsgc2V0R2xvYmFsVmFsdWVzLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IH0gZnJvbSAnLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVPdmVybGF5KCkpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlSGVhZGVyKCkpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlTW9kYWxXaW5kb3coKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVNYWluKCkpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlRm9vdGVyKCkpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gR0VUX1ZBUignbWFpblNlY3Rpb24nKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NQYWdlKCkpO1xuICBzZXRFdmVudExpc3RlbmVycygpO1xufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUNhcmRJdGVtIiwiaW1nUGF0aCIsImltZ0FsdCIsImNhcmRUaXRsZSIsImNhcmRTZWN0aW9uIiwiY2FyZFRyYW5zbGF0aW9uIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic291bmRQYXRoIiwiY2FyZEl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwic2VjdGlvbiIsInNvdW5kIiwiY2FyZElubmVyIiwiY2FyZEZyb250IiwiY2FyZEZyb250SW1nQ29udGFpbmVyIiwiY2FyZEZyb250SW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kIiwiY2FyZEZyb250VGl0bGUiLCJ0ZXh0Q29udGVudCIsImNhcmRGcm9udFJvdGF0ZUJ0biIsInR5cGUiLCJjYXJkQmFjayIsImNhcmRCYWNrSW1nQ29udGFpbmVyIiwiY2FyZEJhY2tJbWciLCJjYXJkQmFja1RpdGxlIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyRWxlbWVudCIsInBhcmFncmFwaCIsInBhcmFncmFwaExpbmsiLCJ0YXJnZXQiLCJocmVmIiwiZm9vdGVyQ29udGFpbmVyIiwiZGF0YSIsImNyZWF0ZU5hdk1lbnUiLCJjcmVhdGVMb2dvIiwiY3JlYXRlVG9nZ2xlIiwiY3JlYXRlTmF2TWVudUJ0biIsImNyZWF0ZVN0YXRpc3RpY3NCdG4iLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyTG9nbyIsImhlYWRlckJ0bnNDb250YWluZXIiLCJ0b2dnbGVCdG4iLCJzdGF0QnRuIiwiaGVhZGVyTmF2IiwibmF2TWVudUJ0biIsIm5hdmlnYXRpb25NZW51IiwiaGVhZGVyQ29udGFpbmVyIiwiY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCIsImhpZGVTdGF0VGFibGUiLCJHRVRfVkFSIiwibG9nb1RleHQiLCJsb2dvSHJlZiIsImhlYWRlckxvZ29MaW5rIiwibG9nb0Z1bmN0aW9uYWxpdHkiLCJzZXRMb2dvRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVDYXJkc0xpc3RTZWN0aW9uIiwiaXNNYWluTWVudSIsImlzQ2FyZCIsImlzVHJhaW5Nb2RlIiwiaXNQbGF5TW9kZSIsInRyYWluTW9kZUZ1bmN0aW9uYWxpdHkiLCJpc0dhbWVTdGFydGVkIiwiaXNBY3RpdmVDYXJkIiwidXBkYXRlU291bmRMaXN0IiwiYWRkU2NvcmVJY29uIiwicGxheVNvdW5kIiwiaXNHYW1lT3ZlciIsImlzR2FtZU92ZXJTdWNjZXNzIiwidXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhIiwidXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUiLCJzaG93T3ZlcmxheSIsImNyZWF0ZVBsYXlSZXBlYXRCdG4iLCJwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSIsInNob3dNb2RhbFdpbmRvdyIsImhpZGVNb2RhbFdpbmRvdyIsImNyZWF0ZU1haW4iLCJtYWluRWxlbWVudCIsIm1haW5Db250YWluZXIiLCJzY29yZUxpbmUiLCJjYXRlZ29yeU5hbWUiLCJjYXJkTGlzdCIsImNhdGVnb3J5IiwibW9kZSIsInBsYXlSZXBlYXRCdG4iLCJtYWluTWVudUZ1bmN0aW9uYWxpdHkiLCJjbG9zZXN0IiwibWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IiwiZXZlbnQiLCJjYXJkc0xpc3QiLCJjdXJyZW50Q2FyZCIsImN1cnJlbnRDYXJkRnJvbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudENhcmRTb3VuZCIsImN1cnJlbnRTb3VuZCIsImF0IiwiY29ycmVjdEFuc3dlclNvdW5kIiwic3VjY2Vzc1NvdW5kIiwiY29ycmVjdEljb25TcmMiLCJ3cm9uZ0ljb25TcmMiLCJ3cm9uZ0Fuc3dlclNvdW5kIiwiZmFpbHVyZVNvdW5kIiwiY29udGFpbnMiLCJzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkiLCJoaWRlT3ZlcmxheSIsImNyZWF0ZU1vZGFsV2luZG93IiwibW9kYWxXaW5kb3ciLCJpY29uIiwidGV4dCIsIm1vZGFsV2luZG93SWNvbiIsIm1vZGFsV2luZG93VGV4dCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjcmVhdGVOYXZNZW51SXRlbSIsImRhdGFTZXQiLCJuYXZNZW51VWwiLCJpIiwib3Blbk5hdk1lbnUiLCJoZWFkZXJNZW51IiwibmF2TWVudUxpbmtzIiwiZm9yRWFjaCIsImxpbmsiLCJ0YWJJbmRleCIsImNsb3NlTmF2TWVudSIsInNldE5hdk1lbnVBY3RpdmVTdGF0ZSIsImxpbmtzIiwibGlua1NlY3Rpb24iLCJyZW1vdmVOYXZNZW51QWN0aXZlU3RhdGUiLCJoYW1idXJnZXJNZW51RnVuY3Rpb25hbGl0eSIsImhhbWJ1cmdlckJ0biIsImNsaWNrIiwic2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIiLCJzcGFuMSIsInNwYW4yIiwic3BhbjMiLCJuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSIsImNhcGl0YWxpemVGaXJzdFdvcmQiLCJsaW5rTmFtZSIsImxpIiwiY29uY2F0IiwiY3JlYXRlT3ZlcmxheSIsIm92ZXJsYXlFbGVtZW50Iiwib3ZlcmxheSIsImJvZHkiLCJvdmVybGF5RnVuY3Rpb25hbGl0eSIsImJ1dHRvbiIsInNvdW5kc0xpc3QiLCJyZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSIsInNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IiwiY3JlYXRlU2NvcmVMaW5lSWNvbiIsInNjb3JlSWNvbiIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZSIsInNldEdsb2JhbFZhbHVlcyIsInNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkiLCJzaG93U3RhdFRhYmxlIiwiU0VUX1ZBUiIsInN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IiwiZG9jdW1lbnQiLCJzdGF0aXN0aWNzUGFnZSIsInN0YXRpc3RpY3NQYWdlQ29udGFpbmVyIiwic3RhdGlzdGljc1RhYmxlIiwic3RhdGlzdGljRGF0YSIsInNsaWNlIiwicmVwZWF0QnRuIiwic29ydCIsImEiLCJiIiwiZWxlbTEiLCJlbGVtMiIsInJlcGVhdGVkRGF0YSIsImZpbHRlciIsIml0ZW0iLCJtYXAiLCJlbGVtIiwiVHJhbnNsYXRpb24iLCJyZXBlYXRlZERhdGFTZXQiLCJzZWN0aW9uV29yZHMiLCJmbGF0IiwiaW5jbHVkZXMiLCJ0cmFuc2xhdGlvbiIsImRpc2FibGVkIiwiY3JlYXRlRGlmZldvcmRzU2VjdGlvbiIsImNyZWF0ZVN0YXRpc3RpY3NQYWdlIiwic3RhdGlzdGljc0RhdGEiLCJzdGF0aXN0aWNzUGFnZUJ1dHRvbnMiLCJyZXNldEJ0biIsInN0YXRpc3RpY3NQYWdlVGFibGUiLCJyZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IiwicmVzZXRTdGF0QnRuIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJyZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5IiwicmVwZWF0RGlmZldvcmRzQnRuIiwidXBkYXRlTW9kZSIsImFyaWFQcmVzc2VkIiwidG9nZ2xlTW9kZVRyYWluIiwidG9nZ2xlTW9kZVBsYXkiLCJ0b2dnbGVCdG5GdW5jdGlvbmFsaXR5Iiwic2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSIsInNldEV2ZW50TGlzdGVuZXJzIiwibmFtZSIsImVsZW1lbnQiLCJjYXJkIiwiaWNvbnNBbW91bnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZHNBbW91bnQiLCJjbGVhckNhcmRzTGlzdENvbnRhaW5lciIsImNvbnRhaW5lciIsImlubmVySFRNTCIsInNodWZmbGVBcnJheSIsImFycmF5Iiwic2h1ZmZsZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiX3JlZiIsInBvcCIsImNyZWF0ZU5ld1NvdW5kc0xpc3QiLCJjYXJkcyIsInB1c2giLCJwZXJjZW50Q29ycmVjdEFuc3dlcnMiLCJvYmoiLCJyb3VuZCIsIkNvcnJlY3QiLCJJbmNvcnJlY3QiLCJjcmVhdGVTdGFydGluZ1N0YXRpc3RpY0RhdGEiLCJyZXN1bHQiLCJDYXRlZ29yeSIsInNlY3Rpb25UaXRsZSIsIldvcmQiLCJ3b3JkIiwiVHJhaW5lZCIsImNyZWF0ZVN0YXRpc3RpY3NEYXRhIiwic2F2ZWREYXRhIiwiZ2V0SXRlbSIsInN0YXJ0aW5nRGF0YSIsInN0YXJ0aW5nRGF0YVRvSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiYXBwbHkiLCJjdXJyZW50RGF0YSIsInBhcnNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJyZXNldENhcmRzU3RhdGUiLCJtYWluU2VjdGlvbiIsIm1haW5TZWN0aW9uQ29udGFpbmVyIiwicmVzZXRDYXJkc1NvdW5kc0xpc3QiLCJyZXNldFNjb3JlTGluZSIsInBsYXlNb2RlIiwiY3JlYXRlU3RhdGlzdGljc1RhYmxlSGVhZCIsInN0YXRpc3RpY3NUYWJsZUhlYWQiLCJoZWFkZXJSb3ciLCJoZWFkZXJSb3dEYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImhlYWRlclJvd1RoIiwiY29sdW1uIiwiY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keSIsInN0YXRpc3RpY3NUYWJsZUJvZHkiLCJ0Qm9keVJvdyIsInRCb2R5Um93RGF0YSIsInZhbHVlcyIsInJvd0NhdGVnb3J5Iiwicm93V29yZCIsInJvdyIsInZhbHVlIiwiaW5kZXgiLCJ0Qm9keVJvd0NlbGwiLCJjZWxsIiwic3RhdFRhYmxlIiwic3RhdFRhYmxlSGVhZGVyIiwic3RhdFRhYmxlSGVhZGVyQ2VsbHMiLCJzdGF0VGFibGVCb2R5Iiwic29ydFR5cGUiLCJzb3J0Q2F0ZWdvcnkiLCJzb3J0Q2F0ZWdvcnlDZWxscyIsInNvcnRDYXRlZ29yeUNlbGxzVmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwiYXJlRW1wdHlDZWxscyIsImV2ZXJ5IiwibnVtMSIsIm51bTIiLCJsb2NhbGVDb21wYXJlIiwicmV2ZXJzZSIsImN1cnJlbnRJdGVtIiwiY2FyZExpc3RJdGVtcyIsIl9jdXJyZW50RGF0YSRmaWx0ZXIiLCJfY3VycmVudERhdGEkZmlsdGVyMiIsIl9zbGljZWRUb0FycmF5IiwiY3VycmVudERhdGFUb0pzb24iLCJzdGFydEltYWdlIiwiaW1hZ2UiLCJhdWRpb1NyYyIsInNlY3Rpb25EYXRhIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm90YXRlQ2FyZCIsInJvdGF0ZUJhY2siLCJwcmVwZW5kIiwiVkFSSUFCTEVTIiwibW9kYWxXaW5kb3dJY29uV2luIiwibW9kYWxXaW5kb3dJY29uTG9zZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcFdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9