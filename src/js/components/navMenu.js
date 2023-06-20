/* eslint-disable import/no-cycle */
import {
  createElement, createStartPageCardSet, createCardsListSection,
  hideStatTable,
} from '../utils/helper';
import createNavMenuItem from './navMenuItem';
import { GET_VAR } from '../utils/variables';

const createNavMenu = (dataSet) => {
  // create nav ul
  const navMenuUl = createElement('ul');
  navMenuUl.classList.add('header-menu');
  const data = GET_VAR('data');

  for (let i = 0; i < dataSet.length; i += 1) {
    navMenuUl.append(createNavMenuItem(data[i].section));
  }

  return navMenuUl;
};

const openNavMenu = (headerNav) => {
  const headerMenu = GET_VAR('headerMenu');
  const navMenuLinks = GET_VAR('navMenuLinks');
  navMenuLinks.forEach((link) => {
    link.tabIndex = 0;
  });
  headerNav.classList.add('open');
  headerMenu.classList.remove('slide-out');
  headerMenu.classList.add('slide-in');
};

const closeNavMenu = (headerNav) => {
  const headerMenu = GET_VAR('headerMenu');
  const navMenuLinks = GET_VAR('navMenuLinks');
  headerNav.classList.remove('open');
  headerMenu.classList.remove('slide-in');
  headerMenu.classList.add('slide-out');
  navMenuLinks.forEach((link) => {
    link.tabIndex = -1;
  });
};

const setNavMenuActiveState = (links, category) => {
  links.forEach((link) => {
    const linkSection = link.dataset.section;
    if (linkSection === category) {
      link.classList.add('active');
    }
  });
};

const removeNavMenuActiveState = (links) => {
  links.forEach((link) => {
    link.classList.remove('active');
  });
};

const updateNavMeunLinksState = (category) => {
  const navMenuLinks = GET_VAR('navMenuLinks');
  removeNavMenuActiveState(navMenuLinks);
  setNavMenuActiveState(navMenuLinks, category);
};

const hamburgerMenuFunctionality = (event) => {
  const { target } = event;
  const categoryName = GET_VAR('categoryName');
  const hamburgerBtn = GET_VAR('hamburgerBtn');
  const { section } = target.dataset;
  categoryName.textContent = section;
  hideStatTable();
  if (section === 'Home') {
    createStartPageCardSet(GET_VAR('data'));
    hamburgerBtn.click();
  } else if (section === undefined) {
    return;
  } else {
    createCardsListSection(GET_VAR('data'), section);
    hamburgerBtn.click();
  }
  updateNavMeunLinksState(categoryName.textContent);
};

const setHamburgerMenuEventListener = () => {
  const headerMenu = GET_VAR('headerMenu');
  headerMenu.addEventListener('click', hamburgerMenuFunctionality);
};

export {
  createNavMenu, openNavMenu, closeNavMenu, hamburgerMenuFunctionality,
  setHamburgerMenuEventListener, updateNavMeunLinksState,
};
