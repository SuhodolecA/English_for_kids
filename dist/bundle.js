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
    console.log('train mode');
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.trainModeFunctionality)(target, cardInner);
  } else if (!(0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isMainMenu)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isPlayMode)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isCard)(target) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameStarted)()) {
    console.log('play mode');
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
      console.log('active');
      if (currentCardSound === currentSound) {
        console.log('correct');
        currentCardFront.classList.add('inactive');
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.addScoreIcon)(currentCard, correctIconSrc);
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(currentCard, correctAnswerSound);
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.updateSoundList)();
        (0,_playRepeatBtn__WEBPACK_IMPORTED_MODULE_5__.playRepeatBtnFunctionality)(playRepeatBtn);
        if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameOver)()) {
          (0,_overlay__WEBPACK_IMPORTED_MODULE_4__.showOverlay)();
          if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameOverSuccess)()) {
            console.log('You are won!');
            (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(currentCard, successSound);
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.showModalWindow)();
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.hideModalWindow)();
          } else {
            console.log('You are lose!');
            (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.playSound)(currentCard, failureSound);
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.showModalWindow)();
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_6__.hideModalWindow)();
          }
        }
      } else {
        console.log('incorrect');
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
  }, 3500);
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
  headerNav.classList.add('open');
  headerMenu.classList.remove('slide-out');
  headerMenu.classList.add('slide-in');
};
var closeNavMenu = function closeNavMenu(headerNav) {
  var headerMenu = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_3__.GET_VAR)('headerMenu');
  headerNav.classList.remove('open');
  headerMenu.classList.remove('slide-in');
  headerMenu.classList.add('slide-out');
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
  console.log(section);
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
  // console.log('playRepeatBtnFunctionality');
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
  // playRepeatBtn.addEventListener('click', () => {
  //   playRepeatBtnFunctionality(playRepeatBtn);
  // });
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

/***/ "./src/js/components/statisticsPage.js":
/*!*********************************************!*\
  !*** ./src/js/components/statisticsPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");

var createStatisticsPage = function createStatisticsPage() {
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
  statisticsPageContainer.append(statisticsPageButtons);
  statisticsPage.append(statisticsPageContainer);
  return statisticsPage;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStatisticsPage);

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







var setEventListeners = function setEventListeners() {
  (0,_components_navMenuBtn__WEBPACK_IMPORTED_MODULE_0__.navMenuBtnFunctionality)();
  (0,_components_overlay__WEBPACK_IMPORTED_MODULE_1__.overlayFunctionality)();
  (0,_components_navMenu__WEBPACK_IMPORTED_MODULE_2__.setHamburgerMenuEventListener)();
  (0,_components_logo__WEBPACK_IMPORTED_MODULE_3__.setLogoEventListener)();
  (0,_components_main__WEBPACK_IMPORTED_MODULE_4__.setMainSectionFunctionality)();
  (0,_components_toggleBtn__WEBPACK_IMPORTED_MODULE_5__.setToggleBtnFunctionality)();
  (0,_components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_6__.setPlayRepeatBtnFunctionality)();
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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createStartPageCardSet": () => (/* binding */ createStartPageCardSet),
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
/* harmony export */   "shuffleArray": () => (/* binding */ shuffleArray),
/* harmony export */   "trainModeFunctionality": () => (/* binding */ trainModeFunctionality),
/* harmony export */   "updateMode": () => (/* binding */ updateMode),
/* harmony export */   "updateSoundList": () => (/* binding */ updateSoundList)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/utils/variables.js");
/* harmony import */ var _components_cardItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cardItem */ "./src/js/components/cardItem.js");
/* harmony import */ var _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/playRepeatBtn */ "./src/js/components/playRepeatBtn.js");
/* harmony import */ var _components_scoreLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scoreLineIcon */ "./src/js/components/scoreLineIcon.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main */ "./src/js/components/main.js");
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
var capitalizeFirstWord = function capitalizeFirstWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
var setGlobalValues = function setGlobalValues() {
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
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('isPlayMode', (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('toggleBtn').ariaPressed);
};
var resetCardsState = function resetCardsState() {
  var cards = document.querySelectorAll('.card-front');
  cards.forEach(function (card) {
    return card.classList.remove('inactive');
  });
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
  console.log('element', element);
  var audio = new Audio(soundPath);
  var cardsList = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('cardsList');
  var playRepeatBtn = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('playRepeatBtn');
  console.log('element === playRepeatBtn', element === playRepeatBtn);
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
    var soundPath = target.closest('.card-list__item').dataset.sound;
    var card = target.closest('.card-list__item');
    playSound(card, soundPath);
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
  statisticData: [{
    Category: 'Clothes',
    Word: 'cap',
    Translation: 'шапка',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }, {
    Category: 'Clothes',
    Word: 'jacket',
    Translation: 'куртка',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }, {
    Category: 'Clothes',
    Word: 'scarf',
    Translation: 'шарф',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }, {
    Category: 'Clothes',
    Word: 'shoes',
    Translation: 'ботинки',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }, {
    Category: 'Clothes',
    Word: 'blouse',
    Translation: 'блузка',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }, {
    Category: 'Clothes',
    Word: 'coat',
    Translation: 'пальто',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }, {
    Category: 'Clothes',
    Word: 'dress',
    Translation: 'платье',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }, {
    Category: 'Clothes',
    Word: 'shirt',
    Translation: 'рубашка',
    Trained: 0,
    Correct: 0,
    Incorrect: 0,
    '%': 0
  }]
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/styles.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/styles.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/btns-icons/rotate.svg */ "./src/assets/images/btns-icons/rotate.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/btns-icons/play.png */ "./src/assets/images/btns-icons/play.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/btns-icons/replay.png */ "./src/assets/images/btns-icons/replay.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{box-sizing:border-box;font-size:100%;scroll-behavior:smooth}*,:after,:before{box-sizing:inherit;margin:0;padding:0}a,a:hover,a:visited{text-decoration:none}ul{list-style-type:none}h1,h2,h3,h4,h5,h6,ul{margin:0;padding:0}.rotate{transform:rotateY(180deg)}body{background-color:#23a7d7;font-family:Comic Neue,cursive}body.noscroll{overflow:hidden}.container{margin:0 auto;max-width:75rem}@keyframes fade-in{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}.fade-in{animation:fade-in .3s ease-in-out forwards}@keyframes fade-out{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fade-out{animation:fade-out .3s ease-in-out forwards}.overlay{background-color:rgba(0,0,0,.5);bottom:0;cursor:pointer;left:0;opacity:0;position:fixed;right:0;top:0;visibility:hidden;z-index:10}@keyframes appear{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}.appear{animation:appear .5s ease-in-out forwards}.modal-window{left:50%;max-width:35em;opacity:0;position:fixed;top:50%;transform:translate(-50%,-50%);visibility:hidden;z-index:10}.modal-window__icon{vertical-align:middle;width:100%}.modal-window__text{color:#fff;font-size:2.5em;padding:.2em;text-align:center}.header-hamburger{left:1.5em;position:absolute;top:1.6em;z-index:30}.header-hamburger>span{background-color:#fff;border-radius:.6em;display:block;height:.2125em;transform-origin:3px 1px;transition:all .3s ease-in-out;width:2.1125em}.header-hamburger>span:not(:last-child){margin-bottom:.4125em}.header-hamburger:hover>span:first-child{transform:translateX(.1875rem)}.header-hamburger:hover>span:nth-child(2){transform:translateX(-.1875rem)}.header-hamburger:hover>span:last-child{transform:translateX(.1875rem)}@keyframes slide-out{0%{left:-3.125rem;opacity:1}60%{opacity:.5}to{left:-20.625rem;opacity:0}}.slide-out{animation:slide-out .5s ease-in-out forwards}@keyframes slide-in{0%{left:-20.625rem;opacity:0}10%{left:-18.75rem}80%{opacity:.3}to{left:0;opacity:1}}.slide-in{animation:slide-in .5s ease-in-out forwards}.header-menu{background:linear-gradient(40deg,#ffd970,#fc6464);box-shadow:.1875em 0 .625em rgba(0,0,0,.5),inset .1875em 0 1.25em rgba(0,0,0,.5);left:0;left:-20.625rem;min-height:100vh;min-width:20rem;padding-left:2.8125em;padding-top:6em;position:fixed;top:0;transition:all .4s ease-in-out;z-index:10}.header-menu__item:not(:last-child){margin-bottom:1.75em}.header-menu__item-link{-webkit-text-stroke:1px hsla(0,0%,100%,.8);color:transparent;font-size:1.4em;letter-spacing:2px;line-height:.6em;padding-left:2em;position:relative;text-transform:uppercase}.header-menu__item-link.active:before,.header-menu__item-link:hover:before{-webkit-text-stroke:1px #fff;filter:drop-shadow(0 0 25px hsl(0,0%,100%));width:100%}.header-menu__item-link:before{-webkit-text-stroke:1px #fff;color:#fff;content:attr(data-section);overflow:hidden;position:absolute;transition:width .3s ease-in-out;width:0}.header-menu__item-link:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link:after,.header-menu__item-link[data-section=Clothes]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Clothes]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Food]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Colours]:after,.header-menu__item-link[data-section=Food]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Colours]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Fruits]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Fruits]:after,.header-menu__item-link[data-section=Pets]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Pets]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=School]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=School]:after,.header-menu__item-link[data-section=Sport]:after{content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.header-menu__item-link[data-section=Sport]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover}.header-menu__item-link[data-section=Family]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover;content:\"\";display:block;height:1.5625rem;left:0;position:absolute;top:50%;transform:translateY(-50%);width:1.5625rem}.toggle-button{background-color:hsla(248,1%,56%,.56);border:0;border-radius:.5em;color:#fff;cursor:pointer;display:flex;overflow:hidden}.toggle-button[aria-pressed=true] .toggle-button__train{background-color:transparent}.toggle-button[aria-pressed=true] .toggle-button__play{background-color:#23d7ad}.toggle-button__mode{flex-basis:50%;font-weight:700;padding:.5em;transition:background .3s ease-in-out}@media (min-width:28.125rem){.toggle-button__mode{font-size:.9em;margin-top:0}}@media (min-width:48rem){.toggle-button__mode{font-size:1.2em}}@media (min-width:62.5rem){.toggle-button__mode{font-size:1.5em}}.toggle-button__train{background-color:#23d7ad}.statistics-button{background-color:#22d7f7;border:0;border-radius:.8em;color:#fff;cursor:pointer;font-weight:700;letter-spacing:.1em;padding:.5em .7em;transition:background .2s ease-in-out}.statistics-button:hover{background-color:#53e0f9}@media (min-width:28.125rem){.statistics-button{font-size:.9em;margin-top:0}}@media (min-width:48rem){.statistics-button{font-size:1.2em}}@media (min-width:62.5rem){.statistics-button{font-size:1.5em}}.header{padding:1.5em 1em}.header .container{align-items:center;display:flex;justify-content:space-between}.header-buttons{display:flex;flex-direction:column;font-size:.9em;gap:.5em}.header-logo__link{color:#fff;display:inline-block;font-size:.7em;margin-top:1em;text-shadow:2px 2px 5px #fff;transition:color .3s ease-in-out}.header-logo__link:hover{color:hsla(0,0%,100%,.6)}@media (min-width:28.125rem){.header-logo__link{font-size:.9em;margin-top:0}}@media (min-width:48rem){.header-logo__link{font-size:1.2em}}@media (min-width:62.5rem){.header-logo__link{font-size:1.5em}}.header-nav.open .header-hamburger>span:first-child{transform:rotate(45deg)}.header-nav.open .header-hamburger>span:nth-child(2){opacity:0}.header-nav.open .header-hamburger>span:last-child{transform:rotate(-45deg)}.card{cursor:pointer;height:18.125em;max-width:16.875em;padding:.9375em;perspective:62.5em;width:100%}.card-inner{border-radius:1em;box-shadow:0 0 1em 0 rgba(0,0,0,.5);height:100%;position:relative;text-align:center;transform-style:preserve-3d;transition:all .6s ease-in-out;width:100%}.card-inner:hover{box-shadow:0 0 1em 0 hsla(0,0%,100%,.5)}.card-pic .card-img{vertical-align:middle;width:100%}.card-back,.card-front{backface-visibility:hidden;border-radius:1em;display:flex;flex-direction:column;height:100%;overflow:hidden;position:absolute;width:100%}.card-front{background-color:#bababa;color:#000}.card-front .card-front__rotate{background:#23d7ad url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") 50% no-repeat;background-size:65%;border:0;border-top-left-radius:1rem;bottom:0;cursor:pointer;font-size:0;height:35px;position:absolute;right:0;width:35px}.card-front.inactive{background-color:#747272;cursor:auto}.card-front.inactive img{filter:grayscale(1)}.card-back{background-color:#1e90ff;color:#fff;transform:rotateY(180deg)}.card-back .rotate-btn{display:none}.card-title{background-color:#fff;color:#673ab6;font-family:Chango,cursive;font-size:1.05em;font-weight:400;margin-top:auto;padding:.875rem 0}.card-title,.play-btn{transition:all .3s ease-in-out}.play-btn{border:0;border-radius:50%;bottom:-5rem;box-shadow:0 0 1.25em rgba(0,0,0,.5);cursor:pointer;font-size:.01rem;height:3.75rem;left:50%;position:relative;transform:translateX(-50%);width:3.75rem}.play-btn.repeat:before{opacity:0}.play-btn.repeat:after{opacity:1}.play-btn:before{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")}.play-btn:after,.play-btn:before{background-position:50% 50%;content:\"\";height:3.125rem;left:54%;position:absolute;top:53%;transform:translate(-53%,-54%);width:3.125rem}.play-btn:after{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");opacity:0}.main{overflow:hidden}.main .score-line{display:flex;flex-direction:row-reverse;min-height:3.125em;overflow:hidden;width:100%}.main .score-line__icon{vertical-align:middle}.main .category-name{color:#fff;font-size:1.7em;margin-bottom:.5em;text-align:center}.main .cards-list{-moz-column-gap:.625em;column-gap:.625em;display:flex;flex-wrap:wrap;justify-content:space-around;margin-bottom:.5em;padding:.625em;row-gap:1.875em}.main .cards-list.start-page .card-front__rotate{visibility:hidden}.main .cards-list.start-page[data-mode=play] .card-inner{box-shadow:0 0 1em .5em rgba(219,219,7,.6)}.main .cards-list[data-category]:not([data-category=main-menu])[data-mode=play] .card-front__title{background-color:#fff;height:0;overflow:hidden;padding:0;position:relative}.main .cards-list[data-category]:not([data-category=main-menu])[data-mode=play] .rotate-btn{display:none}.main .cards-list[data-category]:not([data-category=main-menu])[data-mode=play]~.play-btn{bottom:1.25rem}.footer{padding:.6em 0;text-align:center}.footer-text__link{color:#fff;font-size:1em;font-weight:600;transition:color .3s linear}.footer-text__link:hover{color:hsla(0,0%,100%,.6)}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/base/_globals.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/animations/_fade-in.scss","webpack://./src/scss/animations/_fade-out.scss","webpack://./src/scss/components/_overlay.scss","webpack://./src/scss/animations/_appear.scss","webpack://./src/scss/components/_modalWindow.scss","webpack://./src/scss/components/_navMenuBtn.scss","webpack://./src/scss/animations/_slide-out.scss","webpack://./src/scss/animations/_slide-in.scss","webpack://./src/scss/components/_navMenu.scss","webpack://./src/scss/abstracts/_mixins.scss","webpack://./src/scss/components/_toggleBtn.scss","webpack://./src/scss/components/_statisticsBtn.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/components/_cardItem.scss","webpack://./src/scss/components/_playRepeatBtn.scss","webpack://./src/scss/layout/_main.scss","webpack://./src/scss/layout/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n:root {\n  font-size: 100%;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:hover {\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\n.rotate {\n  transform: rotateY(180deg);\n}\n\nbody {\n  background-color: hsl(196, 72%, 49%);\n  font-family: \"Comic Neue\", cursive;\n}\nbody.noscroll {\n  overflow: hidden;\n}\n\n.container {\n  max-width: 75rem;\n  margin: 0 auto;\n}\n\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    visibility: hidden;\n  }\n  to {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n.fade-in {\n  animation: fade-in 0.3s ease-in-out forwards;\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n    visibility: visible;\n  }\n  to {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n.fade-out {\n  animation: fade-out 0.3s ease-in-out forwards;\n}\n\n.overlay {\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: hsla(0, 0%, 0%, 0.5);\n  z-index: 10;\n  cursor: pointer;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n    visibility: hidden;\n  }\n  to {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n.appear {\n  animation: appear 0.5s ease-in-out forwards;\n}\n\n.modal-window {\n  max-width: 35em;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  visibility: hidden;\n  opacity: 0;\n}\n.modal-window__icon {\n  width: 100%;\n  vertical-align: middle;\n}\n.modal-window__text {\n  font-size: 2.5em;\n  color: hsl(0, 0%, 100%);\n  text-align: center;\n  padding: 0.2em;\n}\n\n.header-hamburger {\n  position: absolute;\n  z-index: 30;\n  left: 1.5em;\n  top: 1.6em;\n}\n.header-hamburger > span {\n  display: block;\n  width: 2.1125em;\n  height: 0.2125em;\n  border-radius: 0.6em;\n  background-color: hsl(0, 0%, 100%);\n  transform-origin: 3px 1px;\n  transition: all 0.3s ease-in-out;\n}\n.header-hamburger > span:not(:last-child) {\n  margin-bottom: 0.4125em;\n}\n.header-hamburger:hover > span:first-child {\n  transform: translateX(0.1875rem);\n}\n.header-hamburger:hover > span:nth-child(2) {\n  transform: translateX(-0.1875rem);\n}\n.header-hamburger:hover > span:last-child {\n  transform: translateX(0.1875rem);\n}\n\n@keyframes slide-out {\n  from {\n    left: -3.125rem;\n    opacity: 1;\n  }\n  60% {\n    opacity: 0.5;\n  }\n  to {\n    left: -20.625rem;\n    opacity: 0;\n  }\n}\n.slide-out {\n  animation: slide-out 0.5s ease-in-out forwards;\n}\n\n@keyframes slide-in {\n  from {\n    left: -20.625rem;\n    opacity: 0;\n  }\n  10% {\n    left: -18.75rem;\n  }\n  80% {\n    opacity: 0.3;\n  }\n  to {\n    left: 0;\n    opacity: 1;\n  }\n}\n.slide-in {\n  animation: slide-in 0.5s ease-in-out forwards;\n}\n\n.header-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  left: -20.625rem;\n  z-index: 10;\n  min-width: 20rem;\n  min-height: 100vh;\n  padding-top: 6em;\n  padding-left: 2.8125em;\n  background: linear-gradient(40deg, hsl(44, 100%, 72%), hsl(0, 96%, 69%));\n  box-shadow: 0.1875em 0 0.625em hsla(0, 0%, 0%, 0.5), inset 0.1875em 0 1.25em hsla(0, 0%, 0%, 0.5);\n  transition: all 0.4s ease-in-out;\n}\n.header-menu__item:not(:last-child) {\n  margin-bottom: 1.75em;\n}\n.header-menu__item-link {\n  font-size: 1.4em;\n  line-height: 0.6em;\n  padding-left: 2em;\n  color: transparent;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  position: relative;\n  -webkit-text-stroke: 1px hsla(0, 0%, 100%, 0.8);\n}\n.header-menu__item-link.active::before {\n  width: 100%;\n  -webkit-text-stroke: 1px hsl(0, 0%, 100%);\n  filter: drop-shadow(0 0 25px hsl(0, 0%, 100%));\n}\n.header-menu__item-link:hover::before {\n  width: 100%;\n  -webkit-text-stroke: 1px hsl(0, 0%, 100%);\n  filter: drop-shadow(0 0 25px hsl(0, 0%, 100%));\n}\n.header-menu__item-link::before {\n  content: attr(data-section);\n  position: absolute;\n  color: hsl(0, 0%, 100%);\n  width: 0%;\n  overflow: hidden;\n  transition: width 0.3s ease-in-out;\n  -webkit-text-stroke: 1px hsl(0, 0%, 100%);\n}\n.header-menu__item-link::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/home.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Clothes]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/clothes.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Food]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/food.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Colours]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/colours.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Fruits]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/fruits.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Pets]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/pets.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=School]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/school.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Sport]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/sports.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.header-menu__item-link[data-section=Family]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: url(\"../assets/images/header-menu-icons/family.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n\n.toggle-button {\n  background-color: hsla(248, 1%, 56%, 0.56);\n  color: hsl(0, 0%, 100%);\n  border: 0;\n  border-radius: 0.5em;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n}\n.toggle-button[aria-pressed=true] .toggle-button__train {\n  background-color: transparent;\n}\n.toggle-button[aria-pressed=true] .toggle-button__play {\n  background-color: hsl(166, 72%, 49%);\n}\n.toggle-button__mode {\n  flex-basis: 50%;\n  padding: 0.5em;\n  font-weight: 700;\n  transition: background 0.3s ease-in-out;\n}\n@media (min-width: 28.125rem) {\n  .toggle-button__mode {\n    font-size: 0.9em;\n    margin-top: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .toggle-button__mode {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 62.5rem) {\n  .toggle-button__mode {\n    font-size: 1.5em;\n  }\n}\n.toggle-button__train {\n  background-color: hsl(166, 72%, 49%);\n}\n\n.statistics-button {\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(189, 93%, 55%);\n  border: 0;\n  border-radius: 0.8em;\n  padding: 0.5em 0.7em;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.statistics-button:hover {\n  background-color: hsl(189, 93%, 65%);\n}\n@media (min-width: 28.125rem) {\n  .statistics-button {\n    font-size: 0.9em;\n    margin-top: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .statistics-button {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 62.5rem) {\n  .statistics-button {\n    font-size: 1.5em;\n  }\n}\n\n.header {\n  padding: 1.5em 1em;\n}\n.header .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  font-size: 0.9em;\n}\n.header-logo__link {\n  color: hsl(0, 0%, 100%);\n  font-size: 0.7em;\n  display: inline-block;\n  margin-top: 1em;\n  text-shadow: 2px 2px 5px hsl(0, 10%, 100%);\n  transition: color 0.3s ease-in-out;\n}\n.header-logo__link:hover {\n  color: hsla(0, 0%, 100%, 0.6);\n}\n@media (min-width: 28.125rem) {\n  .header-logo__link {\n    font-size: 0.9em;\n    margin-top: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .header-logo__link {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 62.5rem) {\n  .header-logo__link {\n    font-size: 1.5em;\n  }\n}\n.header-nav.open .header-hamburger > span:first-child {\n  transform: rotate(45deg);\n}\n.header-nav.open .header-hamburger > span:nth-child(2) {\n  opacity: 0;\n}\n.header-nav.open .header-hamburger > span:last-child {\n  transform: rotate(-45deg);\n}\n\n.card {\n  max-width: 16.875em;\n  width: 100%;\n  height: 18.125em;\n  padding: 0.9375em;\n  perspective: 62.5em;\n  cursor: pointer;\n}\n.card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  border-radius: 1em;\n  transition: all 0.6s ease-in-out;\n  box-shadow: 0 0 1em 0 hsla(0, 0%, 0%, 0.5);\n  transform-style: preserve-3d;\n}\n.card-inner:hover {\n  box-shadow: 0 0 1em 0 hsla(0, 0%, 100%, 0.5);\n}\n.card-pic .card-img {\n  width: 100%;\n  vertical-align: middle;\n}\n.card-front, .card-back {\n  position: absolute;\n  border-radius: 1em;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.card-front {\n  background-color: hsl(0, 0%, 73%);\n  color: hsl(0, 0%, 0%);\n}\n.card-front .card-front__rotate {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 35px;\n  height: 35px;\n  font-size: 0;\n  border: 0;\n  background: hsl(166, 72%, 49%) url(\"../assets/images/btns-icons/rotate.svg\") center center no-repeat;\n  background-size: 65%;\n  border-top-left-radius: 1rem;\n  cursor: pointer;\n}\n.card-front.inactive {\n  background-color: hsl(0, 1%, 45%);\n  cursor: initial;\n}\n.card-front.inactive img {\n  filter: grayscale(1);\n}\n.card-back {\n  background-color: dodgerblue;\n  color: white;\n  transform: rotateY(180deg);\n}\n.card-back .rotate-btn {\n  display: none;\n}\n.card-title {\n  font-family: \"Chango\", cursive;\n  font-size: 1.05em;\n  font-weight: 400;\n  color: hsl(262, 52%, 47%);\n  margin-top: auto;\n  padding: 0.875rem 0;\n  background-color: hsl(0, 0%, 100%);\n  transition: all 0.3s ease-in-out;\n}\n\n.play-btn {\n  position: relative;\n  font-size: 0.01rem;\n  border: 0;\n  border-radius: 50%;\n  width: 3.75rem;\n  height: 3.75rem;\n  bottom: -5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  cursor: pointer;\n  box-shadow: 0 0 1.25em hsla(0, 0%, 0%, 0.5);\n  transition: all 0.3s ease-in-out;\n}\n.play-btn.repeat::before {\n  opacity: 0;\n}\n.play-btn.repeat::after {\n  opacity: 1;\n}\n.play-btn::before {\n  content: \"\";\n  background-image: url(\"../assets/images/btns-icons/play.png\");\n  background-position: 50% 50%;\n  width: 3.125rem;\n  height: 3.125rem;\n  position: absolute;\n  top: 53%;\n  left: 54%;\n  transform: translate(-53%, -54%);\n}\n.play-btn::after {\n  content: \"\";\n  background-image: url(\"../assets/images/btns-icons/replay.png\");\n  background-position: 50% 50%;\n  width: 3.125rem;\n  height: 3.125rem;\n  position: absolute;\n  top: 53%;\n  left: 54%;\n  transform: translate(-53%, -54%);\n  opacity: 0;\n}\n\n.main {\n  overflow: hidden;\n}\n.main .score-line {\n  min-height: 3.125em;\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  overflow: hidden;\n}\n.main .score-line__icon {\n  vertical-align: middle;\n}\n.main .category-name {\n  font-size: 1.7em;\n  text-align: center;\n  margin-bottom: 0.5em;\n  color: hsl(0, 0%, 100%);\n}\n.main .cards-list {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 0.625em;\n  row-gap: 1.875em;\n  justify-content: space-around;\n  padding: 0.625em;\n  margin-bottom: 0.5em;\n}\n.main .cards-list.start-page .card-front__rotate {\n  visibility: hidden;\n}\n.main .cards-list.start-page[data-mode=play] .card-inner {\n  box-shadow: 0 0 1em 0.5em rgba(219, 219, 7, 0.6);\n}\n.main .cards-list[data-category]:not([data-category=main-menu])[data-mode=play] .card-front__title {\n  position: relative;\n  padding: 0;\n  background-color: hsl(0, 0%, 100%);\n  height: 0;\n  overflow: hidden;\n}\n.main .cards-list[data-category]:not([data-category=main-menu])[data-mode=play] .rotate-btn {\n  display: none;\n}\n.main .cards-list[data-category]:not([data-category=main-menu])[data-mode=play] ~ .play-btn {\n  bottom: 1.25rem;\n}\n\n.footer {\n  text-align: center;\n  padding: 0.6em 0;\n}\n.footer-text__link {\n  color: hsl(0, 0%, 100%);\n  font-size: 1em;\n  font-weight: 600;\n  transition: color 0.3s linear;\n}\n.footer-text__link:hover {\n  color: hsla(0, 0%, 100%, 0.6);\n}",":root {\r\n  font-size: 100%;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// Links\r\na,\r\na:visited,\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n// Lists\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// Headlines\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.rotate {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n// font-family: 'Chango', cursive;\r\n//font-family: 'Comic Neue', cursive;\r\n\r\nbody {\r\n  background-color: $color-primary;\r\n  font-family: 'Comic Neue', cursive;\r\n\r\n\r\n  &.noscroll {\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n// container\r\n.container {\r\n  max-width: 75rem;\r\n  margin: 0 auto;\r\n}\r\n","// Colors\r\n$color-primary: hsl(196, 72%, 49%);\r\n$whiteColor: hsl(0, 0%, 100%);\r\n$whiteColorShadow: hsl(0, 10%, 100%);\r\n$whiteColorHover: hsla(0, 0%, 100%, 0.6);\r\n\r\n\r\n$shadePurpleColor: hsl(262, 52%, 47%);\r\n// $toggleBlue: hsla(248, 100%, 50%, .56);\r\n$turquoiseColor: hsl(166, 72%, 49%);\r\n$lightBlueColor: hsl(189, 93%, 55%);\r\n$lightBlueColorHover: hsl(189, 93%, 65%);\r\n$inActiveColor: hsla(248, 1%, 56%, 0.56);\r\n","@keyframes fade-in {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.fade-in {\r\n    animation: fade-in .3s ease-in-out forwards;\r\n}","@keyframes fade-out {\r\n  from {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n.fade-out {\r\n    animation: fade-out .3s ease-in-out forwards;\r\n}\r\n","@import '../animations/fade-in';\r\n@import '../animations/fade-out';\r\n\r\n.overlay {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: hsla(0, 0%, 0%, .5);\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}","@keyframes appear {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.appear {\r\n    animation: appear .5s ease-in-out forwards;\r\n}","@import '../animations/appear';\r\n\r\n.modal-window {\r\n    max-width: 35em;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n\r\n    &__icon {\r\n        width: 100%;\r\n        vertical-align: middle;\r\n    }\r\n\r\n    &__text {\r\n        font-size: 2.5em;\r\n        color: $whiteColor;\r\n        text-align: center;\r\n        padding: 0.2em;\r\n    }\r\n}",".header-hamburger {\r\n  position: absolute;\r\n  z-index: 30;\r\n  left: 1.5em;\r\n  top: 1.6em;\r\n  > span {\r\n    display: block;\r\n    width: 2.1125em;\r\n    height: 0.2125em;\r\n    border-radius: 0.6em;\r\n    background-color: $whiteColor;\r\n    transform-origin: 3px 1px;\r\n    transition: all 0.3s ease-in-out;\r\n\r\n    &:not(:last-child) {\r\n      margin-bottom: 0.4125em;\r\n    }\r\n  }\r\n\r\n  &:hover {\r\n    > span:first-child {\r\n      transform: translateX(0.1875rem);\r\n    }\r\n\r\n    > span:nth-child(2) {\r\n      transform: translateX(-0.1875rem);\r\n    }\r\n\r\n    > span:last-child {\r\n      transform: translateX(0.1875rem);\r\n    }\r\n  }\r\n}\r\n","//  slide out animation for navigation menu\r\n@keyframes slide-out {\r\n  from {\r\n    left: -3.125rem;\r\n    opacity: 1;\r\n  }\r\n\r\n  60% {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  to {\r\n    left: -20.625rem;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.slide-out {\r\n  animation: slide-out 0.5s ease-in-out forwards;\r\n}","//  slide in animation for navigation menu\r\n@keyframes slide-in {\r\n  from {\r\n    left: -20.625rem;\r\n    opacity: 0;\r\n  }\r\n\r\n  10% {\r\n    left: -18.75rem;\r\n  }\r\n\r\n  80% {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  to {\r\n    left: 0;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.slide-in {\r\n  animation: slide-in 0.5s ease-in-out forwards;\r\n}","@import '../animations/slide-out';\r\n@import '../animations/slide-in';\r\n\r\n\r\n.header-menu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  left: -20.625rem;\r\n  z-index: 10;\r\n  min-width: 20rem;\r\n  min-height: 100vh;\r\n  padding-top: 6em;\r\n  padding-left: 2.8125em;\r\n  background: linear-gradient(40deg, hsl(44, 100%, 72%), hsl(0, 96%, 69%));\r\n  box-shadow: 0.1875em 0 0.625em hsla(0, 0%, 0%, 0.5), inset 0.1875em 0 1.25em hsla(0, 0%, 0%, 0.5);\r\n  transition: all 0.4s ease-in-out;\r\n\r\n  &__item:not(:last-child) {\r\n    margin-bottom: 1.75em;\r\n  }\r\n\r\n  &__item-link {\r\n    font-size: 1.4em;\r\n    line-height: 0.6em;\r\n    padding-left: 2em;\r\n    color: transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    -webkit-text-stroke: 1px hsla(0, 0%, 100%, 0.8);\r\n\r\n    &.active::before {\r\n      width: 100%;\r\n      -webkit-text-stroke: 1px $whiteColor;\r\n      filter: drop-shadow(0 0 25px $whiteColor);\r\n    }\r\n\r\n    &:hover {\r\n      &::before {\r\n        width: 100%;\r\n        -webkit-text-stroke: 1px $whiteColor;\r\n        filter: drop-shadow(0 0 25px $whiteColor);\r\n      }\r\n    }\r\n\r\n    &::before {\r\n      content: attr(data-section);\r\n      position: absolute;\r\n      color: $whiteColor;\r\n      width: 0%;\r\n      overflow: hidden;\r\n      transition: width 0.3s ease-in-out;\r\n      -webkit-text-stroke: 1px $whiteColor;\r\n    }\r\n\r\n    &::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/home.png');\r\n    }\r\n\r\n    &[data-section='Clothes']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/clothes.png');\r\n    }\r\n\r\n    &[data-section='Food']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/food.png');\r\n    }\r\n\r\n    &[data-section='Colours']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/colours.png');\r\n    }\r\n\r\n    &[data-section='Fruits']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/fruits.png');\r\n    }\r\n\r\n    &[data-section='Pets']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/pets.png');\r\n    }\r\n\r\n    &[data-section='School']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/school.png');\r\n    }\r\n\r\n    &[data-section='Sport']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/sports.png');\r\n    }\r\n\r\n    &[data-section='Family']::after {\r\n      @include insert-icons('../assets/images/header-menu-icons/family.png');\r\n    }\r\n  }\r\n}\r\n","@mixin insert-icons($path) {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background: url($path);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 1.5625rem;\r\n  height: 1.5625rem;\r\n}\r\n",".toggle-button {\r\n  background-color: $inActiveColor;\r\n  color: $whiteColor;\r\n  border: 0;\r\n  border-radius: 0.5em;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  display: flex;\r\n\r\n  &[aria-pressed='true'] {\r\n    .toggle-button__train {\r\n      background-color: transparent;\r\n    }\r\n\r\n    .toggle-button__play {\r\n      background-color: $turquoiseColor;\r\n    }\r\n  }\r\n\r\n  &__mode {\r\n    flex-basis: 50%;\r\n    padding: 0.5em;\r\n    font-weight: 700;\r\n    transition: background 0.3s ease-in-out;\r\n\r\n    @media (min-width: 28.125rem) {\r\n      font-size: 0.9em;\r\n      margin-top: 0;\r\n    }\r\n\r\n    @media (min-width: 48rem) {\r\n      font-size: 1.2em;\r\n    }\r\n\r\n    @media (min-width: 62.5rem) {\r\n      font-size: 1.5em;\r\n    }\r\n  }\r\n\r\n  &__train {\r\n    background-color: $turquoiseColor;\r\n  }\r\n}\r\n",".statistics-button {\r\n  font-weight: 700;\r\n  letter-spacing: 0.1em;\r\n  color: $whiteColor;\r\n  background-color: $lightBlueColor;\r\n  border: 0;\r\n  border-radius: 0.8em;\r\n  padding: 0.5em 0.7em;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease-in-out;\r\n\r\n  &:hover {\r\n    background-color: $lightBlueColorHover;\r\n  }\r\n\r\n  @media (min-width: 28.125rem) {\r\n    font-size: 0.9em;\r\n    margin-top: 0;\r\n  }\r\n\r\n  @media (min-width: 48rem) {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  @media (min-width: 62.5rem) {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n","@import '../components/navMenuBtn';\r\n@import '../components/navMenu';\r\n@import '../components/toggleBtn';\r\n@import '../components/statisticsBtn';\r\n\r\n.header {\r\n  padding: 1.5em 1em;\r\n\r\n  .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  &-buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5em;\r\n    font-size: 0.9em;\r\n  }\r\n\r\n  &-logo__link {\r\n    color: $whiteColor;\r\n    font-size: 0.7em;\r\n    display: inline-block;\r\n    margin-top: 1em;\r\n    text-shadow: 2px 2px 5px $whiteColorShadow;\r\n    transition: color 0.3s ease-in-out;\r\n\r\n    &:hover {\r\n      color: $whiteColorHover;\r\n    }\r\n\r\n    @media (min-width: 28.125rem) {\r\n      font-size: 0.9em;\r\n      margin-top: 0;\r\n    }\r\n\r\n    @media (min-width: 48rem) {\r\n      font-size: 1.2em;\r\n    }\r\n\r\n    @media (min-width: 62.5rem) {\r\n      font-size: 1.5em;\r\n    }\r\n  }\r\n\r\n  &-nav.open {\r\n      .header-hamburger {\r\n        > span:first-child {\r\n          transform: rotate(45deg);\r\n        }\r\n\r\n        > span:nth-child(2) {\r\n          opacity: 0;\r\n        }\r\n\r\n        > span:last-child {\r\n          transform: rotate(-45deg);\r\n        }\r\n      }\r\n    }\r\n}\r\n",".card {\r\n    max-width: 16.875em;\r\n    width: 100%;\r\n    height: 18.125em;\r\n    padding: 0.9375em;\r\n    perspective: 62.5em;\r\n    cursor: pointer;\r\n\r\n    &-inner {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        text-align: center;\r\n        border-radius: 1em;\r\n        transition: all .6s ease-in-out;\r\n        box-shadow: 0 0 1em 0 hsla(0, 0%, 0%, .5);\r\n        transform-style: preserve-3d;\r\n\r\n\r\n        &:hover {\r\n            box-shadow: 0 0 1em 0 hsla(0, 0%, 100%, .5);\r\n        }\r\n    }\r\n\r\n     &-pic {\r\n        .card-img {\r\n            width: 100%;\r\n            vertical-align: middle;\r\n        }\r\n    }\r\n\r\n    &-front,\r\n    &-back {\r\n        position: absolute;\r\n        border-radius: 1em;\r\n        overflow: hidden;\r\n        -webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    &-front {\r\n        background-color: hsl(0, 0%, 73%);\r\n        color: hsl(0, 0%, 0%);\r\n\r\n        .card-front__rotate {\r\n             position: absolute;\r\n             right: 0;\r\n             bottom: 0;\r\n             width: 35px;\r\n             height: 35px;\r\n             font-size: 0;\r\n             border: 0;\r\n             background: $turquoiseColor url('../assets/images/btns-icons/rotate.svg') center center no-repeat;\r\n             background-size: 65%;\r\n             border-top-left-radius: 1rem;\r\n             cursor: pointer;\r\n        }\r\n\r\n        &.inactive {\r\n            background-color: hsl(0, 1%, 45%);\r\n            cursor: initial;\r\n\r\n            img {\r\n                filter: grayscale(1);\r\n            }\r\n        }\r\n    }\r\n\r\n    &-back {\r\n        background-color: dodgerblue;\r\n        color: white;\r\n        transform: rotateY(180deg);\r\n\r\n        .rotate-btn {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n\r\n    &-title {\r\n        font-family: 'Chango', cursive;\r\n        font-size: 1.05em;\r\n        font-weight: 400;\r\n        color: $shadePurpleColor;\r\n        margin-top: auto;\r\n        padding: 0.875rem 0;\r\n        background-color: $whiteColor;\r\n        transition: all .3s ease-in-out;\r\n    }\r\n}",".play-btn {\r\n    position: relative;\r\n    font-size: 0.01rem;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    width: 3.75rem;\r\n    height: 3.75rem;\r\n    bottom: -5rem;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    cursor: pointer;\r\n    box-shadow: 0 0 1.25em hsla(0, 0%, 0%, .5);\r\n    transition: all .3s ease-in-out;\r\n\r\n    &.repeat {\r\n        &::before {\r\n            opacity: 0;\r\n        }\r\n        &::after {\r\n            opacity: 1;\r\n        }\r\n    }\r\n\r\n\r\n\r\n    &::before {\r\n        content: '';\r\n        background-image: url('../assets/images/btns-icons/play.png');\r\n        background-position: 50% 50%;\r\n        width: 3.125rem;\r\n        height: 3.125rem;\r\n        position: absolute;\r\n        top: 53%;\r\n        left: 54%;\r\n        transform: translate(-53%, -54%);\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        background-image: url('../assets/images/btns-icons/replay.png');\r\n        background-position: 50% 50%;\r\n        width: 3.125rem;\r\n        height: 3.125rem;\r\n        position: absolute;\r\n        top: 53%;\r\n        left: 54%;\r\n        transform: translate(-53%, -54%);\r\n        opacity: 0;\r\n    }\r\n}","@import '../components/cardItem';\r\n@import '../components/playRepeatBtn';\r\n\r\n.main {\r\n    overflow: hidden;\r\n\r\n    .score-line {\r\n        min-height: 3.125em;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: row-reverse;\r\n        overflow: hidden;\r\n\r\n        &__icon {\r\n            vertical-align: middle;\r\n        }\r\n    }\r\n    .category-name {\r\n        font-size: 1.7em;\r\n        text-align: center;\r\n        margin-bottom: .5em;\r\n        color: $whiteColor;\r\n    }\r\n\r\n    .cards-list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        column-gap: 0.625em;\r\n        row-gap: 1.875em;\r\n        justify-content: space-around;\r\n        padding: 0.625em;\r\n        margin-bottom: .5em;\r\n\r\n\r\n        &.start-page {\r\n            .card-front__rotate {\r\n                visibility: hidden;\r\n            }\r\n        }\r\n\r\n        &.start-page[data-mode=\"play\"]{\r\n        .card-inner {\r\n            box-shadow: 0 0 1em 0.5em rgba(219, 219, 7, 0.6);\r\n        }\r\n     }\r\n\r\n     &[data-category]:not([data-category=\"main-menu\"])[data-mode=\"play\"] {\r\n        .card-front__title {\r\n            position: relative;\r\n            padding: 0;\r\n            background-color: $whiteColor;\r\n            height: 0;\r\n            overflow: hidden;\r\n        }\r\n\r\n        .rotate-btn {\r\n            display: none;\r\n        }\r\n\r\n        & ~ .play-btn {\r\n            bottom: 1.25rem;\r\n        }\r\n     }\r\n    }\r\n}\r\n\r\n",".footer {\r\n    text-align: center;\r\n    padding: 0.6em 0;\r\n\r\n    &-text__link {\r\n        color: $whiteColor;\r\n        font-size: 1em;\r\n        font-weight: 600;\r\n        transition: color 0.3s linear;\r\n\r\n        &:hover {\r\n            color: $whiteColorHover;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/assets/images/btns-icons/play.png":
/*!***********************************************!*\
  !*** ./src/assets/images/btns-icons/play.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c3090e96b03a27df79.png";

/***/ }),

/***/ "./src/assets/images/btns-icons/replay.png":
/*!*************************************************!*\
  !*** ./src/assets/images/btns-icons/replay.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e1c8d0c45f5777335a8.png";

/***/ }),

/***/ "./src/assets/images/btns-icons/rotate.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/btns-icons/rotate.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95427d88d4d4016bc74b.svg";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/clothes.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/clothes.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53816f5205b3b794c3f2.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/colours.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/colours.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2462174dc6a3668aa284.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/family.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/family.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6729a64120277bd5673.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/food.png":
/*!******************************************************!*\
  !*** ./src/assets/images/header-menu-icons/food.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d91a02db1bbbeadaf207.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/fruits.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/fruits.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2351413cc81ea73624f1.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/home.png":
/*!******************************************************!*\
  !*** ./src/assets/images/header-menu-icons/home.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ddf2eda612f02e5112a.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/pets.png":
/*!******************************************************!*\
  !*** ./src/assets/images/header-menu-icons/pets.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b31419ccb131d794ad3e.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/school.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/school.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9a3c6d30f9714f6abad.png";

/***/ }),

/***/ "./src/assets/images/header-menu-icons/sports.png":
/*!********************************************************!*\
  !*** ./src/assets/images/header-menu-icons/sports.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c7ac1f101986b39c2e2.png";

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












// import createCardItem from './components/cardItem';

var appWrapper = document.querySelector('.wrapper');
appWrapper.append((0,_components_overlay__WEBPACK_IMPORTED_MODULE_2__.createOverlay)());
appWrapper.append((0,_components_header__WEBPACK_IMPORTED_MODULE_3__["default"])());
appWrapper.append((0,_components_modalWindow__WEBPACK_IMPORTED_MODULE_6__.createModalWindow)());
appWrapper.append((0,_components_main__WEBPACK_IMPORTED_MODULE_4__.createMain)());
appWrapper.append((0,_components_statisticsPage__WEBPACK_IMPORTED_MODULE_7__["default"])());
appWrapper.append((0,_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());
document.addEventListener('DOMContentLoaded', function () {
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_9__.setGlobalValues)();
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_9__.createStartPageCardSet)(_assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__["default"]);
  (0,_utils_events__WEBPACK_IMPORTED_MODULE_8__["default"])();
  console.log((0,_utils_variables__WEBPACK_IMPORTED_MODULE_10__.GET_VAR)('headerMenu'));
  console.log((0,_utils_variables__WEBPACK_IMPORTED_MODULE_10__.GET_VAR)('cardsList'));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2NhcmRJdGVtLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWxXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnUuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnVCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL25hdk1lbnVJdGVtLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9vdmVybGF5LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9zY29yZUxpbmVJY29uLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlQnRuLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvZXZlbnRzLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvaGVscGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvdXRpbHMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9hc3NldHMvZGF0YS9kYXRhLmpzb24iLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzP2U3NTgiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlQ2FyZEl0ZW0gPSAoaW1nUGF0aCwgaW1nQWx0LCBjYXJkVGl0bGUsIGNhcmRTZWN0aW9uLCBjYXJkVHJhbnNsYXRpb24gPSAnJywgc291bmRQYXRoID0gJycpID0+IHtcbiAgLy8gY3JlYXRlIGNhcmQgaXRlbVxuICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1saXN0X19pdGVtJyk7XG4gIGNhcmRJdGVtLmRhdGFzZXQuc2VjdGlvbiA9IGNhcmRTZWN0aW9uO1xuICBjYXJkSXRlbS5kYXRhc2V0LnNvdW5kID0gc291bmRQYXRoO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGlubmVyXG4gIGNvbnN0IGNhcmRJbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkSW5uZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbm5lcicpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHNpZGVcbiAgY29uc3QgY2FyZEZyb250ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRGcm9udC5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250Jyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgaW1hZ2UgY29udGFpbmVyXG4gIGNvbnN0IGNhcmRGcm9udEltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkRnJvbnRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fcGljJyk7XG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IGltYWdlXG4gIGNvbnN0IGNhcmRGcm9udEltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjYXJkRnJvbnRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fcGljLWltZycpO1xuICBjYXJkRnJvbnRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgY2FyZEZyb250SW1nLnNyYyA9IGltZ1BhdGg7IC8vIGRhdGEuaW1nXG4gIGNhcmRGcm9udEltZy5hbHQgPSBpbWdBbHQ7IC8vIGRhdGEuYWx0XG5cbiAgY2FyZEZyb250SW1nQ29udGFpbmVyLmFwcGVuZChjYXJkRnJvbnRJbWcpO1xuICBjYXJkRnJvbnQuYXBwZW5kKGNhcmRGcm9udEltZ0NvbnRhaW5lcik7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgdGl0bGVcbiAgY29uc3QgY2FyZEZyb250VGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICBjYXJkRnJvbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250X190aXRsZScpO1xuICBjYXJkRnJvbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gIGNhcmRGcm9udFRpdGxlLnRleHRDb250ZW50ID0gY2FyZFRpdGxlOyAvLyBkYXRhLnRpdGxlRnJvbnRcblxuICBjYXJkRnJvbnQuYXBwZW5kKGNhcmRGcm9udFRpdGxlKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCByb3RhdGUgYnV0dG9uXG4gIGNvbnN0IGNhcmRGcm9udFJvdGF0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYXJkRnJvbnRSb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fcm90YXRlJyk7XG4gIGNhcmRGcm9udFJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUtYnRuJyk7XG4gIGNhcmRGcm9udFJvdGF0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGNhcmRGcm9udFJvdGF0ZUJ0bi50ZXh0Q29udGVudCA9ICdyb3RhdGUgYnV0dG9uJztcblxuICBjYXJkRnJvbnQuYXBwZW5kKGNhcmRGcm9udFJvdGF0ZUJ0bik7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayBzaWRlXG4gIGNvbnN0IGNhcmRCYWNrID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCYWNrLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFjaycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgaW1hZ2UgY29udGFpbmVyXG4gIGNvbnN0IGNhcmRCYWNrSW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCYWNrSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFja19fcGljJyk7XG4gIGNhcmRCYWNrSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcGljJyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayBpbWFnZVxuICBjb25zdCBjYXJkQmFja0ltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjYXJkQmFja0ltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2tfX3BpYy1pbWcnKTtcbiAgY2FyZEJhY2tJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgY2FyZEJhY2tJbWcuc3JjID0gaW1nUGF0aDsgLy8gZGF0YS5pbWdcbiAgY2FyZEJhY2tJbWcuYWx0ID0gaW1nQWx0OyAvLyBkYXRhLmFsdFxuXG4gIGNhcmRCYWNrSW1nQ29udGFpbmVyLmFwcGVuZChjYXJkQmFja0ltZyk7XG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrSW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIHRpdGxlXG4gIGNvbnN0IGNhcmRCYWNrVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICBjYXJkQmFja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFja19fdGl0bGUnKTtcbiAgY2FyZEJhY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gIGNhcmRCYWNrVGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVHJhbnNsYXRpb247IC8vIGRhdGEudGl0bGVCYWNrXG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrVGl0bGUpO1xuXG4gIGNhcmRJbm5lci5hcHBlbmQoY2FyZEZyb250KTtcbiAgY2FyZElubmVyLmFwcGVuZChjYXJkQmFjayk7XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRJbm5lcik7XG4gIHJldHVybiBjYXJkSXRlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRJdGVtO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbi8vIFN0b3AgaGVyZVxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgZm9vdGVyXG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAvLyBjcmVhdGUgZm9vdGVyIHBhcmFncmFwaFxuICBjb25zdCBwYXJhZ3JhcGggPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdmb290ZXItdGV4dCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSAnO1xuXG4gIC8vIGNyZWF0ZSBmb290ZXIgcGFyYWdyYXBoIGxpbmtcbiAgY29uc3QgcGFyYWdyYXBoTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcGFyYWdyYXBoTGluay5jbGFzc0xpc3QuYWRkKCdmb290ZXItdGV4dF9fbGluaycpO1xuICBwYXJhZ3JhcGhMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICBwYXJhZ3JhcGhMaW5rLnRleHRDb250ZW50ID0gJ0FudG9uIFN1a2hhZG9sZXRzJztcbiAgcGFyYWdyYXBoTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9TdWhvZG9sZWNBJztcblxuICBwYXJhZ3JhcGguYXBwZW5kKHBhcmFncmFwaExpbmspO1xuXG4gIC8vIGNyZWF0ZSBmb290ZXIgY29udGFpbmVyXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZChwYXJhZ3JhcGgpO1xuXG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kKGZvb3RlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7XG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBjcmVhdGVOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcbmltcG9ydCB7IGNyZWF0ZUxvZ28gfSBmcm9tICcuL2xvZ28nO1xuaW1wb3J0IHsgY3JlYXRlVG9nZ2xlIH0gZnJvbSAnLi90b2dnbGVCdG4nO1xuaW1wb3J0IHsgY3JlYXRlTmF2TWVudUJ0biB9IGZyb20gJy4vbmF2TWVudUJ0bic7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgbG9nb1xuICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlTG9nbygnRW5nbGlzaCBmb3Iga2lkcycsICcjaG9tZScpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgYnV0dG9ucyBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQnRuc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJCdG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlVG9nZ2xlKCk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBzdGF0aXN0aWNzIGJ1dHRvblxuICBjb25zdCBzdGF0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0YXRCdG4udHlwZSA9ICdidXR0b24nO1xuICBzdGF0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtYnV0dG9uJyk7XG4gIHN0YXRCdG4udGV4dENvbnRlbnQgPSAnU3RhdGlzdGljcyc7XG5cbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5hcHBlbmQodG9nZ2xlQnRuKTtcbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5hcHBlbmQoc3RhdEJ0bik7XG5cbiAgLy8gY3JlYXRlIG5hdlxuICBjb25zdCBoZWFkZXJOYXYgPSBjcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgaGVhZGVyTmF2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1uYXYnKTtcblxuICAvLyBjcmVhdGUgbmF2IG1lbnUgYnV0dG9uXG4gIGNvbnN0IG5hdk1lbnVCdG4gPSBjcmVhdGVOYXZNZW51QnRuKCk7XG5cbiAgLy8gY3JlYXRlIG5hdiBtZW51XG4gIGNvbnN0IG5hdmlnYXRpb25NZW51ID0gY3JlYXRlTmF2TWVudShkYXRhKTtcblxuICBoZWFkZXJOYXYuYXBwZW5kKG5hdk1lbnVCdG4pO1xuICBoZWFkZXJOYXYuYXBwZW5kKG5hdmlnYXRpb25NZW51KTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGNvbnRhaW5lclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTmF2KTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJMb2dvKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJCdG5zQ29udGFpbmVyKTtcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmQoaGVhZGVyQ29udGFpbmVyKTtcblxuICByZXR1cm4gaGVhZGVyRWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVMb2dvID0gKGxvZ29UZXh0LCBsb2dvSHJlZikgPT4ge1xuICAvLyBjcmVhdGUgbG9nb1xuICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuXG4gIGNvbnN0IGhlYWRlckxvZ29MaW5rID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBoZWFkZXJMb2dvTGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nb19fbGluaycpO1xuICBoZWFkZXJMb2dvTGluay50ZXh0Q29udGVudCA9IGxvZ29UZXh0O1xuICBoZWFkZXJMb2dvTGluay5ocmVmID0gbG9nb0hyZWY7XG5cbiAgaGVhZGVyTG9nby5hcHBlbmQoaGVhZGVyTG9nb0xpbmspO1xuXG4gIHJldHVybiBoZWFkZXJMb2dvO1xufTtcblxuY29uc3QgbG9nb0Z1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQoZGF0YSk7XG59O1xuXG5jb25zdCBzZXRMb2dvRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyTG9nbyA9IEdFVF9WQVIoJ2hlYWRlckxvZ28nKTtcbiAgaGVhZGVyTG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ29GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxvZ28sIHNldExvZ29FdmVudExpc3RlbmVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24sIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIGlzR2FtZVN0YXJ0ZWQsXG4gIGlzQWN0aXZlQ2FyZCwgdXBkYXRlU291bmRMaXN0LCBhZGRTY29yZUljb24sIHBsYXlTb3VuZCwgaXNHYW1lT3ZlcixcbiAgaXNHYW1lT3ZlclN1Y2Nlc3MsXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5pbXBvcnQgeyB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSB9IGZyb20gJy4vbmF2TWVudSc7XG5pbXBvcnQgeyBzaG93T3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5UmVwZWF0QnRuLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgeyBzaG93TW9kYWxXaW5kb3csIGhpZGVNb2RhbFdpbmRvdyB9IGZyb20gJy4vbW9kYWxXaW5kb3cnO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgbWFpbiBlbGVtZW50XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgLy8gY3JlYXRlIG1haW4gY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc2NvcmUgbGluZVxuICBjb25zdCBzY29yZUxpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2NvcmVMaW5lLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWxpbmUnKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZChzY29yZUxpbmUpO1xuXG4gIC8vIGNyZWF0ZSBjYXRlZ29yeSBuYW1lXG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNhdGVnb3J5TmFtZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1uYW1lJyk7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9ICcnO1xuXG4gIC8vIGNhcmRzIGxpc3RcbiAgY29uc3QgY2FyZExpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjYXJkTGlzdC5jbGFzc0xpc3QuYWRkKCdjYXJkcy1saXN0Jyk7XG4gIGNhcmRMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSAnJztcbiAgY2FyZExpc3QuZGF0YXNldC5tb2RlID0gJyc7XG5cbiAgLy8gY3JlYXRlIHBsYXlSZXBlYXQgYnV0dG9uXG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBjcmVhdGVQbGF5UmVwZWF0QnRuKCk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnlOYW1lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY2FyZExpc3QpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChwbGF5UmVwZWF0QnRuKTtcblxuICBtYWluRWxlbWVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG1haW5FbGVtZW50O1xufTtcblxuY29uc3QgbWFpbk1lbnVGdW5jdGlvbmFsaXR5ID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCB7IHNlY3Rpb24gfSA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJykuZGF0YXNldDtcbiAgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbihkYXRhLCBzZWN0aW9uKTtcbiAgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUoc2VjdGlvbik7XG59O1xuXG5jb25zdCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgY2FyZElubmVyID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWlubmVyJyk7XG4gIGlmIChpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNDYXJkKHRhcmdldCkpIHtcbiAgICBtYWluTWVudUZ1bmN0aW9uYWxpdHkodGFyZ2V0KTtcbiAgfSBlbHNlIGlmICghaXNNYWluTWVudShjYXJkc0xpc3QpICYmIGlzVHJhaW5Nb2RlKGNhcmRzTGlzdCkgJiYgaXNDYXJkKHRhcmdldCkpIHtcbiAgICBjb25zb2xlLmxvZygndHJhaW4gbW9kZScpO1xuICAgIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHkodGFyZ2V0LCBjYXJkSW5uZXIpO1xuICB9IGVsc2UgaWYgKCFpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNQbGF5TW9kZShjYXJkc0xpc3QpICYmIGlzQ2FyZCh0YXJnZXQpXG4gICAgJiYgaXNHYW1lU3RhcnRlZCgpKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXkgbW9kZScpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZEZyb250ID0gY3VycmVudENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtZnJvbnQnKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZFNvdW5kID0gY3VycmVudENhcmQuZGF0YXNldC5zb3VuZDtcbiAgICBjb25zdCBjdXJyZW50U291bmQgPSBHRVRfVkFSKCdzb3VuZHNMaXN0JykuYXQoLTEpO1xuICAgIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gICAgY29uc3QgY29ycmVjdEFuc3dlclNvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL2NvcnJlY3QtY2hvaWNlLm1wMyc7XG4gICAgY29uc3Qgc3VjY2Vzc1NvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL3N1Y2Nlc3MubXAzJztcbiAgICBjb25zdCBjb3JyZWN0SWNvblNyYyA9ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL2NvcnJlY3QucG5nJztcbiAgICBjb25zdCB3cm9uZ0ljb25TcmMgPSAnYXNzZXRzL2ltYWdlcy9zY29yZS1pY29ucy93cm9uZy5wbmcnO1xuICAgIGNvbnN0IHdyb25nQW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvbmVnYXRpdmVfYmVlcHMubXAzJztcbiAgICBjb25zdCBmYWlsdXJlU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvZmFpbHVyZS5tcDMnO1xuICAgIGlmIChpc0FjdGl2ZUNhcmQoY3VycmVudENhcmRGcm9udCkgJiYgIXBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5aW5nJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUnKTtcbiAgICAgIGlmIChjdXJyZW50Q2FyZFNvdW5kID09PSBjdXJyZW50U291bmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvcnJlY3QnKTtcbiAgICAgICAgY3VycmVudENhcmRGcm9udC5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICBhZGRTY29yZUljb24oY3VycmVudENhcmQsIGNvcnJlY3RJY29uU3JjKTtcbiAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBjb3JyZWN0QW5zd2VyU291bmQpO1xuICAgICAgICB1cGRhdGVTb3VuZExpc3QoKTtcbiAgICAgICAgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkocGxheVJlcGVhdEJ0bik7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICBzaG93T3ZlcmxheSgpO1xuICAgICAgICAgIGlmIChpc0dhbWVPdmVyU3VjY2VzcygpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGFyZSB3b24hJyk7XG4gICAgICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIHN1Y2Nlc3NTb3VuZCk7XG4gICAgICAgICAgICBzaG93TW9kYWxXaW5kb3coKTtcbiAgICAgICAgICAgIGhpZGVNb2RhbFdpbmRvdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGFyZSBsb3NlIScpO1xuICAgICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBmYWlsdXJlU291bmQpO1xuICAgICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgICAgICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmNvcnJlY3QnKTtcbiAgICAgICAgYWRkU2NvcmVJY29uKGN1cnJlbnRDYXJkLCB3cm9uZ0ljb25TcmMpO1xuICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIHdyb25nQW5zd2VyU291bmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY2FyZHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU1haW4sIG1haW5NZW51RnVuY3Rpb25hbGl0eSwgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5LFxuICBzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgaXNHYW1lT3ZlclN1Y2Nlc3MsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBoaWRlT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XG5cbmNvbnN0IGNyZWF0ZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3cnKTtcblxuICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X19pY29uJyk7XG4gIGljb24uc3JjID0gJyc7XG4gIGljb24uYWx0ID0gJ2ljb24nO1xuXG4gIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X190ZXh0Jyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnJztcblxuICBtb2RhbFdpbmRvdy5hcHBlbmQoaWNvbik7XG4gIG1vZGFsV2luZG93LmFwcGVuZCh0ZXh0KTtcblxuICByZXR1cm4gbW9kYWxXaW5kb3c7XG59O1xuXG5jb25zdCBzaG93TW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsV2luZG93ID0gR0VUX1ZBUignbW9kYWxXaW5kb3cnKTtcbiAgY29uc3QgbW9kYWxXaW5kb3dJY29uID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uJyk7XG4gIGNvbnN0IG1vZGFsV2luZG93VGV4dCA9IEdFVF9WQVIoJ21vZGFsV2luZG93VGV4dCcpO1xuICBpZiAoaXNHYW1lT3ZlclN1Y2Nlc3MoKSkge1xuICAgIG1vZGFsV2luZG93SWNvbi5zcmMgPSBHRVRfVkFSKCdtb2RhbFdpbmRvd0ljb25XaW4nKTtcbiAgICBtb2RhbFdpbmRvd1RleHQudGV4dENvbnRlbnQgPSAnWW91IGFyZSB3aW4hJztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfSBlbHNlIHtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uTG9zZScpO1xuICAgIG1vZGFsV2luZG93VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgYXJlIGxvc2UhJztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhcicpO1xuICAgIGhpZGVPdmVybGF5KCk7XG4gICAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChkYXRhKTtcbiAgfSwgMzUwMCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdywgc2hvd01vZGFsV2luZG93LCBoaWRlTW9kYWxXaW5kb3cgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQsIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24gfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IGNyZWF0ZU5hdk1lbnVJdGVtIGZyb20gJy4vbmF2TWVudUl0ZW0nO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnUgPSAoZGF0YVNldCkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IHVsXG4gIGNvbnN0IG5hdk1lbnVVbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdk1lbnVVbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVNldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5hdk1lbnVVbC5hcHBlbmQoY3JlYXRlTmF2TWVudUl0ZW0oZGF0YVtpXS5zZWN0aW9uKSk7XG4gIH1cblxuICByZXR1cm4gbmF2TWVudVVsO1xufTtcblxuY29uc3Qgb3Blbk5hdk1lbnUgPSAoaGVhZGVyTmF2KSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGhlYWRlck5hdi5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtb3V0Jyk7XG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4nKTtcbn07XG5cbmNvbnN0IGNsb3NlTmF2TWVudSA9IChoZWFkZXJOYXYpID0+IHtcbiAgY29uc3QgaGVhZGVyTWVudSA9IEdFVF9WQVIoJ2hlYWRlck1lbnUnKTtcbiAgaGVhZGVyTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1pbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLW91dCcpO1xufTtcblxuY29uc3Qgc2V0TmF2TWVudUFjdGl2ZVN0YXRlID0gKGxpbmtzLCBjYXRlZ29yeSkgPT4ge1xuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgY29uc3QgbGlua1NlY3Rpb24gPSBsaW5rLmRhdGFzZXQuc2VjdGlvbjtcbiAgICBpZiAobGlua1NlY3Rpb24gPT09IGNhdGVnb3J5KSB7XG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVOYXZNZW51QWN0aXZlU3RhdGUgPSAobGlua3MpID0+IHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgbmF2TWVudUxpbmtzID0gR0VUX1ZBUignbmF2TWVudUxpbmtzJyk7XG4gIHJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZShuYXZNZW51TGlua3MpO1xuICBzZXROYXZNZW51QWN0aXZlU3RhdGUobmF2TWVudUxpbmtzLCBjYXRlZ29yeSk7XG59O1xuXG5jb25zdCBoYW1idXJnZXJNZW51RnVuY3Rpb25hbGl0eSA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjb25zdCBoYW1idXJnZXJCdG4gPSBHRVRfVkFSKCdoYW1idXJnZXJCdG4nKTtcbiAgY29uc3QgeyBzZWN0aW9uIH0gPSB0YXJnZXQuZGF0YXNldDtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY29uc29sZS5sb2coc2VjdGlvbik7XG4gIGlmIChzZWN0aW9uID09PSAnSG9tZScpIHtcbiAgICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KGRhdGEpO1xuICAgIGhhbWJ1cmdlckJ0bi5jbGljaygpO1xuICB9IGVsc2UgaWYgKHNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uKGRhdGEsIHNlY3Rpb24pO1xuICAgIGhhbWJ1cmdlckJ0bi5jbGljaygpO1xuICB9XG4gIHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlKGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCk7XG59O1xuXG5jb25zdCBzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyTWVudSA9IEdFVF9WQVIoJ2hlYWRlck1lbnUnKTtcbiAgaGVhZGVyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU5hdk1lbnUsIG9wZW5OYXZNZW51LCBjbG9zZU5hdk1lbnUsIGhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5LFxuICBzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciwgdXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUsXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCB7IHNob3dPdmVybGF5LCBoaWRlT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgeyBvcGVuTmF2TWVudSwgY2xvc2VOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcblxuY29uc3QgY3JlYXRlTmF2TWVudUJ0biA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIG5hdiBidXR0b25cbiAgY29uc3QgbmF2TWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmF2TWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaGFtYnVyZ2VyJyk7XG4gIG5hdk1lbnVCdG4uaHJlZiA9ICcjJztcblxuICBjb25zdCBzcGFuMSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3Qgc3BhbjIgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNwYW4zID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4xKTtcbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjIpO1xuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMyk7XG5cbiAgcmV0dXJuIG5hdk1lbnVCdG47XG59O1xuXG5jb25zdCBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgaGFtYnVyZ2VyQnRuID0gR0VUX1ZBUignaGFtYnVyZ2VyQnRuJyk7XG4gIGNvbnN0IGhlYWRlck5hdiA9IEdFVF9WQVIoJ2hlYWRlck5hdicpO1xuICBoYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhlYWRlck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgY2xvc2VOYXZNZW51KGhlYWRlck5hdik7XG4gICAgICBoaWRlT3ZlcmxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuTmF2TWVudShoZWFkZXJOYXYpO1xuICAgICAgc2hvd092ZXJsYXkoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTmF2TWVudUJ0biwgbmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNhcGl0YWxpemVGaXJzdFdvcmQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51SXRlbSA9IChsaW5rTmFtZSkgPT4ge1xuICAvLyBjcmVhdGUgbGlcbiAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbScpO1xuXG4gIC8vIGNyZWF0ZSBtZW51IGxpbmtcbiAgY29uc3QgbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbS1saW5rJyk7XG4gIGxpbmsuaHJlZiA9IGAjJHtsaW5rTmFtZX1gO1xuICBsaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuICBsaW5rLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0V29yZChsaW5rTmFtZSk7XG5cbiAgbGkuYXBwZW5kKGxpbmspO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdk1lbnVJdGVtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgY2xvc2VOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcblxuY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIG92ZXJsYXkgZWxlbWVudFxuICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xufTtcblxuY29uc3QgaGlkZU92ZXJsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBHRVRfVkFSKCdvdmVybGF5Jyk7XG4gIGNvbnN0IGJvZHkgPSBHRVRfVkFSKCdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbn07XG5cbmNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gR0VUX1ZBUignb3ZlcmxheScpO1xuICBjb25zdCBib2R5ID0gR0VUX1ZBUignYm9keScpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG59O1xuXG5jb25zdCBvdmVybGF5RnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IEdFVF9WQVIoJ292ZXJsYXknKTtcbiAgY29uc3QgaGVhZGVyTmF2ID0gR0VUX1ZBUignaGVhZGVyTmF2Jyk7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhlYWRlck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgIGNsb3NlTmF2TWVudShoZWFkZXJOYXYpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVPdmVybGF5LCBzaG93T3ZlcmxheSwgaGlkZU92ZXJsYXksIG92ZXJsYXlGdW5jdGlvbmFsaXR5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgcGxheVNvdW5kIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVQbGF5UmVwZWF0QnRuID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXktYnRuJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdwbGF5JztcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIC8vIGNvbnNvbGUubG9nKCdwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eScpO1xuICBjb25zdCBzb3VuZHNMaXN0ID0gR0VUX1ZBUignc291bmRzTGlzdCcpO1xuICBjb25zdCBjdXJyZW50U291bmQgPSBzb3VuZHNMaXN0LmF0KC0xKTtcbiAgaWYgKHNvdW5kc0xpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIHBsYXlTb3VuZChwbGF5UmVwZWF0QnRuLCBjdXJyZW50U291bmQpO1xuICBpZiAoIXBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXBlYXQnKSkge1xuICAgIHBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmFkZCgncmVwZWF0Jyk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICBpZiAocGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlcGVhdCcpKSB7XG4gICAgcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdyZXBlYXQnKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIC8vIHBsYXlSZXBlYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkocGxheVJlcGVhdEJ0bik7XG4gIC8vIH0pO1xuICBwbGF5UmVwZWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUGxheVJlcGVhdEJ0biwgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHksIHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlLFxuICBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVTY29yZUxpbmVJY29uID0gKHNyYykgPT4ge1xuICBjb25zdCBzY29yZUljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2NvcmVJY29uLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWxpbmVfX2ljb24nKTtcbiAgc2NvcmVJY29uLnNyYyA9IHNyYztcbiAgc2NvcmVJY29uLmFsdCA9ICdpY29uJztcblxuICByZXR1cm4gc2NvcmVJY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2NvcmVMaW5lSWNvbjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzUGFnZSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZVxuICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2UnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGNvbnRhaW5lclxuICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlQnV0dG9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scycpO1xuXG4gIC8vIGNyZWF0ZSByZXBlYXQgZGlmZmljdWx0IHdvcmRzIGJ1dHRvblxuICBjb25zdCByZXBlYXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVwZWF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZV9fY29udHJvbHMtYnRuJyk7XG4gIHJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQtYnRuJyk7XG4gIHJlcGVhdEJ0bi50ZXh0Q29udGVudCA9ICdSZXBlYXQgZGlmZmljdWx0IHdvcmRzJztcblxuICAvLyBjcmVhdGUgcmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scy1idG4nKTtcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXQtYnRuJyk7XG4gIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHN0YXRpc3RpYyc7XG5cbiAgc3RhdGlzdGljc1BhZ2VCdXR0b25zLmFwcGVuZChyZXBlYXRCdG4pO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuYXBwZW5kKHJlc2V0QnRuKTtcblxuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoc3RhdGlzdGljc1BhZ2VCdXR0b25zKTtcblxuICBzdGF0aXN0aWNzUGFnZS5hcHBlbmQoc3RhdGlzdGljc1BhZ2VDb250YWluZXIpO1xuICByZXR1cm4gc3RhdGlzdGljc1BhZ2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdGF0aXN0aWNzUGFnZTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVwZGF0ZU1vZGUgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgU0VUX1ZBUiwgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVRvZ2dsZSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIHRvZ2dsZVxuICBjb25zdCB0b2dnbGVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9nZ2xlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgdG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b24nKTtcbiAgdG9nZ2xlQnRuLmFyaWFQcmVzc2VkID0gZmFsc2U7XG5cbiAgLy8gY3JlYXRlIHRvZ2dsZSBtb2RlIHRyYWluXG4gIGNvbnN0IHRvZ2dsZU1vZGVUcmFpbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9nZ2xlTW9kZVRyYWluLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX21vZGUnKTtcbiAgdG9nZ2xlTW9kZVRyYWluLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3RyYWluJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi50ZXh0Q29udGVudCA9ICdUcmFpbic7XG5cbiAgLy8gY3JlYXRlIHRvZ2dsZSBtb2RlIHBsYXlcbiAgY29uc3QgdG9nZ2xlTW9kZVBsYXkgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRvZ2dsZU1vZGVQbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX21vZGUnKTtcbiAgdG9nZ2xlTW9kZVBsYXkuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWJ1dHRvbl9fcGxheScpO1xuICB0b2dnbGVNb2RlUGxheS50ZXh0Q29udGVudCA9ICdQbGF5JztcblxuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGVUcmFpbik7XG4gIHRvZ2dsZUJ0bi5hcHBlbmQodG9nZ2xlTW9kZVBsYXkpO1xuXG4gIHJldHVybiB0b2dnbGVCdG47XG59O1xuXG5jb25zdCB0b2dnbGVCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCB0b2dnbGVCdG4gPSBHRVRfVkFSKCd0b2dnbGVCdG4nKTtcbiAgdG9nZ2xlQnRuLmFyaWFQcmVzc2VkID0gKHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9PT0gJ2ZhbHNlJykgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICBTRVRfVkFSKCdpc1BsYXlNb2RlJywgdG9nZ2xlQnRuLmFyaWFQcmVzc2VkKTtcbiAgdXBkYXRlTW9kZSgpO1xufTtcblxuY29uc3Qgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQnRuID0gR0VUX1ZBUigndG9nZ2xlQnRuJyk7XG4gIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVG9nZ2xlLCB0b2dnbGVCdG5GdW5jdGlvbmFsaXR5LCBzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCJpbXBvcnQgeyBuYXZNZW51QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2TWVudUJ0bic7XG5pbXBvcnQgeyBvdmVybGF5RnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvb3ZlcmxheSc7XG5pbXBvcnQgeyBzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2TWVudSc7XG5pbXBvcnQgeyBzZXRMb2dvRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgeyBzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IHsgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9nZ2xlQnRuJztcbmltcG9ydCB7IHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuJztcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIG5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5KCk7XG4gIG92ZXJsYXlGdW5jdGlvbmFsaXR5KCk7XG4gIHNldEhhbWJ1cmdlck1lbnVFdmVudExpc3RlbmVyKCk7XG4gIHNldExvZ29FdmVudExpc3RlbmVyKCk7XG4gIHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSgpO1xuICBzZXRUb2dnbGVCdG5GdW5jdGlvbmFsaXR5KCk7XG4gIHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRFdmVudExpc3RlbmVycztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgU0VUX1ZBUiwgR0VUX1ZBUiB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCBjcmVhdGVDYXJkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2NhcmRJdGVtJztcbmltcG9ydCB7IHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlLCBwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgY3JlYXRlU2NvcmVMaW5lSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL3Njb3JlTGluZUljb24nO1xuaW1wb3J0IHsgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcblxuLy8gY3JlYXRlIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc01haW5NZW51ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydC1wYWdlJyk7XG5jb25zdCBpc0NhcmQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG5jb25zdCBpc0FjdGl2ZUNhcmQgPSAoY2FyZCkgPT4gIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpO1xuY29uc3QgaXNUcmFpbk1vZGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0Lm1vZGUgPT09ICd0cmFpbic7XG5jb25zdCBpc1BsYXlNb2RlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC5tb2RlID09PSAncGxheSc7XG5jb25zdCBpc0dhbWVTdGFydGVkID0gKCkgPT4gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0Jyk7XG5jb25zdCBpc0dhbWVPdmVyID0gKCkgPT4gR0VUX1ZBUignc291bmRzTGlzdCcpLmxlbmd0aCA9PT0gMDtcbmNvbnN0IGlzR2FtZU92ZXJTdWNjZXNzID0gKCkgPT4ge1xuICBjb25zdCBpY29uc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZS1saW5lX19pY29uJykubGVuZ3RoO1xuICBjb25zdCBjYXJkc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKS5sZW5ndGg7XG4gIHJldHVybiBpY29uc0Ftb3VudCA9PT0gY2FyZHNBbW91bnQ7XG59O1xuXG5jb25zdCBjbGVhckNhcmRzTGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn07XG5cbmNvbnN0IHNodWZmbGVBcnJheSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzaHVmZmxlZCA9IFsuLi5hcnJheV07XG4gIGZvciAobGV0IGkgPSBzaHVmZmxlZC5sZW5ndGggLSAxOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFtzaHVmZmxlZFtpXSwgc2h1ZmZsZWRbal1dID0gW3NodWZmbGVkW2pdLCBzaHVmZmxlZFtpXV07XG4gIH1cbiAgcmV0dXJuIHNodWZmbGVkO1xufTtcblxuY29uc3QgdXBkYXRlU291bmRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gR0VUX1ZBUignc291bmRzTGlzdCcpLnNsaWNlKCk7XG4gIHNvdW5kc0xpc3QucG9wKCk7XG4gIFNFVF9WQVIoJ3NvdW5kc0xpc3QnLCBzb3VuZHNMaXN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1NvdW5kc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICBjb25zdCBzb3VuZHNMaXN0ID0gW107XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCB7IHNvdW5kIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgc291bmRzTGlzdC5wdXNoKHNvdW5kKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNvdW5kc0xpc3Q7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RXb3JkID0gKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG5jb25zdCBzZXRHbG9iYWxWYWx1ZXMgPSAoKSA9PiB7XG4gIFNFVF9WQVIoJ2NhdGVnb3J5TmFtZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1uYW1lJykpO1xuICBTRVRfVkFSKCdjYXJkc0xpc3QnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbGlzdCcpKTtcbiAgU0VUX1ZBUignaGFtYnVyZ2VyQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1oYW1idXJnZXInKSk7XG4gIFNFVF9WQVIoJ2hlYWRlck5hdicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2JykpO1xuICBTRVRfVkFSKCdoZWFkZXJNZW51JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1tZW51JykpO1xuICBTRVRfVkFSKCduYXZNZW51TGlua3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpKTtcbiAgU0VUX1ZBUignb3ZlcmxheScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xuICBTRVRfVkFSKCdib2R5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKTtcbiAgU0VUX1ZBUignaGVhZGVyTG9nbycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nb19fbGluaycpKTtcbiAgU0VUX1ZBUigndG9nZ2xlQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1idXR0b24nKSk7XG4gIFNFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idG4nKSk7XG4gIFNFVF9WQVIoJ3Njb3JlTGluZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1saW5lJykpO1xuICBTRVRfVkFSKCdtb2RhbFdpbmRvdycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93VGV4dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX3RleHQnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93SWNvbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2ljb24nKSk7XG4gIFNFVF9WQVIoJ2lzUGxheU1vZGUnLCBHRVRfVkFSKCd0b2dnbGVCdG4nKS5hcmlhUHJlc3NlZCk7XG59O1xuXG5jb25zdCByZXNldENhcmRzU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZnJvbnQnKTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpKTtcbn07XG5cbmNvbnN0IHJlc2V0Q2FyZHNTb3VuZHNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZHNMaXN0ID0gY3JlYXRlTmV3U291bmRzTGlzdCgpO1xuICBTRVRfVkFSKCdzb3VuZHNMaXN0Jywgc2h1ZmZsZUFycmF5KHNvdW5kc0xpc3QpKTtcbn07XG5cbmNvbnN0IHJlc2V0U2NvcmVMaW5lID0gKCkgPT4ge1xuICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgc2NvcmVMaW5lLmlubmVySFRNTCA9ICcnO1xufTtcblxuY29uc3QgdXBkYXRlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IHBsYXlNb2RlID0gR0VUX1ZBUignaXNQbGF5TW9kZScpO1xuICByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSgpO1xuICByZXNldENhcmRzU3RhdGUoKTtcbiAgcmVzZXRDYXJkc1NvdW5kc0xpc3QoKTtcbiAgcmVzZXRTY29yZUxpbmUoKTtcbiAgaWYgKHBsYXlNb2RlID09PSAndHJ1ZScpIHtcbiAgICBjYXJkc0xpc3QuZGF0YXNldC5tb2RlID0gJ3BsYXknO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5kYXRhc2V0Lm1vZGUgPSAndHJhaW4nO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LmFkZCgnc3RhcnQtcGFnZScpO1xuICBjYXJkc0xpc3QuZGF0YXNldC5jYXRlZ29yeSA9ICdtYWluLW1lbnUnO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWN0aW9uICE9PSAnaG9tZScpIHtcbiAgICAgIGNvbnN0IGltZ1BhdGggPSBlbGVtZW50LnN0YXJ0SW1hZ2U7XG4gICAgICBjb25zdCBpbWdBbHQgPSBlbGVtZW50LnNlY3Rpb25Xb3Jkc1swXS5hbHQ7XG4gICAgICBjb25zdCBjYXJkVGl0bGUgPSBlbGVtZW50LnNlY3Rpb25UaXRsZTtcbiAgICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oaW1nUGF0aCwgaW1nQWx0LCBjYXJkVGl0bGUsIGNhcmRUaXRsZSk7XG4gICAgICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRJdGVtKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZHNMaXN0U2VjdGlvbiA9IChhcnJheSwgc2VjdGlvbikgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY2FyZHNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LXBhZ2UnKTtcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gR0VUX1ZBUignY2F0ZWdvcnlOYW1lJyk7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XG4gIGNhcmRzTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gc2VjdGlvbjtcbiAgdXBkYXRlTW9kZSgpO1xuICBjbGVhckNhcmRzTGlzdENvbnRhaW5lcigpO1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuc2VjdGlvblRpdGxlID09PSBzZWN0aW9uKSB7XG4gICAgICBjb25zdCBzZWN0aW9uRGF0YSA9IGVsZW1lbnQuc2VjdGlvbldvcmRzO1xuICAgICAgc2VjdGlvbkRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpbWdQYXRoID0gaXRlbS5pbWFnZTtcbiAgICAgICAgY29uc3QgaW1nQWx0ID0gaXRlbS5hbHQ7XG4gICAgICAgIGNvbnN0IGNhcmRTZWN0aW9uID0gY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBpdGVtLndvcmQ7XG4gICAgICAgIGNvbnN0IGNhcmRUcmFuc2xhdGlvbiA9IGl0ZW0udHJhbnNsYXRpb247XG4gICAgICAgIGNvbnN0IHNvdW5kUGF0aCA9IGl0ZW0uYXVkaW9TcmM7XG4gICAgICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oXG4gICAgICAgICAgaW1nUGF0aCxcbiAgICAgICAgICBpbWdBbHQsXG4gICAgICAgICAgY2FyZFRpdGxlLFxuICAgICAgICAgIGNhcmRTZWN0aW9uLFxuICAgICAgICAgIGNhcmRUcmFuc2xhdGlvbixcbiAgICAgICAgICBzb3VuZFBhdGgsXG4gICAgICAgICk7XG4gICAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmVzZXRDYXJkc1NvdW5kc0xpc3QoKTtcbn07XG5cbmNvbnN0IHBsYXlTb3VuZCA9IChlbGVtZW50LCBzb3VuZFBhdGgpID0+IHtcbiAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50KTtcbiAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oc291bmRQYXRoKTtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IHBsYXlSZXBlYXRCdG4gPSBHRVRfVkFSKCdwbGF5UmVwZWF0QnRuJyk7XG4gIGNvbnNvbGUubG9nKCdlbGVtZW50ID09PSBwbGF5UmVwZWF0QnRuJywgZWxlbWVudCA9PT0gcGxheVJlcGVhdEJ0bik7XG4gIGF1ZGlvLnBsYXkoKTtcbiAgaWYgKGVsZW1lbnQgPT09IHBsYXlSZXBlYXRCdG4pIHtcbiAgICBwbGF5UmVwZWF0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgcGxheVJlcGVhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYXJkc0xpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgY2FyZHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3Qgcm90YXRlQ2FyZCA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgfVxufTtcblxuY29uc3Qgcm90YXRlQmFjayA9IChlbGVtZW50KSA9PiB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICB9XG59O1xuXG5jb25zdCB0cmFpbk1vZGVGdW5jdGlvbmFsaXR5ID0gKHRhcmdldCwgY2FyZElubmVyKSA9PiB7XG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUtYnRuJykpIHtcbiAgICByb3RhdGVDYXJkKGNhcmRJbm5lcik7XG4gICAgY2FyZElubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICByb3RhdGVCYWNrKGNhcmRJbm5lcik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIWNhcmRJbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XG4gICAgY29uc3Qgc291bmRQYXRoID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKS5kYXRhc2V0LnNvdW5kO1xuICAgIGNvbnN0IGNhcmQgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICAgIHBsYXlTb3VuZChjYXJkLCBzb3VuZFBhdGgpO1xuICB9XG59O1xuXG5jb25zdCBhZGRTY29yZUljb24gPSAoY2FyZCwgc3JjKSA9PiB7XG4gIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgIGNvbnN0IHNjb3JlSWNvbiA9IGNyZWF0ZVNjb3JlTGluZUljb24oc3JjKTtcbiAgICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgICBzY29yZUxpbmUucHJlcGVuZChzY29yZUljb24pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBzZXRHbG9iYWxWYWx1ZXMsIGNhcGl0YWxpemVGaXJzdFdvcmQsXG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LFxuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCB1cGRhdGVNb2RlLCBwbGF5U291bmQsXG4gIHJvdGF0ZUNhcmQsIHJvdGF0ZUJhY2ssIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIHNodWZmbGVBcnJheSwgdXBkYXRlU291bmRMaXN0LFxuICBpc0dhbWVTdGFydGVkLCBhZGRTY29yZUljb24sIGlzQWN0aXZlQ2FyZCwgaXNHYW1lT3ZlciwgaXNHYW1lT3ZlclN1Y2Nlc3MsXG59O1xuIiwiY29uc3QgVkFSSUFCTEVTID0ge1xuICBjYXRlZ29yeU5hbWU6ICdpbml0aWFsIHZhbHVlJyxcbiAgY2FyZHNMaXN0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIHNvdW5kc0xpc3Q6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGFtYnVyZ2VyQnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhlYWRlck5hdjogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJNZW51OiAnaW5pdGlhbCB2YWx1ZScsXG4gIG5hdk1lbnVMaW5rczogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJMb2dvOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG92ZXJsYXk6ICdpbml0aWFsIHZhbHVlJyxcbiAgYm9keTogJ2luaXRpYWwgdmFsdWUnLFxuICB0b2dnbGVCdG46ICdpbml0aWFsIHZhbHVlJyxcbiAgaXNQbGF5TW9kZTogJ2luaXRpYWwgdmFsdWUnLFxuICBwbGF5UmVwZWF0QnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIHNjb3JlTGluZTogJ2luaXRpYWwgdmFsdWUnLFxuICBtb2RhbFdpbmRvdzogJ2luaXRpYWwgdmFsdWUnLFxuICBtb2RhbFdpbmRvd0ljb246ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3dUZXh0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93SWNvbldpbjogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvd2luLWljb24ucG5nJyxcbiAgbW9kYWxXaW5kb3dJY29uTG9zZTogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvbG9zZS1pY29uLnBuZycsXG4gIHN0YXRpc3RpY0RhdGE6IFtcbiAgICB7XG4gICAgICBDYXRlZ29yeTogJ0Nsb3RoZXMnLFxuICAgICAgV29yZDogJ2NhcCcsXG4gICAgICBUcmFuc2xhdGlvbjogJ9GI0LDQv9C60LAnLFxuICAgICAgVHJhaW5lZDogMCxcbiAgICAgIENvcnJlY3Q6IDAsXG4gICAgICBJbmNvcnJlY3Q6IDAsXG4gICAgICAnJSc6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBDYXRlZ29yeTogJ0Nsb3RoZXMnLFxuICAgICAgV29yZDogJ2phY2tldCcsXG4gICAgICBUcmFuc2xhdGlvbjogJ9C60YPRgNGC0LrQsCcsXG4gICAgICBUcmFpbmVkOiAwLFxuICAgICAgQ29ycmVjdDogMCxcbiAgICAgIEluY29ycmVjdDogMCxcbiAgICAgICclJzogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIENhdGVnb3J5OiAnQ2xvdGhlcycsXG4gICAgICBXb3JkOiAnc2NhcmYnLFxuICAgICAgVHJhbnNsYXRpb246ICfRiNCw0YDRhCcsXG4gICAgICBUcmFpbmVkOiAwLFxuICAgICAgQ29ycmVjdDogMCxcbiAgICAgIEluY29ycmVjdDogMCxcbiAgICAgICclJzogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIENhdGVnb3J5OiAnQ2xvdGhlcycsXG4gICAgICBXb3JkOiAnc2hvZXMnLFxuICAgICAgVHJhbnNsYXRpb246ICfQsdC+0YLQuNC90LrQuCcsXG4gICAgICBUcmFpbmVkOiAwLFxuICAgICAgQ29ycmVjdDogMCxcbiAgICAgIEluY29ycmVjdDogMCxcbiAgICAgICclJzogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIENhdGVnb3J5OiAnQ2xvdGhlcycsXG4gICAgICBXb3JkOiAnYmxvdXNlJyxcbiAgICAgIFRyYW5zbGF0aW9uOiAn0LHQu9GD0LfQutCwJyxcbiAgICAgIFRyYWluZWQ6IDAsXG4gICAgICBDb3JyZWN0OiAwLFxuICAgICAgSW5jb3JyZWN0OiAwLFxuICAgICAgJyUnOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgQ2F0ZWdvcnk6ICdDbG90aGVzJyxcbiAgICAgIFdvcmQ6ICdjb2F0JyxcbiAgICAgIFRyYW5zbGF0aW9uOiAn0L/QsNC70YzRgtC+JyxcbiAgICAgIFRyYWluZWQ6IDAsXG4gICAgICBDb3JyZWN0OiAwLFxuICAgICAgSW5jb3JyZWN0OiAwLFxuICAgICAgJyUnOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgQ2F0ZWdvcnk6ICdDbG90aGVzJyxcbiAgICAgIFdvcmQ6ICdkcmVzcycsXG4gICAgICBUcmFuc2xhdGlvbjogJ9C/0LvQsNGC0YzQtScsXG4gICAgICBUcmFpbmVkOiAwLFxuICAgICAgQ29ycmVjdDogMCxcbiAgICAgIEluY29ycmVjdDogMCxcbiAgICAgICclJzogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIENhdGVnb3J5OiAnQ2xvdGhlcycsXG4gICAgICBXb3JkOiAnc2hpcnQnLFxuICAgICAgVHJhbnNsYXRpb246ICfRgNGD0LHQsNGI0LrQsCcsXG4gICAgICBUcmFpbmVkOiAwLFxuICAgICAgQ29ycmVjdDogMCxcbiAgICAgIEluY29ycmVjdDogMCxcbiAgICAgICclJzogMCxcbiAgICB9LFxuXG4gIF0sXG59O1xuXG5jb25zdCBTRVRfVkFSID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoVkFSSUFCTEVTLCBuYW1lKSkge1xuICAgIFZBUklBQkxFU1tuYW1lXSA9IHZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBHRVRfVkFSID0gKG5hbWUpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChWQVJJQUJMRVMsIG5hbWUpKSB7XG4gICAgcmV0dXJuIFZBUklBQkxFU1tuYW1lXTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9ob21lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvY2xvdGhlcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2Zvb2QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9jb2xvdXJzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvZnJ1aXRzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvcGV0cy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL3NjaG9vbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL3Nwb3J0cy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2ZhbWlseS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2J0bnMtaWNvbnMvcm90YXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2J0bnMtaWNvbnMvcGxheS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9idG5zLWljb25zL3JlcGxheS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovaHRtbHstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTtsaW5lLWhlaWdodDoxLjE1fWJvZHl7bWFyZ2luOjB9bWFpbntkaXNwbGF5OmJsb2NrfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfXByZXtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWQ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfVt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowfVt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3JpbmcsYnV0dG9uOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fWZpZWxkc2V0e3BhZGRpbmc6LjM1ZW0gLjc1ZW0gLjYyNWVtfWxlZ2VuZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3JtYWx9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31bdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9de2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfVt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDtvdXRsaW5lLW9mZnNldDotMnB4fVt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1kZXRhaWxze2Rpc3BsYXk6YmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbX1baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9OnJvb3R7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZToxMDAlO3Njcm9sbC1iZWhhdmlvcjpzbW9vdGh9Kiw6YWZ0ZXIsOmJlZm9yZXtib3gtc2l6aW5nOmluaGVyaXQ7bWFyZ2luOjA7cGFkZGluZzowfWEsYTpob3ZlcixhOnZpc2l0ZWR7dGV4dC1kZWNvcmF0aW9uOm5vbmV9dWx7bGlzdC1zdHlsZS10eXBlOm5vbmV9aDEsaDIsaDMsaDQsaDUsaDYsdWx7bWFyZ2luOjA7cGFkZGluZzowfS5yb3RhdGV7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKX1ib2R5e2JhY2tncm91bmQtY29sb3I6IzIzYTdkNztmb250LWZhbWlseTpDb21pYyBOZXVlLGN1cnNpdmV9Ym9keS5ub3Njcm9sbHtvdmVyZmxvdzpoaWRkZW59LmNvbnRhaW5lcnttYXJnaW46MCBhdXRvO21heC13aWR0aDo3NXJlbX1Aa2V5ZnJhbWVzIGZhZGUtaW57MCV7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufXRve29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9fS5mYWRlLWlue2FuaW1hdGlvbjpmYWRlLWluIC4zcyBlYXNlLWluLW91dCBmb3J3YXJkc31Aa2V5ZnJhbWVzIGZhZGUtb3V0ezAle29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9dG97b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufX0uZmFkZS1vdXR7YW5pbWF0aW9uOmZhZGUtb3V0IC4zcyBlYXNlLWluLW91dCBmb3J3YXJkc30ub3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjUpO2JvdHRvbTowO2N1cnNvcjpwb2ludGVyO2xlZnQ6MDtvcGFjaXR5OjA7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDt0b3A6MDt2aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjEwfUBrZXlmcmFtZXMgYXBwZWFyezAle29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbn10b3tvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlfX0uYXBwZWFye2FuaW1hdGlvbjphcHBlYXIgLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzfS5tb2RhbC13aW5kb3d7bGVmdDo1MCU7bWF4LXdpZHRoOjM1ZW07b3BhY2l0eTowO3Bvc2l0aW9uOmZpeGVkO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3Zpc2liaWxpdHk6aGlkZGVuO3otaW5kZXg6MTB9Lm1vZGFsLXdpbmRvd19faWNvbnt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6MTAwJX0ubW9kYWwtd2luZG93X190ZXh0e2NvbG9yOiNmZmY7Zm9udC1zaXplOjIuNWVtO3BhZGRpbmc6LjJlbTt0ZXh0LWFsaWduOmNlbnRlcn0uaGVhZGVyLWhhbWJ1cmdlcntsZWZ0OjEuNWVtO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxLjZlbTt6LWluZGV4OjMwfS5oZWFkZXItaGFtYnVyZ2VyPnNwYW57YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6LjZlbTtkaXNwbGF5OmJsb2NrO2hlaWdodDouMjEyNWVtO3RyYW5zZm9ybS1vcmlnaW46M3B4IDFweDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7d2lkdGg6Mi4xMTI1ZW19LmhlYWRlci1oYW1idXJnZXI+c3Bhbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206LjQxMjVlbX0uaGVhZGVyLWhhbWJ1cmdlcjpob3Zlcj5zcGFuOmZpcnN0LWNoaWxke3RyYW5zZm9ybTp0cmFuc2xhdGVYKC4xODc1cmVtKX0uaGVhZGVyLWhhbWJ1cmdlcjpob3Zlcj5zcGFuOm50aC1jaGlsZCgyKXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjE4NzVyZW0pfS5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyPnNwYW46bGFzdC1jaGlsZHt0cmFuc2Zvcm06dHJhbnNsYXRlWCguMTg3NXJlbSl9QGtleWZyYW1lcyBzbGlkZS1vdXR7MCV7bGVmdDotMy4xMjVyZW07b3BhY2l0eToxfTYwJXtvcGFjaXR5Oi41fXRve2xlZnQ6LTIwLjYyNXJlbTtvcGFjaXR5OjB9fS5zbGlkZS1vdXR7YW5pbWF0aW9uOnNsaWRlLW91dCAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHN9QGtleWZyYW1lcyBzbGlkZS1pbnswJXtsZWZ0Oi0yMC42MjVyZW07b3BhY2l0eTowfTEwJXtsZWZ0Oi0xOC43NXJlbX04MCV7b3BhY2l0eTouM310b3tsZWZ0OjA7b3BhY2l0eToxfX0uc2xpZGUtaW57YW5pbWF0aW9uOnNsaWRlLWluIC41cyBlYXNlLWluLW91dCBmb3J3YXJkc30uaGVhZGVyLW1lbnV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDBkZWcsI2ZmZDk3MCwjZmM2NDY0KTtib3gtc2hhZG93Oi4xODc1ZW0gMCAuNjI1ZW0gcmdiYSgwLDAsMCwuNSksaW5zZXQgLjE4NzVlbSAwIDEuMjVlbSByZ2JhKDAsMCwwLC41KTtsZWZ0OjA7bGVmdDotMjAuNjI1cmVtO21pbi1oZWlnaHQ6MTAwdmg7bWluLXdpZHRoOjIwcmVtO3BhZGRpbmctbGVmdDoyLjgxMjVlbTtwYWRkaW5nLXRvcDo2ZW07cG9zaXRpb246Zml4ZWQ7dG9wOjA7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2UtaW4tb3V0O3otaW5kZXg6MTB9LmhlYWRlci1tZW51X19pdGVtOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjc1ZW19LmhlYWRlci1tZW51X19pdGVtLWxpbmt7LXdlYmtpdC10ZXh0LXN0cm9rZToxcHggaHNsYSgwLDAlLDEwMCUsLjgpO2NvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZToxLjRlbTtsZXR0ZXItc3BhY2luZzoycHg7bGluZS1oZWlnaHQ6LjZlbTtwYWRkaW5nLWxlZnQ6MmVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uaGVhZGVyLW1lbnVfX2l0ZW0tbGluay5hY3RpdmU6YmVmb3JlLC5oZWFkZXItbWVudV9faXRlbS1saW5rOmhvdmVyOmJlZm9yZXstd2Via2l0LXRleHQtc3Ryb2tlOjFweCAjZmZmO2ZpbHRlcjpkcm9wLXNoYWRvdygwIDAgMjVweCBoc2woMCwwJSwxMDAlKSk7d2lkdGg6MTAwJX0uaGVhZGVyLW1lbnVfX2l0ZW0tbGluazpiZWZvcmV7LXdlYmtpdC10ZXh0LXN0cm9rZToxcHggI2ZmZjtjb2xvcjojZmZmO2NvbnRlbnQ6YXR0cihkYXRhLXNlY3Rpb24pO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2l0aW9uOndpZHRoIC4zcyBlYXNlLWluLW91dDt3aWR0aDowfS5oZWFkZXItbWVudV9faXRlbS1saW5rOmFmdGVye2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5oZWFkZXItbWVudV9faXRlbS1saW5rOmFmdGVyLC5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1DbG90aGVzXTphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEuNTYyNXJlbTtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDoxLjU2MjVyZW19LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUNsb3RoZXNdOmFmdGVye2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1Gb29kXTphZnRlcntiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3Zlcn0uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249Q29sb3Vyc106YWZ0ZXIsLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUZvb2RdOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTpibG9jaztoZWlnaHQ6MS41NjI1cmVtO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjEuNTYyNXJlbX0uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249Q29sb3Vyc106YWZ0ZXJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUZydWl0c106YWZ0ZXJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUZydWl0c106YWZ0ZXIsLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVBldHNdOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTpibG9jaztoZWlnaHQ6MS41NjI1cmVtO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjEuNTYyNXJlbX0uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249UGV0c106YWZ0ZXJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVNjaG9vbF06YWZ0ZXJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVNjaG9vbF06YWZ0ZXIsLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVNwb3J0XTphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEuNTYyNXJlbTtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDoxLjU2MjVyZW19LmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVNwb3J0XTphZnRlcntiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3Zlcn0uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249RmFtaWx5XTphZnRlcntiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIik7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3Zlcjtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEuNTYyNXJlbTtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDoxLjU2MjVyZW19LnRvZ2dsZS1idXR0b257YmFja2dyb3VuZC1jb2xvcjpoc2xhKDI0OCwxJSw1NiUsLjU2KTtib3JkZXI6MDtib3JkZXItcmFkaXVzOi41ZW07Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVufS50b2dnbGUtYnV0dG9uW2FyaWEtcHJlc3NlZD10cnVlXSAudG9nZ2xlLWJ1dHRvbl9fdHJhaW57YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0udG9nZ2xlLWJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0gLnRvZ2dsZS1idXR0b25fX3BsYXl7YmFja2dyb3VuZC1jb2xvcjojMjNkN2FkfS50b2dnbGUtYnV0dG9uX19tb2Rle2ZsZXgtYmFzaXM6NTAlO2ZvbnQtd2VpZ2h0OjcwMDtwYWRkaW5nOi41ZW07dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4zcyBlYXNlLWluLW91dH1AbWVkaWEgKG1pbi13aWR0aDoyOC4xMjVyZW0pey50b2dnbGUtYnV0dG9uX19tb2Rle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi10b3A6MH19QG1lZGlhIChtaW4td2lkdGg6NDhyZW0pey50b2dnbGUtYnV0dG9uX19tb2Rle2ZvbnQtc2l6ZToxLjJlbX19QG1lZGlhIChtaW4td2lkdGg6NjIuNXJlbSl7LnRvZ2dsZS1idXR0b25fX21vZGV7Zm9udC1zaXplOjEuNWVtfX0udG9nZ2xlLWJ1dHRvbl9fdHJhaW57YmFja2dyb3VuZC1jb2xvcjojMjNkN2FkfS5zdGF0aXN0aWNzLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiMyMmQ3Zjc7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouOGVtO2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOi4xZW07cGFkZGluZzouNWVtIC43ZW07dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dH0uc3RhdGlzdGljcy1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNTNlMGY5fUBtZWRpYSAobWluLXdpZHRoOjI4LjEyNXJlbSl7LnN0YXRpc3RpY3MtYnV0dG9ue2ZvbnQtc2l6ZTouOWVtO21hcmdpbi10b3A6MH19QG1lZGlhIChtaW4td2lkdGg6NDhyZW0pey5zdGF0aXN0aWNzLWJ1dHRvbntmb250LXNpemU6MS4yZW19fUBtZWRpYSAobWluLXdpZHRoOjYyLjVyZW0pey5zdGF0aXN0aWNzLWJ1dHRvbntmb250LXNpemU6MS41ZW19fS5oZWFkZXJ7cGFkZGluZzoxLjVlbSAxZW19LmhlYWRlciAuY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmhlYWRlci1idXR0b25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Zm9udC1zaXplOi45ZW07Z2FwOi41ZW19LmhlYWRlci1sb2dvX19saW5re2NvbG9yOiNmZmY7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOi43ZW07bWFyZ2luLXRvcDoxZW07dGV4dC1zaGFkb3c6MnB4IDJweCA1cHggI2ZmZjt0cmFuc2l0aW9uOmNvbG9yIC4zcyBlYXNlLWluLW91dH0uaGVhZGVyLWxvZ29fX2xpbms6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjYpfUBtZWRpYSAobWluLXdpZHRoOjI4LjEyNXJlbSl7LmhlYWRlci1sb2dvX19saW5re2ZvbnQtc2l6ZTouOWVtO21hcmdpbi10b3A6MH19QG1lZGlhIChtaW4td2lkdGg6NDhyZW0pey5oZWFkZXItbG9nb19fbGlua3tmb250LXNpemU6MS4yZW19fUBtZWRpYSAobWluLXdpZHRoOjYyLjVyZW0pey5oZWFkZXItbG9nb19fbGlua3tmb250LXNpemU6MS41ZW19fS5oZWFkZXItbmF2Lm9wZW4gLmhlYWRlci1oYW1idXJnZXI+c3BhbjpmaXJzdC1jaGlsZHt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uaGVhZGVyLW5hdi5vcGVuIC5oZWFkZXItaGFtYnVyZ2VyPnNwYW46bnRoLWNoaWxkKDIpe29wYWNpdHk6MH0uaGVhZGVyLW5hdi5vcGVuIC5oZWFkZXItaGFtYnVyZ2VyPnNwYW46bGFzdC1jaGlsZHt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LmNhcmR7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjE4LjEyNWVtO21heC13aWR0aDoxNi44NzVlbTtwYWRkaW5nOi45Mzc1ZW07cGVyc3BlY3RpdmU6NjIuNWVtO3dpZHRoOjEwMCV9LmNhcmQtaW5uZXJ7Ym9yZGVyLXJhZGl1czoxZW07Ym94LXNoYWRvdzowIDAgMWVtIDAgcmdiYSgwLDAsMCwuNSk7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zaXRpb246YWxsIC42cyBlYXNlLWluLW91dDt3aWR0aDoxMDAlfS5jYXJkLWlubmVyOmhvdmVye2JveC1zaGFkb3c6MCAwIDFlbSAwIGhzbGEoMCwwJSwxMDAlLC41KX0uY2FyZC1waWMgLmNhcmQtaW1ne3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDoxMDAlfS5jYXJkLWJhY2ssLmNhcmQtZnJvbnR7YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47Ym9yZGVyLXJhZGl1czoxZW07ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJX0uY2FyZC1mcm9udHtiYWNrZ3JvdW5kLWNvbG9yOiNiYWJhYmE7Y29sb3I6IzAwMH0uY2FyZC1mcm9udCAuY2FyZC1mcm9udF9fcm90YXRle2JhY2tncm91bmQ6IzIzZDdhZCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIDUwJSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOjY1JTtib3JkZXI6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjFyZW07Ym90dG9tOjA7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjA7aGVpZ2h0OjM1cHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt3aWR0aDozNXB4fS5jYXJkLWZyb250LmluYWN0aXZle2JhY2tncm91bmQtY29sb3I6Izc0NzI3MjtjdXJzb3I6YXV0b30uY2FyZC1mcm9udC5pbmFjdGl2ZSBpbWd7ZmlsdGVyOmdyYXlzY2FsZSgxKX0uY2FyZC1iYWNre2JhY2tncm91bmQtY29sb3I6IzFlOTBmZjtjb2xvcjojZmZmO3RyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyl9LmNhcmQtYmFjayAucm90YXRlLWJ0bntkaXNwbGF5Om5vbmV9LmNhcmQtdGl0bGV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM2NzNhYjY7Zm9udC1mYW1pbHk6Q2hhbmdvLGN1cnNpdmU7Zm9udC1zaXplOjEuMDVlbTtmb250LXdlaWdodDo0MDA7bWFyZ2luLXRvcDphdXRvO3BhZGRpbmc6Ljg3NXJlbSAwfS5jYXJkLXRpdGxlLC5wbGF5LWJ0bnt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXR9LnBsYXktYnRue2JvcmRlcjowO2JvcmRlci1yYWRpdXM6NTAlO2JvdHRvbTotNXJlbTtib3gtc2hhZG93OjAgMCAxLjI1ZW0gcmdiYSgwLDAsMCwuNSk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOi4wMXJlbTtoZWlnaHQ6My43NXJlbTtsZWZ0OjUwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDozLjc1cmVtfS5wbGF5LWJ0bi5yZXBlYXQ6YmVmb3Jle29wYWNpdHk6MH0ucGxheS1idG4ucmVwZWF0OmFmdGVye29wYWNpdHk6MX0ucGxheS1idG46YmVmb3Jle2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIil9LnBsYXktYnRuOmFmdGVyLC5wbGF5LWJ0bjpiZWZvcmV7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO2NvbnRlbnQ6XFxcIlxcXCI7aGVpZ2h0OjMuMTI1cmVtO2xlZnQ6NTQlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MyU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTMlLC01NCUpO3dpZHRoOjMuMTI1cmVtfS5wbGF5LWJ0bjphZnRlcntiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO29wYWNpdHk6MH0ubWFpbntvdmVyZmxvdzpoaWRkZW59Lm1haW4gLnNjb3JlLWxpbmV7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO21pbi1oZWlnaHQ6My4xMjVlbTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTAwJX0ubWFpbiAuc2NvcmUtbGluZV9faWNvbnt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm1haW4gLmNhdGVnb3J5LW5hbWV7Y29sb3I6I2ZmZjtmb250LXNpemU6MS43ZW07bWFyZ2luLWJvdHRvbTouNWVtO3RleHQtYWxpZ246Y2VudGVyfS5tYWluIC5jYXJkcy1saXN0ey1tb3otY29sdW1uLWdhcDouNjI1ZW07Y29sdW1uLWdhcDouNjI1ZW07ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7bWFyZ2luLWJvdHRvbTouNWVtO3BhZGRpbmc6LjYyNWVtO3Jvdy1nYXA6MS44NzVlbX0ubWFpbiAuY2FyZHMtbGlzdC5zdGFydC1wYWdlIC5jYXJkLWZyb250X19yb3RhdGV7dmlzaWJpbGl0eTpoaWRkZW59Lm1haW4gLmNhcmRzLWxpc3Quc3RhcnQtcGFnZVtkYXRhLW1vZGU9cGxheV0gLmNhcmQtaW5uZXJ7Ym94LXNoYWRvdzowIDAgMWVtIC41ZW0gcmdiYSgyMTksMjE5LDcsLjYpfS5tYWluIC5jYXJkcy1saXN0W2RhdGEtY2F0ZWdvcnldOm5vdChbZGF0YS1jYXRlZ29yeT1tYWluLW1lbnVdKVtkYXRhLW1vZGU9cGxheV0gLmNhcmQtZnJvbnRfX3RpdGxle2JhY2tncm91bmQtY29sb3I6I2ZmZjtoZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYWluIC5jYXJkcy1saXN0W2RhdGEtY2F0ZWdvcnldOm5vdChbZGF0YS1jYXRlZ29yeT1tYWluLW1lbnVdKVtkYXRhLW1vZGU9cGxheV0gLnJvdGF0ZS1idG57ZGlzcGxheTpub25lfS5tYWluIC5jYXJkcy1saXN0W2RhdGEtY2F0ZWdvcnldOm5vdChbZGF0YS1jYXRlZ29yeT1tYWluLW1lbnVdKVtkYXRhLW1vZGU9cGxheV1+LnBsYXktYnRue2JvdHRvbToxLjI1cmVtfS5mb290ZXJ7cGFkZGluZzouNmVtIDA7dGV4dC1hbGlnbjpjZW50ZXJ9LmZvb3Rlci10ZXh0X19saW5re2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDo2MDA7dHJhbnNpdGlvbjpjb2xvciAuM3MgbGluZWFyfS5mb290ZXItdGV4dF9fbGluazpob3Zlcntjb2xvcjpoc2xhKDAsMCUsMTAwJSwuNil9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2dsb2JhbHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYW5pbWF0aW9ucy9fZmFkZS1pbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9hbmltYXRpb25zL19mYWRlLW91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19vdmVybGF5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2FuaW1hdGlvbnMvX2FwcGVhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tb2RhbFdpbmRvdy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19uYXZNZW51QnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2FuaW1hdGlvbnMvX3NsaWRlLW91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9hbmltYXRpb25zL19zbGlkZS1pbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19uYXZNZW51LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3RvZ2dsZUJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19zdGF0aXN0aWNzQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2NhcmRJdGVtLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3BsYXlSZXBlYXRCdG4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUEsQ0FFQSxLQUVFLDZCQUFBLENBREEsZ0JDQ0YsQ0RVQSxLQUNFLFFDRkYsQ0RTQSxLQUNFLGFDSEYsQ0RXQSxHQUNFLGFBQUEsQ0FDQSxjQ0pGLENEZUEsR0FDRSxzQkFBQSxDQUNBLFFBQUEsQ0FDQSxnQkNORixDRGNBLElBQ0UsK0JBQUEsQ0FDQSxhQ1BGLENEaUJBLEVBQ0UsNEJDVEYsQ0RpQkEsWUFDRSxrQkFBQSxDQUNBLHlCQUFBLENBQ0Esd0NBQUEsQ0FBQSxnQ0NWRixDRGlCQSxTQUVFLGtCQ1hGLENEbUJBLGNBR0UsK0JBQUEsQ0FDQSxhQ1pGLENEbUJBLE1BQ0UsYUNiRixDRHFCQSxRQUVFLGFBQUEsQ0FDQSxhQUFBLENBQ0EsaUJBQUEsQ0FDQSx1QkNkRixDRGlCQSxJQUNFLGFDZEYsQ0RpQkEsSUFDRSxTQ2RGLENEd0JBLElBQ0UsaUJDaEJGLENEMkJBLHNDQUtFLG1CQUFBLENBQ0EsY0FBQSxDQUNBLGdCQUFBLENBQ0EsUUNsQkYsQ0QwQkEsYUFHRSxnQkNuQkYsQ0QyQkEsY0FHRSxtQkNwQkYsQ0QyQkEsZ0RBSUUseUJDckJGLENENEJBLHdIQUlFLGlCQUFBLENBQ0EsU0N0QkYsQ0Q2QkEsNEdBSUUsNkJDdkJGLENEOEJBLFNBQ0UsMEJDeEJGLENEa0NBLE9BQ0UscUJBQUEsQ0FDQSxhQUFBLENBQ0EsYUFBQSxDQUNBLGNBQUEsQ0FDQSxTQUFBLENBQ0Esa0JDekJGLENEZ0NBLFNBQ0UsdUJDMUJGLENEaUNBLFNBQ0UsYUMzQkYsQ0RtQ0EsNkJBRUUscUJBQUEsQ0FDQSxTQzVCRixDRG1DQSxrRkFFRSxXQzdCRixDRHFDQSxjQUNFLDRCQUFBLENBQ0EsbUJDOUJGLENEcUNBLHlDQUNFLHVCQy9CRixDRHVDQSw2QkFDRSx5QkFBQSxDQUNBLFlDaENGLENEMENBLFFBQ0UsYUNsQ0YsQ0R5Q0EsUUFDRSxpQkNuQ0YsQ0RxREEsa0JBQ0Us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SSxZQUFBLENBQ0EsMEJBQUEsQ0FIQSxrQkFBQSxDQUlBLGVBQUEsQ0FIQSxVbEJ1NUJSLENrQmw1QlEsd0JBQ0kscUJsQm81QlosQ2tCajVCSSxxQkFJSSxVaEJuQkssQ2dCZ0JMLGVBQUEsQ0FFQSxrQkFBQSxDQURBLGlCbEJxNUJSLENrQmg1Qkksa0JBR0ksc0JBQUEsQ0FBQSxpQkFBQSxDQUZBLFlBQUEsQ0FDQSxjQUFBLENBR0EsNEJBQUEsQ0FFQSxrQkFBQSxDQURBLGNBQUEsQ0FGQSxlbEJxNUJSLENrQjk0QlksaURBQ0ksaUJsQmc1QmhCLENrQjM0QlEseURBQ0ksMENsQjY0QlosQ2tCeDRCUSxtR0FHSSxxQmhCaERDLENnQmlERCxRQUFBLENBQ0EsZUFBQSxDQUhBLFNBQUEsQ0FEQSxpQmxCODRCWixDa0J2NEJRLDRGQUNJLFlsQnk0QlosQ2tCdDRCUSwwRkFDSSxjbEJ3NEJaLENtQnA4QkEsUUFFSSxjQUFBLENBREEsaUJuQnc4QkosQ21CcjhCSSxtQkFDSSxVakJISyxDaUJJTCxhQUFBLENBQ0EsZUFBQSxDQUNBLDJCbkJ1OEJSLENtQnI4QlEseUJBQ0ksd0JuQnU4QlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxyXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXHJcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICogYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgZm9udC1zaXplOiA3NSU7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAvKiAxICovXFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPSdjaGVja2JveCddLFxcclxcblt0eXBlPSdyYWRpbyddIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIixcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPWJ1dHRvbl0sXFxuW3R5cGU9cmVzZXRdLFxcblt0eXBlPXN1Ym1pdF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1jaGVja2JveF0sXFxuW3R5cGU9cmFkaW9dIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NiwgNzIlLCA0OSUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb21pYyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXG59XFxuYm9keS5ub3Njcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcbi5mYWRlLWluIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjNzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcbi5mYWRlLW91dCB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC41KTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbn1cXG4uYXBwZWFyIHtcXG4gIGFuaW1hdGlvbjogYXBwZWFyIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5tb2RhbC13aW5kb3cge1xcbiAgbWF4LXdpZHRoOiAzNWVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm1vZGFsLXdpbmRvd19faWNvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5tb2RhbC13aW5kb3dfX3RleHQge1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDMwO1xcbiAgbGVmdDogMS41ZW07XFxuICB0b3A6IDEuNmVtO1xcbn1cXG4uaGVhZGVyLWhhbWJ1cmdlciA+IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMi4xMTI1ZW07XFxuICBoZWlnaHQ6IDAuMjEyNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogM3B4IDFweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaGVhZGVyLWhhbWJ1cmdlciA+IHNwYW46bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjQxMjVlbTtcXG59XFxuLmhlYWRlci1oYW1idXJnZXI6aG92ZXIgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjE4NzVyZW0pO1xcbn1cXG4uaGVhZGVyLWhhbWJ1cmdlcjpob3ZlciA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4xODc1cmVtKTtcXG59XFxuLmhlYWRlci1oYW1idXJnZXI6aG92ZXIgPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTg3NXJlbSk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICBsZWZ0OiAtMy4xMjVyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICB0byB7XFxuICAgIGxlZnQ6IC0yMC42MjVyZW07XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5zbGlkZS1vdXQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgbGVmdDogLTIwLjYyNXJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIGxlZnQ6IC0xOC43NXJlbTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG4gIHRvIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNsaWRlLWluIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmhlYWRlci1tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBsZWZ0OiAtMjAuNjI1cmVtO1xcbiAgei1pbmRleDogMTA7XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLXRvcDogNmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyLjgxMjVlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgaHNsKDQ0LCAxMDAlLCA3MiUpLCBoc2woMCwgOTYlLCA2OSUpKTtcXG4gIGJveC1zaGFkb3c6IDAuMTg3NWVtIDAgMC42MjVlbSBoc2xhKDAsIDAlLCAwJSwgMC41KSwgaW5zZXQgMC4xODc1ZW0gMCAxLjI1ZW0gaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMS43NWVtO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGluayB7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBoc2xhKDAsIDAlLCAxMDAlLCAwLjgpO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGluay5hY3RpdmU6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjVweCBoc2woMCwgMCUsIDEwMCUpKTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbms6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjVweCBoc2woMCwgMCUsIDEwMCUpKTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtc2VjdGlvbik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHdpZHRoOiAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2hvbWUucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjU2MjVyZW07XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1DbG90aGVzXTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9jbG90aGVzLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gIGhlaWdodDogMS41NjI1cmVtO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2l0ZW0tbGlua1tkYXRhLXNlY3Rpb249Rm9vZF06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvZm9vZC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPUNvbG91cnNdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2NvbG91cnMucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjU2MjVyZW07XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1GcnVpdHNdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2ZydWl0cy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVBldHNdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL3BldHMucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjU2MjVyZW07XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1TY2hvb2xdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL3NjaG9vbC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtLWxpbmtbZGF0YS1zZWN0aW9uPVNwb3J0XTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9zcG9ydHMucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjU2MjVyZW07XFxufVxcbi5oZWFkZXItbWVudV9faXRlbS1saW5rW2RhdGEtc2VjdGlvbj1GYW1pbHldOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2ZhbWlseS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG59XFxuXFxuLnRvZ2dsZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyNDgsIDElLCA1NiUsIDAuNTYpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udG9nZ2xlLWJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0gLnRvZ2dsZS1idXR0b25fX3RyYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4udG9nZ2xlLWJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0gLnRvZ2dsZS1idXR0b25fX3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE2NiwgNzIlLCA0OSUpO1xcbn1cXG4udG9nZ2xlLWJ1dHRvbl9fbW9kZSB7XFxuICBmbGV4LWJhc2lzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyOC4xMjVyZW0pIHtcXG4gIC50b2dnbGUtYnV0dG9uX19tb2RlIHtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuICAudG9nZ2xlLWJ1dHRvbl9fbW9kZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2Mi41cmVtKSB7XFxuICAudG9nZ2xlLWJ1dHRvbl9fbW9kZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxufVxcbi50b2dnbGUtYnV0dG9uX190cmFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTY2LCA3MiUsIDQ5JSk7XFxufVxcblxcbi5zdGF0aXN0aWNzLWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg5LCA5MyUsIDU1JSk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcXG4gIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uc3RhdGlzdGljcy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4OSwgOTMlLCA2NSUpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjguMTI1cmVtKSB7XFxuICAuc3RhdGlzdGljcy1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gIC5zdGF0aXN0aWNzLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2Mi41cmVtKSB7XFxuICAuc3RhdGlzdGljcy1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEuNWVtIDFlbTtcXG59XFxuLmhlYWRlciAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuLmhlYWRlci1sb2dvX19saW5rIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBoc2woMCwgMTAlLCAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5oZWFkZXItbG9nb19fbGluazpob3ZlciB7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC42KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDI4LjEyNXJlbSkge1xcbiAgLmhlYWRlci1sb2dvX19saW5rIHtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuICAuaGVhZGVyLWxvZ29fX2xpbmsge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjIuNXJlbSkge1xcbiAgLmhlYWRlci1sb2dvX19saW5rIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG59XFxuLmhlYWRlci1uYXYub3BlbiAuaGVhZGVyLWhhbWJ1cmdlciA+IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4uaGVhZGVyLW5hdi5vcGVuIC5oZWFkZXItaGFtYnVyZ2VyID4gc3BhbjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmhlYWRlci1uYXYub3BlbiAuaGVhZGVyLWhhbWJ1cmdlciA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXgtd2lkdGg6IDE2Ljg3NWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE4LjEyNWVtO1xcbiAgcGFkZGluZzogMC45Mzc1ZW07XFxuICBwZXJzcGVjdGl2ZTogNjIuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FyZC1pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAwIGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG59XFxuLmNhcmQtaW5uZXI6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAwIGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XFxufVxcbi5jYXJkLXBpYyAuY2FyZC1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uY2FyZC1mcm9udCwgLmNhcmQtYmFjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY2FyZC1mcm9udCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDczJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxufVxcbi5jYXJkLWZyb250IC5jYXJkLWZyb250X19yb3RhdGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IGhzbCgxNjYsIDcyJSwgNDklKSB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvYnRucy1pY29ucy9yb3RhdGUuc3ZnXFxcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkLWZyb250LmluYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAxJSwgNDUlKTtcXG4gIGN1cnNvcjogaW5pdGlhbDtcXG59XFxuLmNhcmQtZnJvbnQuaW5hY3RpdmUgaW1nIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xcbn1cXG4uY2FyZC1iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuLmNhcmQtYmFjayAucm90YXRlLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNoYW5nb1xcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuMDVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogaHNsKDI2MiwgNTIlLCA0NyUpO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDAuODc1cmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wbGF5LWJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDAuMDFyZW07XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMy43NXJlbTtcXG4gIGhlaWdodDogMy43NXJlbTtcXG4gIGJvdHRvbTogLTVyZW07XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMS4yNWVtIGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5wbGF5LWJ0bi5yZXBlYXQ6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucGxheS1idG4ucmVwZWF0OjphZnRlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucGxheS1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9idG5zLWljb25zL3BsYXkucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgd2lkdGg6IDMuMTI1cmVtO1xcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTMlO1xcbiAgbGVmdDogNTQlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUzJSwgLTU0JSk7XFxufVxcbi5wbGF5LWJ0bjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvYnRucy1pY29ucy9yZXBsYXkucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgd2lkdGg6IDMuMTI1cmVtO1xcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTMlO1xcbiAgbGVmdDogNTQlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUzJSwgLTU0JSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWFpbiAuc2NvcmUtbGluZSB7XFxuICBtaW4taGVpZ2h0OiAzLjEyNWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1haW4gLnNjb3JlLWxpbmVfX2ljb24ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLm1haW4gLmNhdGVnb3J5LW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjdlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbi5tYWluIC5jYXJkcy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjb2x1bW4tZ2FwOiAwLjYyNWVtO1xcbiAgcm93LWdhcDogMS44NzVlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMC42MjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubWFpbiAuY2FyZHMtbGlzdC5zdGFydC1wYWdlIC5jYXJkLWZyb250X19yb3RhdGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ubWFpbiAuY2FyZHMtbGlzdC5zdGFydC1wYWdlW2RhdGEtbW9kZT1wbGF5XSAuY2FyZC1pbm5lciB7XFxuICBib3gtc2hhZG93OiAwIDAgMWVtIDAuNWVtIHJnYmEoMjE5LCAyMTksIDcsIDAuNik7XFxufVxcbi5tYWluIC5jYXJkcy1saXN0W2RhdGEtY2F0ZWdvcnldOm5vdChbZGF0YS1jYXRlZ29yeT1tYWluLW1lbnVdKVtkYXRhLW1vZGU9cGxheV0gLmNhcmQtZnJvbnRfX3RpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1haW4gLmNhcmRzLWxpc3RbZGF0YS1jYXRlZ29yeV06bm90KFtkYXRhLWNhdGVnb3J5PW1haW4tbWVudV0pW2RhdGEtbW9kZT1wbGF5XSAucm90YXRlLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWFpbiAuY2FyZHMtbGlzdFtkYXRhLWNhdGVnb3J5XTpub3QoW2RhdGEtY2F0ZWdvcnk9bWFpbi1tZW51XSlbZGF0YS1tb2RlPXBsYXldIH4gLnBsYXktYnRuIHtcXG4gIGJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjZlbSAwO1xcbn1cXG4uZm9vdGVyLXRleHRfX2xpbmsge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGxpbmVhcjtcXG59XFxuLmZvb3Rlci10ZXh0X19saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjYpO1xcbn1cIixcIjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8vIExpbmtzXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8vIExpc3RzXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gSGVhZGxpbmVzXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdGF0ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBmb250LWZhbWlseTogJ0NoYW5nbycsIGN1cnNpdmU7XFxyXFxuLy9mb250LWZhbWlseTogJ0NvbWljIE5ldWUnLCBjdXJzaXZlO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnLCBjdXJzaXZlO1xcclxcblxcclxcblxcclxcbiAgJi5ub3Njcm9sbCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGNvbnRhaW5lclxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA3NXJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cIixcIi8vIENvbG9yc1xcclxcbiRjb2xvci1wcmltYXJ5OiBoc2woMTk2LCA3MiUsIDQ5JSk7XFxyXFxuJHdoaXRlQ29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuJHdoaXRlQ29sb3JTaGFkb3c6IGhzbCgwLCAxMCUsIDEwMCUpO1xcclxcbiR3aGl0ZUNvbG9ySG92ZXI6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNik7XFxyXFxuXFxyXFxuXFxyXFxuJHNoYWRlUHVycGxlQ29sb3I6IGhzbCgyNjIsIDUyJSwgNDclKTtcXHJcXG4vLyAkdG9nZ2xlQmx1ZTogaHNsYSgyNDgsIDEwMCUsIDUwJSwgLjU2KTtcXHJcXG4kdHVycXVvaXNlQ29sb3I6IGhzbCgxNjYsIDcyJSwgNDklKTtcXHJcXG4kbGlnaHRCbHVlQ29sb3I6IGhzbCgxODksIDkzJSwgNTUlKTtcXHJcXG4kbGlnaHRCbHVlQ29sb3JIb3ZlcjogaHNsKDE4OSwgOTMlLCA2NSUpO1xcclxcbiRpbkFjdGl2ZUNvbG9yOiBoc2xhKDI0OCwgMSUsIDU2JSwgMC41Nik7XFxyXFxuXCIsXCJAa2V5ZnJhbWVzIGZhZGUtaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGZhZGUtaW4gLjNzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cIixcIkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vYW5pbWF0aW9ucy9mYWRlLWluJztcXHJcXG5AaW1wb3J0ICcuLi9hbmltYXRpb25zL2ZhZGUtb3V0JztcXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAuNSk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLFwiQGtleWZyYW1lcyBhcHBlYXIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFwcGVhciB7XFxyXFxuICAgIGFuaW1hdGlvbjogYXBwZWFyIC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XCIsXCJAaW1wb3J0ICcuLi9hbmltYXRpb25zL2FwcGVhcic7XFxyXFxuXFxyXFxuLm1vZGFsLXdpbmRvdyB7XFxyXFxuICAgIG1heC13aWR0aDogMzVlbTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xcclxcbiAgICAgICAgY29sb3I6ICR3aGl0ZUNvbG9yO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMC4yZW07XFxyXFxuICAgIH1cXHJcXG59XCIsXCIuaGVhZGVyLWhhbWJ1cmdlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAzMDtcXHJcXG4gIGxlZnQ6IDEuNWVtO1xcclxcbiAgdG9wOiAxLjZlbTtcXHJcXG4gID4gc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMi4xMTI1ZW07XFxyXFxuICAgIGhlaWdodDogMC4yMTI1ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVDb2xvcjtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogM3B4IDFweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC40MTI1ZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICA+IHNwYW46Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjE4NzVyZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gc3BhbjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4xODc1cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTg3NXJlbSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLyAgc2xpZGUgb3V0IGFuaW1hdGlvbiBmb3IgbmF2aWdhdGlvbiBtZW51XFxyXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGxlZnQ6IC0zLjEyNXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDYwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgbGVmdDogLTIwLjYyNXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLW91dCB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLW91dCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cIixcIi8vICBzbGlkZSBpbiBhbmltYXRpb24gZm9yIG5hdmlnYXRpb24gbWVudVxcclxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGxlZnQ6IC0yMC42MjVyZW07XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMCUge1xcclxcbiAgICBsZWZ0OiAtMTguNzVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4MCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1pbiB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxufVwiLFwiQGltcG9ydCAnLi4vYW5pbWF0aW9ucy9zbGlkZS1vdXQnO1xcclxcbkBpbXBvcnQgJy4uL2FuaW1hdGlvbnMvc2xpZGUtaW4nO1xcclxcblxcclxcblxcclxcbi5oZWFkZXItbWVudSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbGVmdDogLTIwLjYyNXJlbTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgbWluLXdpZHRoOiAyMHJlbTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZy10b3A6IDZlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMi44MTI1ZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIGhzbCg0NCwgMTAwJSwgNzIlKSwgaHNsKDAsIDk2JSwgNjklKSk7XFxyXFxuICBib3gtc2hhZG93OiAwLjE4NzVlbSAwIDAuNjI1ZW0gaHNsYSgwLCAwJSwgMCUsIDAuNSksIGluc2V0IDAuMTg3NWVtIDAgMS4yNWVtIGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAmX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjc1ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLWxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDEuNGVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMC42ZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGhzbGEoMCwgMCUsIDEwMCUsIDAuOCk7XFxyXFxuXFxyXFxuICAgICYuYWN0aXZlOjpiZWZvcmUge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAkd2hpdGVDb2xvcjtcXHJcXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyNXB4ICR3aGl0ZUNvbG9yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHdoaXRlQ29sb3I7XFxyXFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyNXB4ICR3aGl0ZUNvbG9yKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtc2VjdGlvbik7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGNvbG9yOiAkd2hpdGVDb2xvcjtcXHJcXG4gICAgICB3aWR0aDogMCU7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAkd2hpdGVDb2xvcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgQGluY2x1ZGUgaW5zZXJ0LWljb25zKCcuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2hvbWUucG5nJyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJltkYXRhLXNlY3Rpb249J0Nsb3RoZXMnXTo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9jbG90aGVzLnBuZycpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZbZGF0YS1zZWN0aW9uPSdGb29kJ106OmFmdGVyIHtcXHJcXG4gICAgICBAaW5jbHVkZSBpbnNlcnQtaWNvbnMoJy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLW1lbnUtaWNvbnMvZm9vZC5wbmcnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmW2RhdGEtc2VjdGlvbj0nQ29sb3VycyddOjphZnRlciB7XFxyXFxuICAgICAgQGluY2x1ZGUgaW5zZXJ0LWljb25zKCcuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2NvbG91cnMucG5nJyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJltkYXRhLXNlY3Rpb249J0ZydWl0cyddOjphZnRlciB7XFxyXFxuICAgICAgQGluY2x1ZGUgaW5zZXJ0LWljb25zKCcuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2ZydWl0cy5wbmcnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmW2RhdGEtc2VjdGlvbj0nUGV0cyddOjphZnRlciB7XFxyXFxuICAgICAgQGluY2x1ZGUgaW5zZXJ0LWljb25zKCcuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL3BldHMucG5nJyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJltkYXRhLXNlY3Rpb249J1NjaG9vbCddOjphZnRlciB7XFxyXFxuICAgICAgQGluY2x1ZGUgaW5zZXJ0LWljb25zKCcuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL3NjaG9vbC5wbmcnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmW2RhdGEtc2VjdGlvbj0nU3BvcnQnXTo6YWZ0ZXIge1xcclxcbiAgICAgIEBpbmNsdWRlIGluc2VydC1pY29ucygnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItbWVudS1pY29ucy9zcG9ydHMucG5nJyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJltkYXRhLXNlY3Rpb249J0ZhbWlseSddOjphZnRlciB7XFxyXFxuICAgICAgQGluY2x1ZGUgaW5zZXJ0LWljb25zKCcuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1tZW51LWljb25zL2ZhbWlseS5wbmcnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBtaXhpbiBpbnNlcnQtaWNvbnMoJHBhdGgpIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJHBhdGgpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgd2lkdGg6IDEuNTYyNXJlbTtcXHJcXG4gIGhlaWdodDogMS41NjI1cmVtO1xcclxcbn1cXHJcXG5cIixcIi50b2dnbGUtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRpbkFjdGl2ZUNvbG9yO1xcclxcbiAgY29sb3I6ICR3aGl0ZUNvbG9yO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICZbYXJpYS1wcmVzc2VkPSd0cnVlJ10ge1xcclxcbiAgICAudG9nZ2xlLWJ1dHRvbl9fdHJhaW4ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2dnbGUtYnV0dG9uX19wbGF5IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHVycXVvaXNlQ29sb3I7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX21vZGUge1xcclxcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAyOC4xMjVyZW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjIuNXJlbSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RyYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHR1cnF1b2lzZUNvbG9yO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5zdGF0aXN0aWNzLWJ1dHRvbiB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbiAgY29sb3I6ICR3aGl0ZUNvbG9yO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZUNvbG9yO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwLjdlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbHVlQ29sb3JIb3ZlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyOC4xMjVyZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYyLjVyZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICcuLi9jb21wb25lbnRzL25hdk1lbnVCdG4nO1xcclxcbkBpbXBvcnQgJy4uL2NvbXBvbmVudHMvbmF2TWVudSc7XFxyXFxuQGltcG9ydCAnLi4vY29tcG9uZW50cy90b2dnbGVCdG4nO1xcclxcbkBpbXBvcnQgJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bic7XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxLjVlbSAxZW07XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtbG9nb19fbGluayB7XFxyXFxuICAgIGNvbG9yOiAkd2hpdGVDb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAkd2hpdGVDb2xvclNoYWRvdztcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICR3aGl0ZUNvbG9ySG92ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDI4LjEyNXJlbSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2Mi41cmVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi1uYXYub3BlbiB7XFxyXFxuICAgICAgLmhlYWRlci1oYW1idXJnZXIge1xcclxcbiAgICAgICAgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgPiBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICA+IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLmNhcmQge1xcclxcbiAgICBtYXgtd2lkdGg6IDE2Ljg3NWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxOC4xMjVlbTtcXHJcXG4gICAgcGFkZGluZzogMC45Mzc1ZW07XFxyXFxuICAgIHBlcnNwZWN0aXZlOiA2Mi41ZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgJi1pbm5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgaHNsYSgwLCAwJSwgMCUsIC41KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAgaHNsYSgwLCAwJSwgMTAwJSwgLjUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAmLXBpYyB7XFxyXFxuICAgICAgICAuY2FyZC1pbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi1mcm9udCxcXHJcXG4gICAgJi1iYWNrIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi1mcm9udCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDczJSk7XFxyXFxuICAgICAgICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxyXFxuXFxyXFxuICAgICAgICAuY2FyZC1mcm9udF9fcm90YXRlIHtcXHJcXG4gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgICAgICBmb250LXNpemU6IDA7XFxyXFxuICAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogJHR1cnF1b2lzZUNvbG9yIHVybCgnLi4vYXNzZXRzL2ltYWdlcy9idG5zLWljb25zL3JvdGF0ZS5zdmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XFxyXFxuICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxyXFxuICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYuaW5hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAxJSwgNDUlKTtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IGluaXRpYWw7XFxyXFxuXFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtYmFjayB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuXFxyXFxuICAgICAgICAucm90YXRlLWJ0biB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAmLXRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2hhbmdvJywgY3Vyc2l2ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGNvbG9yOiAkc2hhZGVQdXJwbGVDb2xvcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlQ29sb3I7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB9XFxyXFxufVwiLFwiLnBsYXktYnRuIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmb250LXNpemU6IDAuMDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB3aWR0aDogMy43NXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzLjc1cmVtO1xcclxcbiAgICBib3R0b206IC01cmVtO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMS4yNWVtIGhzbGEoMCwgMCUsIDAlLCAuNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICYucmVwZWF0IHtcXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9idG5zLWljb25zL3BsYXkucG5nJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTMlO1xcclxcbiAgICAgICAgbGVmdDogNTQlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUzJSwgLTU0JSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvYnRucy1pY29ucy9yZXBsYXkucG5nJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTMlO1xcclxcbiAgICAgICAgbGVmdDogNTQlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUzJSwgLTU0JSk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVwiLFwiQGltcG9ydCAnLi4vY29tcG9uZW50cy9jYXJkSXRlbSc7XFxyXFxuQGltcG9ydCAnLi4vY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuJztcXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIC5zY29yZS1saW5lIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMuMTI1ZW07XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgJl9faWNvbiB7XFxyXFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuY2F0ZWdvcnktbmFtZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkd2hpdGVDb2xvcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZHMtbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMC42MjVlbTtcXHJcXG4gICAgICAgIHJvdy1nYXA6IDEuODc1ZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNjI1ZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcclxcblxcclxcblxcclxcbiAgICAgICAgJi5zdGFydC1wYWdlIHtcXHJcXG4gICAgICAgICAgICAuY2FyZC1mcm9udF9fcm90YXRlIHtcXHJcXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYuc3RhcnQtcGFnZVtkYXRhLW1vZGU9XFxcInBsYXlcXFwiXXtcXHJcXG4gICAgICAgIC5jYXJkLWlubmVyIHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMWVtIDAuNWVtIHJnYmEoMjE5LCAyMTksIDcsIDAuNik7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICAmW2RhdGEtY2F0ZWdvcnldOm5vdChbZGF0YS1jYXRlZ29yeT1cXFwibWFpbi1tZW51XFxcIl0pW2RhdGEtbW9kZT1cXFwicGxheVxcXCJdIHtcXHJcXG4gICAgICAgIC5jYXJkLWZyb250X190aXRsZSB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlQ29sb3I7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucm90YXRlLWJ0biB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYgfiAucGxheS1idG4ge1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMS4yNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIi5mb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNmVtIDA7XFxyXFxuXFxyXFxuICAgICYtdGV4dF9fbGluayB7XFxyXFxuICAgICAgICBjb2xvcjogJHdoaXRlQ29sb3I7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGxpbmVhcjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGVDb2xvckhvdmVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFt7c2VjdGlvbjonaG9tZScsY2F0ZWdvcnk6J21haW4tbWVudSd9LHtzZWN0aW9uOidjbG90aGVzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1zd2VhdGVyLnBuZycsbGlua1BhdGg6JyNjbG90aGVzJyxzZWN0aW9uVGl0bGU6J0Nsb3RoZXMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2NhcCcsdHJhbnNsYXRpb246J9GI0LDQv9C60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1jYXAucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvY2FwLm1wMycsYWx0OidjYXAgaW1hZ2UnfSx7d29yZDonamFja2V0Jyx0cmFuc2xhdGlvbjon0LrRg9GA0YLQutCwJyxpbWFnZTonL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvYS1qYWNrZXQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvamFja2V0Lm1wMycsYWx0OidqYWNrZXQgaW1hZ2UnfSx7d29yZDonc2NhcmYnLHRyYW5zbGF0aW9uOifRiNCw0YDRhCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy9hLXNjYXJmLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jbG90aGVzL3NjYXJmLm1wMycsYWx0OidzY2FyZiBpbWFnZSd9LHt3b3JkOidzaG9lcycsdHJhbnNsYXRpb246J9Cx0L7RgtC40L3QutC4JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL2Etc2hvZXMucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvc2hvZXMubXAzJyxhbHQ6J3Nob2VzIGltYWdlJ30se3dvcmQ6J2Jsb3VzZScsdHJhbnNsYXRpb246J9Cx0LvRg9C30LrQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY2xvdGhlcy92LWJsb3VzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9ibG91c2UubXAzJyxhbHQ6J2Jsb3VzZSBpbWFnZSd9LHt3b3JkOidjb2F0Jyx0cmFuc2xhdGlvbjon0L/QsNC70YzRgtC+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtY29hdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9jb2F0Lm1wMycsYWx0Oidjb2F0IGltYWdlJ30se3dvcmQ6J2RyZXNzJyx0cmFuc2xhdGlvbjon0L/Qu9Cw0YLRjNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jbG90aGVzL3YtZHJlc3MucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Nsb3RoZXMvZHJlc3MubXAzJyxhbHQ6J2RyZXNzIGltYWdlJ30se3dvcmQ6J3NoaXJ0Jyx0cmFuc2xhdGlvbjon0YDRg9Cx0LDRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Nsb3RoZXMvdi1zaGlydC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY2xvdGhlcy9zaGlydC5tcDMnLGFsdDonc2hpcnQgaW1hZ2UnfV19LHtzZWN0aW9uOidjb2xvdXJzJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi15ZWxsb3cucG5nJyxsaW5rUGF0aDonI2NvbG91cnMnLHNlY3Rpb25UaXRsZTonQ29sb3Vycycsc2VjdGlvbldvcmRzOlt7d29yZDonYmxhY2snLHRyYW5zbGF0aW9uOifRh9C10YDQvdGL0LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibGFjay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ibGFjay5tcDMnLGFsdDonYmxhY2sgaW1hZ2UnfSx7d29yZDonYmx1ZScsdHJhbnNsYXRpb246J9GB0LjQvdC40LknLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2NvbG91cnMvdi1ibHVlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2JsdWUubXAzJyxhbHQ6J2JsdWUgaW1hZ2UnfSx7d29yZDonYnJvd24nLHRyYW5zbGF0aW9uOifQutC+0YDQuNGH0L3QtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LWJyb3duLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL2Jyb3duLm1wMycsYWx0Oidicm93biBpbWFnZSd9LHt3b3JkOidncmVlbicsdHJhbnNsYXRpb246J9C30LXQu9GR0L3Ri9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JlZW4ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvZ3JlZW4ubXAzJyxhbHQ6J2dyZWVuIGltYWdlJ30se3dvcmQ6J2dyZXknLHRyYW5zbGF0aW9uOifRgdC10YDRi9C5JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9jb2xvdXJzL3YtZ3JleS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9ncmV5Lm1wMycsYWx0OidncmV5IGltYWdlJ30se3dvcmQ6J29yYW5nZScsdHJhbnNsYXRpb246J9C+0YDQsNC90LbQtdCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LW9yYW5nZS1jLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9jb2xvdXJzL29yYW5nZS5tcDMnLGFsdDonb3JhbmdlIGltYWdlJ30se3dvcmQ6J3BpbmsnLHRyYW5zbGF0aW9uOifRgNC+0LfQvtCy0YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXBpbmsucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2NvbG91cnMvcGluay5tcDMnLGFsdDoncGluayBpbWFnZSd9LHt3b3JkOidyZWQnLHRyYW5zbGF0aW9uOifQutGA0LDRgdC90YvQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvY29sb3Vycy92LXJlZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vY29sb3Vycy9yZWQubXAzJyxhbHQ6J3JlZCBpbWFnZSd9XX0se3NlY3Rpb246J2ZhbWlseScsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtZmFtaWx5LnBuZycsbGlua1BhdGg6JyNmYW1pbHknLHNlY3Rpb25UaXRsZTonRmFtaWx5JyxzZWN0aW9uV29yZHM6W3t3b3JkOidhdW50Jyx0cmFuc2xhdGlvbjon0YLQtdGC0Y8nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWF1bnQucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9hdW50Lm1wMycsYWx0OidhdW50IGltYWdlJ30se3dvcmQ6J2Jyb3RoZXInLHRyYW5zbGF0aW9uOifQsdGA0LDRgicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtYnJvdGhlci5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZmFtaWx5L2Jyb3RoZXIubXAzJyxhbHQ6J2Jyb3RoZXIgaW1hZ2UnfSx7d29yZDonZGFkZHknLHRyYW5zbGF0aW9uOifQv9Cw0L/QsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtZGFkZHkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9kYWRkeS5tcDMnLGFsdDonZGFkZHkgaW1hZ2UnfSx7d29yZDonZ3JhbmRtYScsdHJhbnNsYXRpb246J9Cx0LDQsdGD0YjQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mYW1pbHkvdi1ncmFuZG1hLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvZ3JhbmRtYS5tcDMnLGFsdDonZ3JhbmRtYSBpbWFnZSd9LHt3b3JkOidncmFuZHBhJyx0cmFuc2xhdGlvbjon0LTQtdC00YPRiNC60LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LWdyYW5kcGEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS9ncmFuZHBhLm1wMycsYWx0OidncmFuZHBhIGltYWdlJ30se3dvcmQ6J211bW15Jyx0cmFuc2xhdGlvbjon0LzQsNC80LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZhbWlseS92LW11bW15LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvbXVtbXkubXAzJyxhbHQ6J211bW15IGltYWdlJ30se3dvcmQ6J3Npc3RlcicsdHJhbnNsYXRpb246J9GB0LXRgdGC0YDQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3Ytc2lzdGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mYW1pbHkvc2lzdGVyLm1wMycsYWx0OidzaXN0ZXIgaW1hZ2UnfSx7d29yZDondW5jbGUnLHRyYW5zbGF0aW9uOifQtNGP0LTRjycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZmFtaWx5L3YtdW5jbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZhbWlseS91bmNsZS5tcDMnLGFsdDondW5jbGUgaW1hZ2UnfV19LHtzZWN0aW9uOidmb29kJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvYS1oYW1idXJnZXIucG5nJyxsaW5rUGF0aDonI2Zvb2QnLHNlY3Rpb25UaXRsZTonRm9vZCcsc2VjdGlvbldvcmRzOlt7d29yZDonZWdnJyx0cmFuc2xhdGlvbjon0Y/QudGG0L4nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2QvYS1lZ2cucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvZWdnLm1wMycsYWx0OidlZ2cgaW1hZ2UnfSx7d29yZDonaWNlIGNyZWFtJyx0cmFuc2xhdGlvbjon0LzQvtGA0L7QttC10L3QvtC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL2EtaWNlY3JlYW0ucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2Zvb2QvaWNlLWNyZWFtLm1wMycsYWx0OidpY2UgY3JlYW0gaW1hZ2UnfSx7d29yZDonYnJlYWQnLHRyYW5zbGF0aW9uOifRhdC70LXQsScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWJyZWFkLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2JyZWFkLm1wMycsYWx0OidicmVhZCBpbWFnZSd9LHt3b3JkOididXR0ZXInLHRyYW5zbGF0aW9uOifQvNCw0YHQu9C+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtYnV0dGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mb29kL2J1dHRlci5tcDMnLGFsdDonYnV0dGVyIGltYWdlJ30se3dvcmQ6J2Nha2UnLHRyYW5zbGF0aW9uOifQv9C40YDQvtC20L3QvtC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mb29kL3YtY2FrZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9jYWtlLm1wMycsYWx0OidjYWtlIGltYWdlJ30se3dvcmQ6J2NoZWVzZScsdHJhbnNsYXRpb246J9GB0YvRgCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZm9vZC92LWNoZWVzZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9jaGVlc2UubXAzJyxhbHQ6J2NoZWVzZSBpbWFnZSd9LHt3b3JkOidwaXp6YScsdHJhbnNsYXRpb246J9C/0LjRhtGG0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1waXp6YS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9waXp6YS5tcDMnLGFsdDoncGl6emEgaW1hZ2UnfSx7d29yZDonc2FuZHdpY2gnLHRyYW5zbGF0aW9uOifQsdGD0YLQtdGA0LHRgNC+0LQnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2Zvb2Qvdi1zYW5kd2ljaC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZm9vZC9zYW5kd2ljaC5tcDMnLGFsdDonc2FuZHdpY2ggaW1hZ2UnfV19LHtzZWN0aW9uOidmcnVpdHMnLHN0YXJ0SW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9zdGFydC1wYWdlLWNhcmRzLWltZy92LXN0cmF3YmVycnkucG5nJyxsaW5rUGF0aDonI2ZydWl0cycsc2VjdGlvblRpdGxlOidGcnVpdHMnLHNlY3Rpb25Xb3Jkczpbe3dvcmQ6J2FwcGxlJyx0cmFuc2xhdGlvbjon0Y/QsdC70L7QutC+JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1hcHBsZS5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2FwcGxlLm1wMycsYWx0OidhcHBsZSBpbWFnZSd9LHt3b3JkOidjaGVycnknLHRyYW5zbGF0aW9uOifQstC40YjQvdGPJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1jaGVycnkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9jaGVycnkubXAzJyxhbHQ6J2NoZXJyeSBpbWFnZSd9LHt3b3JkOidncmFwZScsdHJhbnNsYXRpb246J9GE0LjQs9GD0YDQvdC+0LUg0LrQsNGC0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy9hLWdyYXBlcy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vZnJ1aXRzL2dyYXBlLm1wMycsYWx0OidncmFwZSBpbWFnZSd9LHt3b3JkOidvcmFuZ2UnLHRyYW5zbGF0aW9uOifQsNC/0LXQu9GM0YHQuNC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1vcmFuZ2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9vcmFuZ2UubXAzJyxhbHQ6J29yYW5nZSBpbWFnZSd9LHt3b3JkOidwZWFjaCcsdHJhbnNsYXRpb246J9C/0LXRgNGB0LjQuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvZnJ1aXRzL2EtcGVhY2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9wZWFjaC5tcDMnLGFsdDoncGVhY2ggaW1hZ2UnfSx7d29yZDoncGluZWFwcGxlJyx0cmFuc2xhdGlvbjon0LDQvdCw0L3QsNGBJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvYS1waW5lYXBwbGUucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9waW5lYXBwbGUubXAzJyxhbHQ6J3BpbmVhcHBsZSBpbWFnZSd9LHt3b3JkOidiYW5hbmEnLHRyYW5zbGF0aW9uOifQsdCw0L3QsNC9JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9mcnVpdHMvdi1iYW5hbmEucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL2ZydWl0cy9iYW5hbmEubXAzJyxhbHQ6J2JhbmFuYSBpbWFnZSd9LHt3b3JkOidsZW1vbicsdHJhbnNsYXRpb246J9C70LjQvNC+0L0nLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL2ZydWl0cy92LWxlbW9uLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9mcnVpdHMvbGVtb24ubXAzJyxhbHQ6J2xlbW9uIGltYWdlJ31dfSx7c2VjdGlvbjoncGV0cycsc3RhcnRJbWFnZTonLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LXBhZ2UtY2FyZHMtaW1nL3YtcG9ueS5wbmcnLGxpbmtQYXRoOicjcGV0cycsc2VjdGlvblRpdGxlOidQZXRzJyxzZWN0aW9uV29yZHM6W3t3b3JkOidoYW1zdGVyJyx0cmFuc2xhdGlvbjon0YXQvtC80Y/QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLWhhbXN0ZXIucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvaGFtc3Rlci5tcDMnLGFsdDonaGFtc3RlciBpbWFnZSd9LHt3b3JkOidwYXJyb3QnLHRyYW5zbGF0aW9uOifQv9C+0L/Rg9Cz0LDQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9hLXBhcnJvdC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vcGV0cy9wYXJyb3QubXAzJyxhbHQ6J3BhcnJvdCBpbWFnZSd9LHt3b3JkOid0dXJ0bGUnLHRyYW5zbGF0aW9uOifRh9C10YDQtdC/0LDRhdCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2EtdHVydGxlLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3R1cnRsZS5tcDMnLGFsdDondHVydGxlIGltYWdlJ30se3dvcmQ6J2tpdHRlbicsdHJhbnNsYXRpb246J9C60L7RgtGR0L3QvtC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL2gta2l0dGVuLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2tpdHRlbi5tcDMnLGFsdDona2l0dGVuIGltYWdlJ30se3dvcmQ6J3B1cHB5Jyx0cmFuc2xhdGlvbjon0YnQtdC90L7QuicsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy9oLXB1cHB5LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL3B1cHB5Lm1wMycsYWx0OidwdXBweSBpbWFnZSd9LHt3b3JkOidmZXJyZXQnLHRyYW5zbGF0aW9uOifRhdC+0YDQtdC6JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtZmVycmV0LnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9wZXRzL2ZlcnJldC5tcDMnLGFsdDonZmVycmV0IGltYWdlJ30se3dvcmQ6J2Zpc2gnLHRyYW5zbGF0aW9uOifRgNGL0LHQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvcGV0cy92LWZpc2gucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvZmlzaC5tcDMnLGFsdDonZmlzaCBpbWFnZSd9LHt3b3JkOidtb3VzZScsdHJhbnNsYXRpb246J9C80YvRiNGMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9wZXRzL3YtbW91c2UucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3BldHMvbW91c2UubXAzJyxhbHQ6J21vdXNlIGltYWdlJ31dfSx7c2VjdGlvbjonc2Nob29sJyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi1wdXBpbC5wbmcnLGxpbmtQYXRoOicjc2Nob29sJyxzZWN0aW9uVGl0bGU6J1NjaG9vbCcsc2VjdGlvbldvcmRzOlt7d29yZDonYm9hcmQnLHRyYW5zbGF0aW9uOifQtNC+0YHQutCwJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi1ib2FyZC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2JvYXJkLm1wMycsYWx0Oidib2FyZCBpbWFnZSd9LHt3b3JkOidib29rJyx0cmFuc2xhdGlvbjon0LrQvdC40LPQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtYm9vay5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc2Nob29sL2Jvb2subXAzJyxhbHQ6J2Jvb2sgaW1hZ2UnfSx7d29yZDonY2FsY3VsYXRvcicsdHJhbnNsYXRpb246J9GH0LXRgNC10L/QsNGF0LAnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3NjaG9vbC92LWNhbGN1bGF0b3IucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9jYWxjdWxhdG9yLm1wMycsYWx0OidjYWxjdWxhdG9yIGltYWdlJ30se3dvcmQ6J2NsYXNzcm9vbScsdHJhbnNsYXRpb246J9GI0LrQvtC70YzQvdGL0Lkg0LrQu9Cw0YHRgScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtY2xhc3Nyb29tLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvY2xhc3Nyb29tLm1wMycsYWx0OidjbGFzc3Jvb20gaW1hZ2UnfSx7d29yZDonbWFwJyx0cmFuc2xhdGlvbjon0LrQsNGA0YLQsCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3YtbWFwLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvbWFwLm1wMycsYWx0OidtYXAgaW1hZ2UnfSx7d29yZDonbm90ZWJvb2snLHRyYW5zbGF0aW9uOifRgtC10YLRgNCw0LTRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytbm90ZWJvb2sucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3NjaG9vbC9ub3RlYm9vay5tcDMnLGFsdDonbm90ZWJvb2sgaW1hZ2UnfSx7d29yZDonc2Nob29sYmFnJyx0cmFuc2xhdGlvbjon0L/QvtGA0YLRhNC10LvRjCcsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc2Nob29sL3Ytc2Nob29sYmFnLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvc2Nob29sYmFnLm1wMycsYWx0OidzY2hvb2xiYWcgaW1hZ2UnfSx7d29yZDondGVhY2hlcicsdHJhbnNsYXRpb246J9GD0YfQuNGC0LXQu9GMJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zY2hvb2wvdi10ZWFjaGVyLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zY2hvb2wvdGVhY2hlci5tcDMnLGFsdDondGVhY2hlciBpbWFnZSd9XX0se3NlY3Rpb246J3Nwb3J0JyxzdGFydEltYWdlOicuL2Fzc2V0cy9pbWFnZXMvc3RhcnQtcGFnZS1jYXJkcy1pbWcvdi10ZW5uaXMucG5nJyxsaW5rUGF0aDonI3Nwb3J0JyxzZWN0aW9uVGl0bGU6J1Nwb3J0JyxzZWN0aW9uV29yZHM6W3t3b3JkOidiYXNrZXRiYWxsJyx0cmFuc2xhdGlvbjon0LHQsNGB0LrQtdGC0LHQvtC7JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LWJhc2tldGJhbGwucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2Jhc2tldGJhbGwubXAzJyxhbHQ6J2Jhc2tldGJhbGwgaW1hZ2UnfSx7d29yZDonY3ljbGluZycsdHJhbnNsYXRpb246J9C10LfQtNCwINC90LAg0LLQtdC70L7RgdC40L/QtdC00LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtY3ljbGluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvY3ljbGluZy5tcDMnLGFsdDonY3ljbGluZyBpbWFnZSd9LHt3b3JkOidmaWd1cmUgc2thdGluZycsdHJhbnNsYXRpb246J9GE0LjQs9GD0YDQvdC+0LUg0LrQsNGC0LDQvdC40LUnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtZmlndXJlLXNrYXRpbmcucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2ZpZ3VyZS1za2F0aW5nLm1wMycsYWx0OidmaWd1cmUgc2thdGluZyBpbWFnZSd9LHt3b3JkOidmb290YmFsbCcsdHJhbnNsYXRpb246J9GE0YPRgtCx0L7QuycsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1mb290YmFsbC5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvZm9vdGJhbGwubXAzJyxhbHQ6J2Zvb3RiYWxsIGltYWdlJ30se3dvcmQ6J2hvY2tleScsdHJhbnNsYXRpb246J9GF0L7QutC60LXQuScsaW1hZ2U6Jy4vYXNzZXRzL2ltYWdlcy9jYXJkcy1pbWFnZXMvc3BvcnQvdi1ob2NrZXkucG5nJyxhdWRpb1NyYzonYXNzZXRzL2F1ZGlvL3Nwb3J0L2hvY2tleS5tcDMnLGFsdDonaG9ja2V5IGltYWdlJ30se3dvcmQ6J3NraWluZycsdHJhbnNsYXRpb246J9C70YvQttC90YvQuSDRgdC/0L7RgNGCJyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LXNraWluZy5wbmcnLGF1ZGlvU3JjOidhc3NldHMvYXVkaW8vc3BvcnQvc2tpaW5nLm1wMycsYWx0Oidza2lpbmcgaW1hZ2UnfSx7d29yZDonc3dpbW1pbmcnLHRyYW5zbGF0aW9uOifQv9C70LDQstCw0L3QuNC1JyxpbWFnZTonLi9hc3NldHMvaW1hZ2VzL2NhcmRzLWltYWdlcy9zcG9ydC92LXN3aW1taW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9zd2ltbWluZy5tcDMnLGFsdDonc3dpbW1pbmcgaW1hZ2UnfSx7d29yZDonYm94aW5nJyx0cmFuc2xhdGlvbjon0LHQvtC60YEnLGltYWdlOicuL2Fzc2V0cy9pbWFnZXMvY2FyZHMtaW1hZ2VzL3Nwb3J0L3YtYm94aW5nLnBuZycsYXVkaW9TcmM6J2Fzc2V0cy9hdWRpby9zcG9ydC9ib3hpbmcubXAzJyxhbHQ6J2JveGluZyBpbWFnZSd9XX1dIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbM10hLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXkgfSBmcm9tICcuL2NvbXBvbmVudHMvb3ZlcmxheSc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlTWFpbiB9IGZyb20gJy4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdyB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbFdpbmRvdyc7XG5pbXBvcnQgY3JlYXRlU3RhdGlzdGljc1BhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3N0YXRpc3RpY3NQYWdlJztcbmltcG9ydCBzZXRFdmVudExpc3RlbmVycyBmcm9tICcuL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBzZXRHbG9iYWxWYWx1ZXMsIGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi91dGlscy92YXJpYWJsZXMnO1xuXG4vLyBpbXBvcnQgY3JlYXRlQ2FyZEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmRJdGVtJztcblxuY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZU92ZXJsYXkoKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVNb2RhbFdpbmRvdygpKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZU1haW4oKSk7XG5hcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVTdGF0aXN0aWNzUGFnZSgpKTtcbmFwcFdyYXBwZXIuYXBwZW5kKGNyZWF0ZUZvb3RlcigpKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHNldEdsb2JhbFZhbHVlcygpO1xuICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KGRhdGEpO1xuICBzZXRFdmVudExpc3RlbmVycygpO1xuICBjb25zb2xlLmxvZyhHRVRfVkFSKCdoZWFkZXJNZW51JykpO1xuICBjb25zb2xlLmxvZyhHRVRfVkFSKCdjYXJkc0xpc3QnKSk7XG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiY3JlYXRlQ2FyZEl0ZW0iLCJpbWdQYXRoIiwiaW1nQWx0IiwiY2FyZFRpdGxlIiwiY2FyZFNlY3Rpb24iLCJjYXJkVHJhbnNsYXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzb3VuZFBhdGgiLCJjYXJkSXRlbSIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJzZWN0aW9uIiwic291bmQiLCJjYXJkSW5uZXIiLCJjYXJkRnJvbnQiLCJjYXJkRnJvbnRJbWdDb250YWluZXIiLCJjYXJkRnJvbnRJbWciLCJzcmMiLCJhbHQiLCJhcHBlbmQiLCJjYXJkRnJvbnRUaXRsZSIsInRleHRDb250ZW50IiwiY2FyZEZyb250Um90YXRlQnRuIiwidHlwZSIsImNhcmRCYWNrIiwiY2FyZEJhY2tJbWdDb250YWluZXIiLCJjYXJkQmFja0ltZyIsImNhcmRCYWNrVGl0bGUiLCJjcmVhdGVGb290ZXIiLCJmb290ZXJFbGVtZW50IiwicGFyYWdyYXBoIiwicGFyYWdyYXBoTGluayIsInRhcmdldCIsImhyZWYiLCJmb290ZXJDb250YWluZXIiLCJkYXRhIiwiY3JlYXRlTmF2TWVudSIsImNyZWF0ZUxvZ28iLCJjcmVhdGVUb2dnbGUiLCJjcmVhdGVOYXZNZW51QnRuIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyRWxlbWVudCIsImhlYWRlckxvZ28iLCJoZWFkZXJCdG5zQ29udGFpbmVyIiwidG9nZ2xlQnRuIiwic3RhdEJ0biIsImhlYWRlck5hdiIsIm5hdk1lbnVCdG4iLCJuYXZpZ2F0aW9uTWVudSIsImhlYWRlckNvbnRhaW5lciIsImNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQiLCJHRVRfVkFSIiwibG9nb1RleHQiLCJsb2dvSHJlZiIsImhlYWRlckxvZ29MaW5rIiwibG9nb0Z1bmN0aW9uYWxpdHkiLCJzZXRMb2dvRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVDYXJkc0xpc3RTZWN0aW9uIiwiaXNNYWluTWVudSIsImlzQ2FyZCIsImlzVHJhaW5Nb2RlIiwiaXNQbGF5TW9kZSIsInRyYWluTW9kZUZ1bmN0aW9uYWxpdHkiLCJpc0dhbWVTdGFydGVkIiwiaXNBY3RpdmVDYXJkIiwidXBkYXRlU291bmRMaXN0IiwiYWRkU2NvcmVJY29uIiwicGxheVNvdW5kIiwiaXNHYW1lT3ZlciIsImlzR2FtZU92ZXJTdWNjZXNzIiwidXBkYXRlTmF2TWV1bkxpbmtzU3RhdGUiLCJzaG93T3ZlcmxheSIsImNyZWF0ZVBsYXlSZXBlYXRCdG4iLCJwbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSIsInNob3dNb2RhbFdpbmRvdyIsImhpZGVNb2RhbFdpbmRvdyIsImNyZWF0ZU1haW4iLCJtYWluRWxlbWVudCIsIm1haW5Db250YWluZXIiLCJzY29yZUxpbmUiLCJjYXRlZ29yeU5hbWUiLCJjYXJkTGlzdCIsImNhdGVnb3J5IiwibW9kZSIsInBsYXlSZXBlYXRCdG4iLCJtYWluTWVudUZ1bmN0aW9uYWxpdHkiLCJjbG9zZXN0IiwibWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IiwiZXZlbnQiLCJjYXJkc0xpc3QiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudENhcmQiLCJjdXJyZW50Q2FyZEZyb250IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnRDYXJkU291bmQiLCJjdXJyZW50U291bmQiLCJhdCIsImNvcnJlY3RBbnN3ZXJTb3VuZCIsInN1Y2Nlc3NTb3VuZCIsImNvcnJlY3RJY29uU3JjIiwid3JvbmdJY29uU3JjIiwid3JvbmdBbnN3ZXJTb3VuZCIsImZhaWx1cmVTb3VuZCIsImNvbnRhaW5zIiwic2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IiwiaGlkZU92ZXJsYXkiLCJjcmVhdGVNb2RhbFdpbmRvdyIsIm1vZGFsV2luZG93IiwiaWNvbiIsInRleHQiLCJtb2RhbFdpbmRvd0ljb24iLCJtb2RhbFdpbmRvd1RleHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY3JlYXRlTmF2TWVudUl0ZW0iLCJkYXRhU2V0IiwibmF2TWVudVVsIiwiaSIsIm9wZW5OYXZNZW51IiwiaGVhZGVyTWVudSIsImNsb3NlTmF2TWVudSIsInNldE5hdk1lbnVBY3RpdmVTdGF0ZSIsImxpbmtzIiwiZm9yRWFjaCIsImxpbmsiLCJsaW5rU2VjdGlvbiIsInJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSIsIm5hdk1lbnVMaW5rcyIsImhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5IiwiaGFtYnVyZ2VyQnRuIiwiY2xpY2siLCJzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciIsInNwYW4xIiwic3BhbjIiLCJzcGFuMyIsIm5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IiwiY2FwaXRhbGl6ZUZpcnN0V29yZCIsImxpbmtOYW1lIiwibGkiLCJjb25jYXQiLCJjcmVhdGVPdmVybGF5Iiwib3ZlcmxheUVsZW1lbnQiLCJvdmVybGF5IiwiYm9keSIsIm92ZXJsYXlGdW5jdGlvbmFsaXR5IiwiYnV0dG9uIiwic291bmRzTGlzdCIsInJlc2V0UGxheVJlcGVhdEJ0blN0YXRlIiwic2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkiLCJjcmVhdGVTY29yZUxpbmVJY29uIiwic2NvcmVJY29uIiwiY3JlYXRlU3RhdGlzdGljc1BhZ2UiLCJzdGF0aXN0aWNzUGFnZSIsInN0YXRpc3RpY3NQYWdlQ29udGFpbmVyIiwic3RhdGlzdGljc1BhZ2VCdXR0b25zIiwicmVwZWF0QnRuIiwicmVzZXRCdG4iLCJ1cGRhdGVNb2RlIiwiU0VUX1ZBUiIsImFyaWFQcmVzc2VkIiwidG9nZ2xlTW9kZVRyYWluIiwidG9nZ2xlTW9kZVBsYXkiLCJ0b2dnbGVCdG5GdW5jdGlvbmFsaXR5Iiwic2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSIsInNldEV2ZW50TGlzdGVuZXJzIiwibmFtZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNhcmQiLCJpY29uc0Ftb3VudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkc0Ftb3VudCIsImNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyIiwiY29udGFpbmVyIiwiaW5uZXJIVE1MIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJzaHVmZmxlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfcmVmIiwic2xpY2UiLCJwb3AiLCJjcmVhdGVOZXdTb3VuZHNMaXN0IiwiY2FyZHMiLCJwdXNoIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2V0R2xvYmFsVmFsdWVzIiwicmVzZXRDYXJkc1N0YXRlIiwicmVzZXRDYXJkc1NvdW5kc0xpc3QiLCJyZXNldFNjb3JlTGluZSIsInBsYXlNb2RlIiwic3RhcnRJbWFnZSIsInNlY3Rpb25Xb3JkcyIsInNlY3Rpb25UaXRsZSIsInNlY3Rpb25EYXRhIiwiaXRlbSIsImltYWdlIiwidHJhbnNsYXRpb24iLCJhdWRpb1NyYyIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdGF0ZUNhcmQiLCJyb3RhdGVCYWNrIiwicHJlcGVuZCIsIlZBUklBQkxFUyIsIm1vZGFsV2luZG93SWNvbldpbiIsIm1vZGFsV2luZG93SWNvbkxvc2UiLCJzdGF0aXN0aWNEYXRhIiwiQ2F0ZWdvcnkiLCJXb3JkIiwiVHJhbnNsYXRpb24iLCJUcmFpbmVkIiwiQ29ycmVjdCIsIkluY29ycmVjdCIsInZhbHVlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=