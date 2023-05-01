import { createElement } from '../utils/helper';
import createNavMenuItem from './navMenuItem';
import { GET_VAR } from '../utils/variables';

const createNavMenu = (data) => {
  // create nav ul
  const navMenuUl = createElement('ul');
  navMenuUl.classList.add('header-menu');

  for (let i = 0; i < data.length; i += 1) {
    navMenuUl.append(createNavMenuItem(data[i].section));
  }

  return navMenuUl;
};

const openNavMenu = (headerNav) => {
  const headerMenu = GET_VAR('headerMenu');
  headerNav.classList.add('open');
  headerMenu.classList.remove('slide-out');
  headerMenu.classList.add('slide-in');
};

const closeNavMenu = (headerNav) => {
  const headerMenu = GET_VAR('headerMenu');
  headerNav.classList.remove('open');
  headerMenu.classList.remove('slide-in');
  headerMenu.classList.add('slide-out');
};

export { createNavMenu, openNavMenu, closeNavMenu };
