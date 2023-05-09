import {
  createElement, createCardsListSection, isMainMenu, isCard, isTrainMode,
  isPlayMode, trainModeFunctionality,
} from '../utils/helper';
import { GET_VAR } from '../utils/variables';
import data from '../../assets/data/data.json';
import { updateNavMeunLinksState } from './navMenu';
import createPlayRepeatBtn from './playRepeatBtn';

const createMain = () => {
  // create main element
  const mainElement = createElement('main');
  mainElement.classList.add('main');

  // create main container
  const mainContainer = createElement('div');
  mainContainer.classList.add('container');

  // create score line
  const scoreLine = createElement('div');
  scoreLine.classList.add('score-line');

  mainContainer.append(scoreLine);

  // create category name
  const categoryName = createElement('h2');
  categoryName.classList.add('category-name');
  categoryName.textContent = '';

  // cards list
  const cardList = createElement('ul');
  cardList.classList.add('cards-list');
  cardList.dataset.category = '';
  cardList.dataset.mode = '';

  // create playRepeat button
  const playRepeatBtn = createPlayRepeatBtn();

  mainContainer.append(categoryName);
  mainContainer.append(cardList);
  mainContainer.append(playRepeatBtn);

  mainElement.append(mainContainer);

  return mainElement;
};

const mainMenuFunctionality = (target) => {
  const { section } = target.closest('.card-list__item').dataset;
  createCardsListSection(data, section);
  updateNavMeunLinksState(section);
};

const setMainSectionFunctionality = () => {
  const cardsList = GET_VAR('cardsList');
  cardsList.addEventListener('click', (event) => {
    const { target } = event;
    const cardInner = target.closest('.card-inner');
    if (isMainMenu(cardsList) && isCard(target)) {
      mainMenuFunctionality(target);
    } else if (!isMainMenu(cardsList) && isTrainMode(cardsList) && isCard(target)) {
      console.log('train mode');
      trainModeFunctionality(target, cardInner);
    } else if (!isMainMenu(cardsList) && isPlayMode(cardsList) && isCard(target)) {
      console.log('play mode');
    }
  });
};

export { createMain, mainMenuFunctionality, setMainSectionFunctionality };
