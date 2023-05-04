import data from '../../assets/data/data.json';
import { createElement } from '../utils/helper';
import createNavMenuItem from './navMenuItem';
import { GET_VAR } from '../utils/variables';
import createStartPageCardSet from '../utils/createStartPageCardsList';
import createCardsListSection from '../utils/createCardsListSection';

const createNavMenu = (dataSet) => {
  // create nav ul
  const navMenuUl = createElement('ul');
  navMenuUl.classList.add('header-menu');

  for (let i = 0; i < dataSet.length; i += 1) {
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

const navigationMenuFunctionality = (event) => {
  const { target } = event;
  const categoryName = GET_VAR('categoryName');
  const hamburgerBtn = GET_VAR('hamburgerBtn');

  if (event.target.closest('.start-page')) {
    const { section } = event.target.closest('.card-list__item').dataset;
    categoryName.textContent = section;
    createCardsListSection(data, section);
  } else if (target.classList.contains('header-menu__item-link')) {
    const { section } = target.dataset;
    categoryName.textContent = section;
    if (section === 'Home') {
      createStartPageCardSet(data);
      hamburgerBtn.click();
    } else {
      createCardsListSection(data, section);
      hamburgerBtn.click();
    }
  }
};

const setNavMenuEventListener = () => {
  const headerMenu = GET_VAR('headerMenu');
  const cardsList = GET_VAR('cardsList');
  headerMenu.addEventListener('click', navigationMenuFunctionality);
  cardsList.addEventListener('click', navigationMenuFunctionality);
};

export {
  createNavMenu, openNavMenu, closeNavMenu, navigationMenuFunctionality,
  setNavMenuEventListener,
};
