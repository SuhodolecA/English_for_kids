import { createElement, updateMode } from '../utils/helper';
import { SET_VAR, GET_VAR } from '../utils/variables';

const createToggle = () => {
  // create toggle
  const toggleBtn = createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.classList.add('toggle-button');
  toggleBtn.ariaPressed = false;

  // create toggle mode train
  const toggleModeTrain = createElement('span');
  toggleModeTrain.classList.add('toggle-button__mode');
  toggleModeTrain.classList.add('toggle-button__train');
  toggleModeTrain.textContent = 'Train';

  // create toggle mode play
  const toggleModePlay = createElement('span');
  toggleModePlay.classList.add('toggle-button__mode');
  toggleModePlay.classList.add('toggle-button__play');
  toggleModePlay.textContent = 'Play';

  toggleBtn.append(toggleModeTrain);
  toggleBtn.append(toggleModePlay);

  return toggleBtn;
};

const createToggleBtnFunctionality = () => {
  const toggleBtn = GET_VAR('toggleBtn');
  toggleBtn.ariaPressed = (toggleBtn.ariaPressed === 'false') ? 'true' : 'false';
  SET_VAR('isPlayMode', toggleBtn.ariaPressed);
  updateMode();
};

const setToggleBtnFunctionality = () => {
  const toggleBtn = GET_VAR('toggleBtn');
  toggleBtn.addEventListener('click', createToggleBtnFunctionality);
};

export { createToggle, setToggleBtnFunctionality };
