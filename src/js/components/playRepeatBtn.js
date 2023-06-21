/* eslint-disable import/no-cycle */
import { createElement, playSound } from '../utils/helper';
import { GET_VAR } from '../utils/variables';

const createPlayRepeatBtn = () => {
  const button = createElement('button');
  button.type = 'button';
  button.classList.add('play-btn');
  button.textContent = 'play';

  return button;
};

const createPlayRepeatBtnFunctionality = () => {
  const playRepeatBtn = GET_VAR('playRepeatBtn');
  const soundsList = GET_VAR('soundsList');
  const currentSound = soundsList.at(-1);
  if (soundsList.length === 0) return;
  playSound(playRepeatBtn, currentSound);
  if (!playRepeatBtn.classList.contains('repeat')) {
    playRepeatBtn.classList.add('repeat');
  }
};

const resetPlayRepeatBtnState = () => {
  const playRepeatBtn = GET_VAR('playRepeatBtn');
  if (playRepeatBtn.classList.contains('repeat')) {
    playRepeatBtn.classList.remove('repeat');
  }
};

const setPlayRepeatBtnFunctionality = () => {
  const playRepeatBtn = GET_VAR('playRepeatBtn');
  playRepeatBtn.addEventListener('click', createPlayRepeatBtnFunctionality);
};

export {
  createPlayRepeatBtn, setPlayRepeatBtnFunctionality, resetPlayRepeatBtnState,
  createPlayRepeatBtnFunctionality,
};
