import { createElement } from '../utils/helper';
import { GET_VAR } from '../utils/variables';
import { showOverlay, hideOverlay } from './overlay';
import { openNavMenu, closeNavMenu } from './navMenu';

const createNavMenuBtn = () => {
  // create nav button
  const navMenuBtn = createElement('a');
  navMenuBtn.classList.add('header-hamburger');
  navMenuBtn.href = '#';

  const span1 = createElement('span');
  const span2 = createElement('span');
  const span3 = createElement('span');

  navMenuBtn.append(span1);
  navMenuBtn.append(span2);
  navMenuBtn.append(span3);

  return navMenuBtn;
};

const navMenuBtnFunctionality = () => {
  const hamburgerBtn = GET_VAR('hamburgerBtn');
  const headerNav = GET_VAR('headerNav');
  hamburgerBtn.addEventListener('click', () => {
    if (headerNav.classList.contains('open')) {
      closeNavMenu(headerNav);
      hideOverlay();
    } else {
      openNavMenu(headerNav);
      showOverlay();
    }
  });
};

export { createNavMenuBtn, navMenuBtnFunctionality };
