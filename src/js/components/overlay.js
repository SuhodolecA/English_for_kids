/* eslint-disable import/no-cycle */
import { createElement } from '../utils/helper';
import { GET_VAR } from '../utils/variables';
import { closeNavMenu } from './navMenu';

const createOverlay = () => {
  // create overlay element
  const overlayElement = createElement('div');
  overlayElement.classList.add('overlay');

  return overlayElement;
};

const hideOverlay = () => {
  const overlay = GET_VAR('overlay');
  const body = GET_VAR('body');
  body.classList.remove('noscroll');
  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');
};

const showOverlay = () => {
  const overlay = GET_VAR('overlay');
  const body = GET_VAR('body');
  body.classList.add('noscroll');
  overlay.classList.remove('fade-out');
  overlay.classList.add('fade-in');
};

const setOverlayFunctionality = () => {
  const overlay = GET_VAR('overlay');
  const headerNav = GET_VAR('headerNav');
  overlay.addEventListener('click', () => {
    if (headerNav.classList.contains('open')) {
      hideOverlay();
      closeNavMenu(headerNav);
    }
  });
};

export {
  createOverlay, showOverlay, hideOverlay, setOverlayFunctionality,
};
