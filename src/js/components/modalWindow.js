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

  modalWindow.append(icon);
  modalWindow.append(text);

  return modalWindow;
};

const showModalWindow = () => {
  const modalWindow = GET_VAR('modalWindow');
  const modalWindowIcon = GET_VAR('modalWindowIcon');
  const modalWindowText = GET_VAR('modalWindowText');
  if (isGameOverSuccess()) {
    modalWindowIcon.src = GET_VAR('modalWindowIconWin');
    modalWindowText.textContent = 'You are win!';
    modalWindow.classList.add('appear');
  } else {
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
