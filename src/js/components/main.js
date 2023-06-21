/* eslint-disable import/no-cycle */
import {
  createElement, createCardsListSection, setTrainModeFunctionality,
  getCurrentMode, setPlayModeFunctionality,
} from '../utils/helper';
import { GET_VAR } from '../utils/variables';
import { updateNavMeunLinksState } from './navMenu';
import { createPlayRepeatBtn } from './playRepeatBtn';

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

const setMainMenuFunctionality = (target) => {
  const { section } = target.closest('.card-list__item').dataset;
  createCardsListSection(GET_VAR('data'), section);
  updateNavMeunLinksState(section);
};

const createMainSectionFunctionality = (event) => {
  const { target } = event;
  const cardsList = GET_VAR('cardsList');
  const cardInner = target.closest('.card-inner');
  const currentMode = getCurrentMode(cardsList, target);
  switch (currentMode) {
    case 'trainMode':
      setTrainModeFunctionality(target, cardInner);
      break;
    case 'playMode':
      setPlayModeFunctionality(target);
      break;
    default:
      setMainMenuFunctionality(target);
      break;
  }
};

const setMainSectionFunctionality = () => {
  const cardsList = GET_VAR('cardsList');
  cardsList.addEventListener('click', createMainSectionFunctionality);
};

export {
  createMain, createMainSectionFunctionality,
  setMainSectionFunctionality,
};
