/* eslint-disable import/no-cycle */
import {
  createElement, createCardsListSection, isMainMenu, isCard, isTrainMode,
  isPlayMode, setTrainModeFunctionality, isGameStarted,
  isActiveCard, updateSoundList, addScoreIcon, playSound, isGameOver,
  isGameOverSuccess, updateStatisticsPageData,
} from '../utils/helper';
import { GET_VAR } from '../utils/variables';
import { updateNavMeunLinksState } from './navMenu';
import { showOverlay } from './overlay';
import { createPlayRepeatBtn, createPlayRepeatBtnFunctionality } from './playRepeatBtn';
import { showModalWindow, hideModalWindow } from './modalWindow';

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
  if (isMainMenu(cardsList) && isCard(target)) {
    setMainMenuFunctionality(target);
  } else if (!isMainMenu(cardsList) && isTrainMode(cardsList) && isCard(target)) {
    setTrainModeFunctionality(target, cardInner);
  } else if (!isMainMenu(cardsList) && isPlayMode(cardsList) && isCard(target)
    && isGameStarted()) {
    const currentCard = target.closest('.card-list__item');
    const currentCardFront = currentCard.querySelector('.card-front');
    const currentCardSound = currentCard.dataset.sound;
    const currentSound = GET_VAR('soundsList').at(-1);
    const playRepeatBtn = GET_VAR('playRepeatBtn');
    const correctAnswerSound = 'assets/audio/answers-sound/correct-choice.mp3';
    const successSound = 'assets/audio/answers-sound/success.mp3';
    const correctIconSrc = 'assets/images/score-icons/correct.png';
    const wrongIconSrc = 'assets/images/score-icons/wrong.png';
    const wrongAnswerSound = 'assets/audio/answers-sound/negative_beeps.mp3';
    const failureSound = 'assets/audio/answers-sound/failure.mp3';
    if (isActiveCard(currentCardFront) && !playRepeatBtn.classList.contains('playing')) {
      updateStatisticsPageData('play', currentCard, currentCardSound === currentSound);
      if (currentCardSound === currentSound) {
        currentCardFront.classList.add('inactive');
        addScoreIcon(currentCard, correctIconSrc);
        playSound(currentCard, correctAnswerSound);
        updateSoundList();
        createPlayRepeatBtnFunctionality(playRepeatBtn);
        if (isGameOver()) {
          showOverlay();
          if (isGameOverSuccess()) {
            playSound(currentCard, successSound);
            showModalWindow();
            hideModalWindow();
          } else {
            playSound(currentCard, failureSound);
            showModalWindow();
            hideModalWindow();
          }
        }
      } else {
        addScoreIcon(currentCard, wrongIconSrc);
        playSound(currentCard, wrongAnswerSound);
      }
    }
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
