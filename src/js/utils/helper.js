/* eslint-disable import/no-cycle */
import { SET_VAR, GET_VAR } from './variables';
import createCardItem from '../components/cardItem';

// create element
const createElement = (name) => {
  const element = document.createElement(name);
  return element;
};

const clearCardsListContainer = () => {
  const container = GET_VAR('cardsList');
  container.innerHTML = '';
};

const capitalizeFirstWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const setGlobalValues = () => {
  SET_VAR('categoryName', document.querySelector('.category-name'));
  SET_VAR('cardsList', document.querySelector('.cards-list'));
  SET_VAR('hamburgerBtn', document.querySelector('.header-hamburger'));
  SET_VAR('headerNav', document.querySelector('.header-nav'));
  SET_VAR('headerMenu', document.querySelector('.header-menu'));
  SET_VAR('navMenuLinks', document.querySelectorAll('.header-menu__item-link'));
  SET_VAR('overlay', document.querySelector('.overlay'));
  SET_VAR('body', document.querySelector('body'));
  SET_VAR('headerLogo', document.querySelector('.header-logo__link'));
};

const createStartPageCardSet = (array) => {
  const cardsList = GET_VAR('cardsList');
  const categoryName = GET_VAR('categoryName');
  categoryName.textContent = 'Home';
  cardsList.classList.add('start-page');
  cardsList.dataset.category = 'main-menu';
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.section !== 'home') {
      const imgPath = element.startImage;
      const imgAlt = element.sectionWords[0].alt;
      const cardTitle = element.sectionTitle;
      const cardItem = createCardItem(imgPath, imgAlt, cardTitle);
      cardsList.append(cardItem);
    }
  });
};

const createCardsListSection = (array, section) => {
  const cardsList = GET_VAR('cardsList');
  cardsList.classList.remove('start-page');
  const categoryName = GET_VAR('categoryName');
  categoryName.textContent = section;
  cardsList.dataset.category = section;
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.sectionTitle === section) {
      const sectionData = element.sectionWords;
      sectionData.forEach((item) => {
        const imgPath = item.image;
        const imgAlt = item.alt;
        const cardTitle = item.word;
        const cardTranslation = item.translation;
        const cardItem = createCardItem(imgPath, imgAlt, cardTitle, cardTranslation);
        cardsList.append(cardItem);
      });
    }
  });
};

export {
  createElement, setGlobalValues, capitalizeFirstWord,
  clearCardsListContainer, createStartPageCardSet,
  createCardsListSection,
};
