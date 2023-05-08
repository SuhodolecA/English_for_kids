import { createElement, updateMode } from '../utils/helper';
import { SET_VAR, GET_VAR } from '../utils/variables';

const createToggle = () => {
  // create toggle
  const toggleBtn = createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.classList.add('toggle-button');
  toggleBtn.ariaPressed = false;

  // create toggle mode-1
  const toggleMode1 = createElement('span');
  toggleMode1.classList.add('toggle-button__mode');
  toggleMode1.classList.add('toggle-button__train');
  toggleMode1.textContent = 'Train';

  // create toggle mode-2
  const toggleMode2 = createElement('span');
  toggleMode2.classList.add('toggle-button__mode');
  toggleMode2.classList.add('toggle-button__play');
  toggleMode2.textContent = 'Play';

  toggleBtn.append(toggleMode1);
  toggleBtn.append(toggleMode2);

  return toggleBtn;
};

//  stop here!!!!!!!! add and remove play class
const toggleBtnFunctionality = () => {
  const toggleBtn = GET_VAR('toggleBtn');
  toggleBtn.ariaPressed = (toggleBtn.ariaPressed === 'false') ? 'true' : 'false';
  SET_VAR('isPlayMode', toggleBtn.ariaPressed);
  updateMode();
};

const setToggleBtnFunctionality = () => {
  const toggleBtn = GET_VAR('toggleBtn');
  toggleBtn.addEventListener('click', toggleBtnFunctionality);
};

export { createToggle, toggleBtnFunctionality, setToggleBtnFunctionality };
