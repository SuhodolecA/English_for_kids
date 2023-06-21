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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navMenu */ "./src/js/components/navMenu.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./src/js/components/logo.js");
/* harmony import */ var _toggleBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleBtn */ "./src/js/components/toggleBtn.js");
/* harmony import */ var _navMenuBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navMenuBtn */ "./src/js/components/navMenuBtn.js");
/* harmony import */ var _statisticsBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statisticsBtn */ "./src/js/components/statisticsBtn.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");







var createHeader = function createHeader() {
  var headerElement = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('header');
  headerElement.classList.add('header');

  // create header logo
  var headerLogo = (0,_logo__WEBPACK_IMPORTED_MODULE_2__.createLogo)('English for kids', '#home');

  // create header buttons container
  var headerBtnsContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  headerBtnsContainer.classList.add('header-buttons');

  // create header toggle
  var toggleBtn = (0,_toggleBtn__WEBPACK_IMPORTED_MODULE_3__.createToggle)();

  // create header statistics button
  var statBtn = (0,_statisticsBtn__WEBPACK_IMPORTED_MODULE_5__.createStatisticsBtn)();
  headerBtnsContainer.append(toggleBtn);
  headerBtnsContainer.append(statBtn);

  // create nav
  var headerNav = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav');
  headerNav.classList.add('header-nav');

  // create nav menu button
  var navMenuBtn = (0,_navMenuBtn__WEBPACK_IMPORTED_MODULE_4__.createNavMenuBtn)();

  // create nav menu
  var navigationMenu = (0,_navMenu__WEBPACK_IMPORTED_MODULE_1__.createNavMenu)((0,_utils_variables__WEBPACK_IMPORTED_MODULE_6__.GET_VAR)('data'));
  headerNav.append(navMenuBtn);
  headerNav.append(navigationMenu);

  // create header container
  var headerContainer = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
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
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");


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
var setLogoFunctionality = function setLogoFunctionality() {
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.hideStatTable)();
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createStartPageCardSet)((0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('data'));
};
var setLogoEventListener = function setLogoEventListener() {
  var headerLogo = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('headerLogo');
  headerLogo.addEventListener('click', setLogoFunctionality);
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
/* harmony export */   "createMainSectionFunctionality": () => (/* binding */ createMainSectionFunctionality),
/* harmony export */   "setMainSectionFunctionality": () => (/* binding */ setMainSectionFunctionality)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* harmony import */ var _navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navMenu */ "./src/js/components/navMenu.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay */ "./src/js/components/overlay.js");
/* harmony import */ var _playRepeatBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playRepeatBtn */ "./src/js/components/playRepeatBtn.js");
/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalWindow */ "./src/js/components/modalWindow.js");
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
  var playRepeatBtn = (0,_playRepeatBtn__WEBPACK_IMPORTED_MODULE_4__.createPlayRepeatBtn)();
  mainContainer.append(categoryName);
  mainContainer.append(cardList);
  mainContainer.append(playRepeatBtn);
  mainElement.append(mainContainer);
  return mainElement;
};
var setMainMenuFunctionality = function setMainMenuFunctionality(target) {
  var section = target.closest('.card-list__item').dataset.section;
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createCardsListSection)((0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('data'), section);
  (0,_navMenu__WEBPACK_IMPORTED_MODULE_2__.updateNavMeunLinksState)(section);
};
var createMainSectionFunctionality = function createMainSectionFunctionality(event) {
  var target = event.target;
  var cardsList = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('cardsList');
  var cardInner = target.closest('.card-inner');
  var currentMode = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getCurrentMode)(cardsList, target);
  /*
  switch(currentMode) {
    case 'trainMode':
      setTrainModeFunctionality(target, cardInner);
      break;
    case 'playMode':
   }
  */
  if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isMainMenu)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isCard)(target)) {
    setMainMenuFunctionality(target);
  } else if (!(0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isMainMenu)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isTrainMode)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isCard)(target)) {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.setTrainModeFunctionality)(target, cardInner);
  } else if (!(0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isMainMenu)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isPlayMode)(cardsList) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isCard)(target) && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameStarted)()) {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.setPlayModeFunctionality)(target);
    // const currentCard = target.closest('.card-list__item');
    // const currentCardFront = currentCard.querySelector('.card-front');
    // const currentCardSound = currentCard.dataset.sound;
    // const currentSound = GET_VAR('soundsList').at(-1);
    // const playRepeatBtn = GET_VAR('playRepeatBtn');
    // const correctAnswerSound = 'assets/audio/answers-sound/correct-choice.mp3';
    // const successSound = 'assets/audio/answers-sound/success.mp3';
    // const correctIconSrc = 'assets/images/score-icons/correct.png';
    // const wrongIconSrc = 'assets/images/score-icons/wrong.png';
    // const wrongAnswerSound = 'assets/audio/answers-sound/negative_beeps.mp3';
    // const failureSound = 'assets/audio/answers-sound/failure.mp3';
    // if (isActiveCard(currentCardFront) && !playRepeatBtn.classList.contains('playing')) {
    //   updateStatisticsPageData('play', currentCard, currentCardSound === currentSound);
    //   if (currentCardSound === currentSound) {
    //     currentCardFront.classList.add('inactive');
    //     addScoreIcon(currentCard, correctIconSrc);
    //     playSound(currentCard, correctAnswerSound);
    //     updateSoundList();
    //     createPlayRepeatBtnFunctionality(playRepeatBtn);
    //     if (isGameOver()) {
    //       showOverlay();
    //       if (isGameOverSuccess()) {
    //         playSound(currentCard, successSound);
    //         showModalWindow();
    //         hideModalWindow();
    //       } else {
    //         playSound(currentCard, failureSound);
    //         showModalWindow();
    //         hideModalWindow();
    //       }
    //     }
    //   } else {
    //     addScoreIcon(currentCard, wrongIconSrc);
    //     playSound(currentCard, wrongAnswerSound);
    //   }
    // }
  }
};

var setMainSectionFunctionality = function setMainSectionFunctionality() {
  var cardsList = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('cardsList');
  cardsList.addEventListener('click', createMainSectionFunctionality);
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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay */ "./src/js/components/overlay.js");
/* eslint-disable import/no-cycle */



var createModalWindow = function createModalWindow() {
  var modalWindow = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  modalWindow.classList.add('modal-window');
  var icon = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('img');
  icon.classList.add('modal-window__icon');
  icon.src = '';
  icon.alt = 'icon';
  var text = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('p');
  text.classList.add('modal-window__text');
  text.textContent = '';
  var h3 = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
  h3.classList.add('modal-window__score');
  modalWindow.append(icon);
  modalWindow.append(text);
  modalWindow.append(h3);
  return modalWindow;
};
var showModalWindow = function showModalWindow() {
  var modalWindow = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('modalWindow');
  var modalWindowIcon = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('modalWindowIcon');
  var modalWindowText = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('modalWindowText');
  var modalWindowhScore = document.querySelector('.modal-window__score');
  var scoreLine = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('scoreLine');
  if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.isGameOverSuccess)()) {
    modalWindowIcon.src = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('modalWindowIconWin');
    modalWindowText.textContent = 'You are win!';
    modalWindow.classList.add('appear');
    modalWindowhScore.textContent = '';
  } else {
    var scoreLineIcons = scoreLine.querySelectorAll('img');
    var amountOfMistakes = Array.from(scoreLineIcons).filter(function (item) {
      return item.src.indexOf('assets/images/score-icons/wrong.png') !== -1;
    }).length;
    modalWindowhScore.textContent = "Mistakes: ".concat(amountOfMistakes);
    modalWindowIcon.src = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('modalWindowIconLose');
    modalWindowText.textContent = 'You are lose!';
    modalWindow.classList.add('appear');
  }
};
var hideModalWindow = function hideModalWindow() {
  var modalWindow = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('modalWindow');
  setTimeout(function () {
    modalWindow.classList.remove('appear');
    (0,_overlay__WEBPACK_IMPORTED_MODULE_2__.hideOverlay)();
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createStartPageCardSet)((0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('data'));
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
/* harmony export */   "createHamburgerMenuFunctionality": () => (/* binding */ createHamburgerMenuFunctionality),
/* harmony export */   "createNavMenu": () => (/* binding */ createNavMenu),
/* harmony export */   "openNavMenu": () => (/* binding */ openNavMenu),
/* harmony export */   "setHamburgerMenuEventListener": () => (/* binding */ setHamburgerMenuEventListener),
/* harmony export */   "updateNavMeunLinksState": () => (/* binding */ updateNavMeunLinksState)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _navMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navMenuItem */ "./src/js/components/navMenuItem.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");
/* eslint-disable import/no-cycle */



var createNavMenu = function createNavMenu(dataSet) {
  // create nav ul
  var navMenuUl = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul');
  navMenuUl.classList.add('header-menu');
  var data = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('data');
  for (var i = 0; i < dataSet.length; i += 1) {
    navMenuUl.append((0,_navMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])(data[i].section));
  }
  return navMenuUl;
};
var openNavMenu = function openNavMenu(headerNav) {
  var headerMenu = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('headerMenu');
  var navMenuLinks = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('navMenuLinks');
  navMenuLinks.forEach(function (link) {
    link.tabIndex = 0;
  });
  headerNav.classList.add('open');
  headerMenu.classList.remove('slide-out');
  headerMenu.classList.add('slide-in');
};
var closeNavMenu = function closeNavMenu(headerNav) {
  var headerMenu = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('headerMenu');
  var navMenuLinks = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('navMenuLinks');
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
  var navMenuLinks = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('navMenuLinks');
  removeNavMenuActiveState(navMenuLinks);
  setNavMenuActiveState(navMenuLinks, category);
};
var createHamburgerMenuFunctionality = function createHamburgerMenuFunctionality(event) {
  var target = event.target;
  var categoryName = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('categoryName');
  var hamburgerBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('hamburgerBtn');
  var section = target.dataset.section;
  categoryName.textContent = section;
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.hideStatTable)();
  if (section === 'Home') {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createStartPageCardSet)((0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('data'));
    hamburgerBtn.click();
  } else if (section === undefined) {
    return;
  } else {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createCardsListSection)((0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('data'), section);
    hamburgerBtn.click();
  }
  updateNavMeunLinksState(categoryName.textContent);
};
var setHamburgerMenuEventListener = function setHamburgerMenuEventListener() {
  var headerMenu = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_2__.GET_VAR)('headerMenu');
  headerMenu.addEventListener('click', createHamburgerMenuFunctionality);
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
/* harmony export */   "setNavMenuBtnFunctionality": () => (/* binding */ setNavMenuBtnFunctionality)
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
var setNavMenuBtnFunctionality = function setNavMenuBtnFunctionality() {
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
/* harmony export */   "setOverlayFunctionality": () => (/* binding */ setOverlayFunctionality),
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
var setOverlayFunctionality = function setOverlayFunctionality() {
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
/* harmony export */   "createPlayRepeatBtnFunctionality": () => (/* binding */ createPlayRepeatBtnFunctionality),
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
var createPlayRepeatBtnFunctionality = function createPlayRepeatBtnFunctionality() {
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
  playRepeatBtn.addEventListener('click', createPlayRepeatBtnFunctionality);
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
/* harmony export */   "setStatisticsBtnFunctionality": () => (/* binding */ setStatisticsBtnFunctionality)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ "./src/js/utils/variables.js");



// create header statistics button
var createStatisticsBtn = function createStatisticsBtn() {
  var statBtn = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)('button');
  statBtn.type = 'button';
  statBtn.classList.add('statistics-button');
  statBtn.textContent = 'Statistics';
  return statBtn;
};
var setStatisticsBtnFunctionality = function setStatisticsBtnFunctionality() {
  var statBtn = document.querySelector('.statistics-button');
  statBtn.addEventListener('click', function () {
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.setGlobalValues)();
    var statisticsPage = document.querySelector('.statistics-page');
    var statisticsPageContainer = statisticsPage.querySelector('.container');
    var statisticsTable = document.querySelector('.stat-table');
    var statisticData = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('statisticData').slice();
    statisticsTable.remove();
    statisticsPageContainer.append((0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.createStatisticsTable)(statisticData));
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
    var repeatedDataSet = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('data').filter(function (item) {
      return item.sectionWords;
    }).map(function (elem) {
      return elem.sectionWords;
    }).flat().filter(function (item) {
      return repeatedData.includes(item.translation);
    });
    (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.SET_VAR)('repeatedDataSet', repeatedDataSet);
    if (repeatedDataSet.length !== 0) {
      repeatBtn.disabled = false;
    } else {
      repeatBtn.disabled = true;
    }
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.setStatisticsTableFunctionality)();
    (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.showStatTable)();
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
/* harmony export */   "setToggleBtnFunctionality": () => (/* binding */ setToggleBtnFunctionality)
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
var createToggleBtnFunctionality = function createToggleBtnFunctionality() {
  var toggleBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('toggleBtn');
  toggleBtn.ariaPressed = toggleBtn.ariaPressed === 'false' ? 'true' : 'false';
  (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.SET_VAR)('isPlayMode', toggleBtn.ariaPressed);
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.updateMode)();
};
var setToggleBtnFunctionality = function setToggleBtnFunctionality() {
  var toggleBtn = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_1__.GET_VAR)('toggleBtn');
  toggleBtn.addEventListener('click', createToggleBtnFunctionality);
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
  (0,_components_navMenuBtn__WEBPACK_IMPORTED_MODULE_0__.setNavMenuBtnFunctionality)();
  (0,_components_overlay__WEBPACK_IMPORTED_MODULE_1__.setOverlayFunctionality)();
  (0,_components_navMenu__WEBPACK_IMPORTED_MODULE_2__.setHamburgerMenuEventListener)();
  (0,_components_logo__WEBPACK_IMPORTED_MODULE_3__.setLogoEventListener)();
  (0,_components_main__WEBPACK_IMPORTED_MODULE_4__.setMainSectionFunctionality)();
  (0,_components_toggleBtn__WEBPACK_IMPORTED_MODULE_5__.setToggleBtnFunctionality)();
  (0,_components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_6__.setPlayRepeatBtnFunctionality)();
  (0,_helper__WEBPACK_IMPORTED_MODULE_9__.setStatisticsTableFunctionality)();
  (0,_components_statisticsBtn__WEBPACK_IMPORTED_MODULE_7__.setStatisticsBtnFunctionality)();
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
/* harmony export */   "getCurrentMode": () => (/* binding */ getCurrentMode),
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
/* harmony export */   "setPlayModeFunctionality": () => (/* binding */ setPlayModeFunctionality),
/* harmony export */   "setStatisticsTableFunctionality": () => (/* binding */ setStatisticsTableFunctionality),
/* harmony export */   "setTrainModeFunctionality": () => (/* binding */ setTrainModeFunctionality),
/* harmony export */   "showStatTable": () => (/* binding */ showStatTable),
/* harmony export */   "shuffleArray": () => (/* binding */ shuffleArray),
/* harmony export */   "updateMode": () => (/* binding */ updateMode),
/* harmony export */   "updateSoundList": () => (/* binding */ updateSoundList),
/* harmony export */   "updateStatisticsPageData": () => (/* binding */ updateStatisticsPageData)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/utils/variables.js");
/* harmony import */ var _components_cardItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cardItem */ "./src/js/components/cardItem.js");
/* harmony import */ var _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/playRepeatBtn */ "./src/js/components/playRepeatBtn.js");
/* harmony import */ var _components_scoreLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scoreLineIcon */ "./src/js/components/scoreLineIcon.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main */ "./src/js/components/main.js");
/* harmony import */ var _components_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/overlay */ "./src/js/components/overlay.js");
/* harmony import */ var _components_modalWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modalWindow */ "./src/js/components/modalWindow.js");
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
var getCurrentMode = function getCurrentMode(element, target) {
  if (!isMainMenu(element) && isTrainMode(element) && isCard(target)) {
    return 'trainMode';
  }
  if (!isMainMenu(element) && isPlayMode(element) && isCard(target) && isGameStarted()) {
    return 'playMode';
  }
  return 'mainMode';
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
var calculateercentCorrectAnswers = function calculateercentCorrectAnswers(obj) {
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
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.SET_VAR)('statisticData', createStatisticsData((0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('data')));
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
    currentItem['Accuracy %'] = calculateercentCorrectAnswers(currentItem);
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
    currentItem['Accuracy %'] = calculateercentCorrectAnswers(currentItem);
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
    playRepeatBtn.removeEventListener('click', _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__.createPlayRepeatBtnFunctionality);
    audio.addEventListener('ended', function () {
      playRepeatBtn.addEventListener('click', _components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__.createPlayRepeatBtnFunctionality);
    });
  } else {
    cardsList.removeEventListener('click', _components_main__WEBPACK_IMPORTED_MODULE_4__.createMainSectionFunctionality);
    audio.addEventListener('ended', function () {
      cardsList.addEventListener('click', _components_main__WEBPACK_IMPORTED_MODULE_4__.createMainSectionFunctionality);
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
var setTrainModeFunctionality = function setTrainModeFunctionality(target, cardInner) {
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
var setPlayModeFunctionality = function setPlayModeFunctionality(target) {
  var currentCard = target.closest('.card-list__item');
  var currentCardFront = currentCard.querySelector('.card-front');
  var currentCardSound = currentCard.dataset.sound;
  var currentSound = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('soundsList').at(-1);
  var playRepeatBtn = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.GET_VAR)('playRepeatBtn');
  var correctAnswerSound = 'assets/audio/answers-sound/correct-choice.mp3';
  var successSound = 'assets/audio/answers-sound/success.mp3';
  var correctIconSrc = 'assets/images/score-icons/correct.png';
  var wrongIconSrc = 'assets/images/score-icons/wrong.png';
  var wrongAnswerSound = 'assets/audio/answers-sound/negative_beeps.mp3';
  var failureSound = 'assets/audio/answers-sound/failure.mp3';
  if (isActiveCard(currentCardFront) && !playRepeatBtn.classList.contains('playing')) {
    updateStatisticsPageData('play', currentCard, currentCardSound === currentSound);
    if (currentCardSound === currentSound) {
      currentCardFront.classList.add('inactive');
      addScoreIcon(currentCard, correctIconSrc);
      playSound(currentCard, correctAnswerSound);
      updateSoundList();
      (0,_components_playRepeatBtn__WEBPACK_IMPORTED_MODULE_2__.createPlayRepeatBtnFunctionality)(playRepeatBtn);
      if (isGameOver()) {
        (0,_components_overlay__WEBPACK_IMPORTED_MODULE_5__.showOverlay)();
        if (isGameOverSuccess()) {
          playSound(currentCard, successSound);
          (0,_components_modalWindow__WEBPACK_IMPORTED_MODULE_6__.showModalWindow)();
          (0,_components_modalWindow__WEBPACK_IMPORTED_MODULE_6__.hideModalWindow)();
        } else {
          playSound(currentCard, failureSound);
          (0,_components_modalWindow__WEBPACK_IMPORTED_MODULE_6__.showModalWindow)();
          (0,_components_modalWindow__WEBPACK_IMPORTED_MODULE_6__.hideModalWindow)();
        }
      }
    } else {
      addScoreIcon(currentCard, wrongIconSrc);
      playSound(currentCard, wrongAnswerSound);
    }
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
/* harmony import */ var _components_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/overlay */ "./src/js/components/overlay.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main */ "./src/js/components/main.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _components_modalWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modalWindow */ "./src/js/components/modalWindow.js");
/* harmony import */ var _components_statisticsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/statisticsPage */ "./src/js/components/statisticsPage.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/events */ "./src/js/utils/events.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/helper */ "./src/js/utils/helper.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/variables */ "./src/js/utils/variables.js");










var appWrapper = document.querySelector('.wrapper');
fetch('../assets/data/data.json').then(function (response) {
  return response.json();
}).then(function (response) {
  return (0,_utils_variables__WEBPACK_IMPORTED_MODULE_9__.SET_VAR)('data', response);
}).then(function () {
  appWrapper.append((0,_components_overlay__WEBPACK_IMPORTED_MODULE_1__.createOverlay)());
  appWrapper.append((0,_components_header__WEBPACK_IMPORTED_MODULE_2__["default"])());
  appWrapper.append((0,_components_modalWindow__WEBPACK_IMPORTED_MODULE_5__.createModalWindow)());
  appWrapper.append((0,_components_main__WEBPACK_IMPORTED_MODULE_3__.createMain)());
  appWrapper.append((0,_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"])());
}).then(function () {
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_8__.setGlobalValues)();
  (0,_utils_helper__WEBPACK_IMPORTED_MODULE_8__.createStartPageCardSet)((0,_utils_variables__WEBPACK_IMPORTED_MODULE_9__.GET_VAR)('data'));
  var mainSection = (0,_utils_variables__WEBPACK_IMPORTED_MODULE_9__.GET_VAR)('mainSection');
  mainSection.append((0,_components_statisticsPage__WEBPACK_IMPORTED_MODULE_6__.createStatisticsPage)());
  (0,_utils_events__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBQztFQUMvQm9QLFVBQVUsQ0FBQ2hULE1BQU0sQ0FBQ08sOERBQVksRUFBRSxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUNEMlMsSUFBSSxDQUFDLFlBQU07RUFDVnRLLDhEQUFlLEVBQUU7RUFDakI5RyxxRUFBc0IsQ0FBQ1gseURBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUN2QyxJQUFNcU4sV0FBVyxHQUFHck4seURBQU8sQ0FBQyxhQUFhLENBQUM7RUFDMUNxTixXQUFXLENBQUN4TyxNQUFNLENBQUN1SyxnRkFBb0IsRUFBRSxDQUFDO0VBQzFDaUIseURBQWlCLEVBQUU7QUFDckIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvY2FyZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbFdpbmRvdy5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudUJ0bi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2TWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3BsYXlSZXBlYXRCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3Njb3JlTGluZUljb24uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3N0YXRpc3RpY3NCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy9jb21wb25lbnRzL3N0YXRpc3RpY3NQYWdlLmpzIiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvY29tcG9uZW50cy90b2dnbGVCdG4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9qcy91dGlscy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzM2MTUiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbmdsaXNoX2Zvcl9raWRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZW5nbGlzaF9mb3Jfa2lkcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VuZ2xpc2hfZm9yX2tpZHMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuY29uc3QgY3JlYXRlQ2FyZEl0ZW1JbWcgPSAoaW1nUGF0aCwgaW1nQWx0LCBpbWdDbGFzcykgPT4ge1xuICBjb25zdCBjYXJkSXRlbUltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjYXJkSXRlbUltZy5jbGFzc0xpc3QuYWRkKGltZ0NsYXNzKTtcbiAgY2FyZEl0ZW1JbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgY2FyZEl0ZW1JbWcuc3JjID0gaW1nUGF0aDtcbiAgY2FyZEl0ZW1JbWcuYWx0ID0gaW1nQWx0O1xuXG4gIHJldHVybiBjYXJkSXRlbUltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmRJdGVtVGl0bGUgPSAodGl0bGVUZXh0LCB0aXRsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKHRpdGxlQ2xhc3MpO1xuICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG5cbiAgcmV0dXJuIGNhcmRUaXRsZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmRSb3RhdGVCdG4gPSAocm90YXRlQnRuQ2xhc3MsIHJvdGF0ZUJ0blRleHQpID0+IHtcbiAgY29uc3QgY2FyZFJvdGF0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYXJkUm90YXRlQnRuLmNsYXNzTGlzdC5hZGQocm90YXRlQnRuQ2xhc3MpO1xuICBjYXJkUm90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idG4nKTtcbiAgY2FyZFJvdGF0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGNhcmRSb3RhdGVCdG4udGV4dENvbnRlbnQgPSByb3RhdGVCdG5UZXh0O1xuXG4gIHJldHVybiBjYXJkUm90YXRlQnRuO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZEl0ZW0gPSAoaW1nUGF0aCwgaW1nQWx0LCBjYXJkVGl0bGUsIGNhcmRTZWN0aW9uLCBjYXJkVHJhbnNsYXRpb24gPSAnJywgc291bmRQYXRoID0gJycpID0+IHtcbiAgLy8gY3JlYXRlIGNhcmQgaXRlbVxuICBjb25zdCBjYXJkSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNhcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1saXN0X19pdGVtJyk7XG4gIGNhcmRJdGVtLmRhdGFzZXQuc2VjdGlvbiA9IGNhcmRTZWN0aW9uO1xuICBjYXJkSXRlbS5kYXRhc2V0LnNvdW5kID0gc291bmRQYXRoO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGlubmVyXG4gIGNvbnN0IGNhcmRJbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkSW5uZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbm5lcicpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IHNpZGVcbiAgY29uc3QgY2FyZEZyb250ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRGcm9udC5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250Jyk7XG5cbiAgLy8gY3JlYXRlIGNhcmQgZnJvbnQgaW1hZ2UgY29udGFpbmVyXG4gIGNvbnN0IGNhcmRGcm9udEltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkRnJvbnRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udF9fcGljJyk7XG4gIGNhcmRGcm9udEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGZyb250IGltYWdlXG4gIGNvbnN0IGNhcmRGcm9udEltZyA9IGNyZWF0ZUNhcmRJdGVtSW1nKGltZ1BhdGgsIGltZ0FsdCwgJ2NhcmQtZnJvbnRfX3BpYy1pbWcnKTtcblxuICBjYXJkRnJvbnRJbWdDb250YWluZXIuYXBwZW5kKGNhcmRGcm9udEltZyk7XG4gIGNhcmRGcm9udC5hcHBlbmQoY2FyZEZyb250SW1nQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCB0aXRsZVxuICBjb25zdCBjYXJkRnJvbnRUaXRsZSA9IGNyZWF0ZUNhcmRJdGVtVGl0bGUoY2FyZFRpdGxlLCAnY2FyZC1mcm9udF9fdGl0bGUnKTtcblxuICBjYXJkRnJvbnQuYXBwZW5kKGNhcmRGcm9udFRpdGxlKTtcblxuICAvLyBjcmVhdGUgY2FyZCBmcm9udCByb3RhdGUgYnV0dG9uXG4gIGNvbnN0IGNhcmRGcm9udFJvdGF0ZUJ0biA9IGNyZWF0ZUNhcmRSb3RhdGVCdG4oJ2NhcmQtZnJvbnRfX3JvdGF0ZScsICdyb3RhdGUgYnV0dG9uJyk7XG5cbiAgY2FyZEZyb250LmFwcGVuZChjYXJkRnJvbnRSb3RhdGVCdG4pO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgc2lkZVxuICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKTtcblxuICAvLyBjcmVhdGUgY2FyZCBiYWNrIGltYWdlIGNvbnRhaW5lclxuICBjb25zdCBjYXJkQmFja0ltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2tfX3BpYycpO1xuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXBpYycpO1xuXG4gIC8vIGNyZWF0ZSBjYXJkIGJhY2sgaW1hZ2VcbiAgY29uc3QgY2FyZEJhY2tJbWcgPSBjcmVhdGVDYXJkSXRlbUltZyhpbWdQYXRoLCBpbWdBbHQsICdjYXJkLWJhY2tfX3BpYy1pbWcnKTtcblxuICBjYXJkQmFja0ltZ0NvbnRhaW5lci5hcHBlbmQoY2FyZEJhY2tJbWcpO1xuXG4gIGNhcmRCYWNrLmFwcGVuZChjYXJkQmFja0ltZ0NvbnRhaW5lcik7XG5cbiAgLy8gY3JlYXRlIGNhcmQgYmFjayB0aXRsZVxuICBjb25zdCBjYXJkQmFja1RpdGxlID0gY3JlYXRlQ2FyZEl0ZW1UaXRsZShjYXJkVHJhbnNsYXRpb24sICdjYXJkLWJhY2tfX3RpdGxlJyk7XG5cbiAgY2FyZEJhY2suYXBwZW5kKGNhcmRCYWNrVGl0bGUpO1xuXG4gIGNhcmRJbm5lci5hcHBlbmQoY2FyZEZyb250KTtcbiAgY2FyZElubmVyLmFwcGVuZChjYXJkQmFjayk7XG5cbiAgY2FyZEl0ZW0uYXBwZW5kKGNhcmRJbm5lcik7XG4gIHJldHVybiBjYXJkSXRlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRJdGVtO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIGZvb3RlclxuICBjb25zdCBmb290ZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgLy8gY3JlYXRlIGZvb3RlciBwYXJhZ3JhcGhcbiAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgJztcblxuICAvLyBjcmVhdGUgZm9vdGVyIHBhcmFncmFwaCBsaW5rXG4gIGNvbnN0IHBhcmFncmFwaExpbmsgPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIHBhcmFncmFwaExpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHRfX2xpbmsnKTtcbiAgcGFyYWdyYXBoTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgcGFyYWdyYXBoTGluay50ZXh0Q29udGVudCA9ICdBbnRvbiBTdWtoYWRvbGV0cyc7XG4gIHBhcmFncmFwaExpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vU3Vob2RvbGVjQSc7XG5cbiAgcGFyYWdyYXBoLmFwcGVuZChwYXJhZ3JhcGhMaW5rKTtcblxuICAvLyBjcmVhdGUgZm9vdGVyIGNvbnRhaW5lclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmQocGFyYWdyYXBoKTtcblxuICBmb290ZXJFbGVtZW50LmFwcGVuZChmb290ZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBmb290ZXJFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBjcmVhdGVOYXZNZW51IH0gZnJvbSAnLi9uYXZNZW51JztcbmltcG9ydCB7IGNyZWF0ZUxvZ28gfSBmcm9tICcuL2xvZ28nO1xuaW1wb3J0IHsgY3JlYXRlVG9nZ2xlIH0gZnJvbSAnLi90b2dnbGVCdG4nO1xuaW1wb3J0IHsgY3JlYXRlTmF2TWVudUJ0biB9IGZyb20gJy4vbmF2TWVudUJ0bic7XG5pbXBvcnQgeyBjcmVhdGVTdGF0aXN0aWNzQnRuIH0gZnJvbSAnLi9zdGF0aXN0aWNzQnRuJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGxvZ29cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUxvZ28oJ0VuZ2xpc2ggZm9yIGtpZHMnLCAnI2hvbWUnKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckJ0bnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgdG9nZ2xlXG4gIGNvbnN0IHRvZ2dsZUJ0biA9IGNyZWF0ZVRvZ2dsZSgpO1xuXG4gIC8vIGNyZWF0ZSBoZWFkZXIgc3RhdGlzdGljcyBidXR0b25cbiAgY29uc3Qgc3RhdEJ0biA9IGNyZWF0ZVN0YXRpc3RpY3NCdG4oKTtcblxuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVCdG4pO1xuICBoZWFkZXJCdG5zQ29udGFpbmVyLmFwcGVuZChzdGF0QnRuKTtcblxuICAvLyBjcmVhdGUgbmF2XG4gIGNvbnN0IGhlYWRlck5hdiA9IGNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hdicpO1xuXG4gIC8vIGNyZWF0ZSBuYXYgbWVudSBidXR0b25cbiAgY29uc3QgbmF2TWVudUJ0biA9IGNyZWF0ZU5hdk1lbnVCdG4oKTtcblxuICAvLyBjcmVhdGUgbmF2IG1lbnVcbiAgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSBjcmVhdGVOYXZNZW51KEdFVF9WQVIoJ2RhdGEnKSk7XG5cbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZNZW51QnRuKTtcbiAgaGVhZGVyTmF2LmFwcGVuZChuYXZpZ2F0aW9uTWVudSk7XG5cbiAgLy8gY3JlYXRlIGhlYWRlciBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlck5hdik7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTG9nbyk7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyQnRuc0NvbnRhaW5lcik7XG4gIGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LCBoaWRlU3RhdFRhYmxlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVMb2dvID0gKGxvZ29UZXh0LCBsb2dvSHJlZikgPT4ge1xuICAvLyBjcmVhdGUgbG9nb1xuICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuXG4gIGNvbnN0IGhlYWRlckxvZ29MaW5rID0gY3JlYXRlRWxlbWVudCgnYScpO1xuICBoZWFkZXJMb2dvTGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nb19fbGluaycpO1xuICBoZWFkZXJMb2dvTGluay50ZXh0Q29udGVudCA9IGxvZ29UZXh0O1xuICBoZWFkZXJMb2dvTGluay5ocmVmID0gbG9nb0hyZWY7XG5cbiAgaGVhZGVyTG9nby5hcHBlbmQoaGVhZGVyTG9nb0xpbmspO1xuXG4gIHJldHVybiBoZWFkZXJMb2dvO1xufTtcblxuY29uc3Qgc2V0TG9nb0Z1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGhpZGVTdGF0VGFibGUoKTtcbiAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChHRVRfVkFSKCdkYXRhJykpO1xufTtcblxuY29uc3Qgc2V0TG9nb0V2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckxvZ28gPSBHRVRfVkFSKCdoZWFkZXJMb2dvJyk7XG4gIGhlYWRlckxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRMb2dvRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMb2dvLCBzZXRMb2dvRXZlbnRMaXN0ZW5lciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCBpc01haW5NZW51LCBpc0NhcmQsIGlzVHJhaW5Nb2RlLFxuICBpc1BsYXlNb2RlLCBzZXRUcmFpbk1vZGVGdW5jdGlvbmFsaXR5LCBpc0dhbWVTdGFydGVkLFxuICBpc0FjdGl2ZUNhcmQsIHVwZGF0ZVNvdW5kTGlzdCwgYWRkU2NvcmVJY29uLCBwbGF5U291bmQsIGlzR2FtZU92ZXIsXG4gIGlzR2FtZU92ZXJTdWNjZXNzLCB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEsIGdldEN1cnJlbnRNb2RlLCBzZXRQbGF5TW9kZUZ1bmN0aW9uYWxpdHksXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQgeyBHRVRfVkFSIH0gZnJvbSAnLi4vdXRpbHMvdmFyaWFibGVzJztcbmltcG9ydCB7IHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlIH0gZnJvbSAnLi9uYXZNZW51JztcbmltcG9ydCB7IHNob3dPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7IGNyZWF0ZVBsYXlSZXBlYXRCdG4sIGNyZWF0ZVBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCB7IHNob3dNb2RhbFdpbmRvdywgaGlkZU1vZGFsV2luZG93IH0gZnJvbSAnLi9tb2RhbFdpbmRvdyc7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBtYWluIGVsZW1lbnRcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAvLyBjcmVhdGUgbWFpbiBjb250YWluZXJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIC8vIGNyZWF0ZSBzY29yZSBsaW5lXG4gIGNvbnN0IHNjb3JlTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY29yZUxpbmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUtbGluZScpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKHNjb3JlTGluZSk7XG5cbiAgLy8gY3JlYXRlIGNhdGVnb3J5IG5hbWVcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY2F0ZWdvcnlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LW5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gJyc7XG5cbiAgLy8gY2FyZHMgbGlzdFxuICBjb25zdCBjYXJkTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNhcmRMaXN0LmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWxpc3QnKTtcbiAgY2FyZExpc3QuZGF0YXNldC5jYXRlZ29yeSA9ICcnO1xuICBjYXJkTGlzdC5kYXRhc2V0Lm1vZGUgPSAnJztcblxuICAvLyBjcmVhdGUgcGxheVJlcGVhdCBidXR0b25cbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IGNyZWF0ZVBsYXlSZXBlYXRCdG4oKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZChjYXRlZ29yeU5hbWUpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChjYXJkTGlzdCk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKHBsYXlSZXBlYXRCdG4pO1xuXG4gIG1haW5FbGVtZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbkVsZW1lbnQ7XG59O1xuXG5jb25zdCBzZXRNYWluTWVudUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHsgc2VjdGlvbiB9ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKS5kYXRhc2V0O1xuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uKEdFVF9WQVIoJ2RhdGEnKSwgc2VjdGlvbik7XG4gIHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlKHNlY3Rpb24pO1xufTtcblxuY29uc3QgY3JlYXRlTWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IGNhcmRJbm5lciA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1pbm5lcicpO1xuICBjb25zdCBjdXJyZW50TW9kZSA9IGdldEN1cnJlbnRNb2RlKGNhcmRzTGlzdCwgdGFyZ2V0KTtcbiAgLypcbiAgc3dpdGNoKGN1cnJlbnRNb2RlKSB7XG4gICAgY2FzZSAndHJhaW5Nb2RlJzpcbiAgICAgIHNldFRyYWluTW9kZUZ1bmN0aW9uYWxpdHkodGFyZ2V0LCBjYXJkSW5uZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGxheU1vZGUnOlxuXG4gIH1cbiAgKi9cbiAgaWYgKGlzTWFpbk1lbnUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KSkge1xuICAgIHNldE1haW5NZW51RnVuY3Rpb25hbGl0eSh0YXJnZXQpO1xuICB9IGVsc2UgaWYgKCFpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNUcmFpbk1vZGUoY2FyZHNMaXN0KSAmJiBpc0NhcmQodGFyZ2V0KSkge1xuICAgIHNldFRyYWluTW9kZUZ1bmN0aW9uYWxpdHkodGFyZ2V0LCBjYXJkSW5uZXIpO1xuICB9IGVsc2UgaWYgKCFpc01haW5NZW51KGNhcmRzTGlzdCkgJiYgaXNQbGF5TW9kZShjYXJkc0xpc3QpICYmIGlzQ2FyZCh0YXJnZXQpXG4gICAgJiYgaXNHYW1lU3RhcnRlZCgpKSB7XG4gICAgc2V0UGxheU1vZGVGdW5jdGlvbmFsaXR5KHRhcmdldCk7XG4gICAgLy8gY29uc3QgY3VycmVudENhcmQgPSB0YXJnZXQuY2xvc2VzdCgnLmNhcmQtbGlzdF9faXRlbScpO1xuICAgIC8vIGNvbnN0IGN1cnJlbnRDYXJkRnJvbnQgPSBjdXJyZW50Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1mcm9udCcpO1xuICAgIC8vIGNvbnN0IGN1cnJlbnRDYXJkU291bmQgPSBjdXJyZW50Q2FyZC5kYXRhc2V0LnNvdW5kO1xuICAgIC8vIGNvbnN0IGN1cnJlbnRTb3VuZCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKS5hdCgtMSk7XG4gICAgLy8gY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgICAvLyBjb25zdCBjb3JyZWN0QW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvY29ycmVjdC1jaG9pY2UubXAzJztcbiAgICAvLyBjb25zdCBzdWNjZXNzU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvc3VjY2Vzcy5tcDMnO1xuICAgIC8vIGNvbnN0IGNvcnJlY3RJY29uU3JjID0gJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvY29ycmVjdC5wbmcnO1xuICAgIC8vIGNvbnN0IHdyb25nSWNvblNyYyA9ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZyc7XG4gICAgLy8gY29uc3Qgd3JvbmdBbnN3ZXJTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9uZWdhdGl2ZV9iZWVwcy5tcDMnO1xuICAgIC8vIGNvbnN0IGZhaWx1cmVTb3VuZCA9ICdhc3NldHMvYXVkaW8vYW5zd2Vycy1zb3VuZC9mYWlsdXJlLm1wMyc7XG4gICAgLy8gaWYgKGlzQWN0aXZlQ2FyZChjdXJyZW50Q2FyZEZyb250KSAmJiAhcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgIC8vICAgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhKCdwbGF5JywgY3VycmVudENhcmQsIGN1cnJlbnRDYXJkU291bmQgPT09IGN1cnJlbnRTb3VuZCk7XG4gICAgLy8gICBpZiAoY3VycmVudENhcmRTb3VuZCA9PT0gY3VycmVudFNvdW5kKSB7XG4gICAgLy8gICAgIGN1cnJlbnRDYXJkRnJvbnQuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAvLyAgICAgYWRkU2NvcmVJY29uKGN1cnJlbnRDYXJkLCBjb3JyZWN0SWNvblNyYyk7XG4gICAgLy8gICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgY29ycmVjdEFuc3dlclNvdW5kKTtcbiAgICAvLyAgICAgdXBkYXRlU291bmRMaXN0KCk7XG4gICAgLy8gICAgIGNyZWF0ZVBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5KHBsYXlSZXBlYXRCdG4pO1xuICAgIC8vICAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG4gICAgLy8gICAgICAgc2hvd092ZXJsYXkoKTtcbiAgICAvLyAgICAgICBpZiAoaXNHYW1lT3ZlclN1Y2Nlc3MoKSkge1xuICAgIC8vICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBzdWNjZXNzU291bmQpO1xuICAgIC8vICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgLy8gICAgICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBmYWlsdXJlU291bmQpO1xuICAgIC8vICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgLy8gICAgICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGFkZFNjb3JlSWNvbihjdXJyZW50Q2FyZCwgd3JvbmdJY29uU3JjKTtcbiAgICAvLyAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCB3cm9uZ0Fuc3dlclNvdW5kKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cbn07XG5cbmNvbnN0IHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNhcmRzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVNYWluLCBjcmVhdGVNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHksXG4gIHNldE1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGlzR2FtZU92ZXJTdWNjZXNzLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgaGlkZU92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXknO1xuXG5jb25zdCBjcmVhdGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93Jyk7XG5cbiAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19faWNvbicpO1xuICBpY29uLnNyYyA9ICcnO1xuICBpY29uLmFsdCA9ICdpY29uJztcblxuICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19fdGV4dCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgY29uc3QgaDMgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfX3Njb3JlJyk7XG5cbiAgbW9kYWxXaW5kb3cuYXBwZW5kKGljb24pO1xuICBtb2RhbFdpbmRvdy5hcHBlbmQodGV4dCk7XG4gIG1vZGFsV2luZG93LmFwcGVuZChoMyk7XG5cbiAgcmV0dXJuIG1vZGFsV2luZG93O1xufTtcblxuY29uc3Qgc2hvd01vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIGNvbnN0IG1vZGFsV2luZG93SWNvbiA9IEdFVF9WQVIoJ21vZGFsV2luZG93SWNvbicpO1xuICBjb25zdCBtb2RhbFdpbmRvd1RleHQgPSBHRVRfVkFSKCdtb2RhbFdpbmRvd1RleHQnKTtcbiAgY29uc3QgbW9kYWxXaW5kb3doU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X19zY29yZScpO1xuICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgaWYgKGlzR2FtZU92ZXJTdWNjZXNzKCkpIHtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uV2luJyk7XG4gICAgbW9kYWxXaW5kb3dUZXh0LnRleHRDb250ZW50ID0gJ1lvdSBhcmUgd2luISc7XG4gICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gICAgbW9kYWxXaW5kb3doU2NvcmUudGV4dENvbnRlbnQgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzY29yZUxpbmVJY29ucyA9IHNjb3JlTGluZS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgICBjb25zdCBhbW91bnRPZk1pc3Rha2VzID0gQXJyYXkuZnJvbShzY29yZUxpbmVJY29ucykuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNyYy5pbmRleE9mKCdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZycpICE9PSAtMSkubGVuZ3RoO1xuICAgIG1vZGFsV2luZG93aFNjb3JlLnRleHRDb250ZW50ID0gYE1pc3Rha2VzOiAke2Ftb3VudE9mTWlzdGFrZXN9YDtcbiAgICBtb2RhbFdpbmRvd0ljb24uc3JjID0gR0VUX1ZBUignbW9kYWxXaW5kb3dJY29uTG9zZScpO1xuICAgIG1vZGFsV2luZG93VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgYXJlIGxvc2UhJztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IEdFVF9WQVIoJ21vZGFsV2luZG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhcicpO1xuICAgIGhpZGVPdmVybGF5KCk7XG4gICAgY3JlYXRlU3RhcnRQYWdlQ2FyZFNldChHRVRfVkFSKCdkYXRhJykpO1xuICB9LCAzMDAwKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1vZGFsV2luZG93LCBzaG93TW9kYWxXaW5kb3csIGhpZGVNb2RhbFdpbmRvdyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLFxuICBoaWRlU3RhdFRhYmxlLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IGNyZWF0ZU5hdk1lbnVJdGVtIGZyb20gJy4vbmF2TWVudUl0ZW0nO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnUgPSAoZGF0YVNldCkgPT4ge1xuICAvLyBjcmVhdGUgbmF2IHVsXG4gIGNvbnN0IG5hdk1lbnVVbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdk1lbnVVbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudScpO1xuICBjb25zdCBkYXRhID0gR0VUX1ZBUignZGF0YScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVNldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5hdk1lbnVVbC5hcHBlbmQoY3JlYXRlTmF2TWVudUl0ZW0oZGF0YVtpXS5zZWN0aW9uKSk7XG4gIH1cblxuICByZXR1cm4gbmF2TWVudVVsO1xufTtcblxuY29uc3Qgb3Blbk5hdk1lbnUgPSAoaGVhZGVyTmF2KSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGNvbnN0IG5hdk1lbnVMaW5rcyA9IEdFVF9WQVIoJ25hdk1lbnVMaW5rcycpO1xuICBuYXZNZW51TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsudGFiSW5kZXggPSAwO1xuICB9KTtcbiAgaGVhZGVyTmF2LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1vdXQnKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZS1pbicpO1xufTtcblxuY29uc3QgY2xvc2VOYXZNZW51ID0gKGhlYWRlck5hdikgPT4ge1xuICBjb25zdCBoZWFkZXJNZW51ID0gR0VUX1ZBUignaGVhZGVyTWVudScpO1xuICBjb25zdCBuYXZNZW51TGlua3MgPSBHRVRfVkFSKCduYXZNZW51TGlua3MnKTtcbiAgaGVhZGVyTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1pbicpO1xuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLW91dCcpO1xuICBuYXZNZW51TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsudGFiSW5kZXggPSAtMTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXROYXZNZW51QWN0aXZlU3RhdGUgPSAobGlua3MsIGNhdGVnb3J5KSA9PiB7XG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBjb25zdCBsaW5rU2VjdGlvbiA9IGxpbmsuZGF0YXNldC5zZWN0aW9uO1xuICAgIGlmIChsaW5rU2VjdGlvbiA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSA9IChsaW5rcykgPT4ge1xuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZSA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBuYXZNZW51TGlua3MgPSBHRVRfVkFSKCduYXZNZW51TGlua3MnKTtcbiAgcmVtb3ZlTmF2TWVudUFjdGl2ZVN0YXRlKG5hdk1lbnVMaW5rcyk7XG4gIHNldE5hdk1lbnVBY3RpdmVTdGF0ZShuYXZNZW51TGlua3MsIGNhdGVnb3J5KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gR0VUX1ZBUignY2F0ZWdvcnlOYW1lJyk7XG4gIGNvbnN0IGhhbWJ1cmdlckJ0biA9IEdFVF9WQVIoJ2hhbWJ1cmdlckJ0bicpO1xuICBjb25zdCB7IHNlY3Rpb24gfSA9IHRhcmdldC5kYXRhc2V0O1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBzZWN0aW9uO1xuICBoaWRlU3RhdFRhYmxlKCk7XG4gIGlmIChzZWN0aW9uID09PSAnSG9tZScpIHtcbiAgICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KEdFVF9WQVIoJ2RhdGEnKSk7XG4gICAgaGFtYnVyZ2VyQnRuLmNsaWNrKCk7XG4gIH0gZWxzZSBpZiAoc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24oR0VUX1ZBUignZGF0YScpLCBzZWN0aW9uKTtcbiAgICBoYW1idXJnZXJCdG4uY2xpY2soKTtcbiAgfVxuICB1cGRhdGVOYXZNZXVuTGlua3NTdGF0ZShjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQpO1xufTtcblxuY29uc3Qgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBHRVRfVkFSKCdoZWFkZXJNZW51Jyk7XG4gIGhlYWRlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVIYW1idXJnZXJNZW51RnVuY3Rpb25hbGl0eSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVOYXZNZW51LCBvcGVuTmF2TWVudSwgY2xvc2VOYXZNZW51LCBjcmVhdGVIYW1idXJnZXJNZW51RnVuY3Rpb25hbGl0eSxcbiAgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIsIHVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlLFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBzaG93T3ZlcmxheSwgaGlkZU92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IHsgb3Blbk5hdk1lbnUsIGNsb3NlTmF2TWVudSB9IGZyb20gJy4vbmF2TWVudSc7XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnVCdG4gPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBuYXYgYnV0dG9uXG4gIGNvbnN0IG5hdk1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5hdk1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWhhbWJ1cmdlcicpO1xuICBuYXZNZW51QnRuLmhyZWYgPSAnIyc7XG5cbiAgY29uc3Qgc3BhbjEgPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNwYW4yID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzcGFuMyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBuYXZNZW51QnRuLmFwcGVuZChzcGFuMSk7XG4gIG5hdk1lbnVCdG4uYXBwZW5kKHNwYW4yKTtcbiAgbmF2TWVudUJ0bi5hcHBlbmQoc3BhbjMpO1xuXG4gIHJldHVybiBuYXZNZW51QnRuO1xufTtcblxuY29uc3Qgc2V0TmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IGhhbWJ1cmdlckJ0biA9IEdFVF9WQVIoJ2hhbWJ1cmdlckJ0bicpO1xuICBjb25zdCBoZWFkZXJOYXYgPSBHRVRfVkFSKCdoZWFkZXJOYXYnKTtcbiAgaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChoZWFkZXJOYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgIGNsb3NlTmF2TWVudShoZWFkZXJOYXYpO1xuICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3Blbk5hdk1lbnUoaGVhZGVyTmF2KTtcbiAgICAgIHNob3dPdmVybGF5KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdk1lbnVCdG4sIHNldE5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNhcGl0YWxpemVGaXJzdFdvcmQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVOYXZNZW51SXRlbSA9IChsaW5rTmFtZSkgPT4ge1xuICAvLyBjcmVhdGUgbGlcbiAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbScpO1xuXG4gIC8vIGNyZWF0ZSBtZW51IGxpbmtcbiAgY29uc3QgbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudV9faXRlbS1saW5rJyk7XG4gIGxpbmsuaHJlZiA9IGAjJHtsaW5rTmFtZX1gO1xuICBsaW5rLmRhdGFzZXQuc2VjdGlvbiA9IGNhcGl0YWxpemVGaXJzdFdvcmQobGlua05hbWUpO1xuICBsaW5rLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0V29yZChsaW5rTmFtZSk7XG4gIGxpbmsudGFiSW5kZXggPSAtMTtcblxuICBsaS5hcHBlbmQobGluayk7XG5cbiAgcmV0dXJuIGxpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2TWVudUl0ZW07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBjbG9zZU5hdk1lbnUgfSBmcm9tICcuL25hdk1lbnUnO1xuXG5jb25zdCBjcmVhdGVPdmVybGF5ID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgb3ZlcmxheSBlbGVtZW50XG4gIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XG59O1xuXG5jb25zdCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IEdFVF9WQVIoJ292ZXJsYXknKTtcbiAgY29uc3QgYm9keSA9IEdFVF9WQVIoJ2JvZHknKTtcbiAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xufTtcblxuY29uc3Qgc2hvd092ZXJsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBHRVRfVkFSKCdvdmVybGF5Jyk7XG4gIGNvbnN0IGJvZHkgPSBHRVRfVkFSKCdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm9zY3JvbGwnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbn07XG5cbmNvbnN0IHNldE92ZXJsYXlGdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gR0VUX1ZBUignb3ZlcmxheScpO1xuICBjb25zdCBoZWFkZXJOYXYgPSBHRVRfVkFSKCdoZWFkZXJOYXYnKTtcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaGVhZGVyTmF2LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICBoaWRlT3ZlcmxheSgpO1xuICAgICAgY2xvc2VOYXZNZW51KGhlYWRlck5hdik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU92ZXJsYXksIHNob3dPdmVybGF5LCBoaWRlT3ZlcmxheSwgc2V0T3ZlcmxheUZ1bmN0aW9uYWxpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBwbGF5U291bmQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVBsYXlSZXBlYXRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGxheS1idG4nKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ3BsYXknO1xuXG4gIHJldHVybiBidXR0b247XG59O1xuXG5jb25zdCBjcmVhdGVQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgY29uc3Qgc291bmRzTGlzdCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKTtcbiAgY29uc3QgY3VycmVudFNvdW5kID0gc291bmRzTGlzdC5hdCgtMSk7XG4gIGlmIChzb3VuZHNMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBwbGF5U291bmQocGxheVJlcGVhdEJ0biwgY3VycmVudFNvdW5kKTtcbiAgaWYgKCFwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0JykpIHtcbiAgICBwbGF5UmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlcGVhdCcpO1xuICB9XG59O1xuXG5jb25zdCByZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgaWYgKHBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXBlYXQnKSkge1xuICAgIHBsYXlSZXBlYXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgncmVwZWF0Jyk7XG4gIH1cbn07XG5cbmNvbnN0IHNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICBwbGF5UmVwZWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUGxheVJlcGVhdEJ0biwgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHksIHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlLFxuICBjcmVhdGVQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5jb25zdCBjcmVhdGVTY29yZUxpbmVJY29uID0gKHNyYykgPT4ge1xuICBjb25zdCBzY29yZUljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2NvcmVJY29uLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWxpbmVfX2ljb24nKTtcbiAgc2NvcmVJY29uLnNyYyA9IHNyYztcbiAgc2NvcmVJY29uLmFsdCA9ICdpY29uJztcblxuICByZXR1cm4gc2NvcmVJY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2NvcmVMaW5lSWNvbjtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgc2V0R2xvYmFsVmFsdWVzLFxuICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5LCBzaG93U3RhdFRhYmxlLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiwgU0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbi8vIGNyZWF0ZSBoZWFkZXIgc3RhdGlzdGljcyBidXR0b25cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHN0YXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1idXR0b24nKTtcbiAgc3RhdEJ0bi50ZXh0Q29udGVudCA9ICdTdGF0aXN0aWNzJztcblxuICByZXR1cm4gc3RhdEJ0bjtcbn07XG5cbmNvbnN0IHNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBzdGF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MtYnV0dG9uJyk7XG4gIHN0YXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2VDb250YWluZXIgPSBzdGF0aXN0aWNzUGFnZS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNEYXRhID0gR0VUX1ZBUignc3RhdGlzdGljRGF0YScpLnNsaWNlKCk7XG4gICAgc3RhdGlzdGljc1RhYmxlLnJlbW92ZSgpO1xuICAgIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChjcmVhdGVTdGF0aXN0aWNzVGFibGUoc3RhdGlzdGljRGF0YSkpO1xuICAgIGNvbnN0IHJlcGVhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXQtYnRuJyk7XG4gICAgc3RhdGlzdGljRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBlbGVtMSA9IGFbJ0FjY3VyYWN5ICUnXTtcbiAgICAgIGNvbnN0IGVsZW0yID0gYlsnQWNjdXJhY3kgJSddO1xuXG4gICAgICByZXR1cm4gZWxlbTEgLSBlbGVtMjtcbiAgICB9KTtcbiAgICBjb25zdCByZXBlYXRlZERhdGEgPSBzdGF0aXN0aWNEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbVsnQWNjdXJhY3kgJSddICE9PSAnbi9lJyAmJiBpdGVtWydBY2N1cmFjeSAlJ10gIT09IDEwMClcbiAgICAgIC5zbGljZSgwLCA4KVxuICAgICAgLm1hcCgoZWxlbSkgPT4gZWxlbS5UcmFuc2xhdGlvbik7XG5cbiAgICBjb25zdCByZXBlYXRlZERhdGFTZXQgPSBHRVRfVkFSKCdkYXRhJylcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VjdGlvbldvcmRzKVxuICAgICAgLm1hcCgoZWxlbSkgPT4gZWxlbS5zZWN0aW9uV29yZHMpXG4gICAgICAuZmxhdCgpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiByZXBlYXRlZERhdGEuaW5jbHVkZXMoaXRlbS50cmFuc2xhdGlvbikpO1xuICAgIFNFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcsIHJlcGVhdGVkRGF0YVNldCk7XG4gICAgaWYgKHJlcGVhdGVkRGF0YVNldC5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBlYXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5KCk7XG5cbiAgICBzaG93U3RhdFRhYmxlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3RhdGlzdGljc0J0biwgc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgaGlkZVN0YXRUYWJsZSwgY3JlYXRlRGlmZldvcmRzU2VjdGlvbixcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSwgc2V0R2xvYmFsVmFsdWVzLFxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiB9IGZyb20gJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgcGFnZVxuICBjb25zdCBzdGF0aXN0aWNzUGFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuYWRkKCdzdGF0aXN0aWNzLXBhZ2UnKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGNvbnRhaW5lclxuICBjb25zdCBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIGJ1dHRvbnMgY29udGFpbmVyXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlQnV0dG9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scycpO1xuXG4gIC8vIGNyZWF0ZSByZXBlYXQgZGlmZmljdWx0IHdvcmRzIGJ1dHRvblxuICBjb25zdCByZXBlYXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVwZWF0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVwZWF0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXRpc3RpY3MtcGFnZV9fY29udHJvbHMtYnRuJyk7XG4gIHJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXBlYXQtYnRuJyk7XG4gIHJlcGVhdEJ0bi50ZXh0Q29udGVudCA9ICdSZXBlYXQgZGlmZmljdWx0IHdvcmRzJztcblxuICAvLyBjcmVhdGUgcmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhdGlzdGljcy1wYWdlX19jb250cm9scy1idG4nKTtcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXQtYnRuJyk7XG4gIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHN0YXRpc3RpYyc7XG5cbiAgc3RhdGlzdGljc1BhZ2VCdXR0b25zLmFwcGVuZChyZXBlYXRCdG4pO1xuICBzdGF0aXN0aWNzUGFnZUJ1dHRvbnMuYXBwZW5kKHJlc2V0QnRuKTtcblxuICAvLyBjcmVhdGUgc3RhdGlzdGljcyBwYWdlIHRhYmxlXG4gIGNvbnN0IHN0YXRpc3RpY3NQYWdlVGFibGUgPSBjcmVhdGVTdGF0aXN0aWNzVGFibGUoc3RhdGlzdGljc0RhdGEpO1xuXG4gIHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyLmFwcGVuZChzdGF0aXN0aWNzUGFnZUJ1dHRvbnMpO1xuICBzdGF0aXN0aWNzUGFnZUNvbnRhaW5lci5hcHBlbmQoc3RhdGlzdGljc1BhZ2VUYWJsZSk7XG5cbiAgc3RhdGlzdGljc1BhZ2UuYXBwZW5kKHN0YXRpc3RpY3NQYWdlQ29udGFpbmVyKTtcbiAgcmV0dXJuIHN0YXRpc3RpY3NQYWdlO1xufTtcblxuY29uc3QgcmVzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXRTdGF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuICByZXNldFN0YXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgc2V0R2xvYmFsVmFsdWVzKCk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1BhZ2VDb250YWluZXIgPSBzdGF0aXN0aWNzUGFnZS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdGlzdGljc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGUnKTtcbiAgICBjb25zdCBzdGF0aXN0aWNzRGF0YSA9IEdFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnKTtcbiAgICBzdGF0aXN0aWNzVGFibGUucmVtb3ZlKCk7XG4gICAgc3RhdGlzdGljc1BhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN0YXRpc3RpY3NUYWJsZShzdGF0aXN0aWNzRGF0YSkpO1xuICAgIHNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0LWJ0bicpO1xuICAgIHJlcGVhdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufTtcblxuY29uc3QgcmVwZWF0RGlmZldvcmRzRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgcmVwZWF0RGlmZldvcmRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdC1idG4nKTtcbiAgcmVwZWF0RGlmZldvcmRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNldCA9IEdFVF9WQVIoJ3JlcGVhdGVkRGF0YVNldCcpO1xuICAgIGNyZWF0ZURpZmZXb3Jkc1NlY3Rpb24ocmVwZWF0ZWREYXRhU2V0LCAnRGlmZmljdWx0IHdvcmRzJyk7XG4gICAgaGlkZVN0YXRUYWJsZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0YXRpc3RpY3NQYWdlLCByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1cGRhdGVNb2RlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfSBmcm9tICcuLi91dGlscy92YXJpYWJsZXMnO1xuXG5jb25zdCBjcmVhdGVUb2dnbGUgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZSB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9IGZhbHNlO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSB0cmFpblxuICBjb25zdCB0b2dnbGVNb2RlVHJhaW4gPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVUcmFpbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX190cmFpbicpO1xuICB0b2dnbGVNb2RlVHJhaW4udGV4dENvbnRlbnQgPSAnVHJhaW4nO1xuXG4gIC8vIGNyZWF0ZSB0b2dnbGUgbW9kZSBwbGF5XG4gIGNvbnN0IHRvZ2dsZU1vZGVQbGF5ID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2dnbGVNb2RlUGxheS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnV0dG9uX19tb2RlJyk7XG4gIHRvZ2dsZU1vZGVQbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b25fX3BsYXknKTtcbiAgdG9nZ2xlTW9kZVBsYXkudGV4dENvbnRlbnQgPSAnUGxheSc7XG5cbiAgdG9nZ2xlQnRuLmFwcGVuZCh0b2dnbGVNb2RlVHJhaW4pO1xuICB0b2dnbGVCdG4uYXBwZW5kKHRvZ2dsZU1vZGVQbGF5KTtcblxuICByZXR1cm4gdG9nZ2xlQnRuO1xufTtcblxuY29uc3QgY3JlYXRlVG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQnRuID0gR0VUX1ZBUigndG9nZ2xlQnRuJyk7XG4gIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCA9ICh0b2dnbGVCdG4uYXJpYVByZXNzZWQgPT09ICdmYWxzZScpID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgU0VUX1ZBUignaXNQbGF5TW9kZScsIHRvZ2dsZUJ0bi5hcmlhUHJlc3NlZCk7XG4gIHVwZGF0ZU1vZGUoKTtcbn07XG5cbmNvbnN0IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUJ0biA9IEdFVF9WQVIoJ3RvZ2dsZUJ0bicpO1xuICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2dnbGVCdG5GdW5jdGlvbmFsaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZ2dsZSwgc2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSB9O1xuIiwiaW1wb3J0IHsgc2V0TmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnVCdG4nO1xuaW1wb3J0IHsgc2V0T3ZlcmxheUZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL292ZXJsYXknO1xuaW1wb3J0IHsgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdk1lbnUnO1xuaW1wb3J0IHsgc2V0TG9nb0V2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IHsgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCB7IHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvZ2dsZUJ0bic7XG5pbXBvcnQgeyBzZXRQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxheVJlcGVhdEJ0bic7XG5pbXBvcnQgeyBzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc0J0bic7XG5pbXBvcnQgeyByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5LCByZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZSc7XG5pbXBvcnQgeyBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgc2V0TmF2TWVudUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0T3ZlcmxheUZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0SGFtYnVyZ2VyTWVudUV2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TG9nb0V2ZW50TGlzdGVuZXIoKTtcbiAgc2V0TWFpblNlY3Rpb25GdW5jdGlvbmFsaXR5KCk7XG4gIHNldFRvZ2dsZUJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0UGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkoKTtcbiAgc2V0U3RhdGlzdGljc1RhYmxlRnVuY3Rpb25hbGl0eSgpO1xuICBzZXRTdGF0aXN0aWNzQnRuRnVuY3Rpb25hbGl0eSgpO1xuICByZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5KCk7XG4gIHJlc2V0U3RhdGlzdGljc0J0bkZ1bmN0aW9uYWxpdHkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldEV2ZW50TGlzdGVuZXJzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBTRVRfVkFSLCBHRVRfVkFSIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IGNyZWF0ZUNhcmRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZEl0ZW0nO1xuaW1wb3J0IHsgcmVzZXRQbGF5UmVwZWF0QnRuU3RhdGUsIGNyZWF0ZVBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5UmVwZWF0QnRuJztcbmltcG9ydCBjcmVhdGVTY29yZUxpbmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvc2NvcmVMaW5lSWNvbic7XG5pbXBvcnQgeyBjcmVhdGVNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IHsgc2hvd092ZXJsYXkgfSBmcm9tICcuLi9jb21wb25lbnRzL292ZXJsYXknO1xuaW1wb3J0IHsgc2hvd01vZGFsV2luZG93LCBoaWRlTW9kYWxXaW5kb3cgfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsV2luZG93JztcblxuLy8gY3JlYXRlIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBpc01haW5NZW51ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydC1wYWdlJyk7XG5jb25zdCBpc0NhcmQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG5jb25zdCBpc0FjdGl2ZUNhcmQgPSAoY2FyZCkgPT4gIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpO1xuY29uc3QgaXNUcmFpbk1vZGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0Lm1vZGUgPT09ICd0cmFpbic7XG5jb25zdCBpc1BsYXlNb2RlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC5tb2RlID09PSAncGxheSc7XG5jb25zdCBpc0dhbWVTdGFydGVkID0gKCkgPT4gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpLmNsYXNzTGlzdC5jb250YWlucygncmVwZWF0Jyk7XG5jb25zdCBpc0dhbWVPdmVyID0gKCkgPT4gR0VUX1ZBUignc291bmRzTGlzdCcpLmxlbmd0aCA9PT0gMDtcbmNvbnN0IGlzR2FtZU92ZXJTdWNjZXNzID0gKCkgPT4ge1xuICBjb25zdCBpY29uc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZS1saW5lX19pY29uJykubGVuZ3RoO1xuICBjb25zdCBjYXJkc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKS5sZW5ndGg7XG4gIHJldHVybiBpY29uc0Ftb3VudCA9PT0gY2FyZHNBbW91bnQ7XG59O1xuY29uc3QgZ2V0Q3VycmVudE1vZGUgPSAoZWxlbWVudCwgdGFyZ2V0KSA9PiB7XG4gIGlmICghaXNNYWluTWVudShlbGVtZW50KSAmJiBpc1RyYWluTW9kZShlbGVtZW50KSAmJiBpc0NhcmQodGFyZ2V0KSkge1xuICAgIHJldHVybiAndHJhaW5Nb2RlJztcbiAgfVxuICBpZiAoIWlzTWFpbk1lbnUoZWxlbWVudCkgJiYgaXNQbGF5TW9kZShlbGVtZW50KSAmJiBpc0NhcmQodGFyZ2V0KVxuICAgICYmIGlzR2FtZVN0YXJ0ZWQoKSkge1xuICAgIHJldHVybiAncGxheU1vZGUnO1xuICB9XG4gIHJldHVybiAnbWFpbk1vZGUnO1xufTtcblxuY29uc3QgY2xlYXJDYXJkc0xpc3RDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5jb25zdCBzaHVmZmxlQXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgY29uc3Qgc2h1ZmZsZWQgPSBbLi4uYXJyYXldO1xuICBmb3IgKGxldCBpID0gc2h1ZmZsZWQubGVuZ3RoIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbc2h1ZmZsZWRbaV0sIHNodWZmbGVkW2pdXSA9IFtzaHVmZmxlZFtqXSwgc2h1ZmZsZWRbaV1dO1xuICB9XG4gIHJldHVybiBzaHVmZmxlZDtcbn07XG5cbmNvbnN0IHVwZGF0ZVNvdW5kTGlzdCA9ICgpID0+IHtcbiAgY29uc3Qgc291bmRzTGlzdCA9IEdFVF9WQVIoJ3NvdW5kc0xpc3QnKS5zbGljZSgpO1xuICBzb3VuZHNMaXN0LnBvcCgpO1xuICBTRVRfVkFSKCdzb3VuZHNMaXN0Jywgc291bmRzTGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdTb3VuZHNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgY29uc3Qgc291bmRzTGlzdCA9IFtdO1xuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgeyBzb3VuZCB9ID0gY2FyZC5kYXRhc2V0O1xuICAgIHNvdW5kc0xpc3QucHVzaChzb3VuZCk7XG4gIH0pO1xuXG4gIHJldHVybiBzb3VuZHNMaXN0O1xufTtcblxuY29uc3QgY2FsY3VsYXRlZXJjZW50Q29ycmVjdEFuc3dlcnMgPSAob2JqKSA9PiBNYXRoLnJvdW5kKChcbiAgb2JqLkNvcnJlY3QgLyAob2JqLkNvcnJlY3QgKyBvYmouSW5jb3JyZWN0KSkgKiAxMDApO1xuXG5jb25zdCBjcmVhdGVTdGFydGluZ1N0YXRpc3RpY0RhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uc2VjdGlvbiAhPT0gJ2hvbWUnKSB7XG4gICAgICBpdGVtLnNlY3Rpb25Xb3Jkcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBDYXRlZ29yeTogaXRlbS5zZWN0aW9uVGl0bGUsXG4gICAgICAgICAgV29yZDogZWxlbS53b3JkLFxuICAgICAgICAgIFRyYW5zbGF0aW9uOiBlbGVtLnRyYW5zbGF0aW9uLFxuICAgICAgICAgIFRyYWluZWQ6IDAsXG4gICAgICAgICAgQ29ycmVjdDogMCxcbiAgICAgICAgICBJbmNvcnJlY3Q6IDAsXG4gICAgICAgICAgJ0FjY3VyYWN5ICUnOiAnbi9lJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0LnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzRGF0YSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGlzdGljRGF0YScpO1xuICBpZiAoIXNhdmVkRGF0YSkge1xuICAgIGNvbnN0IHN0YXJ0aW5nRGF0YSA9IGNyZWF0ZVN0YXJ0aW5nU3RhdGlzdGljRGF0YShkYXRhKTtcbiAgICBjb25zdCBzdGFydGluZ0RhdGFUb0pzb24gPSBKU09OLnN0cmluZ2lmeShzdGFydGluZ0RhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0aXN0aWNEYXRhJywgc3RhcnRpbmdEYXRhVG9Kc29uKTtcbiAgICByZXN1bHQucHVzaCguLi5zdGFydGluZ0RhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICAgIHJlc3VsdC5wdXNoKC4uLmN1cnJlbnREYXRhKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RXb3JkID0gKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG5jb25zdCBzZXRHbG9iYWxWYWx1ZXMgPSAoKSA9PiB7XG4gIFNFVF9WQVIoJ21haW5TZWN0aW9uJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSk7XG4gIFNFVF9WQVIoJ2NhdGVnb3J5TmFtZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1uYW1lJykpO1xuICBTRVRfVkFSKCdjYXJkc0xpc3QnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbGlzdCcpKTtcbiAgU0VUX1ZBUignaGFtYnVyZ2VyQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1oYW1idXJnZXInKSk7XG4gIFNFVF9WQVIoJ2hlYWRlck5hdicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2JykpO1xuICBTRVRfVkFSKCdoZWFkZXJNZW51JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1tZW51JykpO1xuICBTRVRfVkFSKCduYXZNZW51TGlua3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1lbnVfX2l0ZW0tbGluaycpKTtcbiAgU0VUX1ZBUignb3ZlcmxheScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xuICBTRVRfVkFSKCdib2R5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKTtcbiAgU0VUX1ZBUignaGVhZGVyTG9nbycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nb19fbGluaycpKTtcbiAgU0VUX1ZBUigndG9nZ2xlQnRuJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1idXR0b24nKSk7XG4gIFNFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idG4nKSk7XG4gIFNFVF9WQVIoJ3Njb3JlTGluZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1saW5lJykpO1xuICBTRVRfVkFSKCdtb2RhbFdpbmRvdycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93VGV4dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX3RleHQnKSk7XG4gIFNFVF9WQVIoJ21vZGFsV2luZG93SWNvbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2ljb24nKSk7XG4gIFNFVF9WQVIoJ3N0YXRpc3RpY0RhdGEnLCBjcmVhdGVTdGF0aXN0aWNzRGF0YShHRVRfVkFSKCdkYXRhJykpKTtcbiAgU0VUX1ZBUignaXNQbGF5TW9kZScsIEdFVF9WQVIoJ3RvZ2dsZUJ0bicpLmFyaWFQcmVzc2VkKTtcbn07XG5cbmNvbnN0IHJlc2V0Q2FyZHNTdGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1mcm9udCcpO1xuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJykpO1xufTtcblxuY29uc3Qgc2hvd1N0YXRUYWJsZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gR0VUX1ZBUignbWFpblNlY3Rpb24nKTtcbiAgY29uc3QgbWFpblNlY3Rpb25Db250YWluZXIgPSBtYWluU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIG1haW5TZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhcicpO1xuICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS11cCcpO1xuICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcbiAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmFkZCgnc2xpZGUtZG93bicpO1xufTtcblxuY29uc3QgaGlkZVN0YXRUYWJsZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGlzdGljc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcy1wYWdlJyk7XG4gIGlmIChzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLWRvd24nKSkge1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gR0VUX1ZBUignbWFpblNlY3Rpb24nKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IG1haW5TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBzdGF0aXN0aWNzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1kb3duJyk7XG4gICAgc3RhdGlzdGljc1BhZ2UuY2xhc3NMaXN0LmFkZCgnc2xpZGUtdXAnKTtcbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhcHBlYXInKTtcbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRDYXJkc1NvdW5kc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHNvdW5kc0xpc3QgPSBjcmVhdGVOZXdTb3VuZHNMaXN0KCk7XG4gIFNFVF9WQVIoJ3NvdW5kc0xpc3QnLCBzaHVmZmxlQXJyYXkoc291bmRzTGlzdCkpO1xufTtcblxuY29uc3QgcmVzZXRTY29yZUxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlTGluZSA9IEdFVF9WQVIoJ3Njb3JlTGluZScpO1xuICBzY29yZUxpbmUuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5jb25zdCB1cGRhdGVNb2RlID0gKCkgPT4ge1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgcGxheU1vZGUgPSBHRVRfVkFSKCdpc1BsYXlNb2RlJyk7XG4gIHJlc2V0UGxheVJlcGVhdEJ0blN0YXRlKCk7XG4gIHJlc2V0Q2FyZHNTdGF0ZSgpO1xuICByZXNldENhcmRzU291bmRzTGlzdCgpO1xuICByZXNldFNjb3JlTGluZSgpO1xuICBpZiAocGxheU1vZGUgPT09ICd0cnVlJykge1xuICAgIGNhcmRzTGlzdC5kYXRhc2V0Lm1vZGUgPSAncGxheSc7XG4gIH0gZWxzZSB7XG4gICAgY2FyZHNMaXN0LmRhdGFzZXQubW9kZSA9ICd0cmFpbic7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBzdGF0aXN0aWNzVGFibGVIZWFkID0gY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgc3RhdGlzdGljc1RhYmxlSGVhZC5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19oZWFkJyk7XG4gIGNvbnN0IGhlYWRlclJvdyA9IGNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19oZWFkLXJvdycpO1xuICBoZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGUtcm93Jyk7XG4gIGNvbnN0IGhlYWRlclJvd0RhdGEgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcblxuICBoZWFkZXJSb3dEYXRhLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IGhlYWRlclJvd1RoID0gY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBoZWFkZXJSb3dUaC5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19oZWFkLXJvd19fY2VsbCcpO1xuICAgIGhlYWRlclJvd1RoLmNsYXNzTGlzdC5hZGQoJ3RhYmxlLWNlbGwnKTtcbiAgICBoZWFkZXJSb3dUaC5kYXRhc2V0LmNvbHVtbiA9IGtleTtcbiAgICBoZWFkZXJSb3dUaC5kYXRhc2V0LnNvcnQgPSAoa2V5ID09PSAnQ2F0ZWdvcnknKSB8fCAoa2V5ID09PSAnV29yZCcpIHx8IChrZXkgPT09ICdUcmFuc2xhdGlvbicpID8gJ2FscGgnIDogJ251bSc7XG4gICAgaGVhZGVyUm93VGgudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgaGVhZGVyUm93LmFwcGVuZChoZWFkZXJSb3dUaCk7XG4gIH0pO1xuXG4gIHN0YXRpc3RpY3NUYWJsZUhlYWQuYXBwZW5kKGhlYWRlclJvdyk7XG5cbiAgcmV0dXJuIHN0YXRpc3RpY3NUYWJsZUhlYWQ7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5ID0gKGRhdGEpID0+IHtcbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGUgYm9keVxuICBjb25zdCBzdGF0aXN0aWNzVGFibGVCb2R5ID0gY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgc3RhdGlzdGljc1RhYmxlQm9keS5jbGFzc0xpc3QuYWRkKCdzdGF0LXRhYmxlX19ib2R5Jyk7XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgdEJvZHlSb3cgPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHRCb2R5Um93LmNsYXNzTGlzdC5hZGQoJ3N0YXQtdGFibGVfX2JvZHktcm93Jyk7XG4gICAgdEJvZHlSb3cuY2xhc3NMaXN0LmFkZCgndGFibGUtcm93Jyk7XG4gICAgY29uc3QgdEJvZHlSb3dEYXRhID0gT2JqZWN0LnZhbHVlcyhpdGVtKTtcbiAgICBjb25zdCByb3dDYXRlZ29yeSA9IE9iamVjdC52YWx1ZXMoaXRlbSlbMF07XG4gICAgY29uc3Qgcm93V29yZCA9IE9iamVjdC52YWx1ZXMoaXRlbSlbMV07XG4gICAgY29uc3QgaGVhZGVyUm93RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xuICAgIHRCb2R5Um93LmRhdGFzZXQucm93ID0gcm93V29yZDtcblxuICAgIHRCb2R5Um93RGF0YS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRCb2R5Um93Q2VsbCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0Qm9keVJvd0NlbGwuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZV9fYm9keS1yb3dfX2NlbGwnKTtcbiAgICAgIHRCb2R5Um93Q2VsbC5jbGFzc0xpc3QuYWRkKCd0YWJsZS1jZWxsJyk7XG4gICAgICB0Qm9keVJvd0NlbGwuZGF0YXNldC5jYXRlZ29yeSA9IHJvd0NhdGVnb3J5O1xuICAgICAgdEJvZHlSb3dDZWxsLmRhdGFzZXQuY2VsbCA9IGhlYWRlclJvd0RhdGFbaW5kZXhdO1xuICAgICAgdEJvZHlSb3dDZWxsLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICB0Qm9keVJvdy5hcHBlbmQodEJvZHlSb3dDZWxsKTtcbiAgICB9KTtcblxuICAgIHN0YXRpc3RpY3NUYWJsZUJvZHkuYXBwZW5kKHRCb2R5Um93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRpc3RpY3NUYWJsZUJvZHk7XG59O1xuXG5jb25zdCBjcmVhdGVTdGF0aXN0aWNzVGFibGUgPSAoZGF0YSkgPT4ge1xuICAvLyBjcmVhdGUgc3RhdGlzdGljcyB0YWJsZVxuICBjb25zdCBzdGF0aXN0aWNzVGFibGUgPSBjcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBzdGF0aXN0aWNzVGFibGUuY2xhc3NMaXN0LmFkZCgnc3RhdC10YWJsZScpO1xuXG4gIC8vIGNyZWF0ZSBzdGF0aXN0aWNzIHRhYmxlIGhlYWRcbiAgY29uc3Qgc3RhdGlzdGljc1RhYmxlSGVhZCA9IGNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQoZGF0YSk7XG5cbiAgLy8gY3JlYXRlIHN0YXRpc3RpY3MgdGFibGUgYm9keVxuICBjb25zdCBzdGF0aXN0aWNzVGFibGVCb2R5ID0gY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keShkYXRhKTtcblxuICBzdGF0aXN0aWNzVGFibGUuYXBwZW5kKHN0YXRpc3RpY3NUYWJsZUhlYWQpO1xuICBzdGF0aXN0aWNzVGFibGUuYXBwZW5kKHN0YXRpc3RpY3NUYWJsZUJvZHkpO1xuXG4gIHJldHVybiBzdGF0aXN0aWNzVGFibGU7XG59O1xuXG5jb25zdCBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBzdGF0VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdC10YWJsZScpO1xuICBjb25zdCBzdGF0VGFibGVIZWFkZXIgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvcignLnN0YXQtdGFibGVfX2hlYWQnKTtcbiAgY29uc3Qgc3RhdFRhYmxlSGVhZGVyQ2VsbHMgPSBzdGF0VGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnN0YXQtdGFibGVfX2hlYWQtcm93X19jZWxsJyk7XG4gIGNvbnN0IHN0YXRpc3RpY3NEYXRhID0gR0VUX1ZBUignc3RhdGlzdGljRGF0YScpO1xuXG4gIHN0YXRUYWJsZUhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBjb25zdCBzdGF0VGFibGVCb2R5ID0gc3RhdFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0LXRhYmxlX19ib2R5Jyk7XG4gICAgY29uc3Qgc29ydFR5cGUgPSB0YXJnZXQuZGF0YXNldC5zb3J0O1xuICAgIGNvbnN0IHNvcnRDYXRlZ29yeSA9IHRhcmdldC5kYXRhc2V0LmNvbHVtbjtcbiAgICBjb25zdCBzb3J0Q2F0ZWdvcnlDZWxscyA9IHN0YXRUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jZWxsPScke3NvcnRDYXRlZ29yeX0nXWApO1xuICAgIGNvbnN0IHNvcnRDYXRlZ29yeUNlbGxzVmFsdWVzID0gQXJyYXkuZnJvbShzb3J0Q2F0ZWdvcnlDZWxscykubWFwKChjZWxsKSA9PiBjZWxsLnRleHRDb250ZW50KTtcbiAgICBjb25zdCBhcmVFbXB0eUNlbGxzID0gc29ydENhdGVnb3J5Q2VsbHNWYWx1ZXMuZXZlcnkoKGl0ZW0pID0+IGl0ZW0gPT09ICcwJyB8fCBpdGVtID09PSAnbi9lJyk7XG4gICAgaWYgKGFyZUVtcHR5Q2VsbHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2NlbmQnKSkge1xuICAgICAgc3RhdFRhYmxlSGVhZGVyQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhc2NlbmQnKSk7XG4gICAgICBzdGF0aXN0aWNzRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bTEgPSBhW1tzb3J0Q2F0ZWdvcnldXSA9PT0gJ24vZScgPyAtMSA6IGFbc29ydENhdGVnb3J5XTtcbiAgICAgICAgY29uc3QgbnVtMiA9IGJbW3NvcnRDYXRlZ29yeV1dID09PSAnbi9lJyA/IC0xIDogYltzb3J0Q2F0ZWdvcnldO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYXNjZW5kJyk7XG4gICAgICAgIGlmIChzb3J0VHlwZSA9PT0gJ2FscGgnKSB7XG4gICAgICAgICAgcmV0dXJuIG51bTEubG9jYWxlQ29tcGFyZShudW0yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtMiAtIG51bTE7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGlzdGljc0RhdGEucmV2ZXJzZSgpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZCcpO1xuICAgIH1cbiAgICBzdGF0VGFibGVCb2R5LnJlbW92ZSgpO1xuICAgIHN0YXRUYWJsZS5hcHBlbmQoY3JlYXRlU3RhdGlzdGljc1RhYmxlQm9keShzdGF0aXN0aWNzRGF0YSkpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSA9IChtb2RlLCBjYXJkLCByZXN1bHQpID0+IHtcbiAgY29uc3Qgc2F2ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRpc3RpY0RhdGEnKTtcbiAgY29uc3QgY3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNhdmVkRGF0YSk7XG4gIGNvbnN0IGNhcmRCYWNrVGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJhY2tfX3RpdGxlJykudGV4dENvbnRlbnQ7XG4gIGxldCBjdXJyZW50SXRlbSA9IGN1cnJlbnREYXRhXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0uVHJhbnNsYXRpb24gPT09IGNhcmRCYWNrVGl0bGUpKVswXTtcbiAgaWYgKG1vZGUgPT09ICd0cmFpbicpIHtcbiAgICBjdXJyZW50SXRlbS5UcmFpbmVkICs9IDE7XG4gIH1cbiAgaWYgKHJlc3VsdCkge1xuICAgIGN1cnJlbnRJdGVtLkNvcnJlY3QgKz0gMTtcbiAgICBjdXJyZW50SXRlbVsnQWNjdXJhY3kgJSddID0gY2FsY3VsYXRlZXJjZW50Q29ycmVjdEFuc3dlcnMoY3VycmVudEl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNhcmRMaXN0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxpc3RfX2l0ZW0nKSk7XG4gICAgY29uc3QgY3VycmVudFNvdW5kID0gR0VUX1ZBUignc291bmRzTGlzdCcpLmF0KC0xKTtcbiAgICBjb25zdCBjdXJyZW50Q2FyZCA9IGNhcmRMaXN0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmRhdGFzZXQuc291bmQgPT09IGN1cnJlbnRTb3VuZClbMF07XG4gICAgW2N1cnJlbnRJdGVtXSA9IGN1cnJlbnREYXRhXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiAoXG4gICAgICAgIGl0ZW0uVHJhbnNsYXRpb24gPT09IGN1cnJlbnRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJhY2tfX3RpdGxlJylcbiAgICAgICAgICAudGV4dENvbnRlbnQpKTtcbiAgICBjdXJyZW50SXRlbS5JbmNvcnJlY3QgKz0gMTtcbiAgICBjdXJyZW50SXRlbVsnQWNjdXJhY3kgJSddID0gY2FsY3VsYXRlZXJjZW50Q29ycmVjdEFuc3dlcnMoY3VycmVudEl0ZW0pO1xuICB9XG4gIGNvbnN0IGN1cnJlbnREYXRhVG9Kc29uID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGlzdGljRGF0YScsIGN1cnJlbnREYXRhVG9Kc29uKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXJ0UGFnZUNhcmRTZXQgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgY2FyZHNMaXN0ID0gR0VUX1ZBUignY2FyZHNMaXN0Jyk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IEdFVF9WQVIoJ2NhdGVnb3J5TmFtZScpO1xuICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGNhcmRzTGlzdC5jbGFzc0xpc3QuYWRkKCdzdGFydC1wYWdlJyk7XG4gIGNhcmRzTGlzdC5kYXRhc2V0LmNhdGVnb3J5ID0gJ21haW4tbWVudSc7XG4gIHVwZGF0ZU1vZGUoKTtcbiAgY2xlYXJDYXJkc0xpc3RDb250YWluZXIoKTtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnNlY3Rpb24gIT09ICdob21lJykge1xuICAgICAgY29uc3QgaW1nUGF0aCA9IGVsZW1lbnQuc3RhcnRJbWFnZTtcbiAgICAgIGNvbnN0IGltZ0FsdCA9IGVsZW1lbnQuc2VjdGlvbldvcmRzWzBdLmFsdDtcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGVsZW1lbnQuc2VjdGlvblRpdGxlO1xuICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShpbWdQYXRoLCBpbWdBbHQsIGNhcmRUaXRsZSwgY2FyZFRpdGxlKTtcbiAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEl0ZW0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpbWdQYXRoID0gaXRlbS5pbWFnZTtcbiAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICBjb25zdCBjYXJkU2VjdGlvbiA9IGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBpdGVtLndvcmQ7XG4gICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICBjb25zdCBzb3VuZFBhdGggPSBpdGVtLmF1ZGlvU3JjO1xuICAgIGNvbnN0IGNhcmRJdGVtID0gY3JlYXRlQ2FyZEl0ZW0oXG4gICAgICBpbWdQYXRoLFxuICAgICAgaW1nQWx0LFxuICAgICAgY2FyZFRpdGxlLFxuICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICBjYXJkVHJhbnNsYXRpb24sXG4gICAgICBzb3VuZFBhdGgsXG4gICAgKTtcbiAgICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRJdGVtKTtcbiAgfSk7XG4gIHJlc2V0Q2FyZHNTb3VuZHNMaXN0KCk7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uID0gKGFycmF5LCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRzTGlzdCA9IEdFVF9WQVIoJ2NhcmRzTGlzdCcpO1xuICBjYXJkc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcGFnZScpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBHRVRfVkFSKCdjYXRlZ29yeU5hbWUnKTtcbiAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgY2FyZHNMaXN0LmRhdGFzZXQuY2F0ZWdvcnkgPSBzZWN0aW9uO1xuICB1cGRhdGVNb2RlKCk7XG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyKCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWN0aW9uVGl0bGUgPT09IHNlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25EYXRhID0gZWxlbWVudC5zZWN0aW9uV29yZHM7XG4gICAgICBzZWN0aW9uRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ1BhdGggPSBpdGVtLmltYWdlO1xuICAgICAgICBjb25zdCBpbWdBbHQgPSBpdGVtLmFsdDtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGl0ZW0ud29yZDtcbiAgICAgICAgY29uc3QgY2FyZFRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbjtcbiAgICAgICAgY29uc3Qgc291bmRQYXRoID0gaXRlbS5hdWRpb1NyYztcbiAgICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjcmVhdGVDYXJkSXRlbShcbiAgICAgICAgICBpbWdQYXRoLFxuICAgICAgICAgIGltZ0FsdCxcbiAgICAgICAgICBjYXJkVGl0bGUsXG4gICAgICAgICAgY2FyZFNlY3Rpb24sXG4gICAgICAgICAgY2FyZFRyYW5zbGF0aW9uLFxuICAgICAgICAgIHNvdW5kUGF0aCxcbiAgICAgICAgKTtcbiAgICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXNldENhcmRzU291bmRzTGlzdCgpO1xufTtcblxuY29uc3QgcGxheVNvdW5kID0gKGVsZW1lbnQsIHNvdW5kUGF0aCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhzb3VuZFBhdGgpO1xuICBjb25zdCBjYXJkc0xpc3QgPSBHRVRfVkFSKCdjYXJkc0xpc3QnKTtcbiAgY29uc3QgcGxheVJlcGVhdEJ0biA9IEdFVF9WQVIoJ3BsYXlSZXBlYXRCdG4nKTtcbiAgYXVkaW8ucGxheSgpO1xuICBpZiAoZWxlbWVudCA9PT0gcGxheVJlcGVhdEJ0bikge1xuICAgIHBsYXlSZXBlYXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBwbGF5UmVwZWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzTGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBjYXJkc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVDYXJkID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVCYWNrID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHNldFRyYWluTW9kZUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0LCBjYXJkSW5uZXIpID0+IHtcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZS1idG4nKSkge1xuICAgIHJvdGF0ZUNhcmQoY2FyZElubmVyKTtcbiAgICBjYXJkSW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHJvdGF0ZUJhY2soY2FyZElubmVyKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghY2FyZElubmVyLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZC1saXN0X19pdGVtJyk7XG4gICAgY29uc3Qgc291bmRQYXRoID0gY3VycmVudENhcmQuZGF0YXNldC5zb3VuZDtcbiAgICBjb25zdCBjYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgICBwbGF5U291bmQoY2FyZCwgc291bmRQYXRoKTtcbiAgICB1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEoJ3RyYWluJywgY3VycmVudENhcmQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRTY29yZUljb24gPSAoY2FyZCwgc3JjKSA9PiB7XG4gIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgIGNvbnN0IHNjb3JlSWNvbiA9IGNyZWF0ZVNjb3JlTGluZUljb24oc3JjKTtcbiAgICBjb25zdCBzY29yZUxpbmUgPSBHRVRfVkFSKCdzY29yZUxpbmUnKTtcbiAgICBzY29yZUxpbmUucHJlcGVuZChzY29yZUljb24pO1xuICB9XG59O1xuXG5jb25zdCBzZXRQbGF5TW9kZUZ1bmN0aW9uYWxpdHkgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJkLWxpc3RfX2l0ZW0nKTtcbiAgY29uc3QgY3VycmVudENhcmRGcm9udCA9IGN1cnJlbnRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWZyb250Jyk7XG4gIGNvbnN0IGN1cnJlbnRDYXJkU291bmQgPSBjdXJyZW50Q2FyZC5kYXRhc2V0LnNvdW5kO1xuICBjb25zdCBjdXJyZW50U291bmQgPSBHRVRfVkFSKCdzb3VuZHNMaXN0JykuYXQoLTEpO1xuICBjb25zdCBwbGF5UmVwZWF0QnRuID0gR0VUX1ZBUigncGxheVJlcGVhdEJ0bicpO1xuICBjb25zdCBjb3JyZWN0QW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvY29ycmVjdC1jaG9pY2UubXAzJztcbiAgY29uc3Qgc3VjY2Vzc1NvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL3N1Y2Nlc3MubXAzJztcbiAgY29uc3QgY29ycmVjdEljb25TcmMgPSAnYXNzZXRzL2ltYWdlcy9zY29yZS1pY29ucy9jb3JyZWN0LnBuZyc7XG4gIGNvbnN0IHdyb25nSWNvblNyYyA9ICdhc3NldHMvaW1hZ2VzL3Njb3JlLWljb25zL3dyb25nLnBuZyc7XG4gIGNvbnN0IHdyb25nQW5zd2VyU291bmQgPSAnYXNzZXRzL2F1ZGlvL2Fuc3dlcnMtc291bmQvbmVnYXRpdmVfYmVlcHMubXAzJztcbiAgY29uc3QgZmFpbHVyZVNvdW5kID0gJ2Fzc2V0cy9hdWRpby9hbnN3ZXJzLXNvdW5kL2ZhaWx1cmUubXAzJztcbiAgaWYgKGlzQWN0aXZlQ2FyZChjdXJyZW50Q2FyZEZyb250KSAmJiAhcGxheVJlcGVhdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSkge1xuICAgIHVwZGF0ZVN0YXRpc3RpY3NQYWdlRGF0YSgncGxheScsIGN1cnJlbnRDYXJkLCBjdXJyZW50Q2FyZFNvdW5kID09PSBjdXJyZW50U291bmQpO1xuICAgIGlmIChjdXJyZW50Q2FyZFNvdW5kID09PSBjdXJyZW50U291bmQpIHtcbiAgICAgIGN1cnJlbnRDYXJkRnJvbnQuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgIGFkZFNjb3JlSWNvbihjdXJyZW50Q2FyZCwgY29ycmVjdEljb25TcmMpO1xuICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBjb3JyZWN0QW5zd2VyU291bmQpO1xuICAgICAgdXBkYXRlU291bmRMaXN0KCk7XG4gICAgICBjcmVhdGVQbGF5UmVwZWF0QnRuRnVuY3Rpb25hbGl0eShwbGF5UmVwZWF0QnRuKTtcbiAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgc2hvd092ZXJsYXkoKTtcbiAgICAgICAgaWYgKGlzR2FtZU92ZXJTdWNjZXNzKCkpIHtcbiAgICAgICAgICBwbGF5U291bmQoY3VycmVudENhcmQsIHN1Y2Nlc3NTb3VuZCk7XG4gICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XG4gICAgICAgICAgaGlkZU1vZGFsV2luZG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheVNvdW5kKGN1cnJlbnRDYXJkLCBmYWlsdXJlU291bmQpO1xuICAgICAgICAgIHNob3dNb2RhbFdpbmRvdygpO1xuICAgICAgICAgIGhpZGVNb2RhbFdpbmRvdygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFNjb3JlSWNvbihjdXJyZW50Q2FyZCwgd3JvbmdJY29uU3JjKTtcbiAgICAgIHBsYXlTb3VuZChjdXJyZW50Q2FyZCwgd3JvbmdBbnN3ZXJTb3VuZCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LCBzZXRHbG9iYWxWYWx1ZXMsIGNhcGl0YWxpemVGaXJzdFdvcmQsXG4gIGNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0LFxuICBjcmVhdGVDYXJkc0xpc3RTZWN0aW9uLCB1cGRhdGVNb2RlLCBwbGF5U291bmQsXG4gIHJvdGF0ZUNhcmQsIHJvdGF0ZUJhY2ssIGlzTWFpbk1lbnUsIGlzQ2FyZCwgaXNUcmFpbk1vZGUsXG4gIGlzUGxheU1vZGUsIHNldFRyYWluTW9kZUZ1bmN0aW9uYWxpdHksIHNodWZmbGVBcnJheSwgdXBkYXRlU291bmRMaXN0LFxuICBpc0dhbWVTdGFydGVkLCBhZGRTY29yZUljb24sIGlzQWN0aXZlQ2FyZCwgaXNHYW1lT3ZlciwgaXNHYW1lT3ZlclN1Y2Nlc3MsXG4gIGNyZWF0ZVN0YXRpc3RpY3NUYWJsZSwgdXBkYXRlU3RhdGlzdGljc1BhZ2VEYXRhLCBzZXRTdGF0aXN0aWNzVGFibGVGdW5jdGlvbmFsaXR5LFxuICBjcmVhdGVTdGF0aXN0aWNzVGFibGVCb2R5LCBzaG93U3RhdFRhYmxlLCBoaWRlU3RhdFRhYmxlLCBjcmVhdGVEaWZmV29yZHNTZWN0aW9uLFxuICBnZXRDdXJyZW50TW9kZSwgc2V0UGxheU1vZGVGdW5jdGlvbmFsaXR5LFxufTtcbiIsImNvbnN0IFZBUklBQkxFUyA9IHtcbiAgbWFpblNlY3Rpb246ICdpbml0aWFsIHZhbHVlJyxcbiAgY2F0ZWdvcnlOYW1lOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGNhcmRzTGlzdDogJ2luaXRpYWwgdmFsdWUnLFxuICBzb3VuZHNMaXN0OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGhhbWJ1cmdlckJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBoZWFkZXJOYXY6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTWVudTogJ2luaXRpYWwgdmFsdWUnLFxuICBuYXZNZW51TGlua3M6ICdpbml0aWFsIHZhbHVlJyxcbiAgaGVhZGVyTG9nbzogJ2luaXRpYWwgdmFsdWUnLFxuICBvdmVybGF5OiAnaW5pdGlhbCB2YWx1ZScsXG4gIGJvZHk6ICdpbml0aWFsIHZhbHVlJyxcbiAgdG9nZ2xlQnRuOiAnaW5pdGlhbCB2YWx1ZScsXG4gIGlzUGxheU1vZGU6ICdpbml0aWFsIHZhbHVlJyxcbiAgcGxheVJlcGVhdEJ0bjogJ2luaXRpYWwgdmFsdWUnLFxuICBzY29yZUxpbmU6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3c6ICdpbml0aWFsIHZhbHVlJyxcbiAgbW9kYWxXaW5kb3dJY29uOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93VGV4dDogJ2luaXRpYWwgdmFsdWUnLFxuICBkYXRhOiAnaW5pdGlhbCB2YWx1ZScsXG4gIG1vZGFsV2luZG93SWNvbldpbjogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvd2luLWljb24ucG5nJyxcbiAgbW9kYWxXaW5kb3dJY29uTG9zZTogJ2Fzc2V0cy9pbWFnZXMvc2NvcmUtaWNvbnMvbG9zZS1pY29uLnBuZycsXG4gIHN0YXRpc3RpY0RhdGE6IFtdLFxuICByZXBlYXRlZERhdGFTZXQ6ICdpbml0aWFsIHZhbHVlJyxcbn07XG5cbmNvbnN0IFNFVF9WQVIgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChWQVJJQUJMRVMsIG5hbWUpKSB7XG4gICAgVkFSSUFCTEVTW25hbWVdID0gdmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IEdFVF9WQVIgPSAobmFtZSkgPT4ge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFZBUklBQkxFUywgbmFtZSkpIHtcbiAgICByZXR1cm4gVkFSSUFCTEVTW25hbWVdO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IFNFVF9WQVIsIEdFVF9WQVIgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXkgfSBmcm9tICcuL2NvbXBvbmVudHMvb3ZlcmxheSc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlTWFpbiB9IGZyb20gJy4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVNb2RhbFdpbmRvdyB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbFdpbmRvdyc7XG5pbXBvcnQgeyBjcmVhdGVTdGF0aXN0aWNzUGFnZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aXN0aWNzUGFnZSc7XG5pbXBvcnQgc2V0RXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi91dGlscy9ldmVudHMnO1xuaW1wb3J0IHsgc2V0R2xvYmFsVmFsdWVzLCBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0IH0gZnJvbSAnLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHsgR0VUX1ZBUiwgU0VUX1ZBUiB9IGZyb20gJy4vdXRpbHMvdmFyaWFibGVzJztcblxuY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbmZldGNoKCcuLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nKVxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiBTRVRfVkFSKCdkYXRhJywgcmVzcG9uc2UpKVxuICAudGhlbigoKSA9PiB7XG4gICAgYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlT3ZlcmxheSgpKTtcbiAgICBhcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlTW9kYWxXaW5kb3coKSk7XG4gICAgYXBwV3JhcHBlci5hcHBlbmQoY3JlYXRlTWFpbigpKTtcbiAgICBhcHBXcmFwcGVyLmFwcGVuZChjcmVhdGVGb290ZXIoKSk7XG4gIH0pXG4gIC50aGVuKCgpID0+IHtcbiAgICBzZXRHbG9iYWxWYWx1ZXMoKTtcbiAgICBjcmVhdGVTdGFydFBhZ2VDYXJkU2V0KEdFVF9WQVIoJ2RhdGEnKSk7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBHRVRfVkFSKCdtYWluU2VjdGlvbicpO1xuICAgIG1haW5TZWN0aW9uLmFwcGVuZChjcmVhdGVTdGF0aXN0aWNzUGFnZSgpKTtcbiAgICBzZXRFdmVudExpc3RlbmVycygpO1xuICB9KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiY3JlYXRlQ2FyZEl0ZW1JbWciLCJpbWdQYXRoIiwiaW1nQWx0IiwiaW1nQ2xhc3MiLCJjYXJkSXRlbUltZyIsImNsYXNzTGlzdCIsImFkZCIsInNyYyIsImFsdCIsImNyZWF0ZUNhcmRJdGVtVGl0bGUiLCJ0aXRsZVRleHQiLCJ0aXRsZUNsYXNzIiwiY2FyZFRpdGxlIiwidGV4dENvbnRlbnQiLCJjcmVhdGVDYXJkUm90YXRlQnRuIiwicm90YXRlQnRuQ2xhc3MiLCJyb3RhdGVCdG5UZXh0IiwiY2FyZFJvdGF0ZUJ0biIsInR5cGUiLCJjcmVhdGVDYXJkSXRlbSIsImNhcmRTZWN0aW9uIiwiY2FyZFRyYW5zbGF0aW9uIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic291bmRQYXRoIiwiY2FyZEl0ZW0iLCJkYXRhc2V0Iiwic2VjdGlvbiIsInNvdW5kIiwiY2FyZElubmVyIiwiY2FyZEZyb250IiwiY2FyZEZyb250SW1nQ29udGFpbmVyIiwiY2FyZEZyb250SW1nIiwiYXBwZW5kIiwiY2FyZEZyb250VGl0bGUiLCJjYXJkRnJvbnRSb3RhdGVCdG4iLCJjYXJkQmFjayIsImNhcmRCYWNrSW1nQ29udGFpbmVyIiwiY2FyZEJhY2tJbWciLCJjYXJkQmFja1RpdGxlIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyRWxlbWVudCIsInBhcmFncmFwaCIsInBhcmFncmFwaExpbmsiLCJ0YXJnZXQiLCJocmVmIiwiZm9vdGVyQ29udGFpbmVyIiwiY3JlYXRlTmF2TWVudSIsImNyZWF0ZUxvZ28iLCJjcmVhdGVUb2dnbGUiLCJjcmVhdGVOYXZNZW51QnRuIiwiY3JlYXRlU3RhdGlzdGljc0J0biIsIkdFVF9WQVIiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyTG9nbyIsImhlYWRlckJ0bnNDb250YWluZXIiLCJ0b2dnbGVCdG4iLCJzdGF0QnRuIiwiaGVhZGVyTmF2IiwibmF2TWVudUJ0biIsIm5hdmlnYXRpb25NZW51IiwiaGVhZGVyQ29udGFpbmVyIiwiY3JlYXRlU3RhcnRQYWdlQ2FyZFNldCIsImhpZGVTdGF0VGFibGUiLCJsb2dvVGV4dCIsImxvZ29IcmVmIiwiaGVhZGVyTG9nb0xpbmsiLCJzZXRMb2dvRnVuY3Rpb25hbGl0eSIsInNldExvZ29FdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUNhcmRzTGlzdFNlY3Rpb24iLCJpc01haW5NZW51IiwiaXNDYXJkIiwiaXNUcmFpbk1vZGUiLCJpc1BsYXlNb2RlIiwic2V0VHJhaW5Nb2RlRnVuY3Rpb25hbGl0eSIsImlzR2FtZVN0YXJ0ZWQiLCJpc0FjdGl2ZUNhcmQiLCJ1cGRhdGVTb3VuZExpc3QiLCJhZGRTY29yZUljb24iLCJwbGF5U291bmQiLCJpc0dhbWVPdmVyIiwiaXNHYW1lT3ZlclN1Y2Nlc3MiLCJ1cGRhdGVTdGF0aXN0aWNzUGFnZURhdGEiLCJnZXRDdXJyZW50TW9kZSIsInNldFBsYXlNb2RlRnVuY3Rpb25hbGl0eSIsInVwZGF0ZU5hdk1ldW5MaW5rc1N0YXRlIiwic2hvd092ZXJsYXkiLCJjcmVhdGVQbGF5UmVwZWF0QnRuIiwiY3JlYXRlUGxheVJlcGVhdEJ0bkZ1bmN0aW9uYWxpdHkiLCJzaG93TW9kYWxXaW5kb3ciLCJoaWRlTW9kYWxXaW5kb3ciLCJjcmVhdGVNYWluIiwibWFpbkVsZW1lbnQiLCJtYWluQ29udGFpbmVyIiwic2NvcmVMaW5lIiwiY2F0ZWdvcnlOYW1lIiwiY2FyZExpc3QiLCJjYXRlZ29yeSIsIm1vZGUiLCJwbGF5UmVwZWF0QnRuIiwic2V0TWFpbk1lbnVGdW5jdGlvbmFsaXR5IiwiY2xvc2VzdCIsImNyZWF0ZU1haW5TZWN0aW9uRnVuY3Rpb25hbGl0eSIsImV2ZW50IiwiY2FyZHNMaXN0IiwiY3VycmVudE1vZGUiLCJzZXRNYWluU2VjdGlvbkZ1bmN0aW9uYWxpdHkiLCJoaWRlT3ZlcmxheSIsImNyZWF0ZU1vZGFsV2luZG93IiwibW9kYWxXaW5kb3ciLCJpY29uIiwidGV4dCIsImgzIiwibW9kYWxXaW5kb3dJY29uIiwibW9kYWxXaW5kb3dUZXh0IiwibW9kYWxXaW5kb3doU2NvcmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY29yZUxpbmVJY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbW91bnRPZk1pc3Rha2VzIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiLCJjb25jYXQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY3JlYXRlTmF2TWVudUl0ZW0iLCJkYXRhU2V0IiwibmF2TWVudVVsIiwiZGF0YSIsImkiLCJvcGVuTmF2TWVudSIsImhlYWRlck1lbnUiLCJuYXZNZW51TGlua3MiLCJmb3JFYWNoIiwibGluayIsInRhYkluZGV4IiwiY2xvc2VOYXZNZW51Iiwic2V0TmF2TWVudUFjdGl2ZVN0YXRlIiwibGlua3MiLCJsaW5rU2VjdGlvbiIsInJlbW92ZU5hdk1lbnVBY3RpdmVTdGF0ZSIsImNyZWF0ZUhhbWJ1cmdlck1lbnVGdW5jdGlvbmFsaXR5IiwiaGFtYnVyZ2VyQnRuIiwiY2xpY2siLCJzZXRIYW1idXJnZXJNZW51RXZlbnRMaXN0ZW5lciIsInNwYW4xIiwic3BhbjIiLCJzcGFuMyIsInNldE5hdk1lbnVCdG5GdW5jdGlvbmFsaXR5IiwiY29udGFpbnMiLCJjYXBpdGFsaXplRmlyc3RXb3JkIiwibGlua05hbWUiLCJsaSIsImNyZWF0ZU92ZXJsYXkiLCJvdmVybGF5RWxlbWVudCIsIm92ZXJsYXkiLCJib2R5Iiwic2V0T3ZlcmxheUZ1bmN0aW9uYWxpdHkiLCJidXR0b24iLCJzb3VuZHNMaXN0IiwiY3VycmVudFNvdW5kIiwiYXQiLCJyZXNldFBsYXlSZXBlYXRCdG5TdGF0ZSIsInNldFBsYXlSZXBlYXRCdG5GdW5jdGlvbmFsaXR5IiwiY3JlYXRlU2NvcmVMaW5lSWNvbiIsInNjb3JlSWNvbiIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZSIsInNldEdsb2JhbFZhbHVlcyIsInNldFN0YXRpc3RpY3NUYWJsZUZ1bmN0aW9uYWxpdHkiLCJzaG93U3RhdFRhYmxlIiwiU0VUX1ZBUiIsInNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5Iiwic3RhdGlzdGljc1BhZ2UiLCJzdGF0aXN0aWNzUGFnZUNvbnRhaW5lciIsInN0YXRpc3RpY3NUYWJsZSIsInN0YXRpc3RpY0RhdGEiLCJzbGljZSIsInJlcGVhdEJ0biIsInNvcnQiLCJhIiwiYiIsImVsZW0xIiwiZWxlbTIiLCJyZXBlYXRlZERhdGEiLCJtYXAiLCJlbGVtIiwiVHJhbnNsYXRpb24iLCJyZXBlYXRlZERhdGFTZXQiLCJzZWN0aW9uV29yZHMiLCJmbGF0IiwiaW5jbHVkZXMiLCJ0cmFuc2xhdGlvbiIsImRpc2FibGVkIiwiY3JlYXRlRGlmZldvcmRzU2VjdGlvbiIsImNyZWF0ZVN0YXRpc3RpY3NQYWdlIiwic3RhdGlzdGljc0RhdGEiLCJzdGF0aXN0aWNzUGFnZUJ1dHRvbnMiLCJyZXNldEJ0biIsInN0YXRpc3RpY3NQYWdlVGFibGUiLCJyZXNldFN0YXRpc3RpY3NCdG5GdW5jdGlvbmFsaXR5IiwicmVzZXRTdGF0QnRuIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJyZXBlYXREaWZmV29yZHNGdW5jdGlvbmFsaXR5IiwicmVwZWF0RGlmZldvcmRzQnRuIiwidXBkYXRlTW9kZSIsImFyaWFQcmVzc2VkIiwidG9nZ2xlTW9kZVRyYWluIiwidG9nZ2xlTW9kZVBsYXkiLCJjcmVhdGVUb2dnbGVCdG5GdW5jdGlvbmFsaXR5Iiwic2V0VG9nZ2xlQnRuRnVuY3Rpb25hbGl0eSIsInNldEV2ZW50TGlzdGVuZXJzIiwibmFtZSIsImVsZW1lbnQiLCJjYXJkIiwiaWNvbnNBbW91bnQiLCJjYXJkc0Ftb3VudCIsImNsZWFyQ2FyZHNMaXN0Q29udGFpbmVyIiwiY29udGFpbmVyIiwiaW5uZXJIVE1MIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJzaHVmZmxlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfcmVmIiwicG9wIiwiY3JlYXRlTmV3U291bmRzTGlzdCIsImNhcmRzIiwicHVzaCIsImNhbGN1bGF0ZWVyY2VudENvcnJlY3RBbnN3ZXJzIiwib2JqIiwicm91bmQiLCJDb3JyZWN0IiwiSW5jb3JyZWN0IiwiY3JlYXRlU3RhcnRpbmdTdGF0aXN0aWNEYXRhIiwicmVzdWx0IiwiQ2F0ZWdvcnkiLCJzZWN0aW9uVGl0bGUiLCJXb3JkIiwid29yZCIsIlRyYWluZWQiLCJjcmVhdGVTdGF0aXN0aWNzRGF0YSIsInNhdmVkRGF0YSIsImdldEl0ZW0iLCJzdGFydGluZ0RhdGEiLCJzdGFydGluZ0RhdGFUb0pzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImFwcGx5IiwiY3VycmVudERhdGEiLCJwYXJzZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicmVzZXRDYXJkc1N0YXRlIiwibWFpblNlY3Rpb24iLCJtYWluU2VjdGlvbkNvbnRhaW5lciIsInJlc2V0Q2FyZHNTb3VuZHNMaXN0IiwicmVzZXRTY29yZUxpbmUiLCJwbGF5TW9kZSIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUhlYWQiLCJzdGF0aXN0aWNzVGFibGVIZWFkIiwiaGVhZGVyUm93IiwiaGVhZGVyUm93RGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoZWFkZXJSb3dUaCIsImNvbHVtbiIsImNyZWF0ZVN0YXRpc3RpY3NUYWJsZUJvZHkiLCJzdGF0aXN0aWNzVGFibGVCb2R5IiwidEJvZHlSb3ciLCJ0Qm9keVJvd0RhdGEiLCJ2YWx1ZXMiLCJyb3dDYXRlZ29yeSIsInJvd1dvcmQiLCJyb3ciLCJ2YWx1ZSIsImluZGV4IiwidEJvZHlSb3dDZWxsIiwiY2VsbCIsInN0YXRUYWJsZSIsInN0YXRUYWJsZUhlYWRlciIsInN0YXRUYWJsZUhlYWRlckNlbGxzIiwic3RhdFRhYmxlQm9keSIsInNvcnRUeXBlIiwic29ydENhdGVnb3J5Iiwic29ydENhdGVnb3J5Q2VsbHMiLCJzb3J0Q2F0ZWdvcnlDZWxsc1ZhbHVlcyIsImFyZUVtcHR5Q2VsbHMiLCJldmVyeSIsIm51bTEiLCJudW0yIiwibG9jYWxlQ29tcGFyZSIsInJldmVyc2UiLCJjdXJyZW50SXRlbSIsImNhcmRMaXN0SXRlbXMiLCJjdXJyZW50Q2FyZCIsIl9jdXJyZW50RGF0YSRmaWx0ZXIiLCJfY3VycmVudERhdGEkZmlsdGVyMiIsIl9zbGljZWRUb0FycmF5IiwiY3VycmVudERhdGFUb0pzb24iLCJzdGFydEltYWdlIiwiaW1hZ2UiLCJhdWRpb1NyYyIsInNlY3Rpb25EYXRhIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm90YXRlQ2FyZCIsInJvdGF0ZUJhY2siLCJwcmVwZW5kIiwiY3VycmVudENhcmRGcm9udCIsImN1cnJlbnRDYXJkU291bmQiLCJjb3JyZWN0QW5zd2VyU291bmQiLCJzdWNjZXNzU291bmQiLCJjb3JyZWN0SWNvblNyYyIsIndyb25nSWNvblNyYyIsIndyb25nQW5zd2VyU291bmQiLCJmYWlsdXJlU291bmQiLCJWQVJJQUJMRVMiLCJtb2RhbFdpbmRvd0ljb25XaW4iLCJtb2RhbFdpbmRvd0ljb25Mb3NlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwV3JhcHBlciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=