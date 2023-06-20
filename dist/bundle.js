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
var createCardItemTitle = function createCardItemTitle(titleText, titleClass) {
  var cardTitle = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
  cardTitle.classList.add(titleClass);
  cardTitle.classList.add('card-title');
  cardTitle.textContent = titleText;
  return cardTitle;
};
var createCardRotateBtn = function createCardRotateBtn(rotateBtnClass, rotateBtnText) {
  var cardRotateBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  cardRotateBtn.classList.add(rotateBtnClass);
  cardRotateBtn.classList.add('rotate-btn');
  cardRotateBtn.type = 'button';
  cardRotateBtn.textContent = rotateBtnText;
  return cardRotateBtn;
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
  var cardFrontImg = createCardItemImg(imgPath, imgAlt, 'card-front__pic-img');
  cardFrontImgContainer.append(cardFrontImg);
  cardFront.append(cardFrontImgContainer);

  // create card front title
  var cardFrontTitle = createCardItemTitle(cardTitle, 'card-front__title');
  cardFront.append(cardFrontTitle);

  // create card front rotate button
  var cardFrontRotateBtn = createCardRotateBtn('card-front__rotate', 'rotate button');
  cardFront.append(cardFrontRotateBtn);

  // create card back side
  var cardBack = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  cardBack.classList.add('card-back');

  // create card back image container
  var cardBackImgContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  cardBackImgContainer.classList.add('card-back__pic');
  cardBackImgContainer.classList.add('card-pic');

  // create card back image
  var cardBackImg = createCardItemImg(imgPath, imgAlt, 'card-back__pic-img');
  cardBackImgContainer.append(cardBackImg);
  cardBack.append(cardBackImgContainer);

  // create card back title
  var cardBackTitle = createCardItemTitle(cardTranslation, 'card-back__title');
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
  data: 'initial value',
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











fetch('../assets/data/data.json').then(function (data1) {
  return console.log(data1);
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUM7QUFDakN5RixRQUFRLENBQUMxRCxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xENEcsOERBQWUsRUFBRTtFQUNqQnBILHFFQUFzQixDQUFDaEIsOERBQUksQ0FBQztFQUM1QixJQUFNZ08sV0FBVyxHQUFHOU0sMERBQU8sQ0FBQyxhQUFhLENBQUM7RUFDMUM4TSxXQUFXLENBQUM5TyxNQUFNLENBQUM2SyxnRkFBb0IsRUFBRSxDQUFDO0VBQzFDaUIseURBQWlCLEVBQUU7QUFDckIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvY2FyZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbFdpbmRvdy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudUJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3BsYXlSZXBlYXRCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3Njb3JlTGluZUljb24uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3N0YXRpc3RpY3NCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3N0YXRpc3RpY3NQYWdlLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy90b2dnbGVCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9hc3NldHMvZGF0YS9kYXRhLmpzb24iLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzM2MTUiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlQ2FyZEl0ZW1JbWcgPSAoaW1nUGF0aCwgaW1nQWx0LCBpbWdDbGFzcykgPT4ge1xuICBjb25zdCBjYXJkSXRlbUltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjYXJkSXRlbUltZy5jbGFzc0xpc3QuYWRkKGltZ0NsYXNzKTtcbiAgY2FyZEl0ZW1JbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgY2FyZEl0ZW1JbWcuc3JjID0gaW1nUGF0aDtcbiAgY2FyZEl0ZW1JbWcuYWx0ID0gaW1nQWx0O1xuXG4gIHJldHVybiBjYXJkSXRlbUltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmRJdGVtVGl0bGUgPSAodGl0bGVUZXh0LCB0aXRsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKHRpdGxlQ2xhc3MpO1xuICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG5cbiAgcmV0dXJuIGNhcmRUaXRsZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmRSb3RhdGVCdG4gPSAocm90YXRlQnRuQ2xhc3MsIHJvdGF0ZUJ0blRleHQpID0+IHtcbiAgY29uc3QgY2FyZFJvdGF0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYXJkUm90YXRlQnRuLmNsYXNzTGlzdC5hZGQocm90YXRlQnRuQ2xhc3MpO1xuICBjYXJkUm90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idG4nKTtcbiAgY2FyZFJvdGF0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGNhcmRSb3RhdGVCdG4udGV4dENvbnRlbnQgPSByb3RhdGVCdG5UZXh0O1xuXG4gIHJldHVybiBjYXJkUm90YXRlQnRuO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZEl0ZW0gPSAoaW1nUGF0aCwgaW1nQWx0LCBjYXJkVGl0bGUsIGNhcmRTZWN0aW9uLCBjYXJkVHJhbnNsYXRpb24gPSAnJywgc291bmRQYXRoID0gJycpID0+IHtcbiAgLy8gY3JlYXRlIGNhcmQgaXRlbVxuICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1saXN0X19pdGVtJyk7XG4gIGNhcmRJdGVtLmRhdGFzZXQuc2VjdGlvbiA9IGNhcmRTZWN0aW9uO1xuICBjYXJkSXRlbS5kYXRhc2V0LnNvdW5kID0gc291bmRQYXRoO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGlubmVyXG4gIGNvbnN0IGNhcmRJbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkSW5uZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbm5lcicpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHNpZGVcbiAgY29uc3QgY2FyZEZyb250ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRGcm9udC5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250Jyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgaW1hZ2UgY29udGFpbmVyXG4gIGNvbnN0IGNhcmRGcm9udEltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkRnJvbnRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fcGljJyk7XG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IGltYWdlXG4gIGNvbnN0IGNhcmRGcm9udEltZyA9IGNyZWF0ZUNhcmRJdGVtSW1nKGltZ1BhdGgsIGltZ0FsdCwgJ2NhcmQtZnJvbnRfX3BpYy1pbWcnKTtcblxuICBjYXJkRnJvbnRJbWdDb250YWluZXIuYXBwZW5kKGNhcmRGcm9udEltZyk7XG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250SW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCB0aXRsZVxuICBjb25zdCBjYXJkRnJvbnRUaXRsZSA9IGNyZWF0ZUNhcmRJdGVtVGl0bGUoY2FyZFRpdGxlLCAnY2FyZC1mcm9udF9fdGl0bGUnKTtcblxuICBjYXJkRnJvbnQuYXBwZW5kKGNhcmRGcm9udFRpdGxlKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCByb3RhdGUgYnV0dG9uXG4gIGNvbnN0IGNhcmRGcm9udFJvdGF0ZUJ0biA9IGNyZWF0ZUNhcmRSb3RhdGVCdG4oJ2NhcmQtZnJvbnRfX3JvdGF0ZScsICdyb3RhdGUgYnV0dG9uJyk7XG5cbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRSb3RhdGVCdG4pO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgc2lkZVxuICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIGltYWdlIGNvbnRhaW5lclxuICBjb25zdCBjYXJkQmFja0ltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2tfX3BpYycpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgaW1hZ2VcbiAgY29uc3QgY2FyZEJhY2tJbWcgPSBjcmVhdGVDYXJkSXRlbUltZyhpbWdQYXRoLCBpbWdBbHQsICdjYXJkLWJhY2tfX3BpYy1pbWcnKTtcblxuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5hcHBlbmQoY2FyZEJhY2tJbWcpO1xuXG4gIGNhcmRCYWNrLmFwcGVuZChjYXJkQmFja0ltZ0NvbnRhaW5lcik7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayB0aXRsZVxuICBjb25zdCBjYXJkQmFja1RpdGxlID0gY3JlYXRlQ2FyZEl0ZW1UaXRsZShjYXJkVHJhbnNsYXRpb24sICdjYXJkLWJhY2tfX3RpdGxlJyk7XG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrVGl0bGUpO1xuXG4gIGNhcmRJbm5lci5hcHBlbmQoY2FyZEZyb250KTtcbiAgY2FyZElubmVyLmFwcGVuZChjYXJkQmFjayk7XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRJbm5lcik7XG4gIHJldHVybiBjYXJkSXRlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRJdGVtO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIGZvb3RlclxuICBjb25zdCBmb290ZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgLy8gY3JlYXRlIGZvb3RlciBwYXJhZ3JhcGhcbiAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgJztcblxuICAvLyBjcmVhdGUgZm9vdGVyIHBhcmFncmFwaCBsaW5rXG4gIGNvbnN0IHBhcmFncmFwaExpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIHBhcmFncmFwaExpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHRfX2xpbmsnKTtcbiAgcGFyYWdyYXBoTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgcGFyYWdyYXBoTGluay50ZXh0Q29udGVudCA9ICdBbnRvbiBTdWtoYWRvbGV0cyc7XG4gIHBhcmFncmFwaExpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vU3Vob2RvbGVjQSc7XG5cbiAgcGFyYWdyYXBoLmFwcGVuZChwYXJhZ3JhcGhMaW5rKTtcblxuICAvLyBjcmVhdGUgZm9vdGVyIGNvbnRhaW5lclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmQocGFyYWdyYXBoKTtcblxuICBmb290ZXJFbGVtZW50LmFwcGVuZChmb290ZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBmb290ZXJFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xuIiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgY3JlYXRlTmF2TWVudSB9IGZyb20gJy4vbmF2TWVudSc7XG5pbXBvcnQgeyBjcmVhdGVMb2dvIH0gZnJvbSAnLi9sb2dvJztcbmltcG9ydCB7IGNyZWF0ZVRvZ2dsZSB9IGZyb20gJy4vdG9nZ2xlQnRuJztcbmltcG9ydCB7IGNyZWF0ZU5hdk1lbnVCdG4gfSBmcm9tICcuL25hdk1lbnVCdG4nO1xuaW1wb3J0IHsgY3JlYXRlU3RhdGlzdGljc0J0biB9IGZyb20gJy4vc3RhdGlzdGljc0J0bic7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgbG9nb1xuICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlTG9nbygnRW5nbGlzaCBmb3Iga2lkcycsICcjaG9tZScpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgYnV0dG9ucyBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQnRuc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJCdG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlVG9nZ2xlKCk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBzdGF0aXN0aWNzIGJ1dHRvblxuICBjb25zdCBzdGF0QnRuID0gY3JlYXRlU3RhdGlzdGljc0J0bigpO1xuXG4gIGhlYWRlckJ0bnNDb250YWluZXIuYXBwZW5kKHRvZ2dsZUJ0bik7XG4gIGhlYWRlckJ0bnNDb250YWluZXIuYXBwZW5kKHN0YXRCdG4pO1xuXG4gIC8vIGNyZWF0ZSBuYXZcbiAgY29uc3QgaGVhZGVyTmF2ID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGhlYWRlck5hdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbmF2Jyk7XG5cbiAgLy8gY3JlYXRlIG5hdiBtZW51IGJ1dHRvblxuICBjb25zdCBuYXZNZW51QnRuID0gY3JlYXRlTmF2TWVudUJ0bigpO1xuXG4gIC8vIGNyZWF0ZSBuYXYgbWVudVxuICBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IGNyZWF0ZU5hdk1lbnUoZGF0YSk7XG5cbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZNZW51QnRuKTtcbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZpZ2F0aW9uTWVudSk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlck5hdik7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTG9nbyk7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyQnRuc0NvbnRhaW5lcik7XG4gIGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LCBoaWRlU3RhdFRhYmxlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlTG9nbyA9IChsb2dvVGV4dCwgbG9nb0hyZWYpID0+IHtcbiAgLy8gY3JlYXRlIGxvZ29cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcblxuICBjb25zdCBoZWFkZXJMb2dvTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaGVhZGVyTG9nb0xpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ29fX2xpbmsnKTtcbiAgaGVhZGVyTG9nb0xpbmsudGV4dENvbnRlbnQgPSBsb2dvVGV4dDtcbiAgaGVhZGVyTG9nb0xpbmsuaHJlZiA9IGxvZ29IcmVmO1xuXG4gIGhlYWRlckxvZ28uYXBwZW5kKGhlYWRlckxvZ29MaW5rKTtcblxuICByZXR1cm4gaGVhZGVyTG9nbztcbn07XG5cbmNvbnN0IGxvZ29GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBoaWRlU3RhdFRhYmxlKCk7XG4gIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG59O1xuXG5jb25zdCBzZXRMb2dvRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyTG9nbyA9IEdFVF9WQVIoJ2hlYWRlckxvZ28nKTtcbiAgaGVhZGVyTG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ29GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxvZ28sIHNldExvZ29FdmVudExpc3RlbmVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24sIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIGlzR2FtZVN0YXJ0ZWQsXG4gIGlzQWN0aXZlQ2FyZCwgdXBkYXRlU291bmRMaXN0LCBhZGRTY29yZUljb24sIHBsYXlTb3VuZCwgaXNHYW1lT3ZlcixcbiAgaXNHYW1lT3ZlclN1Y2Nlc3MsIHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSxcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlIH0gZnJvbSAnLi9uYXZNZW51JztcbmltcG9ydCB7IHNob3dPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7IGNyZWF0ZVBsYXlSZXBlYXRCdG4sIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCB7IHNob3dNb2RhbFdpbmRvdywgaGlkZU1vZGFsV2luZG93IH0gZnJvbSAnLi9tb2RhbFdpbmRvdyc7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBtYWluIGVsZW1lbnRcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAvLyBjcmVhdGUgbWFpbiBjb250YWluZXJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIC8vIGNyZWF0ZSBzY29yZSBsaW5lXG4gIGNvbnN0IHNjb3JlTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY29yZUxpbmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUtbGluZScpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKHNjb3JlTGluZSk7XG5cbiAgLy8gY3JlYXRlIGNhdGVnb3J5IG5hbWVcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY2F0ZWdvcnlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LW5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gJyc7XG5cbiAgLy8gY2FyZHMgbGlzdFxuICBjb25zdCBjYXJkTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNhcmRMaXN0LmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWxpc3QnKTtcbiAgY2FyZExpc3QuZGF0YXNldC5jYXRlZ29yeSA9ICcnO1xuICBjYXJkTGlzdC5kYXRhc2V0Lm1vZGUgPSAnJztcblxuICAvLyBjcmVhdGUgcGxheVJlcGVhdCBidXR0b25cbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IGNyZWF0ZVBsYXlSZXBlYXRCdG4oKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZChjYXRlZ29yeU5hbWUpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChjYXJkTGlzdCk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKHBsYXlSZXBlYXRCdG4pO1xuXG4gIG1haW5FbGVtZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbkVsZW1lbnQ7XG59O1xuXG5jb25zdCBtYWluTWVudUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHsgc2VjdGlvbiB9ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKS5kYXRhc2V0O1xuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uKGRhdGEsIHNlY3Rpb24pO1xuICB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZShzZWN0aW9uKTtcbn07XG5cbmNvbnN0IG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb25zdCBjYXJkSW5uZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtaW5uZXInKTtcbiAgaWYgKGlzTWFpbk1lbnUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KSkge1xuICAgIG1haW5NZW51RnVuY3Rpb25hbGl0eSh0YXJnZXQpO1xuICB9IGVsc2UgaWYgKCFpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNUcmFpbk1vZGUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KSkge1xuICAgIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHkodGFyZ2V0LCBjYXJkSW5uZXIpO1xuICB9IGVsc2UgaWYgKCFpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNQbGF5TW9kZShjYXJkc0xpc3QpICYmIGlzQ2FyZCh0YXJnZXQpXG4gICAgJiYgaXNHYW1lU3RhcnRlZCgpKSB7XG4gICAgY29uc3QgY3VycmVudENhcmQgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkRnJvbnQgPSBjdXJyZW50Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1mcm9udCcpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkU291bmQgPSBjdXJyZW50Q2FyZC5kYXRhc2V0LnNvdW5kO1xuICAgIGNvbnN0IGN1cnJlbnRTb3VuZCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKS5hdCgtMSk7XG4gICAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvY29ycmVjdC1jaG9pY2UubXAzJztcbiAgICBjb25zdCBzdWNjZXNzU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvc3VjY2Vzcy5tcDMnO1xuICAgIGNvbnN0IGNvcnJlY3RJY29uU3JjID0gJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvY29ycmVjdC5wbmcnO1xuICAgIGNvbnN0IHdyb25nSWNvblNyYyA9ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZyc7XG4gICAgY29uc3Qgd3JvbmdBbnN3ZXJTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9uZWdhdGl2ZV9iZWVwcy5tcDMnO1xuICAgIGNvbnN0IGZhaWx1cmVTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9mYWlsdXJlLm1wMyc7XG4gICAgaWYgKGlzQWN0aXZlQ2FyZChjdXJyZW50Q2FyZEZyb250KSAmJiAhcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgICAgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhKCdwbGF5JywgY3VycmVudENhcmQsIGN1cnJlbnRDYXJkU291bmQgPT09IGN1cnJlbnRTb3VuZCk7XG4gICAgICBpZiAoY3VycmVudENhcmRTb3VuZCA9PT0gY3VycmVudFNvdW5kKSB7XG4gICAgICAgIGN1cnJlbnRDYXJkRnJvbnQuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgYWRkU2NvcmVJY29uKGN1cnJlbnRDYXJkLCBjb3JyZWN0SWNvblNyYyk7XG4gICAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgY29ycmVjdEFuc3dlclNvdW5kKTtcbiAgICAgICAgdXBkYXRlU291bmRMaXN0KCk7XG4gICAgICAgIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KHBsYXlSZXBlYXRCdG4pO1xuICAgICAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgc2hvd092ZXJsYXkoKTtcbiAgICAgICAgICBpZiAoaXNHYW1lT3ZlclN1Y2Nlc3MoKSkge1xuICAgICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBzdWNjZXNzU291bmQpO1xuICAgICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgICAgICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBmYWlsdXJlU291bmQpO1xuICAgICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgICAgICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFNjb3JlSWNvbihjdXJyZW50Q2FyZCwgd3JvbmdJY29uU3JjKTtcbiAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCB3cm9uZ0Fuc3dlclNvdW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNhcmRzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVNYWluLCBtYWluTWVudUZ1bmN0aW9uYWxpdHksIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSxcbiAgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGlzR2FtZU92ZXJTdWNjZXNzLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgaGlkZU92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXknO1xuXG5jb25zdCBjcmVhdGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93Jyk7XG5cbiAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19faWNvbicpO1xuICBpY29uLnNyYyA9ICcnO1xuICBpY29uLmFsdCA9ICdpY29uJztcblxuICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19fdGV4dCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgY29uc3QgaDMgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfX3Njb3JlJyk7XG5cbiAgbW9kYWxXaW5kb3cuYXBwZW5kKGljb24pO1xuICBtb2RhbFdpbmRvdy5hcHBlbmQodGV4dCk7XG4gIG1vZGFsV2luZG93LmFwcGVuZChoMyk7XG5cbiAgcmV0dXJuIG1vZGFsV2luZG93O1xufTtcblxuY29uc3Qgc2hvd01vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIGNvbnN0IG1vZGFsV2luZG93SWNvbiA9IEdFVF9WQVIoJ21vZGFsV2luZG93SWNvbicpO1xuICBjb25zdCBtb2RhbFdpbmRvd1RleHQgPSBHRVRfVkFSKCdtb2RhbFdpbmRvd1RleHQnKTtcbiAgY29uc3QgbW9kYWxXaW5kb3doU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X19zY29yZScpO1xuICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgaWYgKGlzR2FtZU92ZXJTdWNjZXNzKCkpIHtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uV2luJyk7XG4gICAgbW9kYWxXaW5kb3dUZXh0LnRleHRDb250ZW50ID0gJ1lvdSBhcmUgd2luISc7XG4gICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gICAgbW9kYWxXaW5kb3doU2NvcmUudGV4dENvbnRlbnQgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzY29yZUxpbmVJY29ucyA9IHNjb3JlTGluZS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgICBjb25zdCBhbW91bnRPZk1pc3Rha2VzID0gQXJyYXkuZnJvbShzY29yZUxpbmVJY29ucykuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNyYy5pbmRleE9mKCdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZycpICE9PSAtMSkubGVuZ3RoO1xuICAgIG1vZGFsV2luZG93aFNjb3JlLnRleHRDb250ZW50ID0gYE1pc3Rha2VzOiAke2Ftb3VudE9mTWlzdGFrZXN9YDtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uTG9zZScpO1xuICAgIG1vZGFsV2luZG93VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgYXJlIGxvc2UhJztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhcicpO1xuICAgIGhpZGVPdmVybGF5KCk7XG4gICAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgfSwgMzAwMCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdywgc2hvd01vZGFsV2luZG93LCBoaWRlTW9kYWxXaW5kb3cgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQsIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24sXG4gIGhpZGVTdGF0VGFibGUsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgY3JlYXRlTmF2TWVudUl0ZW0gZnJvbSAnLi9uYXZNZW51SXRlbSc7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgY3JlYXRlTmF2TWVudSA9IChkYXRhU2V0KSA9PiB7XG4gIC8vIGNyZWF0ZSBuYXYgdWxcbiAgY29uc3QgbmF2TWVudVVsID0gY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2TWVudVVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhU2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbmF2TWVudVVsLmFwcGVuZChjcmVhdGVOYXZNZW51SXRlbShkYXRhW2ldLnNlY3Rpb24pKTtcbiAgfVxuXG4gIHJldHVybiBuYXZNZW51VWw7XG59O1xuXG5jb25zdCBvcGVuTmF2TWVudSA9IChoZWFkZXJOYXYpID0+IHtcbiAgY29uc3QgaGVhZGVyTWVudSA9IEdFVF9WQVIoJ2hlYWRlck1lbnUnKTtcbiAgY29uc3QgbmF2TWVudUxpbmtzID0gR0VUX1ZBUignbmF2TWVudUxpbmtzJyk7XG4gIG5hdk1lbnVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay50YWJJbmRleCA9IDA7XG4gIH0pO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW91dCcpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluJyk7XG59O1xuXG5jb25zdCBjbG9zZU5hdk1lbnUgPSAoaGVhZGVyTmF2KSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLWluJyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnc2xpZGUtb3V0Jyk7XG4gIG5hdk1lbnVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay50YWJJbmRleCA9IC0xO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldE5hdk1lbnVBY3RpdmVTdGF0ZSA9IChsaW5rcywgY2F0ZWdvcnkpID0+IHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGxpbmtTZWN0aW9uID0gbGluay5kYXRhc2V0LnNlY3Rpb247XG4gICAgaWYgKGxpbmtTZWN0aW9uID09PSBjYXRlZ29yeSkge1xuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlTmF2TWVudUFjdGl2ZVN0YXRlID0gKGxpbmtzKSA9PiB7XG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICByZW1vdmVOYXZNZW51QWN0aXZlU3RhdGUobmF2TWVudUxpbmtzKTtcbiAgc2V0TmF2TWVudUFjdGl2ZVN0YXRlKG5hdk1lbnVMaW5rcywgY2F0ZWdvcnkpO1xufTtcblxuY29uc3QgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHkgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY29uc3QgaGFtYnVyZ2VyQnRuID0gR0VUX1ZBUignaGFtYnVyZ2VyQnRuJyk7XG4gIGNvbnN0IHsgc2VjdGlvbiB9ID0gdGFyZ2V0LmRhdGFzZXQ7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XG4gIGhpZGVTdGF0VGFibGUoKTtcbiAgaWYgKHNlY3Rpb24gPT09ICdIb21lJykge1xuICAgIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG4gICAgaGFtYnVyZ2VyQnRuLmNsaWNrKCk7XG4gIH0gZWxzZSBpZiAoc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24oZGF0YSwgc2VjdGlvbik7XG4gICAgaGFtYnVyZ2VyQnRuLmNsaWNrKCk7XG4gIH1cbiAgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUoY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50KTtcbn07XG5cbmNvbnN0IHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJNZW51ID0gR0VUX1ZBUignaGVhZGVyTWVudScpO1xuICBoZWFkZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTmF2TWVudSwgb3Blbk5hdk1lbnUsIGNsb3NlTmF2TWVudSwgaGFtYnVyZ2VyTWVudUZ1bmN0aW9uYWxpdHksXG4gIHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyLCB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgc2hvd092ZXJsYXksIGhpZGVPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7IG9wZW5OYXZNZW51LCBjbG9zZU5hdk1lbnUgfSBmcm9tICcuL25hdk1lbnUnO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51QnRuID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IGJ1dHRvblxuICBjb25zdCBuYXZNZW51QnRuID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBuYXZNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1oYW1idXJnZXInKTtcbiAgbmF2TWVudUJ0bi5ocmVmID0gJyMnO1xuXG4gIGNvbnN0IHNwYW4xID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzcGFuMiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3Qgc3BhbjMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjEpO1xuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMik7XG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4zKTtcblxuICByZXR1cm4gbmF2TWVudUJ0bjtcbn07XG5cbmNvbnN0IG5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBoYW1idXJnZXJCdG4gPSBHRVRfVkFSKCdoYW1idXJnZXJCdG4nKTtcbiAgY29uc3QgaGVhZGVyTmF2ID0gR0VUX1ZBUignaGVhZGVyTmF2Jyk7XG4gIGhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaGVhZGVyTmF2LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICBjbG9zZU5hdk1lbnUoaGVhZGVyTmF2KTtcbiAgICAgIGhpZGVPdmVybGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5OYXZNZW51KGhlYWRlck5hdik7XG4gICAgICBzaG93T3ZlcmxheSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVOYXZNZW51QnRuLCBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjYXBpdGFsaXplRmlyc3RXb3JkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlTmF2TWVudUl0ZW0gPSAobGlua05hbWUpID0+IHtcbiAgLy8gY3JlYXRlIGxpXG4gIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0nKTtcblxuICAvLyBjcmVhdGUgbWVudSBsaW5rXG4gIGNvbnN0IGxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpO1xuICBsaW5rLmhyZWYgPSBgIyR7bGlua05hbWV9YDtcbiAgbGluay5kYXRhc2V0LnNlY3Rpb24gPSBjYXBpdGFsaXplRmlyc3RXb3JkKGxpbmtOYW1lKTtcbiAgbGluay50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuICBsaW5rLnRhYkluZGV4ID0gLTE7XG5cbiAgbGkuYXBwZW5kKGxpbmspO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdk1lbnVJdGVtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgY2xvc2VOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcblxuY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIG92ZXJsYXkgZWxlbWVudFxuICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xufTtcblxuY29uc3QgaGlkZU92ZXJsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBHRVRfVkFSKCdvdmVybGF5Jyk7XG4gIGNvbnN0IGJvZHkgPSBHRVRfVkFSKCdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbn07XG5cbmNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gR0VUX1ZBUignb3ZlcmxheScpO1xuICBjb25zdCBib2R5ID0gR0VUX1ZBUignYm9keScpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG59O1xuXG5jb25zdCBvdmVybGF5RnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IEdFVF9WQVIoJ292ZXJsYXknKTtcbiAgY29uc3QgaGVhZGVyTmF2ID0gR0VUX1ZBUignaGVhZGVyTmF2Jyk7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhlYWRlck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgIGNsb3NlTmF2TWVudShoZWFkZXJOYXYpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVPdmVybGF5LCBzaG93T3ZlcmxheSwgaGlkZU92ZXJsYXksIG92ZXJsYXlGdW5jdGlvbmFsaXR5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgcGxheVNvdW5kIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVQbGF5UmVwZWF0QnRuID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXktYnRuJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdwbGF5JztcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGNvbnN0IHNvdW5kc0xpc3QgPSBHRVRfVkFSKCdzb3VuZHNMaXN0Jyk7XG4gIGNvbnN0IGN1cnJlbnRTb3VuZCA9IHNvdW5kc0xpc3QuYXQoLTEpO1xuICBpZiAoc291bmRzTGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgcGxheVNvdW5kKHBsYXlSZXBlYXRCdG4sIGN1cnJlbnRTb3VuZCk7XG4gIGlmICghcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlcGVhdCcpKSB7XG4gICAgcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQnKTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGlmIChwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0JykpIHtcbiAgICBwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcGVhdCcpO1xuICB9XG59O1xuXG5jb25zdCBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgcGxheVJlcGVhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVBsYXlSZXBlYXRCdG4sIHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5LCByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSxcbiAgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlU2NvcmVMaW5lSWNvbiA9IChzcmMpID0+IHtcbiAgY29uc3Qgc2NvcmVJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNjb3JlSWNvbi5jbGFzc0xpc3QuYWRkKCdzY29yZS1saW5lX19pY29uJyk7XG4gIHNjb3JlSWNvbi5zcmMgPSBzcmM7XG4gIHNjb3JlSWNvbi5hbHQgPSAnaWNvbic7XG5cbiAgcmV0dXJuIHNjb3JlSWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNjb3JlTGluZUljb247XG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3RhdGlzdGljc1RhYmxlLCBzZXRHbG9iYWxWYWx1ZXMsXG4gIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHksIHNob3dTdGF0VGFibGUsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSLCBTRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcblxuLy8gY3JlYXRlIGhlYWRlciBzdGF0aXN0aWNzIGJ1dHRvblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc0J0biA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgc3RhdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLWJ1dHRvbicpO1xuICBzdGF0QnRuLnRleHRDb250ZW50ID0gJ1N0YXRpc3RpY3MnO1xuXG4gIHJldHVybiBzdGF0QnRuO1xufTtcblxuY29uc3Qgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1idXR0b24nKTtcbiAgc3RhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRHbG9iYWxWYWx1ZXMoKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLXBhZ2UnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IHN0YXRpc3RpY3NQYWdlLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZScpO1xuICAgIGNvbnN0IHN0YXRpc3RpY0RhdGEgPSBHRVRfVkFSKCdzdGF0aXN0aWNEYXRhJykuc2xpY2UoKTtcbiAgICBzdGF0aXN0aWNzVGFibGUucmVtb3ZlKCk7XG4gICAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNEYXRhKSk7XG4gICAgY29uc3QgcmVwZWF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgICBzdGF0aXN0aWNEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGVsZW0xID0gYVsnQWNjdXJhY3kgJSddO1xuICAgICAgY29uc3QgZWxlbTIgPSBiWydBY2N1cmFjeSAlJ107XG5cbiAgICAgIHJldHVybiBlbGVtMSAtIGVsZW0yO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlcGVhdGVkRGF0YSA9IHN0YXRpc3RpY0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtWydBY2N1cmFjeSAlJ10gIT09ICduL2UnICYmIGl0ZW1bJ0FjY3VyYWN5ICUnXSAhPT0gMTAwKVxuICAgICAgLnNsaWNlKDAsIDgpXG4gICAgICAubWFwKChlbGVtKSA9PiBlbGVtLlRyYW5zbGF0aW9uKTtcblxuICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNldCA9IGRhdGFcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VjdGlvbldvcmRzKVxuICAgICAgLm1hcCgoZWxlbSkgPT4gZWxlbS5zZWN0aW9uV29yZHMpXG4gICAgICAuZmxhdCgpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiByZXBlYXRlZERhdGEuaW5jbHVkZXMoaXRlbS50cmFuc2xhdGlvbikpO1xuICAgIFNFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcsIHJlcGVhdGVkRGF0YVNldCk7XG4gICAgaWYgKHJlcGVhdGVkRGF0YVNldC5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBlYXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5KCk7XG5cbiAgICBzaG93U3RhdFRhYmxlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3RhdGlzdGljc0J0biwgc3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgaGlkZVN0YXRUYWJsZSwgY3JlYXRlRGlmZldvcmRzU2VjdGlvbixcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSwgc2V0R2xvYmFsVmFsdWVzLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZVxuICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2UnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGNvbnRhaW5lclxuICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlQnV0dG9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scycpO1xuXG4gIC8vIGNyZWF0ZSByZXBlYXQgZGlmZmljdWx0IHdvcmRzIGJ1dHRvblxuICBjb25zdCByZXBlYXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVwZWF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVwZWF0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZV9fY29udHJvbHMtYnRuJyk7XG4gIHJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQtYnRuJyk7XG4gIHJlcGVhdEJ0bi50ZXh0Q29udGVudCA9ICdSZXBlYXQgZGlmZmljdWx0IHdvcmRzJztcblxuICAvLyBjcmVhdGUgcmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scy1idG4nKTtcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXQtYnRuJyk7XG4gIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHN0YXRpc3RpYyc7XG5cbiAgc3RhdGlzdGljc1BhZ2VCdXR0b25zLmFwcGVuZChyZXBlYXRCdG4pO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuYXBwZW5kKHJlc2V0QnRuKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIHRhYmxlXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlVGFibGUgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGUoc3RhdGlzdGljc0RhdGEpO1xuXG4gIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChzdGF0aXN0aWNzUGFnZUJ1dHRvbnMpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoc3RhdGlzdGljc1BhZ2VUYWJsZSk7XG5cbiAgc3RhdGlzdGljc1BhZ2UuYXBwZW5kKHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyKTtcbiAgcmV0dXJuIHN0YXRpc3RpY3NQYWdlO1xufTtcblxuY29uc3QgcmVzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXRTdGF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuICByZXNldFN0YXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2VDb250YWluZXIgPSBzdGF0aXN0aWNzUGFnZS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgICBzdGF0aXN0aWNzVGFibGUucmVtb3ZlKCk7XG4gICAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNzRGF0YSkpO1xuICAgIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0LWJ0bicpO1xuICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufTtcblxuY29uc3QgcmVwZWF0RGlmZldvcmRzRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVwZWF0RGlmZldvcmRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgcmVwZWF0RGlmZldvcmRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNldCA9IEdFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcpO1xuICAgIGNyZWF0ZURpZmZXb3Jkc1NlY3Rpb24ocmVwZWF0ZWREYXRhU2V0LCAnRGlmZmljdWx0IHdvcmRzJyk7XG4gICAgaGlkZVN0YXRUYWJsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NQYWdlLCByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1cGRhdGVNb2RlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVUb2dnbGUgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9IGZhbHNlO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSB0cmFpblxuICBjb25zdCB0b2dnbGVNb2RlVHJhaW4gPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX190cmFpbicpO1xuICB0b2dnbGVNb2RlVHJhaW4udGV4dENvbnRlbnQgPSAnVHJhaW4nO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSBwbGF5XG4gIGNvbnN0IHRvZ2dsZU1vZGVQbGF5ID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2dnbGVNb2RlUGxheS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVQbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3BsYXknKTtcbiAgdG9nZ2xlTW9kZVBsYXkudGV4dENvbnRlbnQgPSAnUGxheSc7XG5cbiAgdG9nZ2xlQnRuLmFwcGVuZCh0b2dnbGVNb2RlVHJhaW4pO1xuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGVQbGF5KTtcblxuICByZXR1cm4gdG9nZ2xlQnRuO1xufTtcblxuY29uc3QgdG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQnRuID0gR0VUX1ZBUigndG9nZ2xlQnRuJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9ICh0b2dnbGVCdG4uYXJpYVByZXNzZWQgPT09ICdmYWxzZScpID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgU0VUX1ZBUignaXNQbGF5TW9kZScsIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCk7XG4gIHVwZGF0ZU1vZGUoKTtcbn07XG5cbmNvbnN0IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUJ0biA9IEdFVF9WQVIoJ3RvZ2dsZUJ0bicpO1xuICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVCdG5GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZ2dsZSwgdG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSwgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiaW1wb3J0IHsgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnVCdG4nO1xuaW1wb3J0IHsgb3ZlcmxheUZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL292ZXJsYXknO1xuaW1wb3J0IHsgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnUnO1xuaW1wb3J0IHsgc2V0TG9nb0V2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IHsgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCB7IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvZ2dsZUJ0bic7XG5pbXBvcnQgeyBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgeyBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bic7XG5pbXBvcnQgeyByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZSc7XG5pbXBvcnQgeyBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgb3ZlcmxheUZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TG9nb0V2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KCk7XG4gIHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSgpO1xuICBzdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSgpO1xuICByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5KCk7XG4gIHJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldEV2ZW50TGlzdGVuZXJzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IGNyZWF0ZUNhcmRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZEl0ZW0nO1xuaW1wb3J0IHsgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCBjcmVhdGVTY29yZUxpbmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvc2NvcmVMaW5lSWNvbic7XG5pbXBvcnQgeyBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IGRhdGFTZXQgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcblxuLy8gY3JlYXRlIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc01haW5NZW51ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydC1wYWdlJyk7XG5jb25zdCBpc0NhcmQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG5jb25zdCBpc0FjdGl2ZUNhcmQgPSAoY2FyZCkgPT4gIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpO1xuY29uc3QgaXNUcmFpbk1vZGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0Lm1vZGUgPT09ICd0cmFpbic7XG5jb25zdCBpc1BsYXlNb2RlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC5tb2RlID09PSAncGxheSc7XG5jb25zdCBpc0dhbWVTdGFydGVkID0gKCkgPT4gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0Jyk7XG5jb25zdCBpc0dhbWVPdmVyID0gKCkgPT4gR0VUX1ZBUignc291bmRzTGlzdCcpLmxlbmd0aCA9PT0gMDtcbmNvbnN0IGlzR2FtZU92ZXJTdWNjZXNzID0gKCkgPT4ge1xuICBjb25zdCBpY29uc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZS1saW5lX19pY29uJykubGVuZ3RoO1xuICBjb25zdCBjYXJkc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKS5sZW5ndGg7XG4gIHJldHVybiBpY29uc0Ftb3VudCA9PT0gY2FyZHNBbW91bnQ7XG59O1xuXG5jb25zdCBjbGVhckNhcmRzTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn07XG5cbmNvbnN0IHNodWZmbGVBcnJheSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzaHVmZmxlZCA9IFsuLi5hcnJheV07XG4gIGZvciAobGV0IGkgPSBzaHVmZmxlZC5sZW5ndGggLSAxOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFtzaHVmZmxlZFtpXSwgc2h1ZmZsZWRbal1dID0gW3NodWZmbGVkW2pdLCBzaHVmZmxlZFtpXV07XG4gIH1cbiAgcmV0dXJuIHNodWZmbGVkO1xufTtcblxuY29uc3QgdXBkYXRlU291bmRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gR0VUX1ZBUignc291bmRzTGlzdCcpLnNsaWNlKCk7XG4gIHNvdW5kc0xpc3QucG9wKCk7XG4gIFNFVF9WQVIoJ3NvdW5kc0xpc3QnLCBzb3VuZHNMaXN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1NvdW5kc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICBjb25zdCBzb3VuZHNMaXN0ID0gW107XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCB7IHNvdW5kIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgc291bmRzTGlzdC5wdXNoKHNvdW5kKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNvdW5kc0xpc3Q7XG59O1xuXG5jb25zdCBwZXJjZW50Q29ycmVjdEFuc3dlcnMgPSAob2JqKSA9PiBNYXRoLnJvdW5kKChcbiAgb2JqLkNvcnJlY3QgLyAob2JqLkNvcnJlY3QgKyBvYmouSW5jb3JyZWN0KSkgKiAxMDApO1xuXG5jb25zdCBjcmVhdGVTdGFydGluZ1N0YXRpc3RpY0RhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uc2VjdGlvbiAhPT0gJ2hvbWUnKSB7XG4gICAgICBpdGVtLnNlY3Rpb25Xb3Jkcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBDYXRlZ29yeTogaXRlbS5zZWN0aW9uVGl0bGUsXG4gICAgICAgICAgV29yZDogZWxlbS53b3JkLFxuICAgICAgICAgIFRyYW5zbGF0aW9uOiBlbGVtLnRyYW5zbGF0aW9uLFxuICAgICAgICAgIFRyYWluZWQ6IDAsXG4gICAgICAgICAgQ29ycmVjdDogMCxcbiAgICAgICAgICBJbmNvcnJlY3Q6IDAsXG4gICAgICAgICAgJ0FjY3VyYWN5ICUnOiAnbi9lJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0LnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzRGF0YSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGlzdGljRGF0YScpO1xuICBpZiAoIXNhdmVkRGF0YSkge1xuICAgIGNvbnN0IHN0YXJ0aW5nRGF0YSA9IGNyZWF0ZVN0YXJ0aW5nU3RhdGlzdGljRGF0YShkYXRhKTtcbiAgICBjb25zdCBzdGFydGluZ0RhdGFUb0pzb24gPSBKU09OLnN0cmluZ2lmeShzdGFydGluZ0RhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0aXN0aWNEYXRhJywgc3RhcnRpbmdEYXRhVG9Kc29uKTtcbiAgICByZXN1bHQucHVzaCguLi5zdGFydGluZ0RhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICAgIHJlc3VsdC5wdXNoKC4uLmN1cnJlbnREYXRhKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RXb3JkID0gKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG5jb25zdCBzZXRHbG9iYWxWYWx1ZXMgPSAoKSA9PiB7XG4gIFNFVF9WQVIoJ21haW5TZWN0aW9uJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSk7XG4gIFNFVF9WQVIoJ2NhdGVnb3J5TmFtZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1uYW1lJykpO1xuICBTRVRfVkFSKCdjYXJkc0xpc3QnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbGlzdCcpKTtcbiAgU0VUX1ZBUignaGFtYnVyZ2VyQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1oYW1idXJnZXInKSk7XG4gIFNFVF9WQVIoJ2hlYWRlck5hdicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2JykpO1xuICBTRVRfVkFSKCdoZWFkZXJNZW51JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1tZW51JykpO1xuICBTRVRfVkFSKCduYXZNZW51TGlua3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpKTtcbiAgU0VUX1ZBUignb3ZlcmxheScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xuICBTRVRfVkFSKCdib2R5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKTtcbiAgU0VUX1ZBUignaGVhZGVyTG9nbycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nb19fbGluaycpKTtcbiAgU0VUX1ZBUigndG9nZ2xlQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1idXR0b24nKSk7XG4gIFNFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idG4nKSk7XG4gIFNFVF9WQVIoJ3Njb3JlTGluZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1saW5lJykpO1xuICBTRVRfVkFSKCdtb2RhbFdpbmRvdycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93VGV4dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX3RleHQnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93SWNvbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2ljb24nKSk7XG4gIFNFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnLCBjcmVhdGVTdGF0aXN0aWNzRGF0YShkYXRhU2V0KSk7XG4gIFNFVF9WQVIoJ2lzUGxheU1vZGUnLCBHRVRfVkFSKCd0b2dnbGVCdG4nKS5hcmlhUHJlc3NlZCk7XG59O1xuXG5jb25zdCByZXNldENhcmRzU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZnJvbnQnKTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpKTtcbn07XG5cbmNvbnN0IHNob3dTdGF0VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICBjb25zdCBtYWluU2VjdGlvbiA9IEdFVF9WQVIoJ21haW5TZWN0aW9uJyk7XG4gIGNvbnN0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXInKTtcbiAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtdXAnKTtcbiAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzYXBwZWFyJyk7XG4gIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWRvd24nKTtcbn07XG5cbmNvbnN0IGhpZGVTdGF0VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtcGFnZScpO1xuICBpZiAoc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS1kb3duJykpIHtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IEdFVF9WQVIoJ21haW5TZWN0aW9uJyk7XG4gICAgY29uc3QgbWFpblNlY3Rpb25Db250YWluZXIgPSBtYWluU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtZG93bicpO1xuICAgIHN0YXRpc3RpY3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLXVwJyk7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYXBwZWFyJyk7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0Q2FyZHNTb3VuZHNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gY3JlYXRlTmV3U291bmRzTGlzdCgpO1xuICBTRVRfVkFSKCdzb3VuZHNMaXN0Jywgc2h1ZmZsZUFycmF5KHNvdW5kc0xpc3QpKTtcbn07XG5cbmNvbnN0IHJlc2V0U2NvcmVMaW5lID0gKCkgPT4ge1xuICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgc2NvcmVMaW5lLmlubmVySFRNTCA9ICcnO1xufTtcblxuY29uc3QgdXBkYXRlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IHBsYXlNb2RlID0gR0VUX1ZBUignaXNQbGF5TW9kZScpO1xuICByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSgpO1xuICByZXNldENhcmRzU3RhdGUoKTtcbiAgcmVzZXRDYXJkc1NvdW5kc0xpc3QoKTtcbiAgcmVzZXRTY29yZUxpbmUoKTtcbiAgaWYgKHBsYXlNb2RlID09PSAndHJ1ZScpIHtcbiAgICBjYXJkc0xpc3QuZGF0YXNldC5tb2RlID0gJ3BsYXknO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5kYXRhc2V0Lm1vZGUgPSAndHJhaW4nO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzVGFibGVIZWFkID0gKGRhdGEpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlSGVhZCA9IGNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gIHN0YXRpc3RpY3NUYWJsZUhlYWQuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZCcpO1xuICBjb25zdCBoZWFkZXJSb3cgPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuICBoZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZC1yb3cnKTtcbiAgaGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlLXJvdycpO1xuICBjb25zdCBoZWFkZXJSb3dEYXRhID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG5cbiAgaGVhZGVyUm93RGF0YS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBoZWFkZXJSb3dUaCA9IGNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgaGVhZGVyUm93VGguY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9faGVhZC1yb3dfX2NlbGwnKTtcbiAgICBoZWFkZXJSb3dUaC5jbGFzc0xpc3QuYWRkKCd0YWJsZS1jZWxsJyk7XG4gICAgaGVhZGVyUm93VGguZGF0YXNldC5jb2x1bW4gPSBrZXk7XG4gICAgaGVhZGVyUm93VGguZGF0YXNldC5zb3J0ID0gKGtleSA9PT0gJ0NhdGVnb3J5JykgfHwgKGtleSA9PT0gJ1dvcmQnKSB8fCAoa2V5ID09PSAnVHJhbnNsYXRpb24nKSA/ICdhbHBoJyA6ICdudW0nO1xuICAgIGhlYWRlclJvd1RoLnRleHRDb250ZW50ID0ga2V5O1xuICAgIGhlYWRlclJvdy5hcHBlbmQoaGVhZGVyUm93VGgpO1xuICB9KTtcblxuICBzdGF0aXN0aWNzVGFibGVIZWFkLmFwcGVuZChoZWFkZXJSb3cpO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGVIZWFkO1xufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keSA9IChkYXRhKSA9PiB7XG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGJvZHlcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlQm9keSA9IGNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gIHN0YXRpc3RpY3NUYWJsZUJvZHkuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9fYm9keScpO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHRCb2R5Um93ID0gY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0Qm9keVJvdy5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19ib2R5LXJvdycpO1xuICAgIHRCb2R5Um93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlLXJvdycpO1xuICAgIGNvbnN0IHRCb2R5Um93RGF0YSA9IE9iamVjdC52YWx1ZXMoaXRlbSk7XG4gICAgY29uc3Qgcm93Q2F0ZWdvcnkgPSBPYmplY3QudmFsdWVzKGl0ZW0pWzBdO1xuICAgIGNvbnN0IHJvd1dvcmQgPSBPYmplY3QudmFsdWVzKGl0ZW0pWzFdO1xuICAgIGNvbnN0IGhlYWRlclJvd0RhdGEgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcbiAgICB0Qm9keVJvdy5kYXRhc2V0LnJvdyA9IHJvd1dvcmQ7XG5cbiAgICB0Qm9keVJvd0RhdGEuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0Qm9keVJvd0NlbGwgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdEJvZHlSb3dDZWxsLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2JvZHktcm93X19jZWxsJyk7XG4gICAgICB0Qm9keVJvd0NlbGwuY2xhc3NMaXN0LmFkZCgndGFibGUtY2VsbCcpO1xuICAgICAgdEJvZHlSb3dDZWxsLmRhdGFzZXQuY2F0ZWdvcnkgPSByb3dDYXRlZ29yeTtcbiAgICAgIHRCb2R5Um93Q2VsbC5kYXRhc2V0LmNlbGwgPSBoZWFkZXJSb3dEYXRhW2luZGV4XTtcbiAgICAgIHRCb2R5Um93Q2VsbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgdEJvZHlSb3cuYXBwZW5kKHRCb2R5Um93Q2VsbCk7XG4gICAgfSk7XG5cbiAgICBzdGF0aXN0aWNzVGFibGVCb2R5LmFwcGVuZCh0Qm9keVJvdyk7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGVCb2R5O1xufTtcblxuY29uc3QgY3JlYXRlU3RhdGlzdGljc1RhYmxlID0gKGRhdGEpID0+IHtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGVcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgc3RhdGlzdGljc1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGUnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyB0YWJsZSBoZWFkXG4gIGNvbnN0IHN0YXRpc3RpY3NUYWJsZUhlYWQgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGVIZWFkKGRhdGEpO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGJvZHlcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlQm9keSA9IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkoZGF0YSk7XG5cbiAgc3RhdGlzdGljc1RhYmxlLmFwcGVuZChzdGF0aXN0aWNzVGFibGVIZWFkKTtcbiAgc3RhdGlzdGljc1RhYmxlLmFwcGVuZChzdGF0aXN0aWNzVGFibGVCb2R5KTtcblxuICByZXR1cm4gc3RhdGlzdGljc1RhYmxlO1xufTtcblxuY29uc3Qgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgY29uc3Qgc3RhdFRhYmxlSGVhZGVyID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlX19oZWFkJyk7XG4gIGNvbnN0IHN0YXRUYWJsZUhlYWRlckNlbGxzID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0LXRhYmxlX19oZWFkLXJvd19fY2VsbCcpO1xuICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcblxuICBzdGF0VGFibGVIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdFRhYmxlQm9keSA9IHN0YXRUYWJsZS5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZV9fYm9keScpO1xuICAgIGNvbnN0IHNvcnRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuc29ydDtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnkgPSB0YXJnZXQuZGF0YXNldC5jb2x1bW47XG4gICAgY29uc3Qgc29ydENhdGVnb3J5Q2VsbHMgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY2VsbD0nJHtzb3J0Q2F0ZWdvcnl9J11gKTtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcyA9IEFycmF5LmZyb20oc29ydENhdGVnb3J5Q2VsbHMpLm1hcCgoY2VsbCkgPT4gY2VsbC50ZXh0Q29udGVudCk7XG4gICAgY29uc3QgYXJlRW1wdHlDZWxscyA9IHNvcnRDYXRlZ29yeUNlbGxzVmFsdWVzLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnMCcgfHwgaXRlbSA9PT0gJ24vZScpO1xuICAgIGlmIChhcmVFbXB0eUNlbGxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYXNjZW5kJykpIHtcbiAgICAgIHN0YXRUYWJsZUhlYWRlckNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYXNjZW5kJykpO1xuICAgICAgc3RhdGlzdGljc0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBudW0xID0gYVtbc29ydENhdGVnb3J5XV0gPT09ICduL2UnID8gLTEgOiBhW3NvcnRDYXRlZ29yeV07XG4gICAgICAgIGNvbnN0IG51bTIgPSBiW1tzb3J0Q2F0ZWdvcnldXSA9PT0gJ24vZScgPyAtMSA6IGJbc29ydENhdGVnb3J5XTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FzY2VuZCcpO1xuICAgICAgICBpZiAoc29ydFR5cGUgPT09ICdhbHBoJykge1xuICAgICAgICAgIHJldHVybiBudW0xLmxvY2FsZUNvbXBhcmUobnVtMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTIgLSBudW0xO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRpc3RpY3NEYXRhLnJldmVyc2UoKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhc2NlbmQnKTtcbiAgICB9XG4gICAgc3RhdFRhYmxlQm9keS5yZW1vdmUoKTtcbiAgICBzdGF0VGFibGUuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkoc3RhdGlzdGljc0RhdGEpKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEgPSAobW9kZSwgY2FyZCwgcmVzdWx0KSA9PiB7XG4gIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0aXN0aWNEYXRhJyk7XG4gIGNvbnN0IGN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICBjb25zdCBjYXJkQmFja1RpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1iYWNrX190aXRsZScpLnRleHRDb250ZW50O1xuICBsZXQgY3VycmVudEl0ZW0gPSBjdXJyZW50RGF0YVxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IChpdGVtLlRyYW5zbGF0aW9uID09PSBjYXJkQmFja1RpdGxlKSlbMF07XG4gIGlmIChtb2RlID09PSAndHJhaW4nKSB7XG4gICAgY3VycmVudEl0ZW0uVHJhaW5lZCArPSAxO1xuICB9XG4gIGlmIChyZXN1bHQpIHtcbiAgICBjdXJyZW50SXRlbS5Db3JyZWN0ICs9IDE7XG4gICAgY3VycmVudEl0ZW1bJ0FjY3VyYWN5ICUnXSA9IHBlcmNlbnRDb3JyZWN0QW5zd2VycyhjdXJyZW50SXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2FyZExpc3RJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpKTtcbiAgICBjb25zdCBjdXJyZW50U291bmQgPSBHRVRfVkFSKCdzb3VuZHNMaXN0JykuYXQoLTEpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gY2FyZExpc3RJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZGF0YXNldC5zb3VuZCA9PT0gY3VycmVudFNvdW5kKVswXTtcbiAgICBbY3VycmVudEl0ZW1dID0gY3VycmVudERhdGFcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgaXRlbS5UcmFuc2xhdGlvbiA9PT0gY3VycmVudENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtYmFja19fdGl0bGUnKVxuICAgICAgICAgIC50ZXh0Q29udGVudCkpO1xuICAgIGN1cnJlbnRJdGVtLkluY29ycmVjdCArPSAxO1xuICAgIGN1cnJlbnRJdGVtWydBY2N1cmFjeSAlJ10gPSBwZXJjZW50Q29ycmVjdEFuc3dlcnMoY3VycmVudEl0ZW0pO1xuICB9XG4gIGNvbnN0IGN1cnJlbnREYXRhVG9Kc29uID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGlzdGljRGF0YScsIGN1cnJlbnREYXRhVG9Kc29uKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGNhcmRzTGlzdC5jbGFzc0xpc3QuYWRkKCdzdGFydC1wYWdlJyk7XG4gIGNhcmRzTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gJ21haW4tbWVudSc7XG4gIHVwZGF0ZU1vZGUoKTtcbiAgY2xlYXJDYXJkc0xpc3RDb250YWluZXIoKTtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnNlY3Rpb24gIT09ICdob21lJykge1xuICAgICAgY29uc3QgaW1nUGF0aCA9IGVsZW1lbnQuc3RhcnRJbWFnZTtcbiAgICAgIGNvbnN0IGltZ0FsdCA9IGVsZW1lbnQuc2VjdGlvbldvcmRzWzBdLmFsdDtcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnQuc2VjdGlvblRpdGxlO1xuICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShpbWdQYXRoLCBpbWdBbHQsIGNhcmRUaXRsZSwgY2FyZFRpdGxlKTtcbiAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEl0ZW0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpbWdQYXRoID0gaXRlbS5pbWFnZTtcbiAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICBjb25zdCBjYXJkU2VjdGlvbiA9IGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBpdGVtLndvcmQ7XG4gICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICBjb25zdCBzb3VuZFBhdGggPSBpdGVtLmF1ZGlvU3JjO1xuICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oXG4gICAgICBpbWdQYXRoLFxuICAgICAgaW1nQWx0LFxuICAgICAgY2FyZFRpdGxlLFxuICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICBjYXJkVHJhbnNsYXRpb24sXG4gICAgICBzb3VuZFBhdGgsXG4gICAgKTtcbiAgICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRJdGVtKTtcbiAgfSk7XG4gIHJlc2V0Q2FyZHNTb3VuZHNMaXN0KCk7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWN0aW9uVGl0bGUgPT09IHNlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25EYXRhID0gZWxlbWVudC5zZWN0aW9uV29yZHM7XG4gICAgICBzZWN0aW9uRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ1BhdGggPSBpdGVtLmltYWdlO1xuICAgICAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGl0ZW0ud29yZDtcbiAgICAgICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICAgICAgY29uc3Qgc291bmRQYXRoID0gaXRlbS5hdWRpb1NyYztcbiAgICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShcbiAgICAgICAgICBpbWdQYXRoLFxuICAgICAgICAgIGltZ0FsdCxcbiAgICAgICAgICBjYXJkVGl0bGUsXG4gICAgICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICAgICAgY2FyZFRyYW5zbGF0aW9uLFxuICAgICAgICAgIHNvdW5kUGF0aCxcbiAgICAgICAgKTtcbiAgICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXNldENhcmRzU291bmRzTGlzdCgpO1xufTtcblxuY29uc3QgcGxheVNvdW5kID0gKGVsZW1lbnQsIHNvdW5kUGF0aCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhzb3VuZFBhdGgpO1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgYXVkaW8ucGxheSgpO1xuICBpZiAoZWxlbWVudCA9PT0gcGxheVJlcGVhdEJ0bikge1xuICAgIHBsYXlSZXBlYXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBwbGF5UmVwZWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBjYXJkc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVDYXJkID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVCYWNrID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHRyYWluTW9kZUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0LCBjYXJkSW5uZXIpID0+IHtcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZS1idG4nKSkge1xuICAgIHJvdGF0ZUNhcmQoY2FyZElubmVyKTtcbiAgICBjYXJkSW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHJvdGF0ZUJhY2soY2FyZElubmVyKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghY2FyZElubmVyLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG4gICAgY29uc3Qgc291bmRQYXRoID0gY3VycmVudENhcmQuZGF0YXNldC5zb3VuZDtcbiAgICBjb25zdCBjYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBwbGF5U291bmQoY2FyZCwgc291bmRQYXRoKTtcbiAgICB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEoJ3RyYWluJywgY3VycmVudENhcmQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRTY29yZUljb24gPSAoY2FyZCwgc3JjKSA9PiB7XG4gIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgIGNvbnN0IHNjb3JlSWNvbiA9IGNyZWF0ZVNjb3JlTGluZUljb24oc3JjKTtcbiAgICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgICBzY29yZUxpbmUucHJlcGVuZChzY29yZUljb24pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBzZXRHbG9iYWxWYWx1ZXMsIGNhcGl0YWxpemVGaXJzdFdvcmQsXG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LFxuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCB1cGRhdGVNb2RlLCBwbGF5U291bmQsXG4gIHJvdGF0ZUNhcmQsIHJvdGF0ZUJhY2ssIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIHNodWZmbGVBcnJheSwgdXBkYXRlU291bmRMaXN0LFxuICBpc0dhbWVTdGFydGVkLCBhZGRTY29yZUljb24sIGlzQWN0aXZlQ2FyZCwgaXNHYW1lT3ZlciwgaXNHYW1lT3ZlclN1Y2Nlc3MsXG4gIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhLCBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5LFxuICBjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5LCBzaG93U3RhdFRhYmxlLCBoaWRlU3RhdFRhYmxlLCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uLFxufTtcbiIsImNvbnN0IFZBUklBQkxFUyA9IHtcbiAgbWFpblNlY3Rpb246ICdpbml0aWFsIHZhbHVlJyxcbiAgY2F0ZWdvcnlOYW1lOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGNhcmRzTGlzdDogJ2luaXRpYWwgdmFsdWUnLFxuICBzb3VuZHNMaXN0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhhbWJ1cmdlckJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJOYXY6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTWVudTogJ2luaXRpYWwgdmFsdWUnLFxuICBuYXZNZW51TGlua3M6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTG9nbzogJ2luaXRpYWwgdmFsdWUnLFxuICBvdmVybGF5OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGJvZHk6ICdpbml0aWFsIHZhbHVlJyxcbiAgdG9nZ2xlQnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGlzUGxheU1vZGU6ICdpbml0aWFsIHZhbHVlJyxcbiAgcGxheVJlcGVhdEJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBzY29yZUxpbmU6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3c6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3dJY29uOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93VGV4dDogJ2luaXRpYWwgdmFsdWUnLFxuICBkYXRhOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93SWNvbldpbjogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvd2luLWljb24ucG5nJyxcbiAgbW9kYWxXaW5kb3dJY29uTG9zZTogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvbG9zZS1pY29uLnBuZycsXG4gIHN0YXRpc3RpY0RhdGE6IFtdLFxuICByZXBlYXRlZERhdGFTZXQ6ICdpbml0aWFsIHZhbHVlJyxcbn07XG5cbmNvbnN0IFNFVF9WQVIgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChWQVJJQUJMRVMsIG5hbWUpKSB7XG4gICAgVkFSSUFCTEVTW25hbWVdID0gdmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IEdFVF9WQVIgPSAobmFtZSkgPT4ge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFZBUklBQkxFUywgbmFtZSkpIHtcbiAgICByZXR1cm4gVkFSSUFCTEVTW25hbWVdO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFt7c2VjdGlvbjonaG9tZScsY2F0ZWdvcnk6J21haW4tbWVudSd9LHtzZWN0aW9uOidjbG90aGVzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1zd2VhdGVyLnBuZycsbGlua1BhdGg6JyNjbG90aGVzJyxzZWN0aW9uVGl0bGU6J0Nsb3RoZXMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2NhcCcsdHJhbnNsYXRpb246J9GI0LDQv9C60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1jYXAucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvY2FwLm1wMycsYWx0OidjYXAgaW1hZ2UnfSx7d29yZDonamFja2V0Jyx0cmFuc2xhdGlvbjon0LrRg9GA0YLQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2EtamFja2V0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2phY2tldC5tcDMnLGFsdDonamFja2V0IGltYWdlJ30se3dvcmQ6J3NjYXJmJyx0cmFuc2xhdGlvbjon0YjQsNGA0YQnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1zY2FyZi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zY2FyZi5tcDMnLGFsdDonc2NhcmYgaW1hZ2UnfSx7d29yZDonc2hvZXMnLHRyYW5zbGF0aW9uOifQsdC+0YLQuNC90LrQuCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLXNob2VzLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3Nob2VzLm1wMycsYWx0OidzaG9lcyBpbWFnZSd9LHt3b3JkOidibG91c2UnLHRyYW5zbGF0aW9uOifQsdC70YPQt9C60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1ibG91c2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvYmxvdXNlLm1wMycsYWx0OidibG91c2UgaW1hZ2UnfSx7d29yZDonY29hdCcsdHJhbnNsYXRpb246J9C/0LDQu9GM0YLQvicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LWNvYXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvY29hdC5tcDMnLGFsdDonY29hdCBpbWFnZSd9LHt3b3JkOidkcmVzcycsdHJhbnNsYXRpb246J9C/0LvQsNGC0YzQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LWRyZXNzLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL2RyZXNzLm1wMycsYWx0OidkcmVzcyBpbWFnZSd9LHt3b3JkOidzaGlydCcsdHJhbnNsYXRpb246J9GA0YPQsdCw0YjQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3Ytc2hpcnQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2hpcnQubXAzJyxhbHQ6J3NoaXJ0IGltYWdlJ31dfSx7c2VjdGlvbjonY29sb3Vycycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YteWVsbG93LnBuZycsbGlua1BhdGg6JyNjb2xvdXJzJyxzZWN0aW9uVGl0bGU6J0NvbG91cnMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2JsYWNrJyx0cmFuc2xhdGlvbjon0YfQtdGA0L3Ri9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtYmxhY2sucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvYmxhY2subXAzJyxhbHQ6J2JsYWNrIGltYWdlJ30se3dvcmQ6J2JsdWUnLHRyYW5zbGF0aW9uOifRgdC40L3QuNC5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtYmx1ZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ibHVlLm1wMycsYWx0OidibHVlIGltYWdlJ30se3dvcmQ6J2Jyb3duJyx0cmFuc2xhdGlvbjon0LrQvtGA0LjRh9C90LXQstGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1icm93bi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9icm93bi5tcDMnLGFsdDonYnJvd24gaW1hZ2UnfSx7d29yZDonZ3JlZW4nLHRyYW5zbGF0aW9uOifQt9C10LvRkdC90YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWdyZWVuLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2dyZWVuLm1wMycsYWx0OidncmVlbiBpbWFnZSd9LHt3b3JkOidncmV5Jyx0cmFuc2xhdGlvbjon0YHQtdGA0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWdyZXkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvZ3JleS5tcDMnLGFsdDonZ3JleSBpbWFnZSd9LHt3b3JkOidvcmFuZ2UnLHRyYW5zbGF0aW9uOifQvtGA0LDQvdC20LXQstGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1vcmFuZ2UtYy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9vcmFuZ2UubXAzJyxhbHQ6J29yYW5nZSBpbWFnZSd9LHt3b3JkOidwaW5rJyx0cmFuc2xhdGlvbjon0YDQvtC30L7QstGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1waW5rLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL3BpbmsubXAzJyxhbHQ6J3BpbmsgaW1hZ2UnfSx7d29yZDoncmVkJyx0cmFuc2xhdGlvbjon0LrRgNCw0YHQvdGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1yZWQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvcmVkLm1wMycsYWx0OidyZWQgaW1hZ2UnfV19LHtzZWN0aW9uOidmYW1pbHknLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LWZhbWlseS5wbmcnLGxpbmtQYXRoOicjZmFtaWx5JyxzZWN0aW9uVGl0bGU6J0ZhbWlseScsc2VjdGlvbldvcmRzOlt7d29yZDonYXVudCcsdHJhbnNsYXRpb246J9GC0LXRgtGPJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1hdW50LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvYXVudC5tcDMnLGFsdDonYXVudCBpbWFnZSd9LHt3b3JkOidicm90aGVyJyx0cmFuc2xhdGlvbjon0LHRgNCw0YInLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWJyb3RoZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9icm90aGVyLm1wMycsYWx0Oidicm90aGVyIGltYWdlJ30se3dvcmQ6J2RhZGR5Jyx0cmFuc2xhdGlvbjon0L/QsNC/0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWRhZGR5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvZGFkZHkubXAzJyxhbHQ6J2RhZGR5IGltYWdlJ30se3dvcmQ6J2dyYW5kbWEnLHRyYW5zbGF0aW9uOifQsdCw0LHRg9GI0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtZ3JhbmRtYS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2dyYW5kbWEubXAzJyxhbHQ6J2dyYW5kbWEgaW1hZ2UnfSx7d29yZDonZ3JhbmRwYScsdHJhbnNsYXRpb246J9C00LXQtNGD0YjQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1ncmFuZHBhLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvZ3JhbmRwYS5tcDMnLGFsdDonZ3JhbmRwYSBpbWFnZSd9LHt3b3JkOidtdW1teScsdHJhbnNsYXRpb246J9C80LDQvNCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1tdW1teS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L211bW15Lm1wMycsYWx0OidtdW1teSBpbWFnZSd9LHt3b3JkOidzaXN0ZXInLHRyYW5zbGF0aW9uOifRgdC10YHRgtGA0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LXNpc3Rlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L3Npc3Rlci5tcDMnLGFsdDonc2lzdGVyIGltYWdlJ30se3dvcmQ6J3VuY2xlJyx0cmFuc2xhdGlvbjon0LTRj9C00Y8nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LXVuY2xlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvdW5jbGUubXAzJyxhbHQ6J3VuY2xlIGltYWdlJ31dfSx7c2VjdGlvbjonZm9vZCcsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL2EtaGFtYnVyZ2VyLnBuZycsbGlua1BhdGg6JyNmb29kJyxzZWN0aW9uVGl0bGU6J0Zvb2QnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2VnZycsdHJhbnNsYXRpb246J9GP0LnRhtC+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL2EtZWdnLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2VnZy5tcDMnLGFsdDonZWdnIGltYWdlJ30se3dvcmQ6J2ljZSBjcmVhbScsdHJhbnNsYXRpb246J9C80L7RgNC+0LbQtdC90L7QtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC9hLWljZWNyZWFtLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2ljZS1jcmVhbS5tcDMnLGFsdDonaWNlIGNyZWFtIGltYWdlJ30se3dvcmQ6J2JyZWFkJyx0cmFuc2xhdGlvbjon0YXQu9C10LEnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1icmVhZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9icmVhZC5tcDMnLGFsdDonYnJlYWQgaW1hZ2UnfSx7d29yZDonYnV0dGVyJyx0cmFuc2xhdGlvbjon0LzQsNGB0LvQvicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWJ1dHRlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9idXR0ZXIubXAzJyxhbHQ6J2J1dHRlciBpbWFnZSd9LHt3b3JkOidjYWtlJyx0cmFuc2xhdGlvbjon0L/QuNGA0L7QttC90L7QtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWNha2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvY2FrZS5tcDMnLGFsdDonY2FrZSBpbWFnZSd9LHt3b3JkOidjaGVlc2UnLHRyYW5zbGF0aW9uOifRgdGL0YAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1jaGVlc2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvY2hlZXNlLm1wMycsYWx0OidjaGVlc2UgaW1hZ2UnfSx7d29yZDoncGl6emEnLHRyYW5zbGF0aW9uOifQv9C40YbRhtCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtcGl6emEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvcGl6emEubXAzJyxhbHQ6J3BpenphIGltYWdlJ30se3dvcmQ6J3NhbmR3aWNoJyx0cmFuc2xhdGlvbjon0LHRg9GC0LXRgNCx0YDQvtC0JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3Ytc2FuZHdpY2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2Qvc2FuZHdpY2gubXAzJyxhbHQ6J3NhbmR3aWNoIGltYWdlJ31dfSx7c2VjdGlvbjonZnJ1aXRzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1zdHJhd2JlcnJ5LnBuZycsbGlua1BhdGg6JyNmcnVpdHMnLHNlY3Rpb25UaXRsZTonRnJ1aXRzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidhcHBsZScsdHJhbnNsYXRpb246J9GP0LHQu9C+0LrQvicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtYXBwbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9hcHBsZS5tcDMnLGFsdDonYXBwbGUgaW1hZ2UnfSx7d29yZDonY2hlcnJ5Jyx0cmFuc2xhdGlvbjon0LLQuNGI0L3RjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtY2hlcnJ5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvY2hlcnJ5Lm1wMycsYWx0OidjaGVycnkgaW1hZ2UnfSx7d29yZDonZ3JhcGUnLHRyYW5zbGF0aW9uOifRhNC40LPRg9GA0L3QvtC1INC60LDRgtCw0L3QuNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1ncmFwZXMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9ncmFwZS5tcDMnLGFsdDonZ3JhcGUgaW1hZ2UnfSx7d29yZDonb3JhbmdlJyx0cmFuc2xhdGlvbjon0LDQv9C10LvRjNGB0LjQvScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2Etb3JhbmdlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvb3JhbmdlLm1wMycsYWx0OidvcmFuZ2UgaW1hZ2UnfSx7d29yZDoncGVhY2gnLHRyYW5zbGF0aW9uOifQv9C10YDRgdC40LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLXBlYWNoLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvcGVhY2gubXAzJyxhbHQ6J3BlYWNoIGltYWdlJ30se3dvcmQ6J3BpbmVhcHBsZScsdHJhbnNsYXRpb246J9Cw0L3QsNC90LDRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtcGluZWFwcGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvcGluZWFwcGxlLm1wMycsYWx0OidwaW5lYXBwbGUgaW1hZ2UnfSx7d29yZDonYmFuYW5hJyx0cmFuc2xhdGlvbjon0LHQsNC90LDQvScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL3YtYmFuYW5hLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvYmFuYW5hLm1wMycsYWx0OidiYW5hbmEgaW1hZ2UnfSx7d29yZDonbGVtb24nLHRyYW5zbGF0aW9uOifQu9C40LzQvtC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvdi1sZW1vbi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2xlbW9uLm1wMycsYWx0OidsZW1vbiBpbWFnZSd9XX0se3NlY3Rpb246J3BldHMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXBvbnkucG5nJyxsaW5rUGF0aDonI3BldHMnLHNlY3Rpb25UaXRsZTonUGV0cycsc2VjdGlvbldvcmRzOlt7d29yZDonaGFtc3RlcicsdHJhbnNsYXRpb246J9GF0L7QvNGP0LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvYS1oYW1zdGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2hhbXN0ZXIubXAzJyxhbHQ6J2hhbXN0ZXIgaW1hZ2UnfSx7d29yZDoncGFycm90Jyx0cmFuc2xhdGlvbjon0L/QvtC/0YPQs9Cw0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvYS1wYXJyb3QucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvcGFycm90Lm1wMycsYWx0OidwYXJyb3QgaW1hZ2UnfSx7d29yZDondHVydGxlJyx0cmFuc2xhdGlvbjon0YfQtdGA0LXQv9Cw0YXQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLXR1cnRsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy90dXJ0bGUubXAzJyxhbHQ6J3R1cnRsZSBpbWFnZSd9LHt3b3JkOidraXR0ZW4nLHRyYW5zbGF0aW9uOifQutC+0YLRkdC90L7QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9oLWtpdHRlbi5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9raXR0ZW4ubXAzJyxhbHQ6J2tpdHRlbiBpbWFnZSd9LHt3b3JkOidwdXBweScsdHJhbnNsYXRpb246J9GJ0LXQvdC+0LonLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvaC1wdXBweS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9wdXBweS5tcDMnLGFsdDoncHVwcHkgaW1hZ2UnfSx7d29yZDonZmVycmV0Jyx0cmFuc2xhdGlvbjon0YXQvtGA0LXQuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LWZlcnJldC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9mZXJyZXQubXAzJyxhbHQ6J2ZlcnJldCBpbWFnZSd9LHt3b3JkOidmaXNoJyx0cmFuc2xhdGlvbjon0YDRi9Cx0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3BldHMvdi1maXNoLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2Zpc2gubXAzJyxhbHQ6J2Zpc2ggaW1hZ2UnfSx7d29yZDonbW91c2UnLHRyYW5zbGF0aW9uOifQvNGL0YjRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LW1vdXNlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL21vdXNlLm1wMycsYWx0Oidtb3VzZSBpbWFnZSd9XX0se3NlY3Rpb246J3NjaG9vbCcsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtcHVwaWwucG5nJyxsaW5rUGF0aDonI3NjaG9vbCcsc2VjdGlvblRpdGxlOidTY2hvb2wnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2JvYXJkJyx0cmFuc2xhdGlvbjon0LTQvtGB0LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtYm9hcmQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ib2FyZC5tcDMnLGFsdDonYm9hcmQgaW1hZ2UnfSx7d29yZDonYm9vaycsdHJhbnNsYXRpb246J9C60L3QuNCz0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWJvb2sucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ib29rLm1wMycsYWx0Oidib29rIGltYWdlJ30se3dvcmQ6J2NhbGN1bGF0b3InLHRyYW5zbGF0aW9uOifRh9C10YDQtdC/0LDRhdCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1jYWxjdWxhdG9yLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvY2FsY3VsYXRvci5tcDMnLGFsdDonY2FsY3VsYXRvciBpbWFnZSd9LHt3b3JkOidjbGFzc3Jvb20nLHRyYW5zbGF0aW9uOifRiNC60L7Qu9GM0L3Ri9C5INC60LvQsNGB0YEnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWNsYXNzcm9vbS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2NsYXNzcm9vbS5tcDMnLGFsdDonY2xhc3Nyb29tIGltYWdlJ30se3dvcmQ6J21hcCcsdHJhbnNsYXRpb246J9C60LDRgNGC0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LW1hcC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL21hcC5tcDMnLGFsdDonbWFwIGltYWdlJ30se3dvcmQ6J25vdGVib29rJyx0cmFuc2xhdGlvbjon0YLQtdGC0YDQsNC00YwnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LW5vdGVib29rLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvbm90ZWJvb2subXAzJyxhbHQ6J25vdGVib29rIGltYWdlJ30se3dvcmQ6J3NjaG9vbGJhZycsdHJhbnNsYXRpb246J9C/0L7RgNGC0YTQtdC70YwnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LXNjaG9vbGJhZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL3NjaG9vbGJhZy5tcDMnLGFsdDonc2Nob29sYmFnIGltYWdlJ30se3dvcmQ6J3RlYWNoZXInLHRyYW5zbGF0aW9uOifRg9GH0LjRgtC10LvRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtdGVhY2hlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL3RlYWNoZXIubXAzJyxhbHQ6J3RlYWNoZXIgaW1hZ2UnfV19LHtzZWN0aW9uOidzcG9ydCcsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtdGVubmlzLnBuZycsbGlua1BhdGg6JyNzcG9ydCcsc2VjdGlvblRpdGxlOidTcG9ydCcsc2VjdGlvbldvcmRzOlt7d29yZDonYmFza2V0YmFsbCcsdHJhbnNsYXRpb246J9Cx0LDRgdC60LXRgtCx0L7QuycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1iYXNrZXRiYWxsLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9iYXNrZXRiYWxsLm1wMycsYWx0OidiYXNrZXRiYWxsIGltYWdlJ30se3dvcmQ6J2N5Y2xpbmcnLHRyYW5zbGF0aW9uOifQtdC30LTQsCDQvdCwINCy0LXQu9C+0YHQuNC/0LXQtNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWN5Y2xpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2N5Y2xpbmcubXAzJyxhbHQ6J2N5Y2xpbmcgaW1hZ2UnfSx7d29yZDonZmlndXJlIHNrYXRpbmcnLHRyYW5zbGF0aW9uOifRhNC40LPRg9GA0L3QvtC1INC60LDRgtCw0L3QuNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWZpZ3VyZS1za2F0aW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9maWd1cmUtc2thdGluZy5tcDMnLGFsdDonZmlndXJlIHNrYXRpbmcgaW1hZ2UnfSx7d29yZDonZm9vdGJhbGwnLHRyYW5zbGF0aW9uOifRhNGD0YLQsdC+0LsnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtZm9vdGJhbGwucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2Zvb3RiYWxsLm1wMycsYWx0Oidmb290YmFsbCBpbWFnZSd9LHt3b3JkOidob2NrZXknLHRyYW5zbGF0aW9uOifRhdC+0LrQutC10LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtaG9ja2V5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9ob2NrZXkubXAzJyxhbHQ6J2hvY2tleSBpbWFnZSd9LHt3b3JkOidza2lpbmcnLHRyYW5zbGF0aW9uOifQu9GL0LbQvdGL0Lkg0YHQv9C+0YDRgicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1za2lpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L3NraWluZy5tcDMnLGFsdDonc2tpaW5nIGltYWdlJ30se3dvcmQ6J3N3aW1taW5nJyx0cmFuc2xhdGlvbjon0L/Qu9Cw0LLQsNC90LjQtScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1zd2ltbWluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvc3dpbW1pbmcubXAzJyxhbHQ6J3N3aW1taW5nIGltYWdlJ30se3dvcmQ6J2JveGluZycsdHJhbnNsYXRpb246J9Cx0L7QutGBJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWJveGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvYm94aW5nLm1wMycsYWx0Oidib3hpbmcgaW1hZ2UnfV19XSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyBjcmVhdGVPdmVybGF5IH0gZnJvbSAnLi9jb21wb25lbnRzL292ZXJsYXknO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IGNyZWF0ZU1haW4gfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbic7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgY3JlYXRlTW9kYWxXaW5kb3cgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWxXaW5kb3cnO1xuaW1wb3J0IHsgY3JlYXRlU3RhdGlzdGljc1BhZ2UgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGlzdGljc1BhZ2UnO1xuaW1wb3J0IHNldEV2ZW50TGlzdGVuZXJzIGZyb20gJy4vdXRpbHMvZXZlbnRzJztcbmltcG9ydCB7IHNldEdsb2JhbFZhbHVlcywgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCB9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmZldGNoKCcuLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nKVxuICAudGhlbigoZGF0YTEpID0+IGNvbnNvbGUubG9nKGRhdGExKSk7XG5cbmNvbnN0IGFwcFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlT3ZlcmxheSgpKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZUhlYWRlcigpKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZU1vZGFsV2luZG93KCkpO1xuYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlTWFpbigpKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZUZvb3RlcigpKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHNldEdsb2JhbFZhbHVlcygpO1xuICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KGRhdGEpO1xuICBjb25zdCBtYWluU2VjdGlvbiA9IEdFVF9WQVIoJ21haW5TZWN0aW9uJyk7XG4gIG1haW5TZWN0aW9uLmFwcGVuZChjcmVhdGVTdGF0aXN0aWNzUGFnZSgpKTtcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVDYXJkSXRlbUltZyIsImltZ1BhdGgiLCJpbWdBbHQiLCJpbWdDbGFzcyIsImNhcmRJdGVtSW1nIiwiY2xhc3NMaXN0IiwiYWRkIiwic3JjIiwiYWx0IiwiY3JlYXRlQ2FyZEl0ZW1UaXRsZSIsInRpdGxlVGV4dCIsInRpdGxlQ2xhc3MiLCJjYXJkVGl0bGUiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUNhcmRSb3RhdGVCdG4iLCJyb3RhdGVCdG5DbGFzcyIsInJvdGF0ZUJ0blRleHQiLCJjYXJkUm90YXRlQnRuIiwidHlwZSIsImNyZWF0ZUNhcmRJdGVtIiwiY2FyZFNlY3Rpb24iLCJjYXJkVHJhbnNsYXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzb3VuZFBhdGgiLCJjYXJkSXRlbSIsImRhdGFzZXQiLCJzZWN0aW9uIiwic291bmQiLCJjYXJkSW5uZXIiLCJjYXJkRnJvbnQiLCJjYXJkRnJvbnRJbWdDb250YWluZXIiLCJjYXJkRnJvbnRJbWciLCJhcHBlbmQiLCJjYXJkRnJvbnRUaXRsZSIsImNhcmRGcm9udFJvdGF0ZUJ0biIsImNhcmRCYWNrIiwiY2FyZEJhY2tJbWdDb250YWluZXIiLCJjYXJkQmFja0ltZyIsImNhcmRCYWNrVGl0bGUiLCJjcmVhdGVGb290ZXIiLCJmb290ZXJFbGVtZW50IiwicGFyYWdyYXBoIiwicGFyYWdyYXBoTGluayIsInRhcmdldCIsImhyZWYiLCJmb290ZXJDb250YWluZXIiLCJkYXRhIiwiY3JlYXRlTmF2TWVudSIsImNyZWF0ZUxvZ28iLCJjcmVhdGVUb2dnbGUiLCJjcmVhdGVOYXZNZW51QnRuIiwiY3JlYXRlU3RhdGlzdGljc0J0biIsImNyZWF0ZUhlYWRlciIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJMb2dvIiwiaGVhZGVyQnRuc0NvbnRhaW5lciIsInRvZ2dsZUJ0biIsInN0YXRCdG4iLCJoZWFkZXJOYXYiLCJuYXZNZW51QnRuIiwibmF2aWdhdGlvbk1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IiwiaGlkZVN0YXRUYWJsZSIsIkdFVF9WQVIiLCJsb2dvVGV4dCIsImxvZ29IcmVmIiwiaGVhZGVyTG9nb0xpbmsiLCJsb2dvRnVuY3Rpb25hbGl0eSIsInNldExvZ29FdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24iLCJpc01haW5NZW51IiwiaXNDYXJkIiwiaXNUcmFpbk1vZGUiLCJpc1BsYXlNb2RlIiwidHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSIsImlzR2FtZVN0YXJ0ZWQiLCJpc0FjdGl2ZUNhcmQiLCJ1cGRhdGVTb3VuZExpc3QiLCJhZGRTY29yZUljb24iLCJwbGF5U291bmQiLCJpc0dhbWVPdmVyIiwiaXNHYW1lT3ZlclN1Y2Nlc3MiLCJ1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEiLCJ1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSIsInNob3dPdmVybGF5IiwiY3JlYXRlUGxheVJlcGVhdEJ0biIsInBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5Iiwic2hvd01vZGFsV2luZG93IiwiaGlkZU1vZGFsV2luZG93IiwiY3JlYXRlTWFpbiIsIm1haW5FbGVtZW50IiwibWFpbkNvbnRhaW5lciIsInNjb3JlTGluZSIsImNhdGVnb3J5TmFtZSIsImNhcmRMaXN0IiwiY2F0ZWdvcnkiLCJtb2RlIiwicGxheVJlcGVhdEJ0biIsIm1haW5NZW51RnVuY3Rpb25hbGl0eSIsImNsb3Nlc3QiLCJtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkiLCJldmVudCIsImNhcmRzTGlzdCIsImN1cnJlbnRDYXJkIiwiY3VycmVudENhcmRGcm9udCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50Q2FyZFNvdW5kIiwiY3VycmVudFNvdW5kIiwiYXQiLCJjb3JyZWN0QW5zd2VyU291bmQiLCJzdWNjZXNzU291bmQiLCJjb3JyZWN0SWNvblNyYyIsIndyb25nSWNvblNyYyIsIndyb25nQW5zd2VyU291bmQiLCJmYWlsdXJlU291bmQiLCJjb250YWlucyIsInNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSIsImhpZGVPdmVybGF5IiwiY3JlYXRlTW9kYWxXaW5kb3ciLCJtb2RhbFdpbmRvdyIsImljb24iLCJ0ZXh0IiwiaDMiLCJtb2RhbFdpbmRvd0ljb24iLCJtb2RhbFdpbmRvd1RleHQiLCJtb2RhbFdpbmRvd2hTY29yZSIsImRvY3VtZW50Iiwic2NvcmVMaW5lSWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW1vdW50T2ZNaXN0YWtlcyIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsIml0ZW0iLCJpbmRleE9mIiwiY29uY2F0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNyZWF0ZU5hdk1lbnVJdGVtIiwiZGF0YVNldCIsIm5hdk1lbnVVbCIsImkiLCJvcGVuTmF2TWVudSIsImhlYWRlck1lbnUiLCJuYXZNZW51TGlua3MiLCJmb3JFYWNoIiwibGluayIsInRhYkluZGV4IiwiY2xvc2VOYXZNZW51Iiwic2V0TmF2TWVudUFjdGl2ZVN0YXRlIiwibGlua3MiLCJsaW5rU2VjdGlvbiIsInJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSIsImhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5IiwiaGFtYnVyZ2VyQnRuIiwiY2xpY2siLCJzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciIsInNwYW4xIiwic3BhbjIiLCJzcGFuMyIsIm5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IiwiY2FwaXRhbGl6ZUZpcnN0V29yZCIsImxpbmtOYW1lIiwibGkiLCJjcmVhdGVPdmVybGF5Iiwib3ZlcmxheUVsZW1lbnQiLCJvdmVybGF5IiwiYm9keSIsIm92ZXJsYXlGdW5jdGlvbmFsaXR5IiwiYnV0dG9uIiwic291bmRzTGlzdCIsInJlc2V0UGxheVJlcGVhdEJ0blN0YXRlIiwic2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkiLCJjcmVhdGVTY29yZUxpbmVJY29uIiwic2NvcmVJY29uIiwiY3JlYXRlU3RhdGlzdGljc1RhYmxlIiwic2V0R2xvYmFsVmFsdWVzIiwic2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSIsInNob3dTdGF0VGFibGUiLCJTRVRfVkFSIiwic3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJzdGF0aXN0aWNzUGFnZSIsInN0YXRpc3RpY3NQYWdlQ29udGFpbmVyIiwic3RhdGlzdGljc1RhYmxlIiwic3RhdGlzdGljRGF0YSIsInNsaWNlIiwicmVwZWF0QnRuIiwic29ydCIsImEiLCJiIiwiZWxlbTEiLCJlbGVtMiIsInJlcGVhdGVkRGF0YSIsIm1hcCIsImVsZW0iLCJUcmFuc2xhdGlvbiIsInJlcGVhdGVkRGF0YVNldCIsInNlY3Rpb25Xb3JkcyIsImZsYXQiLCJpbmNsdWRlcyIsInRyYW5zbGF0aW9uIiwiZGlzYWJsZWQiLCJjcmVhdGVEaWZmV29yZHNTZWN0aW9uIiwiY3JlYXRlU3RhdGlzdGljc1BhZ2UiLCJzdGF0aXN0aWNzRGF0YSIsInN0YXRpc3RpY3NQYWdlQnV0dG9ucyIsInJlc2V0QnRuIiwic3RhdGlzdGljc1BhZ2VUYWJsZSIsInJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkiLCJyZXNldFN0YXRCdG4iLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInJlcGVhdERpZmZXb3Jkc0Z1bmN0aW9uYWxpdHkiLCJyZXBlYXREaWZmV29yZHNCdG4iLCJ1cGRhdGVNb2RlIiwiYXJpYVByZXNzZWQiLCJ0b2dnbGVNb2RlVHJhaW4iLCJ0b2dnbGVNb2RlUGxheSIsInRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkiLCJzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJuYW1lIiwiZWxlbWVudCIsImNhcmQiLCJpY29uc0Ftb3VudCIsImNhcmRzQW1vdW50IiwiY2xlYXJDYXJkc0xpc3RDb250YWluZXIiLCJjb250YWluZXIiLCJpbm5lckhUTUwiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsInNodWZmbGVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIl9yZWYiLCJwb3AiLCJjcmVhdGVOZXdTb3VuZHNMaXN0IiwiY2FyZHMiLCJwdXNoIiwicGVyY2VudENvcnJlY3RBbnN3ZXJzIiwib2JqIiwicm91bmQiLCJDb3JyZWN0IiwiSW5jb3JyZWN0IiwiY3JlYXRlU3RhcnRpbmdTdGF0aXN0aWNEYXRhIiwicmVzdWx0IiwiQ2F0ZWdvcnkiLCJzZWN0aW9uVGl0bGUiLCJXb3JkIiwid29yZCIsIlRyYWluZWQiLCJjcmVhdGVTdGF0aXN0aWNzRGF0YSIsInNhdmVkRGF0YSIsImdldEl0ZW0iLCJzdGFydGluZ0RhdGEiLCJzdGFydGluZ0RhdGFUb0pzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImFwcGx5IiwiY3VycmVudERhdGEiLCJwYXJzZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicmVzZXRDYXJkc1N0YXRlIiwibWFpblNlY3Rpb24iLCJtYWluU2VjdGlvbkNvbnRhaW5lciIsInJlc2V0Q2FyZHNTb3VuZHNMaXN0IiwicmVzZXRTY29yZUxpbmUiLCJwbGF5TW9kZSIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQiLCJzdGF0aXN0aWNzVGFibGVIZWFkIiwiaGVhZGVyUm93IiwiaGVhZGVyUm93RGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoZWFkZXJSb3dUaCIsImNvbHVtbiIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkiLCJzdGF0aXN0aWNzVGFibGVCb2R5IiwidEJvZHlSb3ciLCJ0Qm9keVJvd0RhdGEiLCJ2YWx1ZXMiLCJyb3dDYXRlZ29yeSIsInJvd1dvcmQiLCJyb3ciLCJ2YWx1ZSIsImluZGV4IiwidEJvZHlSb3dDZWxsIiwiY2VsbCIsInN0YXRUYWJsZSIsInN0YXRUYWJsZUhlYWRlciIsInN0YXRUYWJsZUhlYWRlckNlbGxzIiwic3RhdFRhYmxlQm9keSIsInNvcnRUeXBlIiwic29ydENhdGVnb3J5Iiwic29ydENhdGVnb3J5Q2VsbHMiLCJzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcyIsImFyZUVtcHR5Q2VsbHMiLCJldmVyeSIsIm51bTEiLCJudW0yIiwibG9jYWxlQ29tcGFyZSIsInJldmVyc2UiLCJjdXJyZW50SXRlbSIsImNhcmRMaXN0SXRlbXMiLCJfY3VycmVudERhdGEkZmlsdGVyIiwiX2N1cnJlbnREYXRhJGZpbHRlcjIiLCJfc2xpY2VkVG9BcnJheSIsImN1cnJlbnREYXRhVG9Kc29uIiwic3RhcnRJbWFnZSIsImltYWdlIiwiYXVkaW9TcmMiLCJzZWN0aW9uRGF0YSIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdGF0ZUNhcmQiLCJyb3RhdGVCYWNrIiwicHJlcGVuZCIsIlZBUklBQkxFUyIsIm1vZGFsV2luZG93SWNvbldpbiIsIm1vZGFsV2luZG93SWNvbkxvc2UiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJmZXRjaCIsInRoZW4iLCJkYXRhMSIsImNvbnNvbGUiLCJsb2ciLCJhcHBXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==