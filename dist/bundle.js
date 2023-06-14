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
  var h3 = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.createElement)('h3');
  h3.classList.add('modal-window__score');
  modalWindow.append(icon);
  modalWindow.append(text);
  modalWindow.append(h3);
  return modalWindow;
};
var showModalWindow = function showModalWindow() {
  var modalWindow = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindow');
  var modalWindowIcon = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindowIcon');
  var modalWindowText = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindowText');
  var modalWindowhScore = document.querySelector('.modal-window__score');
  var scoreLine = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('scoreLine');
  if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.isGameOverSuccess)()) {
    modalWindowIcon.src = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('modalWindowIconWin');
    modalWindowText.textContent = 'You are win!';
    modalWindow.classList.add('appear');
    modalWindowhScore.textContent = '';
  } else {
    var scoreLineIcons = scoreLine.querySelectorAll('img');
    // console.log('scoreLine', scoreLine);
    var amountOfMistakes = Array.from(scoreLineIcons).filter(function (item) {
      return item.src === 'assets/images/score-icons/wrong.png';
    }).length;
    modalWindowhScore.textContent = "Mistakes: ".concat(amountOfMistakes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNlO0FBQ1M7QUFDTjtBQUNBO0FBQ0E7QUFDYztBQUNNO0FBQ3BCO0FBQzBCO0FBQzdCO0FBRTVDLElBQU04RyxVQUFVLEdBQUc1TSxRQUFRLENBQUNyQixhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ3JEaU8sVUFBVSxDQUFDOVMsTUFBTSxDQUFDdUksa0VBQWEsRUFBRSxDQUFDO0FBQ2xDdUssVUFBVSxDQUFDOVMsTUFBTSxDQUFDc0IsOERBQVksRUFBRSxDQUFDO0FBQ2pDd1IsVUFBVSxDQUFDOVMsTUFBTSxDQUFDMEYsMEVBQWlCLEVBQUUsQ0FBQztBQUN0Q29OLFVBQVUsQ0FBQzlTLE1BQU0sQ0FBQzZELDREQUFVLEVBQUUsQ0FBQztBQUMvQmlQLFVBQVUsQ0FBQzlTLE1BQU0sQ0FBQ1MsOERBQVksRUFBRSxDQUFDO0FBQ2pDeUYsUUFBUSxDQUFDMUQsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRDJHLDhEQUFlLEVBQUU7RUFDakJuSCxxRUFBc0IsQ0FBQ2hCLDhEQUFJLENBQUM7RUFDNUIsSUFBTStOLFdBQVcsR0FBRzdNLDBEQUFPLENBQUMsYUFBYSxDQUFDO0VBQzFDNk0sV0FBVyxDQUFDL08sTUFBTSxDQUFDOEssZ0ZBQW9CLEVBQUUsQ0FBQztFQUMxQ2lCLHlEQUFpQixFQUFFO0FBQ3JCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2NhcmRJdGVtLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWxXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnUuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnVCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnVJdGVtLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9vdmVybGF5LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9zY29yZUxpbmVJY29uLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9zdGF0aXN0aWNzQnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlQnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvZXZlbnRzLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvaGVscGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvYXNzZXRzL2RhdGEvZGF0YS5qc29uIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zNjE1Iiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZUNhcmRJdGVtID0gKGltZ1BhdGgsIGltZ0FsdCwgY2FyZFRpdGxlLCBjYXJkU2VjdGlvbiwgY2FyZFRyYW5zbGF0aW9uID0gJycsIHNvdW5kUGF0aCA9ICcnKSA9PiB7XG4gIC8vIGNyZWF0ZSBjYXJkIGl0ZW1cbiAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVFbGVtZW50KCdsaScpO1xuICBjYXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQtbGlzdF9faXRlbScpO1xuICBjYXJkSXRlbS5kYXRhc2V0LnNlY3Rpb24gPSBjYXJkU2VjdGlvbjtcbiAgY2FyZEl0ZW0uZGF0YXNldC5zb3VuZCA9IHNvdW5kUGF0aDtcblxuICAvLyBjcmVhdGUgY2FyZCBpbm5lclxuICBjb25zdCBjYXJkSW5uZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZElubmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW5uZXInKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCBzaWRlXG4gIGNvbnN0IGNhcmRGcm9udCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkRnJvbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udCcpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IGltYWdlIGNvbnRhaW5lclxuICBjb25zdCBjYXJkRnJvbnRJbWdDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEZyb250SW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnRfX3BpYycpO1xuICBjYXJkRnJvbnRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1waWMnKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCBpbWFnZVxuICBjb25zdCBjYXJkRnJvbnRJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2FyZEZyb250SW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnRfX3BpYy1pbWcnKTtcbiAgY2FyZEZyb250SW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gIGNhcmRGcm9udEltZy5zcmMgPSBpbWdQYXRoO1xuICBjYXJkRnJvbnRJbWcuYWx0ID0gaW1nQWx0O1xuXG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5hcHBlbmQoY2FyZEZyb250SW1nKTtcbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRJbWdDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHRpdGxlXG4gIGNvbnN0IGNhcmRGcm9udFRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY2FyZEZyb250VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fdGl0bGUnKTtcbiAgY2FyZEZyb250VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICBjYXJkRnJvbnRUaXRsZS50ZXh0Q29udGVudCA9IGNhcmRUaXRsZTtcbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRUaXRsZSk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgcm90YXRlIGJ1dHRvblxuICBjb25zdCBjYXJkRnJvbnRSb3RhdGVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnRfX3JvdGF0ZScpO1xuICBjYXJkRnJvbnRSb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgncm90YXRlLWJ0bicpO1xuICBjYXJkRnJvbnRSb3RhdGVCdG4udHlwZSA9ICdidXR0b24nO1xuICBjYXJkRnJvbnRSb3RhdGVCdG4udGV4dENvbnRlbnQgPSAncm90YXRlIGJ1dHRvbic7XG5cbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRSb3RhdGVCdG4pO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgc2lkZVxuICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIGltYWdlIGNvbnRhaW5lclxuICBjb25zdCBjYXJkQmFja0ltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2tfX3BpYycpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgaW1hZ2VcbiAgY29uc3QgY2FyZEJhY2tJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2FyZEJhY2tJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrX19waWMtaW1nJyk7XG4gIGNhcmRCYWNrSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gIGNhcmRCYWNrSW1nLnNyYyA9IGltZ1BhdGg7XG4gIGNhcmRCYWNrSW1nLmFsdCA9IGltZ0FsdDtcblxuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5hcHBlbmQoY2FyZEJhY2tJbWcpO1xuXG4gIGNhcmRCYWNrLmFwcGVuZChjYXJkQmFja0ltZ0NvbnRhaW5lcik7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayB0aXRsZVxuICBjb25zdCBjYXJkQmFja1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY2FyZEJhY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2tfX3RpdGxlJyk7XG4gIGNhcmRCYWNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICBjYXJkQmFja1RpdGxlLnRleHRDb250ZW50ID0gY2FyZFRyYW5zbGF0aW9uO1xuXG4gIGNhcmRCYWNrLmFwcGVuZChjYXJkQmFja1RpdGxlKTtcblxuICBjYXJkSW5uZXIuYXBwZW5kKGNhcmRGcm9udCk7XG4gIGNhcmRJbm5lci5hcHBlbmQoY2FyZEJhY2spO1xuXG4gIGNhcmRJdGVtLmFwcGVuZChjYXJkSW5uZXIpO1xuICByZXR1cm4gY2FyZEl0ZW07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkSXRlbTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBmb290ZXJcbiAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIC8vIGNyZWF0ZSBmb290ZXIgcGFyYWdyYXBoXG4gIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0Jyk7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5ICc7XG5cbiAgLy8gY3JlYXRlIGZvb3RlciBwYXJhZ3JhcGggbGlua1xuICBjb25zdCBwYXJhZ3JhcGhMaW5rID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBwYXJhZ3JhcGhMaW5rLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0X19saW5rJyk7XG4gIHBhcmFncmFwaExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIHBhcmFncmFwaExpbmsudGV4dENvbnRlbnQgPSAnQW50b24gU3VraGFkb2xldHMnO1xuICBwYXJhZ3JhcGhMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1N1aG9kb2xlY0EnO1xuXG4gIHBhcmFncmFwaC5hcHBlbmQocGFyYWdyYXBoTGluayk7XG5cbiAgLy8gY3JlYXRlIGZvb3RlciBjb250YWluZXJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBmb290ZXJDb250YWluZXIuYXBwZW5kKHBhcmFncmFwaCk7XG5cbiAgZm9vdGVyRWxlbWVudC5hcHBlbmQoZm9vdGVyQ29udGFpbmVyKTtcblxuICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcbiIsImltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IGNyZWF0ZU5hdk1lbnUgfSBmcm9tICcuL25hdk1lbnUnO1xuaW1wb3J0IHsgY3JlYXRlTG9nbyB9IGZyb20gJy4vbG9nbyc7XG5pbXBvcnQgeyBjcmVhdGVUb2dnbGUgfSBmcm9tICcuL3RvZ2dsZUJ0bic7XG5pbXBvcnQgeyBjcmVhdGVOYXZNZW51QnRuIH0gZnJvbSAnLi9uYXZNZW51QnRuJztcbmltcG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NCdG4gfSBmcm9tICcuL3N0YXRpc3RpY3NCdG4nO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGxvZ29cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUxvZ28oJ0VuZ2xpc2ggZm9yIGtpZHMnLCAnI2hvbWUnKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckJ0bnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgdG9nZ2xlXG4gIGNvbnN0IHRvZ2dsZUJ0biA9IGNyZWF0ZVRvZ2dsZSgpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgc3RhdGlzdGljcyBidXR0b25cbiAgY29uc3Qgc3RhdEJ0biA9IGNyZWF0ZVN0YXRpc3RpY3NCdG4oKTtcblxuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVCdG4pO1xuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZChzdGF0QnRuKTtcblxuICAvLyBjcmVhdGUgbmF2XG4gIGNvbnN0IGhlYWRlck5hdiA9IGNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hdicpO1xuXG4gIC8vIGNyZWF0ZSBuYXYgbWVudSBidXR0b25cbiAgY29uc3QgbmF2TWVudUJ0biA9IGNyZWF0ZU5hdk1lbnVCdG4oKTtcblxuICAvLyBjcmVhdGUgbmF2IG1lbnVcbiAgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSBjcmVhdGVOYXZNZW51KGRhdGEpO1xuXG4gIGhlYWRlck5hdi5hcHBlbmQobmF2TWVudUJ0bik7XG4gIGhlYWRlck5hdi5hcHBlbmQobmF2aWdhdGlvbk1lbnUpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJOYXYpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckxvZ28pO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckJ0bnNDb250YWluZXIpO1xuICBoZWFkZXJFbGVtZW50LmFwcGVuZChoZWFkZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBoZWFkZXJFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCwgaGlkZVN0YXRUYWJsZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZUxvZ28gPSAobG9nb1RleHQsIGxvZ29IcmVmKSA9PiB7XG4gIC8vIGNyZWF0ZSBsb2dvXG4gIGNvbnN0IGhlYWRlckxvZ28gPSBjcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG5cbiAgY29uc3QgaGVhZGVyTG9nb0xpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIGhlYWRlckxvZ29MaW5rLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvX19saW5rJyk7XG4gIGhlYWRlckxvZ29MaW5rLnRleHRDb250ZW50ID0gbG9nb1RleHQ7XG4gIGhlYWRlckxvZ29MaW5rLmhyZWYgPSBsb2dvSHJlZjtcblxuICBoZWFkZXJMb2dvLmFwcGVuZChoZWFkZXJMb2dvTGluayk7XG5cbiAgcmV0dXJuIGhlYWRlckxvZ287XG59O1xuXG5jb25zdCBsb2dvRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgaGlkZVN0YXRUYWJsZSgpO1xuICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KGRhdGEpO1xufTtcblxuY29uc3Qgc2V0TG9nb0V2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckxvZ28gPSBHRVRfVkFSKCdoZWFkZXJMb2dvJyk7XG4gIGhlYWRlckxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dvRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMb2dvLCBzZXRMb2dvRXZlbnRMaXN0ZW5lciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCBpc01haW5NZW51LCBpc0NhcmQsIGlzVHJhaW5Nb2RlLFxuICBpc1BsYXlNb2RlLCB0cmFpbk1vZGVGdW5jdGlvbmFsaXR5LCBpc0dhbWVTdGFydGVkLFxuICBpc0FjdGl2ZUNhcmQsIHVwZGF0ZVNvdW5kTGlzdCwgYWRkU2NvcmVJY29uLCBwbGF5U291bmQsIGlzR2FtZU92ZXIsXG4gIGlzR2FtZU92ZXJTdWNjZXNzLCB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSB9IGZyb20gJy4vbmF2TWVudSc7XG5pbXBvcnQgeyBzaG93T3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5UmVwZWF0QnRuLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgeyBzaG93TW9kYWxXaW5kb3csIGhpZGVNb2RhbFdpbmRvdyB9IGZyb20gJy4vbW9kYWxXaW5kb3cnO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgbWFpbiBlbGVtZW50XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgLy8gY3JlYXRlIG1haW4gY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc2NvcmUgbGluZVxuICBjb25zdCBzY29yZUxpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2NvcmVMaW5lLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWxpbmUnKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZChzY29yZUxpbmUpO1xuXG4gIC8vIGNyZWF0ZSBjYXRlZ29yeSBuYW1lXG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNhdGVnb3J5TmFtZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1uYW1lJyk7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9ICcnO1xuXG4gIC8vIGNhcmRzIGxpc3RcbiAgY29uc3QgY2FyZExpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjYXJkTGlzdC5jbGFzc0xpc3QuYWRkKCdjYXJkcy1saXN0Jyk7XG4gIGNhcmRMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSAnJztcbiAgY2FyZExpc3QuZGF0YXNldC5tb2RlID0gJyc7XG5cbiAgLy8gY3JlYXRlIHBsYXlSZXBlYXQgYnV0dG9uXG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBjcmVhdGVQbGF5UmVwZWF0QnRuKCk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnlOYW1lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2FyZExpc3QpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChwbGF5UmVwZWF0QnRuKTtcblxuICBtYWluRWxlbWVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG1haW5FbGVtZW50O1xufTtcblxuY29uc3QgbWFpbk1lbnVGdW5jdGlvbmFsaXR5ID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCB7IHNlY3Rpb24gfSA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJykuZGF0YXNldDtcbiAgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbihkYXRhLCBzZWN0aW9uKTtcbiAgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUoc2VjdGlvbik7XG59O1xuXG5jb25zdCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgY2FyZElubmVyID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWlubmVyJyk7XG4gIGlmIChpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNDYXJkKHRhcmdldCkpIHtcbiAgICBtYWluTWVudUZ1bmN0aW9uYWxpdHkodGFyZ2V0KTtcbiAgfSBlbHNlIGlmICghaXNNYWluTWVudShjYXJkc0xpc3QpICYmIGlzVHJhaW5Nb2RlKGNhcmRzTGlzdCkgJiYgaXNDYXJkKHRhcmdldCkpIHtcbiAgICB0cmFpbk1vZGVGdW5jdGlvbmFsaXR5KHRhcmdldCwgY2FyZElubmVyKTtcbiAgfSBlbHNlIGlmICghaXNNYWluTWVudShjYXJkc0xpc3QpICYmIGlzUGxheU1vZGUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KVxuICAgICYmIGlzR2FtZVN0YXJ0ZWQoKSkge1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZEZyb250ID0gY3VycmVudENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtZnJvbnQnKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZFNvdW5kID0gY3VycmVudENhcmQuZGF0YXNldC5zb3VuZDtcbiAgICBjb25zdCBjdXJyZW50U291bmQgPSBHRVRfVkFSKCdzb3VuZHNMaXN0JykuYXQoLTEpO1xuICAgIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gICAgY29uc3QgY29ycmVjdEFuc3dlclNvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL2NvcnJlY3QtY2hvaWNlLm1wMyc7XG4gICAgY29uc3Qgc3VjY2Vzc1NvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL3N1Y2Nlc3MubXAzJztcbiAgICBjb25zdCBjb3JyZWN0SWNvblNyYyA9ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL2NvcnJlY3QucG5nJztcbiAgICBjb25zdCB3cm9uZ0ljb25TcmMgPSAnYXNzZXRzL2ltYWdlcy9zY29yZS1pY29ucy93cm9uZy5wbmcnO1xuICAgIGNvbnN0IHdyb25nQW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvbmVnYXRpdmVfYmVlcHMubXAzJztcbiAgICBjb25zdCBmYWlsdXJlU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvZmFpbHVyZS5tcDMnO1xuICAgIGlmIChpc0FjdGl2ZUNhcmQoY3VycmVudENhcmRGcm9udCkgJiYgIXBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5aW5nJykpIHtcbiAgICAgIHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSgncGxheScsIGN1cnJlbnRDYXJkLCBjdXJyZW50Q2FyZFNvdW5kID09PSBjdXJyZW50U291bmQpO1xuICAgICAgaWYgKGN1cnJlbnRDYXJkU291bmQgPT09IGN1cnJlbnRTb3VuZCkge1xuICAgICAgICBjdXJyZW50Q2FyZEZyb250LmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgIGFkZFNjb3JlSWNvbihjdXJyZW50Q2FyZCwgY29ycmVjdEljb25TcmMpO1xuICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIGNvcnJlY3RBbnN3ZXJTb3VuZCk7XG4gICAgICAgIHVwZGF0ZVNvdW5kTGlzdCgpO1xuICAgICAgICBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eShwbGF5UmVwZWF0QnRuKTtcbiAgICAgICAgaWYgKGlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgIHNob3dPdmVybGF5KCk7XG4gICAgICAgICAgaWYgKGlzR2FtZU92ZXJTdWNjZXNzKCkpIHtcbiAgICAgICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgc3VjY2Vzc1NvdW5kKTtcbiAgICAgICAgICAgIHNob3dNb2RhbFdpbmRvdygpO1xuICAgICAgICAgICAgaGlkZU1vZGFsV2luZG93KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgZmFpbHVyZVNvdW5kKTtcbiAgICAgICAgICAgIHNob3dNb2RhbFdpbmRvdygpO1xuICAgICAgICAgICAgaGlkZU1vZGFsV2luZG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRTY29yZUljb24oY3VycmVudENhcmQsIHdyb25nSWNvblNyYyk7XG4gICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgd3JvbmdBbnN3ZXJTb3VuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTWFpbiwgbWFpbk1lbnVGdW5jdGlvbmFsaXR5LCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHksXG4gIHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBpc0dhbWVPdmVyU3VjY2VzcywgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCB7IGhpZGVPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcblxuY29uc3QgY3JlYXRlTW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsV2luZG93ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvdycpO1xuXG4gIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfX2ljb24nKTtcbiAgaWNvbi5zcmMgPSAnJztcbiAgaWNvbi5hbHQgPSAnaWNvbic7XG5cbiAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfX3RleHQnKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGNvbnN0IGgzID0gY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X19zY29yZScpO1xuXG4gIG1vZGFsV2luZG93LmFwcGVuZChpY29uKTtcbiAgbW9kYWxXaW5kb3cuYXBwZW5kKHRleHQpO1xuICBtb2RhbFdpbmRvdy5hcHBlbmQoaDMpO1xuXG4gIHJldHVybiBtb2RhbFdpbmRvdztcbn07XG5cbmNvbnN0IHNob3dNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBHRVRfVkFSKCdtb2RhbFdpbmRvdycpO1xuICBjb25zdCBtb2RhbFdpbmRvd0ljb24gPSBHRVRfVkFSKCdtb2RhbFdpbmRvd0ljb24nKTtcbiAgY29uc3QgbW9kYWxXaW5kb3dUZXh0ID0gR0VUX1ZBUignbW9kYWxXaW5kb3dUZXh0Jyk7XG4gIGNvbnN0IG1vZGFsV2luZG93aFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvd19fc2NvcmUnKTtcbiAgY29uc3Qgc2NvcmVMaW5lID0gR0VUX1ZBUignc2NvcmVMaW5lJyk7XG4gIGlmIChpc0dhbWVPdmVyU3VjY2VzcygpKSB7XG4gICAgbW9kYWxXaW5kb3dJY29uLnNyYyA9IEdFVF9WQVIoJ21vZGFsV2luZG93SWNvbldpbicpO1xuICAgIG1vZGFsV2luZG93VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgYXJlIHdpbiEnO1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgIG1vZGFsV2luZG93aFNjb3JlLnRleHRDb250ZW50ID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2NvcmVMaW5lSWNvbnMgPSBzY29yZUxpbmUucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gICAgLy8gY29uc29sZS5sb2coJ3Njb3JlTGluZScsIHNjb3JlTGluZSk7XG4gICAgY29uc3QgYW1vdW50T2ZNaXN0YWtlcyA9IEFycmF5LmZyb20oc2NvcmVMaW5lSWNvbnMpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zcmMgPT09ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZycpLmxlbmd0aDtcbiAgICBtb2RhbFdpbmRvd2hTY29yZS50ZXh0Q29udGVudCA9IGBNaXN0YWtlczogJHthbW91bnRPZk1pc3Rha2VzfWA7XG4gICAgbW9kYWxXaW5kb3dJY29uLnNyYyA9IEdFVF9WQVIoJ21vZGFsV2luZG93SWNvbkxvc2UnKTtcbiAgICBtb2RhbFdpbmRvd1RleHQudGV4dENvbnRlbnQgPSAnWW91IGFyZSBsb3NlISc7XG4gICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gIH1cbn07XG5cbmNvbnN0IGhpZGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBHRVRfVkFSKCdtb2RhbFdpbmRvdycpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXInKTtcbiAgICBoaWRlT3ZlcmxheSgpO1xuICAgIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG4gIH0sIDMwMDApO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTW9kYWxXaW5kb3csIHNob3dNb2RhbFdpbmRvdywgaGlkZU1vZGFsV2luZG93IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLFxuICBoaWRlU3RhdFRhYmxlLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IGNyZWF0ZU5hdk1lbnVJdGVtIGZyb20gJy4vbmF2TWVudUl0ZW0nO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnUgPSAoZGF0YVNldCkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IHVsXG4gIGNvbnN0IG5hdk1lbnVVbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdk1lbnVVbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVNldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5hdk1lbnVVbC5hcHBlbmQoY3JlYXRlTmF2TWVudUl0ZW0oZGF0YVtpXS5zZWN0aW9uKSk7XG4gIH1cblxuICByZXR1cm4gbmF2TWVudVVsO1xufTtcblxuY29uc3Qgb3Blbk5hdk1lbnUgPSAoaGVhZGVyTmF2KSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICBuYXZNZW51TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsudGFiSW5kZXggPSAwO1xuICB9KTtcbiAgaGVhZGVyTmF2LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1vdXQnKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZS1pbicpO1xufTtcblxuY29uc3QgY2xvc2VOYXZNZW51ID0gKGhlYWRlck5hdikgPT4ge1xuICBjb25zdCBoZWFkZXJNZW51ID0gR0VUX1ZBUignaGVhZGVyTWVudScpO1xuICBjb25zdCBuYXZNZW51TGlua3MgPSBHRVRfVkFSKCduYXZNZW51TGlua3MnKTtcbiAgaGVhZGVyTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1pbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLW91dCcpO1xuICBuYXZNZW51TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsudGFiSW5kZXggPSAtMTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXROYXZNZW51QWN0aXZlU3RhdGUgPSAobGlua3MsIGNhdGVnb3J5KSA9PiB7XG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBjb25zdCBsaW5rU2VjdGlvbiA9IGxpbmsuZGF0YXNldC5zZWN0aW9uO1xuICAgIGlmIChsaW5rU2VjdGlvbiA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSA9IChsaW5rcykgPT4ge1xuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBuYXZNZW51TGlua3MgPSBHRVRfVkFSKCduYXZNZW51TGlua3MnKTtcbiAgcmVtb3ZlTmF2TWVudUFjdGl2ZVN0YXRlKG5hdk1lbnVMaW5rcyk7XG4gIHNldE5hdk1lbnVBY3RpdmVTdGF0ZShuYXZNZW51TGlua3MsIGNhdGVnb3J5KTtcbn07XG5cbmNvbnN0IGhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gR0VUX1ZBUignY2F0ZWdvcnlOYW1lJyk7XG4gIGNvbnN0IGhhbWJ1cmdlckJ0biA9IEdFVF9WQVIoJ2hhbWJ1cmdlckJ0bicpO1xuICBjb25zdCB7IHNlY3Rpb24gfSA9IHRhcmdldC5kYXRhc2V0O1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBzZWN0aW9uO1xuICBoaWRlU3RhdFRhYmxlKCk7XG4gIGlmIChzZWN0aW9uID09PSAnSG9tZScpIHtcbiAgICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KGRhdGEpO1xuICAgIGhhbWJ1cmdlckJ0bi5jbGljaygpO1xuICB9IGVsc2UgaWYgKHNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uKGRhdGEsIHNlY3Rpb24pO1xuICAgIGhhbWJ1cmdlckJ0bi5jbGljaygpO1xuICB9XG4gIHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlKGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCk7XG59O1xuXG5jb25zdCBzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyTWVudSA9IEdFVF9WQVIoJ2hlYWRlck1lbnUnKTtcbiAgaGVhZGVyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU5hdk1lbnUsIG9wZW5OYXZNZW51LCBjbG9zZU5hdk1lbnUsIGhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5LFxuICBzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciwgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUsXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCB7IHNob3dPdmVybGF5LCBoaWRlT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgeyBvcGVuTmF2TWVudSwgY2xvc2VOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcblxuY29uc3QgY3JlYXRlTmF2TWVudUJ0biA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIG5hdiBidXR0b25cbiAgY29uc3QgbmF2TWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmF2TWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaGFtYnVyZ2VyJyk7XG4gIG5hdk1lbnVCdG4uaHJlZiA9ICcjJztcblxuICBjb25zdCBzcGFuMSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3Qgc3BhbjIgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNwYW4zID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4xKTtcbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjIpO1xuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMyk7XG5cbiAgcmV0dXJuIG5hdk1lbnVCdG47XG59O1xuXG5jb25zdCBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgaGFtYnVyZ2VyQnRuID0gR0VUX1ZBUignaGFtYnVyZ2VyQnRuJyk7XG4gIGNvbnN0IGhlYWRlck5hdiA9IEdFVF9WQVIoJ2hlYWRlck5hdicpO1xuICBoYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhlYWRlck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgY2xvc2VOYXZNZW51KGhlYWRlck5hdik7XG4gICAgICBoaWRlT3ZlcmxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuTmF2TWVudShoZWFkZXJOYXYpO1xuICAgICAgc2hvd092ZXJsYXkoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTmF2TWVudUJ0biwgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2FwaXRhbGl6ZUZpcnN0V29yZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnVJdGVtID0gKGxpbmtOYW1lKSA9PiB7XG4gIC8vIGNyZWF0ZSBsaVxuICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51X19pdGVtJyk7XG5cbiAgLy8gY3JlYXRlIG1lbnUgbGlua1xuICBjb25zdCBsaW5rID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51X19pdGVtLWxpbmsnKTtcbiAgbGluay5ocmVmID0gYCMke2xpbmtOYW1lfWA7XG4gIGxpbmsuZGF0YXNldC5zZWN0aW9uID0gY2FwaXRhbGl6ZUZpcnN0V29yZChsaW5rTmFtZSk7XG4gIGxpbmsudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RXb3JkKGxpbmtOYW1lKTtcbiAgbGluay50YWJJbmRleCA9IC0xO1xuXG4gIGxpLmFwcGVuZChsaW5rKTtcblxuICByZXR1cm4gbGk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZNZW51SXRlbTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCB7IGNsb3NlTmF2TWVudSB9IGZyb20gJy4vbmF2TWVudSc7XG5cbmNvbnN0IGNyZWF0ZU92ZXJsYXkgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBvdmVybGF5IGVsZW1lbnRcbiAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gIHJldHVybiBvdmVybGF5RWxlbWVudDtcbn07XG5cbmNvbnN0IGhpZGVPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gR0VUX1ZBUignb3ZlcmxheScpO1xuICBjb25zdCBib2R5ID0gR0VUX1ZBUignYm9keScpO1xuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vc2Nyb2xsJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG59O1xuXG5jb25zdCBzaG93T3ZlcmxheSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IEdFVF9WQVIoJ292ZXJsYXknKTtcbiAgY29uc3QgYm9keSA9IEdFVF9WQVIoJ2JvZHknKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3Njcm9sbCcpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xufTtcblxuY29uc3Qgb3ZlcmxheUZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBHRVRfVkFSKCdvdmVybGF5Jyk7XG4gIGNvbnN0IGhlYWRlck5hdiA9IEdFVF9WQVIoJ2hlYWRlck5hdicpO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChoZWFkZXJOYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgIGhpZGVPdmVybGF5KCk7XG4gICAgICBjbG9zZU5hdk1lbnUoaGVhZGVyTmF2KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlT3ZlcmxheSwgc2hvd092ZXJsYXksIGhpZGVPdmVybGF5LCBvdmVybGF5RnVuY3Rpb25hbGl0eSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHBsYXlTb3VuZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlUGxheVJlcGVhdEJ0biA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWJ0bicpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSAncGxheSc7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICBjb25zdCBzb3VuZHNMaXN0ID0gR0VUX1ZBUignc291bmRzTGlzdCcpO1xuICBjb25zdCBjdXJyZW50U291bmQgPSBzb3VuZHNMaXN0LmF0KC0xKTtcbiAgaWYgKHNvdW5kc0xpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIHBsYXlTb3VuZChwbGF5UmVwZWF0QnRuLCBjdXJyZW50U291bmQpO1xuICBpZiAoIXBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXBlYXQnKSkge1xuICAgIHBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmFkZCgncmVwZWF0Jyk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICBpZiAocGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlcGVhdCcpKSB7XG4gICAgcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdyZXBlYXQnKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIHBsYXlSZXBlYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVQbGF5UmVwZWF0QnRuLCBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSwgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUsXG4gIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZVNjb3JlTGluZUljb24gPSAoc3JjKSA9PiB7XG4gIGNvbnN0IHNjb3JlSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzY29yZUljb24uY2xhc3NMaXN0LmFkZCgnc2NvcmUtbGluZV9faWNvbicpO1xuICBzY29yZUljb24uc3JjID0gc3JjO1xuICBzY29yZUljb24uYWx0ID0gJ2ljb24nO1xuXG4gIHJldHVybiBzY29yZUljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTY29yZUxpbmVJY29uO1xuIiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgc2V0R2xvYmFsVmFsdWVzLFxuICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5LCBzaG93U3RhdFRhYmxlLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiwgU0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbi8vIGNyZWF0ZSBoZWFkZXIgc3RhdGlzdGljcyBidXR0b25cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHN0YXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1idXR0b24nKTtcbiAgc3RhdEJ0bi50ZXh0Q29udGVudCA9ICdTdGF0aXN0aWNzJztcblxuICByZXR1cm4gc3RhdEJ0bjtcbn07XG5cbmNvbnN0IHN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBzdGF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtYnV0dG9uJyk7XG4gIHN0YXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2VDb250YWluZXIgPSBzdGF0aXN0aWNzUGFnZS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNEYXRhID0gR0VUX1ZBUignc3RhdGlzdGljRGF0YScpLnNsaWNlKCk7XG4gICAgc3RhdGlzdGljc1RhYmxlLnJlbW92ZSgpO1xuICAgIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChjcmVhdGVTdGF0aXN0aWNzVGFibGUoc3RhdGlzdGljRGF0YSkpO1xuICAgIGNvbnN0IHJlcGVhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXQtYnRuJyk7XG4gICAgc3RhdGlzdGljRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBlbGVtMSA9IGFbJ0FjY3VyYWN5ICUnXTtcbiAgICAgIGNvbnN0IGVsZW0yID0gYlsnQWNjdXJhY3kgJSddO1xuXG4gICAgICByZXR1cm4gZWxlbTEgLSBlbGVtMjtcbiAgICB9KTtcbiAgICBjb25zdCByZXBlYXRlZERhdGEgPSBzdGF0aXN0aWNEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbVsnQWNjdXJhY3kgJSddICE9PSAnbi9lJyAmJiBpdGVtWydBY2N1cmFjeSAlJ10gIT09IDEwMClcbiAgICAgIC5zbGljZSgwLCA4KVxuICAgICAgLm1hcCgoZWxlbSkgPT4gZWxlbS5UcmFuc2xhdGlvbik7XG5cbiAgICBjb25zdCByZXBlYXRlZERhdGFTZXQgPSBkYXRhXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlY3Rpb25Xb3JkcylcbiAgICAgIC5tYXAoKGVsZW0pID0+IGVsZW0uc2VjdGlvbldvcmRzKVxuICAgICAgLmZsYXQoKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gcmVwZWF0ZWREYXRhLmluY2x1ZGVzKGl0ZW0udHJhbnNsYXRpb24pKTtcbiAgICBTRVRfVkFSKCdyZXBlYXRlZERhdGFTZXQnLCByZXBlYXRlZERhdGFTZXQpO1xuICAgIGlmIChyZXBlYXRlZERhdGFTZXQubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXBlYXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwZWF0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSgpO1xuXG4gICAgc2hvd1N0YXRUYWJsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NCdG4sIHN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdGF0aXN0aWNzVGFibGUsIGhpZGVTdGF0VGFibGUsIGNyZWF0ZURpZmZXb3Jkc1NlY3Rpb24sXG4gIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHksIHNldEdsb2JhbFZhbHVlcyxcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc0RhdGEgPSBHRVRfVkFSKCdzdGF0aXN0aWNEYXRhJyk7XG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHBhZ2VcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlJyk7XG5cbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZSBjb250YWluZXJcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZSBidXR0b25zIGNvbnRhaW5lclxuICBjb25zdCBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdGlzdGljc1BhZ2VCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZV9fY29udHJvbHMnKTtcblxuICAvLyBjcmVhdGUgcmVwZWF0IGRpZmZpY3VsdCB3b3JkcyBidXR0b25cbiAgY29uc3QgcmVwZWF0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlcGVhdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2VfX2NvbnRyb2xzLWJ0bicpO1xuICByZXBlYXRCdG4uY2xhc3NMaXN0LmFkZCgncmVwZWF0LWJ0bicpO1xuICByZXBlYXRCdG4udGV4dENvbnRlbnQgPSAnUmVwZWF0IGRpZmZpY3VsdCB3b3Jkcyc7XG5cbiAgLy8gY3JlYXRlIHJlc2V0IGJ1dHRvblxuICBjb25zdCByZXNldEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZV9fY29udHJvbHMtYnRuJyk7XG4gIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0LWJ0bicpO1xuICByZXNldEJ0bi50ZXh0Q29udGVudCA9ICdSZXNldCBzdGF0aXN0aWMnO1xuXG4gIHN0YXRpc3RpY3NQYWdlQnV0dG9ucy5hcHBlbmQocmVwZWF0QnRuKTtcbiAgc3RhdGlzdGljc1BhZ2VCdXR0b25zLmFwcGVuZChyZXNldEJ0bik7XG5cbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZSB0YWJsZVxuICBjb25zdCBzdGF0aXN0aWNzUGFnZVRhYmxlID0gY3JlYXRlU3RhdGlzdGljc1RhYmxlKHN0YXRpc3RpY3NEYXRhKTtcblxuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoc3RhdGlzdGljc1BhZ2VCdXR0b25zKTtcbiAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKHN0YXRpc3RpY3NQYWdlVGFibGUpO1xuXG4gIHN0YXRpc3RpY3NQYWdlLmFwcGVuZChzdGF0aXN0aWNzUGFnZUNvbnRhaW5lcik7XG4gIHJldHVybiBzdGF0aXN0aWNzUGFnZTtcbn07XG5cbmNvbnN0IHJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHJlc2V0U3RhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idG4nKTtcbiAgcmVzZXRTdGF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNldEdsb2JhbFZhbHVlcygpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyID0gc3RhdGlzdGljc1BhZ2UucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN0YXRpc3RpY3NUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc0RhdGEgPSBHRVRfVkFSKCdzdGF0aXN0aWNEYXRhJyk7XG4gICAgc3RhdGlzdGljc1RhYmxlLnJlbW92ZSgpO1xuICAgIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChjcmVhdGVTdGF0aXN0aWNzVGFibGUoc3RhdGlzdGljc0RhdGEpKTtcbiAgICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5KCk7XG4gICAgY29uc3QgcmVwZWF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgICByZXBlYXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHJlcGVhdERpZmZXb3Jkc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXQtYnRuJyk7XG4gIHJlcGVhdERpZmZXb3Jkc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCByZXBlYXRlZERhdGFTZXQgPSBHRVRfVkFSKCdyZXBlYXRlZERhdGFTZXQnKTtcbiAgICBjcmVhdGVEaWZmV29yZHNTZWN0aW9uKHJlcGVhdGVkRGF0YVNldCwgJ0RpZmZpY3VsdCB3b3JkcycpO1xuICAgIGhpZGVTdGF0VGFibGUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVTdGF0aXN0aWNzUGFnZSwgcmVwZWF0RGlmZldvcmRzRnVuY3Rpb25hbGl0eSwgcmVzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXBkYXRlTW9kZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlVG9nZ2xlID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgdG9nZ2xlXG4gIGNvbnN0IHRvZ2dsZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0b2dnbGVCdG4udHlwZSA9ICdidXR0b24nO1xuICB0b2dnbGVCdG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbicpO1xuICB0b2dnbGVCdG4uYXJpYVByZXNzZWQgPSBmYWxzZTtcblxuICAvLyBjcmVhdGUgdG9nZ2xlIG1vZGUgdHJhaW5cbiAgY29uc3QgdG9nZ2xlTW9kZVRyYWluID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2dnbGVNb2RlVHJhaW4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbl9fbW9kZScpO1xuICB0b2dnbGVNb2RlVHJhaW4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbl9fdHJhaW4nKTtcbiAgdG9nZ2xlTW9kZVRyYWluLnRleHRDb250ZW50ID0gJ1RyYWluJztcblxuICAvLyBjcmVhdGUgdG9nZ2xlIG1vZGUgcGxheVxuICBjb25zdCB0b2dnbGVNb2RlUGxheSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9nZ2xlTW9kZVBsYXkuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbl9fbW9kZScpO1xuICB0b2dnbGVNb2RlUGxheS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19wbGF5Jyk7XG4gIHRvZ2dsZU1vZGVQbGF5LnRleHRDb250ZW50ID0gJ1BsYXknO1xuXG4gIHRvZ2dsZUJ0bi5hcHBlbmQodG9nZ2xlTW9kZVRyYWluKTtcbiAgdG9nZ2xlQnRuLmFwcGVuZCh0b2dnbGVNb2RlUGxheSk7XG5cbiAgcmV0dXJuIHRvZ2dsZUJ0bjtcbn07XG5cbmNvbnN0IHRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUJ0biA9IEdFVF9WQVIoJ3RvZ2dsZUJ0bicpO1xuICB0b2dnbGVCdG4uYXJpYVByZXNzZWQgPSAodG9nZ2xlQnRuLmFyaWFQcmVzc2VkID09PSAnZmFsc2UnKSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIFNFVF9WQVIoJ2lzUGxheU1vZGUnLCB0b2dnbGVCdG4uYXJpYVByZXNzZWQpO1xuICB1cGRhdGVNb2RlKCk7XG59O1xuXG5jb25zdCBzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCB0b2dnbGVCdG4gPSBHRVRfVkFSKCd0b2dnbGVCdG4nKTtcbiAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUb2dnbGUsIHRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHksIHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsImltcG9ydCB7IG5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZNZW51QnRuJztcbmltcG9ydCB7IG92ZXJsYXlGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9vdmVybGF5JztcbmltcG9ydCB7IHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZNZW51JztcbmltcG9ydCB7IHNldExvZ29FdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCB7IHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbic7XG5pbXBvcnQgeyBzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy90b2dnbGVCdG4nO1xuaW1wb3J0IHsgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3BsYXlSZXBlYXRCdG4nO1xuaW1wb3J0IHsgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3NCdG4nO1xuaW1wb3J0IHsgcmVwZWF0RGlmZldvcmRzRnVuY3Rpb25hbGl0eSwgcmVzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc1BhZ2UnO1xuaW1wb3J0IHsgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vaGVscGVyJztcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIG5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5KCk7XG4gIG92ZXJsYXlGdW5jdGlvbmFsaXR5KCk7XG4gIHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyKCk7XG4gIHNldExvZ29FdmVudExpc3RlbmVyKCk7XG4gIHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSgpO1xuICBzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5KCk7XG4gIHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KCk7XG4gIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkoKTtcbiAgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgcmVwZWF0RGlmZldvcmRzRnVuY3Rpb25hbGl0eSgpO1xuICByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRFdmVudExpc3RlbmVycztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgU0VUX1ZBUiwgR0VUX1ZBUiB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCBjcmVhdGVDYXJkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2NhcmRJdGVtJztcbmltcG9ydCB7IHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgY3JlYXRlU2NvcmVMaW5lSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL3Njb3JlTGluZUljb24nO1xuaW1wb3J0IHsgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCBkYXRhU2V0IGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5cbi8vIGNyZWF0ZSBlbGVtZW50XG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgaXNNYWluTWVudSA9IChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3RhcnQtcGFnZScpO1xuY29uc3QgaXNDYXJkID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpO1xuY29uc3QgaXNBY3RpdmVDYXJkID0gKGNhcmQpID0+ICFjYXJkLmNsYXNzTGlzdC5jb250YWlucygnaW5hY3RpdmUnKTtcbmNvbnN0IGlzVHJhaW5Nb2RlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC5tb2RlID09PSAndHJhaW4nO1xuY29uc3QgaXNQbGF5TW9kZSA9IChlbGVtZW50KSA9PiBlbGVtZW50LmRhdGFzZXQubW9kZSA9PT0gJ3BsYXknO1xuY29uc3QgaXNHYW1lU3RhcnRlZCA9ICgpID0+IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlcGVhdCcpO1xuY29uc3QgaXNHYW1lT3ZlciA9ICgpID0+IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKS5sZW5ndGggPT09IDA7XG5jb25zdCBpc0dhbWVPdmVyU3VjY2VzcyA9ICgpID0+IHtcbiAgY29uc3QgaWNvbnNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmUtbGluZV9faWNvbicpLmxlbmd0aDtcbiAgY29uc3QgY2FyZHNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1saXN0X19pdGVtJykubGVuZ3RoO1xuICByZXR1cm4gaWNvbnNBbW91bnQgPT09IGNhcmRzQW1vdW50O1xufTtcblxuY29uc3QgY2xlYXJDYXJkc0xpc3RDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5jb25zdCBzaHVmZmxlQXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgY29uc3Qgc2h1ZmZsZWQgPSBbLi4uYXJyYXldO1xuICBmb3IgKGxldCBpID0gc2h1ZmZsZWQubGVuZ3RoIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbc2h1ZmZsZWRbaV0sIHNodWZmbGVkW2pdXSA9IFtzaHVmZmxlZFtqXSwgc2h1ZmZsZWRbaV1dO1xuICB9XG4gIHJldHVybiBzaHVmZmxlZDtcbn07XG5cbmNvbnN0IHVwZGF0ZVNvdW5kTGlzdCA9ICgpID0+IHtcbiAgY29uc3Qgc291bmRzTGlzdCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKS5zbGljZSgpO1xuICBzb3VuZHNMaXN0LnBvcCgpO1xuICBTRVRfVkFSKCdzb3VuZHNMaXN0Jywgc291bmRzTGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdTb3VuZHNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgY29uc3Qgc291bmRzTGlzdCA9IFtdO1xuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgeyBzb3VuZCB9ID0gY2FyZC5kYXRhc2V0O1xuICAgIHNvdW5kc0xpc3QucHVzaChzb3VuZCk7XG4gIH0pO1xuXG4gIHJldHVybiBzb3VuZHNMaXN0O1xufTtcblxuY29uc3QgcGVyY2VudENvcnJlY3RBbnN3ZXJzID0gKG9iaikgPT4gTWF0aC5yb3VuZCgoXG4gIG9iai5Db3JyZWN0IC8gKG9iai5Db3JyZWN0ICsgb2JqLkluY29ycmVjdCkpICogMTAwKTtcblxuY29uc3QgY3JlYXRlU3RhcnRpbmdTdGF0aXN0aWNEYXRhID0gKGRhdGEpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLnNlY3Rpb24gIT09ICdob21lJykge1xuICAgICAgaXRlbS5zZWN0aW9uV29yZHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgQ2F0ZWdvcnk6IGl0ZW0uc2VjdGlvblRpdGxlLFxuICAgICAgICAgIFdvcmQ6IGVsZW0ud29yZCxcbiAgICAgICAgICBUcmFuc2xhdGlvbjogZWxlbS50cmFuc2xhdGlvbixcbiAgICAgICAgICBUcmFpbmVkOiAwLFxuICAgICAgICAgIENvcnJlY3Q6IDAsXG4gICAgICAgICAgSW5jb3JyZWN0OiAwLFxuICAgICAgICAgICdBY2N1cmFjeSAlJzogJ24vZScsXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdC5wdXNoKG9iaik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc0RhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3Qgc2F2ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRpc3RpY0RhdGEnKTtcbiAgaWYgKCFzYXZlZERhdGEpIHtcbiAgICBjb25zdCBzdGFydGluZ0RhdGEgPSBjcmVhdGVTdGFydGluZ1N0YXRpc3RpY0RhdGEoZGF0YSk7XG4gICAgY29uc3Qgc3RhcnRpbmdEYXRhVG9Kc29uID0gSlNPTi5zdHJpbmdpZnkoc3RhcnRpbmdEYXRhKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGlzdGljRGF0YScsIHN0YXJ0aW5nRGF0YVRvSnNvbik7XG4gICAgcmVzdWx0LnB1c2goLi4uc3RhcnRpbmdEYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWREYXRhKTtcbiAgICByZXN1bHQucHVzaCguLi5jdXJyZW50RGF0YSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgY2FwaXRhbGl6ZUZpcnN0V29yZCA9ICh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcblxuY29uc3Qgc2V0R2xvYmFsVmFsdWVzID0gKCkgPT4ge1xuICBTRVRfVkFSKCdtYWluU2VjdGlvbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykpO1xuICBTRVRfVkFSKCdjYXRlZ29yeU5hbWUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktbmFtZScpKTtcbiAgU0VUX1ZBUignY2FyZHNMaXN0JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWxpc3QnKSk7XG4gIFNFVF9WQVIoJ2hhbWJ1cmdlckJ0bicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItaGFtYnVyZ2VyJykpO1xuICBTRVRfVkFSKCdoZWFkZXJOYXYnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW5hdicpKTtcbiAgU0VUX1ZBUignaGVhZGVyTWVudScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbWVudScpKTtcbiAgU0VUX1ZBUignbmF2TWVudUxpbmtzJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1tZW51X19pdGVtLWxpbmsnKSk7XG4gIFNFVF9WQVIoJ292ZXJsYXknLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpKTtcbiAgU0VUX1ZBUignYm9keScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSk7XG4gIFNFVF9WQVIoJ2hlYWRlckxvZ28nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWxvZ29fX2xpbmsnKSk7XG4gIFNFVF9WQVIoJ3RvZ2dsZUJ0bicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtYnV0dG9uJykpO1xuICBTRVRfVkFSKCdwbGF5UmVwZWF0QnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYnRuJykpO1xuICBTRVRfVkFSKCdzY29yZUxpbmUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtbGluZScpKTtcbiAgU0VUX1ZBUignbW9kYWxXaW5kb3cnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93JykpO1xuICBTRVRfVkFSKCdtb2RhbFdpbmRvd1RleHQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X190ZXh0JykpO1xuICBTRVRfVkFSKCdtb2RhbFdpbmRvd0ljb24nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X19pY29uJykpO1xuICBTRVRfVkFSKCdzdGF0aXN0aWNEYXRhJywgY3JlYXRlU3RhdGlzdGljc0RhdGEoZGF0YVNldCkpO1xuICBTRVRfVkFSKCdpc1BsYXlNb2RlJywgR0VUX1ZBUigndG9nZ2xlQnRuJykuYXJpYVByZXNzZWQpO1xufTtcblxuY29uc3QgcmVzZXRDYXJkc1N0YXRlID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWZyb250Jyk7XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKSk7XG59O1xuXG5jb25zdCBzaG93U3RhdFRhYmxlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLXBhZ2UnKTtcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBHRVRfVkFSKCdtYWluU2VjdGlvbicpO1xuICBjb25zdCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IG1haW5TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYXBwZWFyJyk7XG4gIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLXVwJyk7XG4gIG1haW5TZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhcicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuYWRkKCdzbGlkZS1kb3duJyk7XG59O1xuXG5jb25zdCBoaWRlU3RhdFRhYmxlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLXBhZ2UnKTtcbiAgaWYgKHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtZG93bicpKSB7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBHRVRfVkFSKCdtYWluU2VjdGlvbicpO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLWRvd24nKTtcbiAgICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuYWRkKCdzbGlkZS11cCcpO1xuICAgIG1haW5TZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FwcGVhcicpO1xuICAgIG1haW5TZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICB9XG59O1xuXG5jb25zdCByZXNldENhcmRzU291bmRzTGlzdCA9ICgpID0+IHtcbiAgY29uc3Qgc291bmRzTGlzdCA9IGNyZWF0ZU5ld1NvdW5kc0xpc3QoKTtcbiAgU0VUX1ZBUignc291bmRzTGlzdCcsIHNodWZmbGVBcnJheShzb3VuZHNMaXN0KSk7XG59O1xuXG5jb25zdCByZXNldFNjb3JlTGluZSA9ICgpID0+IHtcbiAgY29uc3Qgc2NvcmVMaW5lID0gR0VUX1ZBUignc2NvcmVMaW5lJyk7XG4gIHNjb3JlTGluZS5pbm5lckhUTUwgPSAnJztcbn07XG5cbmNvbnN0IHVwZGF0ZU1vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb25zdCBwbGF5TW9kZSA9IEdFVF9WQVIoJ2lzUGxheU1vZGUnKTtcbiAgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUoKTtcbiAgcmVzZXRDYXJkc1N0YXRlKCk7XG4gIHJlc2V0Q2FyZHNTb3VuZHNMaXN0KCk7XG4gIHJlc2V0U2NvcmVMaW5lKCk7XG4gIGlmIChwbGF5TW9kZSA9PT0gJ3RydWUnKSB7XG4gICAgY2FyZHNMaXN0LmRhdGFzZXQubW9kZSA9ICdwbGF5JztcbiAgfSBlbHNlIHtcbiAgICBjYXJkc0xpc3QuZGF0YXNldC5tb2RlID0gJ3RyYWluJztcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1RhYmxlSGVhZCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NUYWJsZUhlYWQgPSBjcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICBzdGF0aXN0aWNzVGFibGVIZWFkLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2hlYWQnKTtcbiAgY29uc3QgaGVhZGVyUm93ID0gY3JlYXRlRWxlbWVudCgndHInKTtcbiAgaGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2hlYWQtcm93Jyk7XG4gIGhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZS1yb3cnKTtcbiAgY29uc3QgaGVhZGVyUm93RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xuXG4gIGhlYWRlclJvd0RhdGEuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgaGVhZGVyUm93VGggPSBjcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGhlYWRlclJvd1RoLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2hlYWQtcm93X19jZWxsJyk7XG4gICAgaGVhZGVyUm93VGguY2xhc3NMaXN0LmFkZCgndGFibGUtY2VsbCcpO1xuICAgIGhlYWRlclJvd1RoLmRhdGFzZXQuY29sdW1uID0ga2V5O1xuICAgIGhlYWRlclJvd1RoLmRhdGFzZXQuc29ydCA9IChrZXkgPT09ICdDYXRlZ29yeScpIHx8IChrZXkgPT09ICdXb3JkJykgfHwgKGtleSA9PT0gJ1RyYW5zbGF0aW9uJykgPyAnYWxwaCcgOiAnbnVtJztcbiAgICBoZWFkZXJSb3dUaC50ZXh0Q29udGVudCA9IGtleTtcbiAgICBoZWFkZXJSb3cuYXBwZW5kKGhlYWRlclJvd1RoKTtcbiAgfSk7XG5cbiAgc3RhdGlzdGljc1RhYmxlSGVhZC5hcHBlbmQoaGVhZGVyUm93KTtcblxuICByZXR1cm4gc3RhdGlzdGljc1RhYmxlSGVhZDtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkgPSAoZGF0YSkgPT4ge1xuICAvLyBjcmVhdGUgc3RhdGlzdGljcyB0YWJsZSBib2R5XG4gIGNvbnN0IHN0YXRpc3RpY3NUYWJsZUJvZHkgPSBjcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICBzdGF0aXN0aWNzVGFibGVCb2R5LmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2JvZHknKTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCB0Qm9keVJvdyA9IGNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdEJvZHlSb3cuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9fYm9keS1yb3cnKTtcbiAgICB0Qm9keVJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZS1yb3cnKTtcbiAgICBjb25zdCB0Qm9keVJvd0RhdGEgPSBPYmplY3QudmFsdWVzKGl0ZW0pO1xuICAgIGNvbnN0IHJvd0NhdGVnb3J5ID0gT2JqZWN0LnZhbHVlcyhpdGVtKVswXTtcbiAgICBjb25zdCByb3dXb3JkID0gT2JqZWN0LnZhbHVlcyhpdGVtKVsxXTtcbiAgICBjb25zdCBoZWFkZXJSb3dEYXRhID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG4gICAgdEJvZHlSb3cuZGF0YXNldC5yb3cgPSByb3dXb3JkO1xuXG4gICAgdEJvZHlSb3dEYXRhLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdEJvZHlSb3dDZWxsID0gY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRCb2R5Um93Q2VsbC5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19ib2R5LXJvd19fY2VsbCcpO1xuICAgICAgdEJvZHlSb3dDZWxsLmNsYXNzTGlzdC5hZGQoJ3RhYmxlLWNlbGwnKTtcbiAgICAgIHRCb2R5Um93Q2VsbC5kYXRhc2V0LmNhdGVnb3J5ID0gcm93Q2F0ZWdvcnk7XG4gICAgICB0Qm9keVJvd0NlbGwuZGF0YXNldC5jZWxsID0gaGVhZGVyUm93RGF0YVtpbmRleF07XG4gICAgICB0Qm9keVJvd0NlbGwudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIHRCb2R5Um93LmFwcGVuZCh0Qm9keVJvd0NlbGwpO1xuICAgIH0pO1xuXG4gICAgc3RhdGlzdGljc1RhYmxlQm9keS5hcHBlbmQodEJvZHlSb3cpO1xuICB9KTtcblxuICByZXR1cm4gc3RhdGlzdGljc1RhYmxlQm9keTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSA9IChkYXRhKSA9PiB7XG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlXG4gIGNvbnN0IHN0YXRpc3RpY3NUYWJsZSA9IGNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHN0YXRpc3RpY3NUYWJsZS5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlJyk7XG5cbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGUgaGVhZFxuICBjb25zdCBzdGF0aXN0aWNzVGFibGVIZWFkID0gY3JlYXRlU3RhdGlzdGljc1RhYmxlSGVhZChkYXRhKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyB0YWJsZSBib2R5XG4gIGNvbnN0IHN0YXRpc3RpY3NUYWJsZUJvZHkgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5KGRhdGEpO1xuXG4gIHN0YXRpc3RpY3NUYWJsZS5hcHBlbmQoc3RhdGlzdGljc1RhYmxlSGVhZCk7XG4gIHN0YXRpc3RpY3NUYWJsZS5hcHBlbmQoc3RhdGlzdGljc1RhYmxlQm9keSk7XG5cbiAgcmV0dXJuIHN0YXRpc3RpY3NUYWJsZTtcbn07XG5cbmNvbnN0IHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlJyk7XG4gIGNvbnN0IHN0YXRUYWJsZUhlYWRlciA9IHN0YXRUYWJsZS5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZV9faGVhZCcpO1xuICBjb25zdCBzdGF0VGFibGVIZWFkZXJDZWxscyA9IHN0YXRUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdC10YWJsZV9faGVhZC1yb3dfX2NlbGwnKTtcbiAgY29uc3Qgc3RhdGlzdGljc0RhdGEgPSBHRVRfVkFSKCdzdGF0aXN0aWNEYXRhJyk7XG5cbiAgc3RhdFRhYmxlSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHN0YXRUYWJsZUJvZHkgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGVfX2JvZHknKTtcbiAgICBjb25zdCBzb3J0VHlwZSA9IHRhcmdldC5kYXRhc2V0LnNvcnQ7XG4gICAgY29uc3Qgc29ydENhdGVnb3J5ID0gdGFyZ2V0LmRhdGFzZXQuY29sdW1uO1xuICAgIGNvbnN0IHNvcnRDYXRlZ29yeUNlbGxzID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNlbGw9JyR7c29ydENhdGVnb3J5fSddYCk7XG4gICAgY29uc3Qgc29ydENhdGVnb3J5Q2VsbHNWYWx1ZXMgPSBBcnJheS5mcm9tKHNvcnRDYXRlZ29yeUNlbGxzKS5tYXAoKGNlbGwpID0+IGNlbGwudGV4dENvbnRlbnQpO1xuICAgIGNvbnN0IGFyZUVtcHR5Q2VsbHMgPSBzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcy5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gJzAnIHx8IGl0ZW0gPT09ICduL2UnKTtcbiAgICBpZiAoYXJlRW1wdHlDZWxscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzY2VuZCcpKSB7XG4gICAgICBzdGF0VGFibGVIZWFkZXJDZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZCcpKTtcbiAgICAgIHN0YXRpc3RpY3NEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgbnVtMSA9IGFbW3NvcnRDYXRlZ29yeV1dID09PSAnbi9lJyA/IC0xIDogYVtzb3J0Q2F0ZWdvcnldO1xuICAgICAgICBjb25zdCBudW0yID0gYltbc29ydENhdGVnb3J5XV0gPT09ICduL2UnID8gLTEgOiBiW3NvcnRDYXRlZ29yeV07XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhc2NlbmQnKTtcbiAgICAgICAgaWYgKHNvcnRUeXBlID09PSAnYWxwaCcpIHtcbiAgICAgICAgICByZXR1cm4gbnVtMS5sb2NhbGVDb21wYXJlKG51bTIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW0yIC0gbnVtMTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0aXN0aWNzRGF0YS5yZXZlcnNlKCk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYXNjZW5kJyk7XG4gICAgfVxuICAgIHN0YXRUYWJsZUJvZHkucmVtb3ZlKCk7XG4gICAgc3RhdFRhYmxlLmFwcGVuZChjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5KHN0YXRpc3RpY3NEYXRhKSk7XG4gIH0pO1xufTtcblxuY29uc3QgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhID0gKG1vZGUsIGNhcmQsIHJlc3VsdCkgPT4ge1xuICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGlzdGljRGF0YScpO1xuICBjb25zdCBjdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWREYXRhKTtcbiAgY29uc3QgY2FyZEJhY2tUaXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtYmFja19fdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgbGV0IGN1cnJlbnRJdGVtID0gY3VycmVudERhdGFcbiAgICAuZmlsdGVyKChpdGVtKSA9PiAoaXRlbS5UcmFuc2xhdGlvbiA9PT0gY2FyZEJhY2tUaXRsZSkpWzBdO1xuICBpZiAobW9kZSA9PT0gJ3RyYWluJykge1xuICAgIGN1cnJlbnRJdGVtLlRyYWluZWQgKz0gMTtcbiAgfVxuICBpZiAocmVzdWx0KSB7XG4gICAgY3VycmVudEl0ZW0uQ29ycmVjdCArPSAxO1xuICAgIGN1cnJlbnRJdGVtWydBY2N1cmFjeSAlJ10gPSBwZXJjZW50Q29ycmVjdEFuc3dlcnMoY3VycmVudEl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNhcmRMaXN0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKSk7XG4gICAgY29uc3QgY3VycmVudFNvdW5kID0gR0VUX1ZBUignc291bmRzTGlzdCcpLmF0KC0xKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZCA9IGNhcmRMaXN0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmRhdGFzZXQuc291bmQgPT09IGN1cnJlbnRTb3VuZClbMF07XG4gICAgW2N1cnJlbnRJdGVtXSA9IGN1cnJlbnREYXRhXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiAoXG4gICAgICAgIGl0ZW0uVHJhbnNsYXRpb24gPT09IGN1cnJlbnRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJhY2tfX3RpdGxlJylcbiAgICAgICAgICAudGV4dENvbnRlbnQpKTtcbiAgICBjdXJyZW50SXRlbS5JbmNvcnJlY3QgKz0gMTtcbiAgICBjdXJyZW50SXRlbVsnQWNjdXJhY3kgJSddID0gcGVyY2VudENvcnJlY3RBbnN3ZXJzKGN1cnJlbnRJdGVtKTtcbiAgfVxuICBjb25zdCBjdXJyZW50RGF0YVRvSnNvbiA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnREYXRhKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRpc3RpY0RhdGEnLCBjdXJyZW50RGF0YVRvSnNvbik7XG59O1xuXG5jb25zdCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LmFkZCgnc3RhcnQtcGFnZScpO1xuICBjYXJkc0xpc3QuZGF0YXNldC5jYXRlZ29yeSA9ICdtYWluLW1lbnUnO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWN0aW9uICE9PSAnaG9tZScpIHtcbiAgICAgIGNvbnN0IGltZ1BhdGggPSBlbGVtZW50LnN0YXJ0SW1hZ2U7XG4gICAgICBjb25zdCBpbWdBbHQgPSBlbGVtZW50LnNlY3Rpb25Xb3Jkc1swXS5hbHQ7XG4gICAgICBjb25zdCBjYXJkVGl0bGUgPSBlbGVtZW50LnNlY3Rpb25UaXRsZTtcbiAgICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oaW1nUGF0aCwgaW1nQWx0LCBjYXJkVGl0bGUsIGNhcmRUaXRsZSk7XG4gICAgICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRJdGVtKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRGlmZldvcmRzU2VjdGlvbiA9IChhcnJheSwgc2VjdGlvbikgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY2FyZHNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LXBhZ2UnKTtcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gR0VUX1ZBUignY2F0ZWdvcnlOYW1lJyk7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XG4gIGNhcmRzTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gc2VjdGlvbjtcbiAgdXBkYXRlTW9kZSgpO1xuICBjbGVhckNhcmRzTGlzdENvbnRhaW5lcigpO1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaW1nUGF0aCA9IGl0ZW0uaW1hZ2U7XG4gICAgY29uc3QgaW1nQWx0ID0gaXRlbS5hbHQ7XG4gICAgY29uc3QgY2FyZFNlY3Rpb24gPSBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgY2FyZFRpdGxlID0gaXRlbS53b3JkO1xuICAgIGNvbnN0IGNhcmRUcmFuc2xhdGlvbiA9IGl0ZW0udHJhbnNsYXRpb247XG4gICAgY29uc3Qgc291bmRQYXRoID0gaXRlbS5hdWRpb1NyYztcbiAgICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUNhcmRJdGVtKFxuICAgICAgaW1nUGF0aCxcbiAgICAgIGltZ0FsdCxcbiAgICAgIGNhcmRUaXRsZSxcbiAgICAgIGNhcmRTZWN0aW9uLFxuICAgICAgY2FyZFRyYW5zbGF0aW9uLFxuICAgICAgc291bmRQYXRoLFxuICAgICk7XG4gICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkSXRlbSk7XG4gIH0pO1xuICByZXNldENhcmRzU291bmRzTGlzdCgpO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbiA9IChhcnJheSwgc2VjdGlvbikgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY2FyZHNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LXBhZ2UnKTtcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gR0VUX1ZBUignY2F0ZWdvcnlOYW1lJyk7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XG4gIGNhcmRzTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gc2VjdGlvbjtcbiAgdXBkYXRlTW9kZSgpO1xuICBjbGVhckNhcmRzTGlzdENvbnRhaW5lcigpO1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuc2VjdGlvblRpdGxlID09PSBzZWN0aW9uKSB7XG4gICAgICBjb25zdCBzZWN0aW9uRGF0YSA9IGVsZW1lbnQuc2VjdGlvbldvcmRzO1xuICAgICAgc2VjdGlvbkRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpbWdQYXRoID0gaXRlbS5pbWFnZTtcbiAgICAgICAgY29uc3QgaW1nQWx0ID0gaXRlbS5hbHQ7XG4gICAgICAgIGNvbnN0IGNhcmRTZWN0aW9uID0gY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBpdGVtLndvcmQ7XG4gICAgICAgIGNvbnN0IGNhcmRUcmFuc2xhdGlvbiA9IGl0ZW0udHJhbnNsYXRpb247XG4gICAgICAgIGNvbnN0IHNvdW5kUGF0aCA9IGl0ZW0uYXVkaW9TcmM7XG4gICAgICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oXG4gICAgICAgICAgaW1nUGF0aCxcbiAgICAgICAgICBpbWdBbHQsXG4gICAgICAgICAgY2FyZFRpdGxlLFxuICAgICAgICAgIGNhcmRTZWN0aW9uLFxuICAgICAgICAgIGNhcmRUcmFuc2xhdGlvbixcbiAgICAgICAgICBzb3VuZFBhdGgsXG4gICAgICAgICk7XG4gICAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmVzZXRDYXJkc1NvdW5kc0xpc3QoKTtcbn07XG5cbmNvbnN0IHBsYXlTb3VuZCA9IChlbGVtZW50LCBzb3VuZFBhdGgpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oc291bmRQYXRoKTtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGF1ZGlvLnBsYXkoKTtcbiAgaWYgKGVsZW1lbnQgPT09IHBsYXlSZXBlYXRCdG4pIHtcbiAgICBwbGF5UmVwZWF0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgcGxheVJlcGVhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYXJkc0xpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgY2FyZHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3Qgcm90YXRlQ2FyZCA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgfVxufTtcblxuY29uc3Qgcm90YXRlQmFjayA9IChlbGVtZW50KSA9PiB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICB9XG59O1xuXG5jb25zdCB0cmFpbk1vZGVGdW5jdGlvbmFsaXR5ID0gKHRhcmdldCwgY2FyZElubmVyKSA9PiB7XG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUtYnRuJykpIHtcbiAgICByb3RhdGVDYXJkKGNhcmRJbm5lcik7XG4gICAgY2FyZElubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICByb3RhdGVCYWNrKGNhcmRJbm5lcik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIWNhcmRJbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XG4gICAgY29uc3QgY3VycmVudENhcmQgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICAgIGNvbnN0IHNvdW5kUGF0aCA9IGN1cnJlbnRDYXJkLmRhdGFzZXQuc291bmQ7XG4gICAgY29uc3QgY2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG4gICAgcGxheVNvdW5kKGNhcmQsIHNvdW5kUGF0aCk7XG4gICAgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhKCd0cmFpbicsIGN1cnJlbnRDYXJkKTtcbiAgfVxufTtcblxuY29uc3QgYWRkU2NvcmVJY29uID0gKGNhcmQsIHNyYykgPT4ge1xuICBpZiAoIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5aW5nJykpIHtcbiAgICBjb25zdCBzY29yZUljb24gPSBjcmVhdGVTY29yZUxpbmVJY29uKHNyYyk7XG4gICAgY29uc3Qgc2NvcmVMaW5lID0gR0VUX1ZBUignc2NvcmVMaW5lJyk7XG4gICAgc2NvcmVMaW5lLnByZXBlbmQoc2NvcmVJY29uKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgc2V0R2xvYmFsVmFsdWVzLCBjYXBpdGFsaXplRmlyc3RXb3JkLFxuICBjbGVhckNhcmRzTGlzdENvbnRhaW5lciwgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCxcbiAgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbiwgdXBkYXRlTW9kZSwgcGxheVNvdW5kLFxuICByb3RhdGVDYXJkLCByb3RhdGVCYWNrLCBpc01haW5NZW51LCBpc0NhcmQsIGlzVHJhaW5Nb2RlLFxuICBpc1BsYXlNb2RlLCB0cmFpbk1vZGVGdW5jdGlvbmFsaXR5LCBzaHVmZmxlQXJyYXksIHVwZGF0ZVNvdW5kTGlzdCxcbiAgaXNHYW1lU3RhcnRlZCwgYWRkU2NvcmVJY29uLCBpc0FjdGl2ZUNhcmQsIGlzR2FtZU92ZXIsIGlzR2FtZU92ZXJTdWNjZXNzLFxuICBjcmVhdGVTdGF0aXN0aWNzVGFibGUsIHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSwgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSxcbiAgY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keSwgc2hvd1N0YXRUYWJsZSwgaGlkZVN0YXRUYWJsZSwgY3JlYXRlRGlmZldvcmRzU2VjdGlvbixcbn07XG4iLCJjb25zdCBWQVJJQUJMRVMgPSB7XG4gIG1haW5TZWN0aW9uOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGNhdGVnb3J5TmFtZTogJ2luaXRpYWwgdmFsdWUnLFxuICBjYXJkc0xpc3Q6ICdpbml0aWFsIHZhbHVlJyxcbiAgc291bmRzTGlzdDogJ2luaXRpYWwgdmFsdWUnLFxuICBoYW1idXJnZXJCdG46ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTmF2OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhlYWRlck1lbnU6ICdpbml0aWFsIHZhbHVlJyxcbiAgbmF2TWVudUxpbmtzOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhlYWRlckxvZ286ICdpbml0aWFsIHZhbHVlJyxcbiAgb3ZlcmxheTogJ2luaXRpYWwgdmFsdWUnLFxuICBib2R5OiAnaW5pdGlhbCB2YWx1ZScsXG4gIHRvZ2dsZUJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBpc1BsYXlNb2RlOiAnaW5pdGlhbCB2YWx1ZScsXG4gIHBsYXlSZXBlYXRCdG46ICdpbml0aWFsIHZhbHVlJyxcbiAgc2NvcmVMaW5lOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93OiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93SWNvbjogJ2luaXRpYWwgdmFsdWUnLFxuICBtb2RhbFdpbmRvd1RleHQ6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3dJY29uV2luOiAnYXNzZXRzL2ltYWdlcy9zY29yZS1pY29ucy93aW4taWNvbi5wbmcnLFxuICBtb2RhbFdpbmRvd0ljb25Mb3NlOiAnYXNzZXRzL2ltYWdlcy9zY29yZS1pY29ucy9sb3NlLWljb24ucG5nJyxcbiAgc3RhdGlzdGljRGF0YTogW10sXG4gIHJlcGVhdGVkRGF0YVNldDogJ2luaXRpYWwgdmFsdWUnLFxufTtcblxuY29uc3QgU0VUX1ZBUiA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFZBUklBQkxFUywgbmFtZSkpIHtcbiAgICBWQVJJQUJMRVNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufTtcblxuY29uc3QgR0VUX1ZBUiA9IChuYW1lKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoVkFSSUFCTEVTLCBuYW1lKSkge1xuICAgIHJldHVybiBWQVJJQUJMRVNbbmFtZV07XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHsgU0VUX1ZBUiwgR0VUX1ZBUiB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgW3tzZWN0aW9uOidob21lJyxjYXRlZ29yeTonbWFpbi1tZW51J30se3NlY3Rpb246J2Nsb3RoZXMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXN3ZWF0ZXIucG5nJyxsaW5rUGF0aDonI2Nsb3RoZXMnLHNlY3Rpb25UaXRsZTonQ2xvdGhlcycsc2VjdGlvbldvcmRzOlt7d29yZDonY2FwJyx0cmFuc2xhdGlvbjon0YjQsNC/0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLWNhcC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9jYXAubXAzJyxhbHQ6J2NhcCBpbWFnZSd9LHt3b3JkOidqYWNrZXQnLHRyYW5zbGF0aW9uOifQutGD0YDRgtC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1qYWNrZXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvamFja2V0Lm1wMycsYWx0OidqYWNrZXQgaW1hZ2UnfSx7d29yZDonc2NhcmYnLHRyYW5zbGF0aW9uOifRiNCw0YDRhCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLXNjYXJmLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3NjYXJmLm1wMycsYWx0OidzY2FyZiBpbWFnZSd9LHt3b3JkOidzaG9lcycsdHJhbnNsYXRpb246J9Cx0L7RgtC40L3QutC4JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2Etc2hvZXMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2hvZXMubXAzJyxhbHQ6J3Nob2VzIGltYWdlJ30se3dvcmQ6J2Jsb3VzZScsdHJhbnNsYXRpb246J9Cx0LvRg9C30LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LWJsb3VzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9ibG91c2UubXAzJyxhbHQ6J2Jsb3VzZSBpbWFnZSd9LHt3b3JkOidjb2F0Jyx0cmFuc2xhdGlvbjon0L/QsNC70YzRgtC+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtY29hdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9jb2F0Lm1wMycsYWx0Oidjb2F0IGltYWdlJ30se3dvcmQ6J2RyZXNzJyx0cmFuc2xhdGlvbjon0L/Qu9Cw0YLRjNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtZHJlc3MucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvZHJlc3MubXAzJyxhbHQ6J2RyZXNzIGltYWdlJ30se3dvcmQ6J3NoaXJ0Jyx0cmFuc2xhdGlvbjon0YDRg9Cx0LDRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1zaGlydC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zaGlydC5tcDMnLGFsdDonc2hpcnQgaW1hZ2UnfV19LHtzZWN0aW9uOidjb2xvdXJzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi15ZWxsb3cucG5nJyxsaW5rUGF0aDonI2NvbG91cnMnLHNlY3Rpb25UaXRsZTonQ29sb3Vycycsc2VjdGlvbldvcmRzOlt7d29yZDonYmxhY2snLHRyYW5zbGF0aW9uOifRh9C10YDQvdGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibGFjay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ibGFjay5tcDMnLGFsdDonYmxhY2sgaW1hZ2UnfSx7d29yZDonYmx1ZScsdHJhbnNsYXRpb246J9GB0LjQvdC40LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibHVlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2JsdWUubXAzJyxhbHQ6J2JsdWUgaW1hZ2UnfSx7d29yZDonYnJvd24nLHRyYW5zbGF0aW9uOifQutC+0YDQuNGH0L3QtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJyb3duLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2Jyb3duLm1wMycsYWx0Oidicm93biBpbWFnZSd9LHt3b3JkOidncmVlbicsdHJhbnNsYXRpb246J9C30LXQu9GR0L3Ri9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JlZW4ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvZ3JlZW4ubXAzJyxhbHQ6J2dyZWVuIGltYWdlJ30se3dvcmQ6J2dyZXknLHRyYW5zbGF0aW9uOifRgdC10YDRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JleS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ncmV5Lm1wMycsYWx0OidncmV5IGltYWdlJ30se3dvcmQ6J29yYW5nZScsdHJhbnNsYXRpb246J9C+0YDQsNC90LbQtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LW9yYW5nZS1jLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL29yYW5nZS5tcDMnLGFsdDonb3JhbmdlIGltYWdlJ30se3dvcmQ6J3BpbmsnLHRyYW5zbGF0aW9uOifRgNC+0LfQvtCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXBpbmsucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvcGluay5tcDMnLGFsdDoncGluayBpbWFnZSd9LHt3b3JkOidyZWQnLHRyYW5zbGF0aW9uOifQutGA0LDRgdC90YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXJlZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9yZWQubXAzJyxhbHQ6J3JlZCBpbWFnZSd9XX0se3NlY3Rpb246J2ZhbWlseScsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtZmFtaWx5LnBuZycsbGlua1BhdGg6JyNmYW1pbHknLHNlY3Rpb25UaXRsZTonRmFtaWx5JyxzZWN0aW9uV29yZHM6W3t3b3JkOidhdW50Jyx0cmFuc2xhdGlvbjon0YLQtdGC0Y8nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWF1bnQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9hdW50Lm1wMycsYWx0OidhdW50IGltYWdlJ30se3dvcmQ6J2Jyb3RoZXInLHRyYW5zbGF0aW9uOifQsdGA0LDRgicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtYnJvdGhlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2Jyb3RoZXIubXAzJyxhbHQ6J2Jyb3RoZXIgaW1hZ2UnfSx7d29yZDonZGFkZHknLHRyYW5zbGF0aW9uOifQv9Cw0L/QsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtZGFkZHkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9kYWRkeS5tcDMnLGFsdDonZGFkZHkgaW1hZ2UnfSx7d29yZDonZ3JhbmRtYScsdHJhbnNsYXRpb246J9Cx0LDQsdGD0YjQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1ncmFuZG1hLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvZ3JhbmRtYS5tcDMnLGFsdDonZ3JhbmRtYSBpbWFnZSd9LHt3b3JkOidncmFuZHBhJyx0cmFuc2xhdGlvbjon0LTQtdC00YPRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWdyYW5kcGEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9ncmFuZHBhLm1wMycsYWx0OidncmFuZHBhIGltYWdlJ30se3dvcmQ6J211bW15Jyx0cmFuc2xhdGlvbjon0LzQsNC80LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LW11bW15LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvbXVtbXkubXAzJyxhbHQ6J211bW15IGltYWdlJ30se3dvcmQ6J3Npc3RlcicsdHJhbnNsYXRpb246J9GB0LXRgdGC0YDQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3Ytc2lzdGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvc2lzdGVyLm1wMycsYWx0OidzaXN0ZXIgaW1hZ2UnfSx7d29yZDondW5jbGUnLHRyYW5zbGF0aW9uOifQtNGP0LTRjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtdW5jbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS91bmNsZS5tcDMnLGFsdDondW5jbGUgaW1hZ2UnfV19LHtzZWN0aW9uOidmb29kJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvYS1oYW1idXJnZXIucG5nJyxsaW5rUGF0aDonI2Zvb2QnLHNlY3Rpb25UaXRsZTonRm9vZCcsc2VjdGlvbldvcmRzOlt7d29yZDonZWdnJyx0cmFuc2xhdGlvbjon0Y/QudGG0L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2QvYS1lZ2cucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvZWdnLm1wMycsYWx0OidlZ2cgaW1hZ2UnfSx7d29yZDonaWNlIGNyZWFtJyx0cmFuc2xhdGlvbjon0LzQvtGA0L7QttC10L3QvtC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL2EtaWNlY3JlYW0ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvaWNlLWNyZWFtLm1wMycsYWx0OidpY2UgY3JlYW0gaW1hZ2UnfSx7d29yZDonYnJlYWQnLHRyYW5zbGF0aW9uOifRhdC70LXQsScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWJyZWFkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2JyZWFkLm1wMycsYWx0OidicmVhZCBpbWFnZSd9LHt3b3JkOididXR0ZXInLHRyYW5zbGF0aW9uOifQvNCw0YHQu9C+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtYnV0dGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2J1dHRlci5tcDMnLGFsdDonYnV0dGVyIGltYWdlJ30se3dvcmQ6J2Nha2UnLHRyYW5zbGF0aW9uOifQv9C40YDQvtC20L3QvtC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtY2FrZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9jYWtlLm1wMycsYWx0OidjYWtlIGltYWdlJ30se3dvcmQ6J2NoZWVzZScsdHJhbnNsYXRpb246J9GB0YvRgCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWNoZWVzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9jaGVlc2UubXAzJyxhbHQ6J2NoZWVzZSBpbWFnZSd9LHt3b3JkOidwaXp6YScsdHJhbnNsYXRpb246J9C/0LjRhtGG0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1waXp6YS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9waXp6YS5tcDMnLGFsdDoncGl6emEgaW1hZ2UnfSx7d29yZDonc2FuZHdpY2gnLHRyYW5zbGF0aW9uOifQsdGD0YLQtdGA0LHRgNC+0LQnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1zYW5kd2ljaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9zYW5kd2ljaC5tcDMnLGFsdDonc2FuZHdpY2ggaW1hZ2UnfV19LHtzZWN0aW9uOidmcnVpdHMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXN0cmF3YmVycnkucG5nJyxsaW5rUGF0aDonI2ZydWl0cycsc2VjdGlvblRpdGxlOidGcnVpdHMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2FwcGxlJyx0cmFuc2xhdGlvbjon0Y/QsdC70L7QutC+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1hcHBsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2FwcGxlLm1wMycsYWx0OidhcHBsZSBpbWFnZSd9LHt3b3JkOidjaGVycnknLHRyYW5zbGF0aW9uOifQstC40YjQvdGPJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1jaGVycnkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9jaGVycnkubXAzJyxhbHQ6J2NoZXJyeSBpbWFnZSd9LHt3b3JkOidncmFwZScsdHJhbnNsYXRpb246J9GE0LjQs9GD0YDQvdC+0LUg0LrQsNGC0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLWdyYXBlcy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2dyYXBlLm1wMycsYWx0OidncmFwZSBpbWFnZSd9LHt3b3JkOidvcmFuZ2UnLHRyYW5zbGF0aW9uOifQsNC/0LXQu9GM0YHQuNC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1vcmFuZ2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9vcmFuZ2UubXAzJyxhbHQ6J29yYW5nZSBpbWFnZSd9LHt3b3JkOidwZWFjaCcsdHJhbnNsYXRpb246J9C/0LXRgNGB0LjQuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtcGVhY2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9wZWFjaC5tcDMnLGFsdDoncGVhY2ggaW1hZ2UnfSx7d29yZDoncGluZWFwcGxlJyx0cmFuc2xhdGlvbjon0LDQvdCw0L3QsNGBJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1waW5lYXBwbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9waW5lYXBwbGUubXAzJyxhbHQ6J3BpbmVhcHBsZSBpbWFnZSd9LHt3b3JkOidiYW5hbmEnLHRyYW5zbGF0aW9uOifQsdCw0L3QsNC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvdi1iYW5hbmEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9iYW5hbmEubXAzJyxhbHQ6J2JhbmFuYSBpbWFnZSd9LHt3b3JkOidsZW1vbicsdHJhbnNsYXRpb246J9C70LjQvNC+0L0nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy92LWxlbW9uLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvbGVtb24ubXAzJyxhbHQ6J2xlbW9uIGltYWdlJ31dfSx7c2VjdGlvbjoncGV0cycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtcG9ueS5wbmcnLGxpbmtQYXRoOicjcGV0cycsc2VjdGlvblRpdGxlOidQZXRzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidoYW1zdGVyJyx0cmFuc2xhdGlvbjon0YXQvtC80Y/QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLWhhbXN0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvaGFtc3Rlci5tcDMnLGFsdDonaGFtc3RlciBpbWFnZSd9LHt3b3JkOidwYXJyb3QnLHRyYW5zbGF0aW9uOifQv9C+0L/Rg9Cz0LDQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLXBhcnJvdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9wYXJyb3QubXAzJyxhbHQ6J3BhcnJvdCBpbWFnZSd9LHt3b3JkOid0dXJ0bGUnLHRyYW5zbGF0aW9uOifRh9C10YDQtdC/0LDRhdCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2EtdHVydGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3R1cnRsZS5tcDMnLGFsdDondHVydGxlIGltYWdlJ30se3dvcmQ6J2tpdHRlbicsdHJhbnNsYXRpb246J9C60L7RgtGR0L3QvtC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2gta2l0dGVuLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2tpdHRlbi5tcDMnLGFsdDona2l0dGVuIGltYWdlJ30se3dvcmQ6J3B1cHB5Jyx0cmFuc2xhdGlvbjon0YnQtdC90L7QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9oLXB1cHB5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3B1cHB5Lm1wMycsYWx0OidwdXBweSBpbWFnZSd9LHt3b3JkOidmZXJyZXQnLHRyYW5zbGF0aW9uOifRhdC+0YDQtdC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtZmVycmV0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2ZlcnJldC5tcDMnLGFsdDonZmVycmV0IGltYWdlJ30se3dvcmQ6J2Zpc2gnLHRyYW5zbGF0aW9uOifRgNGL0LHQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LWZpc2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvZmlzaC5tcDMnLGFsdDonZmlzaCBpbWFnZSd9LHt3b3JkOidtb3VzZScsdHJhbnNsYXRpb246J9C80YvRiNGMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtbW91c2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvbW91c2UubXAzJyxhbHQ6J21vdXNlIGltYWdlJ31dfSx7c2VjdGlvbjonc2Nob29sJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1wdXBpbC5wbmcnLGxpbmtQYXRoOicjc2Nob29sJyxzZWN0aW9uVGl0bGU6J1NjaG9vbCcsc2VjdGlvbldvcmRzOlt7d29yZDonYm9hcmQnLHRyYW5zbGF0aW9uOifQtNC+0YHQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ib2FyZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2JvYXJkLm1wMycsYWx0Oidib2FyZCBpbWFnZSd9LHt3b3JkOidib29rJyx0cmFuc2xhdGlvbjon0LrQvdC40LPQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtYm9vay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2Jvb2subXAzJyxhbHQ6J2Jvb2sgaW1hZ2UnfSx7d29yZDonY2FsY3VsYXRvcicsdHJhbnNsYXRpb246J9GH0LXRgNC10L/QsNGF0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWNhbGN1bGF0b3IucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9jYWxjdWxhdG9yLm1wMycsYWx0OidjYWxjdWxhdG9yIGltYWdlJ30se3dvcmQ6J2NsYXNzcm9vbScsdHJhbnNsYXRpb246J9GI0LrQvtC70YzQvdGL0Lkg0LrQu9Cw0YHRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtY2xhc3Nyb29tLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvY2xhc3Nyb29tLm1wMycsYWx0OidjbGFzc3Jvb20gaW1hZ2UnfSx7d29yZDonbWFwJyx0cmFuc2xhdGlvbjon0LrQsNGA0YLQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtbWFwLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvbWFwLm1wMycsYWx0OidtYXAgaW1hZ2UnfSx7d29yZDonbm90ZWJvb2snLHRyYW5zbGF0aW9uOifRgtC10YLRgNCw0LTRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytbm90ZWJvb2sucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ub3RlYm9vay5tcDMnLGFsdDonbm90ZWJvb2sgaW1hZ2UnfSx7d29yZDonc2Nob29sYmFnJyx0cmFuc2xhdGlvbjon0L/QvtGA0YLRhNC10LvRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytc2Nob29sYmFnLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvc2Nob29sYmFnLm1wMycsYWx0OidzY2hvb2xiYWcgaW1hZ2UnfSx7d29yZDondGVhY2hlcicsdHJhbnNsYXRpb246J9GD0YfQuNGC0LXQu9GMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi10ZWFjaGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvdGVhY2hlci5tcDMnLGFsdDondGVhY2hlciBpbWFnZSd9XX0se3NlY3Rpb246J3Nwb3J0JyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi10ZW5uaXMucG5nJyxsaW5rUGF0aDonI3Nwb3J0JyxzZWN0aW9uVGl0bGU6J1Nwb3J0JyxzZWN0aW9uV29yZHM6W3t3b3JkOidiYXNrZXRiYWxsJyx0cmFuc2xhdGlvbjon0LHQsNGB0LrQtdGC0LHQvtC7JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWJhc2tldGJhbGwucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2Jhc2tldGJhbGwubXAzJyxhbHQ6J2Jhc2tldGJhbGwgaW1hZ2UnfSx7d29yZDonY3ljbGluZycsdHJhbnNsYXRpb246J9C10LfQtNCwINC90LAg0LLQtdC70L7RgdC40L/QtdC00LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtY3ljbGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvY3ljbGluZy5tcDMnLGFsdDonY3ljbGluZyBpbWFnZSd9LHt3b3JkOidmaWd1cmUgc2thdGluZycsdHJhbnNsYXRpb246J9GE0LjQs9GD0YDQvdC+0LUg0LrQsNGC0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtZmlndXJlLXNrYXRpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2ZpZ3VyZS1za2F0aW5nLm1wMycsYWx0OidmaWd1cmUgc2thdGluZyBpbWFnZSd9LHt3b3JkOidmb290YmFsbCcsdHJhbnNsYXRpb246J9GE0YPRgtCx0L7QuycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1mb290YmFsbC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvZm9vdGJhbGwubXAzJyxhbHQ6J2Zvb3RiYWxsIGltYWdlJ30se3dvcmQ6J2hvY2tleScsdHJhbnNsYXRpb246J9GF0L7QutC60LXQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1ob2NrZXkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2hvY2tleS5tcDMnLGFsdDonaG9ja2V5IGltYWdlJ30se3dvcmQ6J3NraWluZycsdHJhbnNsYXRpb246J9C70YvQttC90YvQuSDRgdC/0L7RgNGCJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LXNraWluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvc2tpaW5nLm1wMycsYWx0Oidza2lpbmcgaW1hZ2UnfSx7d29yZDonc3dpbW1pbmcnLHRyYW5zbGF0aW9uOifQv9C70LDQstCw0L3QuNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LXN3aW1taW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9zd2ltbWluZy5tcDMnLGFsdDonc3dpbW1pbmcgaW1hZ2UnfSx7d29yZDonYm94aW5nJyx0cmFuc2xhdGlvbjon0LHQvtC60YEnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtYm94aW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9ib3hpbmcubXAzJyxhbHQ6J2JveGluZyBpbWFnZSd9XX1dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXkgfSBmcm9tICcuL2NvbXBvbmVudHMvb3ZlcmxheSc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlTWFpbiB9IGZyb20gJy4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdyB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbFdpbmRvdyc7XG5pbXBvcnQgeyBjcmVhdGVTdGF0aXN0aWNzUGFnZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZSc7XG5pbXBvcnQgc2V0RXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi91dGlscy9ldmVudHMnO1xuaW1wb3J0IHsgc2V0R2xvYmFsVmFsdWVzLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IH0gZnJvbSAnLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVPdmVybGF5KCkpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlSGVhZGVyKCkpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlTW9kYWxXaW5kb3coKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVNYWluKCkpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlRm9vdGVyKCkpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gR0VUX1ZBUignbWFpblNlY3Rpb24nKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NQYWdlKCkpO1xuICBzZXRFdmVudExpc3RlbmVycygpO1xufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUNhcmRJdGVtIiwiaW1nUGF0aCIsImltZ0FsdCIsImNhcmRUaXRsZSIsImNhcmRTZWN0aW9uIiwiY2FyZFRyYW5zbGF0aW9uIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic291bmRQYXRoIiwiY2FyZEl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwic2VjdGlvbiIsInNvdW5kIiwiY2FyZElubmVyIiwiY2FyZEZyb250IiwiY2FyZEZyb250SW1nQ29udGFpbmVyIiwiY2FyZEZyb250SW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kIiwiY2FyZEZyb250VGl0bGUiLCJ0ZXh0Q29udGVudCIsImNhcmRGcm9udFJvdGF0ZUJ0biIsInR5cGUiLCJjYXJkQmFjayIsImNhcmRCYWNrSW1nQ29udGFpbmVyIiwiY2FyZEJhY2tJbWciLCJjYXJkQmFja1RpdGxlIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyRWxlbWVudCIsInBhcmFncmFwaCIsInBhcmFncmFwaExpbmsiLCJ0YXJnZXQiLCJocmVmIiwiZm9vdGVyQ29udGFpbmVyIiwiZGF0YSIsImNyZWF0ZU5hdk1lbnUiLCJjcmVhdGVMb2dvIiwiY3JlYXRlVG9nZ2xlIiwiY3JlYXRlTmF2TWVudUJ0biIsImNyZWF0ZVN0YXRpc3RpY3NCdG4iLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyTG9nbyIsImhlYWRlckJ0bnNDb250YWluZXIiLCJ0b2dnbGVCdG4iLCJzdGF0QnRuIiwiaGVhZGVyTmF2IiwibmF2TWVudUJ0biIsIm5hdmlnYXRpb25NZW51IiwiaGVhZGVyQ29udGFpbmVyIiwiY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCIsImhpZGVTdGF0VGFibGUiLCJHRVRfVkFSIiwibG9nb1RleHQiLCJsb2dvSHJlZiIsImhlYWRlckxvZ29MaW5rIiwibG9nb0Z1bmN0aW9uYWxpdHkiLCJzZXRMb2dvRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVDYXJkc0xpc3RTZWN0aW9uIiwiaXNNYWluTWVudSIsImlzQ2FyZCIsImlzVHJhaW5Nb2RlIiwiaXNQbGF5TW9kZSIsInRyYWluTW9kZUZ1bmN0aW9uYWxpdHkiLCJpc0dhbWVTdGFydGVkIiwiaXNBY3RpdmVDYXJkIiwidXBkYXRlU291bmRMaXN0IiwiYWRkU2NvcmVJY29uIiwicGxheVNvdW5kIiwiaXNHYW1lT3ZlciIsImlzR2FtZU92ZXJTdWNjZXNzIiwidXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhIiwidXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUiLCJzaG93T3ZlcmxheSIsImNyZWF0ZVBsYXlSZXBlYXRCdG4iLCJwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSIsInNob3dNb2RhbFdpbmRvdyIsImhpZGVNb2RhbFdpbmRvdyIsImNyZWF0ZU1haW4iLCJtYWluRWxlbWVudCIsIm1haW5Db250YWluZXIiLCJzY29yZUxpbmUiLCJjYXRlZ29yeU5hbWUiLCJjYXJkTGlzdCIsImNhdGVnb3J5IiwibW9kZSIsInBsYXlSZXBlYXRCdG4iLCJtYWluTWVudUZ1bmN0aW9uYWxpdHkiLCJjbG9zZXN0IiwibWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IiwiZXZlbnQiLCJjYXJkc0xpc3QiLCJjdXJyZW50Q2FyZCIsImN1cnJlbnRDYXJkRnJvbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudENhcmRTb3VuZCIsImN1cnJlbnRTb3VuZCIsImF0IiwiY29ycmVjdEFuc3dlclNvdW5kIiwic3VjY2Vzc1NvdW5kIiwiY29ycmVjdEljb25TcmMiLCJ3cm9uZ0ljb25TcmMiLCJ3cm9uZ0Fuc3dlclNvdW5kIiwiZmFpbHVyZVNvdW5kIiwiY29udGFpbnMiLCJzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkiLCJoaWRlT3ZlcmxheSIsImNyZWF0ZU1vZGFsV2luZG93IiwibW9kYWxXaW5kb3ciLCJpY29uIiwidGV4dCIsImgzIiwibW9kYWxXaW5kb3dJY29uIiwibW9kYWxXaW5kb3dUZXh0IiwibW9kYWxXaW5kb3doU2NvcmUiLCJkb2N1bWVudCIsInNjb3JlTGluZUljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImFtb3VudE9mTWlzdGFrZXMiLCJBcnJheSIsImZyb20iLCJmaWx0ZXIiLCJpdGVtIiwiY29uY2F0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNyZWF0ZU5hdk1lbnVJdGVtIiwiZGF0YVNldCIsIm5hdk1lbnVVbCIsImkiLCJvcGVuTmF2TWVudSIsImhlYWRlck1lbnUiLCJuYXZNZW51TGlua3MiLCJmb3JFYWNoIiwibGluayIsInRhYkluZGV4IiwiY2xvc2VOYXZNZW51Iiwic2V0TmF2TWVudUFjdGl2ZVN0YXRlIiwibGlua3MiLCJsaW5rU2VjdGlvbiIsInJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSIsImhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5IiwiaGFtYnVyZ2VyQnRuIiwiY2xpY2siLCJzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciIsInNwYW4xIiwic3BhbjIiLCJzcGFuMyIsIm5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IiwiY2FwaXRhbGl6ZUZpcnN0V29yZCIsImxpbmtOYW1lIiwibGkiLCJjcmVhdGVPdmVybGF5Iiwib3ZlcmxheUVsZW1lbnQiLCJvdmVybGF5IiwiYm9keSIsIm92ZXJsYXlGdW5jdGlvbmFsaXR5IiwiYnV0dG9uIiwic291bmRzTGlzdCIsInJlc2V0UGxheVJlcGVhdEJ0blN0YXRlIiwic2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkiLCJjcmVhdGVTY29yZUxpbmVJY29uIiwic2NvcmVJY29uIiwiY3JlYXRlU3RhdGlzdGljc1RhYmxlIiwic2V0R2xvYmFsVmFsdWVzIiwic2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSIsInNob3dTdGF0VGFibGUiLCJTRVRfVkFSIiwic3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJzdGF0aXN0aWNzUGFnZSIsInN0YXRpc3RpY3NQYWdlQ29udGFpbmVyIiwic3RhdGlzdGljc1RhYmxlIiwic3RhdGlzdGljRGF0YSIsInNsaWNlIiwicmVwZWF0QnRuIiwic29ydCIsImEiLCJiIiwiZWxlbTEiLCJlbGVtMiIsInJlcGVhdGVkRGF0YSIsIm1hcCIsImVsZW0iLCJUcmFuc2xhdGlvbiIsInJlcGVhdGVkRGF0YVNldCIsInNlY3Rpb25Xb3JkcyIsImZsYXQiLCJpbmNsdWRlcyIsInRyYW5zbGF0aW9uIiwiZGlzYWJsZWQiLCJjcmVhdGVEaWZmV29yZHNTZWN0aW9uIiwiY3JlYXRlU3RhdGlzdGljc1BhZ2UiLCJzdGF0aXN0aWNzRGF0YSIsInN0YXRpc3RpY3NQYWdlQnV0dG9ucyIsInJlc2V0QnRuIiwic3RhdGlzdGljc1BhZ2VUYWJsZSIsInJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJyZXNldFN0YXRCdG4iLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHkiLCJyZXBlYXREaWZmV29yZHNCdG4iLCJ1cGRhdGVNb2RlIiwiYXJpYVByZXNzZWQiLCJ0b2dnbGVNb2RlVHJhaW4iLCJ0b2dnbGVNb2RlUGxheSIsInRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkiLCJzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJuYW1lIiwiZWxlbWVudCIsImNhcmQiLCJpY29uc0Ftb3VudCIsImNhcmRzQW1vdW50IiwiY2xlYXJDYXJkc0xpc3RDb250YWluZXIiLCJjb250YWluZXIiLCJpbm5lckhUTUwiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsInNodWZmbGVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIl9yZWYiLCJwb3AiLCJjcmVhdGVOZXdTb3VuZHNMaXN0IiwiY2FyZHMiLCJwdXNoIiwicGVyY2VudENvcnJlY3RBbnN3ZXJzIiwib2JqIiwicm91bmQiLCJDb3JyZWN0IiwiSW5jb3JyZWN0IiwiY3JlYXRlU3RhcnRpbmdTdGF0aXN0aWNEYXRhIiwicmVzdWx0IiwiQ2F0ZWdvcnkiLCJzZWN0aW9uVGl0bGUiLCJXb3JkIiwid29yZCIsIlRyYWluZWQiLCJjcmVhdGVTdGF0aXN0aWNzRGF0YSIsInNhdmVkRGF0YSIsImdldEl0ZW0iLCJzdGFydGluZ0RhdGEiLCJzdGFydGluZ0RhdGFUb0pzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImFwcGx5IiwiY3VycmVudERhdGEiLCJwYXJzZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicmVzZXRDYXJkc1N0YXRlIiwibWFpblNlY3Rpb24iLCJtYWluU2VjdGlvbkNvbnRhaW5lciIsInJlc2V0Q2FyZHNTb3VuZHNMaXN0IiwicmVzZXRTY29yZUxpbmUiLCJwbGF5TW9kZSIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQiLCJzdGF0aXN0aWNzVGFibGVIZWFkIiwiaGVhZGVyUm93IiwiaGVhZGVyUm93RGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoZWFkZXJSb3dUaCIsImNvbHVtbiIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkiLCJzdGF0aXN0aWNzVGFibGVCb2R5IiwidEJvZHlSb3ciLCJ0Qm9keVJvd0RhdGEiLCJ2YWx1ZXMiLCJyb3dDYXRlZ29yeSIsInJvd1dvcmQiLCJyb3ciLCJ2YWx1ZSIsImluZGV4IiwidEJvZHlSb3dDZWxsIiwiY2VsbCIsInN0YXRUYWJsZSIsInN0YXRUYWJsZUhlYWRlciIsInN0YXRUYWJsZUhlYWRlckNlbGxzIiwic3RhdFRhYmxlQm9keSIsInNvcnRUeXBlIiwic29ydENhdGVnb3J5Iiwic29ydENhdGVnb3J5Q2VsbHMiLCJzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcyIsImFyZUVtcHR5Q2VsbHMiLCJldmVyeSIsIm51bTEiLCJudW0yIiwibG9jYWxlQ29tcGFyZSIsInJldmVyc2UiLCJjdXJyZW50SXRlbSIsImNhcmRMaXN0SXRlbXMiLCJfY3VycmVudERhdGEkZmlsdGVyIiwiX2N1cnJlbnREYXRhJGZpbHRlcjIiLCJfc2xpY2VkVG9BcnJheSIsImN1cnJlbnREYXRhVG9Kc29uIiwic3RhcnRJbWFnZSIsImltYWdlIiwiYXVkaW9TcmMiLCJzZWN0aW9uRGF0YSIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdGF0ZUNhcmQiLCJyb3RhdGVCYWNrIiwicHJlcGVuZCIsIlZBUklBQkxFUyIsIm1vZGFsV2luZG93SWNvbldpbiIsIm1vZGFsV2luZG93SWNvbkxvc2UiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==