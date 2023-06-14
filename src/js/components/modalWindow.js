/* eslint-disable import/no-cycle */
import data from '../../assets/data/data.json';
import { createElement, isGameOverSuccess, createStartPageCardSet } from '../utils/helper';
import { GET_VAR } from '../utils/variables';
import { hideOverlay } from './overlay';

const createModalWindow = () => {
  const modalWindow = createElement('div');
  modalWindow.classList.add('modal-window');

  const icon = createElement('img');
  icon.classList.add('modal-window__icon');
  icon.src = '';
  icon.alt = 'icon';

  const text = createElement('p');
  text.classList.add('modal-window__text');
  text.textContent = '';

  const h3 = createElement('h3');
  h3.classList.add('modal-window__score');

  modalWindow.append(icon);
  modalWindow.append(text);
  modalWindow.append(h3);

  return modalWindow;
};

const showModalWindow = () => {
  const modalWindow = GET_VAR('modalWindow');
  const modalWindowIcon = GET_VAR('modalWindowIcon');
  const modalWindowText = GET_VAR('modalWindowText');
  const modalWindowhScore = document.querySelector('.modal-window__score');
  const scoreLine = GET_VAR('scoreLine');
  if (isGameOverSuccess()) {
    modalWindowIcon.src = GET_VAR('modalWindowIconWin');
    modalWindowText.textContent = 'You are win!';
    modalWindow.classList.add('appear');
    modalWindowhScore.textContent = '';
  } else {
    const scoreLineIcons = scoreLine.querySelectorAll('img');
    const amountOfMistakes = Array.from(scoreLineIcons).filter((item) => item.src.indexOf('assets/images/score-icons/wrong.png') !== -1).length;
    modalWindowhScore.textContent = `Mistakes: ${amountOfMistakes}`;
    modalWindowIcon.src = GET_VAR('modalWindowIconLose');
    modalWindowText.textContent = 'You are lose!';
    modalWindow.classList.add('appear');
  }
};

const hideModalWindow = () => {
  const modalWindow = GET_VAR('modalWindow');
  setTimeout(() => {
    modalWindow.classList.remove('appear');
    hideOverlay();
    createStartPageCardSet(data);
  }, 3000);
};

export { createModalWindow, showModalWindow, hideModalWindow };
