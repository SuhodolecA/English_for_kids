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
  SET_VAR('toggleBtn', document.querySelector('.toggle-button'));
  SET_VAR('isPlayMode', GET_VAR('toggleBtn').ariaPressed);
};

const updateMode = () => {
  const cardsList = GET_VAR('cardsList');
  const isPlayMode = GET_VAR('isPlayMode');
  if (isPlayMode === 'true') {
    cardsList.dataset.mode = 'play';
  } else {
    cardsList.dataset.mode = 'train';
  }
};

const createStartPageCardSet = (array) => {
  const cardsList = GET_VAR('cardsList');
  const categoryName = GET_VAR('categoryName');
  categoryName.textContent = 'Home';
  cardsList.classList.add('start-page');
  cardsList.dataset.category = 'main-menu';
  updateMode();
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.section !== 'home') {
      const imgPath = element.startImage;
      const imgAlt = element.sectionWords[0].alt;
      const cardTitle = element.sectionTitle;
      const cardItem = createCardItem(imgPath, imgAlt, cardTitle, cardTitle);
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
  updateMode();
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.sectionTitle === section) {
      const sectionData = element.sectionWords;
      sectionData.forEach((item) => {
        const imgPath = item.image;
        const imgAlt = item.alt;
        const cardSection = categoryName.textContent;
        const cardTitle = item.word;
        const cardTranslation = item.translation;
        const soundPath = item.audioSrc;
        const cardItem = createCardItem(
          imgPath,
          imgAlt,
          cardTitle,
          cardSection,
          cardTranslation,
          soundPath,
        );
        cardsList.append(cardItem);
      });
    }
  });
};

const playSound = (card, soundPath) => {
  if (!card.classList.contains('playing')) {
    const audio = new Audio(soundPath);
    audio.play();
    card.classList.add('playing');
    audio.addEventListener('ended', () => {
      card.classList.remove('playing');
    });
  }
};

const rotateCard = (element) => {
  console.log('rotate');
  element.classList.add('rotate');
};

const rotateBack = (element) => {
  element.classList.remove('rotate');
};

const trainModeFunctionality = (target, cardInner) => {
  if (target.classList.contains('rotate-btn')) {
    rotateCard(cardInner);
    cardInner.addEventListener('mouseleave', () => {
      rotateBack(cardInner);
    });
  } else if (!cardInner.classList.contains('rotate')) {
    const soundPath = target.closest('.card-list__item').dataset.sound;
    const card = target.closest('.card-list__item');
    playSound(card, soundPath);
  }
};

const isMainMenu = (element) => element.classList.contains('start-page');
const isCard = (element) => element.closest('.card-list__item');
const isTrainMode = (element) => element.dataset.mode === 'train';
const isPlayMode = (element) => element.dataset.mode === 'play';

export {
  createElement, setGlobalValues, capitalizeFirstWord,
  clearCardsListContainer, createStartPageCardSet,
  createCardsListSection, updateMode, playSound,
  rotateCard, rotateBack, isMainMenu, isCard, isTrainMode,
  isPlayMode, trainModeFunctionality,
};
