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

var createCardItemImg = function createCardItemImg(imgPath, imgAlt, imgClass) {
  var cardItemImg = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('img');
  cardItemImg.classList.add(imgClass);
  cardItemImg.classList.add('card-img');
  cardItemImg.src = imgPath;
  cardItemImg.alt = imgAlt;
  return cardItemImg;
};
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
  // const cardFrontImg = createElement('img');
  // cardFrontImg.classList.add('card-front__pic-img');
  // cardFrontImg.classList.add('card-img');
  // cardFrontImg.src = imgPath;
  // cardFrontImg.alt = imgAlt;

  var cardFrontImg = createCardItemImg(imgPath, imgAlt, 'card-front__pic-img');
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
  // const cardBackImg = createElement('img');
  // cardBackImg.classList.add('card-back__pic-img');
  // cardBackImg.classList.add('card-img');
  // cardBackImg.src = imgPath;
  // cardBackImg.alt = imgAlt;

  var cardBackImg = createCardItemImg(imgPath, imgAlt, 'card-back__pic-img');
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
    var amountOfMistakes = Array.from(scoreLineIcons).filter(function (item) {
      return item.src.indexOf('assets/images/score-icons/wrong.png') !== -1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9jYXJkSXRlbS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ28uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsV2luZG93LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51QnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9uYXZNZW51SXRlbS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc2NvcmVMaW5lSWNvbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RhdGlzdGljc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZUJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL3V0aWxzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2Fzc2V0cy9kYXRhL2RhdGEuanNvbiIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzYxNSIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVDYXJkSXRlbUltZyA9IChpbWdQYXRoLCBpbWdBbHQsIGltZ0NsYXNzKSA9PiB7XG4gIGNvbnN0IGNhcmRJdGVtSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNhcmRJdGVtSW1nLmNsYXNzTGlzdC5hZGQoaW1nQ2xhc3MpO1xuICBjYXJkSXRlbUltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICBjYXJkSXRlbUltZy5zcmMgPSBpbWdQYXRoO1xuICBjYXJkSXRlbUltZy5hbHQgPSBpbWdBbHQ7XG5cbiAgcmV0dXJuIGNhcmRJdGVtSW1nO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZEl0ZW0gPSAoaW1nUGF0aCwgaW1nQWx0LCBjYXJkVGl0bGUsIGNhcmRTZWN0aW9uLCBjYXJkVHJhbnNsYXRpb24gPSAnJywgc291bmRQYXRoID0gJycpID0+IHtcbiAgLy8gY3JlYXRlIGNhcmQgaXRlbVxuICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1saXN0X19pdGVtJyk7XG4gIGNhcmRJdGVtLmRhdGFzZXQuc2VjdGlvbiA9IGNhcmRTZWN0aW9uO1xuICBjYXJkSXRlbS5kYXRhc2V0LnNvdW5kID0gc291bmRQYXRoO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGlubmVyXG4gIGNvbnN0IGNhcmRJbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkSW5uZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbm5lcicpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHNpZGVcbiAgY29uc3QgY2FyZEZyb250ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRGcm9udC5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250Jyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgaW1hZ2UgY29udGFpbmVyXG4gIGNvbnN0IGNhcmRGcm9udEltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkRnJvbnRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fcGljJyk7XG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IGltYWdlXG4gIC8vIGNvbnN0IGNhcmRGcm9udEltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAvLyBjYXJkRnJvbnRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fcGljLWltZycpO1xuICAvLyBjYXJkRnJvbnRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgLy8gY2FyZEZyb250SW1nLnNyYyA9IGltZ1BhdGg7XG4gIC8vIGNhcmRGcm9udEltZy5hbHQgPSBpbWdBbHQ7XG5cbiAgY29uc3QgY2FyZEZyb250SW1nID0gY3JlYXRlQ2FyZEl0ZW1JbWcoaW1nUGF0aCwgaW1nQWx0LCAnY2FyZC1mcm9udF9fcGljLWltZycpO1xuXG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5hcHBlbmQoY2FyZEZyb250SW1nKTtcbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRJbWdDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHRpdGxlXG4gIGNvbnN0IGNhcmRGcm9udFRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY2FyZEZyb250VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fdGl0bGUnKTtcbiAgY2FyZEZyb250VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICBjYXJkRnJvbnRUaXRsZS50ZXh0Q29udGVudCA9IGNhcmRUaXRsZTtcbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRUaXRsZSk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgcm90YXRlIGJ1dHRvblxuICBjb25zdCBjYXJkRnJvbnRSb3RhdGVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FyZEZyb250Um90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnRfX3JvdGF0ZScpO1xuICBjYXJkRnJvbnRSb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgncm90YXRlLWJ0bicpO1xuICBjYXJkRnJvbnRSb3RhdGVCdG4udHlwZSA9ICdidXR0b24nO1xuICBjYXJkRnJvbnRSb3RhdGVCdG4udGV4dENvbnRlbnQgPSAncm90YXRlIGJ1dHRvbic7XG5cbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRSb3RhdGVCdG4pO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgc2lkZVxuICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIGltYWdlIGNvbnRhaW5lclxuICBjb25zdCBjYXJkQmFja0ltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2tfX3BpYycpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgaW1hZ2VcbiAgLy8gY29uc3QgY2FyZEJhY2tJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgLy8gY2FyZEJhY2tJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrX19waWMtaW1nJyk7XG4gIC8vIGNhcmRCYWNrSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gIC8vIGNhcmRCYWNrSW1nLnNyYyA9IGltZ1BhdGg7XG4gIC8vIGNhcmRCYWNrSW1nLmFsdCA9IGltZ0FsdDtcblxuICBjb25zdCBjYXJkQmFja0ltZyA9IGNyZWF0ZUNhcmRJdGVtSW1nKGltZ1BhdGgsIGltZ0FsdCwgJ2NhcmQtYmFja19fcGljLWltZycpO1xuXG4gIGNhcmRCYWNrSW1nQ29udGFpbmVyLmFwcGVuZChjYXJkQmFja0ltZyk7XG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrSW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIHRpdGxlXG4gIGNvbnN0IGNhcmRCYWNrVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICBjYXJkQmFja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFja19fdGl0bGUnKTtcbiAgY2FyZEJhY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gIGNhcmRCYWNrVGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVHJhbnNsYXRpb247XG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrVGl0bGUpO1xuXG4gIGNhcmRJbm5lci5hcHBlbmQoY2FyZEZyb250KTtcbiAgY2FyZElubmVyLmFwcGVuZChjYXJkQmFjayk7XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRJbm5lcik7XG4gIHJldHVybiBjYXJkSXRlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRJdGVtO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIGZvb3RlclxuICBjb25zdCBmb290ZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgLy8gY3JlYXRlIGZvb3RlciBwYXJhZ3JhcGhcbiAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgJztcblxuICAvLyBjcmVhdGUgZm9vdGVyIHBhcmFncmFwaCBsaW5rXG4gIGNvbnN0IHBhcmFncmFwaExpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIHBhcmFncmFwaExpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHRfX2xpbmsnKTtcbiAgcGFyYWdyYXBoTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgcGFyYWdyYXBoTGluay50ZXh0Q29udGVudCA9ICdBbnRvbiBTdWtoYWRvbGV0cyc7XG4gIHBhcmFncmFwaExpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vU3Vob2RvbGVjQSc7XG5cbiAgcGFyYWdyYXBoLmFwcGVuZChwYXJhZ3JhcGhMaW5rKTtcblxuICAvLyBjcmVhdGUgZm9vdGVyIGNvbnRhaW5lclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmQocGFyYWdyYXBoKTtcblxuICBmb290ZXJFbGVtZW50LmFwcGVuZChmb290ZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBmb290ZXJFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xuIiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgY3JlYXRlTmF2TWVudSB9IGZyb20gJy4vbmF2TWVudSc7XG5pbXBvcnQgeyBjcmVhdGVMb2dvIH0gZnJvbSAnLi9sb2dvJztcbmltcG9ydCB7IGNyZWF0ZVRvZ2dsZSB9IGZyb20gJy4vdG9nZ2xlQnRuJztcbmltcG9ydCB7IGNyZWF0ZU5hdk1lbnVCdG4gfSBmcm9tICcuL25hdk1lbnVCdG4nO1xuaW1wb3J0IHsgY3JlYXRlU3RhdGlzdGljc0J0biB9IGZyb20gJy4vc3RhdGlzdGljc0J0bic7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgbG9nb1xuICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlTG9nbygnRW5nbGlzaCBmb3Iga2lkcycsICcjaG9tZScpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgYnV0dG9ucyBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQnRuc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJCdG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlVG9nZ2xlKCk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBzdGF0aXN0aWNzIGJ1dHRvblxuICBjb25zdCBzdGF0QnRuID0gY3JlYXRlU3RhdGlzdGljc0J0bigpO1xuXG4gIGhlYWRlckJ0bnNDb250YWluZXIuYXBwZW5kKHRvZ2dsZUJ0bik7XG4gIGhlYWRlckJ0bnNDb250YWluZXIuYXBwZW5kKHN0YXRCdG4pO1xuXG4gIC8vIGNyZWF0ZSBuYXZcbiAgY29uc3QgaGVhZGVyTmF2ID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGhlYWRlck5hdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbmF2Jyk7XG5cbiAgLy8gY3JlYXRlIG5hdiBtZW51IGJ1dHRvblxuICBjb25zdCBuYXZNZW51QnRuID0gY3JlYXRlTmF2TWVudUJ0bigpO1xuXG4gIC8vIGNyZWF0ZSBuYXYgbWVudVxuICBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IGNyZWF0ZU5hdk1lbnUoZGF0YSk7XG5cbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZNZW51QnRuKTtcbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZpZ2F0aW9uTWVudSk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlck5hdik7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTG9nbyk7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyQnRuc0NvbnRhaW5lcik7XG4gIGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LCBoaWRlU3RhdFRhYmxlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlTG9nbyA9IChsb2dvVGV4dCwgbG9nb0hyZWYpID0+IHtcbiAgLy8gY3JlYXRlIGxvZ29cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcblxuICBjb25zdCBoZWFkZXJMb2dvTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaGVhZGVyTG9nb0xpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ29fX2xpbmsnKTtcbiAgaGVhZGVyTG9nb0xpbmsudGV4dENvbnRlbnQgPSBsb2dvVGV4dDtcbiAgaGVhZGVyTG9nb0xpbmsuaHJlZiA9IGxvZ29IcmVmO1xuXG4gIGhlYWRlckxvZ28uYXBwZW5kKGhlYWRlckxvZ29MaW5rKTtcblxuICByZXR1cm4gaGVhZGVyTG9nbztcbn07XG5cbmNvbnN0IGxvZ29GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBoaWRlU3RhdFRhYmxlKCk7XG4gIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG59O1xuXG5jb25zdCBzZXRMb2dvRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyTG9nbyA9IEdFVF9WQVIoJ2hlYWRlckxvZ28nKTtcbiAgaGVhZGVyTG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ29GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxvZ28sIHNldExvZ29FdmVudExpc3RlbmVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24sIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIGlzR2FtZVN0YXJ0ZWQsXG4gIGlzQWN0aXZlQ2FyZCwgdXBkYXRlU291bmRMaXN0LCBhZGRTY29yZUljb24sIHBsYXlTb3VuZCwgaXNHYW1lT3ZlcixcbiAgaXNHYW1lT3ZlclN1Y2Nlc3MsIHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSxcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlIH0gZnJvbSAnLi9uYXZNZW51JztcbmltcG9ydCB7IHNob3dPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7IGNyZWF0ZVBsYXlSZXBlYXRCdG4sIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCB7IHNob3dNb2RhbFdpbmRvdywgaGlkZU1vZGFsV2luZG93IH0gZnJvbSAnLi9tb2RhbFdpbmRvdyc7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBtYWluIGVsZW1lbnRcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAvLyBjcmVhdGUgbWFpbiBjb250YWluZXJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIC8vIGNyZWF0ZSBzY29yZSBsaW5lXG4gIGNvbnN0IHNjb3JlTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY29yZUxpbmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUtbGluZScpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKHNjb3JlTGluZSk7XG5cbiAgLy8gY3JlYXRlIGNhdGVnb3J5IG5hbWVcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY2F0ZWdvcnlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LW5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gJyc7XG5cbiAgLy8gY2FyZHMgbGlzdFxuICBjb25zdCBjYXJkTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNhcmRMaXN0LmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWxpc3QnKTtcbiAgY2FyZExpc3QuZGF0YXNldC5jYXRlZ29yeSA9ICcnO1xuICBjYXJkTGlzdC5kYXRhc2V0Lm1vZGUgPSAnJztcblxuICAvLyBjcmVhdGUgcGxheVJlcGVhdCBidXR0b25cbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IGNyZWF0ZVBsYXlSZXBlYXRCdG4oKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZChjYXRlZ29yeU5hbWUpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChjYXJkTGlzdCk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKHBsYXlSZXBlYXRCdG4pO1xuXG4gIG1haW5FbGVtZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbkVsZW1lbnQ7XG59O1xuXG5jb25zdCBtYWluTWVudUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHsgc2VjdGlvbiB9ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKS5kYXRhc2V0O1xuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uKGRhdGEsIHNlY3Rpb24pO1xuICB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZShzZWN0aW9uKTtcbn07XG5cbmNvbnN0IG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb25zdCBjYXJkSW5uZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtaW5uZXInKTtcbiAgaWYgKGlzTWFpbk1lbnUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KSkge1xuICAgIG1haW5NZW51RnVuY3Rpb25hbGl0eSh0YXJnZXQpO1xuICB9IGVsc2UgaWYgKCFpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNUcmFpbk1vZGUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KSkge1xuICAgIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHkodGFyZ2V0LCBjYXJkSW5uZXIpO1xuICB9IGVsc2UgaWYgKCFpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNQbGF5TW9kZShjYXJkc0xpc3QpICYmIGlzQ2FyZCh0YXJnZXQpXG4gICAgJiYgaXNHYW1lU3RhcnRlZCgpKSB7XG4gICAgY29uc3QgY3VycmVudENhcmQgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkRnJvbnQgPSBjdXJyZW50Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1mcm9udCcpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkU291bmQgPSBjdXJyZW50Q2FyZC5kYXRhc2V0LnNvdW5kO1xuICAgIGNvbnN0IGN1cnJlbnRTb3VuZCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKS5hdCgtMSk7XG4gICAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvY29ycmVjdC1jaG9pY2UubXAzJztcbiAgICBjb25zdCBzdWNjZXNzU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvc3VjY2Vzcy5tcDMnO1xuICAgIGNvbnN0IGNvcnJlY3RJY29uU3JjID0gJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvY29ycmVjdC5wbmcnO1xuICAgIGNvbnN0IHdyb25nSWNvblNyYyA9ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZyc7XG4gICAgY29uc3Qgd3JvbmdBbnN3ZXJTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9uZWdhdGl2ZV9iZWVwcy5tcDMnO1xuICAgIGNvbnN0IGZhaWx1cmVTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9mYWlsdXJlLm1wMyc7XG4gICAgaWYgKGlzQWN0aXZlQ2FyZChjdXJyZW50Q2FyZEZyb250KSAmJiAhcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgICAgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhKCdwbGF5JywgY3VycmVudENhcmQsIGN1cnJlbnRDYXJkU291bmQgPT09IGN1cnJlbnRTb3VuZCk7XG4gICAgICBpZiAoY3VycmVudENhcmRTb3VuZCA9PT0gY3VycmVudFNvdW5kKSB7XG4gICAgICAgIGN1cnJlbnRDYXJkRnJvbnQuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgYWRkU2NvcmVJY29uKGN1cnJlbnRDYXJkLCBjb3JyZWN0SWNvblNyYyk7XG4gICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgY29ycmVjdEFuc3dlclNvdW5kKTtcbiAgICAgICAgdXBkYXRlU291bmRMaXN0KCk7XG4gICAgICAgIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KHBsYXlSZXBlYXRCdG4pO1xuICAgICAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgc2hvd092ZXJsYXkoKTtcbiAgICAgICAgICBpZiAoaXNHYW1lT3ZlclN1Y2Nlc3MoKSkge1xuICAgICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBzdWNjZXNzU291bmQpO1xuICAgICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgICAgICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBmYWlsdXJlU291bmQpO1xuICAgICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgICAgICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFNjb3JlSWNvbihjdXJyZW50Q2FyZCwgd3JvbmdJY29uU3JjKTtcbiAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCB3cm9uZ0Fuc3dlclNvdW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNhcmRzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVNYWluLCBtYWluTWVudUZ1bmN0aW9uYWxpdHksIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSxcbiAgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGlzR2FtZU92ZXJTdWNjZXNzLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgaGlkZU92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXknO1xuXG5jb25zdCBjcmVhdGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93Jyk7XG5cbiAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19faWNvbicpO1xuICBpY29uLnNyYyA9ICcnO1xuICBpY29uLmFsdCA9ICdpY29uJztcblxuICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19fdGV4dCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgY29uc3QgaDMgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfX3Njb3JlJyk7XG5cbiAgbW9kYWxXaW5kb3cuYXBwZW5kKGljb24pO1xuICBtb2RhbFdpbmRvdy5hcHBlbmQodGV4dCk7XG4gIG1vZGFsV2luZG93LmFwcGVuZChoMyk7XG5cbiAgcmV0dXJuIG1vZGFsV2luZG93O1xufTtcblxuY29uc3Qgc2hvd01vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIGNvbnN0IG1vZGFsV2luZG93SWNvbiA9IEdFVF9WQVIoJ21vZGFsV2luZG93SWNvbicpO1xuICBjb25zdCBtb2RhbFdpbmRvd1RleHQgPSBHRVRfVkFSKCdtb2RhbFdpbmRvd1RleHQnKTtcbiAgY29uc3QgbW9kYWxXaW5kb3doU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X19zY29yZScpO1xuICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgaWYgKGlzR2FtZU92ZXJTdWNjZXNzKCkpIHtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uV2luJyk7XG4gICAgbW9kYWxXaW5kb3dUZXh0LnRleHRDb250ZW50ID0gJ1lvdSBhcmUgd2luISc7XG4gICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gICAgbW9kYWxXaW5kb3doU2NvcmUudGV4dENvbnRlbnQgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzY29yZUxpbmVJY29ucyA9IHNjb3JlTGluZS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgICBjb25zdCBhbW91bnRPZk1pc3Rha2VzID0gQXJyYXkuZnJvbShzY29yZUxpbmVJY29ucykuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNyYy5pbmRleE9mKCdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZycpICE9PSAtMSkubGVuZ3RoO1xuICAgIG1vZGFsV2luZG93aFNjb3JlLnRleHRDb250ZW50ID0gYE1pc3Rha2VzOiAke2Ftb3VudE9mTWlzdGFrZXN9YDtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uTG9zZScpO1xuICAgIG1vZGFsV2luZG93VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgYXJlIGxvc2UhJztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhcicpO1xuICAgIGhpZGVPdmVybGF5KCk7XG4gICAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgfSwgMzAwMCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdywgc2hvd01vZGFsV2luZG93LCBoaWRlTW9kYWxXaW5kb3cgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQsIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24sXG4gIGhpZGVTdGF0VGFibGUsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgY3JlYXRlTmF2TWVudUl0ZW0gZnJvbSAnLi9uYXZNZW51SXRlbSc7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlTmF2TWVudSA9IChkYXRhU2V0KSA9PiB7XG4gIC8vIGNyZWF0ZSBuYXYgdWxcbiAgY29uc3QgbmF2TWVudVVsID0gY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2TWVudVVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhU2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbmF2TWVudVVsLmFwcGVuZChjcmVhdGVOYXZNZW51SXRlbShkYXRhW2ldLnNlY3Rpb24pKTtcbiAgfVxuXG4gIHJldHVybiBuYXZNZW51VWw7XG59O1xuXG5jb25zdCBvcGVuTmF2TWVudSA9IChoZWFkZXJOYXYpID0+IHtcbiAgY29uc3QgaGVhZGVyTWVudSA9IEdFVF9WQVIoJ2hlYWRlck1lbnUnKTtcbiAgY29uc3QgbmF2TWVudUxpbmtzID0gR0VUX1ZBUignbmF2TWVudUxpbmtzJyk7XG4gIG5hdk1lbnVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay50YWJJbmRleCA9IDA7XG4gIH0pO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW91dCcpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluJyk7XG59O1xuXG5jb25zdCBjbG9zZU5hdk1lbnUgPSAoaGVhZGVyTmF2KSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLWluJyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnc2xpZGUtb3V0Jyk7XG4gIG5hdk1lbnVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay50YWJJbmRleCA9IC0xO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldE5hdk1lbnVBY3RpdmVTdGF0ZSA9IChsaW5rcywgY2F0ZWdvcnkpID0+IHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGxpbmtTZWN0aW9uID0gbGluay5kYXRhc2V0LnNlY3Rpb247XG4gICAgaWYgKGxpbmtTZWN0aW9uID09PSBjYXRlZ29yeSkge1xuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlTmF2TWVudUFjdGl2ZVN0YXRlID0gKGxpbmtzKSA9PiB7XG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICByZW1vdmVOYXZNZW51QWN0aXZlU3RhdGUobmF2TWVudUxpbmtzKTtcbiAgc2V0TmF2TWVudUFjdGl2ZVN0YXRlKG5hdk1lbnVMaW5rcywgY2F0ZWdvcnkpO1xufTtcblxuY29uc3QgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHkgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY29uc3QgaGFtYnVyZ2VyQnRuID0gR0VUX1ZBUignaGFtYnVyZ2VyQnRuJyk7XG4gIGNvbnN0IHsgc2VjdGlvbiB9ID0gdGFyZ2V0LmRhdGFzZXQ7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XG4gIGhpZGVTdGF0VGFibGUoKTtcbiAgaWYgKHNlY3Rpb24gPT09ICdIb21lJykge1xuICAgIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG4gICAgaGFtYnVyZ2VyQnRuLmNsaWNrKCk7XG4gIH0gZWxzZSBpZiAoc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24oZGF0YSwgc2VjdGlvbik7XG4gICAgaGFtYnVyZ2VyQnRuLmNsaWNrKCk7XG4gIH1cbiAgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUoY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50KTtcbn07XG5cbmNvbnN0IHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJNZW51ID0gR0VUX1ZBUignaGVhZGVyTWVudScpO1xuICBoZWFkZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTmF2TWVudSwgb3Blbk5hdk1lbnUsIGNsb3NlTmF2TWVudSwgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHksXG4gIHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyLCB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgc2hvd092ZXJsYXksIGhpZGVPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7IG9wZW5OYXZNZW51LCBjbG9zZU5hdk1lbnUgfSBmcm9tICcuL25hdk1lbnUnO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51QnRuID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IGJ1dHRvblxuICBjb25zdCBuYXZNZW51QnRuID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBuYXZNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1oYW1idXJnZXInKTtcbiAgbmF2TWVudUJ0bi5ocmVmID0gJyMnO1xuXG4gIGNvbnN0IHNwYW4xID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzcGFuMiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3Qgc3BhbjMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjEpO1xuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMik7XG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4zKTtcblxuICByZXR1cm4gbmF2TWVudUJ0bjtcbn07XG5cbmNvbnN0IG5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBoYW1idXJnZXJCdG4gPSBHRVRfVkFSKCdoYW1idXJnZXJCdG4nKTtcbiAgY29uc3QgaGVhZGVyTmF2ID0gR0VUX1ZBUignaGVhZGVyTmF2Jyk7XG4gIGhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaGVhZGVyTmF2LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICBjbG9zZU5hdk1lbnUoaGVhZGVyTmF2KTtcbiAgICAgIGhpZGVPdmVybGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5OYXZNZW51KGhlYWRlck5hdik7XG4gICAgICBzaG93T3ZlcmxheSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVOYXZNZW51QnRuLCBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjYXBpdGFsaXplRmlyc3RXb3JkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlTmF2TWVudUl0ZW0gPSAobGlua05hbWUpID0+IHtcbiAgLy8gY3JlYXRlIGxpXG4gIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0nKTtcblxuICAvLyBjcmVhdGUgbWVudSBsaW5rXG4gIGNvbnN0IGxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpO1xuICBsaW5rLmhyZWYgPSBgIyR7bGlua05hbWV9YDtcbiAgbGluay5kYXRhc2V0LnNlY3Rpb24gPSBjYXBpdGFsaXplRmlyc3RXb3JkKGxpbmtOYW1lKTtcbiAgbGluay50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuICBsaW5rLnRhYkluZGV4ID0gLTE7XG5cbiAgbGkuYXBwZW5kKGxpbmspO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdk1lbnVJdGVtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgY2xvc2VOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcblxuY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIG92ZXJsYXkgZWxlbWVudFxuICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xufTtcblxuY29uc3QgaGlkZU92ZXJsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBHRVRfVkFSKCdvdmVybGF5Jyk7XG4gIGNvbnN0IGJvZHkgPSBHRVRfVkFSKCdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbn07XG5cbmNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gR0VUX1ZBUignb3ZlcmxheScpO1xuICBjb25zdCBib2R5ID0gR0VUX1ZBUignYm9keScpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG59O1xuXG5jb25zdCBvdmVybGF5RnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IEdFVF9WQVIoJ292ZXJsYXknKTtcbiAgY29uc3QgaGVhZGVyTmF2ID0gR0VUX1ZBUignaGVhZGVyTmF2Jyk7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhlYWRlck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgIGNsb3NlTmF2TWVudShoZWFkZXJOYXYpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVPdmVybGF5LCBzaG93T3ZlcmxheSwgaGlkZU92ZXJsYXksIG92ZXJsYXlGdW5jdGlvbmFsaXR5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgcGxheVNvdW5kIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVQbGF5UmVwZWF0QnRuID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXktYnRuJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdwbGF5JztcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGNvbnN0IHNvdW5kc0xpc3QgPSBHRVRfVkFSKCdzb3VuZHNMaXN0Jyk7XG4gIGNvbnN0IGN1cnJlbnRTb3VuZCA9IHNvdW5kc0xpc3QuYXQoLTEpO1xuICBpZiAoc291bmRzTGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgcGxheVNvdW5kKHBsYXlSZXBlYXRCdG4sIGN1cnJlbnRTb3VuZCk7XG4gIGlmICghcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlcGVhdCcpKSB7XG4gICAgcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQnKTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGlmIChwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0JykpIHtcbiAgICBwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcGVhdCcpO1xuICB9XG59O1xuXG5jb25zdCBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgcGxheVJlcGVhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVBsYXlSZXBlYXRCdG4sIHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5LCByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSxcbiAgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlU2NvcmVMaW5lSWNvbiA9IChzcmMpID0+IHtcbiAgY29uc3Qgc2NvcmVJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNjb3JlSWNvbi5jbGFzc0xpc3QuYWRkKCdzY29yZS1saW5lX19pY29uJyk7XG4gIHNjb3JlSWNvbi5zcmMgPSBzcmM7XG4gIHNjb3JlSWNvbi5hbHQgPSAnaWNvbic7XG5cbiAgcmV0dXJuIHNjb3JlSWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNjb3JlTGluZUljb247XG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3RhdGlzdGljc1RhYmxlLCBzZXRHbG9iYWxWYWx1ZXMsXG4gIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHksIHNob3dTdGF0VGFibGUsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSLCBTRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuLy8gY3JlYXRlIGhlYWRlciBzdGF0aXN0aWNzIGJ1dHRvblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc0J0biA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgc3RhdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLWJ1dHRvbicpO1xuICBzdGF0QnRuLnRleHRDb250ZW50ID0gJ1N0YXRpc3RpY3MnO1xuXG4gIHJldHVybiBzdGF0QnRuO1xufTtcblxuY29uc3Qgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1idXR0b24nKTtcbiAgc3RhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRHbG9iYWxWYWx1ZXMoKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLXBhZ2UnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IHN0YXRpc3RpY3NQYWdlLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZScpO1xuICAgIGNvbnN0IHN0YXRpc3RpY0RhdGEgPSBHRVRfVkFSKCdzdGF0aXN0aWNEYXRhJykuc2xpY2UoKTtcbiAgICBzdGF0aXN0aWNzVGFibGUucmVtb3ZlKCk7XG4gICAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNEYXRhKSk7XG4gICAgY29uc3QgcmVwZWF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgICBzdGF0aXN0aWNEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGVsZW0xID0gYVsnQWNjdXJhY3kgJSddO1xuICAgICAgY29uc3QgZWxlbTIgPSBiWydBY2N1cmFjeSAlJ107XG5cbiAgICAgIHJldHVybiBlbGVtMSAtIGVsZW0yO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlcGVhdGVkRGF0YSA9IHN0YXRpc3RpY0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtWydBY2N1cmFjeSAlJ10gIT09ICduL2UnICYmIGl0ZW1bJ0FjY3VyYWN5ICUnXSAhPT0gMTAwKVxuICAgICAgLnNsaWNlKDAsIDgpXG4gICAgICAubWFwKChlbGVtKSA9PiBlbGVtLlRyYW5zbGF0aW9uKTtcblxuICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNldCA9IGRhdGFcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VjdGlvbldvcmRzKVxuICAgICAgLm1hcCgoZWxlbSkgPT4gZWxlbS5zZWN0aW9uV29yZHMpXG4gICAgICAuZmxhdCgpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiByZXBlYXRlZERhdGEuaW5jbHVkZXMoaXRlbS50cmFuc2xhdGlvbikpO1xuICAgIFNFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcsIHJlcGVhdGVkRGF0YVNldCk7XG4gICAgaWYgKHJlcGVhdGVkRGF0YVNldC5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBlYXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5KCk7XG5cbiAgICBzaG93U3RhdFRhYmxlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3RhdGlzdGljc0J0biwgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgaGlkZVN0YXRUYWJsZSwgY3JlYXRlRGlmZldvcmRzU2VjdGlvbixcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSwgc2V0R2xvYmFsVmFsdWVzLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZVxuICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2UnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGNvbnRhaW5lclxuICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlQnV0dG9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scycpO1xuXG4gIC8vIGNyZWF0ZSByZXBlYXQgZGlmZmljdWx0IHdvcmRzIGJ1dHRvblxuICBjb25zdCByZXBlYXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVwZWF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVwZWF0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZV9fY29udHJvbHMtYnRuJyk7XG4gIHJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQtYnRuJyk7XG4gIHJlcGVhdEJ0bi50ZXh0Q29udGVudCA9ICdSZXBlYXQgZGlmZmljdWx0IHdvcmRzJztcblxuICAvLyBjcmVhdGUgcmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scy1idG4nKTtcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXQtYnRuJyk7XG4gIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHN0YXRpc3RpYyc7XG5cbiAgc3RhdGlzdGljc1BhZ2VCdXR0b25zLmFwcGVuZChyZXBlYXRCdG4pO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuYXBwZW5kKHJlc2V0QnRuKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIHRhYmxlXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlVGFibGUgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGUoc3RhdGlzdGljc0RhdGEpO1xuXG4gIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChzdGF0aXN0aWNzUGFnZUJ1dHRvbnMpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoc3RhdGlzdGljc1BhZ2VUYWJsZSk7XG5cbiAgc3RhdGlzdGljc1BhZ2UuYXBwZW5kKHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyKTtcbiAgcmV0dXJuIHN0YXRpc3RpY3NQYWdlO1xufTtcblxuY29uc3QgcmVzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXRTdGF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuICByZXNldFN0YXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2VDb250YWluZXIgPSBzdGF0aXN0aWNzUGFnZS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgICBzdGF0aXN0aWNzVGFibGUucmVtb3ZlKCk7XG4gICAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNzRGF0YSkpO1xuICAgIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0LWJ0bicpO1xuICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufTtcblxuY29uc3QgcmVwZWF0RGlmZldvcmRzRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVwZWF0RGlmZldvcmRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgcmVwZWF0RGlmZldvcmRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNldCA9IEdFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcpO1xuICAgIGNyZWF0ZURpZmZXb3Jkc1NlY3Rpb24ocmVwZWF0ZWREYXRhU2V0LCAnRGlmZmljdWx0IHdvcmRzJyk7XG4gICAgaGlkZVN0YXRUYWJsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NQYWdlLCByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1cGRhdGVNb2RlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVUb2dnbGUgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9IGZhbHNlO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSB0cmFpblxuICBjb25zdCB0b2dnbGVNb2RlVHJhaW4gPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX190cmFpbicpO1xuICB0b2dnbGVNb2RlVHJhaW4udGV4dENvbnRlbnQgPSAnVHJhaW4nO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSBwbGF5XG4gIGNvbnN0IHRvZ2dsZU1vZGVQbGF5ID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2dnbGVNb2RlUGxheS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVQbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3BsYXknKTtcbiAgdG9nZ2xlTW9kZVBsYXkudGV4dENvbnRlbnQgPSAnUGxheSc7XG5cbiAgdG9nZ2xlQnRuLmFwcGVuZCh0b2dnbGVNb2RlVHJhaW4pO1xuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGVQbGF5KTtcblxuICByZXR1cm4gdG9nZ2xlQnRuO1xufTtcblxuY29uc3QgdG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQnRuID0gR0VUX1ZBUigndG9nZ2xlQnRuJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9ICh0b2dnbGVCdG4uYXJpYVByZXNzZWQgPT09ICdmYWxzZScpID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgU0VUX1ZBUignaXNQbGF5TW9kZScsIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCk7XG4gIHVwZGF0ZU1vZGUoKTtcbn07XG5cbmNvbnN0IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUJ0biA9IEdFVF9WQVIoJ3RvZ2dsZUJ0bicpO1xuICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVCdG5GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZ2dsZSwgdG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSwgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiaW1wb3J0IHsgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnVCdG4nO1xuaW1wb3J0IHsgb3ZlcmxheUZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL292ZXJsYXknO1xuaW1wb3J0IHsgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnUnO1xuaW1wb3J0IHsgc2V0TG9nb0V2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IHsgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCB7IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvZ2dsZUJ0bic7XG5pbXBvcnQgeyBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgeyBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bic7XG5pbXBvcnQgeyByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZSc7XG5pbXBvcnQgeyBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgb3ZlcmxheUZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TG9nb0V2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KCk7XG4gIHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSgpO1xuICBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSgpO1xuICByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5KCk7XG4gIHJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldEV2ZW50TGlzdGVuZXJzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IGNyZWF0ZUNhcmRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZEl0ZW0nO1xuaW1wb3J0IHsgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCBjcmVhdGVTY29yZUxpbmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvc2NvcmVMaW5lSWNvbic7XG5pbXBvcnQgeyBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IGRhdGFTZXQgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcblxuLy8gY3JlYXRlIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc01haW5NZW51ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydC1wYWdlJyk7XG5jb25zdCBpc0NhcmQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG5jb25zdCBpc0FjdGl2ZUNhcmQgPSAoY2FyZCkgPT4gIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpO1xuY29uc3QgaXNUcmFpbk1vZGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0Lm1vZGUgPT09ICd0cmFpbic7XG5jb25zdCBpc1BsYXlNb2RlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC5tb2RlID09PSAncGxheSc7XG5jb25zdCBpc0dhbWVTdGFydGVkID0gKCkgPT4gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0Jyk7XG5jb25zdCBpc0dhbWVPdmVyID0gKCkgPT4gR0VUX1ZBUignc291bmRzTGlzdCcpLmxlbmd0aCA9PT0gMDtcbmNvbnN0IGlzR2FtZU92ZXJTdWNjZXNzID0gKCkgPT4ge1xuICBjb25zdCBpY29uc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZS1saW5lX19pY29uJykubGVuZ3RoO1xuICBjb25zdCBjYXJkc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKS5sZW5ndGg7XG4gIHJldHVybiBpY29uc0Ftb3VudCA9PT0gY2FyZHNBbW91bnQ7XG59O1xuXG5jb25zdCBjbGVhckNhcmRzTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn07XG5cbmNvbnN0IHNodWZmbGVBcnJheSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzaHVmZmxlZCA9IFsuLi5hcnJheV07XG4gIGZvciAobGV0IGkgPSBzaHVmZmxlZC5sZW5ndGggLSAxOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFtzaHVmZmxlZFtpXSwgc2h1ZmZsZWRbal1dID0gW3NodWZmbGVkW2pdLCBzaHVmZmxlZFtpXV07XG4gIH1cbiAgcmV0dXJuIHNodWZmbGVkO1xufTtcblxuY29uc3QgdXBkYXRlU291bmRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gR0VUX1ZBUignc291bmRzTGlzdCcpLnNsaWNlKCk7XG4gIHNvdW5kc0xpc3QucG9wKCk7XG4gIFNFVF9WQVIoJ3NvdW5kc0xpc3QnLCBzb3VuZHNMaXN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1NvdW5kc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICBjb25zdCBzb3VuZHNMaXN0ID0gW107XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCB7IHNvdW5kIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgc291bmRzTGlzdC5wdXNoKHNvdW5kKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNvdW5kc0xpc3Q7XG59O1xuXG5jb25zdCBwZXJjZW50Q29ycmVjdEFuc3dlcnMgPSAob2JqKSA9PiBNYXRoLnJvdW5kKChcbiAgb2JqLkNvcnJlY3QgLyAob2JqLkNvcnJlY3QgKyBvYmouSW5jb3JyZWN0KSkgKiAxMDApO1xuXG5jb25zdCBjcmVhdGVTdGFydGluZ1N0YXRpc3RpY0RhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uc2VjdGlvbiAhPT0gJ2hvbWUnKSB7XG4gICAgICBpdGVtLnNlY3Rpb25Xb3Jkcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBDYXRlZ29yeTogaXRlbS5zZWN0aW9uVGl0bGUsXG4gICAgICAgICAgV29yZDogZWxlbS53b3JkLFxuICAgICAgICAgIFRyYW5zbGF0aW9uOiBlbGVtLnRyYW5zbGF0aW9uLFxuICAgICAgICAgIFRyYWluZWQ6IDAsXG4gICAgICAgICAgQ29ycmVjdDogMCxcbiAgICAgICAgICBJbmNvcnJlY3Q6IDAsXG4gICAgICAgICAgJ0FjY3VyYWN5ICUnOiAnbi9lJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0LnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzRGF0YSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGlzdGljRGF0YScpO1xuICBpZiAoIXNhdmVkRGF0YSkge1xuICAgIGNvbnN0IHN0YXJ0aW5nRGF0YSA9IGNyZWF0ZVN0YXJ0aW5nU3RhdGlzdGljRGF0YShkYXRhKTtcbiAgICBjb25zdCBzdGFydGluZ0RhdGFUb0pzb24gPSBKU09OLnN0cmluZ2lmeShzdGFydGluZ0RhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0aXN0aWNEYXRhJywgc3RhcnRpbmdEYXRhVG9Kc29uKTtcbiAgICByZXN1bHQucHVzaCguLi5zdGFydGluZ0RhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICAgIHJlc3VsdC5wdXNoKC4uLmN1cnJlbnREYXRhKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RXb3JkID0gKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG5jb25zdCBzZXRHbG9iYWxWYWx1ZXMgPSAoKSA9PiB7XG4gIFNFVF9WQVIoJ21haW5TZWN0aW9uJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSk7XG4gIFNFVF9WQVIoJ2NhdGVnb3J5TmFtZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1uYW1lJykpO1xuICBTRVRfVkFSKCdjYXJkc0xpc3QnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbGlzdCcpKTtcbiAgU0VUX1ZBUignaGFtYnVyZ2VyQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1oYW1idXJnZXInKSk7XG4gIFNFVF9WQVIoJ2hlYWRlck5hdicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2JykpO1xuICBTRVRfVkFSKCdoZWFkZXJNZW51JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1tZW51JykpO1xuICBTRVRfVkFSKCduYXZNZW51TGlua3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpKTtcbiAgU0VUX1ZBUignb3ZlcmxheScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xuICBTRVRfVkFSKCdib2R5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKTtcbiAgU0VUX1ZBUignaGVhZGVyTG9nbycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nb19fbGluaycpKTtcbiAgU0VUX1ZBUigndG9nZ2xlQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1idXR0b24nKSk7XG4gIFNFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idG4nKSk7XG4gIFNFVF9WQVIoJ3Njb3JlTGluZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1saW5lJykpO1xuICBTRVRfVkFSKCdtb2RhbFdpbmRvdycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93VGV4dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX3RleHQnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93SWNvbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2ljb24nKSk7XG4gIFNFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnLCBjcmVhdGVTdGF0aXN0aWNzRGF0YShkYXRhU2V0KSk7XG4gIFNFVF9WQVIoJ2lzUGxheU1vZGUnLCBHRVRfVkFSKCd0b2dnbGVCdG4nKS5hcmlhUHJlc3NlZCk7XG59O1xuXG5jb25zdCByZXNldENhcmRzU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZnJvbnQnKTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpKTtcbn07XG5cbmNvbnN0IHNob3dTdGF0VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICBjb25zdCBtYWluU2VjdGlvbiA9IEdFVF9WQVIoJ21haW5TZWN0aW9uJyk7XG4gIGNvbnN0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXInKTtcbiAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtdXAnKTtcbiAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzYXBwZWFyJyk7XG4gIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWRvd24nKTtcbn07XG5cbmNvbnN0IGhpZGVTdGF0VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICBpZiAoc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS1kb3duJykpIHtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IEdFVF9WQVIoJ21haW5TZWN0aW9uJyk7XG4gICAgY29uc3QgbWFpblNlY3Rpb25Db250YWluZXIgPSBtYWluU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtZG93bicpO1xuICAgIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLXVwJyk7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYXBwZWFyJyk7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0Q2FyZHNTb3VuZHNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gY3JlYXRlTmV3U291bmRzTGlzdCgpO1xuICBTRVRfVkFSKCdzb3VuZHNMaXN0Jywgc2h1ZmZsZUFycmF5KHNvdW5kc0xpc3QpKTtcbn07XG5cbmNvbnN0IHJlc2V0U2NvcmVMaW5lID0gKCkgPT4ge1xuICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgc2NvcmVMaW5lLmlubmVySFRNTCA9ICcnO1xufTtcblxuY29uc3QgdXBkYXRlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IHBsYXlNb2RlID0gR0VUX1ZBUignaXNQbGF5TW9kZScpO1xuICByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSgpO1xuICByZXNldENhcmRzU3RhdGUoKTtcbiAgcmVzZXRDYXJkc1NvdW5kc0xpc3QoKTtcbiAgcmVzZXRTY29yZUxpbmUoKTtcbiAgaWYgKHBsYXlNb2RlID09PSAndHJ1ZScpIHtcbiAgICBjYXJkc0xpc3QuZGF0YXNldC5tb2RlID0gJ3BsYXknO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5kYXRhc2V0Lm1vZGUgPSAndHJhaW4nO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzVGFibGVIZWFkID0gKGRhdGEpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlSGVhZCA9IGNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gIHN0YXRpc3RpY3NUYWJsZUhlYWQuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZCcpO1xuICBjb25zdCBoZWFkZXJSb3cgPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuICBoZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZC1yb3cnKTtcbiAgaGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlLXJvdycpO1xuICBjb25zdCBoZWFkZXJSb3dEYXRhID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG5cbiAgaGVhZGVyUm93RGF0YS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBoZWFkZXJSb3dUaCA9IGNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgaGVhZGVyUm93VGguY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZC1yb3dfX2NlbGwnKTtcbiAgICBoZWFkZXJSb3dUaC5jbGFzc0xpc3QuYWRkKCd0YWJsZS1jZWxsJyk7XG4gICAgaGVhZGVyUm93VGguZGF0YXNldC5jb2x1bW4gPSBrZXk7XG4gICAgaGVhZGVyUm93VGguZGF0YXNldC5zb3J0ID0gKGtleSA9PT0gJ0NhdGVnb3J5JykgfHwgKGtleSA9PT0gJ1dvcmQnKSB8fCAoa2V5ID09PSAnVHJhbnNsYXRpb24nKSA/ICdhbHBoJyA6ICdudW0nO1xuICAgIGhlYWRlclJvd1RoLnRleHRDb250ZW50ID0ga2V5O1xuICAgIGhlYWRlclJvdy5hcHBlbmQoaGVhZGVyUm93VGgpO1xuICB9KTtcblxuICBzdGF0aXN0aWNzVGFibGVIZWFkLmFwcGVuZChoZWFkZXJSb3cpO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGVIZWFkO1xufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keSA9IChkYXRhKSA9PiB7XG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGJvZHlcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlQm9keSA9IGNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gIHN0YXRpc3RpY3NUYWJsZUJvZHkuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9fYm9keScpO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHRCb2R5Um93ID0gY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0Qm9keVJvdy5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19ib2R5LXJvdycpO1xuICAgIHRCb2R5Um93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlLXJvdycpO1xuICAgIGNvbnN0IHRCb2R5Um93RGF0YSA9IE9iamVjdC52YWx1ZXMoaXRlbSk7XG4gICAgY29uc3Qgcm93Q2F0ZWdvcnkgPSBPYmplY3QudmFsdWVzKGl0ZW0pWzBdO1xuICAgIGNvbnN0IHJvd1dvcmQgPSBPYmplY3QudmFsdWVzKGl0ZW0pWzFdO1xuICAgIGNvbnN0IGhlYWRlclJvd0RhdGEgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcbiAgICB0Qm9keVJvdy5kYXRhc2V0LnJvdyA9IHJvd1dvcmQ7XG5cbiAgICB0Qm9keVJvd0RhdGEuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0Qm9keVJvd0NlbGwgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdEJvZHlSb3dDZWxsLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2JvZHktcm93X19jZWxsJyk7XG4gICAgICB0Qm9keVJvd0NlbGwuY2xhc3NMaXN0LmFkZCgndGFibGUtY2VsbCcpO1xuICAgICAgdEJvZHlSb3dDZWxsLmRhdGFzZXQuY2F0ZWdvcnkgPSByb3dDYXRlZ29yeTtcbiAgICAgIHRCb2R5Um93Q2VsbC5kYXRhc2V0LmNlbGwgPSBoZWFkZXJSb3dEYXRhW2luZGV4XTtcbiAgICAgIHRCb2R5Um93Q2VsbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgdEJvZHlSb3cuYXBwZW5kKHRCb2R5Um93Q2VsbCk7XG4gICAgfSk7XG5cbiAgICBzdGF0aXN0aWNzVGFibGVCb2R5LmFwcGVuZCh0Qm9keVJvdyk7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGVCb2R5O1xufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1RhYmxlID0gKGRhdGEpID0+IHtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGVcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgc3RhdGlzdGljc1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGUnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyB0YWJsZSBoZWFkXG4gIGNvbnN0IHN0YXRpc3RpY3NUYWJsZUhlYWQgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGVIZWFkKGRhdGEpO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGJvZHlcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlQm9keSA9IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkoZGF0YSk7XG5cbiAgc3RhdGlzdGljc1RhYmxlLmFwcGVuZChzdGF0aXN0aWNzVGFibGVIZWFkKTtcbiAgc3RhdGlzdGljc1RhYmxlLmFwcGVuZChzdGF0aXN0aWNzVGFibGVCb2R5KTtcblxuICByZXR1cm4gc3RhdGlzdGljc1RhYmxlO1xufTtcblxuY29uc3Qgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgY29uc3Qgc3RhdFRhYmxlSGVhZGVyID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlX19oZWFkJyk7XG4gIGNvbnN0IHN0YXRUYWJsZUhlYWRlckNlbGxzID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0LXRhYmxlX19oZWFkLXJvd19fY2VsbCcpO1xuICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcblxuICBzdGF0VGFibGVIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdFRhYmxlQm9keSA9IHN0YXRUYWJsZS5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZV9fYm9keScpO1xuICAgIGNvbnN0IHNvcnRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuc29ydDtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnkgPSB0YXJnZXQuZGF0YXNldC5jb2x1bW47XG4gICAgY29uc3Qgc29ydENhdGVnb3J5Q2VsbHMgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY2VsbD0nJHtzb3J0Q2F0ZWdvcnl9J11gKTtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcyA9IEFycmF5LmZyb20oc29ydENhdGVnb3J5Q2VsbHMpLm1hcCgoY2VsbCkgPT4gY2VsbC50ZXh0Q29udGVudCk7XG4gICAgY29uc3QgYXJlRW1wdHlDZWxscyA9IHNvcnRDYXRlZ29yeUNlbGxzVmFsdWVzLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnMCcgfHwgaXRlbSA9PT0gJ24vZScpO1xuICAgIGlmIChhcmVFbXB0eUNlbGxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYXNjZW5kJykpIHtcbiAgICAgIHN0YXRUYWJsZUhlYWRlckNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYXNjZW5kJykpO1xuICAgICAgc3RhdGlzdGljc0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBudW0xID0gYVtbc29ydENhdGVnb3J5XV0gPT09ICduL2UnID8gLTEgOiBhW3NvcnRDYXRlZ29yeV07XG4gICAgICAgIGNvbnN0IG51bTIgPSBiW1tzb3J0Q2F0ZWdvcnldXSA9PT0gJ24vZScgPyAtMSA6IGJbc29ydENhdGVnb3J5XTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FzY2VuZCcpO1xuICAgICAgICBpZiAoc29ydFR5cGUgPT09ICdhbHBoJykge1xuICAgICAgICAgIHJldHVybiBudW0xLmxvY2FsZUNvbXBhcmUobnVtMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTIgLSBudW0xO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRpc3RpY3NEYXRhLnJldmVyc2UoKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhc2NlbmQnKTtcbiAgICB9XG4gICAgc3RhdFRhYmxlQm9keS5yZW1vdmUoKTtcbiAgICBzdGF0VGFibGUuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkoc3RhdGlzdGljc0RhdGEpKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEgPSAobW9kZSwgY2FyZCwgcmVzdWx0KSA9PiB7XG4gIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0aXN0aWNEYXRhJyk7XG4gIGNvbnN0IGN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICBjb25zdCBjYXJkQmFja1RpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1iYWNrX190aXRsZScpLnRleHRDb250ZW50O1xuICBsZXQgY3VycmVudEl0ZW0gPSBjdXJyZW50RGF0YVxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IChpdGVtLlRyYW5zbGF0aW9uID09PSBjYXJkQmFja1RpdGxlKSlbMF07XG4gIGlmIChtb2RlID09PSAndHJhaW4nKSB7XG4gICAgY3VycmVudEl0ZW0uVHJhaW5lZCArPSAxO1xuICB9XG4gIGlmIChyZXN1bHQpIHtcbiAgICBjdXJyZW50SXRlbS5Db3JyZWN0ICs9IDE7XG4gICAgY3VycmVudEl0ZW1bJ0FjY3VyYWN5ICUnXSA9IHBlcmNlbnRDb3JyZWN0QW5zd2VycyhjdXJyZW50SXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2FyZExpc3RJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpKTtcbiAgICBjb25zdCBjdXJyZW50U291bmQgPSBHRVRfVkFSKCdzb3VuZHNMaXN0JykuYXQoLTEpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gY2FyZExpc3RJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZGF0YXNldC5zb3VuZCA9PT0gY3VycmVudFNvdW5kKVswXTtcbiAgICBbY3VycmVudEl0ZW1dID0gY3VycmVudERhdGFcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgaXRlbS5UcmFuc2xhdGlvbiA9PT0gY3VycmVudENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtYmFja19fdGl0bGUnKVxuICAgICAgICAgIC50ZXh0Q29udGVudCkpO1xuICAgIGN1cnJlbnRJdGVtLkluY29ycmVjdCArPSAxO1xuICAgIGN1cnJlbnRJdGVtWydBY2N1cmFjeSAlJ10gPSBwZXJjZW50Q29ycmVjdEFuc3dlcnMoY3VycmVudEl0ZW0pO1xuICB9XG4gIGNvbnN0IGN1cnJlbnREYXRhVG9Kc29uID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGlzdGljRGF0YScsIGN1cnJlbnREYXRhVG9Kc29uKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGNhcmRzTGlzdC5jbGFzc0xpc3QuYWRkKCdzdGFydC1wYWdlJyk7XG4gIGNhcmRzTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gJ21haW4tbWVudSc7XG4gIHVwZGF0ZU1vZGUoKTtcbiAgY2xlYXJDYXJkc0xpc3RDb250YWluZXIoKTtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnNlY3Rpb24gIT09ICdob21lJykge1xuICAgICAgY29uc3QgaW1nUGF0aCA9IGVsZW1lbnQuc3RhcnRJbWFnZTtcbiAgICAgIGNvbnN0IGltZ0FsdCA9IGVsZW1lbnQuc2VjdGlvbldvcmRzWzBdLmFsdDtcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnQuc2VjdGlvblRpdGxlO1xuICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShpbWdQYXRoLCBpbWdBbHQsIGNhcmRUaXRsZSwgY2FyZFRpdGxlKTtcbiAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEl0ZW0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpbWdQYXRoID0gaXRlbS5pbWFnZTtcbiAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICBjb25zdCBjYXJkU2VjdGlvbiA9IGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBpdGVtLndvcmQ7XG4gICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICBjb25zdCBzb3VuZFBhdGggPSBpdGVtLmF1ZGlvU3JjO1xuICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oXG4gICAgICBpbWdQYXRoLFxuICAgICAgaW1nQWx0LFxuICAgICAgY2FyZFRpdGxlLFxuICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICBjYXJkVHJhbnNsYXRpb24sXG4gICAgICBzb3VuZFBhdGgsXG4gICAgKTtcbiAgICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRJdGVtKTtcbiAgfSk7XG4gIHJlc2V0Q2FyZHNTb3VuZHNMaXN0KCk7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWN0aW9uVGl0bGUgPT09IHNlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25EYXRhID0gZWxlbWVudC5zZWN0aW9uV29yZHM7XG4gICAgICBzZWN0aW9uRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ1BhdGggPSBpdGVtLmltYWdlO1xuICAgICAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGl0ZW0ud29yZDtcbiAgICAgICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICAgICAgY29uc3Qgc291bmRQYXRoID0gaXRlbS5hdWRpb1NyYztcbiAgICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShcbiAgICAgICAgICBpbWdQYXRoLFxuICAgICAgICAgIGltZ0FsdCxcbiAgICAgICAgICBjYXJkVGl0bGUsXG4gICAgICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICAgICAgY2FyZFRyYW5zbGF0aW9uLFxuICAgICAgICAgIHNvdW5kUGF0aCxcbiAgICAgICAgKTtcbiAgICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXNldENhcmRzU291bmRzTGlzdCgpO1xufTtcblxuY29uc3QgcGxheVNvdW5kID0gKGVsZW1lbnQsIHNvdW5kUGF0aCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhzb3VuZFBhdGgpO1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgYXVkaW8ucGxheSgpO1xuICBpZiAoZWxlbWVudCA9PT0gcGxheVJlcGVhdEJ0bikge1xuICAgIHBsYXlSZXBlYXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBwbGF5UmVwZWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBjYXJkc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVDYXJkID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVCYWNrID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHRyYWluTW9kZUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0LCBjYXJkSW5uZXIpID0+IHtcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZS1idG4nKSkge1xuICAgIHJvdGF0ZUNhcmQoY2FyZElubmVyKTtcbiAgICBjYXJkSW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHJvdGF0ZUJhY2soY2FyZElubmVyKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghY2FyZElubmVyLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG4gICAgY29uc3Qgc291bmRQYXRoID0gY3VycmVudENhcmQuZGF0YXNldC5zb3VuZDtcbiAgICBjb25zdCBjYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBwbGF5U291bmQoY2FyZCwgc291bmRQYXRoKTtcbiAgICB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEoJ3RyYWluJywgY3VycmVudENhcmQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRTY29yZUljb24gPSAoY2FyZCwgc3JjKSA9PiB7XG4gIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgIGNvbnN0IHNjb3JlSWNvbiA9IGNyZWF0ZVNjb3JlTGluZUljb24oc3JjKTtcbiAgICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgICBzY29yZUxpbmUucHJlcGVuZChzY29yZUljb24pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBzZXRHbG9iYWxWYWx1ZXMsIGNhcGl0YWxpemVGaXJzdFdvcmQsXG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LFxuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCB1cGRhdGVNb2RlLCBwbGF5U291bmQsXG4gIHJvdGF0ZUNhcmQsIHJvdGF0ZUJhY2ssIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIHNodWZmbGVBcnJheSwgdXBkYXRlU291bmRMaXN0LFxuICBpc0dhbWVTdGFydGVkLCBhZGRTY29yZUljb24sIGlzQWN0aXZlQ2FyZCwgaXNHYW1lT3ZlciwgaXNHYW1lT3ZlclN1Y2Nlc3MsXG4gIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhLCBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5LFxuICBjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5LCBzaG93U3RhdFRhYmxlLCBoaWRlU3RhdFRhYmxlLCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uLFxufTtcbiIsImNvbnN0IFZBUklBQkxFUyA9IHtcbiAgbWFpblNlY3Rpb246ICdpbml0aWFsIHZhbHVlJyxcbiAgY2F0ZWdvcnlOYW1lOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGNhcmRzTGlzdDogJ2luaXRpYWwgdmFsdWUnLFxuICBzb3VuZHNMaXN0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhhbWJ1cmdlckJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJOYXY6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTWVudTogJ2luaXRpYWwgdmFsdWUnLFxuICBuYXZNZW51TGlua3M6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTG9nbzogJ2luaXRpYWwgdmFsdWUnLFxuICBvdmVybGF5OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGJvZHk6ICdpbml0aWFsIHZhbHVlJyxcbiAgdG9nZ2xlQnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGlzUGxheU1vZGU6ICdpbml0aWFsIHZhbHVlJyxcbiAgcGxheVJlcGVhdEJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBzY29yZUxpbmU6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3c6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3dJY29uOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93VGV4dDogJ2luaXRpYWwgdmFsdWUnLFxuICBtb2RhbFdpbmRvd0ljb25XaW46ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dpbi1pY29uLnBuZycsXG4gIG1vZGFsV2luZG93SWNvbkxvc2U6ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL2xvc2UtaWNvbi5wbmcnLFxuICBzdGF0aXN0aWNEYXRhOiBbXSxcbiAgcmVwZWF0ZWREYXRhU2V0OiAnaW5pdGlhbCB2YWx1ZScsXG59O1xuXG5jb25zdCBTRVRfVkFSID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoVkFSSUFCTEVTLCBuYW1lKSkge1xuICAgIFZBUklBQkxFU1tuYW1lXSA9IHZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBHRVRfVkFSID0gKG5hbWUpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChWQVJJQUJMRVMsIG5hbWUpKSB7XG4gICAgcmV0dXJuIFZBUklBQkxFU1tuYW1lXTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH07XG4iLCJleHBvcnQgZGVmYXVsdCBbe3NlY3Rpb246J2hvbWUnLGNhdGVnb3J5OidtYWluLW1lbnUnfSx7c2VjdGlvbjonY2xvdGhlcycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3Ytc3dlYXRlci5wbmcnLGxpbmtQYXRoOicjY2xvdGhlcycsc2VjdGlvblRpdGxlOidDbG90aGVzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidjYXAnLHRyYW5zbGF0aW9uOifRiNCw0L/QutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2EtY2FwLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2NhcC5tcDMnLGFsdDonY2FwIGltYWdlJ30se3dvcmQ6J2phY2tldCcsdHJhbnNsYXRpb246J9C60YPRgNGC0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLWphY2tldC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9qYWNrZXQubXAzJyxhbHQ6J2phY2tldCBpbWFnZSd9LHt3b3JkOidzY2FyZicsdHJhbnNsYXRpb246J9GI0LDRgNGEJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2Etc2NhcmYucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2NhcmYubXAzJyxhbHQ6J3NjYXJmIGltYWdlJ30se3dvcmQ6J3Nob2VzJyx0cmFuc2xhdGlvbjon0LHQvtGC0LjQvdC60LgnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1zaG9lcy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zaG9lcy5tcDMnLGFsdDonc2hvZXMgaW1hZ2UnfSx7d29yZDonYmxvdXNlJyx0cmFuc2xhdGlvbjon0LHQu9GD0LfQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtYmxvdXNlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2Jsb3VzZS5tcDMnLGFsdDonYmxvdXNlIGltYWdlJ30se3dvcmQ6J2NvYXQnLHRyYW5zbGF0aW9uOifQv9Cw0LvRjNGC0L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1jb2F0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2NvYXQubXAzJyxhbHQ6J2NvYXQgaW1hZ2UnfSx7d29yZDonZHJlc3MnLHRyYW5zbGF0aW9uOifQv9C70LDRgtGM0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1kcmVzcy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9kcmVzcy5tcDMnLGFsdDonZHJlc3MgaW1hZ2UnfSx7d29yZDonc2hpcnQnLHRyYW5zbGF0aW9uOifRgNGD0LHQsNGI0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LXNoaXJ0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3NoaXJ0Lm1wMycsYWx0OidzaGlydCBpbWFnZSd9XX0se3NlY3Rpb246J2NvbG91cnMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXllbGxvdy5wbmcnLGxpbmtQYXRoOicjY29sb3Vycycsc2VjdGlvblRpdGxlOidDb2xvdXJzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidibGFjaycsdHJhbnNsYXRpb246J9GH0LXRgNC90YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJsYWNrLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2JsYWNrLm1wMycsYWx0OidibGFjayBpbWFnZSd9LHt3b3JkOidibHVlJyx0cmFuc2xhdGlvbjon0YHQuNC90LjQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJsdWUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvYmx1ZS5tcDMnLGFsdDonYmx1ZSBpbWFnZSd9LHt3b3JkOidicm93bicsdHJhbnNsYXRpb246J9C60L7RgNC40YfQvdC10LLRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtYnJvd24ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvYnJvd24ubXAzJyxhbHQ6J2Jyb3duIGltYWdlJ30se3dvcmQ6J2dyZWVuJyx0cmFuc2xhdGlvbjon0LfQtdC70ZHQvdGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ncmVlbi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ncmVlbi5tcDMnLGFsdDonZ3JlZW4gaW1hZ2UnfSx7d29yZDonZ3JleScsdHJhbnNsYXRpb246J9GB0LXRgNGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ncmV5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2dyZXkubXAzJyxhbHQ6J2dyZXkgaW1hZ2UnfSx7d29yZDonb3JhbmdlJyx0cmFuc2xhdGlvbjon0L7RgNCw0L3QttC10LLRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3Ytb3JhbmdlLWMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvb3JhbmdlLm1wMycsYWx0OidvcmFuZ2UgaW1hZ2UnfSx7d29yZDoncGluaycsdHJhbnNsYXRpb246J9GA0L7Qt9C+0LLRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtcGluay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9waW5rLm1wMycsYWx0OidwaW5rIGltYWdlJ30se3dvcmQ6J3JlZCcsdHJhbnNsYXRpb246J9C60YDQsNGB0L3Ri9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtcmVkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL3JlZC5tcDMnLGFsdDoncmVkIGltYWdlJ31dfSx7c2VjdGlvbjonZmFtaWx5JyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1mYW1pbHkucG5nJyxsaW5rUGF0aDonI2ZhbWlseScsc2VjdGlvblRpdGxlOidGYW1pbHknLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2F1bnQnLHRyYW5zbGF0aW9uOifRgtC10YLRjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtYXVudC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2F1bnQubXAzJyxhbHQ6J2F1bnQgaW1hZ2UnfSx7d29yZDonYnJvdGhlcicsdHJhbnNsYXRpb246J9Cx0YDQsNGCJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1icm90aGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvYnJvdGhlci5tcDMnLGFsdDonYnJvdGhlciBpbWFnZSd9LHt3b3JkOidkYWRkeScsdHJhbnNsYXRpb246J9C/0LDQv9CwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1kYWRkeS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2RhZGR5Lm1wMycsYWx0OidkYWRkeSBpbWFnZSd9LHt3b3JkOidncmFuZG1hJyx0cmFuc2xhdGlvbjon0LHQsNCx0YPRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWdyYW5kbWEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9ncmFuZG1hLm1wMycsYWx0OidncmFuZG1hIGltYWdlJ30se3dvcmQ6J2dyYW5kcGEnLHRyYW5zbGF0aW9uOifQtNC10LTRg9GI0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtZ3JhbmRwYS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2dyYW5kcGEubXAzJyxhbHQ6J2dyYW5kcGEgaW1hZ2UnfSx7d29yZDonbXVtbXknLHRyYW5zbGF0aW9uOifQvNCw0LzQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtbXVtbXkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9tdW1teS5tcDMnLGFsdDonbXVtbXkgaW1hZ2UnfSx7d29yZDonc2lzdGVyJyx0cmFuc2xhdGlvbjon0YHQtdGB0YLRgNCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1zaXN0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9zaXN0ZXIubXAzJyxhbHQ6J3Npc3RlciBpbWFnZSd9LHt3b3JkOid1bmNsZScsdHJhbnNsYXRpb246J9C00Y/QtNGPJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi11bmNsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L3VuY2xlLm1wMycsYWx0Oid1bmNsZSBpbWFnZSd9XX0se3NlY3Rpb246J2Zvb2QnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy9hLWhhbWJ1cmdlci5wbmcnLGxpbmtQYXRoOicjZm9vZCcsc2VjdGlvblRpdGxlOidGb29kJyxzZWN0aW9uV29yZHM6W3t3b3JkOidlZ2cnLHRyYW5zbGF0aW9uOifRj9C50YbQvicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC9hLWVnZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9lZ2cubXAzJyxhbHQ6J2VnZyBpbWFnZSd9LHt3b3JkOidpY2UgY3JlYW0nLHRyYW5zbGF0aW9uOifQvNC+0YDQvtC20LXQvdC+0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2QvYS1pY2VjcmVhbS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9pY2UtY3JlYW0ubXAzJyxhbHQ6J2ljZSBjcmVhbSBpbWFnZSd9LHt3b3JkOidicmVhZCcsdHJhbnNsYXRpb246J9GF0LvQtdCxJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtYnJlYWQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvYnJlYWQubXAzJyxhbHQ6J2JyZWFkIGltYWdlJ30se3dvcmQ6J2J1dHRlcicsdHJhbnNsYXRpb246J9C80LDRgdC70L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1idXR0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvYnV0dGVyLm1wMycsYWx0OididXR0ZXIgaW1hZ2UnfSx7d29yZDonY2FrZScsdHJhbnNsYXRpb246J9C/0LjRgNC+0LbQvdC+0LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1jYWtlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2Nha2UubXAzJyxhbHQ6J2Nha2UgaW1hZ2UnfSx7d29yZDonY2hlZXNlJyx0cmFuc2xhdGlvbjon0YHRi9GAJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtY2hlZXNlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2NoZWVzZS5tcDMnLGFsdDonY2hlZXNlIGltYWdlJ30se3dvcmQ6J3BpenphJyx0cmFuc2xhdGlvbjon0L/QuNGG0YbQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LXBpenphLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL3BpenphLm1wMycsYWx0OidwaXp6YSBpbWFnZSd9LHt3b3JkOidzYW5kd2ljaCcsdHJhbnNsYXRpb246J9Cx0YPRgtC10YDQsdGA0L7QtCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LXNhbmR3aWNoLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL3NhbmR3aWNoLm1wMycsYWx0OidzYW5kd2ljaCBpbWFnZSd9XX0se3NlY3Rpb246J2ZydWl0cycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3Ytc3RyYXdiZXJyeS5wbmcnLGxpbmtQYXRoOicjZnJ1aXRzJyxzZWN0aW9uVGl0bGU6J0ZydWl0cycsc2VjdGlvbldvcmRzOlt7d29yZDonYXBwbGUnLHRyYW5zbGF0aW9uOifRj9Cx0LvQvtC60L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLWFwcGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvYXBwbGUubXAzJyxhbHQ6J2FwcGxlIGltYWdlJ30se3dvcmQ6J2NoZXJyeScsdHJhbnNsYXRpb246J9Cy0LjRiNC90Y8nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLWNoZXJyeS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2NoZXJyeS5tcDMnLGFsdDonY2hlcnJ5IGltYWdlJ30se3dvcmQ6J2dyYXBlJyx0cmFuc2xhdGlvbjon0YTQuNCz0YPRgNC90L7QtSDQutCw0YLQsNC90LjQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtZ3JhcGVzLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvZ3JhcGUubXAzJyxhbHQ6J2dyYXBlIGltYWdlJ30se3dvcmQ6J29yYW5nZScsdHJhbnNsYXRpb246J9Cw0L/QtdC70YzRgdC40L0nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLW9yYW5nZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL29yYW5nZS5tcDMnLGFsdDonb3JhbmdlIGltYWdlJ30se3dvcmQ6J3BlYWNoJyx0cmFuc2xhdGlvbjon0L/QtdGA0YHQuNC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1wZWFjaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL3BlYWNoLm1wMycsYWx0OidwZWFjaCBpbWFnZSd9LHt3b3JkOidwaW5lYXBwbGUnLHRyYW5zbGF0aW9uOifQsNC90LDQvdCw0YEnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLXBpbmVhcHBsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL3BpbmVhcHBsZS5tcDMnLGFsdDoncGluZWFwcGxlIGltYWdlJ30se3dvcmQ6J2JhbmFuYScsdHJhbnNsYXRpb246J9Cx0LDQvdCw0L0nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy92LWJhbmFuYS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2JhbmFuYS5tcDMnLGFsdDonYmFuYW5hIGltYWdlJ30se3dvcmQ6J2xlbW9uJyx0cmFuc2xhdGlvbjon0LvQuNC80L7QvScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL3YtbGVtb24ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9sZW1vbi5tcDMnLGFsdDonbGVtb24gaW1hZ2UnfV19LHtzZWN0aW9uOidwZXRzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1wb255LnBuZycsbGlua1BhdGg6JyNwZXRzJyxzZWN0aW9uVGl0bGU6J1BldHMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2hhbXN0ZXInLHRyYW5zbGF0aW9uOifRhdC+0LzRj9C6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2EtaGFtc3Rlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9oYW1zdGVyLm1wMycsYWx0OidoYW1zdGVyIGltYWdlJ30se3dvcmQ6J3BhcnJvdCcsdHJhbnNsYXRpb246J9C/0L7Qv9GD0LPQsNC5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2EtcGFycm90LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3BhcnJvdC5tcDMnLGFsdDoncGFycm90IGltYWdlJ30se3dvcmQ6J3R1cnRsZScsdHJhbnNsYXRpb246J9GH0LXRgNC10L/QsNGF0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvYS10dXJ0bGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvdHVydGxlLm1wMycsYWx0Oid0dXJ0bGUgaW1hZ2UnfSx7d29yZDona2l0dGVuJyx0cmFuc2xhdGlvbjon0LrQvtGC0ZHQvdC+0LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvaC1raXR0ZW4ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMva2l0dGVuLm1wMycsYWx0OidraXR0ZW4gaW1hZ2UnfSx7d29yZDoncHVwcHknLHRyYW5zbGF0aW9uOifRidC10L3QvtC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2gtcHVwcHkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvcHVwcHkubXAzJyxhbHQ6J3B1cHB5IGltYWdlJ30se3dvcmQ6J2ZlcnJldCcsdHJhbnNsYXRpb246J9GF0L7RgNC10LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvdi1mZXJyZXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvZmVycmV0Lm1wMycsYWx0OidmZXJyZXQgaW1hZ2UnfSx7d29yZDonZmlzaCcsdHJhbnNsYXRpb246J9GA0YvQsdCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtZmlzaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9maXNoLm1wMycsYWx0OidmaXNoIGltYWdlJ30se3dvcmQ6J21vdXNlJyx0cmFuc2xhdGlvbjon0LzRi9GI0YwnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvdi1tb3VzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9tb3VzZS5tcDMnLGFsdDonbW91c2UgaW1hZ2UnfV19LHtzZWN0aW9uOidzY2hvb2wnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXB1cGlsLnBuZycsbGlua1BhdGg6JyNzY2hvb2wnLHNlY3Rpb25UaXRsZTonU2Nob29sJyxzZWN0aW9uV29yZHM6W3t3b3JkOidib2FyZCcsdHJhbnNsYXRpb246J9C00L7RgdC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWJvYXJkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvYm9hcmQubXAzJyxhbHQ6J2JvYXJkIGltYWdlJ30se3dvcmQ6J2Jvb2snLHRyYW5zbGF0aW9uOifQutC90LjQs9CwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ib29rLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvYm9vay5tcDMnLGFsdDonYm9vayBpbWFnZSd9LHt3b3JkOidjYWxjdWxhdG9yJyx0cmFuc2xhdGlvbjon0YfQtdGA0LXQv9Cw0YXQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtY2FsY3VsYXRvci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2NhbGN1bGF0b3IubXAzJyxhbHQ6J2NhbGN1bGF0b3IgaW1hZ2UnfSx7d29yZDonY2xhc3Nyb29tJyx0cmFuc2xhdGlvbjon0YjQutC+0LvRjNC90YvQuSDQutC70LDRgdGBJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1jbGFzc3Jvb20ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9jbGFzc3Jvb20ubXAzJyxhbHQ6J2NsYXNzcm9vbSBpbWFnZSd9LHt3b3JkOidtYXAnLHRyYW5zbGF0aW9uOifQutCw0YDRgtCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1tYXAucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9tYXAubXAzJyxhbHQ6J21hcCBpbWFnZSd9LHt3b3JkOidub3RlYm9vaycsdHJhbnNsYXRpb246J9GC0LXRgtGA0LDQtNGMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ub3RlYm9vay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL25vdGVib29rLm1wMycsYWx0Oidub3RlYm9vayBpbWFnZSd9LHt3b3JkOidzY2hvb2xiYWcnLHRyYW5zbGF0aW9uOifQv9C+0YDRgtGE0LXQu9GMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1zY2hvb2xiYWcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9zY2hvb2xiYWcubXAzJyxhbHQ6J3NjaG9vbGJhZyBpbWFnZSd9LHt3b3JkOid0ZWFjaGVyJyx0cmFuc2xhdGlvbjon0YPRh9C40YLQtdC70YwnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LXRlYWNoZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC90ZWFjaGVyLm1wMycsYWx0Oid0ZWFjaGVyIGltYWdlJ31dfSx7c2VjdGlvbjonc3BvcnQnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXRlbm5pcy5wbmcnLGxpbmtQYXRoOicjc3BvcnQnLHNlY3Rpb25UaXRsZTonU3BvcnQnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2Jhc2tldGJhbGwnLHRyYW5zbGF0aW9uOifQsdCw0YHQutC10YLQsdC+0LsnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtYmFza2V0YmFsbC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvYmFza2V0YmFsbC5tcDMnLGFsdDonYmFza2V0YmFsbCBpbWFnZSd9LHt3b3JkOidjeWNsaW5nJyx0cmFuc2xhdGlvbjon0LXQt9C00LAg0L3QsCDQstC10LvQvtGB0LjQv9C10LTQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1jeWNsaW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9jeWNsaW5nLm1wMycsYWx0OidjeWNsaW5nIGltYWdlJ30se3dvcmQ6J2ZpZ3VyZSBza2F0aW5nJyx0cmFuc2xhdGlvbjon0YTQuNCz0YPRgNC90L7QtSDQutCw0YLQsNC90LjQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1maWd1cmUtc2thdGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvZmlndXJlLXNrYXRpbmcubXAzJyxhbHQ6J2ZpZ3VyZSBza2F0aW5nIGltYWdlJ30se3dvcmQ6J2Zvb3RiYWxsJyx0cmFuc2xhdGlvbjon0YTRg9GC0LHQvtC7JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWZvb3RiYWxsLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9mb290YmFsbC5tcDMnLGFsdDonZm9vdGJhbGwgaW1hZ2UnfSx7d29yZDonaG9ja2V5Jyx0cmFuc2xhdGlvbjon0YXQvtC60LrQtdC5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWhvY2tleS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvaG9ja2V5Lm1wMycsYWx0Oidob2NrZXkgaW1hZ2UnfSx7d29yZDonc2tpaW5nJyx0cmFuc2xhdGlvbjon0LvRi9C20L3Ri9C5INGB0L/QvtGA0YInLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3Ytc2tpaW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9za2lpbmcubXAzJyxhbHQ6J3NraWluZyBpbWFnZSd9LHt3b3JkOidzd2ltbWluZycsdHJhbnNsYXRpb246J9C/0LvQsNCy0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3Ytc3dpbW1pbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L3N3aW1taW5nLm1wMycsYWx0Oidzd2ltbWluZyBpbWFnZSd9LHt3b3JkOidib3hpbmcnLHRyYW5zbGF0aW9uOifQsdC+0LrRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1ib3hpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2JveGluZy5tcDMnLGFsdDonYm94aW5nIGltYWdlJ31dfV0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlT3ZlcmxheSB9IGZyb20gJy4vY29tcG9uZW50cy9vdmVybGF5JztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSAnLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZU1vZGFsV2luZG93IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsV2luZG93JztcbmltcG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NQYWdlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRpc3RpY3NQYWdlJztcbmltcG9ydCBzZXRFdmVudExpc3RlbmVycyBmcm9tICcuL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBzZXRHbG9iYWxWYWx1ZXMsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBhcHBXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZU92ZXJsYXkoKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVNb2RhbFdpbmRvdygpKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZU1haW4oKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVGb290ZXIoKSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBzZXRHbG9iYWxWYWx1ZXMoKTtcbiAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBHRVRfVkFSKCdtYWluU2VjdGlvbicpO1xuICBtYWluU2VjdGlvbi5hcHBlbmQoY3JlYXRlU3RhdGlzdGljc1BhZ2UoKSk7XG4gIHNldEV2ZW50TGlzdGVuZXJzKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiY3JlYXRlQ2FyZEl0ZW1JbWciLCJpbWdQYXRoIiwiaW1nQWx0IiwiaW1nQ2xhc3MiLCJjYXJkSXRlbUltZyIsImNsYXNzTGlzdCIsImFkZCIsInNyYyIsImFsdCIsImNyZWF0ZUNhcmRJdGVtIiwiY2FyZFRpdGxlIiwiY2FyZFNlY3Rpb24iLCJjYXJkVHJhbnNsYXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzb3VuZFBhdGgiLCJjYXJkSXRlbSIsImRhdGFzZXQiLCJzZWN0aW9uIiwic291bmQiLCJjYXJkSW5uZXIiLCJjYXJkRnJvbnQiLCJjYXJkRnJvbnRJbWdDb250YWluZXIiLCJjYXJkRnJvbnRJbWciLCJhcHBlbmQiLCJjYXJkRnJvbnRUaXRsZSIsInRleHRDb250ZW50IiwiY2FyZEZyb250Um90YXRlQnRuIiwidHlwZSIsImNhcmRCYWNrIiwiY2FyZEJhY2tJbWdDb250YWluZXIiLCJjYXJkQmFja0ltZyIsImNhcmRCYWNrVGl0bGUiLCJjcmVhdGVGb290ZXIiLCJmb290ZXJFbGVtZW50IiwicGFyYWdyYXBoIiwicGFyYWdyYXBoTGluayIsInRhcmdldCIsImhyZWYiLCJmb290ZXJDb250YWluZXIiLCJkYXRhIiwiY3JlYXRlTmF2TWVudSIsImNyZWF0ZUxvZ28iLCJjcmVhdGVUb2dnbGUiLCJjcmVhdGVOYXZNZW51QnRuIiwiY3JlYXRlU3RhdGlzdGljc0J0biIsImNyZWF0ZUhlYWRlciIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJMb2dvIiwiaGVhZGVyQnRuc0NvbnRhaW5lciIsInRvZ2dsZUJ0biIsInN0YXRCdG4iLCJoZWFkZXJOYXYiLCJuYXZNZW51QnRuIiwibmF2aWdhdGlvbk1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IiwiaGlkZVN0YXRUYWJsZSIsIkdFVF9WQVIiLCJsb2dvVGV4dCIsImxvZ29IcmVmIiwiaGVhZGVyTG9nb0xpbmsiLCJsb2dvRnVuY3Rpb25hbGl0eSIsInNldExvZ29FdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24iLCJpc01haW5NZW51IiwiaXNDYXJkIiwiaXNUcmFpbk1vZGUiLCJpc1BsYXlNb2RlIiwidHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSIsImlzR2FtZVN0YXJ0ZWQiLCJpc0FjdGl2ZUNhcmQiLCJ1cGRhdGVTb3VuZExpc3QiLCJhZGRTY29yZUljb24iLCJwbGF5U291bmQiLCJpc0dhbWVPdmVyIiwiaXNHYW1lT3ZlclN1Y2Nlc3MiLCJ1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEiLCJ1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSIsInNob3dPdmVybGF5IiwiY3JlYXRlUGxheVJlcGVhdEJ0biIsInBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5Iiwic2hvd01vZGFsV2luZG93IiwiaGlkZU1vZGFsV2luZG93IiwiY3JlYXRlTWFpbiIsIm1haW5FbGVtZW50IiwibWFpbkNvbnRhaW5lciIsInNjb3JlTGluZSIsImNhdGVnb3J5TmFtZSIsImNhcmRMaXN0IiwiY2F0ZWdvcnkiLCJtb2RlIiwicGxheVJlcGVhdEJ0biIsIm1haW5NZW51RnVuY3Rpb25hbGl0eSIsImNsb3Nlc3QiLCJtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkiLCJldmVudCIsImNhcmRzTGlzdCIsImN1cnJlbnRDYXJkIiwiY3VycmVudENhcmRGcm9udCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50Q2FyZFNvdW5kIiwiY3VycmVudFNvdW5kIiwiYXQiLCJjb3JyZWN0QW5zd2VyU291bmQiLCJzdWNjZXNzU291bmQiLCJjb3JyZWN0SWNvblNyYyIsIndyb25nSWNvblNyYyIsIndyb25nQW5zd2VyU291bmQiLCJmYWlsdXJlU291bmQiLCJjb250YWlucyIsInNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSIsImhpZGVPdmVybGF5IiwiY3JlYXRlTW9kYWxXaW5kb3ciLCJtb2RhbFdpbmRvdyIsImljb24iLCJ0ZXh0IiwiaDMiLCJtb2RhbFdpbmRvd0ljb24iLCJtb2RhbFdpbmRvd1RleHQiLCJtb2RhbFdpbmRvd2hTY29yZSIsImRvY3VtZW50Iiwic2NvcmVMaW5lSWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW1vdW50T2ZNaXN0YWtlcyIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsIml0ZW0iLCJpbmRleE9mIiwiY29uY2F0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNyZWF0ZU5hdk1lbnVJdGVtIiwiZGF0YVNldCIsIm5hdk1lbnVVbCIsImkiLCJvcGVuTmF2TWVudSIsImhlYWRlck1lbnUiLCJuYXZNZW51TGlua3MiLCJmb3JFYWNoIiwibGluayIsInRhYkluZGV4IiwiY2xvc2VOYXZNZW51Iiwic2V0TmF2TWVudUFjdGl2ZVN0YXRlIiwibGlua3MiLCJsaW5rU2VjdGlvbiIsInJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSIsImhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5IiwiaGFtYnVyZ2VyQnRuIiwiY2xpY2siLCJzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciIsInNwYW4xIiwic3BhbjIiLCJzcGFuMyIsIm5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IiwiY2FwaXRhbGl6ZUZpcnN0V29yZCIsImxpbmtOYW1lIiwibGkiLCJjcmVhdGVPdmVybGF5Iiwib3ZlcmxheUVsZW1lbnQiLCJvdmVybGF5IiwiYm9keSIsIm92ZXJsYXlGdW5jdGlvbmFsaXR5IiwiYnV0dG9uIiwic291bmRzTGlzdCIsInJlc2V0UGxheVJlcGVhdEJ0blN0YXRlIiwic2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkiLCJjcmVhdGVTY29yZUxpbmVJY29uIiwic2NvcmVJY29uIiwiY3JlYXRlU3RhdGlzdGljc1RhYmxlIiwic2V0R2xvYmFsVmFsdWVzIiwic2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSIsInNob3dTdGF0VGFibGUiLCJTRVRfVkFSIiwic3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJzdGF0aXN0aWNzUGFnZSIsInN0YXRpc3RpY3NQYWdlQ29udGFpbmVyIiwic3RhdGlzdGljc1RhYmxlIiwic3RhdGlzdGljRGF0YSIsInNsaWNlIiwicmVwZWF0QnRuIiwic29ydCIsImEiLCJiIiwiZWxlbTEiLCJlbGVtMiIsInJlcGVhdGVkRGF0YSIsIm1hcCIsImVsZW0iLCJUcmFuc2xhdGlvbiIsInJlcGVhdGVkRGF0YVNldCIsInNlY3Rpb25Xb3JkcyIsImZsYXQiLCJpbmNsdWRlcyIsInRyYW5zbGF0aW9uIiwiZGlzYWJsZWQiLCJjcmVhdGVEaWZmV29yZHNTZWN0aW9uIiwiY3JlYXRlU3RhdGlzdGljc1BhZ2UiLCJzdGF0aXN0aWNzRGF0YSIsInN0YXRpc3RpY3NQYWdlQnV0dG9ucyIsInJlc2V0QnRuIiwic3RhdGlzdGljc1BhZ2VUYWJsZSIsInJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJyZXNldFN0YXRCdG4iLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHkiLCJyZXBlYXREaWZmV29yZHNCdG4iLCJ1cGRhdGVNb2RlIiwiYXJpYVByZXNzZWQiLCJ0b2dnbGVNb2RlVHJhaW4iLCJ0b2dnbGVNb2RlUGxheSIsInRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkiLCJzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJuYW1lIiwiZWxlbWVudCIsImNhcmQiLCJpY29uc0Ftb3VudCIsImNhcmRzQW1vdW50IiwiY2xlYXJDYXJkc0xpc3RDb250YWluZXIiLCJjb250YWluZXIiLCJpbm5lckhUTUwiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsInNodWZmbGVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIl9yZWYiLCJwb3AiLCJjcmVhdGVOZXdTb3VuZHNMaXN0IiwiY2FyZHMiLCJwdXNoIiwicGVyY2VudENvcnJlY3RBbnN3ZXJzIiwib2JqIiwicm91bmQiLCJDb3JyZWN0IiwiSW5jb3JyZWN0IiwiY3JlYXRlU3RhcnRpbmdTdGF0aXN0aWNEYXRhIiwicmVzdWx0IiwiQ2F0ZWdvcnkiLCJzZWN0aW9uVGl0bGUiLCJXb3JkIiwid29yZCIsIlRyYWluZWQiLCJjcmVhdGVTdGF0aXN0aWNzRGF0YSIsInNhdmVkRGF0YSIsImdldEl0ZW0iLCJzdGFydGluZ0RhdGEiLCJzdGFydGluZ0RhdGFUb0pzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImFwcGx5IiwiY3VycmVudERhdGEiLCJwYXJzZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicmVzZXRDYXJkc1N0YXRlIiwibWFpblNlY3Rpb24iLCJtYWluU2VjdGlvbkNvbnRhaW5lciIsInJlc2V0Q2FyZHNTb3VuZHNMaXN0IiwicmVzZXRTY29yZUxpbmUiLCJwbGF5TW9kZSIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQiLCJzdGF0aXN0aWNzVGFibGVIZWFkIiwiaGVhZGVyUm93IiwiaGVhZGVyUm93RGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoZWFkZXJSb3dUaCIsImNvbHVtbiIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkiLCJzdGF0aXN0aWNzVGFibGVCb2R5IiwidEJvZHlSb3ciLCJ0Qm9keVJvd0RhdGEiLCJ2YWx1ZXMiLCJyb3dDYXRlZ29yeSIsInJvd1dvcmQiLCJyb3ciLCJ2YWx1ZSIsImluZGV4IiwidEJvZHlSb3dDZWxsIiwiY2VsbCIsInN0YXRUYWJsZSIsInN0YXRUYWJsZUhlYWRlciIsInN0YXRUYWJsZUhlYWRlckNlbGxzIiwic3RhdFRhYmxlQm9keSIsInNvcnRUeXBlIiwic29ydENhdGVnb3J5Iiwic29ydENhdGVnb3J5Q2VsbHMiLCJzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcyIsImFyZUVtcHR5Q2VsbHMiLCJldmVyeSIsIm51bTEiLCJudW0yIiwibG9jYWxlQ29tcGFyZSIsInJldmVyc2UiLCJjdXJyZW50SXRlbSIsImNhcmRMaXN0SXRlbXMiLCJfY3VycmVudERhdGEkZmlsdGVyIiwiX2N1cnJlbnREYXRhJGZpbHRlcjIiLCJfc2xpY2VkVG9BcnJheSIsImN1cnJlbnREYXRhVG9Kc29uIiwic3RhcnRJbWFnZSIsImltYWdlIiwiYXVkaW9TcmMiLCJzZWN0aW9uRGF0YSIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdGF0ZUNhcmQiLCJyb3RhdGVCYWNrIiwicHJlcGVuZCIsIlZBUklBQkxFUyIsIm1vZGFsV2luZG93SWNvbldpbiIsIm1vZGFsV2luZG93SWNvbkxvc2UiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==