/* eslint-disable import/no-cycle */
import { SET_VAR, GET_VAR } from './variables';
import createCardItem from '../components/cardItem';
import { resetPlayRepeatBtnState, playRepeatBtnFunctionality } from '../components/playRepeatBtn';
import createScoreLineIcon from '../components/scoreLineIcon';
import { mainSectionFunctionality } from '../components/main';
import dataSet from '../../assets/data/data.json';

// create element
const createElement = (name) => {
  const element = document.createElement(name);
  return element;
};

const isMainMenu = (element) => element.classList.contains('start-page');
const isCard = (element) => element.closest('.card-list__item');
const isActiveCard = (card) => !card.classList.contains('inactive');
const isTrainMode = (element) => element.dataset.mode === 'train';
const isPlayMode = (element) => element.dataset.mode === 'play';
const isGameStarted = () => GET_VAR('playRepeatBtn').classList.contains('repeat');
const isGameOver = () => GET_VAR('soundsList').length === 0;
const isGameOverSuccess = () => {
  const iconsAmount = document.querySelectorAll('.score-line__icon').length;
  const cardsAmount = document.querySelectorAll('.card-list__item').length;
  return iconsAmount === cardsAmount;
};

const clearCardsListContainer = () => {
  const container = GET_VAR('cardsList');
  container.innerHTML = '';
};

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const updateSoundList = () => {
  const soundsList = GET_VAR('soundsList').slice();
  soundsList.pop();
  SET_VAR('soundsList', soundsList);
};

const createNewSoundsList = () => {
  const cards = document.querySelectorAll('.card-list__item');
  const soundsList = [];
  cards.forEach((card) => {
    const { sound } = card.dataset;
    soundsList.push(sound);
  });

  return soundsList;
};

const createStartingStatisticsData = (data) => {
  const result = [];
  data.forEach((item) => {
    if (item.section !== 'home') {
      item.sectionWords.forEach((elem) => {
        const obj = {
          Categoty: item.sectionTitle,
          Word: elem.word,
          Translation: elem.translation,
          Trained: 0,
          Correct: 0,
          Incorrect: 0,
          '%': 0,
        };
        result.push(obj);
      });
    }
  });
  return result;
};

const capitalizeFirstWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const setGlobalValues = () => {
  SET_VAR('categoryName', document.querySelector('.category-name'));
  SET_VAR('cardsList', document.querySelector('.cards-list'));
  SET_VAR('hamburgerBtn', document.querySelector('.header-hamburger'));
  SET_VAR('headerNav', document.querySelector('.header-nav'));
  SET_VAR('headerMenu', document.querySelector('.header-menu'));
  SET_VAR('navMenuLinks', document.querySelectorAll('.header-menu__item-link'));
  SET_VAR('overlay', document.querySelector('.overlay'));
  SET_VAR('body', document.querySelector('body'));
  SET_VAR('headerLogo', document.querySelector('.header-logo__link'));
  SET_VAR('toggleBtn', document.querySelector('.toggle-button'));
  SET_VAR('playRepeatBtn', document.querySelector('.play-btn'));
  SET_VAR('scoreLine', document.querySelector('.score-line'));
  SET_VAR('modalWindow', document.querySelector('.modal-window'));
  SET_VAR('modalWindowText', document.querySelector('.modal-window__text'));
  SET_VAR('modalWindowIcon', document.querySelector('.modal-window__icon'));
  SET_VAR('statisticData', createStartingStatisticsData(dataSet));
  SET_VAR('isPlayMode', GET_VAR('toggleBtn').ariaPressed);
};

const resetCardsState = () => {
  const cards = document.querySelectorAll('.card-front');
  cards.forEach((card) => card.classList.remove('inactive'));
};

const resetCardsSoundsList = () => {
  const soundsList = createNewSoundsList();
  SET_VAR('soundsList', shuffleArray(soundsList));
};

const resetScoreLine = () => {
  const scoreLine = GET_VAR('scoreLine');
  scoreLine.innerHTML = '';
};

const updateMode = () => {
  const cardsList = GET_VAR('cardsList');
  const playMode = GET_VAR('isPlayMode');
  resetPlayRepeatBtnState();
  resetCardsState();
  resetCardsSoundsList();
  resetScoreLine();
  if (playMode === 'true') {
    cardsList.dataset.mode = 'play';
  } else {
    cardsList.dataset.mode = 'train';
  }
};

const createStatisticsTableHead = (data) => {
  const statisticsTableHead = createElement('thead');
  statisticsTableHead.classList.add('stat-table__head');
  const headerRow = createElement('tr');
  const headerRowData = Object.keys(data[0]);

  headerRowData.forEach((key) => {
    const headerRowTh = createElement('th');
    headerRowTh.textContent = key;
    headerRow.append(headerRowTh);
  });

  statisticsTableHead.append(headerRow);

  return statisticsTableHead;
};

const createStatisticsTableBody = (data) => {
  // create statistics table body
  const statisticsTableBody = createElement('tbody');
  statisticsTableBody.classList.add('stat-table__body');

  data.forEach((item) => {
    const tBodyRow = createElement('tr');
    const tBodyRowData = Object.values(item);

    tBodyRowData.forEach((value) => {
      const tBodyRowCell = createElement('td');
      tBodyRowCell.textContent = value;
      tBodyRow.append(tBodyRowCell);
    });

    statisticsTableBody.append(tBodyRow);
  });

  return statisticsTableBody;
};

const createStatisticsTable = (data) => {
  // create statistics table
  const statisticsTable = createElement('table');
  statisticsTable.classList.add('stat-table');

  // create statistics table head
  const statisticsTableHead = createStatisticsTableHead(data);

  // create statistics table body
  const statisticsTableBody = createStatisticsTableBody(data);

  statisticsTable.append(statisticsTableHead);
  statisticsTable.append(statisticsTableBody);

  return statisticsTable;
};

const createStartPageCardSet = (array) => {
  const cardsList = GET_VAR('cardsList');
  const categoryName = GET_VAR('categoryName');
  categoryName.textContent = 'Home';
  cardsList.classList.add('start-page');
  cardsList.dataset.category = 'main-menu';
  updateMode();
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.section !== 'home') {
      const imgPath = element.startImage;
      const imgAlt = element.sectionWords[0].alt;
      const cardTitle = element.sectionTitle;
      const cardItem = createCardItem(imgPath, imgAlt, cardTitle, cardTitle);
      cardsList.append(cardItem);
    }
  });
};

const createCardsListSection = (array, section) => {
  const cardsList = GET_VAR('cardsList');
  cardsList.classList.remove('start-page');
  const categoryName = GET_VAR('categoryName');
  categoryName.textContent = section;
  cardsList.dataset.category = section;
  updateMode();
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.sectionTitle === section) {
      const sectionData = element.sectionWords;
      sectionData.forEach((item) => {
        const imgPath = item.image;
        const imgAlt = item.alt;
        const cardSection = categoryName.textContent;
        const cardTitle = item.word;
        const cardTranslation = item.translation;
        const soundPath = item.audioSrc;
        const cardItem = createCardItem(
          imgPath,
          imgAlt,
          cardTitle,
          cardSection,
          cardTranslation,
          soundPath,
        );
        cardsList.append(cardItem);
      });
    }
  });
  resetCardsSoundsList();
};

const playSound = (element, soundPath) => {
  console.log('element', element);
  const audio = new Audio(soundPath);
  const cardsList = GET_VAR('cardsList');
  const playRepeatBtn = GET_VAR('playRepeatBtn');
  console.log('element === playRepeatBtn', element === playRepeatBtn);
  audio.play();
  if (element === playRepeatBtn) {
    playRepeatBtn.removeEventListener('click', playRepeatBtnFunctionality);
    audio.addEventListener('ended', () => {
      playRepeatBtn.addEventListener('click', playRepeatBtnFunctionality);
    });
  } else {
    cardsList.removeEventListener('click', mainSectionFunctionality);
    audio.addEventListener('ended', () => {
      cardsList.addEventListener('click', mainSectionFunctionality);
    });
  }
};

const rotateCard = (element) => {
  if (!element.classList.contains('rotate')) {
    element.classList.add('rotate');
  }
};

const rotateBack = (element) => {
  if (element.classList.contains('rotate')) {
    element.classList.remove('rotate');
  }
};

const trainModeFunctionality = (target, cardInner) => {
  if (target.classList.contains('rotate-btn')) {
    rotateCard(cardInner);
    cardInner.addEventListener('mouseleave', () => {
      rotateBack(cardInner);
    });
  } else if (!cardInner.classList.contains('rotate')) {
    const soundPath = target.closest('.card-list__item').dataset.sound;
    const card = target.closest('.card-list__item');
    playSound(card, soundPath);
  }
};

const addScoreIcon = (card, src) => {
  if (!card.classList.contains('playing')) {
    const scoreIcon = createScoreLineIcon(src);
    const scoreLine = GET_VAR('scoreLine');
    scoreLine.prepend(scoreIcon);
  }
};

export {
  createElement, setGlobalValues, capitalizeFirstWord,
  clearCardsListContainer, createStartPageCardSet,
  createCardsListSection, updateMode, playSound,
  rotateCard, rotateBack, isMainMenu, isCard, isTrainMode,
  isPlayMode, trainModeFunctionality, shuffleArray, updateSoundList,
  isGameStarted, addScoreIcon, isActiveCard, isGameOver, isGameOverSuccess,
  createStatisticsTable,
};
